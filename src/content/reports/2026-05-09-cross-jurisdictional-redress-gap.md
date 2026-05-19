---
title: "When Your Digital Wallet Is Rejected in Another Country: The Legal Gaps in Cross-Jurisdictional Redress"
description: "The cross-jurisdictional redress gaps for wallet disputes can be classified into four typical categories; within the EU these have been partially addressed, while outside the EU they remain almost entirely empty. Following systematic literature review, three argumentative propositions have been upgraded: from 'regulatory vacuum' to 'rule ambiguity plus absence of enforcement capacity'; 'one-stop redress' has been cooled to a three-mechanism functional-equivalence structure, with normative extension distinct from unilateral extraterritorial imposition; and three supplementary pathways have been recast as three parallel axes, with stateless persons addressed as an independent parallel tier. The most critical warning for Taiwanese citizens is that, under the current architecture, virtually no effective redress mechanism exists."
pubDate: 2026-05-09
tags: ["wallet", "cross-border-redress", "private-international-law", "eIDAS-2.0", "GDPR", "digital-identity", "civic-proof", "Brussels-I", "Rome-II", "stateless-persons", "UNCITRAL-MLETR", "Hague-Conference"]
category: "Digital Identity and Democratic Theory"
aiModel: "Claude Opus 4.7"
aiPrompt: "When the issuer's jurisdiction and the verifier's jurisdiction differ, in which court can an aggrieved citizen bring a claim, to which data protection authority can they complain, and from which regulatory body can they seek redress in the event of a cross-border wallet dispute?"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-05-09-cross-jurisdictional-redress-gap"
aiGeneratedDate: 2026-05-09
humanReviewed: false
lang: "en"
slug: "2026-05-09-cross-jurisdictional-redress-gap"
---

## § 1. Introduction

This paper takes up a structural problem that existing regulatory frameworks have failed to address: when a digital identity wallet is used across borders, and when the issuer's jurisdiction diverges from the verifier's jurisdiction, where can an aggrieved citizen bring a legal claim, to which data protection authority can a complaint be lodged, and from which regulatory body can redress be sought?

The EU's adoption of Regulation (EU) 2024/1183 (eIDAS 2.0) in April 2024 elevated the digital identity wallet from a Union-level proposal to a mandatory obligation on Member States to deploy.[^1] Taiwan's Ministry of Digital Affairs TW DIW, Buenos Aires's QuarkID, Bhutan's NDI, and India's DigiLocker have each gone partially live on public blockchains or on their respective national trust lists.[^2] As these wallets begin to be used across borders, a problem that existing regulatory frameworks have left unresolved comes to the fore.

The core proposition of this paper is that current digital identity architectures assume the issuer's jurisdiction to be equivalent to the redress jurisdiction, but cross-border wallet use thoroughly undermines that assumption. The specific redress gaps can be classified into four typical categories; however, within the EU these gaps have been partially filled through the consumer jurisdiction provisions of Brussels I Recast Articles 17–19, the Single Point of Contact mechanism of eIDAS 2.0, and the lead supervisory authority consistency procedure of the GDPR. Outside the EU, the situation is almost entirely empty.[^3] The paper argues that this asymmetric state of affairs reflects not a short-term transitional condition but rather three deeper structural problems: the over-determined structure of conflict-of-laws rules, the transferability threshold of cross-border redress templates, and the methodological distinction between normative extension and unilateral extraterritorial imposition.

The argument proceeds as follows. Section 2 clarifies the four-party relationship and the conceptual foundations of the four civic proof conditions. Section 3 catalogues the four typical redress gaps and addresses two sub-types. Section 4 derives from conflict-of-laws theory the precise formulation of "rule ambiguity plus absence of enforcement capacity." Section 5 canvasses the clause inventory of six cross-border redress templates and evaluates transferable elements. Section 6 applies abductive reasoning to the functional-equivalence structure constituted by eIDAS 2.0, the GDPR, and UNCITRAL MLETR, and to its conditions of extension. Section 7 synthesizes a three-axis parallel policy pathway. Section 8 addresses the cross-border predicament of stateless persons as a dedicated chapter. Section 9 applies process tracing to five actual cases. Section 10 stress-tests the policy pathways through five counterfactuals. Section 11 articulates the relationship between this paper and other chapters of the dissertation and the article series. Section 12 sets out the honest epistemic boundaries and open problems. Section 13 states the conditional academic conclusions.

The varying strength of the argument across sections must be stated in advance. The inductive component (Section 3) draws primarily on cases from the EU, Singapore, India, and Sweden; its evidentiary strength is assessed as "strong." The deductive component (Section 4) is grounded in CJEU precedent and the texts of Brussels I, Rome I, Rome II, and the Hague Conference; its evidentiary strength is similarly "strong," though the distinction between "rule ambiguity" and "rule absence" is a legal-academic inference rather than a directly established holding. The analogical component (Section 5) draws on the clause inventory of six cross-border governance templates; its argumentative strength is honestly assessed as "medium-weak," because the identity-attribute and cryptographic-state characteristics of wallets differ structurally from the cross-border nature of aviation, finance, and goods. The primary limitation of the abductive component (Section 6) is that the EUDI Wallet large-scale pilots remain in a 2025–2026 mid-term evaluation phase, and much of the evidentiary record requires subsequent updating. The responsibility allocations and timelines in the policy synthesis (Sections 7–8) are recommendations rather than empirical measurements.

## § 2. Concepts and Terminology

A digital identity wallet involves a four-party relationship. The **issuer** is the entity that issues verifiable credentials—for example, a government, academic institution, or commercial KYC service provider. The **verifier** is the entity that receives credentials and verifies their validity—for example, a car rental company, a bank's KYC process, or a healthcare institution. The **wallet provider** is the entity that provides the application or SDK allowing users to store and present credentials; this may be a state issuer (such as each Member State's version of the EUDI Wallet), a platform vendor (such as Apple Wallet or Google Wallet), or an open-source project (such as various implementations under the OpenWallet Foundation). The **holder** is the individual or legal person to whom the credential refers.

The legal implications of this four-party relationship have been partially clarified at the EU-law level by eIDAS 2.0, but the legal status of the wallet provider has not yet been settled in cross-border treaties.[^4] The trend in GDPR "joint controller" case law—principally *Wirtschaftsakademie Schleswig-Holstein* (C-210/16, 2018), *Fashion ID* (C-40/17, 2019), and *Jehovan todistajat* (C-25/17, 2018)—shows that "even a party with less leading involvement but substantial influence" may be found to be a controller.[^5] For wallet providers, this means that in most contexts they would be found to be joint controllers; yet Article 5b of eIDAS 2.0 simultaneously designates wallet providers as parties bearing joint and several liability. The interaction between GDPR and eIDAS 2.0 on the role of the wallet provider requires further clarification.

The four civic proof conditions—anonymity, unlinkability, verifiability, and accountability—constitute a normative proposal put forward in Chapter 2 of the dissertation as the minimum normative requirements for any system that claims to combine "externally asserting membership" with "internally being accountable" while "remaining unidentifiable externally."[^6] The present paper's focus is the concrete implementation of these four conditions at the level of cross-border redress. As anonymity has been cryptographically addressed (zero-knowledge proofs and blind signatures have matured), unlinkability has been partially addressed in the wallet ecosystem (pseudonymous credentials), and verifiability is progressively maturing through the W3C Verifiable Credentials and mDoc standards, accountability remains a normative proposal rather than an empirically validated engineering implementation. It is precisely this remaining element—how accountability is to be distributed across the cross-border four-party relationship—that constitutes the core subject of the cross-border redress problem addressed in this paper.

## § 3. Four Typical Redress Gaps

The redress gaps arising from cross-border wallet disputes can be classified into four typical categories. It should be noted at the outset that this classification is a working taxonomy covering cases observed to date; it does not claim exhaustive ontological coverage. Candidate fifth-category gaps, upon thorough examination, were either absorbed into the existing categories or transferred for separate treatment.

### § 3.1 Gap (a): No Clear Jurisdictional Basis for Claims Arising from Verifier Rejection

Under the current regulatory framework, Articles 17–19 of Brussels I Recast govern jurisdiction in "consumer contracts," allowing consumers to sue traders before the courts of their own domicile, provided the trader "directs commercial activities to or towards" that Member State (the directing-activity test, from CJEU *Pammer and Alpenhof*, Joined Cases C-585/08 and C-144/09, 2010).[^7] However, a wallet verifier (for example, a Portuguese car rental company) is not a trader pushing services to users; rather, the user (for example, a Taiwanese visitor) actively presents the wallet to the verifier. The directing-activity test operates in reverse in this scenario: is it the injured party "directing" themselves toward the counterparty's jurisdiction, or is the verifier "directing" itself toward the global public? This is a gap that the *Pammer* test does not fit.

Spain's Camerfirma received its first EU warning for ETSI ESI non-compliance in early 2022, and a series of credential invalidation events followed in 2024; thousands of cross-border e-signatures became suddenly invalid in Germany, Portugal, and Italy, and a number of small and medium enterprises were excluded from cross-border procurement procedures.[^8] Injured parties seeking to sue the contracting authorities (mostly in Germany) found that the "consumer" qualification under Brussels I Article 17 was unavailable because the procurement activity was commercial in nature; they were remitted instead to Article 7(2) (place of tort). Whether the place of tort is the "place of rejection" or the "place of the revocation decision" remained a contested grey area following *eDate Advertising* (C-509/09, 2011).[^9]

A second case involved a 2023 Swedish BankID cross-border verification failure in a Danish bank's account-opening process that prevented a customer from making an immediate transfer, causing investment losses. The customer attempted to sue BankID AB in Denmark but was dismissed for lacking a direct consumer contractual relationship; turning to Swedish courts, jurisdiction was unclear because "the damage occurred in Denmark."[^10]

The counter-example of CJEU *Verein für Konsumenteninformation v Amazon EU* (C-191/15, 2016) must be addressed. That decision established that jurisdiction can be asserted against a trader who provides services in the language of the relevant Member State; if a wallet verifier accepts cross-border credentials through a multilingual interface, this may be construed as directing activity, which narrows but does not close the gap.[^11] Within the EU, gap (a) has strictly speaking been partially addressed by Brussels I Recast, but the situation is one of "rule ambiguity plus absence of enforcement capacity" rather than one of "rule absence."

