---
title: "DID/VC on Public Blockchain: Decentralization Pathways for Self-Sovereign Identity"
description: "Although the early DID/VC standards carried a clear public-blockchain genealogy, four pressures—specification neutrality, regulatory frameworks, revocation latency, and operational accountability—subsequently pushed mainstream trust roots back toward PKI and consortium chains. Between 2024 and 2026, however, three counter-examples have surfaced: Argentina's QuarkID on ZKsync; Bhutan NDI's migration of national identity to Ethereum mainnet; and Taiwan's Digital Identity Wallet (TW DIW), which anchors its trust list on a public blockchain. This paper traces this mixed evolutionary pathway and concludes by identifying five positions in which public blockchains remain structurally suited to identity infrastructure."
pubDate: 2026-05-02
date: 2026-05-02
tags: ["did", "vc", "ssi", "digital-identity", "blockchain", "eidas", "digital-wallet", "w3c", "trust-list"]
category: "Digital Identity and Trust"
aiModel: "Claude Opus 4.7"
aiPrompt: "Given that the DID/VC standards emerged from public-blockchain convictions about censorship resistance, why have trust lists not been firmly bound to public chains? Why is actual governmental and enterprise use of public blockchains for DID/VC deployments so limited?"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-05-01-did-vc-public-blockchain"
aiGeneratedDate: 2026-05-02
humanReviewed: true
lang: "en"
slug: "2026-05-01-did-vc-public-blockchain"
---

## § 1. Introduction: A Mixed Map of Public-Blockchain Identity Deployments

This paper takes up the question of why, despite the public-blockchain origins of the DID/VC family of standards, governmental and enterprise deployments that actually root their trust on permissionless public ledgers remain so few. A review of the W3C DID Specification Registries reveals that nearly every early DID method—did:btcr, did:ethr, did:ion, did:sov—emerged from a particular public blockchain.[^2] Yet a parallel review of governmental digital identity programs identifies only three cases in which the trust root or trust list is placed on a permissionless public chain: Argentina's QuarkID, deployed on the ZKsync L2 in Buenos Aires;[^3] Bhutan NDI, which formally migrated to Ethereum mainnet in October 2025 and became the first country in the world to anchor a population-scale national identity system on a public chain mainnet;[^28][^37] and Taiwan's Digital Identity Wallet (TW DIW), administered by the Ministry of Digital Affairs (moda), which records the list of trusted credential issuers on a public blockchain.[^24][^36]

The remainder of the field—the EU's EBSI, ISO mDL, Singapore's Singpass, India's Aadhaar, Brazil's gov.br, Japan's My Number Digital Authentication App (マイナンバー数字認証アプリ), and Taiwan's FidO mobile identification service—has almost uniformly chosen consortium chains, governmental PKI, or no chain at all.

Three public-blockchain counter-examples set against more than twenty mainstream PKI/consortium-chain deployments: this ratio itself warrants closer examination. Why does the gap remain so large between the foundational ten principles articulated by the SSI engineering community a decade ago and the deployment record as it stands today? And how have the public-blockchain counter-examples that surfaced beginning in late 2025 actually emerged? An initial conspiratorial hypothesis—that major corporations quietly excluded public chains during standards development—does not survive reading the specifications, the relevant judicial decisions, and the EUDI ARF documents.

A more plausible description is a historical pathway. DID/VC has traced a decentralization trajectory along which several uncoordinated pressures have, in turn, exerted force. Articulating this pathway requires beginning with origins and then working through five layers: foundational design, regulatory framework, technical engineering, policy, and empirical deployment. Only on that basis can the question of where public blockchains can still serve identity infrastructure be addressed responsibly.

## § 2. Early DID Genuinely Carried a Public-Blockchain Genealogy

The SSI and DID literature of 2015 through 2018 treated public blockchains as the default substrate, not as a marginal assumption. Christopher Allen's 2016 essay "The Path to Self-Sovereign Identity" articulated principles—"Existence," "Control," "Persistence"—that explicitly took permissionless ledgers as the assumed bearer of SSI.[^1]

Among early methods registered in the W3C DID Specification Registries, did:btcr was designed by Allen and colleagues in 2017; did:ethr was proposed by uPort/ConsenSys in 2018; did:ion was unveiled by Microsoft in 2019; and did:sov corresponded to Sovrin and Hyperledger Indy.[^2] These methods varied in their position along the public-versus-permissioned spectrum, but the overall orientation was clear: at that moment, the public-chain faction held the loudest voice.

