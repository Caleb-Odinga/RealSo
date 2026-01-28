import React from 'react'
import Hero from './Hero'
import InquiryToDealProcess from './InquiryToDealProcess';
import SolutionSections from './solu';

export default function Solutions() {

  const steps = [
        {
            number: 1,
            title: "Capture & Classification",
            description: "Inquiries are received, categorized, and logged with a unique reference ID ",
            color: "orange"
        },
        {
            number: 2,
            title: "Market Intelligence & Scoping ",
            description: "Initial information packs clarify requirements, feasibility, and market context. ",
            color: "amber"
        },
        {
            number: 3,
            title: "Matchmaking & Shortlisting",
            description: "Relevant counterparties, partners, or institutions are identified. ",
            color: "green"
        },
        {
            number: 4,
            title: "Deal Structuring & Capacity Review ",
            description: "Commercial, technical, financial, and regulatory requirements are refined..",
            color: "teal"
        },
        {
            number: 5,
            title: "Negotiation Support",
            description: "Deal terms are supported through guided engagement.",
            color: "blue"
        },
        {
            number: 6,
            title: "Execution & Contracting Support ",
            description: "Documentation, coordination, and execution readiness are supported..",
            color: "indigo"
        },
        {
            number: 7,
            title: "Post-Deal Reporting ",
            description: "Outcomes are tracked to enable repeat trade and institutional learning.",
            color: "purple"
        }
    ];

  return (
    <div>
<Hero name="Solutions That Power Execution " sub="Each solution within the RSA ecosystem addresses a specific bottleneck in African 
trade and investment execution." />
<SolutionSections/>

    </div>
  )
}
