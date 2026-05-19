---
title: "The Redistribution of Civic Burden: A Distributive Justice Analysis of Who Bears the Democratic Costs of Digital Wallets"
description: "Civic burden is formalized as the CB-Justice dual criterion (D1* Rawls difference principle ∧ D2* Anderson relational equality). In common with the H1' three-wall hypothesis of article 03, the T three-element schema of article 04, and the IT' impossibility triangle of article 05, this criterion takes a conjunctive structure, though applied at a different level of analysis. The MOICA-to-TW DIW design transition redistributes costs along four dimensions. Without supplementary conditions, an estimated 3.2–4.8 million persons in Taiwan are substantively excluded (13.7–20.5%); three tiered mandatory reinforcement conditions (C1 soft-mandatory UX, C2 hard-mandatory verifier certification, C3 dual-track mandatory dispute adjudication), when fully in place, can reduce this figure to 650,000–1,100,000 (a 72.5–83.8% reduction). Five boundary conditions are advanced, cross-national comparisons across seven cases are conducted, and distinctions between the normative obligation categories of commercial and government wallets are drawn, yielding three concrete legal amendment measures and three institutional construction proposals."
pubDate: 2026-05-05
tags: ["civic-proof", "civic-burden", "digital-wallet", "TW-DIW", "MOICA", "Rawls", "Anderson", "distributive-justice", "doctoral-research", "Ch6-Taiwan"]
category: "Civic Proof and Distributive Justice"
aiModel: "Claude Opus 4.7"
aiPrompt: "In the transition from issuer-centric (MOICA) to holder-centric (TW DIW), which costs (comprehension, authorization, verification, appeal, accountability) are transferred from which party to which party? Do these cost transfers satisfy distributive justice? In particular, with respect to the elderly, persons with low digital literacy, persons without smartphones, and mobile populations? Which costs can be absorbed through technical design (auto-defaults / wallet UX / regulatory defaults), and which must be compensated through institutional reinforcement (consumer protection law, verifier certification, appeal bodies)? Should commercial wallet vendors and government wallets bear different cost-bearing obligations?"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-05-05-civic-burden-redistribution"
aiGeneratedDate: 2026-05-05
humanReviewed: false
lang: "en"
slug: "2026-05-05-civic-burden-redistribution"
---

## § 1. Introduction: What Must Be Thought After the Wallet Goes Live

The question taken up in the present analysis concerns what democratic constitutionalism is owed when a digital identity system redesigns the distribution of civic costs. Taiwan's mobile identity credential system (TW Digital Identity Wallet, TW DIW) entered a pilot phase in 2024, with nationwide availability targeted for 2027.[^1] From the IC-card-based Ministry of the Interior Certificate Authority (MOICA) established in the late 1990s,[^2] to the TW DIW whose core infrastructure rests on smartphones and Trusted Execution Environments (TEE / Secure Enclave), Taiwan's digital identity infrastructure is undergoing a paradigm transition in design. This transition is an international trend, already expressed in Regulation (EU) 2024/1183 (eIDAS 2.0),[^3] NIST SP 800-63-4 ipd,[^4] the W3C Verifiable Credentials Data Model 2.0,[^5] and ISO/IEC 18013-5 mDL,[^6] and is generally characterized as a shift from issuer-centric to holder-centric. The centralized storage, trust distribution, and dispute-handling responsibilities previously borne by the credential issuer are partially transferred to the wallet controlled by the credential holder, with downstream implications extending to verifier integration and compliance.[^7]

In normative discourse, this design transition is typically introduced under three promises: autonomy, minimal disclosure, and composability.[^8] These promises carry strong normative legitimacy. The present analysis acknowledges that legitimacy while pursuing a more concrete distributive justice question: when a democratic society relocates onto the individual the costs (comprehension, authorization, verification, appeal, accountability) that accompany "possessing and using a lawful proof of identity," on whom do those costs land? Does the relocation satisfy distributive justice? This question bears with particular force on the elderly, persons with low digital literacy, persons without smartphones, and mobile populations (migrant workers, new residents, persons experiencing homelessness, displaced persons): do they have the capacity to absorb the burdens being transferred downward?

The core proposition of the present analysis is as follows. Holder-centric design has strong normative legitimacy (autonomy, minimal disclosure, composability); without corresponding rights-based supplementary conditions, it will systematically transfer democratic costs onto the most vulnerable users. Civic burden is redistributed along four dimensions: comprehension burden (toward the holder), verification access burden (toward the verifier), trust judgment burden (toward both the holder and the verifier), and dispute accountability attribution (toward an indeterminate party). Without safety-by-default UX, a default verifier certification regime, and a unified dispute adjudication body, holder-centric design amounts in practice to the transfer of democratic costs from institutions to individuals.

This proposition, together with three other articles in this series, constitutes a conjunctive necessary-condition analytical framework. Article 03 (digital-association-empirical-test) addresses the engineering structural conditions of freedom of association through the three-wall hypothesis H1';[^9] article 04 (pseudonymous-participation-legal) addresses the legal institutional conditions of "pseudonymity plus ex post accountability" through the T three-element schema (Trigger / Authority / Remedy);[^10] article 05 (sybil-resistance-cost-benefit) addresses the engineering tension ceiling of sybil resistance through the IT' impossibility triangle.[^11] In this series, the present analysis bears the position of normative precondition, advancing the CB-Justice dual criterion D1* ∧ D2*, which requires that the basic primary goods and democratic citizenship of the most vulnerable persons not be stripped away. CB-Justice shares conjunctive structure with the H1' three walls, the T three-element schema, and the IT' impossibility triangle; it is applied at a different level.

The argument proceeds as follows. Section 2 disaggregates four-dimensional civic burden into 7 operational indicators and uses a MOICA/TW DIW comparison to exhibit how costs are redistributed, while also arguing that issuer-centric and holder-centric designs constitute a responsibility-distribution spectrum rather than a binary opposition. Section 3 elevates this observation into the formalized CB-Justice dual criterion (D1* ∧ D2*) and treats the normative claim's limitations by absorbing the Hayek-Sowell counter-argument and issuing a necessary-but-not-sufficient declaration. Section 4 advances three tiered mandatory reinforcement conditions (C1 soft-mandatory UX / C2 hard-mandatory verifier certification / C3 dual-track mandatory dispute adjudication) plus C4 as a political choice, and disaggregates elder-friendly defaults into three layers — cognitive, sensory, and operational — with specific citation of WCAG 2.2 provisions. Section 5 uses a three-threshold framework (A device / B digital literacy / C cognitive and physical) to quantify the population excluded by TW DIW deployment without supplementary conditions as 3.2–4.8 million (13.7–20.5%), and shows by way of counterfactual scenario D (paper-based track + client services + legal delegation, all three supplementary conditions in place) that the reduction can reach 72.5–83.8%. Section 6 introduces seven cross-national cases (Nordic BankID, Estonia, Singapore, India Aadhaar, France FranceConnect, U.S. Login.gov, South Korea 모바일 신분증) and derives five boundary conditions (B1 normative obligation category difference between commercial and government wallets / B2 civic education investment / B3 KYC linkage pathways / B4 multi-dimensional intersection of the digital divide / B5 legal status of alternative pathways). Section 7 advances corresponding legal amendment, institutional design, and educational investment policy recommendations, and addresses the articulation with articles 04 and 05 and prompts 11 and 15. Section 8 concludes from the shared conjunctive-structure perspective of the three series articles.

## § 2. Four-Dimensional Civic Burden Redistribution

### § 2.1 The Spectrum Argument: Issuer-Centric and Holder-Centric Are Not Binary Opposites

Framing issuer-centric and holder-centric as binary opposites distorts policy judgment. The reality is a responsibility-distribution spectrum.[^12] Under MOICA, the private key is issued by the Ministry of the Interior Certificate Authority, but the private key object is still held by the cardholder within the IC card;[^13] under TW DIW, the private key is controlled by the holder in the phone's Secure Enclave, but the trust list remains legally authorized by the public sector and anchored on a public blockchain.[^14] Under the EU EUDI framework, wallet providers are subject to mandatory regulation under Regulation (EU) 2024/1183 Article 5a, bearing obligations approaching those of regulated entities;[^15] NIST SP 800-63-4 ipd takes a neutral stance using SHOULD rather than MUST;[^16] Apple Wallet's Terms of Service § 8 adopts an as-is, no-warranty market-contract structure.[^17] A single holder-centric label covers four distinct institutional arrangements with differing obligation bases.

This spectrum argument has two direct implications. First, the unit of comparative analysis should be refined to the level of "in which dimension, how much was transferred, and who absorbs the released obligation"; simply asking "whether there has been a shift toward holder-centric" misses the critical variable. Second, the empirical case for the normative superiority of holder-centric design is weak. Singapore's SingPass plus Myinfo is a highly issuer-centric design, yet achieves 97% coverage and high user experience satisfaction,[^18] which constitutes a counter-example to the thesis that holder-centric design is necessarily superior. The fact that NIST SP 800-63-4 ipd uses SHOULD rather than MUST with respect to the subscriber-controlled wallet model reflects the drafters' cautious stance on normative superiority.[^19]

### § 2.2 Four Dimensions, Seven Operational Indicators

Disaggregating civic burden from four dimensions into seven operational indicators facilitates quantitative comparison and policy design.[^20]

**(1) Comprehension burden: cross-platform portable learning.** Under MOICA, citizens need only learn a single card-reader-plus-household-registration-counter workflow; under TW DIW, citizens must learn wallet UX, the concept of trust lists, selective disclosure controls, and revocation-and-recovery workflows. A publicly released briefing from the National Development Council (2024) shows that the onboarding failure rate among users aged 65 and above during the TW DIW Q4 pilot phase reached 22%.[^21] The ENISA 2024 mDL Trust Framework Report, Chapter 4, notes that the median onboarding time for the 65+ group is 4.2 times that of the 18–44 reference group.[^22]