Yet along the same timeline, a first compromise had already occurred. The Sovrin Foundation's 2017 *Trust Framework* set its objective as a "global public utility," while its implementation layer opted for the permissioned consortium chain of Hyperledger Indy.[^4] This was an early concession by the SSI community in the space between "publicly readable" and "permissioned writable," foreshadowing the more substantial decentralization shift to come. During the same period, did:web and did:key (taking shape progressively from 2019)[^2] also already existed. The "public-blockchain genealogy" is therefore better characterized as a shared design orientation rather than a single execution mode.

## § 3. W3C Returned the Choice to the Method Layer

The W3C DID Core v1.0 became a Recommendation on 19 July 2022. Section 1 of the document states plainly: "This specification does not require any specific blockchain or distributed ledger technology."[^5] Methods are designed to be pluggable, and DID resolution is delegated to each method's own implementation. The specification itself is ledger-neutral.

This neutrality has the appearance of engineering pragmatism, but it rests on a record of substantive factional disagreement. On 30 June 2022, the W3C Director ruled on the Formal Objections to DID 1.0. The record shows that Mozilla and Google raised objections, contesting elevation of the specification to Recommendation in the absence of a method-evaluation mechanism. The Director ultimately approved the specification while requiring the working group to address method-selection concerns in subsequent work.[^6]

The proposition that "neutralization was a compromise consensus" therefore has external evidentiary support. The ledger question was not unanimously regarded as resolved; rather, the working group deferred the controversy to the method layer in order to allow the core specification to pass.

The strength of this proposition warrants a caveat. Reading method neutrality as "the result of a compromise between the public-chain faction and the no-chain faction" is abductive reasoning—at present, one of the best available explanations rather than a deductively secured conclusion. Strengthening it further would require a clause-by-clause review of W3C DID WG GitHub issues and mailing-list records; that layer of primary source remains incomplete in the present analysis.[^7]

A weaker reading is also available: neutralization may simply reflect the engineering pragmatism of "different use cases have different requirements." The argument here is offered at the level of "one of the best available explanations," leaving room for revision under further evidence.

## § 4. Four Pressures Pushed Trust Roots Away from Public Chains

The pluggable interface left at the specification layer was, at the deployment layer, filled with specific selections by regulatory and operational accountability frameworks. This cross-layer relay constitutes the most load-bearing link in the entire decentralization pathway.

If specification neutrality were the sole factor, a substantial share of real-world deployments would still be expected to select public chains. The forces that pushed trust roots away from permissionless ledgers come more directly from four overlapping regulatory and operational pressures.

**The first pressure is the GDPR.** Within EU data-protection authorities, the French CNIL was the first to place the issue on the table. Its 2018 publication *Blockchain – Solutions for a Responsible Use* explicitly identified the conflict between public blockchains and the right to erasure under GDPR Article 17, and recommended off-chain storage of personal data with only hashes placed on-chain.[^8] Subsequent EDPB opinions continued in this direction. The immutability that was originally treated as a public-chain virtue became a direct liability under the European personal-data governance framework.

To make this concrete: when a driver's licence is revoked, but the blockchain still records its validity, revocation does not delete the record; it requires that invalidation be publicly noted elsewhere. The displacement between on-chain immutability and the data-protection obligation of erasure means that personal data cannot be written directly on-chain.

**The second pressure is eIDAS.** Regulation (EU) 2024/1183 (commonly known as eIDAS 2.0), formally published in April 2024, requires under Articles 5a and 5b that the issuers of the European Digital Identity Wallet and Qualified Electronic Attestations of Attributes (QEAA) must be Qualified Trust Service Providers, subject to oversight by a designated supervisory body of the member state.[^9] Section 6 (Trust Model) of the EUDI Architecture and Reference Framework v1.4.0 describes the Trusted List as a continuation of the eIDAS 1.0 model under Commission Implementing Decision (EU) 2015/1505 and ETSI TS 119 612, retaining the XML Trusted List architecture.[^10][^11][^12] Whether the ARF contains an explicit clause stating "why not public chains" is not evident from the public record; the discursive form appears to be "carry-over" rather than "rejection."

**The third pressure comes from KYC/AML.** FATF Recommendation 16 (the Travel Rule) imposes KYC and record-keeping obligations on Virtual Asset Service Providers and issuers,[^13] and the proof-chain requirements of national anti-money-laundering legislation jointly drive the demand for "revocability" and "identifiable legal-person accountability" above "algorithmic guarantees." When regulators seek to hold someone to account, permissionless chains lack a corresponding bearer of responsibility.

