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

// --- DATA STRUCTURE FROM SPREADSHEET (INPUTS) ---
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

// --- CALCULATION DATA FROM SPREADSHEET ---
const calculationDefinitions = [
    { industry: "Cross-Industry", driver: "Channel Shift & Automation", lever: "Voice Conversations Shifted to Messaging", description: "Monthly voice conversations shifted to messaging channels", id: "Calc_Gen_Voice_Conversations_Shifted_To_Messaging", formula: "Param_Gen_Volume_Voice * (Param_Gen_Shift_VoiceToMsg_Rate / 100)" },
    { industry: "Cross-Industry", driver: "Channel Shift & Automation", lever: "Voice Savings from Shifting to Messaging", description: "Monthly savings from shifting voice conversations to messaging", id: "Calc_Gen_Voice_Savings_From_Shifting_To_Messaging", formula: "(Calc_Gen_Voice_Conversations_Shifted_To_Messaging * (Param_Gen_Cost_Per_Voice_Conv - Param_Gen_Cost_Per_Human_Msg_Conv))" },
    { industry: "Cross-Industry", driver: "Channel Shift & Automation", lever: "Email Conversations Shifted to Messaging", description: "Monthly email conversations shifted to messaging channels", id: "Calc_Gen_Email_Conversations_Shifted_To_Messaging", formula: "Param_Gen_Volume_Email * (Param_Gen_Shift_EmailToMsg_Rate / 100)" },
    { industry: "Cross-Industry", driver: "Channel Shift & Automation", lever: "Email Savings from Shifting to Messaging", description: "Monthly savings from shifting email conversations to messaging", id: "Calc_Gen_Email_Savings_From_Shifting_To_Messaging", formula: "(Calc_Gen_Email_Conversations_Shifted_To_Messaging * (Param_Gen_Cost_Per_Email_Conv - Param_Gen_Cost_Per_Human_Msg_Conv))" },
    { industry: "Cross-Industry", driver: "Channel Shift & Automation", lever: "Messaging Conversations Deflected to Automation", description: "Monthly messaging conversations deflected to automation", id: "Calc_Gen_Messaging_Conversations_Deflected_To_Automation", formula: "(Param_Gen_Volume_Messaging_Direct + Calc_Gen_Voice_Conversations_Shifted_To_Messaging + Calc_Gen_Email_Conversations_Shifted_To_Messaging) * (Param_Gen_Deflect_MsgToAutomation_Rate / 100)" },
    { industry: "Cross-Industry", driver: "Channel Shift & Automation", lever: "Automation Savings from Deflecting Messaging", description: "Monthly savings from deflecting messaging conversations to automation", id: "Calc_Gen_Automation_Savings_From_Deflecting_Messaging", formula: "(Calc_Gen_Messaging_Conversations_Deflected_To_Automation * (Param_Gen_Cost_Per_Human_Msg_Conv - Param_Gen_Cost_Per_Automated_Conv))" },
    { industry: "Cross-Industry", driver: "Agent Efficiency & Workforce", lever: "Agent Concurrency Savings", description: "Monthly savings from increased agent concurrency in messaging", id: "Calc_Gen_Agent_Concurrency_Savings", formula: "Param_Gen_Human_Msg_Agents * Param_Gen_Agent_Salary_Monthly * (Param_Gen_Human_Msg_Concurrency_Gain / 100)" },
    { industry: "Cross-Industry", driver: "Agent Efficiency & Workforce", lever: "GenAI AHT Savings", description: "Monthly savings from reduced AHT due to GenAI", id: "Calc_Gen_GenAI_AHT_Savings", formula: "Param_Gen_Human_Msg_Agents * Param_Gen_Agent_Salary_Monthly * (Param_Gen_GenAI_AHT_Reduction / 100)" },
    { industry: "Cross-Industry", driver: "Agent Efficiency & Workforce", lever: "Agent Turnover Savings", description: "Monthly savings from reduced agent turnover", id: "Calc_Gen_Agent_Turnover_Savings", formula: "((Param_Gen_Human_Msg_Agents * (Param_Gen_Avg_Annual_Turnover_Rate / 100) * (Param_Gen_Turnover_Reduction_Rate / 100)) * Param_Gen_Cost_Per_Turnover) / 12" },
    { industry: "Cross-Industry", driver: "Agent Efficiency & Workforce", lever: "Onboarding Savings", description: "Monthly savings from reduced onboarding time", id: "Calc_Gen_Onboarding_Savings", formula: "((Param_Gen_Human_Msg_Agents * (Param_Gen_Avg_Annual_Turnover_Rate / 100)) * (Param_Gen_Avg_Onboarding_Time_Weeks * (Param_Gen_Onboarding_Time_Reduction / 100)) * Param_Gen_Weekly_Training_Cost_Per_Agent) / 12" },
    { industry: "Banking", driver: "Fraud Inquiry Deflection", lever: "Monthly Savings from Bot Containment", description: "The savings generated by deflecting fraud inquiries to automated systems.", id: "Calc_Banking_Savings_Fraud_Deflection", formula: "Param_Banking_FraudInquiries_Deflect * (Param_Banking_BotContainment_Fraud / 100) * Param_Banking_HumanAHT_Fraud * Param_Banking_HumanCost_Fraud" },
    { industry: "Banking", driver: "Personalized Product Recommendations", lever: "Additional Monthly Revenue from Recommendations", description: "The additional revenue generated from personalized product recommendations.", id: "Calc_Banking_Revenue_Recommendations", formula: "Param_Banking_Recommendations_PR * (Param_Banking_ConversionRate_PR / 100) * Param_Banking_AvgRevenue_PR" },
    { industry: "Banking", driver: "Nurture & Qualify Leads", lever: "Additional Monthly Revenue from Lead Nurturing", description: "The additional revenue generated from nurturing and qualifying leads.", id: "Calc_Banking_Revenue_Lead_Nurturing", formula: "Param_Banking_Leads_NLQ * (Param_Banking_QualifiedIncrease_NLQ / 100) * (Param_Banking_LeadToOppConv_NLQ / 100) * Param_Banking_AvgDealSize_NLQ" },
    { industry: "P&C Insurance", driver: "Automated First Notice of Loss (FNOL)", lever: "Monthly Savings from Automated FNOL", description: "The savings generated from automating the FNOL process.", id: "Calc_PCIns_Savings_FNOL", formula: "Param_PCIns_FNOLs_Auto * (Param_PCIns_AutoRate_FNOL / 100) * Param_PCIns_ManualCost_FNOL" },
    { industry: "P&C Insurance", driver: "Billing & Payment Automation", lever: "Monthly Savings from Billing Automation", description: "The savings generated from automating billing and payment inquiries.", id: "Calc_PCIns_Savings_Billing", formula: "Param_PCIns_BillingInquiries_Auto * (Param_PCIns_DeflectionRate_Billing / 100) * Param_PCIns_HumanAHT_Billing * Param_PCIns_HumanCost_Billing" },
    { industry: "P&C Insurance", driver: "Expedited Quote Generation", lever: "Additional Monthly Revenue from Quote Generation", description: "The additional revenue from improving quote completion and conversion.", id: "Calc_PCIns_Revenue_Quote_Generation", formula: "Param_PCIns_QuotesStarted_EG * (Param_PCIns_CompletionIncrease_EG / 100) * (Param_PCIns_ConversionIncrease_EG / 100) * Param_PCIns_AvgPolicyValue_EG" },
    { industry: "P&C Insurance", driver: "Cross-sell/Upsell", lever: "Additional Monthly Revenue from Cross-sell/Upsell", description: "The additional revenue generated from cross-selling and upselling during customer interactions.", id: "Calc_PCIns_Revenue_Cross_sell", formula: "Param_PCIns_Interactions_CSU * (Param_PCIns_CrossSellConv_CSU / 100) * Param_PCIns_AvgPremiumIncrease_CSU" },
    { industry: "Healthcare Payer", driver: "Member Inquiry Automation", lever: "Monthly Savings from Member Inquiry Automation", description: "Savings from automating member inquiries.", id: "Calc_Healthcare_Savings_Member_Inquiry", formula: "Param_Healthcare_Inquiries_Auto * (Param_Healthcare_DeflectionRate_Auto / 100) * Param_Healthcare_HumanAHT_Auto * Param_Healthcare_HumanCost_Auto" },
    { industry: "Healthcare Payer", driver: "Pre-authorization Automation", lever: "Monthly Savings from Pre-auth Automation", description: "Savings from automating the pre-authorization process.", id: "Calc_Healthcare_Savings_PreAuth", formula: "Param_Healthcare_PreAuthInquiries_Auto * (Param_Healthcare_AutoRate_PreAuth / 100) * Param_Healthcare_HumanAHT_PreAuth * Param_Healthcare_HumanCost_PreAuth" },
    { industry: "Healthcare Payer", driver: "Member Engagement & Retention", lever: "Annual Revenue from Churn Reduction", description: "Annual revenue retained by reducing member churn.", id: "Calc_Healthcare_Revenue_Churn_Reduction", formula: "Param_Healthcare_TotalMembers * (Param_Healthcare_ChurnReduction / 100) * Param_Healthcare_AvgMemberValue" },
    { industry: "Healthcare Payer", driver: "Program Enrollment", lever: "Additional Monthly Value from Program Enrollment", description: "Indirect value from increased program enrollment.", id: "Calc_Healthcare_Value_Program_Enrollment", formula: "Param_Healthcare_ProgramEngage_F * (Param_Healthcare_EnrollmentConv_F / 100) * Param_Healthcare_ProgramIndirectValue_F" },
    { industry: "Utilities", driver: "Outage Reporting Automation", lever: "Monthly Savings from Outage Reporting Automation", description: "Savings from automating outage reporting.", id: "Calc_Utilities_Savings_Outage_Reporting", formula: "Param_Utilities_OutageInquiries_R * (Param_Utilities_DeflectionRate_Outage / 100) * Param_Utilities_HumanAHT_Outage * Param_Utilities_HumanCost_Outage" },
    { industry: "Utilities", driver: "Billing & Service Automation", lever: "Monthly Savings from Billing & Service Automation", description: "Savings from automating billing and service inquiries.", id: "Calc_Utilities_Savings_Billing_Service", formula: "Param_Utilities_BillingInquiries_Auto * (Param_Utilities_DeflectionRate_Billing / 100) * Param_Utilities_HumanAHT_Billing * Param_Utilities_HumanCost_Billing" },
    { industry: "Utilities", driver: "Truck Roll Avoidance", lever: "Monthly Savings from Truck Roll Avoidance", description: "Savings from avoiding unnecessary truck rolls.", id: "Calc_Utilities_Savings_Truck_Rolls", formula: "Param_Utilities_TruckRolls_Monthly * (Param_Utilities_TruckRolls_Avoided_Rate / 100) * Param_Utilities_Cost_Per_TruckRoll" },
    { industry: "Utilities", driver: "Customer Satisfaction & Churn", lever: "Annual Revenue from Churn Reduction", description: "Annual revenue retained by reducing customer churn.", id: "Calc_Utilities_Revenue_Churn_Reduction", formula: "Param_Utilities_TotalCustomers * (Param_Utilities_AnnualChurnReduction / 100) * Param_Utilities_AvgCustomerValue" },
    { industry: "Utilities", driver: "Energy Saving Programs", lever: "Additional Monthly Value from Energy Program Enrollment", description: "Indirect value from increased energy program enrollment.", id: "Calc_Utilities_Value_Energy_Programs", formula: "Param_Utilities_EnergySavingInteractions * (Param_Utilities_ProgramEnrollmentConv / 100) * Param_Utilities_ProgramIndirectValue" },
    { industry: "Retail", driver: "Order Status & Returns Automation", lever: "Monthly Savings from Order Status Automation", description: "Savings from automating order status inquiries.", id: "Calc_Retail_Savings_Order_Status", formula: "Param_Retail_OrderInquiries_Auto * (Param_Retail_DeflectionRate_Order / 100) * Param_Retail_HumanAHT_Order * Param_Retail_HumanCost_Order" },
    { industry: "Retail", driver: "Product Information & FAQ Automation", lever: "Monthly Savings from FAQ Automation", description: "Savings from automating product information and FAQ inquiries.", id: "Calc_Retail_Savings_FAQ", formula: "Param_Retail_ProductFAQs_Deflect * (Param_Retail_DeflectionRate_FAQ / 100) * Param_Retail_HumanAHT_FAQ * Param_Retail_HumanCost_FAQ" },
    { industry: "Retail", driver: "Personalized Shopping Assistance", lever: "Additional Monthly Revenue from Personalized Shopping", description: "Additional revenue from AI-assisted personalized shopping.", id: "Calc_Retail_Revenue_Personalized_Shopping", formula: "Param_Retail_AISessions_PSA * (Param_Retail_ConversionIncrease_PSA / 100) * Param_Retail_AvgOrderValue_PSA" },
    { industry: "Retail", driver: "Cart Abandonment Recovery", lever: "Additional Monthly Revenue from Cart Recovery", description: "Additional revenue from recovering abandoned carts.", id: "Calc_Retail_Revenue_Cart_Recovery", formula: "Param_Retail_AbandonedCarts_R * (Param_Retail_RecoveryRate_R / 100) * Param_Retail_AvgCartValue_R" },
    { industry: "Airlines", driver: "Flight Status & Booking Automation", lever: "Monthly Savings from Flight Status Automation", description: "Savings from automating flight status and booking inquiries.", id: "Calc_Airlines_Savings_Flight_Status", formula: "Param_Airlines_Inquiries_FSBM * (Param_Airlines_DeflectionRate_FSBM / 100) * Param_Airlines_HumanAHT_FSBM * Param_Airlines_HumanCost_FSBM" },
    { industry: "Airlines", driver: "Baggage & Check-in Automation", lever: "Monthly Savings from Baggage Automation", description: "Savings from automating baggage and check-in inquiries.", id: "Calc_Airlines_Savings_Baggage", formula: "Param_Airlines_BaggageInquiries_Auto * (Param_Airlines_DeflectionRate_Baggage / 100) * Param_Airlines_HumanAHT_Baggage * Param_Airlines_HumanCost_Baggage" },
    { industry: "Airlines", driver: "Upselling Ancillary Services", lever: "Additional Monthly Revenue from Ancillary Upsells", description: "Additional revenue from upselling ancillary services.", id: "Calc_Airlines_Revenue_Ancillary_Upsell", formula: "Param_Airlines_PassengerInteractions_AS * (Param_Airlines_UpsellConv_AS / 100) * Param_Airlines_AvgUpsellValue_AS" },
    { industry: "Airlines", driver: "Personalized Travel Recommendations", lever: "Additional Monthly Revenue from Travel Recommendations", description: "Additional revenue from personalized travel recommendations.", id: "Calc_Airlines_Revenue_Travel_Recs", formula: "Param_Airlines_TravelerEngage_TR * (Param_Airlines_AddBookingConv_TR / 100) * Param_Airlines_AvgTicketValue_TR" },
    { industry: "eCommerce", driver: "Automated Issue Resolution", lever: "Monthly Savings from Automated Issue Resolution", description: "Savings from automating common issue resolution.", id: "Calc_Ecommerce_Savings_Issue_Resolution", formula: "Param_Ecommerce_CommonIssues_AIR * (Param_Ecommerce_AutoResolution_AIR / 100) * Param_Ecommerce_HumanCost_AIR" },
    { industry: "eCommerce", driver: "Enhanced Sales Conversion", lever: "Additional Monthly Revenue from Enhanced Conversion", description: "Additional revenue from AI-driven sales conversion.", id: "Calc_Ecommerce_Revenue_Enhanced_Conversion", formula: "Param_Ecommerce_Visitors_ESC * (Param_Ecommerce_ConvIncrease_ESC / 100) * Param_Ecommerce_AvgOrderValue_ESC" },
    { industry: "eCommerce", driver: "CLTV Growth", lever: "Additional Monthly Revenue from CLTV Growth", description: "Additional revenue from increasing customer lifetime value.", id: "Calc_Ecommerce_Revenue_CLTV_Growth", formula: "Param_Ecommerce_TotalCustomers_CLTV * (Param_Ecommerce_RepeatPurchaseIncrease_CLTV / 100) * Param_Ecommerce_AvgMonthlySpend_CLTV" },
    { industry: "Hospitality", driver: "Front Desk & Concierge Support Automation", lever: "Monthly Savings from Front Desk Automation", description: "Savings from automating front desk and concierge support.", id: "Calc_Hospitality_Savings_Front_Desk", formula: "Param_Hospitality_CommonIssues_FCS * (Param_Hospitality_AutoResolution_FCS / 100) * Param_Hospitality_HumanCost_FCS" },
    { industry: "Hospitality", driver: "Room Service & Housekeeping Mgmt Automation", lever: "Monthly Savings from Room Service Automation", description: "Savings from automating room service and housekeeping requests.", id: "Calc_Hospitality_Savings_Room_Service", formula: "Param_Hospitality_RoomServiceInquiries_RMS * (Param_Hospitality_AutoResolution_RMS / 100) * Param_Hospitality_HumanCost_RMS" },
    { industry: "Hospitality", driver: "Upselling & Cross-selling", lever: "Additional Monthly Revenue from Upselling/Cross-selling", description: "Additional revenue from upselling and cross-selling to guests.", id: "Calc_Hospitality_Revenue_Upsell_Cross_sell", formula: "Param_Hospitality_GuestInteractions_USC * (Param_Hospitality_UpsellConv_USC / 100) * Param_Hospitality_AvgUpsellValue_USC" },
    { industry: "Hospitality", driver: "Personalized Guest Experiences", lever: "Additional Monthly Revenue from Personalized Experiences", description: "Additional revenue from personalized guest experiences.", id: "Calc_Hospitality_Revenue_Personalized_Experiences", formula: "Param_Hospitality_TotalGuests_PGE * (Param_Hospitality_BookingConvIncrease_PGE / 100) * Param_Hospitality_AvgGuestSpendIncrease_PGE" },
    { industry: "QSR", driver: "Order Taking & FAQs Automation", lever: "Monthly Savings from Order Taking Automation", description: "Savings from automating order taking and FAQs.", id: "Calc_QSR_Savings_Order_Taking", formula: "Param_QSR_OrderInquiries_OTO * (Param_QSR_AutoResolution_OTO / 100) * Param_QSR_HumanCost_OTO" },
    { industry: "QSR", driver: "Drive-Thru & In-Store Support Automation", lever: "Monthly Savings from Drive-Thru & In-Store Automation", description: "Savings from automating drive-thru and in-store support.", id: "Calc_QSR_Savings_Drive_Thru", formula: "Param_QSR_DriveThruInquiries_DIS * (Param_QSR_AutoResolution_DIS / 100) * Param_QSR_HumanCost_DIS" },
    { industry: "QSR", driver: "Upselling & Combo Promotion", lever: "Additional Monthly Revenue from Upselling/Combos", description: "Additional revenue from upselling and promoting combos.", id: "Calc_QSR_Revenue_Upsell_Combos", formula: "Param_QSR_CustomerInteractions_UCP * (Param_QSR_UpsellConv_UCP / 100) * Param_QSR_AvgUpsellValue_UCP" },
    { industry: "QSR", driver: "Personalized Offers", lever: "Additional Monthly Revenue from Personalized Offers", description: "Additional revenue from personalized offers.", id: "Calc_QSR_Revenue_Personalized_Offers", formula: "Param_QSR_TotalCustomers_PO * (Param_QSR_OfferRedemptionIncrease_PO / 100) * Param_QSR_AvgOrderValueIncrease_PO" }
];

