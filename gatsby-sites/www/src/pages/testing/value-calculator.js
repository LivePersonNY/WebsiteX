// src/pages/index.js
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable'; // This extends jsPDF prototype
import Papa from 'papaparse';
import NotFoundPage from '../404';
import { Helmet } from "react-helmet";
import Layout from '../../components/Layout';
import '../../resources/css/ValueCalculator.css';
import Seo from '../../components/Seo';

// Register Chart.js components and plugin
Chart.register(...registerables, ChartDataLabels);

// Utility function to show messages (can be replaced by a proper toast library in a real app)
const showMessage = (message, isError = true) => {
    const messageDiv = document.getElementById('error');
    if (messageDiv) {
        messageDiv.classList.remove('d-none'); // Bootstrap equivalent of hidden
        messageDiv.textContent = message;
        if (isError) {
            messageDiv.classList.remove('bg-success-subtle', 'border-success', 'text-success'); // Bootstrap color mapping
            messageDiv.classList.add('bg-danger-subtle', 'border-danger', 'text-danger'); // Bootstrap color mapping
        } else {
            messageDiv.classList.remove('bg-danger-subtle', 'border-danger', 'text-danger'); // Bootstrap color mapping
            messageDiv.classList.add('bg-success-subtle', 'border-success', 'text-success'); // Bootstrap color mapping
        }
        setTimeout(() => messageDiv.classList.add('d-none'), 3000); // Hide after 3 seconds
    } else {
        console.warn('Error message div not found!');
    }
};

// Common Components
const InputField = ({ label, value, onChange, type = 'number', placeholder = '', min = 0, max, step = 1, unit = '', error = '' }) => (
    <div className="mb-3">
        <label className="form-label text-secondary fw-semibold" htmlFor={label.replace(/\s/g, '-')}>
            {label}
        </label>
        <div className="position-relative">
            <input
                id={label.replace(/\s/g, '-')}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                min={min}
                max={max}
                step={step}
                aria-label={label}
                aria-invalid={!!error}
                aria-describedby={error ? `${label.replace(/\s/g, '-')}-error` : undefined}
                className={`form-control shadow-sm ${error ? 'is-invalid border-danger' : 'border-secondary-subtle'} rounded`}
            />
            {unit && (
                <span className="position-absolute end-0 top-50 translate-middle-y pe-3 text-secondary-emphasis fs-6">
                    {unit}
                </span>
            )}
        </div>
        {error && (
            <div id={`${label.replace(/\s/g, '-')}-error`} className="invalid-feedback d-block">
                {error}
            </div>
        )}
    </div>
);

const ResultCard = ({ title, value, unit = '', isMonetary = false, isPositiveImpact = true, description = '', customTextColorClass = '' }) => {
    const defaultTextColorClass = isPositiveImpact ? 'text-success' : 'text-danger';
    const textColorClass = customTextColorClass || defaultTextColorClass;
    const formattedValue = typeof value === 'number' ? value.toLocaleString() : value;
    const displayValue = isMonetary ? `$${formattedValue}` : formattedValue;

    return (
        <div className="card bg-info-subtle border-info rounded shadow-sm text-center p-3 d-flex flex-column justify-content-center align-items-center">
            <h3 className="card-title fs-5 fw-medium text-info-emphasis mb-2">{title}</h3>
            <p className={`fs-2 fw-bold ${textColorClass}`}>
                {displayValue}{unit}
            </p>
            {description && (
                <p className="card-text text-secondary fs-6 mt-2">{description}</p>
            )}
        </div>
    );
};

const SectionTitle = ({ children }) => (
    <h2 className="fs-3 fw-semibold text-secondary mb-4 pb-2 border-bottom">
        {children}
    </h2>
);

// Export functions for PDF and CSV (consolidated here)
const exportRetailBankPDF = (results, inputs) => {
    if (!results) {
        showMessage('Please calculate valid results before exporting.', true);
        return;
    }
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    let yPos = 20;

    doc.setFontSize(18);
    doc.setTextColor(55, 65, 81); // Keep RGB for PDF
    doc.text('LivePerson Impact Calculator - Retail Bank', pageWidth / 2, yPos, { align: 'center' });
    yPos += 15;

    const tableHeaders = [['Parameter', 'Value', 'Unit']];
    const inputRows = [
        ['Annual Voice Volume', inputs.annualVoiceVolume.toLocaleString(), 'contacts'],
        ['Average Cost Per Voice Contact', `$${inputs.costPerVoiceContact.toLocaleString()}`, '$'],
        ['Annual Message Volume', inputs.annualMessageVolume.toLocaleString(), 'contacts'],
        ['Average Cost Per Message Contact', `$${inputs.costPerMessageContact.toLocaleString()}`, '$'],
        ['Annual Email Volume', inputs.annualEmailVolume.toLocaleString(), 'contacts'],
        ['Average Cost Per Email Contact', `$${inputs.costPerEmailContact.toLocaleString()}`, '$'],
        ['Average Agent Salary', `$${inputs.avgAgentSalary.toLocaleString()}`, '$'],
        ['Voice-to-Message Deflection Rate', `${inputs.voiceToMessageDeflectionRate}%`, '%'],
        ['Email-to-Message Deflection Rate', `${inputs.emailToMessageDeflectionRate}%`, '%'],
        ['Agent Productivity Increase', `${inputs.agentProductivityIncrease}%`, '%'],
        ['Messages Contained by AI Automation', `${inputs.messagesContainedByAI}%`, '%'],
        ['Email Contained by AI Automation', `${inputs.emailContainedByAI}%`, '%'],
        ['Current Digital Self-Service Adoption Rate', `${inputs.currentDigitalAdoption}%`, '%'],
        ['Current Cross-Sell/Upsell Conversion Rate', `${inputs.currentCrossSellRate.toLocaleString()}%`, '%'],
        ['Average Revenue Per Successful Cross-Sell', `$${inputs.avgRevenuePerCrossSell.toLocaleString()}`, '$'],
        ['Annual Customer Churn', inputs.annualCustomerChurn.toLocaleString(), 'customers'],
        ['Avg Revenue Lost Per Churned Customer', `$${inputs.avgRevenuePerCustomerChurn.toLocaleString()}`, '$'],
        ['Annual Fraud/Security Incidents', inputs.annualFraudIncidents.toLocaleString(), 'incidents'],
        ['Average Cost Per Fraud/Security Incident', inputs.avgCostPerFraudIncident.toLocaleString(), '$'],
        ['Cross-Sell Conversion Boost', `${inputs.crossSellConversionBoost}%`, '%'],
        ['CSAT-Driven Churn Reduction', `${inputs.csatChurnReduction}%`, '%'],
        ['Fraud Incident Reduction Rate', `${inputs.fraudReductionRate}%`, '%']
    ];

    doc.setFontSize(12);
    doc.text('Input Parameters', 20, yPos);
    yPos += 5;

    doc.autoTable({
        startY: yPos,
        head: tableHeaders,
        body: inputRows,
        theme: 'striped',
        styles: { fontSize: 10, cellPadding: 2, textColor: [55, 65, 81] },
        headStyles: { fillColor: [79, 70, 229], textColor: [255, 255, 255], fontStyle: 'bold' },
        didDrawPage: function (data) {
            yPos = data.cursor.y + 5;
        }
    });

    doc.addPage();
    yPos = 20;
    doc.setFontSize(14);
    doc.setTextColor(55, 65, 81);
    doc.text('Estimated LivePerson Impact', 20, yPos);
    yPos += 10;

    doc.setFontSize(12);
    doc.setTextColor(79, 70, 229);
    doc.text('Customer Care Impact (Year 1)', 20, yPos + 5);
    yPos += 10;
    let resultData1 = [
        ['Voice-to-Message Deflection', Math.round(results.voiceToMessageDeflectedY1).toLocaleString(), 'contacts', `AI-powered routing shifts voice calls to message. (${inputs.annualVoiceVolume.toLocaleString()} voice * ${inputs.voiceToMessageDeflectionRate}% deflection)`],
        ['Email-to-Message Deflection', Math.round(results.emailToMessageDeflectedY1).toLocaleString(), 'contacts', `Manage, analyze and respond to emails from the same agent workspace as messages. (${inputs.annualEmailVolume.toLocaleString()} email * ${inputs.emailToMessageDeflectionRate}% deflection)`],
        ['Cost Savings from Voice-to-Message Deflection', `$${Math.round(results.csVoiceToMessageDeflectionSavings.y1).toLocaleString()}`, '', `Savings from handling interactions on cheaper messaging channels.`],
        ['Cost Savings from Email-to-Message Deflection', `$${Math.round(results.csEmailToMessageDeflectionSavings.y1).toLocaleString()}`, '', `Savings from handling emails on cheaper messaging channels.`],
        ['Productivity Savings (Agent Efficiency)', `$${Math.round(results.csProductivitySavings.y1).toLocaleString()}`, '', `AI Agent Assist tools provide real-time suggestions and context.`],
        ['Cost Savings from AI Message Containment', `$${Math.round(results.csAIMessageContainmentSavings.y1).toLocaleString()}`, '', `AI bots resolve messages end-to-end.`],
        ['Cost Savings from AI Email Containment', `$${Math.round(results.csAIEmailContainmentSavings.y1).toLocaleString()}`, '', `AI bots resolve emails end-to-end.`]
    ];
    doc.autoTable({
        startY: yPos,
        head: [['Metric', 'Value', 'Unit', 'Description']],
        body: resultData1,
        theme: 'striped',
        styles: { fontSize: 10, cellPadding: 2, textColor: [55, 65, 81] },
        headStyles: { fillColor: [79, 70, 229], textColor: [255, 255, 255], fontStyle: 'bold' },
        columnStyles: {
            0: { cellWidth: 50 },
            1: { cellWidth: 30, halign: 'right' },
            2: { cellWidth: 20 },
            3: { cellWidth: 80 }
        },
        didDrawPage: function (data) {
            yPos = data.cursor.y + 5;
        }
    });

    doc.setFontSize(12);
    doc.setTextColor(79, 70, 229);
    doc.text('Industry Specific Impact (Retail Bank - Year 1)', 20, yPos + 10);
    yPos += 15;
    let resultData2 = [
        ['Additional Cross-Sell Revenue', `$${Math.round(results.indCrossSellRevenue.y1).toLocaleString()}`, '', `AI identifies customer needs and offers relevant products.`],
        ['Churn Reduction Savings', `$${Math.round(results.indChurnSavings.y1).toLocaleString()}`, '', `Improved CSAT leads to higher retention.`],
        ['Fraud/Security Incident Savings', `$${Math.round(results.indFraudSavings.y1).toLocaleString()}`, '', `AI-driven triage reduces fraud losses.`]
    ];
    doc.autoTable({
        startY: yPos,
        head: [['Metric', 'Value', 'Unit', 'Description']],
        body: resultData2,
        theme: 'striped',
        styles: { fontSize: 10, cellPadding: 2, textColor: [55, 65, 81] },
        headStyles: { fillColor: [79, 70, 229], textColor: [255, 255, 255], fontStyle: 'bold' },
        columnStyles: {
            0: { cellWidth: 50 },
            1: { cellWidth: 30, halign: 'right' },
            2: { cellWidth: 20 },
            3: { cellWidth: 80 }
        },
        didDrawPage: function (data) {
            yPos = data.cursor.y + 5;
        }
    });

    doc.setFontSize(12);
    doc.setTextColor(147, 51, 234);
    doc.text('3-Year Ramped (50%, 75%, 100%) Value Summary', 20, yPos + 10);
    yPos += 15;
    const summaryData = [
        ['Total Annual Savings', `$${Math.round(results.totalSavingsY1).toLocaleString()}`, `$${Math.round(results.totalSavingsY2).toLocaleString()}`, `$${Math.round(results.totalSavingsY3).toLocaleString()}`, `$${Math.round(results.cumulativeSavings3Y).toLocaleString()}`],
        ['Total Annual Revenue Gain', `$${Math.round(results.totalRevenueGainY1).toLocaleString()}`, `$${Math.round(results.totalRevenueGainY2).toLocaleString()}`, `$${Math.round(results.totalRevenueGainY3).toLocaleString()}`, `$${Math.round(results.cumulativeRevenue3Y).toLocaleString()}`],
        ['Net Annual Benefit', `$${Math.round(results.netBenefitY1).toLocaleString()}`, `$${Math.round(results.netBenefitY2).toLocaleString()}`, `$${Math.round(results.netBenefitY3).toLocaleString()}`, `$${Math.round(results.cumulativeNetBenefit3Y).toLocaleString()}`]
    ];
    doc.autoTable({
        startY: yPos,
        head: [['Metric', 'Year 1', 'Year 2', 'Year 3', 'Cumulative 3Y']],
        body: summaryData,
        theme: 'grid',
        styles: { fontSize: 10, cellPadding: 2, textColor: [55, 65, 81] },
        headStyles: { fillColor: [79, 70, 229], textColor: [255, 255, 255], fontStyle: 'bold' },
        columnStyles: {
            1: { halign: 'right' },
            2: { halign: 'right' },
            3: { halign: 'right' },
            4: { halign: 'right', fontStyle: 'bold' }
        }
    });

    doc.save('retail_bank_results.pdf');
    showMessage('PDF exported successfully!', false);
};