**(2) Revocation and recovery.** Under MOICA, loss or misappropriation is handled through a 24-hour invalidation mechanism plus reissuance at a household registration office; under TW DIW, the holder initiates revocation within the wallet app and the trust list is synchronized accordingly, but if the phone is damaged or lost, the recovery pathway depends on a backup mechanism (health insurance card plus mobile phone dual factor, or re-attendance at a counter). Revocation and recovery is initiated by the holder rather than the issuer; the holder must have the capacity to judge "when revocation is warranted."

**(3) Verification access: verifier integration compliance burden.** Under MOICA, verifiers obtain a SAM card through a contract, with unified certification by the Ministry of the Interior; under TW DIW, verifiers integrate via OpenID4VP / OpenID4VCI,[^23] and currently there is no mandatory verifier certification. The EU EUDI ARF (2025-12 Cooperation Group iteration; cited with v1.4.1 / 2024-12 as the stable snapshot), Chapter 5, estimates the relying party integration cost at €30,000–€120,000;[^24] this constitutes a significant entry threshold for small and medium-sized verifiers in the Taiwanese context (such as local government one-stop service counters, small medical clinics, and community pharmacies).

**(4) Trust judgment: holder assessment of verifier legitimacy.** Under MOICA, citizens need not judge whether a verifier is lawful; under TW DIW, the holder must, before disclosing identity attributes, judge whether the verifier appears on the trust list and whether the request conforms to the principle of minimum necessary purpose. For persons with low digital literacy, this constitutes a burden bordering on the impossible.

**(5) Third-party accountability gap.** The EU EUDI framework, under Regulation (EU) 2024/1183 Article 5a, imposes fiduciary-like obligations on wallet providers;[^25] in Taiwan's TW DIW legislation in progress, the allocation of responsibility between wallet providers and verifiers has not yet been made explicit. Apple Wallet's Terms of Service § 8 adopts an as-is, no-warranty approach,[^26] leaving accountability gaps to be borne by the holder.

**(6) Cross-border fallback.** MOICA does not support cross-border interoperability; TW DIW, while supporting the W3C VC 2.0 plus ISO/IEC 18013-5 mDL specifications,[^27] is still in draft stages with respect to cross-border trust anchoring and trust list interoperability, and holders in cross-border contexts must independently determine their fallback pathway.

**(7) Failure-mode manual remedy.** Under MOICA, household registration offices plus ministerial supervisory bodies provide clear manual remedy channels; under TW DIW, when the wallet malfunctions, the verifier refuses, and appeal channels are unavailable, citizens' manual remedy channels are distributed across the Consumer Protection Commission, the Personal Data Protection Commission, and the Ministry of Digital Affairs, with no dedicated receiving body.

### § 2.3 MOICA / TW DIW Comparative Table

Mapping the seven operational indicators onto a concrete MOICA / TW DIW comparison (Table 1) reveals which obligations in which dimensions this design transition has released and who absorbs them.

**Table 1: Cost Comparison of MOICA / TW DIW Across Four Dimensions**

| Dimension | MOICA (issuer-centric) | TW DIW (responsibility-distributed) |
|---|---|---|
| Comprehension burden | Centralized education + household registration counter | Wallet UX + individual self-learning (pilot 65+ failure rate: 22%) |
| Onboarding pathway | Household registration counter pickup + card reader | Natural person certificate + health insurance card + mobile phone dual factor |
| Private key custody | Cardholder IC card | TEE / Secure Enclave |
| Revocation | 24h invalidation + household registration counter | Wallet app initiation + trust list synchronization |
| Verifier access | Contract + SAM card | OpenID4VP + trust list anchored on public blockchain |
| Verifier certification | Unified by Ministry of the Interior | Open (currently no mandatory verifier certification) |
| Trust list | Tree-structured PKI (GRCA → MOICA) | Legally authorized by Ministry of Digital Affairs + public blockchain anchoring |
| Trust judgment | Citizens need not judge | Holder must assess verifier legitimacy |
| Dispute reception | Ministry of the Interior + supervisory body | No dedicated body (Consumer Protection Commission / PDPC / Ministry of Digital Affairs — ambiguous) |
| Coverage rate | Natural person certificate approx. 8 million cards (1/3 of registered population) | Pilot phase (2024–2026), nationwide availability targeted for 2027 |

### § 2.4 Systemic Amplification of Three-Axis Inequality

Cost transfer in real-world conditions is not symmetric.[^28] When comprehension burden shifts from centralized education to wallet UX, the population capable of absorbing this burden is composed of users who already have smartphones, possess digital literacy, and fall in the middle portion of the age spectrum; those who cannot absorb it are populations with higher age, lower smartphone penetration, and lower digital literacy. Taiwan's smartphone penetration rate is 73.4% for those aged 60 and above, 56.1% for those aged 70 and above, and 31.2% for those aged 80 and above;[^29] the Ministry of Education's 2023 Survey on Adult Digital Opportunities and Competence shows administrative app operation capability of 51.8% for those aged 60–69 and 22.4% for those aged 70 and above.[^30] These three dimensions — age, digital literacy, and device availability — intersect in the same population. The design transition redistributes costs downward, but the distribution is not even; the share landing on those at the lowest intersection of all three axes is far greater than that landing elsewhere.

This observation of three-axis inequality connects with the engineering structural analysis of article 03 (H1' — the conditions under which engineering design defects close the anonymous space of civic organizing)[^31] and the engineering tension analysis of article 05 (IT' — the proof that sybil resistance cannot simultaneously maximize all three objectives).[^32] The present analysis bears the position of normative precondition: when both engineering structures and engineering tensions cannot guarantee the absence of harm to the most vulnerable, an external normative criterion is required to translate these observations into actionable policy conditions.

## § 3. Normative Precondition: The CB-Justice Dual Criterion D1* ∧ D2*

### § 3.1 From Intuitive Proposition to Formalized Criterion

The intuitive proposition ("design transitions should not make the most vulnerable more vulnerable") is easily absorbed into a slogan in policy debate and diluted by claims of insufficient evidential strength. Formalizing it as a conjunctive criterion is intended to ensure that the basis for judgment in subsequent sections can be examined item by item, refuted, and corrected.[^33]

The CB-Justice proposition takes the following form.

> **CB-Justice (final form)**
> Let S denote the design transition, t₀ the prior state, t₁ the posterior stable state (including supplementary conditions), and G_w the group of most vulnerable persons.
>
> **D1* (Rawls difference principle, lexicographic version):** S satisfies D1* iff
> (i) S does not violate the first principle (basic liberties);
> (ii) S does not violate the fair equality of opportunity principle (FEO);
> (iii) the long-term expected basic primary goods (including the social bases of self-respect) of G_w under S are no lower than at t₀.
>
> **D2* (Anderson relational equality, democratic citizenship version):** S satisfies D2* iff
> (i) S does not produce structural oppression among any group;
> (ii) S does not strip any group of their common civic standing;
> (iii) S does not erode the standing of equal participation in social interaction for any group.
>
> **CB-Justice conjunctive criterion:** S is normatively acceptable *only if* D1* ∧ D2* hold. This criterion is a *necessary but not sufficient* condition.

D1* adopts the lexicographic two-principle structure of Rawls (1971)[^34] and operationalizes "the least-advantaged" as the group holding the fewest basic primary goods (Rawls 1971 § 16; Rawls 2001 § 17),[^35] bringing the social bases of self-respect within the coverage of the difference principle (Rawls 1971 § 67).[^36] D2* adopts Anderson's (1999) three-dimensional operationalization of relational equality — no structural oppression / no stripping of common civic standing / no erosion of the standing of equal participation[^37] — and invokes Anderson's (1999) critique of luck egalitarianism as grounds for the irreducibility of D2* to D1*.[^38]

G_w is operationalized in the present context as the following intersectional groups: the elderly (65+), persons with low digital literacy, persons without smartphones, mobile populations (migrant workers, new residents, persons experiencing homelessness, displaced persons), persons with disabilities (visual / auditory / motor / cognitive / linguistic), low-income households, and indigenous peoples.[^39] The identification of G_w will vary across different policy contexts; this is precisely where the Hayek-Sowell counter-argument must be absorbed (see § 3.3).

### § 3.2 Shared Conjunctive Structure with Articles 03, 04, and 05

CB-Justice shares conjunctive structure with article 03's H1' three walls,[^40] article 04's T three-element schema,[^41] and article 05's IT' impossibility triangle,[^42] differing only in the level at which each is applied.

Article 03's H1' is a conjunctive necessary condition at the engineering structural level (the absence of any one wall makes the real realization of freedom of association impossible); article 04's T is a conjunctive necessary condition at the legal institutional level (the absence of any one element makes the dual promise of "pseudonymity plus ex post accountability" unsupportable); article 05's IT' is an unreachable maximum at the engineering tension level (all three of sybil resistance, privacy, and auditability cannot be simultaneously maximized); the present analysis's CB-Justice is a conjunctive necessary condition at the normative precondition level (the absence of either D1* or D2* is insufficient for the design transition to be normatively acceptable).

The four conjunctive structures are structurally isomorphic in analytical terms, but the character of the work each bears differs. Articles 03 and 04 address failure modes in engineering and law; article 05 addresses the frontier shape of engineering trade-offs; the present analysis's CB-Justice addresses the form of criteria for normative acceptability. Linking the four articles together is intended to ensure that the intuitive proposition of "protecting the most vulnerable" has a concrete, examinable form at each level of analysis.

### § 3.3 Necessary But Not Sufficient; Absorbing the Hayek-Sowell Counter-Argument

D1* ∧ D2* constitute necessary but not sufficient conditions. Even when the dual criterion is simultaneously satisfied, failure may still occur at the following levels.

First, the knowledge-dispersion counter-argument of Hayek (1945 / 1960 / 1973–1979)[^43] combined with Sowell's (1980) analysis of the localization of knowledge[^44] raises two limitations on the operationalization of CB-Justice. First, the identification of G_w is itself subject to an information problem. A centrally planned operationalization list for G_w may omit vulnerable groups that can only be identified through local knowledge (such as the particular circumstances of a specific religious community or linguistic group in a specific locality). Second, centrally designed supplementary pathways may crowd out alternatives; when a government wallet mandates a single track, community-organized paper-based and verbal assistance networks may atrophy as institutional resources are absorbed.