// --- HELPER FUNCTION TO INITIALIZE ALL INPUTS ---
const getInitialInputsState = () => {
    const initialState = {};
    for (const calculatorName in calculatorData) {
        initialState[calculatorName] = {};
        for (const section in calculatorData[calculatorName]) {
            calculatorData[calculatorName][section].forEach(input => {
                initialState[calculatorName][input.id] = input.value;
            });
        }
    }
    return initialState;
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

const ResultCard = ({ title, description, value }) => (
    <div className="card h-100 bg-light border-light-subtle rounded shadow-sm text-center p-3 d-flex flex-column">
        <h3 className="card-title fs-6 fw-medium text-primary-emphasis mb-2">{title}</h3>
        <p className="card-text text-secondary small flex-grow-1">{description}</p>
        <p className="fs-3 fw-bold text-success mt-auto mb-0">
            {`$${Math.round(value).toLocaleString()}`}
        </p>
    </div>
);


// --- DYNAMIC CALCULATOR COMPONENT ---

const CalculatorInputs = ({ calculatorName, inputs, onInputChange }) => {
    const data = calculatorData[calculatorName];

    const handleInputChange = (id) => (e) => {
        const value = e.target.value === '' ? '' : Number(e.target.value);
        onInputChange(calculatorName, id, value);
    };

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

// --- CALCULATION ENGINE AND OUTPUT DISPLAY ---
const CalculationEngine = ({ inputs, industry }) => {
    const results = useMemo(() => {
        const relevantCalculations = calculationDefinitions.filter(
            calc => calc.industry === industry || calc.industry === "Cross-Industry"
        );

        const calculatedValues = {};
        const allParams = { ...inputs["Cross-Industry"], ...inputs[industry] };

        // Handle potential missing inputs gracefully
        for (const key in allParams) {
            if (allParams[key] === '' || allParams[key] === null || isNaN(allParams[key])) {
                allParams[key] = 0;
            }
        }

        // A simple dependency solver: keep trying to solve until no more values can be calculated
        let solvable = true;
        while (solvable) {
            solvable = false;
            relevantCalculations.forEach(calc => {
                if (calculatedValues[calc.id] !== undefined) return; // Already calculated

                let formula = calc.formula;
                const variables = [...formula.matchAll(/(Param|Calc)_[A-Za-z0-9_]+/g)].map(m => m[0]);
                let isReady = true;

                for (const variable of variables) {
                    const isParam = variable.startsWith('Param_');
                    const valueSource = isParam ? allParams : calculatedValues;
                    let value = valueSource[variable];

                    if (value === undefined) {
                        isReady = false;
                        break;
                    }

                    formula = formula.replace(new RegExp(variable, 'g'), value);
                }

                if (isReady) {
                    try {
                        const monthlyValue = new Function(`return ${formula}`)();
                        calculatedValues[calc.id] = monthlyValue;
                        solvable = true; // We made progress, so loop again
                    } catch (error) {
                        console.error(`Error calculating ${calc.id}:`, error);
                        calculatedValues[calc.id] = 0;
                    }
                }
            });
        }


        const groupedResults = {};
        relevantCalculations.forEach(calc => {
            if (calc.industry === industry) {
                if (!groupedResults[calc.driver]) {
                    groupedResults[calc.driver] = [];
                }
                let annualValue = (calculatedValues[calc.id] || 0) * 12;
                // Exception for annual calculations from the sheet
                if (calc.id === "Calc_Healthcare_Revenue_Churn_Reduction" || calc.id === "Calc_Utilities_Revenue_Churn_Reduction") {
                    annualValue = calculatedValues[calc.id] || 0;
                }

                groupedResults[calc.driver].push({
                    ...calc,
                    annualValue: annualValue
                });
            }
        });

        return groupedResults;

    }, [inputs, industry]);

    if (Object.keys(results).length === 0) {
        return null;
    }

    return (
        <div className="mt-5">
            <h2 className="fs-4 fw-bold text-dark mb-4">Outputs</h2>
            {Object.entries(results).map(([driver, levers]) => (
                <div key={driver}>
                    <SectionTitle>{driver}</SectionTitle>
                    <div className="row g-4">
                        {levers.map(lever => (
                            <div key={lever.id} className="col-md-6 col-lg-4 d-flex">
                                <ResultCard
                                    title={lever.lever}
                                    description={lever.description}
                                    value={lever.annualValue}
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
    if (typeof process !== 'undefined' && process.env.BRANCH != 'develop' && process.env.GATSBY_IS_PREVIEW !== 'true') {
        return <p>This content is not available.</p>;
    }

    const [activeCalculator, setActiveCalculator] = useState("Cross-Industry");
    const [allInputs, setAllInputs] = useState(getInitialInputsState);

    const handleInputChange = (calculatorName, inputId, value) => {
        setAllInputs(prev => ({
            ...prev,
            [calculatorName]: {
                ...prev[calculatorName],
                [inputId]: value
            }
        }));
    };

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

                <CalculatorInputs
                    calculatorName={activeCalculator}
                    inputs={allInputs[activeCalculator]}
                    onInputChange={handleInputChange}
                />

                <CalculationEngine
                    inputs={allInputs}
                    industry={activeCalculator}
                />

            </div>
        </Layout>
    );
};

export default ValueCalcApp;