const exportAirlinePDF = (results, inputs) => {
    if (!results) {
        showMessage('Please calculate valid results before exporting.', true);
        return;
    }
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    let yPos = 20;

    doc.setFontSize(18);
    doc.setTextColor(55, 65, 81);
    doc.text('LivePerson Impact Calculator - Airline', pageWidth / 2, yPos, { align: 'center' });
    yPos += 15;

    const tableHeaders = [['Parameter', 'Value', 'Unit']];
    const inputRows = [
        ['Annual Voice Volume', inputs.annualVoiceVolume.toLocaleString(), 'contacts'],
        ['Average Cost Per Voice Contact', `$${inputs.costPerVoiceContact.toLocaleString()}`, '$'],
        ['Annual Message Volume', inputs.annualMessageVolume.toLocaleString(), 'contacts'],
        ['Average Cost Per Message Contact', `$${inputs.costPerMessageContact.toLocaleString()}`, '$'],
        ['Annual Email Volume', inputs.annualEmailVolume.toLocaleString(), 'contacts'],
        ['Average Cost Per Email Contact', `$${inputs.costPerEmailContact.toLocaleString()}`, '$'],
        ['Major IROPS Events Per Year', inputs.iropsEventsPerYear.toLocaleString(), 'events'],
        ['Average Cost Per IROPS Event', `$${inputs.avgCostPerIropsEvent.toLocaleString()}`, '$'],
        ['Total Passengers Annually', inputs.totalPassengersAnnually.toLocaleString(), 'pax'],
        ['Average Ancillary Revenue Per Passenger', `$${inputs.avgAncillaryRevenuePerPax.toLocaleString()}`, '$'],
        ['Annual Rebooking/Compensation Cost', `$${inputs.annualRebookingCompensationCost.toLocaleString()}`, '$'],
        ['Total Active Loyalty Members', inputs.totalActiveLoyaltyMembers.toLocaleString(), 'members'],
        ['Average Annual Revenue Per Loyalty Member', `$${inputs.avgRevenuePerLoyaltyMember.toLocaleString()}`, '$'],
        ['Current On-Time Departure (OTD) Rate', `${inputs.currentOTDRate}%`, '%'],
        ['Value Per 1% OTD Improvement', `$${inputs.valuePerOTDPoint.toLocaleString()}`, '$'],
        ['Annual Mishandled Baggage Incidents', inputs.annualMishandledBaggage.toLocaleString(), 'incidents'],
        ['Cost Per Mishandled Baggage Incident', `$${inputs.costPerMishandledBaggage.toLocaleString()}`, '$'],
        ['Voice-to-Message Deflection Rate', `${inputs.voiceToMessageDeflectionRate}%`, '%'],
        ['Email-to-Message Deflection Rate', `${inputs.emailToMessageDeflectionRate}%`, '%'],
        ['Messages Contained by AI Automation', `${inputs.messagesContainedByAI}%`, '%'],
        ['Email Contained by AI Automation', `${inputs.emailContainedByAI}%`, '%'],
        ['IROPS Cost Reduction Rate', `${inputs.iropsCostReduction}%`, '%'],
        ['Ancillary Revenue Increase Rate', `${inputs.ancillaryRevenueIncrease}%`, '%'],
        ['Rebooking/Compensation Cost Reduction', `${inputs.rebookingCostReductionRate}%`, '%'],
        ['Loyalty Member Retention Increase', `${inputs.loyaltyMemberRetentionIncrease}%`, '%'],
        ['OTD Improvement', `${inputs.otdImprovementPoints}%`, '%'],
        ['Baggage Handling Efficiency', `${inputs.baggageHandlingEfficiency}%`, '%']
    ];

    doc.setFontSize(12);
    doc.text('Input Parameters', 20, yPos);
    yPos += 5;

    doc.autoTable({
        startY: yPos,
        head: tableHeaders,
        body: inputRows,
        theme: 'striped',
        styles: { fontSize: 10, cellPadding: 2, textColor: [55, 65, 81] },
        headStyles: { fillColor: [79, 70, 229], textColor: [255, 255, 255], fontStyle: 'bold' },
        didDrawPage: function (data) {
            yPos = data.cursor.y + 5;
        }
    });

    doc.addPage();
    yPos = 20;
    doc.setFontSize(14);
    doc.setTextColor(55, 65, 81);
    doc.text('Estimated LivePerson Impact', 20, yPos);
    yPos += 10;

    doc.setFontSize(12);
    doc.setTextColor(79, 70, 229);
    doc.text('Customer Care Impact (Year 1)', 20, yPos + 5);
    yPos += 10;
    let resultData1 = [
        ['Voice-to-Message Deflection', Math.round(results.voiceToMessageDeflectedY1).toLocaleString(), 'contacts', `AI-powered routing shifts voice calls to message.`],
        ['Email-to-Message Deflection', Math.round(results.emailToMessageDeflectedY1).toLocaleString(), 'contacts', `Manage, analyze and respond to emails from the same agent workspace as messages.`],
        ['Cost Savings from Voice-to-Message Deflection', `$${Math.round(results.csDeflectionSavingsVoiceMessage.y1).toLocaleString()}`, '', `Savings from handling interactions on cheaper messaging channels.`],
        ['Cost Savings from Email-to-Message Deflection', `$${Math.round(results.csEmailToMessageDeflectionSavings.y1).toLocaleString()}`, '', `Savings from handling emails on cheaper messaging channels.`],
        ['Cost Savings from AI Message Containment', `$${Math.round(results.csAIMessageContainmentSavings.y1).toLocaleString()}`, '', `AI bots resolve contacts end-to-end.`]
    ];
    doc.autoTable({
        startY: yPos,
        head: [['Metric', 'Value', 'Unit', 'Description']],
        body: resultData1,
        theme: 'striped',
        styles: { fontSize: 10, cellPadding: 2, textColor: [55, 65, 81] },
        headStyles: { fillColor: [79, 70, 229], textColor: [255, 255, 255], fontStyle: 'bold' },
        columnStyles: {
            0: { cellWidth: 50 },
            1: { cellWidth: 30, halign: 'right' },
            2: { cellWidth: 20 },
            3: { cellWidth: 80 }
        },
        didDrawPage: function (data) {
            yPos = data.cursor.y + 5;
        }
    });

    doc.setFontSize(12);
    doc.setTextColor(79, 70, 229);
    doc.text('Industry Specific Impact (Airline - Year 1)', 20, yPos + 10);
    yPos += 15;
    let resultData2 = [
        ['IROPS Management Savings', `$${Math.round(results.indIropsSavings.y1).toLocaleString()}`, '', `Automated notifications reduce call spikes.`],
        ['Additional Ancillary Revenue', `$${Math.round(results.indAncillaryRevenue.y1).toLocaleString()}`, '', `AI-driven personalized offers for upgrades.`],
        ['Rebooking/Compensation Savings', `$${Math.round(results.indRebookingSavings.y1).toLocaleString()}`, '', `Bots guide passengers through rebooking.`],
        ['Loyalty Retention Revenue', `$${Math.round(results.indLoyaltyRevenue.y1).toLocaleString()}`, '', `Improved CSAT boosts retention.`],
        ['OTD Improvement', `$${Math.round(results.indOTDSavings.y1).toLocaleString()}`, '', `Better on-time performance.`],
        ['Baggage Handling Efficiency', `$${Math.round(results.indBaggageHandlingSavings.y1).toLocaleString()}`, '', `Automated tracking reduces incidents.`]
    ];
    doc.autoTable({
        startY: yPos,
        head: [['Metric', 'Value', 'Unit', 'Description']],
        body: resultData2,
        theme: 'striped',
        styles: { fontSize: 10, cellPadding: 2, textColor: [55, 65, 81] },
        headStyles: { fillColor: [79, 70, 229], textColor: [255, 255, 255], fontStyle: 'bold' },
        columnStyles: {
            0: { cellWidth: 50 },
            1: { cellWidth: 30, halign: 'right' },
            2: { cellWidth: 20 },
            3: { cellWidth: 80 }
        },
        didDrawPage: function (data) {
            yPos = data.cursor.y + 5;
        }
    });

    doc.setFontSize(12);
    doc.setTextColor(147, 51, 234);
    doc.text('3-Year Ramped (50%, 75%, 100%) Value Summary', 20, yPos + 10);
    yPos += 15;
    const summaryData = [
        ['Total Annual Savings', `$${Math.round(results.totalSavingsY1).toLocaleString()}`, `$${Math.round(results.totalSavingsY2).toLocaleString()}`, `$${Math.round(results.totalSavingsY3).toLocaleString()}`, `$${Math.round(results.cumulativeSavings3Y).toLocaleString()}`],
        ['Total Annual Revenue Gain', `$${Math.round(results.totalRevenueGainY1).toLocaleString()}`, `$${Math.round(results.totalRevenueGainY2).toLocaleString()}`, `$${Math.round(results.totalRevenueGainY3).toLocaleString()}`, `$${Math.round(results.cumulativeRevenue3Y).toLocaleString()}`],
        ['Net Annual Benefit', `$${Math.round(results.netBenefitY1).toLocaleString()}`, `$${Math.round(results.netBenefitY2).toLocaleString()}`, `$${Math.round(results.netBenefitY3).toLocaleString()}`, `$${Math.round(results.cumulativeNetBenefit3Y).toLocaleString()}`]
    ];
    doc.autoTable({
        startY: yPos,
        head: [['Metric', 'Year 1', 'Year 2', 'Year 3', 'Cumulative 3Y']],
        body: summaryData,
        theme: 'grid',
        styles: { fontSize: 10, cellPadding: 2, textColor: [55, 65, 81] },
        headStyles: { fillColor: [79, 70, 229], textColor: [255, 255, 255], fontStyle: 'bold' },
        columnStyles: {
            1: { halign: 'right' },
            2: { halign: 'right' },
            3: { halign: 'right' },
            4: { halign: 'right', fontStyle: 'bold' }
        }
    });

    doc.save('airline_results.pdf');
    showMessage('PDF exported successfully!', false);
};