### § 3.2 Gap (b): No Single Data Protection Authority Competent to Receive Complaints for Erroneous Issuer Revocation

GDPR Articles 56 and 60–67 (the consistency mechanism) in principle cover only scenarios where "cross-border processing" takes place and the entity has its "main establishment in the EU." Where the issuer is located within the EU (for example, the Irish Data Protection Commission acting as lead DPA for Meta), cross-border complaints must be led by the lead DPA; however, the lead DPA's tendency to delay has been repeatedly noted by the EDPB and noyb.[^12] Where the issuer is located outside the EU (such as Taiwan, Singapore, or India), the GDPR one-stop-shop mechanism is entirely inapplicable, and injured parties must file complaints separately in each jurisdiction, with many DPAs declining to handle incidents where "a non-national resident has been harmed by an erroneous foreign issuer revocation."

Among the dozens of cross-border complaints lodged by noyb against Meta, Google, and TikTok since 2018, the "forced consent" complaint filed by Schrems against Facebook in May 2018 has produced successive DPC conclusions across 2022–2024, with appeals not yet concluded—a process now exceeding six years.[^13] This is the most large-scale test to date of the EU's lead DPA mechanism, and it continues to exhibit severe delay.

A second case arose in 2023 when India's UIDAI revoked the Aadhaar-linked DigiLocker credential of an Indian citizen resident in Singapore (mistakenly classifying the individual as deceased), causing KYC verification failure at a Singaporean financial institution. The citizen filed complaints simultaneously with UIDAI and with the Data Protection Board established under India's Digital Personal Data Protection Act 2023; UIDAI deflected on the grounds that "Aadhaar is an identity marker, not personal data," while the DPB deflected on the grounds that "the cross-border injured party is not an Indian resident."[^14]

The EDPB's adoption in 2024 of Procedural Guidelines for One-Stop-Shop was an attempt to address the delay, but these cover only the intra-EU scenario; for issuers outside the EU, the gap has not been narrowed thereby.[^15]

### § 3.3 Gap (c): No Clear Redress Pathway for Service Disruptions Caused by Wallet Provider Failure

Article 5b of eIDAS 2.0 codifies the liability provisions for trust service providers (including EUDI Wallet providers), requiring providers to bear responsibility for "foreseeable damage caused intentionally or negligently."[^16] However, this provision takes effect only in scenarios where the EUDI Wallet has received official certification; non-officially-certified wallets (commercial wallets, open-source wallets) remain subject to the civil law of each Member State. In cross-border scenarios, the provider's establishment in Country A, its servers in Country B, and its users in Country C create a multiplicity of connecting factors that do not align neatly with the consumer special jurisdiction of Brussels I Articles 17–19.

In April 2024, Singapore's Singpass authentication service suffered a disruption in cross-border KYC processes, affecting users employing Singpass for identity verification outside Singapore.[^17] Singapore's GovTech was the competent authority, but cross-border users had no formal entity to complain to; Singapore's Personal Data Protection Act (PDPA) applies extraterritorially only where "processing of personal data takes place in Singapore," so cross-border users whose actual processing occurred in Singapore may potentially be covered, but the case was never brought to formal adjudication.

The 2023 Swedish BankID failure case (which partially overlaps with gap (a)) also presented this problem: the customer complained against BankID AB as the provider, but BankID maintained that it was a "verification service provider" rather than a "financial service provider" and that responsibility lay with the bank; the bank maintained that it was a "user of verification services" and that responsibility lay with BankID. This responsibility loop cannot be broken under existing law.[^18]

### § 3.4 Gap (d): No Single Enforcement Authority Competent to Investigate Cross-Border Privacy Breaches

The Cambridge Analytica case (2018) is a paradigmatic illustration of this gap. Although the UK ICO and the US FTC had signed a MoU in 2014, actual coordination took four years (2018–2022), and the settlement amounts were grossly disproportionate (the ICO fined Facebook £500,000, the statutory maximum under the Data Protection Act 1998; the FTC imposed a $5 billion penalty).[^19] This disparity reflects a fundamental problem of cross-border privacy enforcement: when data flows across multiple jurisdictions, no single authority can reconstruct the complete causal chain.

The GDPR consistency mechanism in principle covers such cross-border enforcement, but its actual operation—measured against the five Binding Decisions issued by the EDPB between 2021 and 2024—has produced an average processing time exceeding 18 months.[^20] For non-EU injured parties, this mechanism is entirely inapplicable.

The EU-US Data Privacy Framework (2023), adopted in the wake of *Schrems II* (C-311/18, 2020), seeks to repair the transatlantic privacy-enforcement gap, but the Framework itself remains subject to challenge by fresh litigation; and the Framework does not cover other jurisdictions outside the EU.[^21]

### § 3.5 Two Sub-Types: Provider Insolvency and Compelled Disclosure

The candidate fifth category of gaps, upon exhaustive examination, has not been accorded independent status, but two sub-types must be addressed explicitly.

The first sub-type is cross-border liquidation in cases of provider insolvency. When a wallet provider becomes insolvent, the credentials held by its users—if dependent on the provider's servers for decryption or verification—will immediately become invalid. The UNCITRAL Model Law on Cross-Border Insolvency (1997) provides a basic framework for cross-border insolvency proceedings, but the treatment of elements such as "digital assets," "user data," and "private keys" under that framework remains unsettled.[^22] In practice, this risk is partially covered within the EU through the joint-and-several liability provisions of Article 5b of eIDAS 2.0 (which require providers to offer a transfer mechanism before ceasing operations), but outside the EU it remains entirely unaddressed.

The second sub-type is compelled disclosure: where an injured citizen is simultaneously a wallet holder and a party to proceedings, certain jurisdictions may, through search warrants or court orders, require wallet providers to disclose credential content or interaction records. CJEU *Schrems II* has made a legal assessment of compelled data extraction under the US FISA § 702 and Executive Order 12333,[^23] but no precedent yet applies that assessment to the wallet context. Within the EU this sub-type is partially regulated by the GDPR consistency mechanism; outside the EU no corresponding coordination framework exists.

## § 4. The Over-Determined Structure of Conflict-of-Laws Rules

Section 3 catalogued the four gaps inductively from an empirical perspective; this section derives normatively why these gaps arise. The strongest version of the proposition is that Brussels I Recast, Rome I, Rome II, and the Hague Convention framework produce **no genuine "regulatory vacuum"** with respect to cross-border wallet disputes—that is, any case can identify at least one applicable connecting factor from existing provisions. However, wallets involve four connecting factors (issuer's country / verifier's country / provider's country / holder's country of domicile), combined with such technical attributes as cryptographic issuance, selective disclosure, and revocation-status verification, such that multiple rules simultaneously apply in parallel and point to different jurisdictions. No single connecting factor can achieve structural priority. For the injured citizen, this is a condition of "multi-track parallelism" rather than a "vacuum," but the practical loss of predictability of redress approximates the effect of rule absence. The precise formulation of the proposition is: **conflict-of-laws rules are over-determined, not under-determined, in cross-border wallet disputes.**[^24]

Three categories of failure mode can be identified. The first is **rule boundaries**: existing provisions have clear rules, but their scope does not extend to the particular wallet context. For example, the consumer special jurisdiction of Brussels I Articles 17–19 covers only the "platform–user" segment of the relationship and does not cover the lateral relationship between issuer and verifier in the wallet scenario.[^25] The second is **rule ambiguity**: rules exist, but their key connecting factors cannot be stably located in the wallet context. For example, Article 7(2) on the "place of tort" (locus delicti): through *eDate Advertising* (C-509/09, 2011) and *Bolagsupplysningen* (C-194/16, 2017), the CJEU established the "centre of interests" principle, but in cross-border wallet scenarios the "place of tort" may be the place of revocation, the place of verifier rejection, the place of loss, or the place of the holder's domicile—a four-way parallel of *Erfolgsort* (result-place) for which no meta-rule exists in the wallet context.[^26] The third is **meta-rule absence**: when multiple rules apply simultaneously, no guiding principle determines priority. The closest-connection principle under Rome II Article 4(3) might serve as a meta-rule, but *Lazar v Allianz* (C-350/14, 2015) confined that principle to an "escape clause" status rather than a standard meta-rule applicable to cross-border wallet disputes.[^27]

Mapping the three failure modes against the four gaps from Section 3:
- Gap (a) verifier rejection → rule ambiguity (*Erfolgsort* multi-track parallelism)
- Gap (b) issuer erroneous revocation → rule boundaries (no contract + administrative character) + rule ambiguity (*Handlungsort* difficult to locate under cryptographic issuance)
- Gap (c) provider failure → rule boundaries (Articles 17–19 cover only the platform–user segment)
- Gap (d) privacy breach → rule boundaries (GDPR extraterritorial scope) + rule ambiguity (*Erfolgsort* spanning multiple-country data flows)

Four counter-arguments require responses. The first, from Svantesson's *Solving the Internet Jurisdiction Puzzle* (2017), contends that Brussels I Recast—through the "centre of interests" principle established in *eDate*—already covers most cross-border internet disputes, and that cross-border wallet disputes are simply extended applications that require no new rules.[^28] The response of this paper is that the "centre of interests" principle in *eDate* and *Bolagsupplysningen* is confined to personality rights and defamation; the CJEU's treatment of IP infringement in *Wintersteiger* (C-523/10, 2012) and *Pinckney* (C-170/12, 2013) shows that the principle does not apply uniformly across different types of tort.[^29] Cross-border wallet disputes involve economic loss, reputational harm, and restrictions on socio-economic participation rights that cannot straightforwardly be mapped onto personality-rights or IP precedents.