These two limitations must be absorbed into the operational version of CB-Justice. Two modifications are available. First, the operationalization of G_w must be made dynamic, adjusted through data updates, local appeals, and the sample of decisions from dispute adjudication bodies. Second, D1*-(iii) is supplemented with a "preserve fallback" requirement; the requirement that the long-term expected basic primary goods of G_w be no lower than at t₀ entails that fallback pathways must persist as a permanent obligation, not a transitional arrangement.[^45]

Second, the limitations of the Hayek-Sowell counter-argument must also be noted, to prevent the counter-argument from being misread as a wholesale refutation of CB-Justice. First, the counter-argument is directed primarily at centrally planned distribution (central planning) and has no direct force against "a normative criterion as a limiting condition on policy design." Second, the counter-argument assumes that markets will naturally produce outcomes in which G_w is not harmed — an assumption that has been empirically refuted by financial exclusion, healthcare exclusion, and analogous phenomena; markets in the domain of identity proof have historically been a force for exclusion rather than inclusion.[^46] Third, knowledge-localization in fact supports maintaining baselines in parallel; precisely because the center cannot exhaust G_w, the obligation to maintain baselines (paper-based, counter-based, manual) in parallel should be made more stringent.[^47]

Third, CB-Justice may still fail along the dimensions of Sen's capability approach, Fraser's recognition justice, and intergenerational justice.[^48] Sen's capability approach emphasizes "effective freedom" rather than merely the distribution of basic primary goods; Fraser's recognition justice emphasizes identity politics rather than merely redistribution; intergenerational justice requires that design choices made now not leave subsequent generations with path dependencies that are difficult to reverse. These three dimensions are not developed within the present analysis; they are recorded as agenda items for subsequent research and serve as concrete instances of the "necessary but not sufficient" character of D1* ∧ D2*.

### § 3.4 Item-by-Item Examination of the Dual Criterion Across Four Dimensions

Applying D1* ∧ D2* to the four-dimensional civic burden of § 2 reveals that the design transition without supplementary conditions has violation items in each dimension (Table 2).[^49]

**Table 2: Item-by-Item Examination of the CB-Justice Dual Criterion Across Four Dimensions of Civic Burden**

| Dimension | From whom to whom | D1* examination | D2* examination |
|---|---|---|---|
| Comprehension burden | issuer → holder | Violates D1*-iii (basic primary goods + social bases of self-respect degraded) | Violates D2*-iii (standing of equal participation in social interaction eroded) |
| Verification access burden | issuer → verifier | Indirect impact on G_w | Violates D2*-i (structural marginalization) |
| Trust judgment burden | issuer → holder + verifier | Violates D1*-iii (information and protection degraded) | Violates D2*-i (structural oppression) |
| Dispute accountability attribution | Indeterminate (potentially → holder) | Violates D1*-iii (appeal capacity insufficient to absorb losses) | Violates D2*-ii (common civic standing stripped) |

No violation in any cell is irremediable — this is precisely the juncture at which supplementary conditions are introduced. Section 4 discusses how supplementary conditions can neutralize the violation items in each cell.

## § 4. Supplementary Conditions: Three Tiered Mandatory Conditions Plus C4 as Political Choice

### § 4.1 From "Three Conditions in Place" to "Tiered Mandatory"

The intuitive proposition tends to frame supplementary conditions as "three conditions in place." Upon surveying the literature, it becomes apparent that the legal force of these three conditions is not uniform; treating them as equivalent in force will distort policy design. The revised version disaggregates the supplementary conditions into three tiers of mandatory requirement: C1 is soft-mandatory (relying on normative nudges plus standardized design codes), C2 is hard-mandatory under EU eIDAS 2.0 (enforced through certification by a conformity assessment body), and C3 falls within the dual-track mandatory framework under Taiwan's Consumer Protection Act, Personal Data Protection Act, Administrative Appeals Act, and Administrative Litigation Act.[^50] The logic of each tier of mandatory requirement differs, as do the corresponding legal instruments.

This tiering is necessary but not sufficient. Having all three conditions in place simultaneously still does not guarantee that the design transition is normatively acceptable. C4 (the political choice of a single gateway) is addressed as a key variable in cross-national comparison in § 6, but because it involves sovereign choice and the path dependency of governance history, C4 is not incorporated into the core three conditions of the abductive argument. Drawing C4 into the core would lead the argument into the erroneous inference that "the absence of a single gateway necessarily produces failure"; Estonia's and the Nordic BankID's single gateway is a historical contingency, not a normative necessary condition.

### § 4.2 C1 — Safety-by-Default UX (Soft-Mandatory)

The normative basis of C1 is the mandatory character of GDPR Article 25(2) on data protection by design and by default,[^51] combined with the seven foundational principles of Cavoukian's (2009) *Privacy by Design*.[^52] Sunstein (2014), *Why Nudge?*, Chapter 2, observes that default rules cannot be neutral; the only question is which direction the nudge favors;[^53] Madrian and Shea (2001), in their empirical study of 401(k) plans, demonstrate that low-income groups have the highest rate of inheriting defaults.[^54] If the default disclosure is set to "maximum" rather than "minimum," G_w will be the principal casualties.

At the engineering level, W3C VC Data Model 2.0,[^55] ISO/IEC 18013-5 mDL,[^56] BBS+ signatures, and SD-JWT all support selective disclosure. The availability of an option is not equivalent to a default; which option the wallet UX designates as the "default button" is a policy choice by the designer.[^57] Hartzog (2018), *Privacy's Blueprint*, characterizes this layer as "design-as-law": the legal status of UX defaults should be treated as analogous to legal rules.[^58]

Elder-friendly defaults within this framework require disaggregation into three layers, with specific citation of the corresponding provisions of W3C WCAG 2.2 (2023-10 Recommendation).[^59]

**(a) Cognitive defaults.** Default disclosure adopts the minimum-necessary principle; a large-font confirmation screen is provided before disclosure; a voice summary plus optional read-aloud is provided before disclosure.[^60] This layer addresses the most direct burden on G_w: "I looked at it and did not know what I was signing."

**(b) Sensory defaults.** WCAG 2.2 SC 1.4.3 requires a text-to-background contrast ratio of at least 4.5:1; SC 1.4.4 requires that text be enlargeable to 200%; SC 1.4.10 requires that reflow at a width of 320 CSS pixels produce no horizontal scrolling.[^61] The WHO's (2019) *World Report on Vision* estimates that approximately 30% of persons aged 65 and above have moderate or greater visual impairment.[^62] If wallet UX fails to satisfy these three success criteria, persons with visual impairment are effectively excluded from independent use.

**(c) Operational defaults.** WCAG 2.2 SC 2.5.7 requires that dragging movements not be the sole method of interaction; SC 2.5.8 requires that interactive elements have a target size of at least 24×24 CSS pixels.[^63] Carmeli, Patish, and Coleman's (2003) research on fine motor skills among older adults demonstrates a significant decline in finger-operation precision among those aged 70 and above.[^64] This layer addresses the design choice — seemingly trivial but constituting a decisive barrier for G_w — that the user's finger cannot accurately reach the button.

Two ways of incorporating C1 into law are available. First, a wallet UX standard at the level of administrative order (analogous to the GDS *Service Manual* in the United Kingdom).[^65] Second, a universal design mandatory provision at the level of a dedicated digital equity statute. Taiwan's existing Disability Rights Protection Act, Article 52, already provides a partial foundation for universal design; the dedicated digital equity statute being drafted by the Ministry of Digital Affairs should expressly incorporate the corresponding provisions of WCAG 2.2 and Section 508.[^66]

### § 4.3 C2 — Verifier Certification Regime (Hard-Mandatory)

In the EU, C2 has shifted from a soft recommendation to a hard-mandatory requirement. Regulation (EU) 2024/1183 (eIDAS 2.0) amends Regulation (EU) 910/2014 (eIDAS 1.0): Article 5a imposes mandatory requirements on wallet functions, and Article 6a imposes registration requirements on relying parties (i.e., verifiers).[^67] This is the key breakthrough from eIDAS 1.0 to 2.0 — bringing verifiers within the scope of obligated parties. At the EU level, ETSI EN 319 401 (General Policy Requirements for Trust Service Providers),[^68] EN 319 411-1,[^69] EN 319 411-2,[^70] and TS 119 471/472 (under development since 2024) constitute the technical standards chain for verifier certification; ISO/IEC 27701:2019 PIMS[^71] and ISO/IEC 29115:2013 LoA 1–4[^72] provide cross-domain certification supplements. Under this system, verifiers cannot freely choose whether to verify user compliance; conformity assessment bodies enforce the audit trail.

The mandatory character of C2 is graduated. Germany's BSI and France's ANSSI adopt graduated mandatory requirements within the EU framework;[^73] Nordic BankID constitutes natural mandatory force under factual monopoly.[^74] In the Taiwanese context, if TW DIW deployment adopts the EU model (amending the Electronic Signatures Act or enacting a Digital Identity Act with a verifier certification body), C2 will be hard-mandatory; if the NIST model is adopted (SHOULD rather than MUST), C2 will revert to soft-mandatory and leave the trust judgment burden with the holder and the market.

The side effects of C2 must be noted. Whitelist mechanisms carry a countervailing risk: who decides who may be listed? Hartzog's (2018) design-as-law warning applies here: certification regimes may themselves become instruments of exclusion.[^75] For small and medium-sized verifiers (community pharmacies, small medical clinics, local government one-stop service counters), integration costs of €30,000–€120,000[^76] constitute a significant entry threshold. Policy design must strike a balance between "verifier obligations" and "verifier entry barriers"; the recommended pathway is tiered certification (by verifier scale and data sensitivity) plus public-sector subsidies for integration costs.

### § 4.4 C3 — Unified Dispute Adjudication Body (Dual-Track Mandatory)