const exportTelecomPDF = (results, inputs) => {
    if (!results) {
        showMessage('Please calculate valid results before exporting.', true);
        return;
    }
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    let yPos = 20;

    doc.setFontSize(18);
    doc.setTextColor(55, 65, 81);
    doc.text('LivePerson Impact Calculator - Telecommunications', pageWidth / 2, yPos, { align: 'center' });
    yPos += 15;

    const tableHeaders = [['Parameter', 'Value', 'Unit']];
    const inputRows = [
        ['Annual Voice Volume', inputs.annualVoiceVolume.toLocaleString(), 'contacts'],
        ['Average Cost Per Voice Contact', `$${inputs.costPerVoiceContact.toLocaleString()}`, '$'],
        ['Annual Message Volume', inputs.annualMessageVolume.toLocaleString(), 'contacts'],
        ['Average Cost Per Message Contact', `$${inputs.costPerMessageContact.toLocaleString()}`, '$'],
        ['Annual Email Volume', inputs.annualEmailVolume.toLocaleString(), 'contacts'],
        ['Average Cost Per Email Contact', `$${inputs.costPerEmailContact.toLocaleString()}`, '$'],
        ['Average Agent Salary', `$${inputs.avgAgentSalary.toLocaleString()}`, '$'],
        ['Voice-to-Message Deflection Rate', `${inputs.voiceToMessageDeflectionRate}%`, '%'],
        ['Email-to-Message Deflection Rate', `${inputs.emailToMessageDeflectionRate}%`, '%'],
        ['Agent Productivity Increase', `${inputs.agentProductivityIncrease}%`, '%'],
        ['Messages Contained by AI Automation', `${inputs.messagesContainedByAI}%`, '%'],
        ['Email Contained by AI Automation', `${inputs.emailContainedByAI}%`, '%'],
        ['CSAT-Driven Churn Reduction', `${inputs.csatChurnReduction}%`, '%'],
        ['Upsell Conversion Boost', `${inputs.upsellConversionBoost}%`, '%'],
        ['Annual Billing Disputes', inputs.annualBillingDisputes.toLocaleString(), 'disputes'],
        ['Cost Per Billing Dispute', `$${inputs.costPerBillingDispute.toLocaleString()}`, '$'],
        ['Billing Dispute Reduction', `${inputs.billingDisputeReduction}%`, '%']
    ];

    doc.setFontSize(12);
    doc.text('Input Parameters', 20, yPos);
    yPos += 5;

    doc.autoTable({
        startY: yPos,
        head: tableHeaders,
        body: inputRows,
        theme: 'striped',
        styles: { fontSize: 10, cellPadding: 2, textColor: [55, 65, 81] },
        headStyles: { fillColor: [79, 70, 229], textColor: [255, 255, 255], fontStyle: 'bold' },
        didDrawPage: function (data) { yPos = data.cursor.y + 5; }
    });

    doc.addPage();
    yPos = 20;
    doc.setFontSize(14);
    doc.setTextColor(55, 65, 81);
    doc.text('Estimated LivePerson Impact', 20, yPos);
    yPos += 10;

    doc.setFontSize(12);
    doc.setTextColor(79, 70, 229);
    doc.text('Customer Care Impact (Year 1)', 20, yPos + 5);
    yPos += 10;
    let resultData1 = [
        ['Voice-to-Message Deflection', Math.round(results.voiceToMessageDeflectedY1).toLocaleString(), 'contacts', `AI-powered routing shifts voice calls to message.`],
        ['Email-to-Message Deflection', Math.round(results.emailToMessageDeflectedY1).toLocaleString(), 'contacts', `Manage, analyze and respond to emails from the same agent workspace as messages.`],
        ['Cost Savings from Voice-to-Message Deflection', `$${Math.round(results.csVoiceToMessageDeflectionSavings.y1).toLocaleString()}`, '', `Savings from handling interactions on cheaper messaging channels.`],
        ['Cost Savings from Email-to-Message Deflection', `$${Math.round(results.csEmailToMessageDeflectionSavings.y1).toLocaleString()}`, '', `Savings from handling emails on cheaper messaging channels.`],
        ['Productivity Savings (Agent Efficiency)', `$${Math.round(results.csProductivitySavings.y1).toLocaleString()}`, '', `AI Agent Assist tools provide real-time suggestions and context.`],
        ['Cost Savings from AI Message Containment', `$${Math.round(results.csAIMessageContainmentSavings.y1).toLocaleString()}`, '', `AI bots resolve messages end-to-end.`],
        ['Cost Savings from AI Email Containment', `$${Math.round(results.csAIEmailContainmentSavings.y1).toLocaleString()}`, '', `AI bots resolve emails end-to-end.`]
    ];
    doc.autoTable({
        startY: yPos,
        head: [['Metric', 'Value', 'Unit', 'Description']],
        body: resultData1,
        theme: 'striped',
        styles: { fontSize: 10, cellPadding: 2, textColor: [55, 65, 81] },
        headStyles: { fillColor: [79, 70, 229], textColor: [255, 255, 255], fontStyle: 'bold' },
        columnStyles: {
            0: { cellWidth: 50 },
            1: { cellWidth: 30, halign: 'right' },
            2: { cellWidth: 20 },
            3: { cellWidth: 80 }
        },
        didDrawPage: function (data) {
            yPos = data.cursor.y + 5;
        }
    });

    doc.setFontSize(12);
    doc.setTextColor(79, 70, 229);
    doc.text('Industry Specific Impact (Telecommunications - Year 1)', 20, yPos + 10);
    yPos += 15;
    let resultData2 = [
        ['Churn Reduction Savings', `$${Math.round(results.indChurnSavings.y1).toLocaleString()}`, '', `Improved CSAT leads to higher retention.`],
        ['Additional Upsell Revenue', `$${Math.round(results.indUpsellRevenue.y1).toLocaleString()}`, '', `AI identifies customer needs and offers relevant products.`],
        ['Billing Dispute Savings', `$${Math.round(results.indBillingDisputeSavings.y1).toLocaleString()}`, '', `Automated handling reduces dispute costs.`]
    ];
    doc.autoTable({
        startY: yPos,
        head: [['Metric', 'Value', 'Unit', 'Description']],
        body: resultData2,
        theme: 'striped',
        styles: { fontSize: 10, cellPadding: 2, textColor: [55, 65, 81] },
        headStyles: { fillColor: [79, 70, 229], textColor: [255, 255, 255], fontStyle: 'bold' },
        columnStyles: {
            0: { cellWidth: 50 },
            1: { cellWidth: 30, halign: 'right' },
            2: { cellWidth: 20 },
            3: { cellWidth: 80 }
        },
        didDrawPage: function (data) {
            yPos = data.cursor.y + 5;
        }
    });

    doc.setFontSize(12);
    doc.setTextColor(147, 51, 234);
    doc.text('3-Year Ramped (50%, 75%, 100%) Value Summary', 20, yPos + 10);
    yPos += 15;
    const summaryData = [
        ['Total Annual Savings', `$${Math.round(results.totalSavingsY1).toLocaleString()}`, `$${Math.round(results.totalSavingsY2).toLocaleString()}`, `$${Math.round(results.totalSavingsY3).toLocaleString()}`, `$${Math.round(results.cumulativeSavings3Y).toLocaleString()}`],
        ['Total Annual Revenue Gain', `$${Math.round(results.totalRevenueGainY1).toLocaleString()}`, `$${Math.round(results.totalRevenueGainY2).toLocaleString()}`, `$${Math.round(results.totalRevenueGainY3).toLocaleString()}`, `$${Math.round(results.cumulativeRevenue3Y).toLocaleString()}`],
        ['Net Annual Benefit', `$${Math.round(results.netBenefitY1).toLocaleString()}`, `$${Math.round(results.netBenefitY2).toLocaleString()}`, `$${Math.round(results.netBenefitY3).toLocaleString()}`, `$${Math.round(results.cumulativeNetBenefit3Y).toLocaleString()}`]
    ];
    doc.autoTable({
        startY: yPos,
        head: [['Metric', 'Year 1', 'Year 2', 'Year 3', 'Cumulative 3Y']],
        body: summaryData,
        theme: 'grid',
        styles: { fontSize: 10, cellPadding: 2, textColor: [55, 65, 81] },
        headStyles: { fillColor: [79, 70, 229], textColor: [255, 255, 255], fontStyle: 'bold' },
        columnStyles: {
            1: { halign: 'right' },
            2: { halign: 'right' },
            3: { halign: 'right' },
            4: { halign: 'right', fontStyle: 'bold' }
        }
    });

    doc.save('telecom_results.pdf');
    showMessage('PDF exported successfully!', false);
};