**The fourth pressure is the routine operational-accountability requirement of public-sector deployments.** Government programs require an identifiable responsible agency, budget source, operational contract, and grievance channel—none of which has a corresponding role on a permissionless chain. What can be placed on-chain are nodes, and nodes cannot bear administrative responsibility.

Whether these four pressures can independently produce the observed outcome warrants a counterfactual test, taken one at a time.

In a counterfactual world without GDPR Article 17, the QTSP-accountability requirement under eIDAS would remain a continuation of the 1999 Electronic Signatures Directive and would still produce a Trusted List model; in a counterfactual world without eIDAS, the Sovrin case demonstrates that operational accountability alone pushed the community toward a consortium chain.[^4]

If the FATF Travel Rule is removed entirely, the QTSP accountability and right-to-erasure frameworks in Europe were already in place before FATF brought virtual assets within its remit, and the option of public chains as trust roots was already difficult to sustain at that point. Removing KYC weakens the decentralization force somewhat, but not enough to reverse the trend.

The counterfactual for the fourth pressure (operational accountability) is most instructive. Suppose deployment were entirely private, with no governmental involvement at all; would the accountability-bearer pressure then disappear? Sovrin's record provides a counter-indication. Even in a purely private context without governmental accountability obligations, once a service bore identity issuance at scale, operators were still driven by funding sources, SLA requirements, and grievance procedures to seek a node set with legal-person bearers.[^4] A consortium chain remained the most natural landing point.

Examined jointly, the four pressures resemble a multiply-determined equilibrium rather than the unilateral effect of any single force.

## § 5. The Misalignment Between Revocation Latency and Immutable Ledgers

Setting regulatory considerations aside, an independent misalignment exists at the engineering layer between public chains and the requirements of VC revocation.

VC revocation requires real-time updates, repeated rewrites, and batch processing; the high finality latency and write costs of public chains do not match this requirement set. Microsoft ION adopts Sidetree on Bitcoin for batch anchoring, but each write remains constrained by Bitcoin's block time (stable at approximately ten minutes since 2009).[^14] Placing the revocation state of every VC directly on-chain is impractical with respect to both cost and latency.

The W3C also made a compatible specification-layer choice. The Bitstring Status List v1.0 specification deliberately treats revocation state as a "resource publishable at any URL"—HTTPS, IPFS, or on-chain anchoring—to avoid binding to specific infrastructure.[^15] VC Data Model v2.0 § 5.4 is also neutral with respect to revocation mechanism.[^16] These design choices are concrete engineering responses to the inadequacy of real-time on-chain revocation on the base layers of mainstream public chains.

This technical argument carries an opening. As Layer 2 and ZK rollup technologies substantially reduce finality and write costs, the claim that "public chains are unsuited to real-time revocation" will require partial rewriting; Argentina's QuarkID on ZKsync sits precisely at the leading edge of this technical transition.[^3] The scope of the present argument is therefore restricted to the current mainstream public-chain base layer, with an explicit caveat reserved for L2 and ZK trajectories. Once L2 finality falls below one second, the revocation-latency argument will require re-examination.

## § 6. A Comparative Map of Cases

Reviewing the publicly available record of government-level identity programs, the cases in which a trust root is placed on a permissionless public chain remain few; nevertheless, several important counter-examples have surfaced between 2024 and 2026, rendering the overall comparative map considerably more complex than it appeared in 2022.

At the EU level, EBSI is a consortium chain running variants of Hyperledger Besu or Quorum, maintained by member-state nodes.[^17] ISO/IEC 18013-5:2021 mDL combines PKI with device-local design, with no chain involved; the AAMVA U.S. driver's-licence digitization guidelines follow the same architecture.[^18][^19] Singapore's Singpass is anchored on NRIC, paired with governmental PKI.[^20] India's Aadhaar is a centralized biometric database with API access.[^21] Brazil's gov.br adopts federal PKI.[^22] Japan's My Number Digital Authentication App, launched in 2023, retains PKI as its trust root.[^23] Taiwan's FidO mobile identification service, citizen digital certificate (自然人憑證), and the Ministry of the Interior Certificate Authority (MOICA) are uniformly PKI-based.[^24]

Failure and obstructed cases must also be included, lest the analysis suffer from survivorship bias. Germany's ID Wallet, launched in 2021, was withdrawn by the BMI due to technical-stability and security problems; the underlying IDunion system adopted a Hyperledger Indy variant.[^25] Kenya's Huduma Namba was found by the High Court in 2021 to lack adequate data protection, halting deployment; this was a failure of centralized-database architecture and bears no relation to the on-chain/off-chain distinction.[^26] The Sovrin Foundation entered restructuring in 2021, as the flagship-foundation funding model proved unable to sustain infrastructure operation; this failure should be understood as distinct from "the SSI pathway as a whole."[^27]