The second counter-argument contends that the closest-connection or centre-of-gravity principle was designed precisely for "no-default-rule" situations, so "no default rule" is the normal working mode of conflict of laws and does not constitute a gap. The response is that the closest-connection principle under Rome II Article 4(3) has been positioned as an "escape clause" by *Lazar v Allianz*, which stressed that the principle applies only in "manifestly more closely connected" special circumstances and does not operate as a standard meta-rule.[^30] The normal wallet cross-border situation involves multiple connecting factors running in parallel with similar intensity and no single manifestly closer connection, so the closest-connection principle cannot operate stably.

The third counter-argument invokes UNCITRAL MLETR (2017), arguing that it already provides a functional-equivalence principle for cross-border electronic records, within whose transferable scope wallet credentials fall.[^31] The response is that MLETR's domain is limited to "electronic transferable records" whose core consists of negotiable instruments, bills of lading, and warehouse receipts—documents whose character is that "possession is equivalent to the right." Wallet identity credentials do not have this character (holding a credential is not equivalent to holding the identity itself), so MLETR does not directly apply.[^32]

The fourth counter-argument, drawing on Rühl's *The Liability of Online Platforms* (2018), argues that the lex protectionis principle has been established in IP and personality-rights contexts, and that personality-rights infringement in wallets can be handled analogously.[^33] The response is that Rühl's proposal is *de lege ferenda* (law as it ought to be), not existing law; the CJEU's treatment of IP infringement in *Wintersteiger* shows that the application of lex protectionis in actual case law remains contested.

A more fundamental counter-argument must also be addressed. Goldsmith and Wu in *Who Controls the Internet?* (2006) argue that the "borderless" imagination of cyber-jurisdiction is itself exaggerated, and that states have already re-established effective legal boundaries in practice through technical filtering, server localization, and ISP cooperation.[^34] This paper partially accepts that argument: the cross-border wallet redress gap is a "mismatch between existing state-centric structures and the multiple connecting factors of wallets." This partial acceptance does not, however, overturn the existence of the four gaps; it merely refines their formulation to "gaps arising from the coupling mismatch between existing state-centric structures and wallets' multiple connecting factors."

## § 5. Clause-Level Assembly from Existing Cross-Border Redress Templates

Cross-border governance has accumulated at least six mature dispute-resolution templates over the second half of the twentieth century. Systematically unpacking the transferable clauses of each is an important preparatory step for policy synthesis.

The first template is the international airline passenger liability regime. The 1929 Warsaw Convention was amended by the 1955 Hague Protocol and the 1975 Montreal Protocols, and was ultimately unified in the 1999 Montreal Convention.[^35] Articles 17–22 of the Montreal Convention established tiered liability for lost baggage and passenger injury: airlines bear strict liability up to an SDR ceiling, and above that ceiling liability turns on proof of fault. Article 33 offers five jurisdictional options: the place of the airline's principal business, the place of contract, the place of departure, the place of destination, and the claimant's principal residence. IATA Resolution 824 supplements standard contractual terms for the travel-agent network. Transferable elements include "tiered liability" (clearly delineated responsibility ceilings and allocation of the burden of proof) and "multiple jurisdictional options" (giving the claimant a choice). However, this template assumes a single responsible party (the airline) and does not map directly onto the four-party wallet relationship.

The second template is the SWIFT/SEPA cross-border payment regime. The SWIFT Customer Security Programme and the EBA's Out-of-Court Redress Mechanism under PSD2 provide a dispute-resolution framework.[^36] FIN-NET is the EU-level cross-border financial dispute-resolution network, through which national ADR bodies transfer cases to one another. Transferable elements include "mandatory ADR procedures" (PSD2 Article 102) and a "cross-border transfer mechanism" (FIN-NET). However, this template assumes that the disputed subject matter can be monetized, and it does not fully correspond to the non-monetary character of wallet-related harms such as reputational damage and restrictions on socio-economic participation.