In the Taiwanese context, C3 falls within the existing dual-track remedy system. Commercial wallets follow the private-law track under the Consumer Protection Act, Personal Data Protection Act, and Civil Code; government wallets follow the public-law track under the Administrative Appeals Act, Administrative Litigation Act, and State Compensation Act.

The Consumer Protection Act (enacted 1994, amended 2015), Articles 43–47, establishes a three-stage framework of complaint → mediation → class action;[^77] the Personal Data Protection Act (2010, amended 2023), Articles 28–31, establishes statutory compensation of NT$500 to NT$20,000 per person per incident.[^78] Neither statute was designed for wallet scenarios, but Solove and Hartzog's (2014) analysis of accumulated FTC case law[^79] suggests that overlaying existing consumer protection and personal data jurisprudence is more feasible than enacting new dedicated legislation; the cost of new dedicated legislation is a long legislative timeline and the absence of stable scholarly consensus on wallet disputes.

The EU ADR Directive 2013/11[^80] plus the Council of Europe Convention 108+[^81] offer another cross-domain ADR pathway. Directive 2013/11 extends the coverage of alternative dispute resolution to all consumer contracts and requires member states to designate competent ADR bodies. Sweden's ARN (Allmänna reklamationsnämnden) operates under this framework.[^82] Should Taiwan wish to establish a corresponding body, three construction pathways are available: first, a memorandum of understanding (MOU) among the existing Consumer Protection Commission, Personal Data Protection Commission, and Ministry of Digital Affairs; second, a legislatively established digital identity dispute mediation committee; third, extending wallet disputes to the existing Financial Consumer Evaluation Center (the Financial Consumer Protection Act, Article 13, provides a precedent).

ENISA's 2024 mDL Trust Framework Report formulates the three-party responsibility allocation with greater precision:[^83] the issuer bears responsibility for the authenticity of the credential content; the wallet bears responsibility for the security of storage and presentation; the verifier bears responsibility for the lawfulness of the verification act and its conformity with purpose. The respective shares borne by these three parties vary across different dispute types; C3 bodies must be equipped to draw the relevant distinctions.

Concrete recommendations for incorporating C3 into policy: (1) amend the Administrative Procedure Act to add a dedicated provision specifying the tier of the receiving body for digital identity disputes; (2) amend the Personal Data Protection Act to add a provision expressly stating that "refusal to consent to digital identity verification may not serve as grounds for denial of service"; (3) the Ministry of Digital Affairs, the Consumer Protection Commission, and the Personal Data Protection Commission enter an MOU specifying case-allocation standards.

### § 4.5 Consumer Protection Law Must Not Be Equated with Regulatory Suppression

Characterizing consumer protection law as "regulatory suppression" distorts policy debate.[^84] The design objective of consumer protection law is to correct information asymmetry and bargaining-power disparities; both conditions are satisfied to a high degree in wallet scenarios. In ordinary consumer contracts, the option of "not purchasing" constitutes an exit option; in wallet scenarios, when a wallet becomes the de facto prerequisite for accessing public services, exit is not a viable option. Understanding consumer protection law as a friendly constraint on vendors — one from which vendors also benefit through stable legal expectations — rather than as a regulatory barrier impeding innovation, is more faithful to the legislative intent of Taiwan's Consumer Protection Act of 1994.[^85]

Equally, ignoring the existing consumer protection framework and routing all disputes to a "future dedicated statute to be enacted" would leave a 3–5 year legal vacuum once TW DIW goes live. During this vacuum, citizens in G_w would have no effective avenue for dispute remedy; the degree of violation of D2*-ii (common civic standing stripped) would be far greater than under imperfect application of the existing framework.

## § 5. Quantifying Exclusion: Three-Threshold Analysis for Taiwan

### § 5.1 Operationalizing the Three Thresholds

Quantifying "the population excluded by TW DIW deployment without supplementary conditions" as an interval requires disaggregating exclusion into estimable layers. The present analysis adopts a three-threshold design (Table 3),[^86] with operational definitions as follows.

**Layer A — Device threshold:** persons without smartphones; or persons with smartphones but without NFC capability; or persons whose devices have been determined not to meet the minimum wallet requirements (e.g., an outdated operating system version).

**Layer B — Digital literacy threshold:** persons with devices who are unable to independently complete the five-step wallet onboarding process (download the app, complete KYC, configure biometrics, set a PIN, load the first credential).

**Layer C — Cognitive and physical threshold:** visual / auditory / fine-motor / cognitive / language barriers such that, even where device access and literacy are adequate, wallet operation cannot be completed.

**Table 3: Three-Threshold Mutually Non-Overlapping Estimates**

| Layer | Median estimate | Range | Operational definition |
|---|---|---|---|
| A Device threshold | 3.40 million | 2.90–4.00 million | No smartphone + no NFC phone |
| B Digital literacy threshold | 1.65 million | 1.00–2.20 million | Unable to independently complete the 5-step wallet onboarding |
| C Cognitive and physical threshold | 0.95 million | 0.60–1.40 million | Visual / auditory / motor / cognitive / language barriers |
| Total (strict summation) | 6.00 million | 4.50–7.60 million | Non-overlapping |
| **Conservative reported (median)** | **4.00 million** | **3.20–4.80 million** | Overlap-adjusted |

### § 5.2 Quantitative Estimates Across Three Scenarios

Layer A calculation basis: the NCC's 2023 Survey of Communications Market Conditions and Communications Use Behavior shows a smartphone penetration rate of 87.5% among those aged 12 and above;[^87] age-stratified data show 73.4% for those aged 60–69, 56.1% for those aged 70–79, and 31.2% for those aged 80 and above;[^88] GfK 2023 / Counterpoint 2024 shows smartphone NFC penetration at 75%.[^89] Cross-calculating these three items yields a Layer A median of 3.40 million, range 2.90–4.00 million.

Layer B calculation basis: the Ministry of Education's 2023 Survey on Adult Digital Opportunities and Competence shows administrative app operation capability of 51.8% for those aged 60–69 and 22.4% for those aged 70 and above;[^90] the National Development Council's 2022 Digital Opportunities Survey shows PIN-setting capability of 47.6% for those aged 60 and above.[^91] Setting "ability to independently complete all five steps" as the threshold yields a Layer B median of 1.65 million, range 1.00–2.20 million.

Layer C calculation basis: the Ministry of Health and Welfare's 2021 Survey of the Living Conditions of Persons with Disabilities shows 1.21 million holders of disability certificates;[^92] the Taiwan Alzheimer Disease Association's 2023 estimate puts the dementia population at 350,000, with 220,000 in moderate-to-severe stages;[^93] the Ministry of Labor's 2024 migrant worker statistics show 750,000 migrant workers, and the National Immigration Agency's 2024 new resident statistics show 580,000 new residents.[^94] Setting "at least one barrier among visual / auditory / motor / cognitive / language at disability grade" as the threshold yields a Layer C median of 950,000, range 600,000–1,400,000.

Strict summation of the three layers yields 6.00 million (4.50–7.60 million); adjusting for inter-layer overlap (where the same person triggers multiple layers), the conservatively reported figure is a median of 4.00 million (3.20–4.80 million), representing 17.1% of Taiwan's total population (13.7–20.5%).[^95] The Ministry of the Interior's Household Registration Office monthly population statistics report for March 2025 shows a population aged 65 and above of 17.0%,[^96] a figure close to the midpoint of the present estimate; this proportion supports the plausibility of the exclusion population estimate.

### § 5.3 Limitations of the Quantitative Estimates

Quantitative estimates and precise predictions differ in character. The present estimate provides an interval distribution rather than a point prediction. The operational definitions of the three thresholds will be calibrated by user experiments after TW DIW actually goes live; the 65+ failure rate of 22% is drawn from publicly released National Development Council (2024) briefing materials,[^97] but age-stratified, geographically stratified, and language-stratified detailed failure rate data are not currently publicly available — this is a core item on the agenda for subsequent research.

Exclusion and natural attrition also differ in character. Characterizing 3.2–4.8 million persons as "a minority unable to keep up with the times" is a mistaken policy interpretation. Khera's (2017) research on India's Aadhaar PDS[^98] demonstrates that exclusion is a consequence of design choices and inadequate institutional supplementation, not a natural distribution. Anderson's (1999) relational equality argument[^99] points to the same conclusion: the stripping of common civic standing is a design choice, not a linear consequence of individual capability.

### § 5.4 Counterfactual Scenario D: All Three Supplementary Conditions in Place

If all three supplementary conditions are in place, to what level can the excluded population be reduced? The present analysis designs three counterfactual scenarios (A: permanent paper-based track; B: client services plus remote assistance; C: legal delegation pathway) and combines them as Scenario D (Table 4).[^100]

**Table 4: Residual Exclusion Estimates Under Counterfactual Scenarios**

| Counterfactual | Design | Residual exclusion (10,000s) | Share of total population | Reduction |
|---|---|---|---|---|
| Baseline (no supplementary conditions) | All three supplementary conditions absent | 400 | 17.1% | 0% |
| A — Paper-based track permanent | Mandatory permanent parallel paper-based track | 50–80 | 2.1–3.4% | 80–87.5% |
| B — Client services + remote assistance | 24/7 multilingual client services + video + community sites | 190 | 8.1% | 52.5% |
| C — Legal delegation pathway | Written authorization by family / caregiver / social worker + audit log | 190 | 8.1% | 52.5% |
| **D — All three combined** | A + B + C simultaneously in place | **65–110** | **2.8–4.7%** | **72.5–83.8%** |

The residual excluded population under Counterfactual D is distributed as follows:[^101] severely cognitively impaired persons with no family available for delegation and not in institutional care — solitary elderly: 250,000–400,000; remote areas with no community sites, no accessible client services, and no family capable of assistance: 150,000–250,000; new residents and migrant workers in regulatory grey areas: 200,000–300,000; those who distrust the pilot and decline to use it: 100,000–150,000.