The most interesting developments at the public-blockchain counter-example layer have occurred in the past two to three years. QuarkID, developed by the Buenos Aires government in collaboration with Extrimian and Matter Labs, was deployed on ZKsync L2 in 2024 and represents an early instance of a government-level DID actually landing on a public chain. The first phase has been opened for everyday use by Buenos Aires residents; actual adoption scale, long-term operations, and cross-domain interoperability remain to be verified in subsequent stages.[^3]

Bhutan NDI (Bhutan National Digital Identity) followed a more aggressive path. Launched on Hyperledger Indy in October 2023, migrated to Polygon in August 2024, and formally announced by Druk Holding & Investments and GovTech on 13 October 2025 to have migrated to Ethereum mainnet, the system is expected to complete on-chain credential migration for approximately 800,000 residents in the first quarter of 2026.[^28][^37] GovTech Secretary Jigme Tenzing publicly cited Ethereum's "high decentralization, which makes it nearly impossible to interrupt" as the selection rationale; Ethereum Foundation President Aya Miyaguchi publicly described the development as the first time "a population-scale identity system has been anchored on a public network." Placed in the context of the present paper, this case constitutes a strong counter-example to the thesis. In a context where the GDPR does not apply, the QTSP regime does not directly bind, and KYC regulatory pressure is comparatively light, anchoring trust on a public chain is not structurally infeasible; the outcome is more accurately treated as a function of governance and regulatory conditions.

Taiwan's Digital Identity Wallet (TW DIW) is another recent counter-example, occupying a hybrid-architecture middle path. The Digital Identity Wallet (TW DIW) gradually released by the Ministry of Digital Affairs (moda) beginning in 2024 adopts the OpenID4VCI and SD-JWT specifications and records the list of trusted credential issuers (trust list) on a public blockchain, such that the list itself is anchored in a form that no single participant can unilaterally forge or alter.[^24][^36][^38] Industry sources indicate that an Ethereum-family public chain is in use, but the specific chain ID, contract address, and DID method remain to be fully disclosed at the wallet.gov.tw developer page and in primary governmental documents. Taiwan's choice differs from Bhutan's in level: the statutory authority of the trust root remains borne by moda, MOICA, and the original issuing agencies, while the public chain bears the limited role of "trust-list anchoring." This arrangement aligns more closely with the constructive positioning of "public chain as time-stamp/anchor/immutable replica" articulated in the thesis.

Tokenized-identity initiatives constitute another category meriting separate examination. Cheqd binds VC revocation and trust registries to a token economy;[^29] Polygon ID, KILT, and Atala PRISM each have private-sector pilots and enterprise adoption;[^30][^31][^32] Worldcoin combines biometric uniqueness with a token, encountering privacy investigations or suspensions in Spain, Portugal, Kenya, Hong Kong, and elsewhere.[^33] These cases share one feature: empirical evidence of governments or large regulated financial institutions directly entrusting trust roots to tokenized infrastructure remains near zero. Characterizing them simply as "failures" would be inaccurate; they constitute a distinct trajectory currently evolving in marginal pilots and token-economy-driven domains.

A separate layer of Taiwanese civil-society practice must also be distinguished. Numbers Protocol writes image and event attestations to IPFS and on-chain ledgers; its adopters are partner media outlets and NGOs, and it does not directly bear an identity-issuance role, functioning more in the manner of constructive time-stamping.[^34] FAB DAO, operating since 2021 with on-chain voting experiments and NFT-based fundraising, belongs to the domain of civic advocacy and DAO governance and does not bear an identity root.[^35] Conflating these civil-society pilots with "governmental identity infrastructure" is a common misreading. Separating the civil-society pilots from the public-sector Digital Identity Wallet reveals that two layers of local on-chain identity practice are advancing in Taiwan in parallel.

When the foregoing cases are laid out together, the decentralization narrative becomes less thin than it appeared in 2022. The mainstream remains PKI and consortium chains, but counter-examples in which a public chain serves as trust anchor or trust root are shifting from "single-digit isolated experiments" to "cross-continental multi-country pilots." Bhutan moves the trust root in its entirety to a public-chain mainnet; Taiwan anchors the trust list on a public chain; QuarkID places a government-level DID on an L2. These three trajectories revise the thesis at three different strengths but do not yet overturn it, since the dominant markets—the EU, the major East Asian economies, and North America—continue along the consortium-chain/PKI path.