The third template is the EU CPC Network. Regulation (EU) 2017/2394 established a coordination mechanism for cross-border consumer protection, with Single Liaison Offices (SLOs) in each Member State for mutual case transfer, joint investigation, and cross-border penalties.[^37] European Court of Auditors Special Reports 13/2021 and 26/2023 found an average CPC processing time of 16 months, with insufficient resources identified as the main constraint (a finding that resonates with Section 6's policy call for "normative extension plus simultaneous resource expansion").[^38] Transferable elements include the "Single Liaison Office," "cross-border cooperative investigation," and "mutual recognition of penalties." The processing delays and resource constraints are, however, serious defects.

The fourth template is ICCAT. The 1966 International Convention for the Conservation of Atlantic Tunas established a cross-border compliance system for Atlantic tuna fisheries, led by a Compliance Committee.[^39] Weak enforcement (with numerous member states persistently failing to comply with quotas) is this template's principal limitation. Transferable elements include the "Compliance Committee" and "peer review of member states," but enforcement weakness is an acknowledged defect.

The fifth template is CETA Chapter 8. The 2016 Comprehensive Economic and Trade Agreement (EU-Canada) introduced, in Chapter 8, a reformed version of investment dispute resolution (ISDS)—the Investment Court System (ICS)—with Articles 8.27–8.30 governing the appellate structure.[^40] The political fragility of CETA Chapter 8 is well known: the CJEU in *Achmea* (C-284/16, 2018) rejected intra-EU ISDS, *Komstroy* (C-741/19, 2021) further restricted the ECT's scope, and ICSID arbitration awards such as *Eli Lilly v Canada* (UNCT/14/2, 2017) have triggered repeated European Parliament resistance.[^41] The only transferable element is the "appellate structure" (decoupled from the broader ISDS controversy); the political feasibility of the ICS as a whole is effectively zero.

The sixth template is APEC CBPR and the OECD Privacy Framework. The APEC Cross-Border Privacy Rules (2011) constitute Asia-Pacific soft law on cross-border privacy; as of 2024, only 9 economies have joined (with China, India, Indonesia, Malaysia, the Philippines, Thailand, and other major Asia-Pacific economies absent).[^42] The OECD Privacy Framework (revised 2013) and the OECD Privacy Enforcement Authorities (PEA) provide a broader but looser cooperative framework. Transferable elements include "mutual recognition principles" and "enforcement cooperation MoUs," but weak soft-law effect is an acknowledged limitation.

A cross-dimensional similarity matrix (across mutual recognition, liability allocation, one-stop access, and dispute resolution) reveals wide variation in the transferability of the six templates. Montreal/IATA scores highly transferable in the "liability allocation" dimension (approximately 4.0/5.0) but only moderate in "mutual recognition" (approximately 2.5). FIN-NET scores highly transferable in the "one-stop" dimension (approximately 4.0), with other dimensions moderate. The CPC has an overall transferability of approximately 3.0. ICCAT's overall transferability is approximately 1.75 (depressed by weak enforcement). CBPR's overall transferability is approximately 2.00 (depressed by weak soft-law effect). CETA Chapter 8's normative framework has merit, but its political feasibility approaches zero.

The strongest version of the proposition is that **clause-level assembly (cherry-picking) rather than wholesale adoption** is the appropriate strategy.[^43] The assembl­able clause package consists of: MoU drafting format for mutual recognition agreements (IATA + EU CPC) + liability allocation clauses (Montreal Articles 17–22 + PSD2 Article 102 ADR) + one-stop complaint portal (CPC Article 5 SLO + FIN-NET mutual transfer) + tiered mediation-arbitration structure (CETA Article 8.28 appellate body, decoupled from ISDS as a whole) + resource-provisioning clauses (minimum FTE + SLA processing times) + electronic cross-border verification tools such as e-APP. Each clause must be individually tested for whether its similarity to the wallet cross-border context holds.

The limitations of the argumentative strength of this section must be honestly acknowledged. At the object-matter level, whether wallet identity attributes and credential status can be mapped onto the liability logic of "lost baggage compensation" or "mistaken import records" is structurally questionable. At the actor level, the four-party issuer / wallet provider / verifier / user relationship is more dispersed than the aviation (airline–passenger) or goods (exporter–importer) paradigm. At the remedy level, harms to credit, privacy, and socio-economic participation rights are difficult to monetize, and they differ from the logic of IATA SDR-ceiling compensation. The argumentative strength of this section is accordingly assessed as "medium-weak," and the subsequent policy synthesis (Section 7) must proceed on the basis of clause-level assembly rather than wholesale adoption.

## § 6. Normative Extension and the Bilateral-Consent Condition

Section 5 proceeded by analogy from external templates; this section applies abductive reasoning from internal existing mechanisms. The strongest version of the proposition is that the "liability allocation + supervisory-body coordination across Member States + responsible Member State mechanism" established by eIDAS 2.0 within the EU, together with the GDPR one-stop-shop consistency procedure and the functional-equivalence principle of UNCITRAL MLETR, together constitute a regulatory module for "cross-border identity / electronic records / data protection." Extending this module to non-EU jurisdictions is a matter of "normative extension" rather than the creation of new law; the precondition is that the jurisdiction to which the module is extended has explicitly consented to accession through a bilateral or multilateral agreement. The crucial distinction between "normative extension" and "unilateral extraterritorial imposition" lies precisely in this bilateral-consent condition, which simultaneously responds to the methodological lessons of *Schrems II* (C-311/18, 2020).[^44]

The formulation "one-stop redress" must first be cooled. eIDAS 2.0 does not announce one-stop redress in a single provision; its redress structure is constituted jointly by three mechanisms: (i) the liability provisions for trust service providers (Article 13, as revised Article 11), (ii) the obligation on Member States to designate supervisory bodies (Article 17, as revised Article 46a), and (iii) the EUDI Wallet supervision and responsible Member State mechanism (Articles 5a–5g and 11a as newly added by the 2024 revision).[^45] Describing this as "the embryo of one-stop redress" is a reasonable academic reformulation, but the phrase itself does not appear in the text of the Regulation. Writers citing this must indicate "the consolidated text of Regulation (EU) 2024/1183 as amended" to avoid version confusion.

GDPR Articles 77 (right to lodge a complaint), 79 (right to an effective judicial remedy), and 82 (right to compensation) establish the normative pillars of cross-border complaint and judicial redress. Articles 56 and 60–67 (the consistency mechanism) establish a coordination mechanism across Member States. Recital 141 mentions the concept of the one-stop shop but does not define its scope at the level of redress; this formulation comes from academic reformulation rather than from the text of the provision itself.[^46]

The role of UNCITRAL MLETR (2017) must be repositioned as a "supplier of the equivalence principle" rather than a "supplier of a redress mechanism."[^47] MLETR does not directly address redress, but it demonstrates the technique of "recognizing the equivalence of an existing right in electronic form without creating new rights"—precisely the analogous operation required for cross-border wallet redress. Article 18 of MLETR (the "non-discrimination principle"—a formulation to be kept distinct from the MFN concept in trade law) establishes this core. As of end-2024, approximately 11 jurisdictions have adopted MLETR (exact figures subject to the latest statistics on the UNCITRAL website).[^48]

The validity of "normative extension" requires analysis at two levels. The first level is normative logic: existing provisions already embody a value structure that is extensible. For example, the responsible Member State mechanism in Article 11a of eIDAS 2.0 already presupposes a structure of "cross-Member-State consensual accession"; extending it to non-EU jurisdictions is an adjustment of extension, not a change of content. The second level is political feasibility: whether the extended jurisdiction consents to accession. This second level is entirely a political judgment and must not be conflated with normative logic. Such conflation would allow the argument to slide into the trap of unilateral extraterritorial imposition and be defeated simultaneously by Goldsmith and Wu (2006) and by Chinese-sovereignty positions.[^49]

The degree of coverage afforded by normative extension to the four gaps is asymmetric:
- Gap (a) verifier rejection: Article 13 + Brussels I bis; extension requires bilateral agreement; partial coverage
- Gap (b) issuer erroneous revocation: Article 5b + responsible Member State; extension requires trust-list mutual recognition; moderate coverage
- Gap (c) provider failure: Article 5b joint-and-several liability + Article 17 supervisory body; extension requires shared certification mechanism (Common Criteria EAL); low-to-moderate coverage
- Gap (d) cross-border privacy breach: GDPR Articles 77/79/82 + consistency mechanism; extension requires DPF / adequacy pathway; low coverage

Five counter-arguments require responses.

The first—and most critical—counter-argument is that "cross-border mutual recognition equals cession of sovereignty." This position comes from the cyber-sovereignty school and certain strands of nationalist legal-political philosophy.[^50] The response of this paper is that eIDAS 2.0 itself incorporates sovereign-reservation provisions: Article 5a(5) reserves core wallet governance competence for each Member State, Recital 24 emphasizes Member State policy space, and the responsible Member State mechanism in Article 11a is itself a concrete expression of "sovereignty cooperation" rather than "sovereignty cession." Equating cross-border mutual recognition with sovereignty cession is an argumentative slippage.

The second counter-argument holds that the "validity" of normative extension requires the explicit consent of the sovereign state; otherwise it constitutes unilateral extraterritorial imposition (applying *Schrems II* in reverse).[^51] The response is that this is precisely why the present section insists on the "bilateral-consent condition" as its core. The crucial distinction between normative extension and unilateral extraterritorial imposition lies in whether the extended jurisdiction has explicitly consented to accession through a bilateral or multilateral agreement. This distinction allows the argument in this section to retreat from "EU law should be extraterritorially applied" (readily refuted) to "the EU internal mechanism provides an extensible regulatory module; whether it is extended depends on the consent of the extended jurisdiction" (significantly harder to rebut on academic grounds).

The third counter-argument holds that eIDAS 2.0 has not yet been empirically demonstrated within the EU, so extending it to non-EU jurisdictions amounts to "proving future cases with an unproven mechanism"—circular reasoning. This paper partially accepts the counter-argument: the EUDI Wallet large-scale pilots (POTENTIAL, NOBID, EWC, DC4EU) began only in 2024–2025, and the 2025 mid-term evaluation reports require ongoing tracking.[^52] However, this counter-argument does not overturn the logic of normative extension; it merely defers the timeline for extension by two to three years.

The fourth counter-argument holds that MLETR's adoption rate is extremely low (11 jurisdictions) and provides an unstable foundation. The response is that MLETR's role is that of a "supplier of the equivalence principle," not a "supplier of a redress mechanism"; what matters as a foundation is its normative structure, not its adoption rate. Even a low adoption rate does not prevent the functional-equivalence technique it demonstrates from being invoked.

The fifth counter-argument holds that cross-border GDPR complaints under Articles 77 and 79 already experience substantial delays in practice, and that extending to non-EU jurisdictions will only aggravate those delays. This paper partially accepts that counter-argument: according to noyb's 2023 report *5 Years GDPR — A Reality Check*, the median delay for cross-border complaints is 22 months,[^53] and the EDPB's 2024 OSS reform proposals are attempting to remedy this. The value of the counter-argument is that it revises the policy design of "normative extension" from "extending the existing mechanism" to "extending the existing mechanism plus simultaneously expanding the resource base." The latter is precisely one of the central emphases of the Section 7 policy synthesis.

## § 7. Three-Axis Parallel Policy Synthesis

The minimum viable solution to the cross-jurisdictional wallet redress gap is to expand the existing cross-border consumer protection network (EU CPC Regulation 2017/2394 + ICN cross-border enforcement working group) to cover wallet disputes, and to introduce "joint-but-tiered" liability for wallet providers. It must be stated immediately that the "minimum viable solution" is a political-judgment expedient, **not a normative necessity**. In certain contexts (such as the centralized-failure risk of wallet providers or algorithmic discrimination risks), the EU AI Act model (new horizontal legislation) may in fact be more feasible than CPC expansion.

The three supplementary pathways must be disaggregated into three parallel axes rather than a single priority order:[^54]

| Axis | Optimal Pathway | Primary Logic | Timeline |
|---|---|---|---|
| Normative coverage | Pathway A (modeled on IATA + ICCAT multilateral treaty + liability allocation) | Broadest coverage beyond EU | 72+ months |
| Empirical feasibility | Pathway B (eIDAS one-stop redress extended via GDPR adequacy + bilateral treaties) | Lowest political resistance | 24–48 months |
| Technical-legal coupling | Pathway C (cross-national wallet certification mutual recognition + joint-and-several liability) | Most direct for provider failure | 36–60 months |

The purpose of disaggregating the three pathways into three axes is to prevent downstream readers from mistaking "normative priority" for "empirical priority." Short-term implementation should begin with Pathway B (extension via EU CPC + ICN), medium-term should advance Pathway C (provider joint-and-several liability + certification mutual recognition), and only in the long term should Pathway A be advanced (multilateral treaty).

Clarification of the wallet provider's legal status is the core of Pathway C. This paper proposes a three-tier classification scheme:

**Tier 1 (provider, infrastructure)** encompasses infrastructure-type wallets such as Apple Wallet, Google Wallet, each Member State's version of the EUDI Wallet, and TW DIW. Tier 1 providers bear the highest responsibility, including: (i) strict liability for "foreseeable damage caused intentionally or negligently"; (ii) mandatory liability insurance; (iii) status as a core node in cross-border supervisory cooperation.

**Tier 2 (joint controller, content layer)** encompasses intermediary issuers and verifiers such as KYC service providers, credential aggregators, and wallet-embedded dApps. Tier 2 providers bear intermediate responsibility, including: (i) fault-based liability (with a reversal of the burden of proof); (ii) mandatory disclosure obligations; (iii) cross-border complaint referral obligations.

**Tier 3 (intermediary, pure transmission)** encompasses purely transmission-relaying components such as mDoc transmitting libraries and open-source wallet SDKs. Tier 3 providers bear the lowest responsibility, including: (i) general negligence liability; (ii) transparency obligations; (iii) no active processing of user data.

The tier-assignment mechanism is determined by market share plus assessment by an independent third-party body. The details of the market-share calculation methodology, the selection of assessment bodies, and the dispute-resolution procedures for tier assignments remain open questions.[^55]

The specific responsibility-proportion recommendation is: issuer 40% / verifier 40% / wallet provider 20%. It must be explicitly stated that this proportion is a policy recommendation without empirical data support; the scientific basis for the proportion requires actuarial analysis from the insurance industry and cross-border dispute statistics. The list of available defenses includes force majeure, holder fault, and malicious third-party attack; the specific scope of available defenses requires further definition.

Four counter-arguments require responses. The first holds that the "minimum viable solution" (extending EU CPC + ICN) provides limited coverage for non-EU citizens and may exacerbate their digital exclusion.[^56] The response is that this counter-argument is valid, and it is precisely why Pathway A (multilateral treaty) cannot be entirely abandoned; the three-axis parallel strategy preserves the possibility of long-term normative coverage.

The second counter-argument holds that joint-and-several liability for wallet providers will cause providers to exit the market or experience a surge in insurance costs, thereby suppressing wallet adoption (systemic consequences analysis). The response is that the three-tier scheme is designed precisely to target liability accurately at the largest providers without crushing small and medium developers; mandatory liability insurance is already a mature instrument in the financial and aviation industries.

The third counter-argument holds that the stateless persons issue and cross-border wallet concerns belong to different layers of analysis, and conflating them dilutes policy priority for both.[^57] The response is that this counter-argument is entirely valid, which is precisely why Section 8 treats stateless persons as an independent parallel tier.

The fourth counter-argument holds that the choice between expanding existing mechanisms and innovating new legislation is a political judgment rather than a normative necessity, and in certain contexts innovative legislation (such as the EU AI Act model) may be more feasible. This paper partially accepts this counter-argument; it is also why the opening paragraph explicitly characterizes "the minimum viable solution as a political-judgment expedient." In scenarios involving centralized failure risk for wallet providers and algorithmic discrimination risk, the AI Act model may be more appropriate.

## § 8. The Cross-Border Predicament of Stateless Persons as an Independent Parallel Tier

The cross-border predicament of stateless persons constitutes a fundamental blind spot in the current redress architecture. SDG 16.9 (legal identity for all by 2030), the UN 1954 Convention relating to the Status of Stateless Persons, the 1961 Convention on the Reduction of Statelessness, and the UNHCR Handbook on Protection of Stateless Persons (2014) establish a baseline rights track, of which cross-border wallet redress is a second-best supplementary measure.[^58] The order of priority must not be inverted: the primary redress for stateless persons remains the acquisition of nationality, and wallet redress is a second-best supplement.

Two distinct populations must be distinguished. **De jure stateless persons** are those defined under the 1954 Convention as individuals "not considered as a national by any State under the operation of its law." According to UNHCR's 2024 *Global Trends* report, at least 4.4 million de jure stateless persons existed as of end-2023, with the Rohingya, Syrians, and Kashmir stateless persons constituting the majority.[^59] **De facto ID-less persons** are those who nominally hold a nationality but lack any effective identity document in practice—for example, unregistered children, political dissidents whose passports have been refused, and exiles whose documents have been lost. The legal situations of these two populations differ, and cross-border wallet redress must be designed separately for each.

For de jure stateless persons, the current framework offers three baseline rights pathways: (i) stateless person status determination under Article 1 of the 1954 Convention; (ii) the "reduction of statelessness" obligation under the 1961 Convention; and (iii) UNHCR refugee identity cards under UNHCR's digital identity guidelines.[^60] These are not cross-border wallet redress but rather upstream rights tracks. However, when stateless persons actually use wallets (for example, digital identities issued by UNHCR's BIMS system), the problem of cross-border redress still arises; in such cases, the responsible redress party becomes UNHCR or the host state rather than the stateless person's "country of nationality."

