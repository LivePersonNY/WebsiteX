import React, { useState, useEffect, useMemo } from 'react';
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

// --- DATA STRUCTURE FROM SPREADSHEET ---
// This structure is a direct translation of the "Value Inputs .csv" file.
const calculatorData = {
    "Cross-Industry": {
        "Unit Costs": [
            { id: "Param_Gen_Cost_Per_Voice_Conv", description: "Avg Cost per Voice Conversation (Human Agent)", value: 6.00, unit: "$" },
            { id: "Param_Gen_Cost_Per_Email_Conv", description: "Avg Cost per Email Conversation (Human Agent)", value: 4.00, unit: "$" },
            { id: "Param_Gen_Cost_Per_Human_Msg_Conv", description: "Avg Cost per Human Message Conversation", value: 1.50, unit: "$" },
            { id: "Param_Gen_Cost_Per_Automated_Conv", description: "Avg Cost per Automated Conversation", value: 0.10, unit: "$" }
        ],
        "Volumes": [
            { id: "Param_Gen_Volume_Voice", description: "Monthly Volume of Voice Conversations", value: 40000, unit: "/month" },
            { id: "Param_Gen_Volume_Email", description: "Monthly Volume of Email Conversations", value: 20000, unit: "/month" },
            { id: "Param_Gen_Volume_Messaging_Direct", description: "Monthly Volume of Messaging (pre-automation)", value: 10000, unit: "/month" }
        ],
        "Percent Change": [
            { id: "Param_Gen_Shift_VoiceToMsg_Rate", description: "% Voice Volume Shifted to Messaging", value: 25, unit: "%" },
            { id: "Param_Gen_Shift_EmailToMsg_Rate", description: "% Email Volume Shifted to Messaging", value: 40, unit: "%" },
            { id: "Param_Gen_Deflect_MsgToAutomation_Rate", description: "% Messaging Volume Deflected to Automation", value: 60, unit: "%" }
        ],
        "Increase Efficiency": [
            { id: "Param_Gen_Human_Msg_Concurrency_Gain", description: "% Gain in Human Msg Agent Concurrency (vs Voice)", value: 50, unit: "%" },
            { id: "Param_Gen_Human_Msg_Agents", description: "Number of Human Messaging Agents", value: 100, unit: "Agents" },
            { id: "Param_Gen_GenAI_AHT_Reduction", description: "% AHT Reduction from GenAI for Human Msgs", value: 15, unit: "%" }
        ],
        "Reduce Turnover": [
            { id: "Param_Gen_Agent_Salary_Monthly", description: "Average Monthly Agent Salary/Cost", value: 3500, unit: "$/month" },
            { id: "Param_Gen_Avg_Annual_Turnover_Rate", description: "Average Annual Agent Turnover Rate", value: 30, unit: "%" },
            { id: "Param_Gen_Turnover_Reduction_Rate", description: "% Reduction in Turnover from Better Tooling/Job Sat.", value: 10, unit: "%" },
            { id: "Param_Gen_Cost_Per_Turnover", description: "Average Cost per Agent Turnover", value: 5000, unit: "$" }
        ],
        "Speed Onboarding": [
            { id: "Param_Gen_Avg_Onboarding_Time_Weeks", description: "Average Onboarding Time for New Agent", value: 4, unit: "Weeks" },
            { id: "Param_Gen_Onboarding_Time_Reduction", description: "% Reduction in Onboarding Time (New Tooling)", value: 20, unit: "%" },
            { id: "Param_Gen_Weekly_Training_Cost_Per_Agent", description: "Weekly Training Cost per New Agent", value: 800, unit: "$/week" }
        ]
    },
    "Banking": {
        "Fraud Inquiry": [
            { id: "Param_Banking_FraudInquiries_Deflect", description: "Fraud Inquiries per Month", value: 2000, unit: "/month" },
            { id: "Param_Banking_BotContainment_Fraud", description: "Bot Containment Rate", value: 40, unit: "%" },
            { id: "Param_Banking_HumanAHT_Fraud", description: "Human AHT (Fraud)", value: 10, unit: "min" },
            { id: "Param_Banking_HumanCost_Fraud", description: "Human Cost per Min (Fraud)", value: 2.00, unit: "/min" }
        ],
        "Product Recommendations": [
            { id: "Param_Banking_Recommendations_PR", description: "Recommendations per Month", value: 10000, unit: "/month" },
            { id: "Param_Banking_ConversionRate_PR", description: "Conversion Rate", value: 5, unit: "%" },
            { id: "Param_Banking_AvgRevenue_PR", description: "Avg. Revenue per Sign-up", value: 100.00, unit: "$" }
        ],
        "Lead Nurturing": [
            { id: "Param_Banking_Leads_NLQ", description: "Leads per Month", value: 5000, unit: "/month" },
            { id: "Param_Banking_QualifiedIncrease_NLQ", description: "% Increase in Qualified Leads", value: 20, unit: "%" },
            { id: "Param_Banking_LeadToOppConv_NLQ", description: "Lead-to-Opportunity Conversion", value: 10, unit: "%" },
            { id: "Param_Banking_AvgDealSize_NLQ", description: "Avg. Deal Size", value: 500.00, unit: "$" }
        ]
    },
    "P&C Insurance": {
        "First Notice of Loss (FNOL)": [
            { id: "Param_PCIns_FNOLs_Auto", description: "FNOLs per Month", value: 10000, unit: "/month" },
            { id: "Param_PCIns_AutoRate_FNOL", description: "Automated FNOL Rate", value: 30, unit: "%" },
            { id: "Param_PCIns_ManualCost_FNOL", description: "Manual FNOL Cost per Interaction", value: 20.00, unit: "$" }
        ],
        "Bill Payment": [
            { id: "Param_PCIns_BillingInquiries_Auto", description: "Billing Inquiries per Month", value: 15000, unit: "/month" },
            { id: "Param_PCIns_DeflectionRate_Billing", description: "Deflection Rate (Billing)", value: 50, unit: "%" },
            { id: "Param_PCIns_HumanAHT_Billing", description: "Human AHT (Billing)", value: 3, unit: "min" },
            { id: "Param_PCIns_HumanCost_Billing", description: "Human Cost per Min (Billing)", value: 1.00, unit: "/min" }
        ],
        "Quote Generation": [
            { id: "Param_PCIns_QuotesStarted_EG", description: "Quotes Started per Month", value: 5000, unit: "/month" },
            { id: "Param_PCIns_CompletionIncrease_EG", description: "% Increase in Completion", value: 15, unit: "%" },
            { id: "Param_PCIns_ConversionIncrease_EG", description: "% Increase in Conversion", value: 2, unit: "%" },
            { id: "Param_PCIns_AvgPolicyValue_EG", description: "Avg. Policy Value", value: 800.00, unit: "$" }
        ],
        "Cross/Upsell": [
            { id: "Param_PCIns_Interactions_CSU", description: "Customer Interactions per Month", value: 8000, unit: "/month" },
            { id: "Param_PCIns_CrossSellConv_CSU", description: "Cross-sell Conversion Rate", value: 3, unit: "%" },
            { id: "Param_PCIns_AvgPremiumIncrease_CSU", description: "Avg. Premium Increase per Policy", value: 50.00, unit: "$" }
        ]
    },
    "Healthcare Payer": {
        "Member Inquiry": [
            { id: "Param_Healthcare_Inquiries_Auto", description: "Member Inquiries per Month", value: 20000, unit: "/month" },
            { id: "Param_Healthcare_DeflectionRate_Auto", description: "Deflection Rate (Member)", value: 40, unit: "%" },
            { id: "Param_Healthcare_HumanAHT_Auto", description: "Human AHT (Member)", value: 4, unit: "min" },
            { id: "Param_Healthcare_HumanCost_Auto", description: "Human Cost per Min (Member)", value: 1.20, unit: "/min" }
        ],
        "Pre-Authorization": [
            { id: "Param_Healthcare_PreAuthInquiries_Auto", description: "Pre-auth Inquiries per Month", value: 1000, unit: "/month" },
            { id: "Param_Healthcare_AutoRate_PreAuth", description: "Automation Rate (Pre-auth)", value: 25, unit: "%" },
            { id: "Param_Healthcare_HumanAHT_PreAuth", description: "Human AHT (Pre-auth)", value: 7, unit: "min" },
            { id: "Param_Healthcare_HumanCost_PreAuth", description: "Human Cost per Min (Pre-auth)", value: 1.50, unit: "/min" }
        ],
        "Member Engagement": [
            { id: "Param_Healthcare_ChurnReduction", description: "Annual Churn Reduction", value: 1, unit: "%" },
            { id: "Param_Healthcare_AvgMemberValue", description: "Avg. Member Value per Year", value: 1200.00, unit: "$/year" },
            { id: "Param_Healthcare_TotalMembers", description: "Total Members", value: 1000000, unit: "" }
        ],
        "Program Enrollment": [
            { id: "Param_Healthcare_ProgramEngage_F", description: "Program Engagements per Month", value: 50000, unit: "/month" },
            { id: "Param_Healthcare_EnrollmentConv_F", description: "Enrollment Conversion", value: 10, unit: "%" },
            { id: "Param_Healthcare_ProgramIndirectValue_F", description: "Program Indirect Value per Member", value: 50.00, unit: "$/month" }
        ]
    },
    "Utilities": {
        "Outage Reporting": [
            { id: "Param_Utilities_OutageInquiries_R", description: "Outage Inquiries per Month", value: 8000, unit: "/month" },
            { id: "Param_Utilities_DeflectionRate_Outage", description: "Deflection Rate (Outage)", value: 60, unit: "%" },
            { id: "Param_Utilities_HumanAHT_Outage", description: "Human AHT (Outage)", value: 3, unit: "min" },
            { id: "Param_Utilities_HumanCost_Outage", description: "Human Cost per Min (Outage)", value: 1.00, unit: "$/min" }
        ],
        "Billing and Service": [
            { id: "Param_Utilities_BillingInquiries_Auto", description: "Billing Inquiries per Month", value: 25000, unit: "/month" },
            { id: "Param_Utilities_DeflectionRate_Billing", description: "Deflection Rate (Billing)", value: 50, unit: "%" },
            { id: "Param_Utilities_HumanAHT_Billing", description: "Human AHT (Billing)", value: 2, unit: "min" },
            { id: "Param_Utilities_HumanCost_Billing", description: "Human Cost per Min (Billing)", value: 0.90, unit: "/min" }
        ],
        "Truck Rolls": [
            { id: "Param_Utilities_TruckRolls_Monthly", description: "Monthly Truck Rolls", value: 5000, unit: "/month" },
            { id: "Param_Utilities_TruckRolls_Avoided_Rate", description: "% Truck Rolls Avoided", value: 10, unit: "%" },
            { id: "Param_Utilities_Cost_Per_TruckRoll", description: "Average Cost per Truck Roll", value: 150.00, unit: "$" }
        ],
        "Customer Satisfaction": [
            { id: "Param_Utilities_AnnualChurnReduction", description: "Annual Churn Reduction", value: 0.5, unit: "%" },
            { id: "Param_Utilities_AvgCustomerValue", description: "Avg. Customer Value per Year", value: 500.00, unit: "$/year" },
            { id: "Param_Utilities_TotalCustomers", description: "Total Customers", value: 500000, unit: "" }
        ],
        "Energy Savings Programs": [
            { id: "Param_Utilities_EnergySavingInteractions", description: "Energy Saving Interactions per Month", value: 1000, unit: "/month" },
            { id: "Param_Utilities_ProgramEnrollmentConv", description: "Program Enrollment Conversion", value: 8, unit: "%" },
            { id: "Param_Utilities_ProgramIndirectValue", description: "Program Indirect Value per Customer", value: 10.00, unit: "$/month" }
        ]
    },
    "Retail": {
        "Order Status Inquiry": [
            { id: "Param_Retail_OrderInquiries_Auto", description: "Order Inquiries per Month", value: 30000, unit: "/month" },
            { id: "Param_Retail_DeflectionRate_Order", description: "Deflection Rate (Order)", value: 70, unit: "%" },
            { id: "Param_Retail_HumanAHT_Order", description: "Human AHT (Order)", value: 2, unit: "min" },
            { id: "Param_Retail_HumanCost_Order", description: "Human Cost per Min (Order)", value: 0.80, unit: "/min" }
        ],
        "Product Info and FAQ": [
            { id: "Param_Retail_ProductFAQs_Deflect", description: "Product FAQs per Month", value: 12000, unit: "/month" },
            { id: "Param_Retail_DeflectionRate_FAQ", description: "Deflection Rate (FAQ)", value: 50, unit: "%" },
            { id: "Param_Retail_HumanAHT_FAQ", description: "Human AHT (FAQ)", value: 1.5, unit: "min" },
            { id: "Param_Retail_HumanCost_FAQ", description: "Human Cost per Min (FAQ)", value: 0.75, unit: "/min" }
        ],
        "Personalized Shopping": [
            { id: "Param_Retail_AISessions_PSA", description: "AI-assisted Sessions per Month", value: 5000, unit: "/month" },
            { id: "Param_Retail_ConversionIncrease_PSA", description: "Conversion Rate Increase", value: 10, unit: "%" },
            { id: "Param_Retail_AvgOrderValue_PSA", description: "Avg. Order Value", value: 75.00, unit: "$" }
        ],
        "Cart Abandonment": [
            { id: "Param_Retail_AbandonedCarts_R", description: "Abandoned Carts per Month", value: 2000, unit: "/month" },
            { id: "Param_Retail_RecoveryRate_R", description: "Recovery Rate", value: 15, unit: "%" },
            { id: "Param_Retail_AvgCartValue_R", description: "Avg. Cart Value", value: 60.00, unit: "$" }
        ]
    },
    "Airlines": {
        "Flight Status": [
            { id: "Param_Airlines_Inquiries_FSBM", description: "Inquiries per Month", value: 20000, unit: "/month" },
            { id: "Param_Airlines_DeflectionRate_FSBM", description: "Deflection Rate", value: 60, unit: "%" },
            { id: "Param_Airlines_HumanAHT_FSBM", description: "Human AHT", value: 4, unit: "min" },
            { id: "Param_Airlines_HumanCost_FSBM", description: "Human Cost per Min", value: 1.10, unit: "/min" }
        ],
        "Baggage": [
            { id: "Param_Airlines_BaggageInquiries_Auto", description: "Baggage Inquiries per Month", value: 10000, unit: "/month" },
            { id: "Param_Airlines_DeflectionRate_Baggage", description: "Deflection Rate", value: 50, unit: "%" },
            { id: "Param_Airlines_HumanAHT_Baggage", description: "Human AHT", value: 3, unit: "min" },
            { id: "Param_Airlines_HumanCost_Baggage", description: "Human Cost per Min", value: 1.00, unit: "/min" }
        ],
        "Upsell Ancillary Services": [
            { id: "Param_Airlines_PassengerInteractions_AS", description: "Passenger Interactions per Month", value: 15000, unit: "/month" },
            { id: "Param_Airlines_UpsellConv_AS", description: "Upsell Conversion", value: 2, unit: "%" },
            { id: "Param_Airlines_AvgUpsellValue_AS", description: "Avg. Upsell Value", value: 30.00, unit: "$" }
        ],
        "Personalized Recommendations": [
            { id: "Param_Airlines_TravelerEngage_TR", description: "Travelers Engaging with Recs", value: 8000, unit: "/month" },
            { id: "Param_Airlines_AddBookingConv_TR", description: "Additional Booking Conversion", value: 1, unit: "%" },
            { id: "Param_Airlines_AvgTicketValue_TR", description: "Avg. Ticket Value", value: 300.00, unit: "$" }
        ]
    },
    "eCommerce": {
        "Common Issues": [
            { id: "Param_Ecommerce_CommonIssues_AIR", description: "Common Issues per Month", value: 5000, unit: "/month" },
            { id: "Param_Ecommerce_AutoResolution_AIR", description: "Automated Resolution Rate", value: 40, unit: "%" },
            { id: "Param_Ecommerce_HumanCost_AIR", description: "Avg. Cost of Human Resolution", value: 5.00, unit: "$/issue" }
        ],
        "Sales Conversion": [
            { id: "Param_Ecommerce_Visitors_ESC", description: "Website Visitors Engaging AI", value: 50000, unit: "/month" },
            { id: "Param_Ecommerce_ConvIncrease_ESC", description: "Conversion Rate Increase", value: 0.5, unit: "%" },
            { id: "Param_Ecommerce_AvgOrderValue_ESC", description: "Avg. Order Value", value: 80.00, unit: "$" }
        ],
        "Increase Customer Lifetime Value (TCLV)": [
            { id: "Param_Ecommerce_TotalCustomers_CLTV", description: "Total Customers", value: 200000, unit: "" },
            { id: "Param_Ecommerce_RepeatPurchaseIncrease_CLTV", description: "Repeat Purchase Rate Increase (Monthly)", value: 1, unit: "%" },
            { id: "Param_Ecommerce_AvgMonthlySpend_CLTV", description: "Avg. Monthly Spend", value: 50.00, unit: "$" }
        ]
    },
    "Hospitality": {
        "Front Desk and Concierge Support": [
            { id: "Param_Hospitality_CommonIssues_FCS", description: "Common Issues per Month (Front Desk & Concierge)", value: 5000, unit: "/month" },
            { id: "Param_Hospitality_AutoResolution_FCS", description: "Automated Resolution Rate (Front Desk & Concierge)", value: 40, unit: "%" },
            { id: "Param_Hospitality_HumanCost_FCS", description: "Avg. Cost of Human Resolution (Front Desk & Concierge)", value: 5.00, unit: "$/issue" }
        ],
        "Room Service /Housekeeping": [
            { id: "Param_Hospitality_RoomServiceInquiries_RMS", description: "Room Service & Housekeeping Inquiries per Month", value: 2000, unit: "/month" },
            { id: "Param_Hospitality_AutoResolution_RMS", description: "Automated Resolution Rate (Room Service & Housekeeping)", value: 60, unit: "%" },
            { id: "Param_Hospitality_HumanCost_RMS", description: "Avg. Cost of Human Resolution (Room Service & Housekeeping)", value: 4.00, unit: "$/issue" }
        ],
        "Cross and Upsell": [
            { id: "Param_Hospitality_GuestInteractions_USC", description: "Guest Interactions for Upselling/Cross-selling", value: 10000, unit: "/month" },
            { id: "Param_Hospitality_UpsellConv_USC", description: "Upsell/Cross-sell Conversion Rate", value: 1, unit: "%" },
            { id: "Param_Hospitality_AvgUpsellValue_USC", description: "Avg. Value per Upsell/Cross-sell", value: 8.00, unit: "$" }
        ],
        "Personalized Experiences": [
            { id: "Param_Hospitality_TotalGuests_PGE", description: "Total Guests Engaging AI (Personalized Experiences)", value: 50000, unit: "" },
            { id: "Param_Hospitality_BookingConvIncrease_PGE", description: "Booking Conversion Rate Increase (from recommendations)", value: 0.2, unit: "%" },
            { id: "Param_Hospitality_AvgGuestSpendIncrease_PGE", description: "Avg. Guest Spend Increase (from recommendations)", value: 2.00, unit: "$" }
        ]
    },
    "QSR": {
        "Order Taking": [
            { id: "Param_QSR_OrderInquiries_OTO", description: "Order Taking & FAQ Inquiries per Month", value: 10000, unit: "/month" },
            { id: "Param_QSR_AutoResolution_OTO", description: "Automated Resolution Rate (Order Taking & FAQs)", value: 50, unit: "%" },
            { id: "Param_QSR_HumanCost_OTO", description: "Avg. Cost of Human Resolution (Order Taking & FAQs)", value: 3.00, unit: "$/issue" }
        ],
        "Order Inquiries": [
            { id: "Param_QSR_DriveThruInquiries_DIS", description: "Drive-Thru & In-Store Inquiries per Month", value: 4000, unit: "/month" },
            { id: "Param_QSR_AutoResolution_DIS", description: "Automated Resolution Rate (Drive-Thru & In-Store)", value: 70, unit: "%" },
            { id: "Param_QSR_HumanCost_DIS", description: "Avg. Cost of Human Resolution (Drive-Thru & In-Store)", value: 2.50, unit: "$/issue" }
        ],
        "Cross/Upsell": [
            { id: "Param_QSR_CustomerInteractions_UCP", description: "Customer Interactions for Upselling/Combo Promotion", value: 20000, unit: "/month" },
            { id: "Param_QSR_UpsellConv_UCP", description: "Upsell/Combo Promotion Conversion Rate", value: 0.5, unit: "%" },
            { id: "Param_QSR_AvgUpsellValue_UCP", description: "Avg. Value per Upsell/Combo", value: 1.50, unit: "$" }
        ],
        "Personalized Offers": [
            { id: "Param_QSR_TotalCustomers_PO", description: "Total Customers Engaging AI (Personalized Offers)", value: 100000, unit: "" },
            { id: "Param_QSR_OfferRedemptionIncrease_PO", description: "Offer Redemption Rate Increase (from recommendations)", value: 0.1, unit: "%" },
            { id: "Param_QSR_AvgOrderValueIncrease_PO", description: "Avg. Order Value Increase (from recommendations)", value: 0.50, unit: "$" }
        ]
    }
};