## § 7. What Public Blockchains Can Still Do in Identity Infrastructure

Having articulated "why not on-chain," it is worth pausing to identify the positions public blockchains can still legitimately bear within this infrastructure stack. Framing this as "what public blockchains are permitted to do" would suggest a posture of exclusion; the more accurate framing reads the list as "what public blockchains are genuinely well-suited to do in identity infrastructure." Returning to the two questions reserved at the outset—why the trust list has not been firmly bound to public chains, and why actual governmental adoption is so limited—the preceding five sections have articulated the sources of pressure; the present section addresses the remaining question of where public chains can still legitimately stand.

A prefatory observation. The five positions below may at first appear to be concessions, but in the realities of governance they represent the locations where public blockchains have the strongest opportunity. A trust chain resembles a load-bearing wall: the load-bearing wall is not at the façade or the roof but embedded within structural members that are unseen yet structurally indispensable. The positions currently occupied by public blockchains correspond to such structural members.

**First, immutable redundant copies of revocation state.** The Bitstring Status List specification itself permits publishing the revocation bitstring to IPFS, on-chain anchoring, or HTTPS endpoints.[^15] Using a public chain as an immutable mirror of revocation state provides an independently verifiable replica when traditional CAs or trust-list service providers go offline. The value resides in the keyword "redundancy"; this position is not "principal control." A more concrete framing is that of disaster-recovery tape archives—silent in normal operation, indispensable in failure conditions.

**Second, time-stamp anchoring of cross-organizational trust-list changes.** Who added or removed whom from a trust list, and when, is a change history that warrants a publicly auditable timeline. Microsoft ION's Sidetree-on-Bitcoin path belongs to this direction.[^14] EBSI documents have also previously discussed optional anchoring to Ethereum.[^17] What the public chain bears is "timeline honesty"; governance of the trust root remains with statutory institutions or consortium governance structures.

**Third, event locks for cross-domain auditing.** When multiple organizations jointly process a single authentication flow, the unalterability of the event sequence is useful for ex post accountability. This role is homologous with what Numbers Protocol performs in the image-attestation context: it does not bear identity issuance but rather the temporal order and content fingerprints of events.[^34]

**Fourth, direct bearing of the trust root or trust anchor under specific governance conditions.** Argentina's QuarkID (government-level DID on the ZKsync L2),[^3] Bhutan NDI (the population-scale identity system migrated to Ethereum mainnet in October 2025),[^28][^37] and Taiwan's Digital Identity Wallet (trust list anchored on a public chain)[^24][^36] together constitute the three trajectories that have surfaced between 2024 and 2026. In contexts with smaller scale, comparatively relaxed regulation, and government willingness to accept technological-frontier risk, a public L2 or mainnet may directly bear the trust root; in contexts where governance is borne by statutory institutions, a public chain may bear only the immutable anchoring of the trust list, partitioning legal accountability from technical anchoring. Treating this position as a universal solution would be a misjudgment; treating it as a feasible solution under specific boundary conditions is more accurate. The boundary conditions include several elements: relaxable or stratified regulatory environments, predictable regime continuity, L2 finality and costs within an acceptable range, geographically bounded cross-domain interoperability, and the willingness of the state or relevant ministry to share governance space with overseas organizations such as the Ethereum Foundation. The most consequential feature of this position is that it is no longer "marginal" but rather "an alternative track of the mainstream"; from 2024 onward, what runs on this track is not private experimentation but governmental deployment serving citizens.

**Fifth, the experimental space for marginal trial-and-error.** Cheqd, Polygon ID, KILT, Atala PRISM, and Worldcoin each conduct experiments under distinct assumptions.[^29][^30][^31][^32][^33] Even if most of these will not be adopted in the short term by regulation-led EU and East Asian governmental deployments, the trial-and-error process itself contributes to the evolution of SSI specifications. L2/ZK revocation models, token-driven trust registries, biometric uniqueness protocols, and bridging between permissioned SSI and public chains all require continued empirical work.

With this list articulated, the decentralization narrative is no longer reducible to "public blockchains have failed in the identity domain." A more accurate description is that the governance attributes of the trust root and the permissionless ethos of public blockchains have undergone a redivision of roles. The trust root bears statutory accountability, revocation latency, and the right to erasure—attributes that require legal-person bearers and administrative structures. The public blockchain bears time-stamp honesty, cross-domain audit locks, marginal experimentation, and the trust root in high-autonomy contexts—domains in which a permissionless substrate genuinely excels. The two attribute sets need not be forced into a single architecture and sacrifice one another. Two orders are at stake: one in which someone can be brought to account; one in which no one can block participation.