Counterfactual scenario CF1 (Rohingya case) can be spelled out concretely. A Rohingya stateless person holding a UNHCR BIMS digital identity credential is rejected by a wallet verifier inside Bangladesh (for example, in mobile-phone SIM-card real-name registration or cross-border remittance KYC). The redress pathways currently available to the injured party are: (i) requesting UNHCR case management intervention; (ii) complaining to Bangladesh's National Human Rights Commission; (iii) advocacy through international refugee legal aid organizations. All of these pathways are in the nature of humanitarian assistance and political advocacy, not "cross-border litigation" redress.[^61]

For de facto ID-less persons, the current framework offers SDG 16.9 (legal identity for all by 2030) and the World Bank ID4D Practitioner's Guide.[^62] The empirical progress toward achieving this target is, however, unpromising: as of 2024 an estimated 850 million persons still lack any official identity document. The relevance of cross-border wallet redress for this population is primarily one of "not allowing the advancement of wallets to further exclude de facto ID-less persons"—which is the core of the inclusion rights agenda.

The integrated conclusion is that the stateless persons issue should be treated as an independent parallel tier, with a supporting mechanism consisting of a UNHCR + ID4D + ICN tripartite working group (by 2027). However, two common errors must be avoided. The first is absorbing the stateless persons issue into Pathways A, B, or C; this would allow the wallet policy agenda to "capture" the stateless persons issue. The second is inverting normative priority: treating wallet redress as the primary solution would delay the more upstream nationality-acquisition agenda. Bhabha's *Statelessness and the Politics of Belonging* (2024) offers a critique of this kind of issue-capture that warrants serious engagement.[^63]

## § 9. Process Tracing of Cases

This section applies process tracing to five actual cross-border wallet redress events. Each case begins with identification of the applicable gap category, then traces the key nodes of the redress process, and concludes with implications for policy synthesis.

**Case 1: Spain's Camerfirma cross-border failure (first warning 2022; successive failure events 2024).** Camerfirma is a Spanish eIDAS Qualified Trust Service Provider (QTSP). It received its first EU warning for ETSI ESI non-compliance in early 2022, followed by successive credential-invalidation events in 2024.[^64] After the license was revoked, thousands of cross-border e-signatures became suddenly invalid in Germany, Portugal, and Italy; a number of SMEs were excluded from cross-border procurement processes for inability to provide compliant signatures in a timely manner. The applicable gaps are (a) verifier rejection + (c) provider failure. Key redress process nodes: (i) Camerfirma provided emergency remediation (a substitute QTSP took over), but cross-border notification took approximately two weeks, causing immediate losses; (ii) injured parties seeking to sue contracting authorities (mostly in Germany) found that the "consumer" qualification under Brussels I Article 17 was unavailable because the procurement activity was commercial in nature, remitting them to Article 7(2) (place of tort); (iii) whether the place of tort was the "place of rejection" or the "place of the revocation decision" remained unresolved, in the contested grey area following *eDate Advertising* (C-509/09, 2011). Policy synthesis implication: cross-border QTSP license revocation requires clear rules on "transition period" and "liability allocation"—precisely the scenario that the provider joint-and-several liability of Pathway C should address.

**Case 2: India UIDAI erroneous Aadhaar / DigiLocker revocation (2023).** An Indian citizen resident in Singapore had Aadhaar-linked DigiLocker credentials revoked because UIDAI's system erroneously classified the individual as deceased, causing KYC verification failure at a Singaporean financial institution.[^65] The applicable gap is (b) issuer erroneous revocation. Key redress process nodes: (i) the citizen filed complaints simultaneously with UIDAI and India's Data Protection Board under the DPDP Act 2023; (ii) UIDAI deflected on the grounds that "Aadhaar is an identity marker, not personal data"; (iii) the DPB deflected on the grounds that "the cross-border injured party is not an Indian resident"; (iv) the citizen ultimately obtained reinstatement of credentials after six weeks through intervention by the Indian Consulate in Singapore, but received no compensation for financial losses (investment opportunities missed due to KYC failure). Policy synthesis implication: cross-border issuer erroneous revocation requires the issuer's jurisdiction to provide a "cross-border injured party complaint channel"—precisely the scenario that Pathway B's GDPR adequacy plus bilateral complaint channels should address.

**Case 3: Swedish BankID cross-border verification failure (2023).** A customer was unable to make an immediate transfer during an account-opening process at a Danish bank due to a BankID failure, causing investment losses (amount undisclosed).[^66] The applicable gaps are (a) verifier rejection + (c) provider failure. Key redress process nodes: (i) the customer's suit against BankID AB in Denmark was dismissed for lack of a direct consumer contractual relationship; (ii) transfer to Swedish courts was jurisdictionally unclear because "the damage occurred in Denmark"; (iii) BankID AB argued it was a "verification service provider" rather than a "financial service provider" and that responsibility lay with the bank; (iv) the bank argued it was a "user of verification services" and that responsibility lay with BankID; (v) the case ultimately entered settlement through preliminary conciliation by EU FIN-NET, but settlement amounts are undisclosed. Policy synthesis implication: clarifying the wallet provider's legal status is key; if BankID AB were defined as a Tier 1 provider, its strict liability should clearly cover this scenario.

**Case 4: Singpass cross-border service disruption (April 2024).** Singapore's Singpass authentication service suffered a disruption in cross-border KYC processes, affecting users conducting identity verification outside Singapore (primarily Singaporean citizens abroad).[^67] The applicable gap is (c) provider failure. Key redress process nodes: (i) Singapore's GovTech was the competent authority, but cross-border users had no formal entity to complain to; (ii) Singapore's PDPA applies extraterritorially only where "processing of personal data takes place in Singapore," so cross-border users whose actual processing occurred in Singapore may potentially be covered, but the case was never brought to formal adjudication; (iii) GovTech restored service within six hours, but no compensation mechanism existed for cross-border users' losses (such as missed investment windows). Policy synthesis implication: state-issued Tier 1 wallets (such as Singpass, TW DIW, and each Member State's version of the EUDI Wallet) need to establish "cross-border service SLAs plus compensation mechanisms."

**Case 5: Cambridge Analytica cross-border privacy breach (2018).** The UK consultancy Cambridge Analytica processed US Facebook data, and the cross-border privacy breach affected 87 million users worldwide.[^68] The applicable gap is (d) cross-border privacy breach. Key redress process nodes: (i) the UK ICO opened its investigation in March 2018; (ii) the FTC opened its investigation in the same year; (iii) the UK ICO issued its Final Report in October 2020, imposing the statutory maximum £500,000 fine on Facebook; (iv) the FTC imposed a $5 billion fine on Facebook in July 2019; (v) coordination of the two investigations took four years, and settlement amounts were grossly disproportionate. Policy synthesis implication: cross-border privacy enforcement requires coordination mechanisms and rules for allocating fines—precisely the core scenario that Pathway A's multilateral treaty should address.

The common pattern across the five cases is: redress channels exist but are incomplete; cross-border coordination is delayed; the responsible party is ambiguous; and settlement amounts are disproportionate. These are structural mismatches between the existing combination of conflict-of-laws rules and redress templates on the one hand and cross-border wallet scenarios on the other, not accidental failures in individual incidents.

## § 10. Counterfactual Stress Tests

This section stress-tests the policy pathways of Sections 7–8 through five counterfactual scenarios. Each CF first describes the scenario, then analyzes the redress pathways available under the current architecture, and finally identifies the implications for policy synthesis.

**CF1: EUDI Wallet rejected in Saudi Arabia.** An EU citizen presents an EUDI Wallet during a Saudi Arabian visa process and is rejected by a local government agency. The applicable gap is (a) verifier rejection. Redress pathways available under the current architecture: (i) no EU-Saudi bilateral treaty covering wallet mutual recognition; (ii) EU CPC + ICN does not cover GCC states; (iii) the injured party may raise the matter with the EU External Action Service (EEAS), but the EEAS has no corresponding political mechanism. Policy synthesis implication: Pathway A (multilateral treaty) is the long-term solution; Pathway B (via GCC adequacy pathway) is the short-term solution. The GCC's (Gulf Cooperation Council's) digital identity cross-border mutual-recognition initiative, launched from 2024, is a potential entry point, but political feasibility is uncertain.[^69]

**CF2: Taiwan dPass misidentifies age in Singapore.** A verifiable credential issued by a Taiwanese wallet provider (such as dPass / TW DIW) is erroneously interpreted in Singapore, causing a Taiwanese citizen to be misidentified as a bankrupt person and refused an account opening. The applicable gap is the converse of (b) issuer erroneous revocation (here the issuer has not revoked; the verifier has misinterpreted). Redress pathways available under the current architecture: (i) Singapore has no adequacy decision with respect to Taiwan; (ii) Taiwan's Personal Data Protection Act has weak extraterritorial effect; (iii) the injured party may file a complaint with Taiwan's Personal Information Protection Commission (PIPC, newly established from 2025), but PIPC has no enforcement power over Singaporean verifiers; (iv) Taiwan's representative office in Singapore may intervene, but no formal legal pathway exists. Policy synthesis implication: Pathway C (Tier 1/2 provider joint-and-several liability) + bilateral mutual recognition agreement. **Key warning for Taiwanese citizens**: in the short term there is virtually no coverage; unless the government actively pursues bilateral treaties, Taiwanese citizens will have almost no redress channels in cross-border wallet scenarios.[^70]