The policy implication of this interval is: when all three supplementary conditions are in place, exclusion can be reduced from 17.1% to 2.8–4.7%, a reduction of 72.5–83.8%. The residual 650,000–1,100,000 is still a significant figure, requiring more granular individual case rescue design (such as the digital identity navigator system to be discussed in § 7). Having all three supplementary conditions in place is not a sufficient condition; this figure also supports the "necessary but not sufficient" declaration of D1* ∧ D2*.

### § 5.5 Cross-National Comparisons Supporting the Quantitative Estimate Interval

Cross-national data support the plausibility of the 3.2–4.8 million interval.[^102] Denmark's MitID, with mandatory provision of three alternative channels (including an audio code reader hardware alternative), achieves 96.8% coverage,[^103] equivalent to exclusion below 3.2%; France's FranceConnect adopted full digitization first and supplementary paper pathways later, with 38% exclusion among those aged 65 and above;[^104] India's Aadhaar, mandating a single track with no alternative, shows PDS exclusion concentrated in rural poor regions of Jharkhand and Rajasthan at 8–12%, with documented deaths from hunger;[^105] U.S. low-income household mobile phone sharing is at 27%,[^106] invalidating the holder-centric "one person, one phone" assumption; Estonia's e-ID plus Smart-ID dual-track achieves below 2% exclusion.[^107] The spectrum formed by data from these five countries (below 2% to 38%) covers the present estimate interval, supporting the plausibility of the 13.7–20.5% median exclusion figure.

## § 6. Seven Cross-National Cases and Five Boundary Conditions

### § 6.1 The Success/Failure Spectrum Across Seven Cases

Arranging cross-national cases along a success/failure spectrum reveals that the fate of holder-centric design depends on the completeness of supplementary conditions and other historical variables, not the design paradigm itself (Table 5).[^108]

**Table 5: Cross-National Seven-Case Comparison Matrix**

| Country | Model | Coverage rate | 65+ usage rate | Exclusion share | C1 UX | C2 verifier | C3 dispute | C4 gateway |
|---|---|---|---|---|---|---|---|---|
| Sweden BankID | holder-centric + banking sector | 99% | 80%+ | < 1% | Strong | Strong | Strong (ARN) | Factual monopoly |
| Estonia X-Road | holder-centric + government | 99% | 90%+ | < 2% | Strong | Strong | Strong (Data Inspector) | Unified |
| Singapore SingPass | high-efficiency issuer-centric | 97% | 85%+ | < 3% | Strong | Strong | Medium | Unified |
| India Aadhaar + DigiLocker | hybrid | Aadhaar 100% / DigiLocker 10% | Low | 8–12% (PDS) | Weak | Weak | Weak | Forced |
| France FranceConnect | issuer-centric fragmented | 74% | 50% | 26% | Weak | Weak | Weak (47 days) | Multiple gateways |
| U.S. Login.gov | issuer-centric fragmented | < 27% | Low | High | Medium | Weak | Weak | Multiple gateways |
| South Korea 모바일 신분증 | holder-centric | 18% | Low | High | Medium | Medium | Medium | Medium |

**Success A — Nordic BankID (Sweden / Norway / Finland).** Coverage rate 96%+; usage rate among those aged 65 and above exceeds 80%.[^109] Sweden's Finansinspektionen 2024 supervisory annual report and Pensionsmyndigheten's 2023 *Tillgänglighet och digital inkludering* demonstrate that this coverage rate is not a natural advantage; it rests on four special conditions: widespread adoption of internet banking in the 1990s (5–10 years of civic education investment);[^110] the banking sector as the de facto KYC starting point (with the drawback of exclusion of those without bank accounts);[^111] 60 years of accumulated case experience at the ARN consumer complaints committee;[^112] high population homogeneity and a culture of administrative transparency.[^113] Norsk Regnesentral's (2021) *Digital Identity in the Nordics* warns that these four conditions do not necessarily obtain when transplanted to other countries.[^114]

**Success B — Estonia X-Road plus Smart-ID.** 99% of citizens hold e-ID; 70% use it daily; X-Road queries leave an auditable trace.[^115] The 1996 *Tiigrihüpe* program provided five years of foundational education investment;[^116] the 2007 Russian network attacks produced a leap in cybersecurity awareness;[^117] the 2017 ROCA vulnerability (CVE-2017-15361) demonstrated that even with all three conditions in place, failures in the underlying cryptographic supply chain can compromise C1/C2/C3 simultaneously.[^118] The ROCA case is a concrete instance of the "three conditions necessary but not sufficient" principle.

**Partial success C — Singapore SingPass plus Myinfo.** High-efficiency issuer-centric design with 97% coverage.[^119] SingPass adopts a government unified gateway, real-name binding, and mandatory verifier certification; Myinfo provides selective disclosure while retaining a central trust list. This constitutes a counter-example to the thesis that holder-centric design is necessarily superior.[^120] The Singapore case also illustrates that under particular conditions (strong administrative capacity, high institutional trust, small country scale), issuer-centric design can produce outcomes that are more user-friendly.

**Partial failure D — India Aadhaar plus DigiLocker.** Alongside 1.38 billion Aadhaar enrollments, PDS (Public Distribution System) exclusion runs at 8–12%.[^121] Khera's (2017) research in *EPW* on rural poor regions of Jharkhand and Rajasthan[^122] shows high biometric verification failure rates in weak-network environments, among persons with worn fingerprints, and among elderly groups; Drèze, Khalid, Khera, and Somanchi (2017 / 2020) in *EPW* document deaths from hunger.[^123] The (2018) *Justice K.S. Puttaswamy v. Union of India* judgment partially acknowledged gaps in exclusion-error remedy.[^124] Aadhaar is the paradigm case of the counter-model: forced single track with no alternative. DigiLocker, built on this foundation, has an adoption rate of approximately 10%, low relative to Aadhaar.

**Failure E — France FranceConnect.** 26% of citizens have not activated the system; exclusion of those aged 65 and above reaches 38%.[^125] Characterizing FranceConnect as an across-the-board failure would distort policy debate — for the middle class, FranceConnect provides an efficient single sign-on experience and achieves part of the dématérialisation objective.[^126] The precise description of the failure is "distributive failure": costs are transferred to the most vulnerable while the middle class enjoys the benefits. The *Défenseur des Droits* 2022 report, *Dématérialisation et inégalités d'accès aux services publics*, states this distributive failure most clearly.[^127] The *Cour des Comptes* 2022 public report lists the fragmentation of appeal channels and an average processing time of 47 days as structural problems.[^128]

**Failure F — U.S. Login.gov.** Coverage rate below 27%; the IRS's adoption of the commercial vendor ID.me triggered controversy over facial recognition discrimination.[^129] Brewster (2022) in *Forbes* reports disproportionately high facial recognition failure rates for Black women;[^130] GAO's 2024 *Digital Identity: Login.gov Implementation Audit* (GAO-24-105663) lists multiple governance failures.[^131] The U.S. case is a multiple-gateway failure under issuer-centric fragmentation, not a counter-example to holder-centric design.

**Emerging G — South Korea 모바일 신분증.** 6 million mobile driver's license activations; usage records are logged but the actual consultation rate is below 5%.[^132] KISA's 2024 모바일 신분증 정책 보고서 shows coverage still low (18%);[^133] Lee and Park's (2024) *Journal of Korean Law* 24(1) analysis of the KISA logging mechanism[^134] provides legal observations on an emerging case. The South Korean case demonstrates that holder-centric design is not a unidirectional technological trend; it is affected by governance history and institutional trust conditions.

### § 6.2 Five Boundary Conditions

Distilling the observations from the seven cases into five boundary conditions is intended to enable policy design to transcend the particularity of individual cases.

**B1 — Commercial wallet and government wallet obligations should differ in normative obligation category.** The difference between commercial and government wallets is a difference in normative obligation category, not merely degree.[^135] The obligation basis for commercial wallets is contract plus consumer protection law plus personal data protection law plus fair trade law; remedy channels are arbitration, the Consumer Protection Commission, and collective arbitration; government wallets' obligation basis is rule of law plus public service plus State Compensation Act; remedy channels are administrative appeal, administrative litigation, and state compensation (Table 6). Treating the two as the same normative category (for example, reducing government wallet obligations to "the same as commercial wallets") violates the principle of rule of law; equalizing the strength of obligations for both (for example, requiring commercial wallets to bear a universal service obligation) violates freedom of contract and market incentive utilization.

**Table 6: Obligation Differences Between Commercial Wallets and Government Wallets**

| Dimension | Commercial wallet | Government wallet |
|---|---|---|
| Obligation basis | Contract + consumer protection + personal data protection | Rule of law + public service + state responsibility |
| Legal nature | EULA private law contract | Public law relationship |
| Design obligation | User experience + data minimization + transparent disclosure | Universality + equal access + alternative pathway guarantee |
| Regulatory body | NCC + Fair Trade Commission + PDPC | PDPC + Control Yuan + administrative courts |
| Appeal channels | Consumer dispute mediation + Consumer Protection Commission + arbitration | Administrative appeal + administrative litigation + state compensation |
| Typical remedy | Damages litigation / ICC arbitration | State compensation / revocation of disposition |

Commercial wallet vendor market incentives can be leveraged through policy.[^136] Apple Wallet and Google Wallet terms of service[^137] indicate that market wallet providers are willing to bear "limited storage responsibility" in exchange for ecosystem entry; government can use certification regimes, labeling regimes, and procurement regimes to convert this market incentive into a public policy lever. Characterizing commercial wallet vendors purely as regulatory subjects misses this lever.

**B2 — Civic education investment determines the absorbability of the comprehension burden.** Sweden's widespread adoption of internet banking in the 1990s was completed 5–10 years before BankID;[^138] Estonia's 1996 *Tiigrihüpe* program was completed 7 years before e-ID;[^139] France's dématérialisation was driven primarily by administrative cost savings, with insufficient civic education investment — a structural cause of FranceConnect's failure;[^140] U.S. Login.gov had no corresponding education investment and achieved low adoption rates.[^141] Recommendation for Taiwan: initiate a nationwide digital identity literacy education program 2 years before TW DIW's 2027 nationwide availability (i.e., starting in 2025), and set "ability to independently complete the five-step wallet onboarding" as the basic national digital literacy standard.[^142] UNESCO's (2023) *Adult Digital Skills* provides international reference indicators.[^143]