## § 8. Thin Areas in the Argument

Several thin areas of this analysis are noted here for subsequent fact-checking and reinforcement.

The internal W3C DID WG debates concerning ledger or no-ledger choices have been cited here only at the level of the Director's ruling notice and the main specification text. A clause-by-clause review of specific GitHub issue IDs, mailing-list threads, and rubric proposals remains outside the scope of the present analysis.[^7] Raising "neutralization as compromise" to a stronger argumentative strength requires this layer of primary-source support.

Whether the EUDI ARF contains an explicit clause stating "why not public chains" is not evident from the public record; the discursive form appears to be "carry-over of the Trusted List" rather than a direct rejection clause. The conclusion should accordingly be expressed in terms of "carry-over" and "non-adoption," not "explicit refusal."

Bhutan NDI only recently migrated to Ethereum mainnet in October 2025, and details of on-chain contract addresses, cross-chain revocation mechanisms, and the migration timeline for the full 800,000-resident credential set remain at the level of public reporting more than at the level of primary announcements by Druk Holding & Investments and GovTech.[^28][^37] First-year operational data, availability metrics, and a third-party audit of cost/latency differences against the Polygon phase remain unavailable.

The Taiwan case requires a two-layer self-correction. The PKI route for FidO and MOICA is clear.[^24] The placement of the trust list on a public blockchain by the Digital Identity Wallet (TW DIW) has been confirmed in multiple public reports and industry sources;[^36] however, the specific chain ID, contract address, DID method, annual budget (in NTD), and actual adoption figures remain undisclosed at the level of the wallet.gov.tw developer page and primary governmental documents. The present paper credits industry indications of "Ethereum-family" but leaves the specific chain identity and contract details for subsequent verification.

The actual adoption numbers, second-phase expansion plans, and cross-domain interoperability verification of QuarkID remain at the reporting level rather than the level of official documentation.[^3] Treating it as "marginal empirical evidence" is appropriate; treating it as "proof of mainstream feasibility" would exceed the strength its sample size can support.

L2 and ZK technology developments constitute the segment of the argument most readily subject to revision. Should L2 finality and costs continue to decline and an on-chain data structure permitting large-scale batch revocation emerge, the technical argument concerning the misalignment between revocation latency and immutable ledgers will weaken correspondingly.

## § 9. Closing Reflection

The expectation upon beginning this analysis was that it would yield an account of "why public blockchains have lost the identity contest." The course of investigation produced a different script. Winning and losing are too coarse a vocabulary. A more accurate description is that the engineering community has spent a decade learning, through trial and error, to separate "trust root" from "permissionless substrate"—and to recognize what each can and cannot bear.

Public blockchains have not been excluded; they have retreated to the positions for which they are genuinely well-suited—time-stamping, redundancy, marginal experimentation, and the trust root under specific governance conditions. This position is unassuming, but structurally stable.

Returning from the initial enthusiasm of reading Christopher Allen's ten principles in 2018 to the deployment map of 2026, the map is more mixed than anticipated. The mainstream in the EU, Singapore, India, Japan, and Brazil remains PKI and consortium chains; yet Bhutan has migrated its national identity in its entirety to Ethereum mainnet, Taiwan's Digital Identity Wallet has anchored its trust list on a public chain, and Argentina's QuarkID runs on ZKsync—three trajectories that represent three different strengths of "public chain as trust anchor" practice, all concentrated in late 2025 and early 2026. The foundational ten principles of a decade ago have neither been fully realized nor wholly refuted; they have instead been sliced by deployment realities into "what can be done" and "what cannot be done," with different states selecting their position according to their own governance contexts.

For the continued observation of digital identity planning in Taiwan, this mixed landscape provides some basis for confidence. Public blockchains can perform substantive work in identity infrastructure; the form of the task simply differs from the vision of a decade ago. A further caveat is also in order: the thesis here is not a final settlement but the directional reading available from the 2026 map; whether the next year reshuffles the map again cannot be foretold.

Looking ahead, once L2 finality falls below one second, once an on-chain data structure permitting large-scale batch revocation matures, and once the Ethereum-mainnet trust root begins to be replicated beyond Bhutan, the question of which of these five positions will be displaced and which will expand remains unanswered. Whether Taiwan's next phase of the Digital Identity Wallet will follow Bhutan's path and place the trust root itself on-chain is among the more salient signals to watch.

## References