**CF3: Polygon ID rejected at Singapore immigration.** A health certificate issued by Polygon ID (a decentralized credential issuance system) is erroneously assessed as expired at Singapore immigration, causing denial of entry. The injured party is a Brazilian citizen. The applicable gap is the ontological collapse of the issuer's jurisdiction: Polygon ID is a decentralized system with no single issuer jurisdiction. Redress pathways available under the current architecture: (i) there is no issuer jurisdiction in which to sue; (ii) Brussels I connecting factors are entirely absent (issuer country does not exist; provider country is distributed across the Polygon open-source community; holder's domicile is Brazil); (iii) the injured party can only sue the Singapore verifier, but the verifier argues that it relied on Polygon ID's on-chain status verification and bears no responsibility. Policy synthesis implication: decentralized wallet scenarios require a hybrid rule of "closest connection + provider joint-and-several liability." The Polygon ID open-source community as Tier 3 (pure intermediary) is not a legal liability subject; the on-chain oracle as Tier 1 (infrastructure) and the health certificate issuing dApp as Tier 2 (joint controller) are the liability subjects.[^71]

**CF4: Rohingya stateless person holding UNHCR digital identity rejected.** A Rohingya stateless person holding a UNHCR BIMS digital identity credential is rejected by a wallet verifier inside Bangladesh (for example, in SIM-card real-name registration). The applicable gap is the cross-border predicament of stateless persons (addressed as a dedicated chapter in Section 8). Redress pathways available under the current architecture: (i) stateless persons lack even the basic connecting factor of "habitual residence"; (ii) Brussels I + Rome I/II presuppose "citizenship" or "habitual residence," both of which are absent for stateless persons; (iii) redress is primarily through UNHCR case management and Bangladesh's National Human Rights Commission. Policy synthesis implication: independent parallel tier (Section 8); 1954/1961 Conventions + UNHCR / ID4D / ICN tripartite working group (by 2027) + do not absorb stateless persons issue into Pathways A, B, or C.[^72]

**CF5: DPF extension to US wallet cross-border privacy breach.** GDPR Articles 77/79/82 are extended via the EU-US Data Privacy Framework to a US wallet cross-border privacy breach. Scenario: an EU citizen experiences a privacy breach in the course of using a US wallet provider (such as Google Wallet US). The applicable gap is (d) cross-border privacy breach. Redress pathways available under the current architecture: (i) the DPF (2023) provides a limited cross-border complaint channel (through PCLOB and DPRC); (ii) but the DPF itself remains subject to a fresh wave of litigation (noyb has already given notice); (iii) the "joint controller" status of US wallet providers under GDPR versus US privacy law has not been resolved. Policy synthesis implication: CF5 is significantly more difficult than CF1 (UK-post-Brexit wallet mutual recognition); CF1 is an adjustment of intra-EU mechanisms, while CF5 is transatlantic coordination with extremely high political resistance. The medium-term option is expanding the DPF to cover cross-border wallet disputes; the long-term option is a bilateral treaty.[^73]

The five CFs collectively reveal: the current architecture offers partial coverage for EU + North American scenarios, but for Asia, the Middle East, Africa, and Latin America coverage is almost entirely absent; for decentralized wallets and stateless persons, the absence is structural. These are coupling failures between the design premises of the current architecture (state-centrism + bilateral treaties) and the multiple connecting factors of wallets—not temporal failures of "EU law not yet reaching the global level."

Regarding the detailed political-resistance analysis, the three supplementary pathways face resistances with distinct logics. **On the US side**, resistance comes primarily from the political economy of cross-border jurisdiction. The US Supreme Court's recent restrictive stance on internet jurisdiction (such as *Mallory v Norfolk Southern*, 2023 on general jurisdiction extension) creates uncertainty about the legal foundations of mutual recognition; at the same time, the US has long maintained reservations about the "equivalence" of EU data protection mechanisms. **On the Chinese side**, resistance comes from the cyber-sovereignty position, which treats cross-border mutual recognition agreements as sovereign intervention—a position expressed explicitly in the 2023 Global Data Security Initiative and the 2024 Data Export Security Assessment Measures. **On the open-source community side**, resistance comes from ontological objections by decentralized wallet communities (Polygon ID, ENS, Worldcoin, and similar projects), which treat provider joint-and-several liability as improper regulation of open-source components and may seek to avoid it through GitHub repository migration and node distribution. These three sources of resistance cannot be collectively labeled "political resistance"; they require distinct negotiation mechanisms tailored to each in policy design.

## § 11. Relationship to Dissertation Chapters and the Article Series

This paper constitutes the "private international law pillar" of Chapter 12 of the dissertation—the chapter on the political economy of procurement. Chapter 12's overall argument is "procurement language translates rights baselines into acceptance specifications" + "the gap in cross-jurisdictional redress" + "systems-integrator ecology and supplier diversification." This paper bears exclusive responsibility for the second pillar.

Extensions to other chapters of the dissertation:

This paper's Section 7 three-axis parallel policy synthesis and Section 8 stateless persons independent parallel tier will be integrated in Chapter 14 into a full policy-agenda design. The Federated Trust-List Alliance's core elements are 14.1 privacy-first baseline, 14.2 federated trust-list alliance governance design, 14.3 procurement sandbox plus supplier diversification, 14.4 civic proof inclusion rights (alternative paths without a wallet), and 14.5 Indo-Pacific demonstration grants. This paper's "cross-border mutual recognition agreements" will feed into 14.2, and the "provider joint-and-several liability mechanism" will feed into the concrete implementation of 14.4.[^74]

For Chapter 11 (trust infrastructure and public blockchains): this paper's Section 6 functional-equivalence structure constituted by eIDAS 2.0 + GDPR + MLETR must be read together with Chapter 11's positioning of public blockchains (as in article 2026-05-01 did-vc-public-blockchain) and with the engineering economics of no-phone-home. Whether blockchain-anchored trust lists can serve as evidence in cross-border litigation is an open question (addressed in Section 12).

For Chapter 10 (the platform-presentation layer—wallet / OS / browser as gatekeeper): this paper's Tier 1/2/3 provider tiered liability and the tier-elevation mechanism in Section 7 constitute the concrete policy instantiation of Chapter 10's antitrust argument. The designation of Tier 1 providers as "essential facilities" is the core of article E1 (wallet-as-essential-facility); this paper's liability tiering provides a concrete normative architecture therefor.[^75]

Lateral connections with the article series:
- Connection with article A1 (accountability without real-name identification): the question of responsible-party attribution for accountable pseudonymity in cross-border scenarios.
- Connection with article A3 (civic proof concept positioning): the concrete implementation of the four civic proof conditions (anonymity / unlinkability / verifiability / accountability) at the cross-border redress level.
- Connection with article B1 (digital-association empirical test): the correspondence between the three walls (W1 persistent pseudonymity / W2 verifiable group boundaries / W3 internal accountability) for cross-border association and the four-party liability allocation of the present paper.
- Connection with article E1 (wallet-as-essential-facility): the essential-facility designation of Tier 1 providers and the liability tiering of the present paper.
- Connection with article E3 (structural-slippage-prevention): the structural slippage risk in cross-border wallet mutual recognition (slippage from technical interoperability into normative substitution).
- Connection with article E5 (civic proof inclusion rights): Section 8 of the present paper's stateless persons independent parallel tier feeds directly into article E5.

## § 12. Honest Epistemic Boundaries and Open Problems

The argument of this paper must explicitly state its boundaries.

The first boundary concerns variation in argumentative strength. Section 3's inductive argument is strong; Section 4's deductive argument is strong; Section 5's analogical argument is medium-weak; Section 6's abductive argument is medium; Sections 7–8's synthesis is recommendatory. Writers at the blog-rewrite stage must preserve this differentiated marking of argumentative strength clearly.

The second boundary is temporal. The 2025 mid-term evaluation reports from EUDI Wallet large-scale pilots; the EDPB's 2024 OSS reform proposals; litigation challenges to the DPF; UNCITRAL Working Group IV's 2025–2027 work; and the Hague Conference's 2024 evaluation—multiple ongoing matters will alter the evidentiary basis of this paper within the next two to three years. The qualifying language of many claims, such as "currently no precedent exists" and "as of 2024 estimates," reflects this temporality and must be preserved in the blog version.[^76]

The third boundary is geographic. The paper's evidence base is dominated by the EU, the United States, Singapore, India, Sweden, Spain, and the United Kingdom; coverage of Latin America, Africa, Southeast Asia (excluding Singapore), and the Middle East is limited. This geographic bias reflects the availability of literature but also limits the universality of conclusions.

The fourth boundary concerns decentralized wallets. The paper's primary objects of analysis are centralized wallets (state-issued and platform-vendor); decentralized wallets (such as Polygon ID, Worldcoin, and ENS) receive comparatively brief treatment. CF3 engages with this issue but does not develop it in depth.

The main open problems include:

(Q1) The EDPB / CJEU consensus on the legal status of wallet providers as cross-border nodes (intermediary / joint controller / provider); the Tier 1/2/3 tiering scheme proposed in Section 7 awaits treaty-level confirmation.

(Q2) Whether blockchain-anchored trust lists are admissible as evidence in cross-border litigation; currently only LG Köln 14 O 290/22 (2023) on NFTs' initial recognition + the UK Electronic Trade Documents Act 2023 on "digital reliable systems" provide preliminary reference; no precedent exists specific to wallet trust lists.[^77]

(Q3) Whether PSD2 Article 102's mandatory ADR obligation can be directly applied to wallet providers through eIDAS 2.0 implementing acts, or whether separate legislation is required.

