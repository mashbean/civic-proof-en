---
title: "Why DNS Escaped State-Centric Governance but Digital Identity Has Not: A Historical Sociology of Trust Roots"
description: "The present analysis formalizes DNS non-state governance as four conjunctive preconditions P_DNS = {P1 Postel-jar academic community, P2' U.S. strategic withdrawal, P3' technical-neutrality discourse as deliberate construction, P4' Stewardship Transition as a political product barely cleared through multiple veto points}. The Historical Mismatch hypothesis (HM) shows that all four preconditions fail to hold in the digital identity domain P_ID as of 2025. HM shares a conjunctive-necessary-condition structure with the H1' three-wall argument of article 03, the T three-element argument of article 04, the IT' impossibility triangle of article 05, the CB-Justice D1*∧D2* of article 06, and the SRP of article 07, though operating at the level of historically contingent necessary conditions for governance. Comparison of four cross-national governance models shows that the IATA + ICAO and SWIFT + CPMI dual-track models yield the highest fit; ICANN is not the template—the four-layer governance framework FTLA = (G_industry, G_state, G_recognition, G_oversight) is. Within specific sub-domains (PSE / Vocdoni / Rarimo / DIF) a loose autonomy position within the G_industry layer may be preserved, but boundary conditions B2–B4 all fail, precluding expansion into full-scale replication of the DNS model."
pubDate: 2026-05-06
tags: ["civic-proof", "DNS-governance", "ICANN", "internet-governance", "trust-list-alliance", "FTLA", "historical-sociology", "path-dependency", "doctoral-research", "Ch11-trust-infrastructure"]
category: "Trust Infrastructure Governance"
aiModel: "Claude Opus 4.7"
aiPrompt: "Why were the DNS trust roots (13 root servers / IANA / ICANN) able to escape into non-state governance? What were the critical time windows, key actors, and key international-law decisions? Why do digital identity trust roots remain monopolized by states to the present? Why does the time window for interstate power competition differ? Can the ICANN multistakeholder model be transplanted into the identity domain? Which preconditions do not hold? What form of governance must a federated trust-list alliance adopt in order to satisfy the historical conditions of the identity domain?"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-05-06-dns-vs-identity-trust-roots"
aiGeneratedDate: 2026-05-06
humanReviewed: false
lang: "en"
slug: "2026-05-06-dns-vs-identity-trust-roots"
---

## § 1. Introduction: When the "DNS Model" Is Invoked as a Template for Digital Identity Governance

Over the past decade, digital identity discourse has repeatedly produced a certain incantatory argument: "If DNS trust roots can operate under non-state governance, why cannot digital identity?" This invocation treats ICANN as a transplantable template and imagines the W3C VC / DID working groups as the next frontier of the internet-governance multistakeholder model.[^1] As the idea of a federated trust-list alliance (FTLA) has emerged in contexts such as cross-border EUDI Wallet mutual recognition, AAMVA mDL interstate interoperability, and APEC ECBA cross-national agreements,[^2] discussion has quickly settled into the question of whether an "identity-domain ICANN" can be built.

This framing has itself drifted from the historical record. DNS trust roots escaped non-state governance as the contingent product of multiple historical preconditions that happened to hold simultaneously between 1969 and 2016; none could be absent.[^3] Treating this outcome as "the natural state of internet governance" and imagining it can be redeployed to the identity domain in 2025 amounts to compressing a conjunctive structure of historically contingent necessary conditions into a single replicable institutional blueprint.