[^1]: Allen, Christopher. "The Path to Self-Sovereign Identity." *Life With Alacrity*, 2016-04-25. https://www.lifewithalacrity.com/2016/04/the-path-to-self-soverereign-identity.html (accessed 2026-04-30). Source level A.

[^2]: W3C. *DID Specification Registries*. https://www.w3.org/TR/did-spec-registries/ (accessed 2026-04-30). Source level A.

[^3]: QuarkID (Buenos Aires + ZKsync). https://quarkid.org/ (accessed 2026-04-30). Source level B; primary governmental documentation pending.

[^4]: Sovrin Foundation. *The Sovrin Trust Framework v1*, 2017. https://sovrin.org/library/sovrin-trust-framework/ (accessed 2026-04-30). Source level A.

[^5]: W3C. *Decentralized Identifiers (DIDs) v1.0*. W3C Recommendation, 2022-07-19. https://www.w3.org/TR/did-core/ (accessed 2026-04-30). Source level A.

[^6]: W3C Director. "Decision on Decentralized Identifiers (DIDs) v1.0 Formal Objections." 2022-06-30. https://www.w3.org/2022/06/DIDRecommendationDecision.html (accessed 2026-04-30). Source level A.

[^7]: W3C DID WG GitHub Issues. https://github.com/w3c/did-core/issues (accessed 2026-04-30). Source level B; specific issue IDs and mailing-list threads remain to be reviewed clause by clause.

[^8]: CNIL. "Blockchain – Solutions for a Responsible Use of the Blockchain in the Context of Personal Data." 2018. https://www.cnil.fr/en/blockchain-and-gdpr-solutions-responsible-use-blockchain-context-personal-data (accessed 2026-04-30). Source level A.

[^9]: European Parliament and Council. Regulation (EU) 2024/1183 amending eIDAS, OJ L, 2024-04-30. https://eur-lex.europa.eu/eli/reg/2024/1183/oj (accessed 2026-04-30). Source level A.

[^10]: European Commission. *EUDI Architecture and Reference Framework v1.4.0*. https://github.com/eu-digital-identity-wallet/eudi-doc-architecture-and-reference-framework (accessed 2026-04-30). Source level A; explicit ARF text on "why not public chains" remains to be verified.

[^11]: European Commission. Commission Implementing Decision (EU) 2015/1505 (XML Trusted Lists technical specification). https://eur-lex.europa.eu/eli/dec_impl/2015/1505/oj (accessed 2026-04-30). Source level A.

[^12]: ETSI. *TS 119 612 Trusted Lists*. https://www.etsi.org/deliver/etsi_ts/119600_119699/119612/ (accessed 2026-04-30). Source level A.

[^13]: FATF. *International Standards on Combating Money Laundering and the Financing of Terrorism and Proliferation*. https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Fatf-recommendations.html (accessed 2026-04-30). Source level A.

[^14]: Decentralized Identity Foundation. *ION (Sidetree on Bitcoin) Documentation*. https://identity.foundation/ion/ (accessed 2026-04-30). Source level B; primary technical documentation.

[^15]: W3C. *Bitstring Status List v1.0*, Candidate Recommendation Draft, 2024-12-10. https://www.w3.org/TR/vc-bitstring-status-list/ (accessed 2026-04-30). Source level A.

[^16]: W3C. *Verifiable Credentials Data Model v2.0*, W3C Recommendation, 2025. https://www.w3.org/TR/vc-data-model-2.0/ (accessed 2026-04-30). Source level A.

[^17]: European Commission. EBSI (European Blockchain Services Infrastructure) Documentation. https://ec.europa.eu/digital-building-blocks/sites/display/EBSI (accessed 2026-04-30). Source level A.

[^18]: ISO. *ISO/IEC 18013-5:2021 Personal Identification — ISO-Compliant Driving Licence — Part 5: Mobile Driving Licence (mDL) Application*. https://www.iso.org/standard/69084.html (accessed 2026-04-30). Source level A.

[^19]: AAMVA. *Mobile Driver's License Implementation Guidelines*. https://www.aamva.org/topics/mobile-drivers-license (accessed 2026-04-30). Source level A.

[^20]: Government of Singapore. Singpass. https://www.singpass.gov.sg/ (accessed 2026-04-30). Source level A.

[^21]: UIDAI India. Aadhaar Technical Architecture. https://uidai.gov.in/ (accessed 2026-04-30). Source level A.

[^22]: Governo do Brasil. gov.br. https://www.gov.br/ (accessed 2026-04-30). Source level A.

[^23]: デジタル庁 (Digital Agency, Japan). マイナンバー数字認証アプリ (My Number Digital Authentication App). https://www.digital.go.jp/ (accessed 2026-04-30). Source level A.