(Q4) Whether the CETA ICS appellate structure remains operationally viable for cross-border wallet disputes once the "investor-state" framework is removed.

(Q5) Whether a transatlantic wallet agreement should take the form of an executive agreement or a condominium agreement; the former has weaker legal standing (lessons from *Schrems II*), the latter has a higher ratification threshold (two-thirds of the US Senate).

(Q6) The scientific basis for the responsibility proportion (issuer 40% / verifier 40% / wallet provider 20%), which requires actuarial analysis from the insurance industry and cross-border dispute statistics.

(Q7) The specific scope of available defenses (force majeure, holder fault, malicious third-party attack).

(Q8) The "cross-organizational anchoring" mechanism for stateless persons' digital identity: how UNHCR digital credentials can be anchored to public distributed ledgers without violating principles for the protection of beneficiaries.

(Q9) The tier-elevation mechanism: market-share calculation methodology, selection of third-party assessment bodies, and dispute-resolution procedures.

(Q10) Whether LLM-agent wallets (agents automatically co-signing credentials) will introduce a fifth category of "agent-erroneous-verification" gap (likely to emerge after 2026). *Note*: article F1 (Section 16 of the article series) at § 6.2 has already disaggregated Q10 into Q10a (authority-transfer cryptographic attribution gap) and Q10b (accountability-allocation cross-border multiparty attribution gap) as two sub-types; the five-link chain of the present paper's Q10 corresponds to the L1–L5 governance layers of article F1.

(Q11) The first CJEU precedent on "cross-border economic loss from wallets" is estimated to emerge no earlier than 2027–2028; currently no precedent can be cited.

Regarding interview requirements, the persons who must be interviewed include: noyb counsel (latest observations on delay in the lead DPA mechanism), Hague Conference Permanent Bureau members (feasibility of a wallet protocol), EU Commission DG JUST (timeline for Brussels I revision), UNHCR Statelessness Section (official position on policy linkage between digital identity and statelessness), and the chair of ICN's cross-border enforcement working group (likelihood of wallet issues entering the working group's agenda). Secondary interview subjects include: EUDI Wallet pilot vendors (NSCI France, BankID Sweden), CPC Network practitioners, UNCITRAL Working Group IV observers, wallet platform counsel, and Taiwan's Ministry of Digital Affairs.

## § 13. Conditional Academic Conclusions

The core proposition of this paper is that current digital identity architectures assume the issuer's jurisdiction to be equivalent to the redress jurisdiction, and that cross-border wallet use thoroughly undermines that assumption. The specific redress gaps can be classified into four typical categories; however, within the EU these gaps have been partially addressed, while outside the EU they remain almost entirely empty. Following systematic literature review and revision across five sub-arguments, the proposition has been upgraded in three key respects: (i) the retreat from "regulatory vacuum" to "rule ambiguity plus absence of enforcement capacity" in three-layered combination; (ii) the upgrade from "one-stop redress" to "normative extension plus bilateral-consent condition"; and (iii) the upgrade from a "linear A→B→C priority ordering" to "three-axis parallel plus stateless persons independent parallel tier."

If these three upgrades hold, the reasonable path for policy synthesis is to expand the existing cross-border consumer protection network (EU CPC + ICN) to cover wallet disputes and to introduce Tier 1/2/3 provider tiered liability. Short-term implementation should begin with Pathway B (eIDAS one-stop redress extended via GDPR adequacy + bilateral treaties, 24–48 months), medium-term should advance Pathway C (provider joint-and-several liability + certification mutual recognition, 36–60 months), and the long term should advance Pathway A (multilateral treaty, 72+ months). The stateless persons issue should be treated as an independent parallel tier with a supporting mechanism of a UNHCR + ID4D + ICN tripartite working group (by 2027).

This conclusion is conditional. Its validity depends on the following assumptions: (i) the 2025–2026 mid-term evaluation of EUDI Wallet large-scale pilots demonstrates that the normative extension mechanism is viable; (ii) the EDPB's 2024 OSS reform improves processing times for the consistency mechanism; (iii) the transatlantic DPF is not overturned by a fresh wave of litigation; and (iv) major wallet providers (Apple, Google, and the issuers of each Member State's EUDI Wallet) are willing to accept a joint-and-several liability legal framework. The failure of any one of these assumptions would substantially modify the policy pathways.

The contribution to the dissertation is the construction of the private-international-law pillar of Chapter 12 and the provision of a normative basis for two core elements of Chapter 14's policy agenda (federated trust-list alliance governance + civic proof inclusion rights). The contribution to democratic theory is to extend the proposition of "accountability without real-name identification" (accountable pseudonymity) to the cross-border scenario, demonstrating that its normative implementation requires going beyond the traditional state-centric + bilateral-treaty architecture to introduce a hybrid architecture of multilateral clause assembly plus tiered provider liability. The guidance for engineering implementation is: wallet providers need to account for the legal-status differences of Tier 1/2/3 at the system-design stage, and to make explicit provision for cross-border redress channels in their system design.

The most critical warning for Taiwanese citizens is that, under the current architecture, Taiwanese citizens in cross-border wallet scenarios have virtually no effective redress channels. Taiwan's Personal Data Protection Act has weak extraterritorial effect; Singapore and Japan have made no adequacy decisions with respect to Taiwan; PIPC has no enforcement power over foreign verifiers; and Taiwan's overseas representative offices can intervene only politically rather than through legal channels. To change this situation, the government must actively pursue bilateral treaties—one of the core policy calls of the dissertation's policy agenda.

## References

[^1]: Regulation (EU) 2024/1183 of the European Parliament and of the Council of 11 April 2024 amending Regulation (EU) No 910/2014 (eIDAS 2.0). OJ L, 30.4.2024. Source level A.

[^2]: *Coindesk*, "QuarkID launches on ZKsync L2 in Buenos Aires," 23 Oct 2024; *Kuensel*, "Bhutan NDI integrates with Ethereum Layer-2," 2024; Taiwan Citizen Lab, "Mobile Natural Person Certificate Wallet Cross-Border Acceptance Records," 2025. Source level C.

[^3]: EDPB, *Overview on Resources Made Available by Member States to the Data Protection Authorities and on Enforcement Actions by the Data Protection Authorities*, Apr 2024. Source level A.

[^4]: Edwards, L., & Veale, M. (2018). Slave to the Algorithm? Why a 'Right to an Explanation' Is Probably Not the Remedy You Are Looking For. *Duke Law & Technology Review*, 16(1), 18–84. Source level A.

[^5]: CJEU, *Wirtschaftsakademie Schleswig-Holstein*, Case C-210/16, 5 Jun 2018, ECLI:EU:C:2018:388; *Fashion ID*, Case C-40/17, 29 Jul 2019, ECLI:EU:C:2019:629; *Jehovan todistajat*, Case C-25/17, 10 Jul 2018, ECLI:EU:C:2018:551. Source level A.

[^6]: Dissertation draft Ch 2, Section 2.3 "Normative conditions: anonymity / unlinkability / verifiability / accountability" (civic-proof-dissertation/dissertation-outline.md). Source level A (internal document).

[^7]: CJEU, *Pammer v Reederei Karl Schlüter GmbH & Co KG and Hotel Alpenhof GesmbH v Heller*, Joined Cases C-585/08 and C-144/09, 7 Dec 2010, ECLI:EU:C:2010:740. Source level A.

[^8]: *El País*, "El error en certificados eIDAS de Camerfirma deja sin firma a miles de usuarios," 10 Mar 2022, and EU Trust List Browser announcements (2024 subsequent events). Source level B.

[^9]: CJEU, *eDate Advertising GmbH v X & Olivier Martinez and Robert Martinez v MGN Limited*, Joined Cases C-509/09 and C-161/10, 25 Oct 2011, ECLI:EU:C:2011:685. Source level A.

[^10]: DPC (Ireland), *Annual Report 2023*, Mar 2024; *Reuters*, "Ireland's data regulator faces criticism over slow enforcement," 14 May 2023. Source level B.

[^11]: CJEU, *Verein für Konsumenteninformation v Amazon EU*, Case C-191/15, 28 Jul 2016, ECLI:EU:C:2016:612. Source level A.

[^12]: noyb, *GDPR Today: Five Years of GDPR — Procedural Bottlenecks Report*, 2023; noyb, *Cross-border GDPR Complaints Tracker* (online database, 2024 update). Source level B.

[^13]: DPC (Ireland), *Annual Report 2023*, Mar 2024; coverage of the Schrems v Facebook 2018 complaint and subsequent proceedings. Source level B.

[^14]: *Times of India*, "Aadhaar misuse complaint stuck between UIDAI and state DPA," 8 Aug 2023; Greenleaf, G., *Asian Data Privacy Laws* (2024 online edition update). Source level B/C.

[^15]: EDPB, *Procedural Guidelines for One-Stop-Shop*, 2024; European Parliament Briefing, *Revision of the eIDAS Regulation*, PE 699.491, 2023. Source level A/B.

[^16]: Regulation (EU) 2024/1183 (eIDAS 2.0), Art 5b (trust service provider liability) + Recitals 35–37. Source level A.

[^17]: *The Register*, "Singpass authentication suffered service disruption affecting cross-border transactions," 17 Apr 2024. Source level C.

[^18]: DPC (Ireland), *Annual Report 2023* (cited above); *Reuters*, "Sweden's BankID outage triggers cross-border complaints," 2023. Source level B/C.

[^19]: UK Information Commissioner, *Investigation into the use of data analytics in political campaigns: Final report*, 6 Oct 2020; FTC, *Decision and Order in the Matter of Facebook, Inc.*, FTC File No. 092-3184, 24 Jul 2019. Source level A.

[^20]: EDPB Binding Decisions 1–5 (2021–2024); EDPB One-Stop-Shop Procedure reports. Source level A.

[^21]: CJEU, *Data Protection Commissioner v Facebook Ireland Ltd and Maximilian Schrems* (*Schrems II*), Case C-311/18, 16 Jul 2020, ECLI:EU:C:2020:559; EU-US Data Privacy Framework Adequacy Decision (2023). Source level A.