The present analysis employs the path-dependency and critical-juncture framework of historical sociology[^4] to decompose DNS governance history into four preconditions P_DNS = {P1, P2', P3', P4'} and advances the HM (Historical Mismatch hypothesis) conjunctive claim: in the identity domain P_ID as of 2025, all four preconditions fail to hold. HM shares a conjunctive-necessary-condition structure with other arguments in the present series. The H1' three-wall argument of article 03 treats the legal possibility conditions of "digital association";[^5] the T three-element argument of article 04 treats the legal preconditions of pseudonymous participation;[^6] the IT' impossibility triangle of article 05 treats the cost-benefit constraints of Sybil resistance;[^7] the CB-Justice D1*∧D2* of article 06 treats the normative conditions of civic burden redistribution;[^8] and the SRP (Sovereignty-Rooted Paradox) of article 07 treats the sovereignty-root structure of multi-rooted civic proof.[^9] HM stands alongside these five, operating at a different level: it addresses the conjunctive necessary conditions at the governance level concerning the historical replicability of the DNS model in the identity domain.

The eight-chapter structure of this paper is as follows. Section 2 reconstructs the four stages of DNS governance history and elaborates the revised P_DNS four preconditions (P1 / P2' / P3' / P4'). Section 3 applies the HM conjunctive claim to test these in reverse, arguing that P1''–P4'' fail in P_ID. Section 4 compares four cross-national governance models (M1 ICANN / M2 IATA + ICAO / M3 SWIFT + CPMI / M4 Basel Committee) and evaluates their overall fitness for the identity domain against five applicability criteria. Section 5 proposes the FTLA four-layer governance framework (G_industry, G_state, G_recognition, G_oversight). Section 6 uses four sub-domain cases (PSE / Vocdoni / Rarimo / DIF) and four boundary conditions B1–B4 to assess the possibility of sub-domain replication. Section 7 sets out policy recommendations and engineering interfaces. Section 8 concludes.

Three boundaries are stated at the outset. First, the historical evidence for the four P_DNS preconditions is of broadly comparable strength, but P3' (the technical-neutrality discourse as deliberate construction) relies on interpreting the motivations of Postel, Cerf, and others; archival evidence cannot directly establish whether "genuine belief" or "strategic packaging" is the correct characterization.[^10] The present analysis adopts the moderate-strong formulation that "the neutrality discourse was a discursive construction of the engineering community." Second, HM is a conditional proposition arguing that P_DNS does not hold in P_ID, not that "state monopoly over the identity domain is necessary."[^11] Third, the analogical strength of the four cross-national governance models is capped at "moderate-strong": the analogies presuppose structural isomorphism, but the identity domain adds two variables absent from IATA / SWIFT / Basel—the politicization of individual rights and the cryptographic substitution of root trust—and analogies cannot directly infer identity of outcomes.[^12]

## § 2. Four Stages of DNS Governance History and the Revised P_DNS Four Preconditions

### § 2.1 The Four-Stage Timeline

DNS governance history may be divided into four stages. The first stage (1969–1988) is the early ARPANET engineering-community stage: in 1969 Steve Crocker wrote RFC 1,[^13] establishing the editing and distribution conventions of the RFC series; in 1972 editorial authority over the RFC series passed to Jon Postel;[^14] in 1983 Paul Mockapetris designed and standardized DNS;[^15] and in 1988 IANA (Internet Assigned Numbers Authority) was formally established.[^16] The second stage (1988–1998) is the NSFNET commercialization transition: the NSFNET backbone retired in 1995, with commercial ISPs taking over the backbone;[^17] ICANN was established in 1998 and signed an MoU with NTIA.[^18] The third stage (1998–2014) is the period of ICANN's dual-track growth: the Affirmation of Commitments (AoC) was signed in 2009, partially superseding the MoU;[^19] the ATRT 1–4 report series was progressively published;[^20] and the five-party multistakeholder structure (governmental GAC / industry / academia / civil-society ALAC / technical community) was gradually institutionalized.[^21] The fourth stage (2014–2016) is the IANA Stewardship Transition: NTIA announced its intention to withdraw in 2014;[^22] the IANA Stewardship Transition Coordination Group (ICG) proposal was completed in 2016;[^23] on 30 September 2016 Judge Hanks of the Southern District of Texas denied the application for a preliminary injunction in *Texas v. Department of Commerce*;[^24] and on 1 October 2016 the transition took formal effect.[^25]

The path-dependency chain formed by these four stages is the historical vehicle of the P_DNS four preconditions. Pierson's *Politics in Time* formalizes path dependency as "increasing returns under positive feedback mechanisms";[^26] Capoccia and Kelemen define a critical juncture as "a situation in which the institutional structure may develop in several directions within a short time window, and is locked into a specific path by certain events."[^27] Overlaying these two frameworks onto DNS governance history, 1995–1998 and 2014–2016 are the two critical junctures: the first locked in the path of "semi-private non-profit organization supervision," and the second locked in the path of "transfer of oversight authority to the multistakeholder community."

### § 2.2 P1: The Postel-Jar Early Academic Community Culture

The core of P1 does not lie in the romanticized proposition of "internet freedom"; it points to the specific code of conduct formed by the ARPANET engineering community between 1969 and 1988. The term "Postel jar" derives from the principle popularized in RFC 760 / RFC 793—"be liberal in what you accept, be conservative in what you send"[^28]—which later extended to high levels of trust in the RFC institution and IANA number assignments. Coleman's *Coding Freedom* describes such communities as "aestheticized hacker ethics combined with institutionalized peer review";[^29] Kelty's *Two Bits* uses the concept of "recursive public" to explain why these communities were able to sustain collaborative management of technical infrastructure;[^30] Lessig's *Code: Version 2.0* traces the sustainable conditions for this culture to the political economy of "code as law."[^31]

P1 does not romanticize this stage. The RFC institution depended on the extremely small scale of the early ARPANET engineering community (early authors numbered in the dozens),[^32] on the early funding structure of the U.S. Department of Defense's ARPA / DARPA,[^33] and on the political economy in which the backbone was federally funded rather than commercially bid prior to NSFNET commercialization.[^34] Transplanting the "rough consensus and running code" of this stage to the identity domain in 2025 requires first addressing the fact that all three historical conditions—scale, funding structure, and political economy—have transformed.

### § 2.3 P2': The Strategic Withdrawal of U.S. State Power in the 1980s–1990s

The standard account of P2 characterizes this period as "U.S. indifference to the internet." This account has been revised by Mueller in *Ruling the Root* and *Networks and States*:[^35] between 1995 and 1998, the U.S. executive branch (the Department of Commerce, NTIA, and the White House Office of Science and Technology Policy) made a strategic choice, following multiple rounds of internal deliberation, to transfer DNS oversight authority to a semi-private non-profit organization.[^36] The White Paper of 5 June 1998 (*Management of Internet Names and Addresses*) explicitly proposed "transfer to a private-sector-led global collaborative body" as stated policy.[^37] In discussions preceding the signing of the NTIA-ICANN MoU on 25 November 1998, the executive branch made an explicit choice among options including "establish a direct government agency," "assign it to the UN's ITU," "assign it to ISOC," and "establish a new private-law foundation," clearly selecting the last.[^38]

P2' (strategic withdrawal) replaces P2 (indifference) because the former carries a more historically precise account of responsibility. "Indifference" implies the United States did not care; "strategic withdrawal" acknowledges U.S. shaping of the outcome: the choice of a California 501(c)(3) private-law foundation structure, the choice of five-party multistakeholder representation, and the retention of NTIA's final approval authority over root-zone changes until 2016 were all strategic rather than neutral decisions.[^39] Goldsmith and Wu's *Who Controls the Internet?* supplies the countervailing evidence: in disputes over domain names, cyberlibertarian litigation, and cross-border content regulation, U.S. state power was consistently present.[^40] Drezner's *All Politics Is Global* situates this form of "present but yielding" strategic withdrawal within the political economy of great powers.[^41]

### § 2.4 P3': The Technical-Neutrality Discourse as Deliberate Construction by the Engineering Community

The standard account of P3 treats DNS technical neutrality as an objective engineering fact. This account overlooks a more important fact: the technical-neutrality discourse was itself a discursive construction of the engineering community. DeNardis traces three layers of discursive construction mechanisms in *The Global War for Internet Governance* and *Protocol Politics*:[^42] the first layer is the phrasing in RFC 1591 (Postel, 1994) on country-code TLD delegation principles, which described TLD delegation as a "ministerial function" while refusing to acknowledge its political character;[^43] the second layer is Cerf's and Postel's sustained use in public lectures of depoliticized language such as "network of networks" and "reliable communications";[^44] and the third layer is the ritualization of governance decisions through technical operations such as the root key signing ceremony, packaged as "purely technical steps."[^45]

"The neutrality discourse was deliberately constructed" is not a pejorative characterization. The construction process was reasonable under the historical conditions of the time; had DNS not been packaged as purely technical, the U.S. executive branch, the ITU, and national governments would have had considerably stronger incentives to intervene in the 1990s. Viewed retrospectively from 2025, however, this construction has allowed "DNS neutrality" to become a discursive resource that can be exploited in reverse: when ICANN is questioned, the technical community can deploy "we only perform ministerial functions" to deflect political responsibility; when national governments demand a role, the engineering community can invoke "technical neutrality" as a defense.[^46] The RFC 1591 phrasing, the "ministerial function" vocabulary, and the ritualization of the root key signing ceremony jointly constructed a semantic infrastructure that enabled the other conditions of P_DNS to persist.

### § 2.5 P4': The Stewardship Transition as a Political Product Barely Cleared Through Multiple Veto Points

The standard account of P4 describes the IANA Stewardship Transition as "a successfully completed institutional bridge." This account glosses over the fact that the transition came close to failing repeatedly during the two years of 2014–2016. After NTIA announced its intention to withdraw in March 2014,[^47] the U.S. Congress introduced numerous opposition motions, including the DOTCOM Act (H.R. 4342) of 2014, which sought to legislatively block the transition.[^48] In September 2016, when the transition was scheduled to take effect on 1 October, the attorneys general of Texas, Arizona, Oklahoma, and Nevada filed suit in the U.S. District Court for the Southern District of Texas, seeking a temporary restraining order to stop the transition.[^49] Judge Hanks denied the application for a temporary restraining order on the afternoon of 30 September 2016—the day before the transition was to take effect—thereby allowing the contractual expiration on 1 October to proceed without obstacle.[^50]

P4' (a political product barely cleared through multiple veto points) replaces P4 (a successfully completed institutional bridge) because the success of the transition itself depended on a chain of highly contingent political conditions: the continuity of the Obama administration's policy, the transition design led within NTIA by Larry Strickling,[^51] the accountability evidence accumulated by the ICANN ATRT 1–4 report series,[^52] the political compromise reached by the multistakeholder community in the ICG proposal,[^53] and finally Judge Hanks's judicial decision.[^54] Had any single link in this chain failed, the transition would not have occurred, and DNS governance would have continued under the NTIA-ICANN MoU framework until the next critical juncture.

P_DNS = {P1, P2', P3', P4'} is a conjunctive structure; none of the four can be absent. Historical sociology does not provide a purely repeatable experiment for this, but five counterfactual scenarios can strengthen the moderate-strong causal argument (see Section 3).

## § 3. The HM Conjunctive Claim: P1''–P4'' All Fail in the Identity Domain

### § 3.1 Formalization of HM

HM (Historical Mismatch hypothesis) is formally a conjunctive necessary-condition proposition:

> ∀ P_i ∈ P_DNS = {P1, P2', P3', P4'}, P_i does not hold in the identity domain P_ID as of 2025.

HM rejects the strong proposition that "state monopoly over the identity domain is necessary"; what it claims is a different matter: the four historical preconditions on which DNS escaped non-state governance fail in their counterpart configurations in the identity domain in 2025. The argumentative strength of HM is capped at moderate-strong, consistent with articles 05, 06, and 07, because it relies on historical comparison and counterfactuals rather than controlled experiments.[^55]

### § 3.2 P1'': The Early Identity Community Was State-Dominated

The identity domain has no equivalent of the Postel jar. EU eIDAS 1.0 was enacted in 2014,[^56] constituting the earliest cross-national framework in the identity domain, but it was state-legislation-led from the first day: member-state governments led, the European Commission drove the process, and industry and civil society participated without an RFC-equivalent editorial-authority structure. India's Aadhaar began construction in 2009 and the Aadhaar Act was passed in 2016; the entire process was led by the state institution UIDAI.[^57] China's *Cybersecurity Law* (2017), *Personal Information Protection Law* (2021), and *Data Security Law* (2021) together constitute a state-led identity regulatory architecture.[^58] The U.S. NIST SP 800-63 series has been published since 2004, led by a federal government agency.[^59]

The W3C VC (Verifiable Credentials) and DID (Decentralized Identifiers) working groups are the closest thing the identity domain has to a "cross-national engineering community,"[^60] but their partial autonomy carries no legal standing. W3C VC Data Model 2.0 and DID Core 1.0 have achieved standard status,[^61] but within the formal legal and standards frameworks of eIDAS 2.0, ISO/IEC 18013-5, and the AAMVA mDL Implementation Guidelines, they are objects of citation,[^62] not holders of "de facto standard" status equivalent to IETF RFCs within internet governance.[^63] P1'' does not deny the outputs of the W3C VC / DID work; it acknowledges their existence while noting the absence of the legally authoritative structural position that characterized P1.

### § 3.3 P2'': State Power Is Highly Vigilant

The identity domain offers no opportunity window for "strategic withdrawal." China and Russia, at the 2012 ITU WCIT-12 conference, advanced proposals to strengthen the ITU's role in internet governance,[^64] sending a clear signal of the high political sensitivity of states regarding "who can define civil identity." EU eIDAS 2.0 (Regulation 2024/1183) was driven forcefully by the European Commission and member states; this is better described as expansion than as withdrawal.[^65] The draft NIST SP 800-63-4, circulated for public comment in 2024, explicitly emphasized the leading role of federal agencies in determining Identity Assurance Level designations.[^66]

A critical distinction must be drawn between democratic constitutional structures and authoritarian structures. eIDAS 2.0 was adopted through the checks among the European Parliament, the European Commission, and the Council of the EU;[^67] NIST SP 800-63 is constrained by the public-comment obligations of the U.S. Administrative Procedure Act (APA);[^68] and Aadhaar was partially curtailed by the Supreme Court in *K.S. Puttaswamy v. Union of India* (2018).[^69] China's *Cybersecurity Law* and *Personal Information Protection Law* were enacted by the National People's Congress and lack a comparable judicial review pathway.[^70] The P2'' claim of HM does not assume that all states are equally vigilant about the identity domain; it claims that the identity domain lacks any opportunity window for the kind of strategic withdrawal that the U.S. executive branch pursued between 1995 and 1998—and this is a fact at the level of conjunctive structure.

### § 3.4 P3'': Identity Inherently Involves Sovereignty

A "technical-neutrality discourse" cannot be deliberately constructed in the identity domain. The constructive capacity of engineers is present, but the constraint comes from the essential nature of identity as political membership. Krasner's *Sovereignty: Organized Hypocrisy* disaggregates sovereignty into four types (domestic, interdependence, international-legal, and Westphalian);[^71] citizenship is the intersection of domestic sovereignty and international-legal sovereignty, defining who is a political member of the state and who receives that state's international-legal protection.[^72] Sassen's *Territory, Authority, Rights* further argues that as identity infrastructure scales, sovereign forces necessarily flow back to mid-level governance institutions.[^73]

Historical experience reinforces this argument. EU eIDAS 1.0, at the design stage, attempted to adopt a relatively lightweight cross-border mutual-recognition framework;[^74] but the implementation experience of 2018–2024 shows that when identity infrastructure genuinely scales (covering public services, banking KYC, and cross-border work permits), the European Commission was compelled to strengthen regulatory authority in eIDAS 2.0.[^75] India's Aadhaar, even after the *Puttaswamy II* (2018) curtailment, maintained the centralized UIDAI structure; the Supreme Court's limiting decision did not alter the political economy of the identity infrastructure.[^76] Taiwan's Digital Identity Wallet (DIW), built under the leadership of the Ministry of Digital Affairs in 2024 with the public trust list deployed on the Ethereum mainnet, retains the state as its root.[^77] Bhutan's NDI has similarly been deployed on the Ethereum mainnet, with the state-root structure unchanged.[^78]

P3'' does not claim that "identity inherently involves sovereignty" is an ontological truth; it claims that "when identity infrastructure scales, sovereign forces flow back to the middle tier" is a moderate-strong historical pattern accumulated across multiple cases between 2009 and 2025.

### § 3.5 P4'': The Absence of an IANA-Equivalent Transition Mechanism

The identity domain has no IANA equivalent. Before NTIA withdrew, it was the single node of DNS governance; all contracts, root-zone approvals, and IANA functions contracts were concentrated at NTIA.[^79] No such single node exists in the identity domain. The W3C VC / DID working groups are standard-setters without contractual authority;[^80] ETSI and ISO are standards organizations whose standards adoption depends on member-state uptake;[^81] ICAO is the International Civil Aviation Organization, and its PKD (Public Key Directory) is an intergovernmental PKI internal to ICAO that has never been opened to non-governmental participation.[^82]

NSTIC (National Strategy for Trusted Identities in Cyberspace) 2011–2017 was the most recent attempt by the United States to establish an IANA equivalent in the identity domain.[^83] The failure of NSTIC itself constitutes evidence for P4''; the causes of failure included inter-agency coordination difficulties, the tension between industry-led and government-led approaches, and the absence of a single-contract structure analogous to the NTIA-ICANN MoU.[^84]

### § 3.6 Five Counterfactual Scenarios

The conjunctive claim of HM may be tested through five counterfactual scenarios. First, had EU eIDAS 1.0 legislation been delayed by five years, could W3C VC / DID have achieved a de-facto-standard status comparable to IETF? Partially possible, but still constrained by P3'' sovereignty-invasion sensitivity: delayed eIDAS legislation would not have altered member-state reservation of the authority to define civil identity.[^85] Second, had the *Puttaswamy II* curtailment judgment come five years earlier, would Aadhaar have adopted the ICANN model? Impossible—UIDAI was already state-led.[^86] Third, had the NSTIC 2011–2017 program succeeded, could it have established an IANA equivalent? The failure of NSTIC itself corroborates P4''—the absence of an institutional transition bridge.[^87] Fourth, had W3C VC / DID launched before eIDAS 1.0 legislation, could it have influenced national legislation in reverse? W3C VC / DID still depends on member-state adoption and has no NTIA equivalent.[^88] Fifth, had ICAO PKD been opened to non-governmental participation, could it have replicated the ICANN model? ICAO PKD has remained closed to states; there is no PSO Postel-jar culture.[^89]

The five counterfactual scenarios jointly support the moderate-strong causal argument of HM: the four preconditions of P_DNS fail in their counterpart configurations in the identity domain, and the failures are structural rather than contingent.

## § 4. Comparison of Four Cross-National Governance Models and Five Applicability Criteria

### § 4.1 Deep Description of the Four Models

Shifting attention away from the question of "whether ICANN can be replicated in the identity domain," the history of cross-national governance provides at least four different institutional templates for comparison.

**M1 The ICANN Multistakeholder Model.** ICANN adopts a five-party representative structure (governmental GAC, contracted-party industry, academia, civil-society ALAC, and technical community).[^90] It lacks a treaty basis and is organized as a California 501(c)(3) private-law foundation.[^91] National influence over ICANN policy passes through the GAC advisory-opinion channel, but under the ICANN Bylaws the GAC plays only an advisory role.[^92] Standards adoption depends on voluntary compliance by domain registrars and root-server operators.[^93]

**M2 The IATA + ICAO Dual-Track Model.** International aviation governance divides into two tracks—industry self-regulation and intergovernmental organization: IATA (International Air Transport Association), established in 1945, handles industry self-regulatory standards (Resolutions), fare coordination, and operational coordination;[^94] ICAO (International Civil Aviation Organization), established by the 1944 Chicago Convention as a UN specialized agency, promulgates SARPs (Standards and Recommended Practices) and supervises state implementation.[^95] The two tracks operate through bilateral air-service agreements, SARP national transposition legislation, and de facto cooperation between IATA and ICAO. IATA is not a perfect institution: the U.S. DOJ launched a 1979 antitrust investigation into IATA fare coordination,[^96] prompting IATA to reform its fare mechanisms—a historical warning about the risks of industry oligopoly.

**M3 The SWIFT + CPMI Model.** SWIFT (Society for Worldwide Interbank Financial Telecommunication) was established in Belgium in 1973, organized as a cooperative.[^97] SWIFT provides financial-messaging transmission infrastructure using the ISO 20022 messaging standard.[^98] SWIFT is subject to oversight by G10 central banks, with the primary oversight body being CPMI (Committee on Payments and Market Infrastructures, formerly CPSS), which ensures SWIFT's compliance with the *Principles for Financial Market Infrastructures* (PFMI, 2012).[^99] SWIFT's history is likewise not unblemished: following the Russia-Ukraine war, SWIFT removed certain Russian banks under Western sanctions pressure,[^100] revealing the potential politicization of industry infrastructure under geopolitical pressure.

**M4 The Basel Committee Soft-Law Model.** Following the collapse of Herstatt Bank in 1974, G10 central banks established the Basel Committee on Banking Supervision, organized as a transgovernmental network without a treaty basis.[^101] The Basel Committee promulgates soft-law frameworks—Basel I (1988), Basel II (2004), Basel III (2010), and Basel IV (Final Reforms, 2017)—which states voluntarily transpose into domestic law.[^102] The BIS provides secretariat support. The weakness of the Basel model is that enforcement depends on the political will of individual central banks; the 2008 financial crisis revealed inconsistent Basel II transposition across multiple countries.[^103]

The commonality of the four models is "how cross-national governance operates in the absence of a single global government"; they differ in the distribution of power between industry and states, the presence or absence of a treaty basis, and the choice between soft and hard law.

### § 4.2 Five Applicability Criteria

Mapping the four models onto the identity domain P_ID requires establishing criteria first. The present analysis adopts five applicability criteria:

> **A — Sovereignty-invasion sensitivity**: Does this domain involve the core interests of state sovereignty (civil identity, national security, monetary sovereignty, territorial authority)?
> **B — Industry-structure maturity**: Does this domain have cross-national industry self-regulatory structures (industry associations, cooperatives, standards organizations)?
> **C — Cross-border recognition demand**: Is cross-border recognition an everyday or a marginal scenario in this domain?
> **D — Regulatory-participation necessity**: Must regulatory agencies (data protection, anti-money laundering, consumer protection) hold formal seats in the governance structure?
> **E — Soft-law viability**: Can soft law (voluntary adoption, international standards) bear the compliance demands of this domain?

### § 4.3 The Applicability Matrix for the Four Models

Applying the five criteria to the four models' overall fitness for P_ID:

**M1 ICANN.** On sovereignty-invasion sensitivity (A), ICANN's design places governments in the advisory position, directly conflicting with the high sovereignty sensitivity of the identity domain.[^104] On industry-structure maturity (B), the identity-domain industry (W3C VC / DID working groups, DIF, ETSI, ISO) has achieved moderate maturity but has not yet formed an IANA equivalent. On cross-border recognition demand (C), it is strong, consistent with the ICANN model. On regulatory-participation necessity (D), ICANN's GAC advisory structure is insufficient to accommodate the formal-seat requirements of strong regulators such as GDPR / FATF. On soft-law viability (E), ICANN's voluntary-adoption model works for domain names but is constrained in the identity domain by the existence of hard law such as eIDAS. Overall assessment: the ICANN model is not applicable to the identity domain.[^105]

**M2 IATA + ICAO Dual Track.** On sovereignty-invasion sensitivity (A), the dual-track design (industry self-regulation + intergovernmental organization) has sovereignty space built in. On industry-structure maturity (B), the identity-domain structure of W3C VC / DID + ETSI + ISO/IEC 18013-5 + AAMVA + DIF is comparable to IATA industry self-regulation.[^106] On cross-border recognition demand (C), the IATA + ICAO dual-track structure of air-right recognition is isomorphic with the identity domain's EU LoTL / AAMVA mDL mutual-recognition structure. On regulatory-participation necessity (D), the state-implementation mechanism of ICAO SARPs corresponds to the formal-seat requirement for regulatory agencies in the identity domain. On soft-law viability (E), the mixture of IATA self-regulation and ICAO SARPs corresponds to the mixture of W3C standards and eIDAS hard law in the identity domain. Overall assessment: highest fitness for P_ID.[^107]

**M3 SWIFT + CPMI.** On sovereignty-invasion sensitivity (A), the SWIFT industry cooperative + central-bank oversight structure has already addressed the high sensitivity of financial sovereignty. On industry-structure maturity (B), SWIFT's cooperative structure is more stringent than IATA self-regulation; its equivalent in the identity domain would require building a new cooperative-level industry organization. On cross-border recognition demand (C), the SWIFT messaging standard is isomorphic with the W3C VC messaging standard in the identity domain.[^108] On regulatory-participation necessity (D), CPMI central-bank oversight corresponds to GDPR DPA / FATF regulation in the identity domain. On soft-law viability (E), the mixture of PFMI soft law and national transposition law can bear compliance demands. Overall assessment: second-best fit, between IATA and ICANN.[^109]

**M4 Basel Committee Soft Law.** On sovereignty-invasion sensitivity (A), the Basel transgovernmental network lacks industry seats and would downgrade existing eIDAS hard law to soft law. On industry-structure maturity (B), the Basel model does not admit industry into the governance tier. On cross-border recognition demand (C), Basel soft law has uneven transposition across non-G20 countries. On regulatory-participation necessity (D), the Basel model admits only central banks, not data-protection agencies / FATF to the same deliberative level. On soft-law viability (E), Basel soft law's enforcement strength is weak; its application to the identity domain would be a regression.[^110] Overall assessment: a regression for P_ID, because it would downgrade the existing two-layer structure of eIDAS hard law + W3C / ETSI technical standards soft law to a single layer of soft law.[^111]

### § 4.4 Boundaries of Analogical Strength

The overall fitness ranking of the four models (IATA + ICAO highest, SWIFT + CPMI second, ICANN inapplicable, Basel a regression) is capped at "moderate-strong" analogical strength. The principal constraint is that "structural isomorphism does not entail identity of outcomes": the identity domain adds two variables absent from IATA / SWIFT / Basel. First, the politicization of individual rights: the identity domain involves human-rights law (including GDPR Article 9 on sensitive data, ECHR Article 8 on private life, and the Indian *Puttaswamy II* privacy ruling),[^112] a dimension of individual rights far less salient in aviation and financial infrastructure. Second, cryptographic substitution of root trust: the identity domain permits cryptographic mechanisms such as zkSNARKs, selective disclosure, and ZKPs to partially substitute for institutional trust,[^113] a substitution for which aviation and finance have no equivalent root-trust replacement technology.

None of the four models is naturally superior. The IATA 1979 DOJ case reveals the risks of industry oligopoly; SWIFT's politicization under geopolitical pressure reveals that industry infrastructure can be weaponized; Basel's weak enforcement reveals the limits of soft law; and ICANN's inapplicability in the identity domain is itself part of the argument. Any dual-track institutional design approaching P_ID must mix the advantages of the IATA + ICAO primary structure, the SWIFT + CPMI cooperative structure, the Basel soft-law flexibility, and the GDPR strong-regulation backstop, while bearing the corresponding risks.

## § 5. The FTLA Four-Layer Governance Framework

### § 5.1 Formalization of FTLA

The analogies of Section 4 identify the best-fit model (a mixture of IATA + ICAO + SWIFT + CPMI), but the analogy from cross-national governance history is not itself an engineering design. Converting the analogy's conclusions into a concrete governance structure requires abductive engineering: reasoning back from the features of the highest-fitness model to a design for the governance layer.

> **Federated Trust-List Alliance (FTLA) Governance Framework**
>
> FTLA = (G_industry, G_state, G_recognition, G_oversight), a four-layer stratified governance
>
> - **G_industry** (industry + standards-organization self-governance layer): W3C VC / DID + IETF + ISO/IEC 18013-5 + ETSI EN 319 401 / 411 + DIF + AAMVA mDL working group
> - **G_state** (state recognition layer): domestic identity legislation (eIDAS 2.0 / Aadhaar Act / TW DIW legal basis / NIST SP 800-63-4) + designated competent authorities
> - **G_recognition** (cross-border recognition layer): EU LoTL + AAMVA mDL + APEC ECBA + APEC CBPRs + bilateral / multilateral treaties
> - **G_oversight** (regulatory participation layer): data-protection agencies (PDPC / CNIL / DPA / GDPR EDPB) + counter-terrorist financing (FATF) + consumer protection
>
> FTLA adopts an IATA-like dual track (G_industry + G_state) as its primary structure; a Basel-like soft law (G_recognition) as its cross-border flexibility layer; and a GDPR-like strong regulation (G_oversight) as its backstop.

### § 5.2 Specific Content of Each Governance Layer

**The G_industry layer.** W3C VC Data Model 2.0, W3C DID Core 1.0, IETF (OAuth, JWT, selective-disclosure JWT), ISO/IEC 18013-5 (mDL messaging standard), ETSI EN 319 401 / 411 series (Trust Service Provider), DIF DIDComm + Trust Establishment, and AAMVA 2024 mDL Implementation Guidelines v1.4 jointly constitute the industry self-governance layer.[^114] This layer handles message formats, cryptographic primitives, interoperability testing, and certification programs. It corresponds to the IATA + SWIFT cooperative model.

**The G_state layer.** EU eIDAS 2.0 (Regulation 2024/1183) establishes the member-state trust framework; India's Aadhaar Act 2016 establishes UIDAI; Taiwan's Digital Identity Wallet is built under the leadership of the Ministry of Digital Affairs;[^115] and the draft NIST SP 800-63-4 establishes federal IAL designations.[^116] This layer handles national identity legislation, designated competent authorities, issuing-institution certification, and root-certificate authorization. It corresponds to the ICAO state-recognition model.

**The G_recognition layer.** The EU LoTL (List of Trusted Lists) is the core mechanism for mutual recognition among EU member states;[^117] the AAMVA mDL Implementation Guidelines provide the North American interstate mDL mutual-recognition framework;[^118] APEC ECBA is the Asia-Pacific cross-border identity framework;[^119] APEC CBPRs are the cross-border privacy rules;[^120] and bilateral / multilateral treaties (such as EU-UK mutual recognition and EU-Switzerland mutual recognition) are individual arrangements. This layer handles the soft-law flexibility of cross-border recognition, corresponding to the Basel soft law + IATA bilateral air-right recognition model.

**The G_oversight layer.** The EU EDPB (European Data Protection Board) coordinates GDPR regulation; data-protection agencies such as Singapore's PDPC, France's CNIL, the UK's ICO, and Germany's state-level DPAs each supervise within their jurisdictions; FATF supervises counter-terrorist financing and identity-verification compliance;[^121] and consumer-protection agencies supervise commercial wallets and issuing institutions. This layer handles regulatory floor conditions, corresponding to the GDPR strong-regulation model.

### § 5.3 Three Major Governance Risks

FTLA is not a panacea that solves all problems simultaneously. Three major governance risks require sustained confrontation.

**The first risk is industry capture.** Industry oligopolists may form de-facto monopolies through the G_industry layer, binding standards to the interests of a small number of large issuing institutions or wallet providers. The IATA 1979 DOJ antitrust case provides a historical warning.[^122] In the identity domain, large platforms such as Apple Wallet, Google Wallet, and Microsoft Entra Verified ID may influence the direction of standards development through W3C / DIF working groups.[^123] The corresponding governance mechanisms are the open-standards procedures of W3C / IETF, the multi-member voting of ETSI / ISO, and the democratic representativeness of AAMVA at the state level. G_industry is not naturally apolitical and requires sustained procedural governance safeguards.[^124]

**The second risk is state capture.** Authoritarian states may intervene forcefully through the G_state layer. China's *Cybersecurity Law* and *Personal Information Protection Law* incorporate identity infrastructure into the national-security framework,[^125] making it difficult to interface with the cross-border recognition of the G_recognition layer and the independent data-protection agencies of the G_oversight layer. The eIDAS 2.0 member-state trust framework faces corresponding risks in member states with declining judicial independence, such as Poland and Hungary.[^126] FTLA's G_state thickness varies unevenly across countries—strong in the EU, weak in many Asian countries—constituting a seam that is vulnerable to attack.[^127]

**The third risk is lowest-common-denominator.** Cross-border recognition under the G_recognition layer may degrade into weak consensus, pulling high-standard members toward low-standard ones. The uneven transposition of Basel III in certain countries provides an instructive parallel.[^128] To prevent this, G_recognition requires a G_oversight backstop, with strong regulation such as GDPR ensuring a minimum floor.

The corresponding mechanisms for the three risks adopt a "stratified handling" strategy, rejecting the illusion of a panacea that "solves everything simultaneously." Industry capture in the G_industry layer is handled by IETF / W3C open procedures; state capture in the G_state layer is handled by the dual backstop of G_recognition + G_oversight; and the lowest-common-denominator problem in the G_recognition layer is handled by G_oversight's GDPR / FATF strong regulation.

### § 5.4 FTLA's Relationship to Other Governance Frameworks

FTLA does not displace existing regional trust frameworks; it integrates them and provides a conceptual framework for stratified governance. The Pan-Canadian Trust Framework (PCTF),[^129] the UK Digital Identity & Attributes Trust Framework,[^130] the Sovrin Governance Framework,[^131] and the Trust Over IP Foundation framework[^132] may all be accommodated within FTLA as specific implementations of the G_industry and G_state layers. The EU eIDAS 2.0 trust framework is already a partial implementation of FTLA,[^133] incorporating three layers—G_state (member-state legislation), G_recognition (EU LoTL), and G_oversight (GDPR / EDPB)—but missing a clearly articulated industry self-governance structure at the G_industry layer.

## § 6. Sub-Domain Replication Possibilities: Four Cases and Four Boundary Conditions

### § 6.1 Why Ask About Sub-Domains

HM shows that P_DNS fails in the identity domain P_ID in the aggregate. But "the aggregate identity domain" is not a homogeneous single field. Some observers still ask: in specific sub-domains (such as civic proof, elections, and resistance movements), can the DNS model still be replicated? This question deserves serious engagement, because if the answer is affirmative, FTLA's G_industry layer would need to preserve a special position of loose autonomy for these sub-domains.

This section uses four sub-domain cases and four boundary conditions B1–B4 to assess sub-domain replication possibilities. The conclusion is stated at the outset: B1 (similarity to early community culture) is partially satisfied; B2 (the degree of state-power attention to the sub-domain), B3 (the constructibility of technical-neutrality discourse), and B4 (the existence of an institutional transition bridge) all fail. Sub-domains may retain a position of relative loose autonomy within the G_industry layer, but this cannot be extended to full-scale replication of the DNS model.

### § 6.2 Four Sub-Domain Cases

**PSE (Privacy & Scaling Explorations).** An Ethereum Foundation sub-organization operating since 2022; research directions include zk personhood, Anon Aadhaar, Semaphore, MACI, and other privacy-computing protocols.[^134] Of the four cases, its community culture is closest to the Postel jar: a preference for RFC-style open specifications, an emphasis on rough consensus, and research outputs published openly on GitHub.[^135]

**Vocdoni.** Originating in the Aragon ecosystem; an on-chain voting protocol developed in the context of the 2017 Catalan independence referendum.[^136] Technical design emphasizes censorship resistance and anonymity. Community structure is autonomous community + on-chain governance.

**Rarimo Freedom Tool.** Developed in the context of the Russia-Ukraine war; its goal is to enable Russian diaspora citizens and protest-movement participants to obtain verifiable identity.[^137] The community is highly politicized and the use context is of a crisis character.

**DIF (Decentralized Identity Foundation).** A W3C peripheral organization; DIDComm and Trust Establishment WGs are its core outputs.[^138] Membership includes large enterprises such as Microsoft, IBM, and Mastercard, with significant industry-oligopoly risk.

### § 6.3 Four Boundary Conditions

**B1 — Similarity to early community culture.** Postel-jar culture comprises three elements: the "rough consensus and running code" decision-making convention, the RFC-style open-specification propagation mechanism, and the peer-review culture of the academic community.[^139] PSE partially satisfies all three; Vocdoni, Rarimo, and DIF are more distant. Free Software cultural studies (Coleman 2013; Kelty 2008; Stallman 2002) show that the sustainability of such cultures depends on specific funding structures and community scales.[^140] B1 assessment: partially satisfied.

**B2 — Degree of state-power attention to the sub-domain.** This boundary condition fails. The Worldcoin regulatory-pushback timeline clearly marks the expiry of the assumption that "states are indifferent to sub-domains": the Spanish AEPD issued a suspension order in March 2024;[^141] Kenya's ODPC suspended Worldcoin in August 2023;[^142] Argentina's AAIP opened an investigation in May 2024;[^143] the EDPB extended the suspension in December 2024;[^144] the Hong Kong PCPD intervened in May 2024;[^145] Portugal's CNPD issued Deliberação 2024/124 in March 2024;[^146] and Brazil's ANPD suspended Worldcoin in January 2025.[^147] A single zk-personhood sub-domain protocol deployment triggered intervention by seven data-protection agencies within two years. B2 assessment: failed.

**B3 — Constructibility of technical-neutrality discourse.** Sub-domains are frequently situated in crisis-driven contexts that make it impossible to construct a technical-neutrality discourse. Vocdoni emerged in the context of the 2017 Catalan independence referendum; after the Spanish Constitutional Court ruled the referendum unconstitutional, the protocol became deeply bound to the political movement.[^148] Rarimo Freedom Tool was deployed in the context of the Russia-Ukraine war and is explicitly understood by its users as a resistance instrument.[^149] A "neutrality discourse" cannot be constructed in these contexts, because users themselves understand the tool as a political weapon. This creates a tension with the SRP of article 07: when the root (state-issued credentials) and the user (diaspora or protestors) are in explicit political opposition, the technical-neutrality discourse is negated by the use context itself.[^150] PSE and DIF fare better in this respect, but the political character of zk personhood has risen rapidly in recent years.[^151] B3 assessment: failed.

**B4 — Existence of an institutional transition bridge.** Sub-domains necessarily consume upstream state-issued credentials. Anon Aadhaar depends on UIDAI-issued Aadhaar QR codes as input;[^152] zkPassport depends on the CSCA national-signature certificates in the ICAO PKD;[^153] Vocdoni in actual referendums requires some identity root (in the Catalan case, civil population data);[^154] and Rarimo Freedom Tool still uses Russian passports as a verification root.[^155] If upstream anchor policy changes, sub-domain autonomy immediately fails. Should UIDAI change the Aadhaar QR code specification, Anon Aadhaar must follow; should ICAO PKD change the CSCA trust list, zkPassport must follow. Sub-domains have no NTIA equivalent to serve as an institutional transition bridge. B4 assessment: failed.

### § 6.4 Three-Layer Governance Corresponding to FTLA

The sub-domain observation is: B1 partially satisfied, B2–B4 all failed. Sub-domains will not "recreate the Postel jar," but they retain a position of relative autonomy. The three-layer governance model for sub-domains situates them in a sub-layer within the G_industry layer:

> **Three-Layer Governance Model** (for sub-domains)
>
> - **G_state**: National identity issuance layer (UIDAI, ICAO PKD, national passport authorities, election commissions)
> - **G_alliance**: Cross-national trust-list alliance layer (corresponding to FTLA G_recognition)
> - **G_industry**: Sub-domain industry self-governance layer (PSE / Vocdoni / Rarimo / DIF retain a position of loose autonomy in this layer)

Mapping this three-layer model onto FTLA's four layers: G_state corresponds to FTLA G_state + G_oversight; G_alliance corresponds to FTLA G_recognition; and G_industry corresponds to FTLA G_industry, with specific positions of loose autonomy preserved within it for sub-domains. Sub-domains may retain a relative position with the spirit of the Postel jar, but this cannot extend to full-scale replication of the DNS model.

Sub-domains face the risk of co-optation, a risk analytically distinct from the claim that "the whole is replicable." The situation of Worldcoin under intervention by seven data-protection agencies shows that the zk-personhood sub-domain is not naturally protected.[^156] The irreversibility of biometrics is another independent issue: the non-revocability of leaks involving iris, fingerprint, and facial data is an engineering fact that must be addressed in sub-domain and aggregate identity discussions alike.[^157] The position of loose autonomy within G_industry for sub-domains cannot conceal these risks.

In KYC, cross-border voting, and national health insurance scenarios, not even sub-domain loose autonomy is possible. KYC is directly constrained by FATF regulation;[^158] cross-border voting involves state determinations of civil membership;[^159] and national health insurance involves state social-insurance systems.[^160] The G_state and G_oversight thickness in these scenarios leaves almost no window for sub-domain autonomy in the G_industry layer.

## § 7. Policy Recommendations and Engineering Interfaces

### § 7.1 Policy Recommendations

Seven policy recommendations are derived from HM and FTLA.

First, stop treating ICANN as a template for a federated trust-list alliance. ICANN's design choice of placing governments in the advisory position conflicts directly with the high sovereignty sensitivity of P_ID and would trigger strong member-state pushback on grounds of sovereignty invasion if applied.[^161]

Second, adopt the IATA + ICAO dual-track structure as the primary structure of FTLA. Industry self-regulation (W3C / DIF / ETSI / ISO) corresponds to IATA Resolutions; state recognition (eIDAS 2.0 / Aadhaar Act / NIST SP 800-63-4 / TW DIW) corresponds to ICAO SARPs; and the two tracks operate through mutual-recognition frameworks such as EU LoTL, AAMVA, and APEC ECBA.[^162]

Third, have G_recognition adopt Basel-like soft-law flexibility but with a GDPR-like strong-regulation backstop. Soft law handles the differentiated recognition of cross-border mutual acknowledgment; hard law handles the minimum floor of privacy and consumer protection.[^163]

Fourth, G_oversight must hold formal seats. Data-protection agencies (GDPR EDPB, CNIL, PDPC), counter-terrorist financing (FATF), and consumer protection must deliberate at the same level as industry and states.[^164] The design flaw of ICANN's placement of governments in the advisory role must not be replicated in the identity domain.

Fifth, preserve a position of loose autonomy in the G_industry layer for sub-domains (PSE / Vocdoni / Rarimo / DIF / censorship-resistance movement tools). This window is not a promise of "Postel-jar recreation"; it is a specific space that can operate under the failure of boundary conditions B2–B4.[^165]

Sixth, acknowledge the uneven thickness of G_state across countries. The EU is strong; Singapore is strong; Taiwan is moderate; India is moderate; many Southeast Asian countries are weak; many African countries are weak.[^166] The design of FTLA must consider reinforcement mechanisms by which G_recognition and G_oversight can supplement weak G_state countries, preventing them from being pulled into the lowest-common-denominator trap.

Seventh, establish IATA 1979 DOJ-style antitrust oversight. The industry-capture risk at the G_industry layer (from large platforms such as Apple Wallet, Google Wallet, and Microsoft Entra Verified ID) requires sustained antitrust oversight.[^167]

### § 7.2 Engineering Interfaces

FTLA interfaces with the arguments of articles 03–07 at the engineering level.

**Interface with article 03 (digital-association-empirical-test).** The H1' three-wall argument of article 03 treats the legal possibility conditions of "digital association"; the three walls form a conjunctive structure.[^168] HM and H1' are likewise conjunctive structures, but HM addresses historically contingent necessary conditions at the governance level. When digital association requires cross-national mutual recognition, FTLA G_recognition provides a concrete governance structure; should all three of H1's walls be breached, the three-layer governance structure of G_industry + G_state + G_recognition would need to reconvene on the question of "legal recognition of cross-national digital association."

**Interface with article 04 (pseudonymous-participation-legal).** The T three-element argument of article 04 treats the legal preconditions of pseudonymous participation.[^169] HM provides the historical-sociological argument for why T's three elements cannot be supported by non-state consensus networks alone: T involves accountable pseudonymity, which under HM's P3'' (identity inherently involves sovereignty) cannot be borne purely by the G_industry layer and requires G_state and G_oversight to intervene.

**Interface with article 05 (sybil-resistance-cost-benefit).** The IT' impossibility triangle of article 05 treats the cost-benefit constraints of Sybil resistance.[^170] HM is the governance-level counterpart of IT'. IT' addresses cost-benefit tradeoffs within a single protocol; HM addresses governance-structure choices across protocols and across nations. FTLA provides the governance-level remediation counterpart to IT': compliance and mutual recognition of Sybil resistance must be jointly borne by G_recognition and G_oversight.

**Interface with article 06 (civic-burden-redistribution).** The CB-Justice D1*∧D2* of article 06 treats the normative conditions of civic burden redistribution.[^171] FTLA's G_state and G_industry correspond to the normative-category distinction in article 06 between commercial wallets and government wallets: commercial wallets (Apple, Google) sit in the G_industry layer; government wallets (EUDI Wallet, TW DIW) sit in the G_state layer; and normative overlap between the two is handled by G_oversight.

**Interface with article 07 (passport-rooted-paradox).** The SRP of article 07 treats the sovereignty-root structure of multi-rooted civic proof.[^172] HM's "sovereignty cannot be circumvented" is the reverse proof of SRP at the governance level: HM shows that P_DNS fails in the identity domain, so that when SRP is triggered, remediation must proceed through FTLA rather than ICANN. FTLA provides a concrete governance-level response to SRP: compliance for multi-rooted credentials is handled by G_recognition; the political economy of sovereignty roots is handled by G_state and G_oversight.

**Interface with the did-vc-public-blockchain article (2026-05-01).** That article addresses DID/VC deployment on public blockchains; key cases include Bhutan NDI's migration to the Ethereum mainnet, Taiwan's Digital Identity Wallet trust list deployed on a public chain, and QuarkID on ZKsync L2.[^173] Within the FTLA framework: Bhutan NDI and TW DIW are specific implementations of the G_state layer, and the public blockchain functions as message-transmission infrastructure within the G_industry layer; the state-root structure is unchanged, and the public chain substitutes for centralized message transmission rather than sovereign root trust.[^174] This distinction corresponds to the core of P3'': as identity infrastructure scales, sovereign forces flow back to the middle tier rather than being replaced by cryptographic root-trust substitution.

**Interface with article 16 (civic-ai-agent-delegation-limits).** FTLA provides the conceptual basis of "stratified handling" for civic AI agent governance.[^175] Agent delegation authority cannot be handled by a single governance tier: the G_industry layer handles agent interoperability protocols; the G_state layer handles the legal validity of agency authority; the G_recognition layer handles cross-border recognition of agency authority; and the G_oversight layer handles the consumer-protection and data-protection floor of agency authority.

## § 8. Conclusion

Situating HM, FTLA, and the sub-domain boundary conditions within the context of Chapter 11 of the doctoral thesis on trust infrastructure, the following synthesis can be offered.

DNS's escape into non-state governance was the product of historical opportunity, depending on four preconditions P_DNS = {P1 Postel-jar academic community, P2' U.S. strategic withdrawal, P3' technical-neutrality discourse as deliberate construction, P4' Stewardship Transition as a political product barely cleared through multiple veto points}. HM (Historical Mismatch hypothesis) shows that all four preconditions fail in the digital identity domain in 2025; HM shares a conjunctive structure with the H1' three-wall argument of article 03, the T three-element argument of article 04, the IT' impossibility triangle of article 05, the CB-Justice D1*∧D2* of article 06, and the SRP of article 07, though operating on historically contingent necessary conditions at the governance level. Comparison of four cross-national governance models shows that the IATA + ICAO and SWIFT + CPMI dual-track models yield the highest fitness; ICANN is not the template—the four-layer governance framework FTLA = (G_industry, G_state, G_recognition, G_oversight) is. Within specific sub-domains (PSE / Vocdoni / Rarimo / DIF), a position of loose autonomy within the G_industry layer may be preserved, but boundary conditions B2–B4 all fail, precluding extension to full-scale replication of the DNS model.

Three messages are most important for readers. First, DNS governance history must not be romanticized as "a free internet": it is a conjunctive product of multiple historical preconditions that happened to hold simultaneously between 1969 and 2016; independent failure of any single precondition would have sent the entire governance structure in a different direction. Second, ICANN is inapplicable in the identity domain: treating it as a template for a federated trust-list alliance would trigger strong member-state pushback on grounds of sovereignty invasion; the IATA + ICAO dual track and the SWIFT + CPMI cooperative structure provide more historically viable analogies. Third, FTLA's four-layer governance framework refuses the illusion of a panacea that "solves everything simultaneously"; its core advantage over the ICANN model lies in its concrete capacity for stratified handling of the three major risks of industry capture, state capture, and lowest-common-denominator.

Three open problems remain. First, how do the cross-tier coordination mechanisms of FTLA operate concretely? The deliberative procedures, priority ordering, and conflict-resolution mechanisms among G_industry / G_state / G_recognition / G_oversight require further design. Second, what are the reinforcement mechanisms for the uneven thickness of FTLA G_state across countries? The unevenness—strong in the EU, weak in many Asian countries—is a seam vulnerable to attack; how the soft-law flexibility of G_recognition and the hard-law backstop of G_oversight can fill the gap remains to be specified. Third, where do the engineering-implementation boundaries of the sub-domain G_industry loose-autonomy window lie? PSE is closest to the Postel jar but remains constrained by B2–B4; in KYC, cross-border voting, and national health insurance scenarios, even sub-domain windows do not exist, and engineering design must clearly delineate the scope within which this autonomy can operate.

These three questions cannot be fully answered within the scope of the present paper. They will be left for joint deliberation by the ICANN multistakeholder community, the W3C VC / DID working groups, ETSI / ISO standards organizations, national data-protection agencies, FATF, APEC, academia, and civil society. FTLA provides a deliberative framework, not deliberative conclusions.

## Honesty Boundaries

Four boundaries of the present paper must be explicitly stated. First, the argumentative strength of HM is capped at moderate-strong, relying on historical comparison and counterfactuals rather than controlled experiments. Second, the analogical strength of the four cross-national governance models is capped at moderate-strong; the analogies presuppose structural isomorphism but cannot guarantee identity of outcomes, and the identity domain's individual-rights politicization and cryptographic root-trust substitution are variables absent from IATA / SWIFT / Basel. Third, P3' (technical-neutrality discourse as deliberate construction) relies on interpretation of the motivations of Postel, Cerf, and others; archival evidence cannot directly establish whether "genuine belief" or "strategic packaging" is the correct characterization. Fourth, the assessment of the four boundary conditions for sub-domains is temporally contingent; regulatory pushback, crisis-driven politicization, and upstream anchor policy changes over the next five to ten years may all alter assessment results. The FTLA framework of the present paper is an engineering recommendation under 2025–2026 conditions and must be updated as historical conditions change.

## References

[^1]: Mueller, M. (2010). *Networks and States: The Global Politics of Internet Governance*. MIT Press. Source level A.

[^2]: Regulation (EU) 2024/1183 (eIDAS 2.0); AAMVA 2024 mDL Implementation Guidelines v1.4; APEC ECBA framework documentation. Source level A.

[^3]: Mueller, M. (2002). *Ruling the Root: Internet Governance and the Taming of Cyberspace*. MIT Press. Source level A.

[^4]: Pierson, P. (2004). *Politics in Time: History, Institutions, and Social Analysis*. Princeton University Press; Capoccia, G., & Kelemen, R. D. (2007). "The Study of Critical Junctures." *World Politics*, 59(3). Source level A.

[^5]: Article 03 (digital-association-empirical-test) H1' three-wall argument. Source level A (series internal).

[^6]: Article 04 (pseudonymous-participation-legal) T three-element argument. Source level A (series internal).

[^7]: Article 05 (sybil-resistance-cost-benefit) IT' impossibility-triangle argument. Source level A (series internal).

[^8]: Article 06 (civic-burden-redistribution) CB-Justice D1*∧D2* argument. Source level A (series internal).

[^9]: Article 07 (passport-rooted-paradox) SRP argument. Source level A (series internal).

[^10]: DeNardis, L. (2014). *The Global War for Internet Governance*. Yale University Press. Source level A.

[^11]: Goldsmith, J., & Wu, T. (2006). *Who Controls the Internet?: Illusions of a Borderless World*. Oxford University Press. Source level A.

[^12]: Drezner, D. (2007). *All Politics Is Global*. Princeton University Press. Source level A.

[^13]: Crocker, S. RFC 1 (1969). *Host Software*. Source level A.

[^14]: Cerf, V. (2009). *History of the Internet*; Crocker, S. (2009). "How the Internet Got Its Rules." *New York Times*, op-ed. Source level A.

[^15]: Mockapetris, P. RFC 882 / 883 (1983); RFC 1034 / 1035 (1987). Source level A.

[^16]: Postel, J. RFC 1083 / RFC 1591 (1994). Source level A.

[^17]: NSF NSFNET Backbone policy documents; Brookings Institution Internet Governance reports. Source level A/B.

[^18]: NTIA-ICANN Memorandum of Understanding (1998-11-25). Source level A.

[^19]: ICANN Bylaws + Affirmation of Commitments (AoC, 2009-09-30). Source level A.

[^20]: ICANN ATRT 1/2/3/4 report series. Source level A.

[^21]: ICANN GAC, ALAC, ccNSO, GNSO, ASO multistakeholder structure documents; Levin, R. C. (2008). *Multistakeholder Internet Governance*. Source level A.

[^22]: NTIA Stewardship Transition Documentation (2014–2016). Source level A.

[^23]: IANA Stewardship Transition Coordination Group (ICG) Proposal (2016). Source level A.

[^24]: *Texas v. United States Department of Commerce*, Civil Action No. 4:16-CV-2410 (S.D. Tex.); Hanks, G. R., U.S. District Judge, Memorandum and Order on Plaintiffs' Application for Temporary Restraining Order (2016-09-30). Source level A/C.

[^25]: ICANN IANA Stewardship Transition Completion Announcement (2016-10-01). Source level A.

[^26]: Pierson, P. (2004). *Politics in Time*. Princeton University Press, chs. 1–2. Source level A.

[^27]: Capoccia, G., & Kelemen, R. D. (2007). "The Study of Critical Junctures." *World Politics*, 59(3); Capoccia, G. (2015). "Critical Junctures and Institutional Change." *Comparative Political Studies*. Source level A.

[^28]: Postel, J. RFC 760 (1980); RFC 793 (1981) Robustness Principle; origins of the Postel-jar culture in the RFC series. Source level A.

[^29]: Coleman, G. (2013). *Coding Freedom: The Ethics and Aesthetics of Hacking*. Princeton University Press. Source level A.

[^30]: Kelty, C. (2008). *Two Bits: The Cultural Significance of Free Software*. Duke University Press. Source level A.

[^31]: Lessig, L. (2006). *Code: Version 2.0*. Basic Books. Source level A.

[^32]: ARPA / DARPA early-history archives; IETF RFC 9281 *Entities Involved in the IETF Standards Process*. Source level A/B.

[^33]: ARPA / DARPA early-history archives. Source level B.

[^34]: NSF NSFNET Backbone policy documents 1985–1995; NSFNET commercialization transition records. Source level B.

[^35]: Mueller, M. (2002). *Ruling the Root*; Mueller, M. (2010). *Networks and States*. Source level A.

[^36]: NTIA Green Paper (1998-01-30) *A Proposal to Improve Technical Management of Internet Names and Addresses*; NTIA White Paper (1998-06-05) *Management of Internet Names and Addresses*. Source level A.

[^37]: NTIA White Paper (1998-06-05). Source level A.

[^38]: Mueller, M. (2002). *Ruling the Root*, ch. 7. Source level A.

[^39]: ICANN Bylaws 2009; NTIA-ICANN MoU 1998 + Amendments; AoC 2009-09-30. Source level A.

[^40]: Goldsmith, J., & Wu, T. (2006). *Who Controls the Internet?* Oxford University Press. Source level A.

[^41]: Drezner, D. (2007). *All Politics Is Global*. Princeton University Press. Source level A.

[^42]: DeNardis, L. (2014). *The Global War for Internet Governance*. Yale University Press; DeNardis, L. (2009). *Protocol Politics*. MIT Press. Source level A.

[^43]: Postel, J. RFC 1591 (1994). *Domain Name System Structure and Delegation*. Source level A.

[^44]: Cerf, V. (2009). *History of the Internet*; Postel, J. RFC 1591 (1994) measurement of "ministerial function." Source level A.

[^45]: ICANN root key signing ceremony public records and KSK rollover documentation (2018). Source level A.

[^46]: Bygrave, L. A., & Bing, J. (Eds.). (2009). *Internet Governance: Infrastructure and Institutions*. Oxford University Press. Source level A.

[^47]: NTIA, Announcement of Intent to Transition Stewardship of IANA Functions (2014-03-14). Source level A.

[^48]: Domain Openness Through Continued Oversight Matters Act (DOTCOM Act), H.R. 4342 (2014); multiple congressional hearing records. Source level A.

[^49]: *Texas v. United States Department of Commerce*, Civil Action No. 4:16-CV-2410 (S.D. Tex.). Source level C.

[^50]: Hanks, G. R., U.S. District Judge, Memorandum and Order on Plaintiffs' Application for Temporary Restraining Order (2016-09-30). Source level C.

[^51]: Strickling, L. (NTIA Assistant Secretary), public statements 2014–2016; ICANN Stewardship Transition Implementation records. Source level A.

[^52]: ICANN ATRT 1 (2010), ATRT 2 (2013), ATRT 3 (2018), ATRT 4 (2024) report series. Source level A.

[^53]: ICG (IANA Stewardship Transition Coordination Group) Proposal (2016-03-10). Source level A.

[^54]: *Texas v. Department of Commerce* litigation; Hanks, J., Order denying temporary restraining order (2016-09-30). Source level C.

[^55]: Articles 05/06/07 causal-argument strength cap "moderate-strong"; Pierson (2004) path-dependency argumentative-strength framework. Source level A (series internal + academic literature).

[^56]: Regulation (EU) 910/2014 (eIDAS 1.0; amended by Regulation (EU) 2024/1183, i.e., eIDAS 2.0). Source level A.

[^57]: Aadhaar Act 2016 (India); UIDAI establishment documents. Source level A.

[^58]: People's Republic of China *Cybersecurity Law* (2017); *Personal Information Protection Law* (2021); *Data Security Law* (2021). Source level A.

[^59]: NIST SP 800-63 series revision history since 2004; NIST SP 800-63-3; NIST SP 800-63-4 ipd (2024). Source level A.

[^60]: W3C VC / DID working group records. Source level A.

[^61]: W3C Verifiable Credentials Data Model 2.0; W3C DID Core 1.0. Source level A.

[^62]: Regulation (EU) 2024/1183 (eIDAS 2.0); ISO/IEC 18013-5 mDL; AAMVA 2024 mDL Implementation Guidelines v1.4. Source level A.

[^63]: IETF RFC 9281, *Entities Involved in the IETF Standards Process*. Source level A.

[^64]: ITU WCIT-12 (2012) + Russia/China proposal documents; Mueller, M. (2017). *Will the Internet Fragment?* Polity. Source level A.

[^65]: Regulation (EU) 2024/1183 (eIDAS 2.0). Source level A.

[^66]: NIST SP 800-63-4 ipd (2024). Source level A.

[^67]: eIDAS 2.0 legislative history (2021–2024); European Parliament, European Commission, and Council of the EU trilogue documents. Source level A/C.

[^68]: Administrative Procedure Act, 5 U.S.C. § 553; NIST public-comment procedure. Source level A.

[^69]: *K.S. Puttaswamy v. Union of India*, (2017) 10 SCC 1; (2018) (Aadhaar judgment). Source level A.

[^70]: *Cybersecurity Law* (2017); *Personal Information Protection Law* (2021); National People's Congress legislative procedure. Source level A.

[^71]: Krasner, S. D. (1999). *Sovereignty: Organized Hypocrisy*. Princeton University Press. Source level A.

[^72]: Sassen, S. (2006). *Territory, Authority, Rights*. Princeton University Press. Source level A.

[^73]: Sassen, S. (2006). *Territory, Authority, Rights*; Sassen global-city and sovereignty research series. Source level A.

[^74]: Regulation (EU) 910/2014 (eIDAS 1.0) legislative history. Source level A.

[^75]: Regulation (EU) 2024/1183 (eIDAS 2.0) legislative history and regulatory-power expansion provisions. Source level A.

[^76]: *K.S. Puttaswamy v. Union of India* (2018) (Aadhaar curtailment judgment); continued UIDAI leadership. Source level A.

[^77]: Taiwan Ministry of Digital Affairs DIW policy documents 2024; public trust-list deployment on Ethereum mainnet documentation. Source level A/B.

[^78]: Bhutan NDI Ethereum mainnet deployment documentation (shared with did-vc-public-blockchain article). Source level A/B.

[^79]: NTIA-ICANN MoU 1998 + Amendments; IANA functions Cooperative Agreement. Source level A.

[^80]: W3C VC / DID working group records; W3C Process Document. Source level A.

[^81]: ETSI EN 319 401 V2.3.1; 411-1 V1.4.1; 411-2 V2.5.1; ISO/IEC 18013-5. Source level A.

[^82]: ICAO Doc 9303 (2021) Parts 11 + 12; ICAO PKD Annual Report 2024. Source level A/B.

[^83]: NSTIC (National Strategy for Trusted Identities in Cyberspace) 2011–2017. Source level B.

[^84]: NSTIC program evaluation reports; NIST IDESG (Identity Ecosystem Steering Group) dissolution documents. Source level B.

[^85]: eIDAS 1.0 legislative history; eIDAS 1.0 → 2.0 revision analysis. Source level A/C.

[^86]: UIDAI institutional structure; Aadhaar Act 2016. Source level A.

[^87]: NSTIC failure evaluation reports; NSTIC termination documents (2017). Source level B.

[^88]: W3C VC / DID and ETSI / ISO standards adoption—dependence on member-state uptake, historical experience. Source level A.

[^89]: ICAO PKD Annual Report 2024; ICAO PKD national-membership structure. Source level A/B.

[^90]: ICANN Bylaws + multistakeholder structure documents. Source level A.

[^91]: ICANN California 501(c)(3) registration documents. Source level A.

[^92]: ICANN GAC Operating Principles; ICANN Bylaws provision on GAC advisory role. Source level A.

[^93]: ICANN-Verisign Cooperative Agreement; root-server operators' voluntary agreements. Source level A.

[^94]: IATA Annual Reports + Resolution files; IATA 1945 founding documents. Source level A.

[^95]: ICAO Annexes + SARP documents; 1944 Chicago Convention. Source level A.

[^96]: *United States v. International Air Transport Association* (1979), DOJ antitrust investigation; IATA fare-mechanism reform. Source level A.

[^97]: SWIFT Bylaws 1973 Belgium cooperative registration documents. Source level A.

[^98]: SWIFT ISO 20022 messaging-standard specifications. Source level A.

[^99]: CPMI-IOSCO, *Principles for Financial Market Infrastructures* (2012); G10 central-bank SWIFT oversight framework. Source level A.

[^100]: SWIFT Russian-bank sanctions announcement (from March 2022 onward); Council Decision (CFSP) 2022/335. Source level A.

[^101]: Basel Committee on Banking Supervision 1974 founding documents; BIS Annual Report. Source level A.

[^102]: Basel Committee, *Basel I* (1988); *Basel II* (2004); *Basel III* (2010); *Basel IV* (Final Reforms, 2017). Source level A.

[^103]: Eilstrup-Sangiovanni, M. (2018). *International Networks*; Basel II transposition assessment after the 2008 financial crisis. Source level A.

[^104]: Analysis of conflict between ICANN's advisory-only design for governments and the high sovereignty sensitivity of the identity domain. Source level A.

[^105]: Slaughter, A.-M. (2004). *A New World Order*. Princeton University Press; Abbott, K. W., & Snidal, D. (2000). "Hard and Soft Law in International Governance." *International Organization*, 54(3). Source level A.

[^106]: Comparative analysis of W3C VC / DID + ETSI + ISO/IEC 18013-5 + AAMVA + DIF industry structure against IATA self-regulation. Source level A.

[^107]: Applicability-matrix assessment; Slaughter (2004) transgovernmental-network theory. Source level A.

[^108]: Comparative analysis of SWIFT ISO 20022 message structure and W3C VC Data Model. Source level A.

[^109]: Applicability-matrix assessment. Source level A (series internal).

[^110]: Helfer, L. R. (2008). "Nonconsensual International Lawmaking." *University of Illinois Law Review*; Basel soft-law enforcement assessment. Source level A.

[^111]: Analysis of the two-layer structure of eIDAS hard law + W3C / ETSI technical-standards soft law. Source level A.

[^112]: GDPR Regulation (EU) 2016/679 Art. 9 (sensitive data); ECHR Art. 8 (private life); *K.S. Puttaswamy v. Union of India* (2017). Source level A.

[^113]: zk personhood literature series; Andolfo et al. (2024). *zkPassport*. IACR ePrint 2024/1377; Anon Aadhaar specification (PSE 2024); Sismo whitepaper; Holonym whitepaper. Source level A.

[^114]: W3C VC Data Model 2.0; W3C DID Core 1.0; IETF OAuth/JWT/SD-JWT specifications; ISO/IEC 18013-5; ETSI EN 319 401/411 series; DIF DIDComm + Trust Establishment specs; AAMVA 2024 mDL Implementation Guidelines v1.4. Source level A.

[^115]: Taiwan Ministry of Digital Affairs DIW policy documents 2024; Ministry of Digital Affairs Organic Act. Source level A/B.

[^116]: NIST SP 800-63-4 ipd (2024) IAL/AAL/FAL designations. Source level A.

[^117]: EU LoTL (List of Trusted Lists) specifications; eIDAS 2.0 trust-list mechanism. Source level A.

[^118]: AAMVA 2024 mDL Implementation Guidelines v1.4. Source level A.

[^119]: APEC ECBA framework documentation; APEC Cross-Border Privacy Enforcement Arrangement. Source level A/B.

[^120]: APEC Cross-Border Privacy Rules System (CBPRs) + Privacy Recognition for Processors (PRP). Source level A.

[^121]: GDPR Regulation (EU) 2016/679; FATF Recommendations; FATF Travel Rule (Recommendations 15/16). Source level A.

[^122]: *United States v. International Air Transport Association* (1979), DOJ antitrust investigation; IATA 1979 reform. Source level A.

[^123]: Apple Wallet, Google Wallet, Microsoft Entra Verified ID membership in W3C / DIF working groups; analysis of large-platform influence on standards development. Source level A/B.

[^124]: W3C Process Document; IETF RFC 9281; ETSI / ISO multi-member voting procedure; AAMVA state-level representative structure. Source level A.

[^125]: People's Republic of China *Cybersecurity Law* (2017); *Personal Information Protection Law* (2021); analysis of China's integration of identity infrastructure with national security framework. Source level A.

[^126]: Assessment of EU member states with declining judicial independence; European Commission Rule of Law procedure documents concerning Poland / Hungary. Source level A/B.

[^127]: World Bank ID4D 2024 national identity-infrastructure assessment; current unevenness between strong EU and weak multi-country Asia. Source level A/B.

[^128]: Basel III national transposition consistency assessments; records of Basel II transposition inconsistency following the 2008 financial crisis. Source level A.

[^129]: Pan-Canadian Trust Framework (PCTF). Source level A/B.

[^130]: UK Digital Identity & Attributes Trust Framework (2024 version). Source level A.

[^131]: Sovrin Governance Framework; Sovrin Foundation early white papers. Source level A/B.

[^132]: Trust Over IP Foundation framework; ToIP Stack documentation. Source level A/B.

[^133]: Regulation (EU) 2024/1183 (eIDAS 2.0); integrated analysis of EU LoTL + GDPR + EDPB structure. Source level A.

[^134]: PSE (Privacy & Scaling Explorations) public GitHub + academic papers; PSE research directions 2022–2025. Source level B.

[^135]: PSE Semaphore / MACI / Anon Aadhaar specification documents; PSE open governance structure. Source level B.

[^136]: Vocdoni technical retrospective on the 2017 Catalan referendum (shared with articles 04–07). Source level B.

[^137]: Rarimo Freedom Tool technical documents (shared with article 07). Source level B.

[^138]: DIF DIDComm + Trust Establishment specs (shared with article 07); DIF membership structure documents. Source level A/B.

[^139]: Postel, J. RFC 1591 (1994) + RFC 920 (1984); IETF "rough consensus and running code" conventions. Source level A.

[^140]: Coleman, G. (2013). *Coding Freedom*; Kelty, C. (2008). *Two Bits*; Stallman, R. (2002). *Free Software, Free Society*. GNU Press. Source level A.

[^141]: AEPD (Spain) (2024-03). Worldcoin suspension order. Source level A.

[^142]: Office of the Data Protection Commissioner (Kenya) (2023-08). Worldcoin suspension. Source level A.

[^143]: AAIP (Argentina) (2024-05). Worldcoin investigation. Source level A.

[^144]: EDPB (2024-12). Extended Worldcoin suspension. Source level A.

[^145]: PCPD (Hong Kong) (2024-05). Worldcoin intervention. Source level A.

[^146]: CNPD (Portugal) (2024-03). Worldcoin Deliberação 2024/124. Source level A.

[^147]: ANPD (Brazil) (2025-01). Worldcoin suspension. Source level A.

[^148]: Vocdoni technical retrospective on the 2017 Catalan referendum; *Sentencia del Tribunal Constitucional* STC 122/2017 (unconstitutionality ruling). Source level A/B.

[^149]: Rarimo Freedom Tool technical documents + deployment retrospective; Russia-Ukraine war contextual analysis. Source level B/C.

[^150]: Article 07 SRP argument (Sovereignty-Rooted Paradox); analysis of political opposition between root and user. Source level A (series internal).

[^151]: Buterin, V. (2023). "What do I think about biometric proof of personhood?" Vitalik blog. https://vitalik.eth.limo/general/2023/07/24/biometric.html; Hill, K. (2023). *Your Face Belongs to Us*. Random House. Source level A.

[^152]: Anon Aadhaar specification (PSE 2024); UIDAI Aadhaar QR code specifications. Source level A.

[^153]: Andolfo et al. (2024). *zkPassport*. IACR ePrint 2024/1377; ICAO PKD CSCA trust-list structure. Source level A.

[^154]: Vocdoni technical retrospective on the 2017 Catalan referendum; analysis of Catalan civil population-data provenance. Source level B.

[^155]: Rarimo Freedom Tool technical documents; Russian-passport verification-root structure. Source level B/C.

[^156]: Worldcoin regulatory-pushback timeline (integrating footnotes 141–147). Source level A.

[^157]: Hill, K. (2023). *Your Face Belongs to Us*; technical assessment of biometric irreversibility; Privacy International 2024 report. Source level A/B.

[^158]: FATF Recommendations; FATF Travel Rule. Source level A.

[^159]: Legal analysis of civil-membership determination in cross-border voting; international voting-rights research. Source level A.

[^160]: Analysis of identity infrastructure integration with national social-insurance systems in national health insurance; OECD Health Data Governance 2024. Source level A/B.

[^161]: Analysis of ICANN GAC advisory-design deficiency and its conflict with sovereignty sensitivity in the identity domain (corresponding to footnote 104). Source level A.

[^162]: Analysis of the three-layer mutual-recognition structure of EU LoTL + AAMVA mDL + APEC ECBA. Source level A.

[^163]: Abbott & Snidal (2000) hard/soft-law framework; GDPR backstop mechanism design. Source level A.

[^164]: GDPR EDPB; FATF; CNIL; PDPC; ICO; regulatory-role documents of respective DPAs. Source level A.

[^165]: Sub-domain G_industry loose-autonomy window boundary conditions B1–B4 assessment (corresponding to § 6). Source level A (series internal).

[^166]: World Bank ID4D 2024; comparative assessment of G_state thickness across countries. Source level A/B.

[^167]: EU Digital Markets Act (2022); U.S. House Antitrust Subcommittee Report on Digital Markets (2020); extension of the IATA 1979 DOJ case to identity platform analysis. Source level A.

[^168]: Article 03 (digital-association-empirical-test) H1' three-wall argument (corresponding to footnote 5). Source level A (series internal).

[^169]: Article 04 (pseudonymous-participation-legal) T three-element argument (corresponding to footnote 6). Source level A (series internal).

[^170]: Article 05 (sybil-resistance-cost-benefit) IT' impossibility-triangle argument (corresponding to footnote 7). Source level A (series internal).

[^171]: Article 06 (civic-burden-redistribution) CB-Justice D1*∧D2* argument (corresponding to footnote 8). Source level A (series internal).

[^172]: Article 07 (passport-rooted-paradox) SRP argument (corresponding to footnote 9). Source level A (series internal).

[^173]: did-vc-public-blockchain article (2026-05-01); Bhutan NDI; TW DIW; QuarkID ZKsync L2 cases. Source level A/B.

[^174]: Analysis of the distinction between public blockchain as message-transmission infrastructure vs. sovereignty root; W3C DID public-blockchain method assessment. Source level A.

[^175]: Article 16 (civic-ai-agent-delegation-limits); analysis of FTLA stratified handling as an interface for civic AI agent governance. Source level A (series internal).