// --- UI COMPONENTS ---

const InputField = ({ label, value, onChange, unit }) => (
    <div className="mb-3">
        <label className="form-label text-secondary fw-semibold" style={{ fontSize: '0.9rem' }}>
            {label}
        </label>
        <div className="position-relative">
            <input
                type="number"
                value={value}
                onChange={onChange}
                className="form-control shadow-sm border-secondary-subtle rounded"
                step={unit === '$' || unit === '% ' ? '0.01' : '1'}
            />
            {unit && (
                <span className="position-absolute end-0 top-50 translate-middle-y pe-3 text-secondary-emphasis fs-6">
                    {unit}
                </span>
            )}
        </div>
    </div>
);

const SectionTitle = ({ children }) => (
    <h2 className="fs-5 fw-semibold text-primary my-4 pb-2 border-bottom border-primary-subtle">
        {children}
    </h2>
);

// --- DYNAMIC CALCULATOR COMPONENT ---

const Calculator = ({ calculatorName, onInputsChange }) => {
    const data = calculatorData[calculatorName];

    // Initialize state dynamically from the data structure
    const getInitialState = () => {
        const initialState = {};
        Object.values(data).forEach(section => {
            section.forEach(input => {
                initialState[input.id] = input.value;
            });
        });
        return initialState;
    };

    const [inputs, setInputs] = useState(getInitialState);

    const handleInputChange = (id) => (e) => {
        const value = e.target.value === '' ? '' : Number(e.target.value);
        setInputs(prev => ({ ...prev, [id]: value }));
    };

    // Lift state up whenever inputs change
    useEffect(() => {
        onInputsChange(inputs);
    }, [inputs, onInputsChange]);

    return (
        <div>
            {Object.entries(data).map(([header, inputsArray]) => (
                <div key={header}>
                    <SectionTitle>{header}</SectionTitle>
                    <div className="row g-4">
                        {inputsArray.map(input => (
                            <div key={input.id} className="col-md-6 col-lg-4">
                                <InputField
                                    label={input.description}
                                    value={inputs[input.id]}
                                    onChange={handleInputChange(input.id)}
                                    unit={input.unit}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};


// --- MAIN APP COMPONENT ---

const ValueCalcApp = () => {
    // This check can be removed if not needed for your environment
    if (process.env.BRANCH != 'develop' && process.env.GATSBY_IS_PREVIEW !== 'true') {
        return <NotFoundPage />;
    }

    const [activeCalculator, setActiveCalculator] = useState("Cross-Industry");
    const [currentInputs, setCurrentInputs] = useState({});

    const calculatorButtons = [
        { key: 'Cross-Industry', name: 'Cross-Industry' },
        { key: 'Banking', name: 'Banking' },
        { key: 'P&C Insurance', name: 'P&C Insurance' },
        { key: 'Healthcare Payer', name: 'Healthcare Payer' },
        { key: 'Utilities', name: 'Utilities' },
        { key: 'Retail', name: 'Retail' },
        { key: 'Airlines', name: 'Airlines' },
        { key: 'eCommerce', name: 'eCommerce' },
        { key: 'Hospitality', name: 'Hospitality' },
        { key: 'QSR', name: 'QSR' },
    ];

    return (
        <Layout>
            <Seo title="LivePerson Value Calculator" />
            <Helmet />
            <div className="card shadow-lg rounded-3 p-4 p-md-5 mb-4">
                <h1 className="fs-2 fw-bold text-center text-primary-emphasis mb-4 pb-3 border-bottom border-primary-subtle">
                    LivePerson Value Impact Calculator
                </h1>

                <div className="d-flex justify-content-center flex-wrap mb-4 gap-2 d-print-none">
                    {calculatorButtons.map(calc => (
                        <button
                            key={calc.key}
                            onClick={() => setActiveCalculator(calc.key)}
                            className={`btn ${activeCalculator === calc.key ? 'btn-primary shadow' : 'btn-light text-secondary'}`}
                        >
                            {calc.name}
                        </button>
                    ))}
                </div>

                <Calculator
                    key={activeCalculator} // Add key prop to force re-mount
                    calculatorName={activeCalculator}
                    onInputsChange={setCurrentInputs}
                />

                {/* The Outputs and Calculations will be added here in the next step */}

            </div>
        </Layout>
    );
};

export default ValueCalcApp;