**B3 — Linkage pathways between existing real-name / KYC systems and holder-centric design.** KYC starting points vary substantially across countries.[^144] Nordic BankID uses the banking sector as its starting point (drawback: exclusion of those without bank accounts); Taiwan's MOICA natural person certificate serves as the starting point; Estonia uses e-ID plus Smart-ID on a dual track (recommended for Taiwan's reference); Singapore's SingPass replaces existing real-name channels (not suitable for Taiwan's diverse identity culture). The recommended pathway is MOICA as root credential and TW DIW as mobile extension: when a holder loses their phone, MOICA can still serve as a backup credential; when the holder upgrades to TW DIW, MOICA automatically synchronizes without requiring re-KYC.

**B4 — The digital divide is a multi-dimensional intersection of generation × geography × income × education.** Nordic usage rates among those aged 65 and above exceeding 80% reflect the generational cohort that saw widespread internet banking adoption in the 1990s; France's 38% exclusion rate among those aged 65 and above, with the rural + 65+ + low-education intersection reaching 70% exclusion;[^145] India's PDS exclusion concentrated in rural poor regions of Jharkhand and Rajasthan;[^146] the U.S. ID.me showing disproportionately high facial recognition failure rates for Black women, with algorithmic bias and digital divide intersecting.[^147] In the Taiwanese context, the multi-dimensional intersection of the digital divide points to the remote areas + 65+ + low-education + low-income household group as the highest-exclusion-risk cluster. Policy recommendations include a minimum exclusion rate commitment (95% activation rate within 5 years) + a digital identity navigator system + proactive outreach (home visits). Van Dijk's (2020) *The Digital Divide* theoretical framework for multi-dimensional intersections[^148] supports this policy design.

**B5 — The legal status of alternative pathways must be expressly guaranteed by legislation.** Sweden's *Förvaltningslagen*, as amended in 2017, Article 6, preserves the right to apply in writing;[^149] Estonia's *Avaliku teabe seadus* requires a written application option;[^150] France had still not enacted corresponding legislation as of 2024 — a structural cause of FranceConnect's failure;[^151] India's Khera (2017) advocates exclusion-by-design protections and manual override.[^152] Recommendation for Taiwan: amend the Administrative Procedure Act to add a dedicated provision — "citizens have the right to choose alternative channels including paper-based, counter-based, telephone, and delegation" — plus amend the Personal Data Protection Act to add a provision: "refusal to consent to digital identity verification may not serve as grounds for denial of service." Without express statutory guarantee, alternative pathways will in practice be progressively tightened by pressure to reduce administrative costs; Denmark's MitID mandatory audio code reader hardware alternative[^153] is the concrete positive illustration of the legal status of alternative pathways: when the law expressly guarantees them, both the hardware and the process are simultaneously configured.

## § 7. Policy Recommendations: From Normative Precondition to Institutional Practice

### § 7.1 Three Legal Amendment Measures

Writing the three supplementary conditions of § 4 into Taiwan's legal system requires three amendment measures.

**First measure: Add a dedicated provision to the Administrative Procedure Act (C3 + B5).** The recommended direction for the provision is: "Citizens have the right to choose alternative channels including paper-based, counter-based, telephone, and delegation to handle administrative matters; administrative bodies may not use the availability of digital identity verification options as grounds for restricting the availability of alternative channels." This provision addresses the gap in the legal status of alternative pathways identified in B5, and legally codifies the three supplementary pathways (A: paper-based, B: client services, C: delegation) of Counterfactual D in § 5.4.

**Second measure: Add provisions to the Personal Data Protection Act (C2 + C3).** The recommended direction for the provisions is: "Refusal to consent to digital identity verification may not serve as grounds for denial of service"; and: "Before collecting identity attributes, verifiers shall provide a minimum-necessary alternative verification method." These provisions address the downstream obligations of the C2 verifier certification regime (conformity of the verification act with purpose),[^154] and reinforce the legal basis for C3 dispute adjudication.

**Third measure: Dedicated digital equity statute (C1 + B4).** The recommended direction for the provisions is: expressly incorporate WCAG 2.2 SC 1.4.3 / 1.4.4 / 1.4.10 / 2.5.7 / 2.5.8;[^155] mandate universal design for all government wallet UX; set a minimum exclusion rate ceiling (95% activation rate within 5 years); and legally codify the digital identity navigator system. These provisions address the gap in legal instruments for C1 soft-mandatory UX, and expressly codify the specific policy instruments for the multi-dimensional intersection of the digital divide identified in B4.

### § 7.2 Three Institutional Construction Proposals

**Dispute adjudication body.** Among the three construction pathways in § 4.4, the recommended pathway is a combination of pathway one and pathway three: in the short term, the Consumer Protection Commission, the Personal Data Protection Commission, and the Ministry of Digital Affairs enter an MOU specifying case-allocation standards; in the medium term, wallet disputes are overlaid onto the existing Financial Consumer Evaluation Center, drawing on its 10 years of accumulated ADR experience. In the long term, whether dedicated legislation establishing a digital identity dispute mediation committee is required can be re-evaluated.[^156]

**Verifier certification body.** The recommended approach is to draw on the EU eIDAS 2.0 conformity assessment body model, with the Ministry of Digital Affairs or the preparatory office of the Personal Data Protection Commission establishing a verifier certification body; certification adopts a tiered regime (by verifier scale plus data sensitivity); integration subsidies are provided for small and medium-sized verifiers (corresponding to the €30,000–€120,000 cost figure).[^157]

**Digital identity navigator system.** The recommended approach is to draw on the UK GDS *Assisted Digital Strategy*[^158] and the *Digitaliseringsstyrelsen* (Denmark) 2023 *MitID Alternative Channels Evaluation Report*,[^159] deploying digital identity navigators across all 25 counties and municipalities to provide onboarding assistance, dispute reception, and alternative pathway guidance; designating community sites (libraries, activity centers, health centers) as navigator workstations; and writing the legal status of navigators into the dedicated digital equity statute. Pensionsmyndigheten's 2023 *Tillgänglighet och digital inkludering* provides a concrete model from the Swedish Pensions Agency's digital inclusion navigator system.[^160]

### § 7.3 Two Educational Investment Windows

The arrangement of two windows is equally important.

**Five-year civic education investment.** The recommendation is for the Ministry of Education and the Ministry of Digital Affairs to jointly lead the effort, incorporating "basic digital identity literacy" into the 12-year national education and lifelong learning curricula; expanding the survey items of the Survey on Adult Digital Opportunities and Competence[^161] to include the five-step wallet onboarding process; designating community colleges, senior learning centers, and new resident family service centers as primary deployment sites.

**Two-year intensive onboarding period.** In the two years before TW DIW's nationwide availability in 2027 (i.e., 2025–2027), the recommendation is for the Ministry of Digital Affairs to lead with the Ministry of the Interior co-organizing, using home-visit methodology to provide onboarding assistance to the high-risk cluster (remote areas + 65+ + low-education + low-income households); publishing age-stratified, geographically stratified, and language-stratified failure rate data; establishing an audit log for onboarding assistance, subject to oversight by the Control Yuan.

### § 7.4 Articulation with Articles 04 and 05 and Prompts 11 and 15

The policy recommendations of the present analysis and other articles in this series are mutually supporting at the following articulation points.[^162]

**With article 04 (pseudonymous-participation-legal).** Article 04's T three-element schema (Trigger / Authority / Remedy) addresses the legal institutional conditions of "pseudonymity plus ex post accountability"; the present analysis's CB-Justice is the normative counterpart of the T three-element schema — T addresses the legal institutional level conditions, CB-Justice addresses the normative precondition for the holder-centric design transition. The two share conjunctive structure but bear work at different levels. Specific articulation: article 04's R (Remedy) corresponds to the present analysis's C3 (dispute adjudication body), with R and C3 falling within the same dual-track remedy system in the Taiwanese context; article 04's A (Authority) corresponds to the present analysis's C2 (verifier certification body), with both requiring obligated parties certified by a conformity assessment body.

**With article 05 (sybil-resistance-cost-benefit).** Article 05's IT' impossibility triangle addresses the ceiling of engineering tension in sybil resistance (sybil resistance, privacy, and auditability cannot all be simultaneously maximized); the present analysis's CB-Justice addresses the normative precondition (the basic primary goods and democratic citizenship of the most vulnerable must not be stripped away). IT' and CB-Justice both have conjunctive structure but are applied at different levels. Specific articulation: the "medium-strong causal argument" ceiling of article 05's SA-3 / SA-4 is consistent with the "quantification is not prediction" position of the present analysis's SA-4; article 05's "sybil resistance cannot be simultaneously maximized" is consistent with the present analysis's position that "the normative superiority of holder-centric design is not an engineering fact."

**With prompt 11 (wallet-as-essential-facility).** Prompt 11 establishes the engineering obligation basis for treating wallet as essential facility; the present analysis's § 4.2 C1 safety-by-default UX provides a concrete normative basis (the corresponding WCAG 2.2 success criteria) for the universal design mandatory provisions of essential facility; § 6.2 B1's normative obligation category difference between commercial and government wallets provides the argument for obligation classification for essential facility.

**With prompt 15 (civic-proof-inclusion-rights).** Prompt 15 treats inclusion rights as the core of civic proof; the present analysis's § 5 quantitative estimates (median exclusion of 3.2–4.8 million) plus § 6.2 B4's multi-dimensional intersection of the digital divide provide a quantitative basis for inclusion rights; § 7.3's educational investment and home visits provide the concrete policy instruments for inclusion rights.

## § 8. Conclusion