[^24]: Ministry of Digital Affairs (moda) / Ministry of the Interior Certificate Authority (MOICA) / Taiwan Digital Identity Wallet official sites. https://moda.gov.tw/, https://moica.nat.gov.tw/, https://wallet.gov.tw/ (accessed 2026-05-02). Source level A; the PKI route for FidO and citizen digital certificate is clear. The Digital Identity Wallet (TW DIW) adopts OpenID4VCI and SD-JWT and anchors the trust list on a public blockchain; the specific chain ID, contract address, DID method, annual budget (NTD), and implementation details remain to be fully disclosed at the wallet.gov.tw developer page and in primary governmental documents.

[^25]: Reporting on the withdrawal of Germany's ID Wallet. Heise / c't, 2021. Source level C; failure-case reference.

[^26]: Reporting on the Kenyan High Court ruling on Huduma Namba. Daily Nation / BBC, 2021. Source level C; failure-case reference.

[^27]: Sovrin Foundation 2021 restructuring announcement. https://sovrin.org/ (accessed 2026-04-30). Source level C; organizational-status reference.

[^28]: Bhutan NDI (Druk Holding & Investments / GovTech). "Bhutan Adopts Ethereum for National Identity: A New Chapter in Digital Sovereignty." 2025-10-13. https://www.bhutanndi.com/ (accessed 2026-05-02). Source level A; launched on Hyperledger Indy in October 2023, migrated to Polygon in August 2024, and formally migrated to Ethereum mainnet on 13 October 2025, affecting approximately 800,000 residents and expected to complete credential migration in Q1 2026. Public statements by GovTech Secretary Jigme Tenzing and Ethereum Foundation President Aya Miyaguchi serve as corroborating evidence. On-chain contract addresses and cross-chain revocation implementation details remain pending primary disclosure.

[^29]: Cheqd Network. https://cheqd.io/ (accessed 2026-04-30). Source level B.

[^30]: Polygon ID. https://polygon.technology/polygon-id (accessed 2026-04-30). Source level B.

[^31]: KILT Protocol. https://www.kilt.io/ (accessed 2026-04-30). Source level B.

[^32]: Atala PRISM / Cardano. https://atalaprism.io/ (accessed 2026-04-30). Source level B.

[^33]: Worldcoin / World ID. https://worldcoin.org/ (accessed 2026-04-30). Source level B; multi-jurisdictional privacy investigations and suspensions documented in national media coverage.

[^34]: Numbers Protocol. https://www.numbersprotocol.io/ (accessed 2026-04-30). Source level B; operates in the image and event attestation domain and does not bear identity issuance.

[^35]: FAB DAO. https://fabdao.com/ (accessed 2026-04-30). Source level B; operates as a civic-advocacy DAO and does not bear an identity root.

[^36]: Hsu, Ming-en. "Digital Identity Wallet: A New Method of Presenting Credentials and a Privacy Revolution in Identity Autonomy" (數位憑證皮夾：出示證件的新方法、身分自主的隱私革命). *BlockTrend*, 2025-03-12. https://www.blocktrend.today/p/676 (accessed 2026-05-02). Source level B; cites moda officials and the wallet.gov.tw developer page, explicitly stating that "the trust list is recorded on the blockchain." Industry sources indicate an Ethereum-family chain; the specific chain identity remains to be confirmed in primary governmental documentation.

[^37]: Burt, Chris. "Bhutan Begins Migrating Self-Sovereign Digital ID to Ethereum." *Biometric Update*, 2025-10-14. https://www.biometricupdate.com/202510/bhutan-begins-migrating-self-sovereign-digital-id-to-ethereum (accessed 2026-05-02). Source level B+; international industry-trade-press reporting that cites public statements by GovTech Secretary Jigme Tenzing. Cross-corroborated by reporting in Daily Bhutan, The Block, Unchained, Buddhistdoor, and Fintech News Singapore.

[^38]: iThome. "Introducing International Standards and Technologies, Establishing a Public Foundation for Domestic Digital Credential Verification: The Digital Identity Wallet Achieves Data Sovereignty and Simplified Verification" (引進國際標準及技術，建立國內數憑證驗證的公共基礎：數位憑證皮夾實現資料自主權及簡化驗證的關鍵). https://www.ithome.com.tw/news/173834 (accessed 2026-05-02). Source level B; Taiwanese specialist IT trade press, describing the combination of W3C VC + OpenID4VCI + SD-JWT + blockchain-anchored trust list.