const exportCSV = (results, inputs, calculatorType) => {
    if (!results) {
        showMessage('Please calculate valid results before exporting.', true);
        return;
    }

    const data = [
        { Section: 'Inputs', ...inputs },
        {
            Section: 'Results',
            'Year 1 Savings': results.totalSavingsY1,
            'Year 1 Revenue': results.totalRevenueGainY1,
            'Year 1 Net Benefit': results.netBenefitY1,
            'Year 2 Savings': results.totalSavingsY2,
            'Year 2 Revenue': results.totalRevenueGainY2,
            'Year 2 Net Benefit': results.netBenefitY2,
            'Year 3 Savings': results.totalSavingsY3,
            'Year 3 Revenue': results.totalRevenueGainY3,
            'Year 3 Net Benefit': results.netBenefitY3,
            'Cumulative 3Y Savings': results.cumulativeSavings3Y,
            'Cumulative 3Y Revenue': results.cumulativeRevenue3Y,
            'Cumulative 3Y Net Benefit': results.cumulativeNetBenefit3Y
        }
    ];
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${calculatorType}_results.csv`;
    a.click();
    URL.revokeObjectURL(url);
    showMessage('CSV exported successfully!', false);
};


// Retail Bank Calculator
const RetailBankCalculator = ({ setChartData }) => {
    const defaultInputs = {
        annualVoiceVolume: 700000,
        annualMessageVolume: 200000,
        annualEmailVolume: 100000,
        costPerVoiceContact: 5.00,
        costPerMessageContact: 1.50,
        costPerEmailContact: 2.00,
        avgAgentSalary: 50000,
        currentDigitalAdoption: 30,
        currentCrossSellRate: 2,
        avgRevenuePerCrossSell: 200,
        annualCustomerChurn: 10000,
        avgRevenuePerCustomerChurn: 300,
        annualFraudIncidents: 500,
        avgCostPerFraudIncident: 1000,
        voiceToMessageDeflectionRate: 40,
        emailToMessageDeflectionRate: 20,
        messagesContainedByAI: 40,
        emailContainedByAI: 20,
        agentProductivityIncrease: 15,
        crossSellConversionBoost: 3,
        csatChurnReduction: 5,
        fraudReductionRate: 10,
    };

    const [inputs, setInputs] = useState(defaultInputs);
    const [errors, setErrors] = useState({});
    const [results, setResults] = useState(null);

    const validateInput = (name, value) => {
        if (isNaN(value) || value < 0) return 'Value cannot be negative or invalid';
        if (['currentDigitalAdoption', 'voiceToMessageDeflectionRate', 'emailToMessageDeflectionRate', 'messagesContainedByAI', 'emailContainedByAI', 'agentProductivityIncrease', 'csatChurnReduction', 'fraudReductionRate'].includes(name) && value > 100) {
            return 'Percentage must be between 0 and 100';
        }
        return '';
    };

    const handleInputChange = (name) => (e) => {
        const value = e.target.value === '' ? '' : Number(e.target.value);
        if (value === '') {
            setInputs((prev) => ({ ...prev, [name]: '' }));
            setErrors((prev) => ({ ...prev, [name]: 'Value is required' }));
        } else {
            const error = validateInput(name, value);
            setInputs((prev) => ({ ...prev, [name]: value }));
            setErrors((prev) => ({ ...prev, [name]: error }));
        }
    };

    const handleReset = () => {
        setInputs(defaultInputs);
        setErrors({});
        setResults(null);
        setChartData((prev) => ({
            ...prev,
            retail_bank: { savingsY1: 0, revenueY1: 0, savings3Y: 0, revenue3Y: 0 }
        }));
    };

    const hasErrors = Object.values(errors).some((error) => error);
    const hasEmptyInputs = Object.values(inputs).some((value) => value === '');

    const calculateResults = useMemo(() => {
        return () => {
            if (hasErrors || hasEmptyInputs) return null;

            const {
                annualVoiceVolume, annualMessageVolume, annualEmailVolume,
                costPerVoiceContact, costPerMessageContact, costPerEmailContact,
                avgAgentSalary, currentDigitalAdoption, currentCrossSellRate,
                avgRevenuePerCrossSell, annualCustomerChurn, avgRevenuePerCustomerChurn,
                annualFraudIncidents, avgCostPerFraudIncident,
                voiceToMessageDeflectionRate, emailToMessageDeflectionRate,
                messagesContainedByAI, emailContainedByAI, agentProductivityIncrease,
                crossSellConversionBoost, csatChurnReduction, fraudReductionRate
            } = inputs;

            const ccRampRateY1 = 50;
            const ccRampRateY2 = 75;
            const ccRampRateY3 = 100;
            const indRampRateY1 = 50;
            const indRampRateY2 = 75;
            const indRampRateY3 = 100;

            const voiceToMessageDeflectedY1 = annualVoiceVolume * (voiceToMessageDeflectionRate / 100);
            const emailToMessageDeflectedY1 = annualEmailVolume * (emailToMessageDeflectionRate / 100);

            const costSavingsFromVoiceToMessageDeflection = voiceToMessageDeflectedY1 * (costPerVoiceContact - costPerMessageContact);
            const costSavingsFromEmailToMessageDeflection = emailToMessageDeflectedY1 * (costPerEmailContact - costPerMessageContact);

            const agentsImpacted = Math.floor(annualVoiceVolume / 100000);
            const productivitySavingsY1 = agentsImpacted * avgAgentSalary * (agentProductivityIncrease / 100);

            const totalMessageInteractionsForAIContainmentY1 = annualMessageVolume + voiceToMessageDeflectedY1 + emailToMessageDeflectedY1;
            const costSavingsFromAIMessageContainment = totalMessageInteractionsForAIContainmentY1 * (messagesContainedByAI / 100) * costPerMessageContact;

            const totalEmailInteractionsForAIContainmentY1 = annualEmailVolume - emailToMessageDeflectedY1;
            const costSavingsFromAIEmailContainment = totalEmailInteractionsForAIContainmentY1 * (emailContainedByAI / 100) * costPerEmailContact;

            const totalImpactedInteractionsForCrossSellY1 = totalMessageInteractionsForAIContainmentY1 + totalEmailInteractionsForAIContainmentY1;
            const additionalCrossSellRevenueY1 = totalImpactedInteractionsForCrossSellY1 * (crossSellConversionBoost / 100) * avgRevenuePerCrossSell;

            const churnReductionSavingsY1 = annualCustomerChurn * (csatChurnReduction / 100) * avgRevenuePerCustomerChurn;
            const fraudSavingsY1 = annualFraudIncidents * (fraudReductionRate / 100) * avgCostPerFraudIncident;

            const calculateYearlyValue = (baseValue, rY1, rY2, rY3) => ({
                y1: baseValue * (rY1 / 100),
                y2: baseValue * (rY2 / 100),
                y3: baseValue * (rY3 / 100),
            });

            const csVoiceToMessageDeflectionSavings = calculateYearlyValue(costSavingsFromVoiceToMessageDeflection, ccRampRateY1, ccRampRateY2, ccRampRateY3);
            const csEmailToMessageDeflectionSavings = calculateYearlyValue(costSavingsFromEmailToMessageDeflection, ccRampRateY1, ccRampRateY2, ccRampRateY3);
            const csProductivitySavings = calculateYearlyValue(productivitySavingsY1, ccRampRateY1, ccRampRateY2, ccRampRateY3);
            const csAIMessageContainmentSavings = calculateYearlyValue(costSavingsFromAIMessageContainment, ccRampRateY1, ccRampRateY2, ccRampRateY3);
            const csAIEmailContainmentSavings = calculateYearlyValue(costSavingsFromAIEmailContainment, ccRampRateY1, ccRampRateY2, ccRampRateY3);

            const indCrossSellRevenue = calculateYearlyValue(additionalCrossSellRevenueY1, indRampRateY1, indRampRateY2, indRampRateY3);
            const indChurnSavings = calculateYearlyValue(churnReductionSavingsY1, indRampRateY1, indRampRateY2, indRampRateY3);
            const indFraudSavings = calculateYearlyValue(fraudSavingsY1, indRampRateY1, indRampRateY2, indRampRateY3);

            const totalSavingsY1 = csVoiceToMessageDeflectionSavings.y1 + csEmailToMessageDeflectionSavings.y1 + csProductivitySavings.y1 + csAIMessageContainmentSavings.y1 + csAIEmailContainmentSavings.y1 + indChurnSavings.y1 + indFraudSavings.y1;
            const totalSavingsY2 = csVoiceToMessageDeflectionSavings.y2 + csEmailToMessageDeflectionSavings.y2 + csProductivitySavings.y2 + csAIMessageContainmentSavings.y2 + csAIEmailContainmentSavings.y2 + indChurnSavings.y2 + indFraudSavings.y2;
            const totalSavingsY3 = csVoiceToMessageDeflectionSavings.y3 + csEmailToMessageDeflectionSavings.y3 + csProductivitySavings.y3 + csAIMessageContainmentSavings.y3 + csAIEmailContainmentSavings.y3 + indChurnSavings.y3 + indFraudSavings.y3;

            const totalRevenueGainY1 = indCrossSellRevenue.y1;
            const totalRevenueGainY2 = indCrossSellRevenue.y2;
            const totalRevenueGainY3 = indCrossSellRevenue.y3;

            const netBenefitY1 = totalSavingsY1 + totalRevenueGainY1;
            const netBenefitY2 = totalSavingsY2 + totalRevenueGainY2;
            const netBenefitY3 = totalSavingsY3 + totalRevenueGainY3;

            const cumulativeSavings3Y = totalSavingsY1 + totalSavingsY2 + totalSavingsY3;
            const cumulativeRevenue3Y = totalRevenueGainY1 + totalRevenueGainY2 + totalRevenueGainY3;
            const cumulativeNetBenefit3Y = netBenefitY1 + netBenefitY2 + netBenefitY3;

            return {
                inputs,
                voiceToMessageDeflectedY1, emailToMessageDeflectedY1,
                csVoiceToMessageDeflectionSavings, csEmailToMessageDeflectionSavings,
                csProductivitySavings, csAIMessageContainmentSavings, csAIEmailContainmentSavings,
                indCrossSellRevenue, indChurnSavings, indFraudSavings,
                totalSavingsY1, totalSavingsY2, totalSavingsY3,
                totalRevenueGainY1, totalRevenueGainY2, totalRevenueGainY3,
                netBenefitY1, netBenefitY2, netBenefitY3,
                cumulativeSavings3Y, cumulativeRevenue3Y, cumulativeNetBenefit3Y
            };
        };
    }, [inputs, hasErrors, hasEmptyInputs]);

    const handleCalculate = () => {
        const newResults = calculateResults();
        setResults(newResults);

        if (newResults) {
            setChartData((prev) => ({
                ...prev,
                retail_bank: {
                    savingsY1: newResults.totalSavingsY1,
                    revenueY1: newResults.totalRevenueGainY1,
                    savings3Y: newResults.cumulativeSavings3Y,
                    revenue3Y: newResults.cumulativeRevenue3Y
                }
            }));
        }
    };

    useEffect(() => {
        handleCalculate();
    }, []);

    return (
        <div className="container-fluid py-4">
            <div className="d-print-none">
                <SectionTitle>Your Current Metrics</SectionTitle>
                <div className="row g-4">
                    <h3 className="col-12 fs-5 fw-semibold text-secondary mt-4 mb-2">Customer Care Volumes & Costs</h3>
                    {[
                        { label: 'Annual Voice Volume', name: 'annualVoiceVolume', unit: 'contacts' },
                        { label: 'Average Cost Per Voice Contact', name: 'costPerVoiceContact', unit: '$', step: 0.01 },
                        { label: 'Annual Message Volume', name: 'annualMessageVolume', unit: 'contacts' },
                        { label: 'Average Cost Per Message Contact', name: 'costPerMessageContact', unit: '$', step: 0.01 },
                        { label: 'Annual Email Volume', name: 'annualEmailVolume', unit: 'contacts' },
                        { label: 'Average Cost Per Email Contact', name: 'costPerEmailContact', unit: '$', step: 0.01 },
                        { label: 'Average Agent Salary', name: 'avgAgentSalary', unit: '$' }
                    ].map(({ label, name, unit, step }) => (
                        <div key={name} className="col-md-6">
                            <InputField
                                label={label}
                                value={inputs[name].toLocaleString()}
                                onChange={handleInputChange(name)}
                                unit={unit}
                                step={step}
                                error={errors[name]}
                            />
                        </div>
                    ))}
                </div>
                <SectionTitle>LivePerson Impact Assumptions</SectionTitle>
                <div className="row g-4">
                    <h3 className="col-12 fs-5 fw-semibold text-secondary mt-4 mb-2">Customer Care</h3>
                    {[
                        { label: 'Voice-to-Message Deflection Rate', name: 'voiceToMessageDeflectionRate', unit: '%', max: 100 },
                        { label: 'Email-to-Message Deflection Rate', name: 'emailToMessageDeflectionRate', unit: '%', max: 100 },
                        { label: 'Agent Productivity Increase', name: 'agentProductivityIncrease', unit: '%', max: 100 },
                        { label: 'Messages Contained by AI Automation', name: 'messagesContainedByAI', unit: '%', max: 100 },
                        { label: 'Email Contained by AI Automation', name: 'emailContainedByAI', unit: '%', max: 100 }
                    ].map(({ label, name, unit, max }) => (
                        <div key={name} className="col-md-6">
                            <InputField
                                label={label}
                                value={inputs[name]}
                                onChange={handleInputChange(name)}
                                unit={unit}
                                max={max}
                                error={errors[name]}
                            />
                        </div>
                    ))}
                    <h3 className="col-12 fs-5 fw-semibold text-secondary mt-4 mb-2">Industry Specific (Retail Bank)</h3>
                    {[
                        { label: 'Current Digital Self-Service Adoption Rate', name: 'currentDigitalAdoption', unit: '%', max: 100 },
                        { label: 'Current Cross-Sell/Upsell Conversion Rate', name: 'currentCrossSellRate', unit: '%', step: 0.1 },
                        { label: 'Average Revenue Per Successful Cross-Sell', name: 'avgRevenuePerCrossSell', unit: '$' },
                        { label: 'Annual Customer Churn', name: 'annualCustomerChurn', unit: 'customers' },
                        { label: 'Avg Revenue Lost Per Churned Customer', name: 'avgRevenuePerCustomerChurn', unit: '$' },
                        { label: 'Annual Fraud/Security Incidents', name: 'annualFraudIncidents', unit: 'incidents' },
                        { label: 'Average Cost Per Fraud/Security Incident', name: 'avgCostPerFraudIncident', unit: '$' },
                        { label: 'Cross-Sell Conversion Boost', name: 'crossSellConversionBoost', unit: '%', step: 0.1 },
                        { label: 'CSAT-Driven Churn Reduction', name: 'csatChurnReduction', unit: '%', max: 100, step: 0.1 },
                        { label: 'Fraud Incident Reduction Rate', name: 'fraudReductionRate', unit: '%', max: 100, step: 0.1 }
                    ].map(({ label, name, unit, step, max }) => (
                        <div key={name} className="col-md-6">
                            <InputField
                                label={label}
                                value={inputs[name]}
                                onChange={handleInputChange(name)}
                                unit={unit}
                                step={step}
                                max={max}
                                error={errors[name]}
                            />
                        </div>
                    ))}
                </div>
                <div className="d-flex gap-3 mt-4">
                    <button
                        onClick={handleCalculate}
                        disabled={hasErrors || hasEmptyInputs}
                        className={`btn ${hasErrors || hasEmptyInputs ? 'btn-secondary' : 'btn-primary'}`}
                    >
                        Calculate
                    </button>
                    <button
                        onClick={handleReset}
                        className="btn btn-secondary"
                    >
                        Reset
                    </button>
                </div>
            </div>
            {results && (
                <>
                    <SectionTitle>Estimated LivePerson Impact</SectionTitle>
                    <p className="text-secondary-emphasis mb-4 d-print-none">
                        *Estimates based on your inputs. Actual results may vary.
                    </p>
                    <div className="d-flex gap-3 mb-4 d-print-none">
                        <button
                            onClick={() => exportRetailBankPDF(results, inputs)}
                            className="btn btn-info"
                        >
                            Download PDF
                        </button>
                        <button
                            onClick={() => exportCSV(results, inputs, 'retail_bank')}
                            className="btn btn-success"
                        >
                            Download CSV
                        </button>
                    </div>
                    <div className="row g-4">
                        <h3 className="col-12 fs-5 fw-semibold text-info-emphasis mt-4 mb-2">Customer Care Impact (Year 1)</h3>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="Voice-to-Message Deflection"
                            value={Math.round(results.voiceToMessageDeflectedY1)}
                            isMonetary={false}
                            customTextColorClass="text-primary"
                            description={`AI-powered routing shifts voice calls to message. (${inputs.annualVoiceVolume.toLocaleString()} voice * ${inputs.voiceToMessageDeflectionRate}% deflection)`}
                        /></div>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="Email-to-Message Deflection"
                            value={Math.round(results.emailToMessageDeflectedY1)}
                            isMonetary={false}
                            customTextColorClass="text-primary"
                            description={`Manage, analyze and respond to emails from the same agent workspace as messages. (${inputs.annualEmailVolume.toLocaleString()} email * ${inputs.emailToMessageDeflectionRate}% deflection)`}
                        /></div>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="Cost Savings from Voice-to-Message Deflection"
                            value={Math.round(results.csVoiceToMessageDeflectionSavings.y1)}
                            isMonetary={true}
                            description={`Savings from handling interactions on cheaper messaging channels.`}
                        /></div>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="Cost Savings from Email-to-Message Deflection"
                            value={Math.round(results.csEmailToMessageDeflectionSavings.y1)}
                            isMonetary={true}
                            description={`Savings from handling emails on cheaper messaging channels.`}
                        /></div>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="Productivity Savings (Agent Efficiency)"
                            value={Math.round(results.csProductivitySavings.y1)}
                            isMonetary={true}
                            description={`AI Agent Assist tools provide real-time suggestions and context.`}
                        /></div>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="Cost Savings from AI Message Containment"
                            value={Math.round(results.csAIMessageContainmentSavings.y1)}
                            isMonetary={true}
                            description={`AI bots resolve messages end-to-end.`}
                        /></div>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="Cost Savings from AI Email Containment"
                            value={Math.round(results.csAIEmailContainmentSavings.y1)}
                            isMonetary={true}
                            description={`AI bots resolve emails end-to-end.`}
                        /></div>
                        <h3 className="col-12 fs-5 fw-semibold text-info-emphasis mt-4 mb-2">Industry Specific Impact (Retail Bank - Year 1)</h3>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="Additional Cross-Sell Revenue"
                            value={Math.round(results.indCrossSellRevenue.y1)}
                            isMonetary={true}
                            description={`AI identifies customer needs and offers relevant products.`}
                        /></div>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="Churn Reduction Savings"
                            value={Math.round(results.indChurnSavings.y1)}
                            isMonetary={true}
                            description={`Improved CSAT leads to higher retention.`}
                        /></div>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="Fraud/Security Incident Savings"
                            value={Math.round(results.indFraudSavings.y1)}
                            isMonetary={true}
                            description={`AI-driven triage reduces fraud losses.`}
                        /></div>
                        <h3 className="col-12 fs-5 fw-semibold text-dark mt-4 mb-2">3-Year Ramped (50%, 75%, 100%) Value Summary</h3>
                        <div className="col-12">
                            <table className="table table-striped table-bordered shadow-sm">
                                <thead>
                                    <tr>
                                        <th className="py-3 px-3 text-start w-25">Metric</th>
                                        <th className="py-3 px-3 text-end w-auto">Year 1</th>
                                        <th className="py-3 px-3 text-end w-auto">Year 2</th>
                                        <th className="py-3 px-3 text-end w-auto">Year 3</th>
                                        <th className="py-3 px-3 text-end w-auto">Cumulative 3Y</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-2 px-3 text-start text-nowrap fw-medium">Total Annual Savings</td>
                                        <td className="py-2 px-3 text-end">{`$${Math.round(results.totalSavingsY1).toLocaleString()}`}</td>
                                        <td className="py-2 px-3 text-end">{`$${Math.round(results.totalSavingsY2).toLocaleString()}`}</td>
                                        <td className="py-2 px-3 text-end">{`$${Math.round(results.totalSavingsY3).toLocaleString()}`}</td>
                                        <td className="py-2 px-3 text-end fw-semibold text-success">{`$${Math.round(results.cumulativeSavings3Y).toLocaleString()}`}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-3 text-start text-nowrap fw-medium">Total Annual Revenue Gain</td>
                                        <td className="py-2 px-3 text-end">{`$${Math.round(results.totalRevenueGainY1).toLocaleString()}`}</td>
                                        <td className="py-2 px-3 text-end">{`$${Math.round(results.totalRevenueGainY2).toLocaleString()}`}</td>
                                        <td className="py-2 px-3 text-end">{`$${Math.round(results.totalRevenueGainY3).toLocaleString()}`}</td>
                                        <td className="py-2 px-3 text-end fw-semibold text-success">{`$${Math.round(results.cumulativeRevenue3Y).toLocaleString()}`}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-3 text-start text-nowrap fw-bold">Net Annual Benefit</td>
                                        <td className="py-2 px-3 text-end fw-bold text-success">{`$${Math.round(results.netBenefitY1).toLocaleString()}`}</td>
                                        <td className="py-2 px-3 text-end fw-bold text-success">{`$${Math.round(results.netBenefitY2).toLocaleString()}`}</td>
                                        <td className="py-2 px-3 text-end fw-bold text-success">{`$${Math.round(results.netBenefitY3).toLocaleString()}`}</td>
                                        <td className="py-2 px-3 text-end fw-bold text-info-emphasis">{`$${Math.round(results.cumulativeNetBenefit3Y).toLocaleString()}`}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}
            {hasErrors && (
                <p className="text-danger mt-3">Please correct the input errors to calculate results.</p>
            )}
        </div>
    );
};

// Airline Calculator
const AirlineCalculator = ({ setChartData }) => {
    const defaultInputs = {
        annualVoiceVolume: 4000000,
        annualMessageVolume: 800000,
        annualEmailVolume: 200000,
        costPerVoiceContact: 7.00,
        costPerMessageContact: 2.00,
        costPerEmailContact: 3.00,
        iropsEventsPerYear: 10,
        avgCostPerIropsEvent: 250000,
        totalPassengersAnnually: 50000000,
        avgAncillaryRevenuePerPax: 20,
        annualRebookingCompensationCost: 5000000,
        totalActiveLoyaltyMembers: 10000000,
        avgRevenuePerLoyaltyMember: 150,
        currentOTDRate: 80,
        valuePerOTDPoint: 100000,
        annualMishandledBaggage: 50000,
        costPerMishandledBaggage: 100,
        voiceToMessageDeflectionRate: 45,
        emailToMessageDeflectionRate: 20,
        messagesContainedByAI: 30,
        emailContainedByAI: 20,
        iropsCostReduction: 50,
        ancillaryRevenueIncrease: 8,
        rebookingCostReductionRate: 15,
        loyaltyMemberRetentionIncrease: 0.5,
        otdImprovementPoints: 2,
        baggageHandlingEfficiency: 15,
    };

    const [inputs, setInputs] = useState(defaultInputs);
    const [errors, setErrors] = useState({});
    const [results, setResults] = useState(null);

    const validateInput = (name, value) => {
        if (isNaN(value) || value < 0) return 'Value cannot be negative or invalid';
        if (['currentOTDRate', 'voiceToMessageDeflectionRate', 'emailToMessageDeflectionRate', 'messagesContainedByAI', 'emailContainedByAI', 'iropsCostReduction', 'ancillaryRevenueIncrease', 'rebookingCostReductionRate', 'baggageHandlingEfficiency'].includes(name) && value > 100) {
            return 'Percentage must be between 0 and 100';
        }
        return '';
    };

    const handleInputChange = (name) => (e) => {
        const value = e.target.value === '' ? '' : Number(e.target.value);
        if (value === '') {
            setInputs((prev) => ({ ...prev, [name]: '' }));
            setErrors((prev) => ({ ...prev, [name]: 'Value is required' }));
        } else {
            const error = validateInput(name, value);
            setInputs((prev) => ({ ...prev, [name]: value }));
            setErrors((prev) => ({ ...prev, [name]: error }));
        }
    };

    const handleReset = () => {
        setInputs(defaultInputs);
        setErrors({});
        setResults(null);
        setChartData((prev) => ({
            ...prev,
            airline: { savingsY1: 0, revenueY1: 0, savings3Y: 0, revenue3Y: 0 }
        }));
    };

    const hasErrors = Object.values(errors).some((error) => error);
    const hasEmptyInputs = Object.values(inputs).some((value) => value === '');

    const calculateResults = useMemo(() => {
        return () => {
            if (hasErrors || hasEmptyInputs) return null;

            const {
                annualVoiceVolume, annualMessageVolume, annualEmailVolume,
                costPerVoiceContact, costPerMessageContact, costPerEmailContact,
                iropsEventsPerYear, avgCostPerIropsEvent, totalPassengersAnnually,
                avgAncillaryRevenuePerPax, annualRebookingCompensationCost,
                totalActiveLoyaltyMembers, avgRevenuePerLoyaltyMember, currentOTDRate,
                valuePerOTDPoint, annualMishandledBaggage, costPerMishandledBaggage,
                voiceToMessageDeflectionRate, emailToMessageDeflectionRate,
                messagesContainedByAI, emailContainedByAI, iropsCostReduction,
                ancillaryRevenueIncrease, rebookingCostReductionRate,
                loyaltyMemberRetentionIncrease, otdImprovementPoints, baggageHandlingEfficiency
            } = inputs;

            const ccRampRateY1 = 50;
            const ccRampRateY2 = 75;
            const ccRampRateY3 = 100;
            const indRampRateY1 = 50;
            const indRampRateY2 = 75;
            const indRampRateY3 = 100;

            const voiceToMessageDeflectedY1 = annualVoiceVolume * (voiceToMessageDeflectionRate / 100);
            const emailToMessageDeflectedY1 = annualEmailVolume * (emailToMessageDeflectionRate / 100);

            const costSavingsFromVoiceToMessageDeflection = voiceToMessageDeflectedY1 * (costPerVoiceContact - costPerMessageContact);
            const costSavingsFromEmailToMessageDeflection = emailToMessageDeflectedY1 * (costPerEmailContact - costPerMessageContact);

            const totalMessageInteractionsForAIContainmentY1 = annualMessageVolume + voiceToMessageDeflectedY1 + emailToMessageDeflectedY1;
            const costSavingsFromAIMessageContainment = totalMessageInteractionsForAIContainmentY1 * (messagesContainedByAI / 100) * costPerMessageContact;

            const totalEmailInteractionsForAIContainment = annualEmailVolume - emailToMessageDeflectedY1;
            const costSavingsFromAIEmailContainment = totalEmailInteractionsForAIContainment * (emailContainedByAI / 100) * costPerEmailContact;

            const iropsSavingsY1 = iropsEventsPerYear * avgCostPerIropsEvent * (iropsCostReduction / 100);
            const additionalAncillaryRevenueY1 = totalPassengersAnnually * avgAncillaryRevenuePerPax * (ancillaryRevenueIncrease / 100);
            const rebookingSavingsY1 = annualRebookingCompensationCost * (rebookingCostReductionRate / 100);
            const loyaltyRetentionRevenueY1 = totalActiveLoyaltyMembers * (loyaltyMemberRetentionIncrease / 100) * avgRevenuePerLoyaltyMember;
            const otdSavingsY1 = otdImprovementPoints * valuePerOTDPoint;
            const baggageHandlingSavingsY1 = annualMishandledBaggage * (baggageHandlingEfficiency / 100) * costPerMishandledBaggage;

            const calculateYearlyValue = (baseValue, rY1, rY2, rY3) => ({
                y1: baseValue * (rY1 / 100),
                y2: baseValue * (rY2 / 100),
                y3: baseValue * (rY3 / 100),
            });

            const csDeflectionSavingsVoiceMessage = calculateYearlyValue(costSavingsFromVoiceToMessageDeflection, ccRampRateY1, ccRampRateY2, ccRampRateY3);
            const csEmailToMessageDeflectionSavings = calculateYearlyValue(costSavingsFromEmailToMessageDeflection, ccRampRateY1, ccRampRateY2, ccRampRateY3);
            const csAIMessageContainmentSavings = calculateYearlyValue(costSavingsFromAIMessageContainment, ccRampRateY1, ccRampRateY2, ccRampRateY3);
            const csAIEmailContainmentSavings = calculateYearlyValue(costSavingsFromAIEmailContainment, ccRampRateY1, ccRampRateY2, ccRampRateY3);
            const indIropsSavings = calculateYearlyValue(iropsSavingsY1, indRampRateY1, indRampRateY2, indRampRateY3);
            const indAncillaryRevenue = calculateYearlyValue(additionalAncillaryRevenueY1, indRampRateY1, indRampRateY2, indRampRateY3);
            const indRebookingSavings = calculateYearlyValue(rebookingSavingsY1, indRampRateY1, indRampRateY2, indRampRateY3);
            const indLoyaltyRevenue = calculateYearlyValue(loyaltyRetentionRevenueY1, indRampRateY1, indRampRateY2, indRampRateY3);
            const indOTDSavings = calculateYearlyValue(otdSavingsY1, indRampRateY1, indRampRateY2, indRampRateY3);
            const indBaggageHandlingSavings = calculateYearlyValue(baggageHandlingSavingsY1, indRampRateY1, indRampRateY2, indRampRateY3);

            const totalSavingsY1 = csDeflectionSavingsVoiceMessage.y1 + csEmailToMessageDeflectionSavings.y1 + csAIMessageContainmentSavings.y1 + csAIEmailContainmentSavings.y1 + indIropsSavings.y1 + indRebookingSavings.y1 + indOTDSavings.y1 + indBaggageHandlingSavings.y1;
            const totalSavingsY2 = csDeflectionSavingsVoiceMessage.y2 + csEmailToMessageDeflectionSavings.y2 + csAIMessageContainmentSavings.y2 + csAIEmailContainmentSavings.y2 + indIropsSavings.y2 + indRebookingSavings.y2 + indOTDSavings.y2 + indBaggageHandlingSavings.y2;
            const totalSavingsY3 = csDeflectionSavingsVoiceMessage.y3 + csEmailToMessageDeflectionSavings.y3 + csAIMessageContainmentSavings.y3 + csAIEmailContainmentSavings.y3 + indIropsSavings.y3 + indRebookingSavings.y3 + indOTDSavings.y3 + indBaggageHandlingSavings.y3;

            const totalRevenueGainY1 = indAncillaryRevenue.y1 + indLoyaltyRevenue.y1;
            const totalRevenueGainY2 = indAncillaryRevenue.y2 + indLoyaltyRevenue.y2;
            const totalRevenueGainY3 = indAncillaryRevenue.y3 + indLoyaltyRevenue.y3;

            const netBenefitY1 = totalSavingsY1 + totalRevenueGainY1;
            const netBenefitY2 = totalSavingsY2 + totalRevenueGainY2;
            const netBenefitY3 = totalSavingsY3 + totalRevenueGainY3;

            const cumulativeSavings3Y = totalSavingsY1 + totalSavingsY2 + totalSavingsY3;
            const cumulativeRevenue3Y = totalRevenueGainY1 + totalRevenueGainY2 + totalRevenueGainY3;
            const cumulativeNetBenefit3Y = netBenefitY1 + netBenefitY2 + netBenefitY3;

            return {
                inputs,
                voiceToMessageDeflectedY1, emailToMessageDeflectedY1,
                csDeflectionSavingsVoiceMessage, csEmailToMessageDeflectionSavings,
                csAIMessageContainmentSavings, csAIEmailContainmentSavings,
                indIropsSavings, indAncillaryRevenue, indRebookingSavings,
                indLoyaltyRevenue, indOTDSavings, indBaggageHandlingSavings,
                totalSavingsY1, totalSavingsY2, totalSavingsY3,
                totalRevenueGainY1, totalRevenueGainY2, totalRevenueGainY3,
                netBenefitY1, netBenefitY2, netBenefitY3,
                cumulativeSavings3Y, cumulativeRevenue3Y, cumulativeNetBenefit3Y
            };
        };
    }, [inputs, hasErrors, hasEmptyInputs]);

    const handleCalculate = () => {
        const newResults = calculateResults();
        setResults(newResults);

        if (newResults) {
            setChartData((prev) => ({
                ...prev,
                airline: {
                    savingsY1: newResults.totalSavingsY1,
                    revenueY1: newResults.totalRevenueGainY1,
                    savings3Y: newResults.cumulativeSavings3Y,
                    revenue3Y: newResults.cumulativeRevenue3Y
                }
            }));
        }
    };

    useEffect(() => {
        handleCalculate();
    }, []);

    return (
        <div className="container-fluid py-4">
            <div className="d-print-none">
                <SectionTitle>Your Current Metrics (Airline)</SectionTitle>
                <div className="row g-4">
                    <h3 className="col-12 fs-5 fw-semibold text-secondary mt-4 mb-2">Customer Care Volumes & Costs</h3>
                    {[
                        { label: 'Annual Voice Volume', name: 'annualVoiceVolume', unit: 'contacts' },
                        { label: 'Average Cost Per Voice Contact', name: 'costPerVoiceContact', unit: '$', step: 0.01 },
                        { label: 'Annual Message Volume', name: 'annualMessageVolume', unit: 'contacts' },
                        { label: 'Average Cost Per Message Contact', name: 'costPerMessageContact', unit: '$', step: 0.01 },
                        { label: 'Annual Email Volume', name: 'annualEmailVolume', unit: 'contacts' },
                        { label: 'Average Cost Per Email Contact', name: 'costPerEmailContact', unit: '$', step: 0.01 }
                    ].map(({ label, name, unit, step }) => (
                        <div key={name} className="col-md-6">
                            <InputField
                                label={label}
                                value={inputs[name].toLocaleString()}
                                onChange={handleInputChange(name)}
                                unit={unit}
                                step={step}
                                error={errors[name]}
                            />
                        </div>
                    ))}
                </div>
                <SectionTitle>LivePerson Impact Assumptions</SectionTitle>
                <div className="row g-4">
                    <h3 className="col-12 fs-5 fw-semibold text-secondary mt-4 mb-2">Customer Care</h3>
                    {[
                        { label: 'Voice-to-Message Deflection Rate', name: 'voiceToMessageDeflectionRate', unit: '%', max: 100 },
                        { label: 'Email-to-Message Deflection Rate', name: 'emailToMessageDeflectionRate', unit: '%', max: 100 },
                        { label: 'Messages Contained by AI Automation', name: 'messagesContainedByAI', unit: '%', max: 100 },
                        { label: 'Email Contained by AI Automation', name: 'emailContainedByAI', unit: '%', max: 100 }
                    ].map(({ label, name, unit, max }) => (
                        <div key={name} className="col-md-6">
                            <InputField
                                label={label}
                                value={inputs[name]}
                                onChange={handleInputChange(name)}
                                unit={unit}
                                max={max}
                                error={errors[name]}
                            />
                        </div>
                    ))}
                    <h3 className="col-12 fs-5 fw-semibold text-secondary mt-4 mb-2">Industry Specific (Airline)</h3>
                    {[
                        { label: 'IROPS Cost Reduction Rate', name: 'iropsCostReduction', unit: '%', max: 100 },
                        { label: 'Ancillary Revenue Increase Rate', name: 'ancillaryRevenueIncrease', unit: '%', max: 100 },
                        { label: 'Rebooking/Compensation Cost Reduction', name: 'rebookingCostReductionRate', unit: '%', max: 100, step: 0.1 },
                        { label: 'Loyalty Member Retention Increase', name: 'loyaltyMemberRetentionIncrease', unit: '%', step: 0.1 },
                        { label: 'OTD Improvement', name: 'otdImprovementPoints', unit: '%', step: 0.1 },
                        { label: 'Baggage Handling Efficiency', name: 'baggageHandlingEfficiency', unit: '%', max: 100, step: 0.1 }
                    ].map(({ label, name, unit, step, max }) => (
                        <div key={name} className="col-md-6">
                            <InputField
                                label={label}
                                value={inputs[name]}
                                onChange={handleInputChange(name)}
                                unit={unit}
                                step={step}
                                max={max}
                                error={errors[name]}
                            />
                        </div>
                    ))}
                </div>
                <div className="d-flex gap-3 mt-4">
                    <button
                        onClick={handleCalculate}
                        disabled={hasErrors || hasEmptyInputs}
                        className={`btn ${hasErrors || hasEmptyInputs ? 'btn-secondary' : 'btn-primary'}`}
                    >
                        Calculate
                    </button>
                    <button
                        onClick={handleReset}
                        className="btn btn-secondary"
                    >
                        Reset
                    </button>
                </div>
            </div>
            {results && (
                <>
                    <SectionTitle>Estimated LivePerson Impact</SectionTitle>
                    <p className="text-secondary-emphasis mb-4 d-print-none">
                        *Estimates based on your inputs. Actual results may vary.
                    </p>
                    <div className="d-flex gap-3 mb-4 d-print-none">
                        <button
                            onClick={() => exportAirlinePDF(results, inputs)}
                            className="btn btn-info"
                        >
                            Download PDF
                        </button>
                        <button
                            onClick={() => exportCSV(results, inputs, 'airline')}
                            className="btn btn-success"
                        >
                            Download CSV
                        </button>
                    </div>
                    <div className="row g-4">
                        <h3 className="col-12 fs-5 fw-semibold text-info-emphasis mt-4 mb-2">Customer Care Impact (Year 1)</h3>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="Voice-to-Message Deflection"
                            value={Math.round(results.voiceToMessageDeflectedY1)}
                            isMonetary={false}
                            customTextColorClass="text-primary"
                            description={`AI-powered routing shifts voice calls to message.`}
                        /></div>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="Email-to-Message Deflection"
                            value={Math.round(results.emailToMessageDeflectedY1)}
                            isMonetary={false}
                            customTextColorClass="text-primary"
                            description={`Manage, analyze and respond to emails from the same agent workspace as messages.`}
                        /></div>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="Cost Savings from Voice-to-Message Deflection"
                            value={Math.round(results.csDeflectionSavingsVoiceMessage.y1)}
                            isMonetary={true}
                            description={`Savings from handling interactions on cheaper messaging channels.`}
                        /></div>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="Cost Savings from Email-to-Message Deflection"
                            value={Math.round(results.csEmailToMessageDeflectionSavings.y1)}
                            isMonetary={true}
                            description={`Savings from handling emails on cheaper messaging channels.`}
                        /></div>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="Cost Savings from AI Message Containment"
                            value={Math.round(results.csAIMessageContainmentSavings.y1)}
                            isMonetary={true}
                            description={`AI bots resolve contacts end-to-end.`}
                        /></div>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="Cost Savings from AI Email Containment"
                            value={Math.round(results.csAIEmailContainmentSavings.y1)}
                            isMonetary={true}
                            description={`AI bots resolve contacts end-to-end.`}
                        /></div>
                        <h3 className="col-12 fs-5 fw-semibold text-info-emphasis mt-4 mb-2">Industry Specific Impact (Airline - Year 1)</h3>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="IROPS Management Savings"
                            value={Math.round(results.indIropsSavings.y1)}
                            isMonetary={true}
                            description={`Automated notifications reduce call spikes.`}
                        /></div>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="Additional Ancillary Revenue"
                            value={Math.round(results.indAncillaryRevenue.y1)}
                            isMonetary={true}
                            description={`AI-driven personalized offers for upgrades.`}
                        /></div>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="Rebooking/Compensation Savings"
                            value={Math.round(results.indRebookingSavings.y1)}
                            isMonetary={true}
                            description={`Bots guide passengers through rebooking.`}
                        /></div>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="Loyalty Retention Revenue"
                            value={Math.round(results.indLoyaltyRevenue.y1)}
                            isMonetary={true}
                            description={`Improved CSAT boosts retention.`}
                        /></div>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="OTD Improvement"
                            value={Math.round(results.indOTDSavings.y1)}
                            isMonetary={true}
                            description={`Better on-time performance.`}
                        /></div>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="Baggage Handling Efficiency"
                            value={Math.round(results.indBaggageHandlingSavings.y1)}
                            isMonetary={true}
                            description={`Automated tracking reduces incidents.`}
                        /></div>
                        <h3 className="col-12 fs-5 fw-semibold text-dark mt-4 mb-2">3-Year Ramped (50%, 75%, 100%) Value Summary</h3>
                        <div className="col-12">
                            <table className="table table-striped table-bordered shadow-sm">
                                <thead>
                                    <tr>
                                        <th className="py-3 px-3 text-start w-25">Metric</th>
                                        <th className="py-3 px-3 text-end w-auto">Year 1</th>
                                        <th className="py-3 px-3 text-end w-auto">Year 2</th>
                                        <th className="py-3 px-3 text-end w-auto">Year 3</th>
                                        <th className="py-3 px-3 text-end w-auto">Cumulative 3Y</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-2 px-3 text-start text-nowrap fw-medium">Total Annual Savings</td>
                                        <td className="py-2 px-3 text-end">{`$${Math.round(results.totalSavingsY1).toLocaleString()}`}</td>
                                        <td className="py-2 px-3 text-end">{`$${Math.round(results.totalSavingsY2).toLocaleString()}`}</td>
                                        <td className="py-2 px-3 text-end">{`$${Math.round(results.totalSavingsY3).toLocaleString()}`}</td>
                                        <td className="py-2 px-3 text-end fw-semibold text-success">{`$${Math.round(results.cumulativeSavings3Y).toLocaleString()}`}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-3 text-start text-nowrap fw-medium">Total Annual Revenue Gain</td>
                                        <td className="py-2 px-3 text-end">{`$${Math.round(results.totalRevenueGainY1).toLocaleString()}`}</td>
                                        <td className="py-2 px-3 text-end">{`$${Math.round(results.totalRevenueGainY2).toLocaleString()}`}</td>
                                        <td className="py-2 px-3 text-end">{`$${Math.round(results.totalRevenueGainY3).toLocaleString()}`}</td>
                                        <td className="py-2 px-3 text-end fw-semibold text-success">{`$${Math.round(results.cumulativeRevenue3Y).toLocaleString()}`}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-3 text-start text-nowrap fw-bold">Net Annual Benefit</td>
                                        <td className="py-2 px-3 text-end fw-bold text-success">{`$${Math.round(results.netBenefitY1).toLocaleString()}`}</td>
                                        <td className="py-2 px-3 text-end fw-bold text-success">{`$${Math.round(results.netBenefitY2).toLocaleString()}`}</td>
                                        <td className="py-2 px-3 text-end fw-bold text-success">{`$${Math.round(results.netBenefitY3).toLocaleString()}`}</td>
                                        <td className="py-2 px-3 text-end fw-bold text-info-emphasis">{`$${Math.round(results.cumulativeNetBenefit3Y).toLocaleString()}`}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}
            {hasErrors && (
                <p className="text-danger mt-3">Please correct the input errors to calculate results.</p>
            )}
        </div>
    );
};

// TelecomCalculator
const TelecomCalculator = ({ setChartData }) => {
    const defaultInputs = {
        annualVoiceVolume: 5000000,
        annualMessageVolume: 1000000,
        annualEmailVolume: 300000,
        costPerVoiceContact: 6.00,
        costPerMessageContact: 1.00,
        costPerEmailContact: 2.50,
        avgAgentSalary: 45000,
        annualCustomerChurn: 150000,
        avgRevenuePerCustomerChurn: 400,
        currentUpsellRate: 3,
        avgRevenuePerUpsell: 100,
        annualBillingDisputes: 20000,
        costPerBillingDispute: 50,
        voiceToMessageDeflectionRate: 35,
        emailToMessageDeflectionRate: 15,
        messagesContainedByAI: 50,
        emailContainedByAI: 25,
        agentProductivityIncrease: 10,
        csatChurnReduction: 7,
        upsellConversionBoost: 2,
        billingDisputeReduction: 20,
    };

    const [inputs, setInputs] = useState(defaultInputs);
    const [errors, setErrors] = useState({});
    const [results, setResults] = useState(null);

    const validateInput = (name, value) => {
        if (isNaN(value) || value < 0) return 'Value cannot be negative or invalid';
        if (['currentUpsellRate', 'voiceToMessageDeflectionRate', 'emailToMessageDeflectionRate', 'messagesContainedByAI', 'emailContainedByAI', 'agentProductivityIncrease', 'csatChurnReduction', 'billingDisputeReduction'].includes(name) && value > 100) {
            return 'Percentage must be between 0 and 100';
        }
        return '';
    };

    const handleInputChange = (name) => (e) => {
        const value = e.target.value === '' ? '' : Number(e.target.value);
        if (value === '') {
            setInputs((prev) => ({ ...prev, [name]: '' }));
            setErrors((prev) => ({ ...prev, [name]: 'Value is required' }));
        } else {
            const error = validateInput(name, value);
            setInputs((prev) => ({ ...prev, [name]: value }));
            setErrors((prev) => ({ ...prev, [name]: error }));
        }
    };

    const handleReset = () => {
        setInputs(defaultInputs);
        setErrors({});
        setResults(null);
        setChartData((prev) => ({
            ...prev,
            telecom: { savingsY1: 0, revenueY1: 0, savings3Y: 0, revenue3Y: 0 }
        }));
    };

    const hasErrors = Object.values(errors).some((error) => error);
    const hasEmptyInputs = Object.values(inputs).some((value) => value === '');

    const calculateResults = useMemo(() => {
        return () => {
            if (hasErrors || hasEmptyInputs) return null;

            const {
                annualVoiceVolume, annualMessageVolume, annualEmailVolume,
                costPerVoiceContact, costPerMessageContact, costPerEmailContact,
                avgAgentSalary, annualCustomerChurn, avgRevenuePerCustomerChurn,
                currentUpsellRate, avgRevenuePerUpsell, annualBillingDisputes,
                costPerBillingDispute, voiceToMessageDeflectionRate, emailToMessageDeflectionRate,
                messagesContainedByAI, emailContainedByAI, agentProductivityIncrease,
                csatChurnReduction, upsellConversionBoost, billingDisputeReduction
            } = inputs;

            const ccRampRateY1 = 50;
            const ccRampRateY2 = 75;
            const ccRampRateY3 = 100;
            const indRampRateY1 = 50;
            const indRampRateY2 = 75;
            const indRampRateY3 = 100;

            const voiceToMessageDeflectedY1 = annualVoiceVolume * (voiceToMessageDeflectionRate / 100);
            const emailToMessageDeflectedY1 = annualEmailVolume * (emailToMessageDeflectionRate / 100);

            const costSavingsFromVoiceToMessageDeflection = voiceToMessageDeflectedY1 * (costPerVoiceContact - costPerMessageContact);
            const costSavingsFromEmailToMessageDeflection = emailToMessageDeflectedY1 * (costPerEmailContact - costPerMessageContact);

            const agentsImpacted = Math.floor(annualVoiceVolume / 100000);
            const productivitySavingsY1 = agentsImpacted * avgAgentSalary * (agentProductivityIncrease / 100);

            const totalMessageInteractionsForAIContainmentY1 = annualMessageVolume + voiceToMessageDeflectedY1 + emailToMessageDeflectedY1;
            const costSavingsFromAIMessageContainment = totalMessageInteractionsForAIContainmentY1 * (messagesContainedByAI / 100) * costPerMessageContact;

            const totalEmailInteractionsForAIContainment = annualEmailVolume - emailToMessageDeflectedY1;
            const costSavingsFromAIEmailContainment = totalEmailInteractionsForAIContainment * (emailContainedByAI / 100) * costPerEmailContact;

            const churnReductionSavingsY1 = annualCustomerChurn * (csatChurnReduction / 100) * avgRevenuePerCustomerChurn;
            const additionalUpsellRevenueY1 = totalMessageInteractionsForAIContainmentY1 * (upsellConversionBoost / 100) * avgRevenuePerUpsell;
            const billingDisputeSavingsY1 = annualBillingDisputes * (billingDisputeReduction / 100) * costPerBillingDispute;

            const calculateYearlyValue = (baseValue, rY1, rY2, rY3) => ({
                y1: baseValue * (rY1 / 100),
                y2: baseValue * (rY2 / 100),
                y3: baseValue * (rY3 / 100),
            });

            const csVoiceToMessageDeflectionSavings = calculateYearlyValue(costSavingsFromVoiceToMessageDeflection, ccRampRateY1, ccRampRateY2, ccRampRateY3);
            const csEmailToMessageDeflectionSavings = calculateYearlyValue(costSavingsFromEmailToMessageDeflection, ccRampRateY1, ccRampRateY2, ccRampRateY3);
            const csProductivitySavings = calculateYearlyValue(productivitySavingsY1, ccRampRateY1, ccRampRateY2, ccRampRateY3);
            const csAIMessageContainmentSavings = calculateYearlyValue(costSavingsFromAIMessageContainment, ccRampRateY1, ccRampRateY2, ccRampRateY3);
            const csAIEmailContainmentSavings = calculateYearlyValue(costSavingsFromAIEmailContainment, ccRampRateY1, ccRampRateY2, ccRampRateY3);

            const indChurnSavings = calculateYearlyValue(churnReductionSavingsY1, indRampRateY1, indRampRateY2, indRampRateY3);
            const indUpsellRevenue = calculateYearlyValue(additionalUpsellRevenueY1, indRampRateY1, indRampRateY2, indRampRateY3);
            const indBillingDisputeSavings = calculateYearlyValue(billingDisputeSavingsY1, indRampRateY1, indRampRateY2, indRampRateY3);

            const totalSavingsY1 = csVoiceToMessageDeflectionSavings.y1 + csEmailToMessageDeflectionSavings.y1 + csProductivitySavings.y1 + csAIMessageContainmentSavings.y1 + csAIEmailContainmentSavings.y1 + indChurnSavings.y1 + indBillingDisputeSavings.y1;
            const totalSavingsY2 = csVoiceToMessageDeflectionSavings.y2 + csEmailToMessageDeflectionSavings.y2 + csProductivitySavings.y2 + csAIMessageContainmentSavings.y2 + csAIEmailContainmentSavings.y2 + indChurnSavings.y2 + indBillingDisputeSavings.y2;
            const totalSavingsY3 = csVoiceToMessageDeflectionSavings.y3 + csEmailToMessageDeflectionSavings.y3 + csProductivitySavings.y3 + csAIMessageContainmentSavings.y3 + csAIEmailContainmentSavings.y3 + indChurnSavings.y3 + indBillingDisputeSavings.y3;

            const totalRevenueGainY1 = indUpsellRevenue.y1;
            const totalRevenueGainY2 = indUpsellRevenue.y2;
            const totalRevenueGainY3 = indUpsellRevenue.y3;

            const netBenefitY1 = totalSavingsY1 + totalRevenueGainY1;
            const netBenefitY2 = totalSavingsY2 + totalRevenueGainY2;
            const netBenefitY3 = totalSavingsY3 + totalRevenueGainY3;

            const cumulativeSavings3Y = totalSavingsY1 + totalSavingsY2 + totalSavingsY3;
            const cumulativeRevenue3Y = totalRevenueGainY1 + totalRevenueGainY2 + totalRevenueGainY3;
            const cumulativeNetBenefit3Y = netBenefitY1 + netBenefitY2 + netBenefitY3;

            return {
                inputs,
                voiceToMessageDeflectedY1, emailToMessageDeflectedY1,
                csVoiceToMessageDeflectionSavings, csEmailToMessageDeflectionSavings,
                csProductivitySavings, csAIMessageContainmentSavings, csAIEmailContainmentSavings,
                indChurnSavings, indUpsellRevenue, indBillingDisputeSavings,
                totalSavingsY1, totalSavingsY2, totalSavingsY3,
                totalRevenueGainY1, totalRevenueGainY2, totalRevenueGainY3,
                netBenefitY1, netBenefitY2, netBenefitY3,
                cumulativeSavings3Y, cumulativeRevenue3Y, cumulativeNetBenefit3Y
            };
        };
    }, [inputs, hasErrors, hasEmptyInputs]);

    const handleCalculate = () => {
        const newResults = calculateResults();
        setResults(newResults);

        if (newResults) {
            setChartData((prev) => ({
                ...prev,
                telecom: {
                    savingsY1: newResults.totalSavingsY1,
                    revenueY1: newResults.totalRevenueGainY1,
                    savings3Y: newResults.cumulativeSavings3Y,
                    revenue3Y: newResults.cumulativeRevenue3Y
                }
            }));
        }
    };

    useEffect(() => {
        handleCalculate();
    }, []);

    return (
        <div className="container-fluid py-4">
            <div className="d-print-none">
                <SectionTitle>Your Current Metrics (Telecommunications)</SectionTitle>
                <div className="row g-4">
                    <h3 className="col-12 fs-5 fw-semibold text-secondary mt-4 mb-2">Customer Care Volumes & Costs</h3>
                    {[
                        { label: 'Annual Voice Volume', name: 'annualVoiceVolume', unit: 'contacts' },
                        { label: 'Average Cost Per Voice Contact', name: 'costPerVoiceContact', unit: '$', step: 0.01 },
                        { label: 'Annual Message Volume', name: 'annualMessageVolume', unit: 'contacts' },
                        { label: 'Average Cost Per Message Contact', name: 'costPerMessageContact', unit: '$', step: 0.01 },
                        { label: 'Annual Email Volume', name: 'annualEmailVolume', unit: 'contacts' },
                        { label: 'Average Cost Per Email Contact', name: 'costPerEmailContact', unit: '$', step: 0.01 },
                        { label: 'Average Agent Salary', name: 'avgAgentSalary', unit: '$' }
                    ].map(({ label, name, unit, step }) => (
                        <div key={name} className="col-md-6">
                            <InputField
                                label={label}
                                value={inputs[name].toLocaleString()}
                                onChange={handleInputChange(name)}
                                unit={unit}
                                step={step}
                                error={errors[name]}
                            />
                        </div>
                    ))}
                </div>
                <SectionTitle>LivePerson Impact Assumptions</SectionTitle>
                <div className="row g-4">
                    <h3 className="col-12 fs-5 fw-semibold text-secondary mt-4 mb-2">Customer Care</h3>
                    {[
                        { label: 'Voice-to-Message Deflection Rate', name: 'voiceToMessageDeflectionRate', unit: '%', max: 100 },
                        { label: 'Email-to-Message Deflection Rate', name: 'emailToMessageDeflectionRate', unit: '%', max: 100 },
                        { label: 'Agent Productivity Increase', name: 'agentProductivityIncrease', unit: '%', max: 100 },
                        { label: 'Messages Contained by AI Automation', name: 'messagesContainedByAI', unit: '%', max: 100 },
                        { label: 'Email Contained by AI Automation', name: 'emailContainedByAI', unit: '%', max: 100 }
                    ].map(({ label, name, unit, max }) => (
                        <div key={name} className="col-md-6">
                            <InputField
                                label={label}
                                value={inputs[name]}
                                onChange={handleInputChange(name)}
                                unit={unit}
                                max={max}
                                error={errors[name]}
                            />
                        </div>
                    ))}
                    <h3 className="col-12 fs-5 fw-semibold text-secondary mt-4 mb-2">Industry Specific (Telecommunications)</h3>
                    {[
                        { label: 'CSAT-Driven Churn Reduction', name: 'csatChurnReduction', unit: '%', max: 100, step: 0.1 },
                        { label: 'Upsell Conversion Boost', name: 'upsellConversionBoost', unit: '%', step: 0.1 },
                        { label: 'Annual Billing Disputes', name: 'annualBillingDisputes', unit: 'disputes' },
                        { label: 'Cost Per Billing Dispute', name: 'costPerBillingDispute', unit: '$', step: 0.01 },
                        { label: 'Billing Dispute Reduction', name: 'billingDisputeReduction', unit: '%', max: 100, step: 0.1 }
                    ].map(({ label, name, unit, step, max }) => (
                        <div key={name} className="col-md-6">
                            <InputField
                                label={label}
                                value={inputs[name]}
                                onChange={handleInputChange(name)}
                                unit={unit}
                                step={step}
                                max={max}
                                error={errors[name]}
                            />
                        </div>
                    ))}
                </div>
                <div className="d-flex gap-3 mt-4">
                    <button
                        onClick={handleCalculate}
                        disabled={hasErrors || hasEmptyInputs}
                        className={`btn ${hasErrors || hasEmptyInputs ? 'btn-secondary' : 'btn-primary'}`}
                    >
                        Calculate
                    </button>
                    <button
                        onClick={handleReset}
                        className="btn btn-secondary"
                    >
                        Reset
                    </button>
                </div>
            </div>
            {results && (
                <>
                    <SectionTitle>Estimated LivePerson Impact</SectionTitle>
                    <p className="text-secondary-emphasis mb-4 d-print-none">
                        *Estimates based on your inputs. Actual results may vary.
                    </p>
                    <div className="d-flex gap-3 mb-4 d-print-none">
                        <button
                            onClick={() => exportTelecomPDF(results, inputs)}
                            className="btn btn-info"
                        >
                            Download PDF
                        </button>
                        <button
                            onClick={() => exportCSV(results, inputs, 'telecom')}
                            className="btn btn-success"
                        >
                            Download CSV
                        </button>
                    </div>
                    <div className="row g-4">
                        <h3 className="col-12 fs-5 fw-semibold text-info-emphasis mt-4 mb-2">Customer Care Impact (Year 1)</h3>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="Voice-to-Message Deflection"
                            value={Math.round(results.voiceToMessageDeflectedY1)}
                            isMonetary={false}
                            customTextColorClass="text-primary"
                            description={`AI-powered routing shifts voice calls to message.`}
                        /></div>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="Email-to-Message Deflection"
                            value={Math.round(results.emailToMessageDeflectedY1)}
                            isMonetary={false}
                            customTextColorClass="text-primary"
                            description={`Manage, analyze and respond to emails from the same agent workspace as messages.`}
                        /></div>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="Cost Savings from Voice-to-Message Deflection"
                            value={Math.round(results.csVoiceToMessageDeflectionSavings.y1)}
                            isMonetary={true}
                            description={`Savings from handling interactions on cheaper messaging channels.`}
                        /></div>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="Cost Savings from Email-to-Message Deflection"
                            value={Math.round(results.csEmailToMessageDeflectionSavings.y1)}
                            isMonetary={true}
                            description={`Savings from handling emails on cheaper messaging channels.`}
                        /></div>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="Productivity Savings (Agent Efficiency)"
                            value={Math.round(results.csProductivitySavings.y1)}
                            isMonetary={true}
                            description={`AI Agent Assist tools provide real-time suggestions and context.`}
                        /></div>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="Cost Savings from AI Message Containment"
                            value={Math.round(results.csAIMessageContainmentSavings.y1)}
                            isMonetary={true}
                            description={`AI bots resolve messages end-to-end.`}
                        /></div>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="Cost Savings from AI Email Containment"
                            value={Math.round(results.csAIEmailContainmentSavings.y1)}
                            isMonetary={true}
                            description={`AI bots resolve emails end-to-end.`}
                        /></div>
                        <h3 className="col-12 fs-5 fw-semibold text-info-emphasis mt-4 mb-2">Industry Specific Impact (Telecommunications - Year 1)</h3>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="Churn Reduction Savings"
                            value={Math.round(results.indChurnSavings.y1)}
                            isMonetary={true}
                            description={`Improved CSAT leads to higher retention.`}
                        /></div>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="Additional Upsell Revenue"
                            value={Math.round(results.indUpsellRevenue.y1)}
                            isMonetary={true}
                            description={`AI identifies customer needs and offers relevant products.`}
                        /></div>
                        <div className="col-md-6 col-lg-4"><ResultCard
                            title="Billing Dispute Savings"
                            value={Math.round(results.indBillingDisputeSavings.y1)}
                            isMonetary={true}
                            description={`Automated handling reduces dispute costs.`}
                        /></div>
                        <h3 className="col-12 fs-5 fw-semibold text-dark mt-4 mb-2">3-Year Ramped (50%, 75%, 100%) Value Summary</h3>
                        <div className="col-12">
                            <table className="table table-striped table-bordered shadow-sm">
                                <thead>
                                    <tr>
                                        <th className="py-3 px-3 text-start w-25">Metric</th>
                                        <th className="py-3 px-3 text-end w-auto">Year 1</th>
                                        <th className="py-3 px-3 text-end w-auto">Year 2</th>
                                        <th className="py-3 px-3 text-end w-auto">Year 3</th>
                                        <th className="py-3 px-3 text-end w-auto">Cumulative 3Y</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="py-2 px-3 text-start text-nowrap fw-medium">Total Annual Savings</td>
                                        <td className="py-2 px-3 text-end">{`$${Math.round(results.totalSavingsY1).toLocaleString()}`}</td>
                                        <td className="py-2 px-3 text-end">{`$${Math.round(results.totalSavingsY2).toLocaleString()}`}</td>
                                        <td className="py-2 px-3 text-end">{`$${Math.round(results.totalSavingsY3).toLocaleString()}`}</td>
                                        <td className="py-2 px-3 text-end fw-semibold text-success">{`$${Math.round(results.cumulativeSavings3Y).toLocaleString()}`}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-3 text-start text-nowrap fw-medium">Total Annual Revenue Gain</td>
                                        <td className="py-2 px-3 text-end">{`$${Math.round(results.totalRevenueGainY1).toLocaleString()}`}</td>
                                        <td className="py-2 px-3 text-end">{`$${Math.round(results.totalRevenueGainY2).toLocaleString()}`}</td>
                                        <td className="py-2 px-3 text-end">{`$${Math.round(results.totalRevenueGainY3).toLocaleString()}`}</td>
                                        <td className="py-2 px-3 text-end fw-semibold text-success">{`$${Math.round(results.cumulativeRevenue3Y).toLocaleString()}`}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 px-3 text-start text-nowrap fw-bold">Net Annual Benefit</td>
                                        <td className="py-2 px-3 text-end fw-bold text-success">{`$${Math.round(results.netBenefitY1).toLocaleString()}`}</td>
                                        <td className="py-2 px-3 text-end fw-bold text-success">{`$${Math.round(results.netBenefitY2).toLocaleString()}`}</td>
                                        <td className="py-2 px-3 text-end fw-bold text-success">{`$${Math.round(results.netBenefitY3).toLocaleString()}`}</td>
                                        <td className="py-2 px-3 text-end fw-bold text-info-emphasis">{`$${Math.round(results.cumulativeNetBenefit3Y).toLocaleString()}`}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </>
            )}
            {hasErrors && (
                <p className="text-danger mt-3">Please correct the input errors to calculate results.</p>
            )}
        </div>
    );
};

// Placeholder for Retail & E-commerce Calculator
const RetailCalculator = ({ setChartData }) => {
    useEffect(() => {
        setChartData((prev) => ({
            ...prev,
            retail_ecommerce: { savingsY1: 0, revenueY1: 0, savings3Y: 0, revenue3Y: 0 }
        }));
    }, [setChartData]);
    return (
        <div className="container-fluid py-4">
            <SectionTitle>Retail & E-commerce Calculator</SectionTitle>
            <p className="text-secondary">This calculator is under development. Please select another industry.</p>
        </div>
    );
};

// Placeholder for Utilities Calculator
const UtilitiesCalculator = ({ setChartData }) => {
    useEffect(() => {
        setChartData((prev) => ({
            ...prev,
            utilities: { savingsY1: 0, revenueY1: 0, savings3Y: 0, revenue3Y: 0 }
        }));
    }, [setChartData]);
    return (
        <div className="container-fluid py-4">
            <SectionTitle>Utilities Calculator</SectionTitle>
            <p className="text-secondary">This calculator is under development. Please select another industry.</p>
        </div>
    );
};


// Main App Component
const ValueCalcApp = () => {

    if (process.env.BRANCH != 'develop' && process.env.GATSBY_IS_PREVIEW !== 'true') {
        return <NotFoundPage />;
    }

    const [activeCalculator, setActiveCalculator] = useState('retail_bank');
    const [chartData, setChartData] = useState({
        retail_bank: { savingsY1: 0, revenueY1: 0, savings3Y: 0, revenue3Y: 0 },
        airline: { savingsY1: 0, revenueY1: 0, savings3Y: 0, revenue3Y: 0 },
        telecom: { savingsY1: 0, revenueY1: 0, savings3Y: 0, revenue3Y: 0 },
        retail_ecommerce: { savingsY1: 0, revenueY1: 0, savings3Y: 0, revenue3Y: 0 },
        utilities: { savingsY1: 0, revenueY1: 0, savings3Y: 0, revenue3Y: 0 },
    });
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    const getChartConfig = (data) => ({
        type: 'bar',
        data: {
            labels: ['Year 1', 'Cumulative 3 Years'],
            datasets: [
                {
                    label: 'Cost Savings',
                    data: [data.savingsY1, data.savings3Y],
                    backgroundColor: '#198754', // Bootstrap 'success' green
                    borderRadius: 5,
                },
                {
                    label: 'Revenue Gain',
                    data: [data.revenueY1, data.revenue3Y],
                    backgroundColor: '#0d6efd', // Bootstrap 'primary' blue
                    borderRadius: 5,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: 'Estimated LivePerson Financial Impact',
                    font: { size: 16, family: 'Inter' },
                    color: '#333'
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                            }
                            return label;
                        }
                    }
                },
                datalabels: {
                    anchor: 'end',
                    align: 'end',
                    formatter: (value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0, notation: 'compact' }).format(value),
                    color: '#333',
                    font: {
                        weight: 'bold',
                        size: 10
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    grid: { display: false },
                    ticks: { font: { family: 'Inter' }, color: '#555' }
                },
                y: {
                    stacked: true,
                    beginAtZero: true,
                    grid: { color: '#eee' },
                    ticks: {
                        callback: function (value) {
                            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', notation: 'compact', maximumFractionDigits: 0 }).format(value);
                        },
                        font: { family: 'Inter' },
                        color: '#555'
                    }
                },
            },
        },
        plugins: [ChartDataLabels]
    });

    useEffect(() => {
        if (chartRef.current) {
            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }
            const currentChartData = chartData[activeCalculator];
            if (currentChartData) {
                chartInstanceRef.current = new Chart(chartRef.current, getChartConfig(currentChartData));
            }
        }
    }, [activeCalculator, chartData]);

    // return starts here
    return (
        <Layout>
            <Seo
                title="LivePerson Value Calculator"
                description=""
                robots=""
            />
            <Helmet>

            </Helmet>
            <div className="card shadow-lg rounded-3 p-4 mb-4">
                <h1 className="fs-2 fw-bold text-center text-primary-emphasis mb-4 pb-3 border-bottom border-primary-subtle">
                    LivePerson Value Impact Calculator
                </h1>

                <div className="d-flex justify-content-center mb-4 gap-3 d-print-none">
                    <button
                        onClick={() => setActiveCalculator('retail_bank')}
                        className={`btn ${activeCalculator === 'retail_bank' ? 'btn-primary shadow' : 'btn-light text-secondary'}`}
                    >
                        Retail Bank
                    </button>
                    <button
                        onClick={() => setActiveCalculator('airline')}
                        className={`btn ${activeCalculator === 'airline' ? 'btn-primary shadow' : 'btn-light text-secondary'}`}
                    >
                        Airline
                    </button>
                    <button
                        onClick={() => setActiveCalculator('telecom')}
                        className={`btn ${activeCalculator === 'telecom' ? 'btn-primary shadow' : 'btn-light text-secondary'}`}
                    >
                        Telecommunications
                    </button>
                    <button
                        onClick={() => setActiveCalculator('retail_ecommerce')}
                        className={`btn ${activeCalculator === 'retail_ecommerce' ? 'btn-primary shadow' : 'btn-light text-secondary'}`}
                    >
                        Retail & E-commerce
                    </button>
                    <button
                        onClick={() => setActiveCalculator('utilities')}
                        className={`btn ${activeCalculator === 'utilities' ? 'btn-primary shadow' : 'btn-light text-secondary'}`}
                    >
                        Utilities
                    </button>
                </div>

                {activeCalculator === 'retail_bank' && <RetailBankCalculator setChartData={setChartData} />}
                {activeCalculator === 'airline' && <AirlineCalculator setChartData={setChartData} />}
                {activeCalculator === 'telecom' && <TelecomCalculator setChartData={setChartData} />}
                {activeCalculator === 'retail_ecommerce' && <RetailCalculator setChartData={setChartData} />}
                {activeCalculator === 'utilities' && <UtilitiesCalculator setChartData={setChartData} />}

                <div className="mt-5">
                    <SectionTitle>Summary Chart</SectionTitle>
                    <div className="chart-container" style={{ height: '384px', width: '100%' }}>
                        <canvas ref={chartRef}></canvas>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ValueCalcApp; // Export the main component for Gatsby pages