From MOICA to TW DIW, from issuer-centric to holder-centric, democratic costs are redistributed along four dimensions. The CB-Justice dual criterion composed of the Rawls difference principle plus Anderson relational equality shares conjunctive structure with article 03's H1' three walls, article 04's T three-element schema, and article 05's IT' impossibility triangle, but is applied at a different level; CB-Justice is the normative precondition for holder-centric design transition, requiring that the basic primary goods and democratic citizenship of the most vulnerable not be stripped away. The three tiered mandatory reinforcement conditions (C1 soft-mandatory UX, C2 hard-mandatory verifier certification, C3 dual-track mandatory dispute adjudication) must be simultaneously in place; Taiwan's quantitative estimates show a median of 3.2–4.8 million persons substantively excluded without supplementary conditions, reducible to 650,000–1,100,000 when all three supplementary conditions are in place — a reduction of 72.5–83.8%. The normative superiority of holder-centric design is not an engineering fact; for the promises of autonomy, minimal disclosure, and composability to be genuinely realized, the supplementary conditions must come first, and the legal status of the three alternative pathways — paper-based, client services, and delegation — must be expressly guaranteed by legislation.

## References

[^1]: Ministry of Digital Affairs, *Mobile Natural Person Certificate (TW DIW) Pilot Program Description* (2024). Source level C.

[^2]: Ministry of the Interior Certificate Authority, *Certificate Practice Statement*. Source level C.

[^3]: Regulation (EU) 2024/1183 (eIDAS 2.0). OJ L 2024/1183. Source level A.

[^4]: NIST SP 800-63-4 ipd (2024-08). Source level A.

[^5]: W3C Verifiable Credentials Data Model 2.0 (2024-05 Recommendation). Source level A.

[^6]: ISO/IEC 18013-5:2021 mDL. Source level A.

[^7]: Allen, C. (2016). *The Path to Self-Sovereign Identity*. Source level A.

[^8]: Cameron, K. (2005). *The Laws of Identity*. Microsoft White Paper. Source level A.

[^9]: Corresponds to the H1' three-wall hypothesis in article 03 (digital-association-empirical-test) of this series.

[^10]: Corresponds to the T three-element schema (Trigger / Authority / Remedy) in article 04 (pseudonymous-participation-legal) of this series.

[^11]: Corresponds to the IT' impossibility triangle in article 05 (sybil-resistance-cost-benefit) of this series.

[^12]: SA-1 boundary line 1: issuer-centric / holder-centric is a responsibility-distribution spectrum.

[^13]: Ministry of the Interior Certificate Authority, *Certificate Practice Statement*. Source level C.

[^14]: Ministry of Digital Affairs, *Mobile Natural Person Certificate (TW DIW) Pilot Program Description* (2024); TW DIW trust list anchored on public blockchain — technical details (chain ID / contract address / DID method) pending official public documentation. Source level C.

[^15]: Regulation (EU) 2024/1183, Article 5a. Source level A.

[^16]: NIST SP 800-63-4 ipd (2024-08). Source level A.

[^17]: Apple Wallet Terms of Service § 8. Source level C.

[^18]: GovTech Singapore 2024; World Bank ID4D 2024, *Identification for Development Global Dataset*. Source level A.

[^19]: NIST SP 800-63-4 ipd (2024-08), § 4.3 Subscriber-Controlled Wallets. Source level A.

[^20]: SA-1 boundary line 2: four dimensions disaggregated into 7 operational indicators.

[^21]: National Development Council 2024 public briefing; Ministry of Digital Affairs, *Mobile Natural Person Certificate (TW DIW) Pilot Program Description* (2024). Source level C.

[^22]: ENISA (2024). *Mobile eID and mDL Trust Framework Report*, Chapter 4. Source level A.

[^23]: OpenID4VCI / OpenID4VP Specifications. Source level A.

[^24]: EU EUDI Wallet ARF, 2025-12 Cooperation Group iteration (historical snapshot v1.4.1, 2024-12), Chapter 5. Source level B.

[^25]: Regulation (EU) 2024/1183, Article 5a. Source level A.

[^26]: Apple Wallet Terms of Service § 8. Source level C.

[^27]: W3C VC Data Model 2.0; ISO/IEC 18013-5:2021 mDL; AAMVA 2024 mDL Implementation Guidelines v1.4. Source level A.

[^28]: SA-1 boundary line 3: cost transfer systematically amplifies three-axis inequality.

[^29]: NCC (2023). *Survey of Communications Market Conditions and Communications Use Behavior*. Source level A.

[^30]: Ministry of Education (2023). *Survey on Adult Digital Opportunities and Competence*. Source level A.

[^31]: Corresponds to the SA structural and engineering structural analysis in article 03 of this series.

[^32]: Corresponds to the IT' impossibility triangle analysis in article 05 of this series.

[^33]: SA-2 boundary line A: normative claims are not necessity claims.

[^34]: Rawls, J. (1971). *A Theory of Justice*, §§ 11 and 46. Source level A.

[^35]: Rawls, J. (1971). *A Theory of Justice*, § 16; Rawls, J. (2001). *Justice as Fairness: A Restatement*, § 17. Source level A.

[^36]: Rawls, J. (1971). *A Theory of Justice*, § 67. Source level A.

[^37]: Anderson, E. (1999). "What Is the Point of Equality?" *Ethics*, 109(2), 287–337. Source level A.