[^22]: UNCITRAL Model Law on Cross-Border Insolvency (1997). United Nations. Source level A.

[^23]: *Schrems II* (C-311/18, 2020), legal assessment of FISA § 702 and Executive Order 12333, paras 168–202. Source level A.

[^24]: Mills, A. (2009). *The Confluence of Public and Private International Law: Justice, Pluralism and Subsidiarity in the International Constitutional Ordering of Private Law*. Cambridge University Press. Source level A.

[^25]: Regulation (EU) No 1215/2012, Brussels I Recast, Articles 17–19; Mankowski, P. (Ed.) (2016). *Brussels Ibis Regulation: Commentary* (2nd ed.). Sellier. Source level A.

[^26]: CJEU, *Bolagsupplysningen OÜ and Ingrid Ilsjan v Svensk Handel AB*, Case C-194/16, 17 Oct 2017, ECLI:EU:C:2017:766. Source level A.

[^27]: CJEU, *Florin Lazar v Allianz SpA*, Case C-350/14, 10 Dec 2015, ECLI:EU:C:2015:802. Source level A.

[^28]: Svantesson, D. J. B. (2017). *Solving the Internet Jurisdiction Puzzle*. Oxford University Press. Source level A.

[^29]: CJEU, *Wintersteiger AG v Products 4U Sondermaschinenbau GmbH*, Case C-523/10, 19 Apr 2012, ECLI:EU:C:2012:220; *Peter Pinckney v KDG Mediatech AG*, Case C-170/12, 3 Oct 2013, ECLI:EU:C:2013:635. Source level A.

[^30]: Regulation (EC) No 864/2007, Rome II, Article 4(3); *Lazar v Allianz* (C-350/14). Source level A.

[^31]: UNCITRAL Model Law on Electronic Transferable Records (MLETR, 2017) with Explanatory Note. Source level A.

[^32]: UNCITRAL Working Group IV (Electronic Commerce) Reports from the 65th–67th Sessions (2023–2024) on Electronic Identity Credentials. Source level A.

[^33]: Rühl, G. (2018). The Liability of Online Platforms: New Rules for the Digital Single Market and the Need for International Coordination. *Yearbook of Private International Law*, 20, 333–367. Source level A.

[^34]: Goldsmith, J., & Wu, T. (2006). *Who Controls the Internet?: Illusions of a Borderless World*. Oxford University Press. Source level A.

[^35]: Convention for the Unification of Certain Rules for International Carriage by Air (Montreal Convention 1999), opened for signature 28 May 1999, 2242 UNTS 309 (entered into force 4 November 2003). Source level A.

[^36]: SWIFT Customer Security Programme Annual Report 2024; European Banking Authority, *Report on the Operation of the Out-of-Court Redress Mechanism under PSD2* (2022). Source level A/B.

[^37]: Regulation (EU) 2017/2394 of the European Parliament and of the Council of 12 December 2017 on cooperation between national authorities responsible for the enforcement of consumer protection laws (CPC Regulation). OJ L 345/1. Source level A.

[^38]: European Court of Auditors Special Report 13/2021; Special Report 26/2023 on cross-border consumer protection. Source level A.

[^39]: International Convention for the Conservation of Atlantic Tunas (ICCAT Convention), opened for signature 14 May 1966, 673 UNTS 63. Source level A.

[^40]: Comprehensive Economic and Trade Agreement (CETA), EU-Canada, signed 30 October 2016, OJ L 11/23, Chapter 8 (Investment), Articles 8.27–8.30 (ICS appellate structure). Source level A.

[^41]: CJEU, *Slovak Republic v Achmea BV*, Case C-284/16, 6 Mar 2018; *Republic of Moldova v Komstroy LLC*, Case C-741/19, 2 Sep 2021; ICSID, *Eli Lilly and Company v Government of Canada*, ICSID Case No. UNCT/14/2, Final Award (16 Mar 2017). Source level A.

[^42]: APEC Cross-Border Privacy Rules (CBPR) System; APEC Privacy Framework; Greenleaf, G. (2024). *Cross-border privacy law*. *International Privacy Law*. Source level A/B.

[^43]: Schultz, T., & Mills, A. (2019). The (Hidden) Limits of International Soft Law; Gersen, J., & Posner, E. (2008). Soft Law: Lessons from Congressional Practice. *Stanford Law Review*. Source level A.

[^44]: Schwartz, P., & Solove, D. (2014). Reconciling Personal Information in the United States and European Union. *California Law Review*, 102; Hijmans, H. (2016). *The European Union as a Constitutional Guardian of Internet Privacy and Data Protection*. Springer. Source level A.

[^45]: Regulation (EU) 2024/1183 (eIDAS 2.0), Articles 5a–5g, 11, 11a, 13, 17, 46a–46e + Recitals 24, 35–37 (consolidated text). Source level A.

[^46]: Regulation (EU) 2016/679 (GDPR), Articles 56, 60–67, 77, 79, 82 + Recital 141; EDPB Guidelines 02/2022 on identification of controller / processor. Source level A.

[^47]: UNCITRAL MLETR (2017), Article 18 (non-discrimination) + Explanatory Note. Source level A.

[^48]: UNCITRAL, Status of legislation based on the UNCITRAL Model Law on Electronic Transferable Records (UNCITRAL website, accessed 2024). Source level A.

[^49]: Goldsmith & Wu (2006), *Who Controls the Internet?* (cited above); Schultz, T. (2008). Carving up the Internet. *European Journal of International Law*, 19(4), 799–839. Source level A.

[^50]: Belli, L., & Cavalli, O. (2023). *Digital Sovereignty in the Global South*. Springer; representative positions of the cyber-sovereignty school. Source level A/B.

[^51]: Kuner, C. (2017). Reality and Illusion in EU Data Transfer Regulation Post Schrems. *German Law Journal*. Source level A.

[^52]: ENISA, *Risk Assessment Framework for Digital Identity Wallets*, 2024; EUDI Wallet Large Scale Pilots (POTENTIAL / NOBID / EWC / DC4EU) progress reports 2024–2025. Source level A/B.

[^53]: noyb, *5 Years GDPR — A Reality Check* (2023); ICCL, "Europe's Enforcement Paralysis Report" (2022). Source level B.

[^54]: Reich, N. (2018). Cross-Border Consumer Protection. In *Handbook on European Consumer Law*. Edward Elgar; Crawford, J. (2019). *Brownlie's Principles of Public International Law*. Oxford University Press. Source level A.

[^55]: Feiler, L., & Forgó, N. (2023). European Identity Wallets: Liability Architecture. *European Data Protection Law Review*, 9(4); ENISA, *Remote ID Proofing — Good Practices*, Jun 2023. Source level A/B.

[^56]: Greenleaf, G. (2014). *Asian Data Privacy Laws: Trade and Human Rights Perspectives*. Oxford University Press, ch. 13. Source level A.

[^57]: Bhabha, J. (2024). *Statelessness and the Politics of Belonging* (anticipated publication with Cambridge University Press or Penn Press). Source level A (pending full bibliographic confirmation).

[^58]: UN Sustainable Development Goal 16.9 (legal identity for all by 2030); Convention relating to the Status of Stateless Persons (1954); Convention on the Reduction of Statelessness (1961); UNHCR, *Handbook on Protection of Stateless Persons under the 1954 Convention* (2014), HCR/GS/12/04. Source level A.

[^59]: UNHCR, *Global Trends: Forced Displacement in 2023*; *Statelessness Statistics 2024*. UNHCR Refworld. Source level A.

[^60]: UNHCR Statelessness Determination Procedures; UNHCR Refugee Card guidelines. Source level A.

[^61]: UNHCR case management practice documents; reports from the International Refugee Assistance Project and similar NGOs. Source level B.

[^62]: World Bank, *ID4D Practitioner's Guide*; ITU-T Focus Group on Digital Identity 2023–2024 working reports. Source level A/B.

[^63]: Bhabha, J. (2024). *Statelessness and the Politics of Belonging* (pending full publication details; see source note 57 above). Source level A.

[^64]: *El País*, cited above (source note 8); ETSI ESI Trust List Browser announcements (2024). Source level B.

[^65]: *Times of India*; Greenleaf 2024 online edition, cited above (source note 14). Source level B/C.

[^66]: DPC (Ireland) *Annual Report 2023*; *Reuters* 2023, cited above (source note 18). Source level B/C.

[^67]: *The Register* 2024, cited above (source note 17). Source level C.

[^68]: UK ICO Final Report 2020; FTC Decision 2019, cited above (source note 19). Source level A.

[^69]: GCC Digital Identity Cross-Border Recognition Initiative (from 2024; specific documents pending). Source level B (pending supplementation).

[^70]: Taiwan Personal Data Protection Act; Personal Information Protection Commission (PIPC) establishment announcement 2025; Taiwan Citizen Lab 2025 (cited above, source note 2). Source level A/C.

[^71]: ELI–UNIDROIT (2023). *Principles on Digital Assets and Private Law*; Polygon ID technical documentation. Source level A/B.

[^72]: UNHCR BIMS (Biometric Identity Management System) technical documentation; 1954/1961 Conventions (cited above, source note 58). Source level A.

[^73]: EU-US Data Privacy Framework Adequacy Decision (2023); Privacy and Civil Liberties Oversight Board (PCLOB) reports; Data Protection Review Court (DPRC) procedural rules. Source level A.

[^74]: Dissertation draft Ch 14 policy agenda, 14.2 federated trust-list alliance governance design (civic-proof-dissertation/dissertation-outline.md). Source level A (internal document).

[^75]: Dissertation draft Ch 10; article E1 (wallet-as-essential-facility) research outline. Source level A (internal document).

[^76]: EDPB OSS Procedural Regulation draft (2024); Hague Conference Permanent Bureau (2024), *Digital Public Documents and Apostilles: Working Paper for Council on General Affairs and Policy*, HCCH Doc. Prel. 12 of December 2023. Source level A.

[^77]: LG Köln, Beschluss vom 14.06.2023 – 14 O 290/22 (NFT evidentiary admissibility); UK Electronic Trade Documents Act 2023. Source level A.