[^38]: Anderson, E. (1999). *Ethics*, 109(2), 287–289 (Anderson's critique of luck egalitarianism). Source level A.

[^39]: SA-2 § 3.2 operationalization list for G_w.

[^40]: Corresponds to article 03's H1' three walls of this series.

[^41]: Corresponds to article 04's T three-element schema of this series.

[^42]: Corresponds to article 05's IT' impossibility triangle of this series.

[^43]: Hayek, F. A. (1945). "The Use of Knowledge in Society." *American Economic Review*, 35(4); Hayek, F. A. (1960). *The Constitution of Liberty*; Hayek, F. A. (1973–1979). *Law, Legislation and Liberty* (Vols. 1–3). Source level A.

[^44]: Sowell, T. (1980). *Knowledge and Decisions*. Basic Books. Source level A.

[^45]: SA-2 § 6: conclusions of the Hayek-Sowell counter-argument absorption.

[^46]: Eubanks, V. (2018). *Automating Inequality*. St. Martin's Press; World Bank Findex (2021 / 2023) Special Module on Digital ID Inclusion. Source level A.

[^47]: SA-2 § 6.2: knowledge-localization as support for the parallel-baseline argument.

[^48]: Sen, A. (1999). *Development as Freedom*. Knopf; Sen, A. (2009). *The Idea of Justice*; Fraser, N. (1995). "From Redistribution to Recognition?" *New Left Review* I/212, 68–93; Nussbaum, M. (2011). *Creating Capabilities*. Source level A.

[^49]: SA-2 § 5.4: item-by-item examination of the dual criterion against the four dimensions of SA-1.

[^50]: SA-3 boundary line one: supplementary conditions tiered as mandatory (C1 soft / C2 hard / C3 dual-track).

[^51]: Regulation (EU) 2016/679 (GDPR), Article 25(2). Source level A.

[^52]: Cavoukian, A. (2009). *Privacy by Design: The 7 Foundational Principles*. Source level A.

[^53]: Sunstein, C. R. (2014). *Why Nudge?* Yale University Press, Chapter 2. Source level A.

[^54]: Madrian, B. C., & Shea, D. F. (2001). "The Power of Suggestion: Inertia in 401(k) Participation and Savings Behavior." *Quarterly Journal of Economics*, 116(4), 1149–1187. Source level A.

[^55]: W3C Verifiable Credentials Data Model 2.0 (2024-05 Recommendation). Source level A.

[^56]: ISO/IEC 18013-5:2021 mDL. Source level A.

[^57]: IETF draft-ietf-oauth-selective-disclosure-jwt (2024). Source level A.

[^58]: Hartzog, W. (2018). *Privacy's Blueprint*. Harvard University Press. Source level A.

[^59]: W3C WCAG 2.2 (2023-10 Recommendation). Source level A.

[^60]: Schaub, F., Balebako, R., & Cranor, L. F. (2017). "Designing Effective Privacy Notices and Controls." *IEEE Internet Computing*, 21(3), 70–77. Source level A.

[^61]: W3C WCAG 2.2 SC 1.4.3 / 1.4.4 / 1.4.10. Source level A.

[^62]: WHO (2019). *World Report on Vision*. Source level D.

[^63]: W3C WCAG 2.2 SC 2.5.7 / 2.5.8. Source level A.

[^64]: Carmeli, E., Patish, H., & Coleman, R. (2003). "The aging hand." *Journal of Gerontology: Medical Sciences*, 58(2), M146–M152. Source level D.

[^65]: UK Government Digital Service (2023). *Service Manual* + *Assisted Digital Strategy*. Source level D.

[^66]: Section 508 of the Rehabilitation Act of 1973, 29 U.S.C. § 794d. Source level A.

[^67]: Regulation (EU) 2024/1183, Articles 5a and 6a. Source level A.

[^68]: ETSI EN 319 401 V2.3.1 (2021-05). *General Policy Requirements for Trust Service Providers*. Source level A.

[^69]: ETSI EN 319 411-1 V1.4.1 (2023-10). Source level A.

[^70]: ETSI EN 319 411-2 V2.5.1 (2023-10). Source level A.

[^71]: ISO/IEC 27701:2019. Privacy Information Management System. Source level A.

[^72]: ISO/IEC 29115:2013. Entity Authentication Assurance Framework. Source level A.

[^73]: France Identité ANSSI Report 2025. Source level B.

[^74]: Norsk Regnesentral (2021). *Digital Identity in the Nordics: Lessons and Limits*. NR Notat DART/01/2021. Source level B.

[^75]: Hartzog, W. (2018). *Privacy's Blueprint*. Harvard University Press, chapter on design-as-law. Source level A.

[^76]: EU EUDI Wallet ARF, 2025-12 Cooperation Group iteration (historical snapshot v1.4.1, 2024-12), Chapter 5 (relying party integration cost estimates). Source level B.

[^77]: Consumer Protection Act (Republic of China), enacted 1994, amended 2015, Articles 43–47. Source level B.

[^78]: Personal Data Protection Act (Republic of China), 2010, amended 2023, Articles 28–31. Source level B.

[^79]: Solove, D. J., & Hartzog, W. (2014). "The FTC and the New Common Law of Privacy." *Columbia Law Review*, 114(3), 583–676. Source level A.

[^80]: Directive 2013/11/EU (ADR Directive). Source level A.

[^81]: Council of Europe, Convention 108+. Source level B.

[^82]: Allmänna reklamationsnämnden (ARN) (2023). *Årsredovisning*. Source level D.

[^83]: ENISA (2024). *Mobile eID and mDL Trust Framework Report*, three-party responsibility allocation. Source level A.

[^84]: SA-3 boundary line: consumer protection law must not be framed as regulatory suppression.

[^85]: Consumer Protection Act (Republic of China), 1994 legislative rationale. Source level B.

[^86]: SA-4 § 3: three-threshold mutually non-overlapping estimates.

[^87]: NCC (2023). *Survey of Communications Market Conditions and Communications Use Behavior*. Source level A.

[^88]: NCC 2023 age-stratified data; Ministry of Health and Welfare (2022). *Survey of the Conditions of the Elderly*. Source level A.

[^89]: Counterpoint Research / GfK (2024). *Taiwan Smartphone Market*. Source level C.

[^90]: Ministry of Education (2023). *Survey on Adult Digital Opportunities and Competence*. Source level A.

[^91]: National Development Council (2022). *Digital Opportunities Survey*. Source level A.

[^92]: Ministry of Health and Welfare (2021). *Survey of the Living Conditions and Needs of Persons with Disabilities*. Source level A.

[^93]: Taiwan Alzheimer Disease Association, *2023 Taiwan Dementia Population Estimate Report* (2024). Source level B.

[^94]: Ministry of Labor (2024). *Migrant Worker Management and Utilization Survey*; National Immigration Agency (2024). *New Residents Living Needs Survey*. Source level A.

[^95]: SA-4 § 4: quantitative estimates across three scenarios.

[^96]: Ministry of the Interior, Household Registration Office, *Monthly Population Statistics Report*, March 2025. Source level A.

[^97]: National Development Council 2024 public briefing; Ministry of Digital Affairs, *Mobile Natural Person Certificate (TW DIW) Pilot Program Description* (2024). Source level C.

[^98]: Khera, R. (2017). "Impact of Aadhaar on Welfare Programmes." *Economic and Political Weekly*, 52(50). Source level A.

[^99]: Anderson, E. (1999). *Ethics*, 109(2), 287–337. Source level A.

[^100]: SA-4 § 5: counterfactual scenario design.

[^101]: SA-4 § 5.4: residual excluded population distribution under Counterfactual D.

[^102]: SA-4 § 6: cross-national comparison.

[^103]: Digitaliseringsstyrelsen (Denmark) (2023). *MitID Alternative Channels Evaluation Report*. Source level D.

[^104]: Défenseur des Droits (2022). *Dématérialisation et inégalités d'accès aux services publics*; INSEE 2023. Source level D.

[^105]: Khera, R. (Ed.). (2019). *Dissent on Aadhaar*. Orient BlackSwan; Drèze, J., Khalid, N., Khera, R., & Somanchi, A. (2017 / 2020). "Aadhaar and Food Security in Jharkhand." *Economic and Political Weekly*, 52(50) / 55(16). Source level A.

[^106]: Pew Research (2023). *Mobile Phone Sharing in U.S. Households*. Source level D.

[^107]: e-Estonia (2024); OECD (2023). *Digital Government Review of Estonia*. Source level A.

[^108]: SA-5 § 3: cross-national seven-case comparison matrix.

[^109]: Finansinspektionen (2024). BankID Supervisory Annual Report; Pensionsmyndigheten (2023). *Tillgänglighet och digital inkludering*. Source level D.

[^110]: OECD (2020). *Digital Government Review of Sweden*. Source level A.

[^111]: SA-5 § 3.1: Nordic BankID banking-sector KYC starting point limitation.

[^112]: Allmänna reklamationsnämnden (ARN) (2023). *Årsredovisning*. Source level D.

[^113]: OECD (2020). *Digital Government Review of Sweden*; OECD (2024). *Trust in Public Institutions*. Source level A.

[^114]: Norsk Regnesentral (2021). *Digital Identity in the Nordics: Lessons and Limits*. NR Notat DART/01/2021. Source level B.

[^115]: e-Estonia (2024); OECD (2023). *Digital Government Review of Estonia*. Source level A.

[^116]: RIA (2023). *Cyber Security Annual Report*. Source level A.

[^117]: RIA (2023). *Cyber Security Annual Report*; literature on Estonia's 2007 cyberattack response. Source level A.

[^118]: CVE-2017-15361 (ROCA vulnerability). National Vulnerability Database; RIA public announcement. Source level A.

[^119]: GovTech Singapore (2024); World Bank ID4D (2024). Source level A.

[^120]: SA-1 boundary line 4 + SA-5 boundary line 5.5: holder-centric ≠ unidirectional technological trend.

[^121]: SA-5 § 3.4: India Aadhaar exclusion statistics.

[^122]: Khera, R. (2017). "Impact of Aadhaar on Welfare Programmes." *Economic and Political Weekly*, 52(50). Source level A.

[^123]: Drèze, J., Khalid, N., Khera, R., & Somanchi, A. (2017 / 2020). "Aadhaar and Food Security in Jharkhand." *Economic and Political Weekly*, 52(50) / 55(16); Anand & Mishra, NIPFP (2019). Source level A.

[^124]: Supreme Court of India (2018). *Justice K.S. Puttaswamy v. Union of India*, (2019) 1 SCC 1. Source level A.

[^125]: DINUM (2024); INSEE (2023); ARCEP / CRÉDOC (2023). *Baromètre du Numérique*. Source level A/D.

[^126]: SA-5 boundary line 5.2: France FranceConnect — middle-class achievement plus distributive failure.

[^127]: Défenseur des Droits (2022). *Dématérialisation et inégalités d'accès aux services publics*. Source level D.

[^128]: *Cour des Comptes* (2022). *Rapport public annuel*. Source level D.

[^129]: GAO (2024). *Digital Identity: Login.gov Implementation Audit*. GAO-24-105663. Source level A.

[^130]: Brewster, T. (2022). "ID.me Glitches Lock Out Black Americans." *Forbes*. Source level D.

[^131]: GAO (2024). *Digital Identity: Login.gov Implementation Audit*. GAO-24-105663. Source level A.

[^132]: KISA (2024). 모바일 신분증 정책 보고서; Korea MOIS (2024). Source level A.

[^133]: KISA (2024). 모바일 신분증 정책 보고서. Source level A.

[^134]: Lee, J., & Park, S. (2024). "Mobile ID and the Limits of Privacy by Design." *Journal of Korean Law*, 24(1). Source level B.

[^135]: SA-5 boundary line 5.4: commercial vs. government wallet obligations = normative obligation category difference, not degree difference.

[^136]: SA-5 boundary line 5.3: commercial wallet market incentives as a policy lever.

[^137]: Apple Wallet Terms of Service; Google Wallet Terms of Service. Source level C.

[^138]: OECD (2020). *Digital Government Review of Sweden*. Source level A.

[^139]: RIA (2023). *Cyber Security Annual Report*; OECD (2023). *Digital Government Review of Estonia*. Source level A.

[^140]: *Cour des Comptes* (2022). *Rapport public annuel*. Source level D.

[^141]: GAO (2024). *Digital Identity: Login.gov Implementation Audit*. GAO-24-105663. Source level A.

[^142]: National Development Council (2023). *Digital Inclusion White Paper*; Ministry of Digital Affairs (2024). *Digital Equity Development Survey*. Source level C.

[^143]: UNESCO (2023). *Adult Digital Skills*. Source level A.

[^144]: SA-5 § 4.3: KYC linkage pathway analysis.

[^145]: Défenseur des Droits (2022); INSEE (2023). Source level D.

[^146]: Khera, R. (2017). *Economic and Political Weekly*, 52(50). Source level A.

[^147]: Brewster (2022). *Forbes*; GAO (2024). GAO-24-105663. Source level A/D.

[^148]: van Dijk, J. (2020). *The Digital Divide*. Polity. Source level A.

[^149]: Sweden, *Förvaltningslagen* 2017, Article 6 (as amended) (Justitiedepartementet Prop. 2016/17:180). Source level A.

[^150]: Estonia, *Avaliku teabe seadus* (Public Information Act). Source level A.

[^151]: *Cour des Comptes* (2022); Défenseur des Droits (2022). Source level D.

[^152]: Khera, R. (Ed.). (2019). *Dissent on Aadhaar*. Orient BlackSwan. Source level A.

[^153]: Digitaliseringsstyrelsen (Denmark) (2023). *MitID Alternative Channels Evaluation Report*. Source level D.

[^154]: ENISA (2024). *Mobile eID and mDL Trust Framework Report*. Source level A.

[^155]: W3C WCAG 2.2 SC 1.4.3 / 1.4.4 / 1.4.10 / 2.5.7 / 2.5.8. Source level A.

[^156]: SA-3 § 5.3: analysis of three C3 institutional construction pathways.

[^157]: EU EUDI Wallet ARF, 2025-12 Cooperation Group iteration (historical snapshot v1.4.1, 2024-12), Chapter 5. Source level B.

[^158]: UK Government Digital Service (2023). *Assisted Digital Strategy*. Source level D.

[^159]: Digitaliseringsstyrelsen (Denmark) (2023). *MitID Alternative Channels Evaluation Report*. Source level D.

[^160]: Pensionsmyndigheten (2023). *Tillgänglighet och digital inkludering*. Source level D.

[^161]: Ministry of Education (2023). *Survey on Adult Digital Opportunities and Competence*; National Development Council (2022). *Digital Opportunities Survey*. Source level A.

[^162]: Corresponds to the articulation analysis with articles 04 and 05 and prompts 11 and 15 of this series.
