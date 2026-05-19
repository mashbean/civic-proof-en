---
title: "Civic Proof Inclusion Rights: Alternative Paths Without a Wallet"
description: "This paper argues that when civic proof becomes a de facto necessary gateway to democratic infrastructure, the right of access to it carries a claimed scholarly standing as a 'precursor right at the human-rights level.' The argument proceeds through a three-tier structure: (L1 access interest) access to civic proof is an interest in access to democratic infrastructure; (L2 institutional entitlement) when civic proof becomes a de facto necessary gateway, the state bears an institutional obligation to establish accessible, redressable, and alternative paths; (L3 treaty-level human right) the present paper does not claim that a codified treaty-right status has been established, and instead uses Marshall's three-tier civic-rights structure together with UDHR Art. 6 / ICCPR Art. 16 legal personhood rights as analogical anchors. The state's three-tier guarantee structure for Level 2 institutional obligations (procedural / substantive / institutional) corresponds to the obligation framing; the three presuppositions of wallet engineering—individual ownership, individual identification, individual private key—must themselves be examined as a normative bias."
pubDate: 2026-05-10
tags: ["civic-proof", "inclusion-rights", "digital-identity", "human-rights", "Marshall", "Sen-capability-approach", "CRPD", "stateless-persons", "shared-device", "delegated-authority", "supported-decision-making", "inclusion-impact-assessment", "wallet"]
category: "Digital Identity and Democratic Theory"
aiModel: "Claude Opus 4.7"
aiPrompt: "Which populations face structural barriers to accessing civic proof? How should the right of access to civic proof be legally protected—through procedural, substantive, and institutional guarantees?"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-05-10-civic-proof-inclusion-rights"
aiGeneratedDate: 2026-05-10
humanReviewed: false
lang: "en"
slug: "2026-05-10-civic-proof-inclusion-rights"
---

## § 1. Introduction

The European Union's adoption of Regulation (EU) 2024/1183 (eIDAS 2.0) in April 2024 advanced the digital identity wallet from an EU-level proposal to a mandatory deployment obligation for member states.[^1] Taiwan's mobile natural-person credential wallet (TW DIW), India's DigiLocker, Buenos Aires's QuarkID, and Bhutan's NDI have all come online in succession. These systems share a common presupposition: that users possess a smartphone capable of hosting a wallet, possess sufficient digital literacy, hold a lawful identity document enabling registration, and are not blocked by administrative or structural conditions.

The actual situation is far from this. The World Bank ID4D 2024 estimates that globally 850 million people still lack official identity documents.[^2] UNHCR 2024 statistics record at least 4.4 million legally stateless persons worldwide as of end-2023.[^3] ITU 2024 estimates that 2.6 billion people remain unconnected.[^4] The GSMA 2024 report finds that 23 percent of women in Sub-Saharan Africa are non-owner shared users.[^5] WHO 2024 estimates the global population living with dementia has reached 55 million, more than 60 percent of whom are in low- and middle-income countries.[^6] Considered together, these figures indicate that the spread of wallets, for a substantial portion of the global population, signifies further exclusion rather than an extension of digital inclusion.

The core proposition of the present paper is that when civic proof becomes a de facto necessary gateway to democratic infrastructure, the right of access to it carries a claimed scholarly standing as a "precursor right at the human-rights level." The proposition is divided into three tiers to avoid ambiguity of standing: **Level 1 access interest**—access to civic proof is an interest in access to democratic infrastructure; **Level 2 institutional entitlement**—when civic proof becomes a de facto necessary gateway, the state bears an institutional obligation to establish accessible, redressable, and alternative paths; **Level 3 treaty-level human right**—the present paper does not claim that a codified treaty-right status has been established, and instead uses Marshall's 1950 three-tier civic-rights structure together with UDHR Art. 6 / ICCPR Art. 16 legal personhood rights as analogical anchors.[^7] At the Level 2 institutional obligation, the state bears a three-tier guarantee structure: procedural guarantees (the obligation to provide alternative paths beyond the wallet), substantive guarantees (the provision of "minimum viable civic proof" for undocumented persons, stateless persons, and persons in exile), and institutional guarantees (mandatory inclusion impact assessment at the infrastructure design stage). When the state fails to fulfil this obligation, it may constitute, on a spectrum of severity, harms ranging from "administrative invisibility" (loss of administrative visibility), "accumulated exclusion," and, in extreme circumstances, "structural deprivation of citizenship"—three tiers of harm whose specific severity depends on the relevant country's constitutional interpretation, administrative capacity, and availability of alternative paths.

The argument is organized as follows. Section 2 clarifies the four-party relationship and the conceptual foundations of civic proof's four conditions. Section 3 identifies four structural mechanisms of exclusion affecting excluded populations. Section 4 deduces the precursor right proposition from the political-philosophical foundations of Marshall and Sen. Section 5 uses abductive inference to address the legal basis of the state's three-tier guarantee structure and its failure cases. Section 6 uses shared-device and delegated-authority scenarios to decompose the three presuppositions of wallet engineering. Section 7 synthesizes three tiers of concrete policy provisions. Section 8 conducts process tracing through five failure cases. Section 9 uses four counterfactual scenarios to stress-test the policy paths. Section 10 articulates the connections with other chapters of the dissertation and the article sequence. Section 11 presents the honesty boundary and open problems. Section 12 offers the conditional academic conclusion.

The strength of each element of the argument should be stated at the outset. The inductive portion (Section 3) relies primarily on cases that have occurred and on global quantitative data, with evidence strength rated "strong." The deductive portion (Section 4), grounded in Marshall, Sen, Anderson, Nussbaum, and UN treaty bodies, has evidence strength rated "strong," but the scholarly standing of "precursor right" is a doctrinal inference rather than a direct treaty recognition. The abductive portion (Section 5), which infers three-tier obligations from failure cases, has evidence strength rated "medium-strong," but the three-tier classification carries different bearing structures across legal systems and must be explicitly characterized as an "analytical typology." The counter-example portion (Section 6) of the wallet three-presupposition decomposition constitutes normative argumentation, with evidence strength rated "medium." The policy synthesis (Section 7), with its specific provisions (including quantitative equivalence indicators), consists of policy recommendations without empirical sources.

## § 2. Concepts and Terminology

Digital identity wallets involve a four-party relationship. The **issuer** issues verifiable credentials, including governments, academic institutions, and commercial KYC service providers. The **verifier** receives and validates credentials. The **wallet provider** provides the application or SDK for users to store and present credentials. The **holder** is the individual or legal person to whom the credentials refer.

The four conditions of civic proof—anonymity, unlinkability, verifiability, and accountability—constitute a normative proposal developed in Chapter 2 of the dissertation.[^8] The concern of the present paper is the concrete implementation of these four conditions at the level of inclusion. When anonymity and unlinkability are addressed at the cryptographic layer (through zero-knowledge proofs, blind signatures, and pseudonymous credentials), and verifiability matures progressively through W3C Verifiable Credentials and mDoc standards, accountability remains a normative proposal rather than a verified engineering implementation. Inclusion—ensuring that all citizens may access civic proof protected by these four conditions—constitutes a simultaneous two-directional challenge of normative and engineering alignment.

The phrase "fundamental-rights standing" is ambiguous in the Chinese political-philosophical context. The present paper follows the three-tier distinction of Sub-Argument 2, dividing it into three meanings: (a) "human right" in international human rights law, for which treaty basis already exists; (b) "fundamental right" (*Grundrecht*) in the constitutions of individual states, which requires recognition through constitutional interpretation in each jurisdiction; and (c) "statutory right" at the legislative level, which can be amended by a parliamentary majority. The present paper maintains that the right of access to civic proof holds in both tiers (a) and (b), and critiques arguments that treat it as belonging to tier (c) only (Banerjee & Duflo 2011, 2019; Posner & Vermeule 2010).

## § 3. Excluded Populations: Four Structural Mechanisms

Excluded populations may be classified into four structural mechanisms, each corresponding to a distinct cause of exclusion and a distinct policy intervention point. Conflating these four categories under the rubric of the "digital divide" obscures the precision required for policy intervention.[^9]

### § 3.1 Device Exclusion

Absence of the hardware infrastructure required to host a wallet, including lack of a smartphone, shared-device use, low bandwidth, legacy feature phones, and unstable electricity or network conditions. The intervention point is infrastructure policy.

The GSMA 2024 global statistics report that 23 percent of women in Sub-Saharan Africa and 19 percent of women in South Asia are non-owner shared users; mobile internet penetration across Africa as a whole is approximately 27 percent, far below the 80 percent or more typical of high-income countries.[^10] ITU 2024 estimates that at least 2.6 billion people remain unconnected globally, with a substantial proportion of access patterns achieved through shared household use.[^11] In the ICTD/CHI research series by Wyche and colleagues in Kenya, the paper "Sharing this with the family" documents the normative scenario of a single smartphone serving as a communication device for a household of six.[^12] Research by Sambasivan and colleagues in South Asia records that women's mobile phone use is subject to supervision by male household members, a condition in which the wallet design's "individual ownership" presupposition directly conflicts with prevailing social structures.[^13]

### § 3.2 Literacy Exclusion

Possession of a device but inability to understand or operate wallet processes, including low digital literacy, older persons, persons with disabilities, persons with dementia, persons who are illiterate, and users who are visually or hearing-impaired. The intervention point is education and long-term care.

WHO 2024 estimates that the global population living with dementia has reached 55 million, more than 60 percent of whom are in low- and middle-income countries.[^14] The prevalence of dementia among persons aged 65 and above in Taiwan is approximately 7.9 percent (WHO 2024 combined with Taiwan Alzheimer's Disease Association 2024), corresponding to a population of more than 300,000 persons living with dementia.[^15] Feedback from family caregivers recorded by the Hung-Dao Elderly Welfare Foundation and the Taiwan Alzheimer's Disease Association indicates that the multi-step login of the mobile natural-person credential wallet, the PIN reset process triggered by biometric authentication failure, and the multi-factor verification required for long-term care benefit claims, together constitute barriers that persons with dementia are practically incapable of completing independently.[^16]

The NIST Face Recognition Vendor Test (FRVT) 2022 demonstrates that algorithmic false match rates are significantly higher for darker skin tones and for East Asian facial recognition (with false match rates for African faces ranging from 10 to 100 times those for white faces on certain algorithms).[^17] This algorithmic false-match problem is, as an exhaustive open margin, provisionally subsumed here under the expanded category of literacy exclusion; it should be elevated to an independent exclusion category once sufficient evidence has accumulated.

The design of UK Universal Credit's fully digitalized welfare application, deployed from 2017 onwards, has generated a sustained volume of "digital by default" failure cases: Eubanks (2018) *Automating Inequality*, Alston's 2019 UN Special Rapporteur report, and Ranchordas (2022) in *Duke Law Journal* 71(6) together document the systemic exclusion of older persons, low-literacy persons, and persons without stable internet access by this system.[^18]

### § 3.3 Documentation Exclusion

Being excluded from the document-issuance system, including legally stateless persons, de facto stateless persons, children whose births were not registered, persons whose documents have been revoked in exile, and undocumented migrant workers. The intervention point is nationality and immigration law.

UNHCR 2024 statistics record at least 4.4 million legally stateless persons worldwide as of end-2023, of whom Rohingya, Syrian, and Kashmiri stateless persons constitute the majority.[^19] The 1954 Convention relating to the Status of Stateless Persons and the 1961 Convention on the Reduction of Statelessness establish minimum documentation duties (*minimum documentation duty*) for states parties with respect to stateless persons on their territories; the UNHCR 2014 *Handbook on Protection of Stateless Persons* gives these obligations concrete form.[^20]

The UK Windrush case (2018) is the most large-scale failure case of this category. The Home Office hostile environment policy (from 2012) required identity verification at every stage of housing, employment, health care, and education, causing long-term lawful Commonwealth residents in the UK—particularly the Windrush generation who migrated from the Caribbean between 1948 and 1973—to be classified as illegal residents due to records management failures, and to face deportation, detention, loss of employment, and loss of access to healthcare.[^21] The UK Home Office (2020) *Windrush Lessons Learned Review* determined that this policy caused "structural discrimination," and the state's compensation for victims remained incomplete as of 2024.[^22]

Rohingya stateless persons in Bangladesh hold UNHCR Biometric Identity Management System (BIMS) digital credentials, but when those credentials are presented in Bangladesh for services (food ration distribution, SIM-card real-name registration, cross-border remittance), the specific barriers faced—because local administrative staff are unfamiliar with the UNHCR system—include: protracted UNHCR case management timelines, the lack of enforcement authority of the Bangladesh National Human Rights Commission, and the capacity of international refugee legal aid organizations limited to political advocacy.[^23] These paths are all remedial in the nature of humanitarian assistance and political advocacy rather than "cross-border litigation" redress.

### § 3.4 Institutional Exclusion

Possession of a device and sufficient literacy, yet exclusion by administrative or structural conditions, including low-income households blocked by means-testing thresholds, new migrants who have not yet met residency requirements, migrant workers whose documents are withheld by employers, and persons experiencing homelessness who lack a fixed address. The intervention point is social welfare and labor law.

The failure case of India's Aadhaar public distribution system (PDS) is the most serious documented instance of this category. The series of research by Khera and Drèze, accumulated through 2024, documents approximately 30 cases of deaths attributable to starvation in Jharkhand, Bihar, and Karnataka, arising when beneficiaries were denied access to distribution points due to Aadhaar linkage errors, biometric authentication failure, and administrative negligence.[^24] Khera's 2019 series in *Economic and Political Weekly* indicates that these deaths are structural consequences of the conflict between the mandatory Aadhaar linkage design and the existing operational logic of the PDS.[^25]

Australia's Robodebt (2016–2020) is another emblematic case of institutional exclusion. The Department of Human Services used automated computation to erroneously issue large numbers of debt notices to welfare recipients, causing widespread erroneous deductions and psychological distress, with some recipients dying by suicide. The Australian Royal Commission 2023 report determined that the system violated law and the requirements of administrative due process.[^26]

The withholding of alien resident certificates (ARC) from migrant workers in Taiwan is a local case of institutional exclusion. Employers withhold ARCs to control migrant workers' mobility; when an ARC lapses, the migrant worker's digital identity, health insurance, bank accounts, and labor insurance all simultaneously lapse. TIWA and the Taiwan International Workers' Association 2024 statistics document approximately 5,000 related cases.[^27]

### § 3.5 Exhaustiveness Check: The Fifth Candidate Category of Voluntary Non-Users

The fifth candidate category—"voluntary non-users" (exclusion by public will, such as persons who actively refuse to use a wallet on grounds of data-protection concerns)—was determined after literature review to require no independent enumeration at the structural level. The reason is that the Federal Constitutional Court of Germany's 1983 *Volkszählungsurteil* (BVerfGE 65, 1) established *informationelle Selbstbestimmung* (the right to informational self-determination) as a fundamental right, protecting the passive decision not to use a system.[^28] Conflating voluntary non-users with structurally excluded persons dilutes the normative force of both categories: the former constitutes the exercise of a fundamental right (refusal of data processing), while the latter constitutes the deprivation of a fundamental right (being blocked from the issuance system).

The NIST FRVT 2022 algorithmic false-match problem is, as an exhaustive open margin, provisionally subsumed under category (b) as an extension of literacy exclusion, but should be elevated to an independent algorithmic exclusion type once sufficient evidence has accumulated.

## § 4. Political-Philosophical Foundations: Civic Proof as a Precursor Right (A Scholarly Standing Claim)

From the empirical survey of excluded populations in Section 3, the present section deduces the standing claim of the right of access to civic proof in political philosophy. The core of the argument is that civic proof carries a claimed scholarly standing as a precondition transecting Marshall's 1950 three-tier civic-rights structure, drawing on the discursive tradition of the legal personhood right in ICCPR Art. 16 and designated "precursor right." The present paper treats this as a **scholarly standing claim and institutional obligation framework**, not as a claim that it has already achieved codified treaty-right status.

### § 4.1 Marshall's Three-Tier Civic Rights and Civic Proof

T.H. Marshall, in his 1950 *Citizenship and Social Class*, divided civic rights into three tiers. The civil tier comprises freedoms and equality before the law (civil rights, including freedom of contract, the right to litigate, and property rights); the political tier comprises political participation rights (political rights, including the right to vote and to stand for election); and the social tier comprises economic welfare and basic subsistence (social rights, including education, health care, and social insurance).[^29] The three tiers were established in historical sequence but are normatively presupposed by one another: the effective exercise of the political tier presupposes the legal equality of the civil tier, and the realization of the social tier presupposes institutional recognition of the civil and political tiers.

When Marshall's three-tier structure is applied to contemporary digitalized public life, civic proof plays the role of a "capability prerequisite" (*capability prerequisite*) for entry to the rights of each tier:

- **Civil tier**: concluding a tenancy contract requires identity verification; opening a bank account requires KYC; litigation requires proof of the identity of the parties. When these processes shift from paper-based physical verification to digital wallet verification, inability to obtain civic proof is equivalent to the loss of contractual capacity.
- **Political tier**: voting requires voter registration; petition signing requires identity verification; party membership requires data management. When electoral administration or political participation tools shift to wallet interfaces (such as Estonia's i-Voting or California's Vote-by-Mail system), failure to obtain civic proof is equivalent to the loss of political participation capacity.
- **Social tier**: applying for social insurance, receiving pensions, school enrollment, accessing health care, and receiving long-term care payments. When these social benefits shift to wallet interfaces (such as Taiwan's TW DIW for long-term care benefit claims or India's mandatory Aadhaar linkage to the PDS), failure to obtain civic proof is equivalent to the loss of social security.

This correspondence demonstrates that civic proof, spanning the three tiers, carries a claimed scholarly standing as a "precondition"—one that is not structurally isomorphic with the rights of any single tier. On this basis, the present paper advances the scholarly standing claim of a precursor right, without claiming that it has been directly recognized by any existing treaty. Drawing on the discursive tradition of ICCPR Art. 16—"Everyone shall have the right to recognition everywhere as a person before the law"[^30]—as an analogical anchor, the present paper designates the right of access to civic proof as a "precursor right."

### § 4.2 The Extension of Sen's Capability Approach

Amartya Sen, in *Development as Freedom* (1999) and *The Idea of Justice* (2009), advances the capability approach, defining rights as "substantive capabilities" rather than merely formal freedoms.[^31] A person may possess the right to vote, yet if that person is unable to reach the polling station, cannot understand the ballot, or cannot register as a voter, the right is substantively non-existent. Sen's argument extends very directly to civic proof: failure to obtain civic proof causes the "substantive capabilities" of the three tiers of civic rights to disappear. Martha Nussbaum, in *Creating Capabilities* (2011), further institutionalizes the capability approach into a list of ten "central capabilities," among which "affiliation" and "control over one's environment" directly encompass civic proof scenarios.[^32]

Elizabeth Anderson, in "What Is the Point of Equality?" (*Ethics*, 1999), advances the concept of relational equality, defining equality as "a relationship of equal standing among citizens," and opposing the measurement of justice by distributive outcomes alone.[^33] When failure to obtain civic proof deprives some citizens of "administrative visibility," the relationship of equal standing with other citizens is broken—a rupture of relational standing that cannot be replaced by subsequent compensation.

### § 4.3 Dialogue with Other Political Philosophers

Philip Pettit's 1997 *Republicanism* argues from the republican tradition for freedom as "non-domination," connected to the Roman legal tradition's concept of *libertas*.[^34] When citizens are excluded from the civic proof system, their risk of being arbitrarily dominated in public action increases—directly conflicting with the core concern of republicanism. Iris Marion Young's 2000 *Inclusion and Democracy* redefines democracy as "structural inclusion," opposing the measurement of democratic quality by majority rule alone.[^35] Nancy Fraser's 2007 argument on the transnational public sphere holds that a transnational public sphere requires multiple recognitions of civic proof.[^36]

Jürgen Habermas, in *Strukturwandel der Öffentlichkeit* (1962; translated as *The Structural Transformation of the Public Sphere*) and in *Faktizität und Geltung* (1992; translated into English by the MIT Press in 1996 as *Between Facts and Norms*), argues that the constitution of the public sphere requires "communicative competence," and that civic proof is the material basis for accessing that competence.[^37]

UN Special Rapporteur Philip Alston's 2019 report on the digital welfare state (UN A/74/493) argues directly from a human rights law perspective that a digitalized welfare state that fails to guarantee civic proof inclusion constitutes a systemic violation of basic human rights.[^38]

### § 4.4 Handling Counter-Arguments

The first counter-argument comes from Banerjee & Duflo in *Poor Economics* (2011) and *Good Economics for Hard Times* (2019), who maintain that the economic benefits of universal ID (financial inclusion, efficiency of social welfare distribution) are instrumental and should not be equated with fundamental rights; elevating civic proof to the level of a fundamental right may dilute rights language itself.[^39] Two RCTs—Banerjee, Duflo, Imbert, Mathew & Pande (2020) and Muralidharan, Niehaus & Sukhtankar (2016)—provide empirical evidence of the "net inclusion benefit" of India's Aadhaar in reducing leakage.[^40]

The response of the present paper is: the outcome variable of the two RCTs is "net leakage improvement" and "overall distribution efficiency," and these results are valid. However, Sub-Argument 1 and the Khera series documented in Section 3 record the outcome variable of "tail exclusion leading to death"—the two are not mutually exclusive; it is possible simultaneously to have (i) leakage improvement and (ii) tail exclusion deaths. Banerjee and Duflo's argument is correct, but the issue they argue concerns a different question from that of the present paper. Elevating civic proof to precursor right status does not deny its instrumental benefits; it rather adds a floor guarantee above those instrumental benefits, such that tail populations cannot be allowed to die.

The second counter-argument comes from Eric Posner & Adrian Vermeule's 2010 *The Executive Unbound*, which maintains that contemporary administrative-state decision-making requires flexibility; locking civic proof in as a fundamental right will constrain governments' ability to respond flexibly to new technology.[^41] The response of the present paper is: designating civic proof as a precursor right does not require governments to realize it through any particular technology; it requires only that governments satisfy an outcome condition (that all persons are able to access it). Flexibility in the choice of technology is preserved within the protection of constitutional fundamental rights.

The third counter-argument comes from Florian Hoffmann's 2017 critique of relational equality, which warns of the risk of "over-legalization": subsuming all qualifications for public participation within fundamental rights will dilute the constitutional-level distinctiveness of those rights.[^42] The response of the present paper is: civic proof constitutes a precondition transecting the three tiers of civic rights, not "all qualifications for public participation"; this preconditionality itself determines its constitutional-level distinctiveness.

The fourth counter-argument comes from Lawrence Lessig's 1999 *Code*, which from a cyber-libertarian position maintains that wallet universalization should be achieved through market competition and state withdrawal rather than through the elevation of entry rights to fundamental-right status.[^43] The response of the present paper is: when the wallet has already become a de facto necessary gateway to public life, market withdrawal cannot satisfy the outcome condition; market-led wallet design will leave vulnerable groups to the fiction of "freely choosing not to use," a fiction that in substance amounts to exclusion.

## § 5. The State's Three-Tier Guarantee Structure

If civic proof is a fundamental right, state obligations must include a three-tier guarantee structure: procedural guarantees, substantive guarantees, and institutional guarantees. The three-tier classification carries different bearing structures across legal systems, and when the present paper employs this classification it must explicitly characterize it as an "analytical typology" rather than a direct transplantation of legal terminology from a single jurisdiction.

### § 5.1 Cross-Jurisdictional Bearing of the Three-Tier Classification

In the common-law tradition (Anglo-American), the three tiers correspond to three clusters of justiciable claims: procedural due process, substantive due process, and institutional design. In the civil-law tradition (particularly the German Basic Law tradition), the three tiers correspond to three constitutional concepts: *formelle Rechtsstaatlichkeit* (formal rule of law), *materielle Rechtsstaatlichkeit* (substantive rule of law), and *Schutzpflicht* (state protective obligation).[^44] German constitutional law further carries the tradition of *Institutionsgarantie* (institutional guarantee) in the Carl Schmitt–Häberle tradition, which is not fully equivalent to the Anglo-American sense. East Asian constitutionalism (including Taiwan's) carries the tradition of "institutional guarantees," which maintains greater continuity with the civil-law tradition.[^45]

The legal bases include: UDHR Art. 6 (legal personhood right), ICCPR Art. 16, ICESCR, CRPD Art. 9 (Accessibility) and Art. 12 (Equal recognition before the law), CRC Art. 7 (right to birth registration), 1954 Convention Art. 27/28 (obligations regarding identity papers and travel documents for stateless persons). UN General Comments provide specific interpretation, in particular No. 3 (1990) on the nature of state obligations, No. 9 (1998) on the domestic application of the ICESCR, and No. 12 (1999) on the right to food.[^46]

### § 5.2 Procedural Guarantees

Procedural guarantees require the state to provide alternative paths beyond the wallet (paper-based, NFC card, customer service, delegated authority, and stamp authorization), with the condition that those alternative paths may not carry discriminatory additional requirements. Three categories of specific provisions are proposed:

**P1 — Statutory obligation clause**: all civic proof services must not offer only a wallet interface; at least one non-wallet alternative path must be simultaneously available. The European Accessibility Act (EU) 2019/882 and the EU EECC Directive (EU) 2018/1972 (successor to the Universal Service Directive) provide partial EU legal basis.[^47]

**P2 — Equivalence clause**: alternative paths must be legally equivalent to the wallet, and must not be discriminatory in substantive efficiency. The present paper adopts the revised delimitation of Sub-Argument 5, distinguishing between "formal equivalence" (paper-based and wallet paths occupy the same tier of legal validity) and "substantive equivalence" (paper-based paths in actual use are not subject to discriminatory processing delays or fees). Substantive equivalence must incorporate quantitative indicators: processing time for the alternative path must not exceed 1.5 times that of the wallet path; rejection rates must not exceed 1.5 times those of the wallet path. These quantitative indicators constitute policy recommendations that must undergo legislative negotiation.[^48]

**P3 — Anti-discrimination clause**: alternative paths must not carry additional fees, processing-time discrimination, or similar conditions. Violations may be remedied by citizens through administrative litigation.

### § 5.3 Substantive Guarantees

Substantive guarantees require the state to provide "minimum viable civic proof" to undocumented persons, stateless persons, and persons in exile, even where those persons do not satisfy the conditions of traditional citizenship. The present paper adopts the revised delimitation of Sub-Argument 5, dividing "minimum viable civic proof" into two populations:

**Legally stateless persons** (protected by the 1954 and 1961 Conventions; approximately 4.4 million persons as of end-2023)[^49]: the 1954 Convention Art. 27 (identity papers) and Art. 28 (travel documents) already establish minimum documentation duties for states parties with respect to stateless persons on their territories; the UNHCR 2014 *Handbook on Protection of Stateless Persons* gives these obligations concrete form. (It must be noted that the Handbook constitutes a discursive extension rather than direct treaty coverage, and primarily addresses status determination procedures without directly addressing the digital wallet.) "Minimum viable civic proof" should constitute a digital-era extension of these existing obligations, aligned with the UNHCR Digital Identity for Refugees programme (launched in 2018; covering approximately 11.4 million persons as of 2024).[^50] It must be made explicit that the "user-led" component of the UNHCR programme is minimal, and that the primary design is a centralized BIMS; downstream writers must not characterize it as an "already realized" state.

**De facto persons without ID** (not directly covered by any international treaty; the World Bank ID4D estimates approximately 850 million persons)[^51]: including children whose births were not registered, persons whose documents were revoked in exile, undocumented migrant workers, and persons experiencing homelessness who lack a fixed address. Providing "minimum viable civic proof" to these populations lacks a direct international treaty basis and must rely on each country's constitutional fundamental rights and administrative law.

The trust frameworks for the two populations differ: for legally stateless persons, the framework is led by UNHCR and IOM; for de facto persons without ID, each country's domestic mechanisms (social welfare agencies, immigration authorities, police) and civil society NGOs must jointly develop appropriate frameworks.

The "minimum viable civic proof" dual-safeguard structure:

- **Non-substitution-for-nationality-acquisition**: minimum viable civic proof must not substitute for the right to acquire nationality; otherwise it will permanently entrench statelessness. The 1961 Convention's obligation on states to "reduce statelessness" must take precedence over the wallet policy agenda.
- **Residential-status upgrade clause**: minimum viable civic proof must be accompanied by a clear pathway toward upgrading residential status to full citizenship. Minimum viable civic proof without an upgrade pathway will be used by some states as a tool for permanently entrenching statelessness.

City-level sanctuary card programs (San Francisco Municipal ID, from 2009; New York City IDNYC, from 2015; Los Angeles CitiID; Chicago CityKey) provide another substantive guarantee path. However, the present paper adopts the revised delimitation 5 of Sub-Argument 5: their status is that of "city-level backfill where federal protection is insufficient"; stable template status cannot be established.[^52] NYC IDNYC faced ICE data-access pressure between 2017 and 2020; repeated litigation and settlements demonstrate that the legal sustainability of these city-level programs is directly affected by changes in the federal administration.

### § 5.4 Institutional Guarantees

Institutional guarantees require that infrastructure design incorporate the actual use conditions of low digital literacy, shared devices, and persons without smartphones, and that the design must not presuppose "smartphone, individual ownership, and high literacy rate" as the baseline. The specific mechanism is a mandatory inclusion impact assessment (IIA), modeled on the environmental impact assessment (EIA) and the data protection impact assessment (DPIA).

Three-tier design of the IIA:

- **L1 — Mandatory IIA at design stage**: any wallet system must complete an IIA before deployment, modeled on the conformity assessment procedure of EAA Directive 2019/882.[^53]
- **L2 — Third-party audit mechanism**: the IIA report must be audited by an independent third party; compliance may not be self-declared by the deploying entity.
- **L3 — Participation rights of affected populations**: the IIA design and audit process must include participation rights for civil society NGOs and affected populations (including representatives of persons with disabilities, persons with dementia, stateless persons, older persons, and migrant workers).

The risk of box-ticking degradation of the IIA must be explicitly stated. Wright & De Hert (2012) *Privacy Impact Assessment* has detailed documentation of this risk in the critical literature on PIAs. When the PIA becomes a procedural compliance document rather than a substantive assessment, its protective effect is substantially reduced.[^54] Diver & Schafer (2017) and Edwards (2018) continue this concern in their subsequent critiques of the DPIA.[^55] The three anti-corruption safeguards of the present paper (mandatory public disclosure, third-party audit, and participation rights for affected populations) constitute partial mitigation, and it is acknowledged that no single mechanism can confer complete immunity. The probable ultimate backstop is legal consequences: when an IIA fails seriously and leads to exclusion, victims may pursue state accountability through administrative litigation or constitutional petition.

### § 5.5 Severity Spectrum of the "Structural Deprivation of Citizenship" Formulation

When the state fails to fulfil the three-tier guarantee obligations, the consequences of state non-compliance occupy three tiers on a spectrum of severity:

- **Most severe tier**: "structural deprivation of citizenship"—corresponding to arbitrary deprivation of nationality (UN Human Rights Council Resolution 20/5, 2012; Resolution 32/5, 2016; UN A/HRC/25/28, 2013; these are non-binding resolutions but constitute authoritative interpretive guidance in human rights law). This formulation should be applied only to extreme circumstances such as the Aadhaar death cases and the Windrush denationalization cases.[^56]
- **Middle tier**: "accumulated exclusion"—applicable to comprehensive exclusion resulting from repeated failures, such as the overall Aadhaar PDS system's improved leakage but rising exclusion error, and the UK Universal Credit system's systemic exclusion of persons without digital literacy.
- **Lesser tier**: "administrative invisibility" (terminology from Alston 2019)—applicable to systemic reduction in administrative visibility that has not reached the level of deprivation of citizenship, such as Australia's Robodebt or the exclusionary design of Japan's My Number Card for older persons.

When analyzing each failure case, downstream writers should first determine the tier of severity before selecting their terminology, so as to avoid describing all cases with the strongest-tier formulation, which would dilute linguistic precision.

## § 6. Decomposing the Three Presuppositions of Wallet Engineering: Shared Devices and Delegated Authority

Sections 3 and 5 establish the fundamental-rights standing of inclusion from both normative and empirical angles; the present section uses the two boundary scenarios of shared devices and delegated authority to demonstrate, in the inverse direction, that the mainstream presuppositions of wallet engineering themselves require examination as a normative bias.

The mainstream presuppositions of wallet engineering consist of a three-part structure: personal ownership of the device, individual identification (individual biometric or behavioral binding), and an individually held private key. Shared-device scenarios primarily break down the binding of (1) and (2); delegated-authority scenarios primarily break down the binding of (3) with the "acting subject." These two scenarios reflect the daily reality of at least one billion persons globally and are not marginal phenomena.[^57]

### § 6.1 Shared-Device Scenarios

The GSMA 2024 report finds that 23 percent of women in Sub-Saharan Africa and 19 percent of women in South Asia are non-owner shared users; ITU 2024 estimates that at least 2.6 billion people remain unconnected globally, with a substantial proportion of access patterns achieved through shared household use.[^58] These figures mean that shared-device use cannot, on normative grounds, be treated as a "marginal use scenario."

Wyche and colleagues, in their ICTD/CHI research series, document the reality of shared-device use in households on the periphery of Nairobi, Kenya: "Sharing this with the family" (2018) shows the normative scenario of a single smartphone serving as a communication device for a household of six—a scenario in which the wallet design's "individual ownership" presupposition directly conflicts with prevailing social structures.[^59] Sambasivan and colleagues, in "Privacy is not for me, it's for those rich women" (*SOUPS*, 2018), document that South Asian women's mobile phone use is subject to supervision by male household members—a context in which the individual-identification and individual-private-key presuppositions not only exclude but also constitute an extension of gendered power structures.[^60] Donner (2015), *After Access*, provides a systematic analysis of sharing patterns in the "after access" phase (actual use following the acquisition of mobile connectivity).[^61]

### § 6.2 Delegated-Authority Scenarios

WHO 2024 estimates the global population living with dementia at 55 million (more than 60 percent in low- and middle-income countries).[^62] The prevalence of dementia among persons aged 65 and above in Taiwan is approximately 7.9 percent, corresponding to a population of more than 300,000 persons living with dementia. Delegated-authority scenarios—including persons with disabilities, persons with dementia, persons who are illiterate, and child guardianship—require special design in wallet engineering both normatively and practically.

The legal basis for delegated authority carries different bearing structures across legal systems: the Anglo-American common-law power of attorney, the civil-law *Vollmacht*, and Taiwan's 2019 reform of the Civil Code introducing mandated guardianship (*yì-dìng jiān-hù*) (Civil Code Art. 1110).[^63] However, wallet engineering does not provide design primitives aligned with these legal frameworks. When an older person living with dementia has TW DIW used by a family member as a proxy in order to claim long-term care benefits, the family member's proxy use is classified in engineering terms as "unintended use" rather than as legitimate delegated authority.

CRPD Art. 12 (Equal recognition before the law) and General Comment No. 1 (2014) explicitly require the progressive abolition of substituted decision-making and its replacement with supported decision-making: persons with disabilities retain full legal capacity; a "supporter" assists with decision-making rather than replacing it.[^64] This principle poses a direct challenge to wallet engineering, as the engineering realization of supported decision-making is not yet complete. Taiwan's 2019 Civil Code reform introducing mandated guardianship is a partial response to this international trend, but engineering implementation has not kept pace.

### § 6.3 Engineering Corrections to the Three Presuppositions

Sub-Argument 4 advances three specifically engineerable requirements for the concretization of "institutional guarantees":

1. **Mandatory IIA at design stage**, modeled on the conformity assessment procedure of EAA Directive 2019/882.
2. **Standardization of multi-tenant plus delegated key custody**: W3C DID Core 1.0 and the EUDI Wallet ARF already provide some relevant primitives,[^65] but the simultaneous legal-engineering construction of "household delegation" has not been completed.
3. **Auditability of the "delegation chain"**: the delegation relationship among household members, institutions, guardians, and social workers must be simultaneously verifiable in law and in engineering.

The absence of any of these three elements means that inclusion-by-design has not been achieved.

### § 6.4 Handling Counter-Arguments

The first counter-argument maintains that smartphone ownership rates are continuously rising (GSMA 2024 global: 73 percent), and that shared-device scenarios will naturally disappear within five to ten years and therefore should not be treated as a core design constraint.[^66] The response of the present paper is: GSMA longitudinal data show that sharing rates are declining far more slowly than ownership rates are growing, and furthermore that the population of persons with disabilities or dementia is growing simultaneously, such that the scale of delegated-authority requirements will not diminish as smartphone ownership increases. WHO 2024 projects that the global population living with dementia will grow from 55 million to 139 million by 2050.[^67]

The second counter-argument maintains that wallets already have multi-tenant designs (such as the multi-profile specification of EUDI Wallet ARF 2024), meaning that shared-device problems have been partially resolved by engineering solutions. The response of the present paper is: the multi-tenant specification exists but is extremely immature in implementation; the mid-term evaluation reports from the EUDI Wallet large-scale pilots (POTENTIAL, NOBID, EWC, DC4EU) for 2024–2025 have not yet made public implementation verification of "multi-tenant plus cross-household delegation."[^68]

The third counter-argument maintains that delegated-authority scenarios should be handled through guardianship law, and that wallet engineering should not reinvent the legal framework. The response of the present paper is: the legal frameworks (power of attorney, mandated guardianship) already exist; the problem is that wallet engineering does not provide design primitives aligned with these legal frameworks. Engineering is not reinventing law; its task is to encode the conditions of existing law as auditable cryptographic processes.

The fourth counter-argument maintains that overly strict autonomy requirements for persons with disabilities or dementia would create the reverse problem of "excessive paternalism"; the CRPD Art. 12 supported decision-making principle may directly conflict with delegated authority.[^69] The response of the present paper is: supported decision-making and substituted decision-making belong to different domains; the former is "assisting the person in their decision," the latter is "deciding on behalf of the person." What CRPD abolishes is the latter, not the former. What wallet engineering needs to align with is the supporter structure of supported decision-making, not the abolition of delegation.

## § 7. Three-Tier Concrete Policy Provisions

Section 5 established the legal basis of the state's three-tier guarantee obligations; Section 6 reinforced the necessity of institutional guarantees through counter-examples; the present section synthesizes concrete policy provisions, including an implementation roadmap and political resistance analysis.

### § 7.1 Procedural Guarantee Provisions

**P1 — Statutory obligation clause** (timeline: 12–24 months): all civic proof services must not offer only a wallet interface; at least one non-wallet alternative path (paper-based, NFC card, customer service, delegated authority, or stamp authorization) must be simultaneously available. The legislative path is amendment of administrative procedure law or specialized statute in each country's parliament. The EU legal basis is EAA Directive 2019/882 plus EU EECC Directive 2018/1972; the recommended path for Taiwan is amendment of the *Electronic Signatures Act* or enactment of a *Digital Identity Services Act*. Political resistance stems from ministerial "digital-first" positions and cost pressures, but the EAA Directive precedent already exists.

**P2 — Equivalence clause** (timeline: 24–48 months): alternative paths must be legally equivalent to the wallet (formal equivalence) and must not be discriminatory in substantive efficiency (substantive equivalence). Substantive equivalence must incorporate the following quantitative indicators: processing time not to exceed 1.5 times the wallet path; rejection rates not to exceed 1.5 times the wallet path. Legislation must include justiciability provisions enabling violations to be remedied through administrative litigation. Political resistance stems from the specific figures of the quantitative indicators (the 1.5x figure is a policy recommendation that must undergo legislative negotiation).

**P3 — Anti-discrimination clause** (timeline: 12–36 months): alternative paths must not carry additional fees or processing-time discrimination. Accompanying complaint channels are each country's data protection authority (DPA) plus administrative courts.

### § 7.2 Substantive Guarantee: Three-Track Parallel Approach

**Self-sovereign identifier (W3C DID) track** (timeline: 24–60 months): W3C DID Core 1.0 plus Verifiable Credentials 2.0 as the standards starting point, developing a trust framework that does not depend on a nationality root.[^70] The technical layer is mature but the governance layer is unsettled. OpenWallet Foundation 2024 governance documents provide a partial blueprint.[^71]

**UNHCR / IOM / civil society NGO co-led trust framework** (timeline: 36–72 months): for legally stateless persons, the UNHCR Digital Identity for Refugees programme should progressively transition from "centralized BIMS" toward "user-led plus W3C DID." Current coverage is approximately 11.4 million persons, but the "user-led" component is minimal. IOM Migration Governance Indicators provide another track.[^72]

**City-level sanctuary card backfill** (timeline: 12–48 months): positioned as "city-level backfill where federal protection is insufficient"; stable template status cannot be established. The ICE data-access pressure on NYC IDNYC from 2017 to 2020 constitutes a concrete warning about political sustainability.[^73]

Six-tier cryptographic baseline for "minimum viable civic proof": (1) DID, plus (2) Verifiable Credentials, plus (3) revocation mechanism, plus (4) trust framework, plus (5) threshold cryptography (multi-party key custody), plus (6) secure transport layer. Each tier has a standards starting point that can be engineered.

### § 7.3 Institutional Guarantee: Three-Tier IIA Design

**L1 — Mandatory IIA at design stage** (timeline: 24–48 months): modeled on the conformity assessment procedure of EAA Directive 2019/882; all wallet systems issued or certified by the state must submit an IIA report before deployment. The recommended path for Taiwan is administrative order issued by the Ministry of Digital Affairs, with execution by the Ministry of the Interior, Ministry of Health and Welfare, Ministry of Labor, and Ministry of Education according to their respective jurisdictions.

**L2 — Third-party audit mechanism** (timeline: 36–60 months): the IIA report must be audited by an independent third party. The EIA audit institution may serve as reference, but the precedent of EIA's "rubber-stamp" tendencies in Taiwan must be avoided. The Treasury Board of Canada's 2019 *Directive on Automated Decision-Making* provides a more mature third-party audit model.[^74]

**L3 — Participation rights of affected populations** (timeline: 36–72 months): the IIA design and audit process must include participation rights for civil society NGOs and affected populations. Following the CRPD principle of "Nothing About Us Without Us," this includes representatives of persons with disabilities, persons with dementia, stateless persons, older persons, and migrant workers.[^75]

**Three anti-corruption safeguards versus box-ticking degradation**: mandatory public disclosure of the IIA report, third-party audit, and participation rights for affected populations together constitute three anti-corruption safeguards that are partial mitigation and cannot confer complete immunity. The probable ultimate backstop is legal consequences: when an IIA fails seriously and leads to exclusion, victims may pursue state accountability through administrative litigation or constitutional petition.

### § 7.4 Political Resistance Analysis

Three sources of political resistance each follow a distinct logic:

**Ministerial interests**: the "digital-first" position (such as Taiwan's Ministry of Digital Affairs having historically promoted TW DIW through a highly digitalized path) will resist the P1 statutory obligation clause. Coordination mechanisms: cross-ministerial coordination plus civic pressure groups.

**Vendor interests**: wallet vendors and systems integrators will resist the substantive equivalence quantitative indicators (P2) and mandatory IIA (L1) because these increase deployment costs. Coordination mechanism: joint liability clauses for vendors (to be articulated in conjunction with the three-track parallel policy in article 14 on the cross-jurisdictional redress gap).

**Open-source community**: the decentralized wallet community (Polygon ID, ENS, Worldcoin, and similar) will resist the P1 statutory obligation clause (which would be perceived as regulation of open-source components), but has structural support for the substantive guarantee W3C DID track. Coordination mechanism: low regulation for Tier 3 intermediary vendors (pure communication relay components); high accountability for Tier 1 providers.

## § 8. Process Tracing of Failure Cases

The present section conducts process tracing across five failure cases that have occurred, each of which first receives its corresponding exclusion classification, then traces key nodes in the redress process, and finally identifies implications for the policy synthesis and the specific tier of the three-tier obligation violated.

**Case One — India's Aadhaar PDS deaths (2017–2024).** Following mandatory Aadhaar linkage to PDS food rations, some beneficiaries were denied access to distribution points due to Aadhaar linkage errors, biometric authentication failure, and administrative negligence, and ultimately died of starvation.[^76] The Khera series has documented, cumulatively through 2024, approximately 30 such deaths in Jharkhand, Bihar, and Karnataka. Corresponding exclusion classifications: (c) documentation exclusion and (d) institutional exclusion. Severity spectrum tier: "structural deprivation of citizenship" (most severe tier). Three-tier obligation violations: procedural (no effective alternative path), substantive (no "minimum viable civic proof" for de facto persons without ID), and institutional (no IIA)—all three tiers violated. Policy synthesis implications: mandatory linkage design must be accompanied by mandatory IIA and mandatory alternative paths; a design in which access to food depends on a single IT system is itself a violation of institutional guarantees. The "net inclusion benefit" conclusions of the Banerjee/Duflo 2020 and Muralidharan 2016 RCTs hold at the level of their outcome variables (leakage improvement and distribution efficiency improvement), but are not mutually exclusive with the "tail exclusion leading to death" outcome variable of the present case; both arguments coexist.[^77]

**Case Two — UK Windrush (2018).** The Home Office hostile environment policy (from 2012) required identity verification at every stage of housing, employment, health care, and education, causing long-term lawful Commonwealth residents in the UK to be classified as illegal residents.[^78] Corresponding exclusion classification: (c) documentation exclusion. Severity spectrum tier: "structural deprivation of citizenship" (most severe tier). Three-tier obligation violations: procedural (no effective alternative path to recognize the historical identity of the Windrush generation) and substantive (no "minimum viable civic proof" for persons who have lost their documents). The UK Home Office (2020) *Windrush Lessons Learned Review* determined that this policy caused "structural discrimination."[^79] Policy synthesis implications: the Windrush case directly demonstrates the consequences of comprehensive failure across all three obligation tiers, and the government's compensation mechanism remained incomplete as of 2024; procedural redress also remained insufficient.

**Case Three — India's PDS overall system.** Following mandatory Aadhaar linkage to the PDS, leakage improved (Banerjee et al. RCT) but exclusion error increased (Khera series).[^80] Corresponding exclusion classification: (d) institutional exclusion. Severity spectrum tier: "accumulated exclusion" (middle tier). Three-tier obligation violations: institutional guarantee (no IIA, no third-party audit, no participation rights for affected populations). Policy synthesis implications: this case constitutes the most direct evidence for the necessity of IIA; had a mandatory IIA been conducted at the design stage of mandatory linkage, the rising trend in exclusion error would have been flagged.

**Case Four — UK Universal Credit (2017–present).** The Department for Work and Pensions' fully digitalized welfare application design ("digital by default") excludes persons without digital literacy.[^81] Corresponding exclusion classification: (b) literacy exclusion. Severity spectrum tier: "accumulated exclusion" (middle tier). Three-tier obligation violations: procedural (alternative paths exist but carry discriminatory additional conditions) and institutional (no IIA). Policy synthesis implications: the "digital by default" design violates the substantive equivalence requirement of the P2 equivalence clause; the processing time for alternative paths (telephone and paper-based) is significantly longer than that for the digital path, and rejection rates are higher.

**Case Five — Taiwan's civic identity services for persons with disabilities or dementia.** The mobile natural-person credential wallet presupposes individual ownership; persons with disabilities or dementia in practice rely on family members to act as proxies.[^82] Corresponding exclusion classifications: (b) literacy exclusion and delegated authority. Severity spectrum tier: "administrative invisibility" (lesser tier). Three-tier obligation violations: institutional guarantee (no IIA, no multi-tenant design, no alignment with supported decision-making). Policy synthesis implications: CRPD Art. 12 plus Taiwan's 2019 Civil Code mandated guardianship reform provide the legal basis, but wallet engineering has not aligned with them; this case directly demonstrates the necessity of the three specifically engineerable requirements of inclusion-by-design (IIA, multi-tenant, and auditable delegation chain).

The common pattern across the five cases is: the failures constitute structural consequences of the misalignment between mainstream wallet engineering presuppositions and existing institutions, and not individual events. From the most severe tier of Aadhaar deaths to the lesser tier of Taiwan's experience with persons with disabilities, all three tiers of the severity spectrum require simultaneous three-tier state obligation guarantees.

## § 9. Counterfactual Stress Tests

The present section uses four counterfactual scenarios to stress-test the policy paths of Section 7.

**CF1 — A person aged 84 living with dementia in Taipei, plus a daughter acting as delegated authority.** A person aged 84 living with dementia in Taipei has their use of the "mobile natural-person credential wallet" managed by their 65-year-old daughter for processing long-term care benefit claims, pension receipt, and health insurance card renewal. When the daughter is hospitalized for three months, how does the older person maintain basic identity verification during that period? Currently available alternative paths include: (i) paper-based long-term care application (processing time approximately 4–6 weeks); (ii) requesting assistance from a social worker; and (iii) delegating another family member as proxy (requires mandated guardianship registration). Policy synthesis response: this case directly implicates the three specifically engineerable requirements of Section 6 (IIA, multi-tenant, and auditable delegation chain); the current architecture has alternative paths under procedural guarantee P1 (paper-based and customer service) but substantive equivalence (P2) is insufficient (processing time is significantly longer), and institutional guarantee L1 IIA has not been executed. The improvement path is: simultaneous legal-engineering construction of mandated guardianship registration and wallet engineering (CRPD Art. 12 plus Taiwan Civil Code Art. 1110).[^83]

**CF2 — A Rohingya stateless person holding a UNHCR BIMS digital credential, rejected within Bangladesh.** A Rohingya stateless person holding a UNHCR BIMS digital credential is rejected by a wallet verifier within Bangladesh (such as food ration distribution, SIM-card real-name registration, or cross-border remittance KYC). The redress paths currently available to the victim include: (i) UNHCR case management (humanitarian assistance in nature, not legal redress); (ii) the Bangladesh National Human Rights Commission (without enforcement authority); (iii) international refugee legal aid organizations (political advocacy in nature). Corresponding exclusion classification: (c) documentation exclusion (special statelessness scenario). Severity spectrum tier: "structural deprivation of citizenship" (extreme tier; the preconditions are already missing). Policy synthesis response: this case highlights the urgency of "minimum viable civic proof" for legally stateless persons, but the framework must be aligned with 1954 Convention Art. 27/28 and must establish the dual safeguard of "non-substitution-for-nationality-acquisition plus residential-status upgrade clause." The current UNHCR Digital Identity for Refugees programme covers 11.4 million persons, but the "user-led" component is minimal; a parallel review is warranted alongside OpenWallet Foundation governance and W3C VC/DID specifications.[^84]

**CF3 — Taiwan DIW excludes 80,000 persons with dementia, plus IIA follow-up treatment.** Taiwan enacts legislation recognizing the right of access to civic proof as a fundamental right and requires the Ministry of Digital Affairs to conduct an inclusion impact assessment. When the IIA report indicates that TW DIW excludes more than 80,000 older persons living with dementia (estimated using WHO 2024 combined with Taiwan's 7.9% prevalence rate among persons aged 65 and above), how should the system be corrected? Comparison of the advantages and disadvantages of three paths:

- **Path A (legislative)**: amend the *Electronic Signatures Act* or enact a *Digital Identity Services Act*, incorporating IIA and alternative paths into law. Advantages: high stability, strong justiciability. Disadvantages: 24–48 month timeline, significant political resistance.
- **Path B (administrative order)**: Ministry of Digital Affairs issues administrative order; Ministry of the Interior and Ministry of Health and Welfare execute. Advantages: 6–12 month timeline, flexible. Disadvantages: can be revoked by a change of government, weak justiciability.
- **Path C (administrative guidance)**: Ministry of Digital Affairs issues "best practices guidance." Advantages: 3–6 month timeline, no political cost. Disadvantages: no binding force; ministries may comply selectively.

The present paper recommends a dual-track B-plus-A approach: B for short-term implementation of mandatory IIA and mandatory alternative paths; A for medium-term legislation recognizing the right of access to civic proof as a fundamental right. The estimate of 80,000 persons constitutes a policy recommendation figure requiring corroboration from Ministry of the Interior data.[^85]

**CF4 — EUDI Wallet mandatory launch in Bulgaria, with incomplete alternative paths.** The EUDI Wallet enters mandatory operation in 2027, but a certain EU member state (such as Bulgaria) has not provided complete paper-based alternative paths. Affected citizens seek simultaneous redress through the ECtHR and EU Commission infringement procedures. The ECtHR path invokes Art. 8 (privacy), Art. 14 (non-discrimination), and Protocol 1 Art. 1 (property rights, if welfare claims are involved). The EU Commission infringement path proceeds against the member state for failure to transpose or fully implement EAA Directive 2019/882 and EU EECC Directive 2018/1972.[^86] The two paths differ significantly in timeline and remedy: the ECtHR averages 5–7 years but offers individual-case relief; infringement proceedings average 2–4 years and may produce cross-national legal reform. This case directly validates the necessity of justiciability provisions in the P1 statutory obligation clause; without justiciability provisions, equivalence degrades to a political commitment.

## § 10. Connections with Dissertation Chapters and the Article Sequence

The present paper forms the core of Chapter 14 (the policy agenda chapter) of the dissertation, specifically addressing the §14.4 segment on civic proof inclusion rights. The connections with other dissertation chapters and the article sequence are as follows:

Connection with dissertation Ch. 12 (procurement political economy chapter): the "mandatory alternative paths, quantitative equivalence indicators, and IIA" of the present paper share a structural isomorphism with Ch. 12's "translating rights floors into acceptance specifications through procurement language"; both attempt to translate normative rights into engineering-verifiable conditions.

Connection with dissertation Ch. 10 (platform presentation layer): Sub-Argument 4's decomposition of the wallet's three presuppositions directly connects with Ch. 10's wallet / OS / browser as gatekeeper. The argument that Tier 1 providers (Apple Wallet, Google Wallet, national EUDI Wallet issuers) bear strict liability plus mandatory liability insurance is supplemented by the present paper's conclusion that they must additionally "conduct IIA."

Lateral connections with the article sequence:

- Connection with article 01 (accountability without real-name identification): the special application of accountable pseudonymity to inclusion scenarios, in particular the accountability structure for situations in which persons with disabilities or dementia are represented by family member proxies; when the proxy violates fiduciary duty, how does the threshold opening mechanism apply?
- Connection with article 02 (civic proof concept positioning): the concrete implementation of civic proof's four conditions (anonymity, unlinkability, verifiability, accountability) at the level of inclusion; how is unlinkability maintained in shared-device scenarios, and how is accountability allocated in delegated-authority scenarios?
- Connection with article 03 (digital association empirical test): the special application of the three walls W1 (persistent pseudonymity), W2 (verifiable group boundaries), and W3 (internal accountability) to inclusion scenarios; how can the community participation of organizations for persons with dementia simultaneously satisfy the three walls and supported decision-making?
- Connection with article 14 (cross-jurisdictional redress gap): the cross-border redress gap and "minimum viable civic proof" for stateless persons are addressed jointly; the substantive guarantee tier of the three-track parallel policy synthesis in that article directly feeds into Sub-Argument 5 of the present paper.
- Connection with article on civic AI agent delegation limits: can delegated authority in the civic context be an AI agent? The supported decision-making framework plus auditable delegation chain of Section 6 directly feeds into that article.
- Connection with the article on wallet as essential facility: the essential facility designation of Tier 1 providers plus mandatory IIA constitutes the policy-concretization version of the arguments in that article.

## § 11. Honesty Boundary and Open Problems

The present paper's argument requires an explicit statement of its limits.

**Differential argument strength**: induction (Section 3, strong); deduction (Section 4, strong, but the scholarly standing of "precursor right" is a doctrinal inference); abduction (Section 5, medium-strong, but the three-tier classification carries different bearing structures across legal systems); counter-example (Section 6, medium); policy synthesis (Section 7, advisory; quantitative indicators lack empirical sources).

**Temporal limitations**: the EUDI Wallet large-scale pilots' 2025 mid-term evaluations, subsequent UNHCR Digital Identity for Refugees reports, and changes to Taiwan's mobile natural-person credential wallet policy will alter the evidentiary basis of the present paper within the next two to three years.

**Geographic limitations**: the evidence of the present paper focuses primarily on Taiwan, the EU, the UK, India, Kenya, Sub-Saharan Africa, and South Asia; coverage of Latin America, the Middle East, and Southeast Asia (outside Singapore) is limited.

**Specific issues**: the concrete cryptographic baseline design of "minimum viable civic proof" for legally stateless persons and de facto persons without ID separately has not yet been empirically verified; the UNHCR Digital Identity for Refugees programme's coverage of 11.4 million persons is a centralized BIMS, with the "user-led" component being minimal.

**Principal open problems**:

- (Q1) Is the concrete cryptographic baseline of "minimum viable civic proof" the same for legally stateless persons and de facto persons without ID?
- (Q2) Is delegated authority in wallet design simply an extension of delegated authority as ordinarily understood, or does it require new cryptographic primitives (such as threshold delegation)?
- (Q3) How can the legal status of "household delegation" be coordinated with the "multi-tenant" design of wallets?
- (Q4) Can the box-ticking degradation of IIA be completely immunized through three anti-corruption safeguards?
- (Q5) Can the legal sustainability of city-level sanctuary cards under changes in the federal administration be standardized?
- (Q6) Does the formulation "structural deprivation of citizenship" require recognition through a new international treaty?
- (Q7) Will the NIST FRVT 2022 algorithmic false-match problem accumulate sufficient cases between 2027 and 2030 to be elevated to an independent exclusion category?
- (Q8) Do the "net inclusion benefit" conclusions of Banerjee et al. 2020 RCT still hold when the outcome variable is changed to "tail exclusion leading to death"?
- (Q9) What is the engineering path for aligning CRPD Art. 12 supported decision-making with Taiwan's 2019 mandated guardianship law reform?
- (Q10) What is the legal justiciability of the quantitative indicators of the "equivalence clause" (1.5x processing time, 1.5x rejection rate)?

**Interview needs**: UNHCR Statelessness Section; Hung-Dao Elderly Welfare Foundation / Taiwan Alzheimer's Disease Association; Taiwan migrant worker service organizations (TIWA); city-level sanctuary card program administrators (NYC IDNYC, SF Municipal ID); World Bank ID4D team; W3C VC Working Group; OpenWallet Foundation; ITU-T Focus Group on Digital Identity; EU EUDI Wallet large-scale pilots coordinators.

## § 12. Conditional Academic Conclusion

The core proposition of the present paper is that when civic proof becomes a de facto necessary gateway to democratic infrastructure, the right of access to it carries a claimed scholarly standing as a "precursor right at the human-rights level" (at the Level 2 institutional entitlement tier); the present paper does not claim that a codified treaty-right status has been established (Level 3), and instead uses Marshall's three-tier civic-rights structure and UDHR Art. 6 / ICCPR Art. 16 legal personhood rights as analogical anchors. The state's three-tier guarantee structure for Level 2 institutional obligations (procedural, substantive, and institutional), when any tier is absent, may constitute the corresponding state on the three-tier severity spectrum of "structural deprivation of citizenship / accumulated exclusion / administrative invisibility"; the specific severity depends on each country's constitutional interpretation, administrative capacity, and availability of alternative paths. The three presuppositions of wallet engineering (individual ownership, individual identification, and individual private key) must themselves be examined as a normative bias; shared devices and delegated authority cannot, on normative grounds, be treated as marginal scenarios. A mandatory inclusion impact assessment at the design stage is the most effective preventive mechanism, but carries a risk of box-ticking degradation, requiring three anti-corruption safeguards (mandatory public disclosure, third-party audit, and participation rights for affected populations). "Minimum viable civic proof" for stateless persons must be handled separately for legally stateless persons and de facto persons without ID, and must be aligned with 1954 Convention Art. 27/28 and the UNHCR 2014 *Handbook*, establishing the dual safeguard of "non-substitution-for-nationality-acquisition plus residential-status upgrade clause."

If these propositions hold, the reasonable path for the policy synthesis is three-tier parallel provisions: procedural guarantee P1 statutory obligation, P2 quantitative equivalence indicators (processing time 1.5x, rejection rate 1.5x), and P3 anti-discrimination clause; substantive guarantee W3C DID track, UNHCR/IOM/NGO trust framework, and city-level sanctuary card three-track approach; institutional guarantee IIA three-tier design (L1 mandatory design, L2 third-party audit, L3 participation rights for affected populations). Short-term implementation should begin with procedural guarantee P1 (timeline: 12–24 months); medium-term progress should advance the substantive guarantee W3C DID track and institutional guarantee IIA L1 (timeline: 24–48 months); long-term progress should advance the substantive guarantee UNHCR/IOM/NGO trust framework and institutional guarantee L2/L3 (timeline: 36–72 months).

This conclusion is conditional. Its validity depends on: (i) constitutional interpretation in each country recognizing the right of access to civic proof as a constitutional fundamental right; (ii) the UNHCR Digital Identity for Refugees programme transitioning from centralized BIMS toward "user-led plus W3C DID"; (iii) progress in the standardization of wallet engineering's multi-tenant plus delegated key custody; and (iv) the willingness of major wallet vendors (Apple, Google, and national EUDI Wallet issuers) to accept a legal framework of joint liability. The failure of any of these assumptions would substantially modify the policy paths.

**Contribution to the dissertation**: establishes the core of the §14.4 segment of Chapter 14 (policy agenda chapter), providing the inclusion dimension normative basis for the three existing policy topics of federated trust-list alliance, Indo-Pacific demonstration grants, and procurement sandbox plus supplier diversity.

**Contribution to democratic theory**: extends "civic rights" from Marshall's three-tier structure to a four-tier structure of "civic rights plus precursor right," and extends Sen's capability approach of "substantive capabilities" to digitalized public life.

**Guidance for engineering implementation**: wallet vendors need, at the system design stage, to address the correction requirements for the three presuppositions (ownership, identification, and key custody), in particular the three specifically engineerable requirements of multi-tenant, delegated key custody, and auditable delegation chain.

**Key warning for Taiwanese readers**: under the current architecture, more than 300,000 older persons living with dementia, approximately 5,000 migrant workers whose ARCs have been withheld, and a substantial number of older persons who have long failed to claim their mobile natural-person credentials, already constitute a state of "administrative invisibility." As TW DIW enters mandatory operation across more government services (health insurance, long-term care, pensions, education), this state will escalate to "accumulated exclusion." To change this situation, the government must proactively implement three measures: mandatory IIA, mandatory alternative paths, and the engineering realization of delegated authority.

---

## Revision Note (2026-05-16)

In revision, the present paper explicitly defines precursor right as a **scholarly standing claim and institutional obligation framework** (Level 2 institutional entitlement), without claiming that it has already achieved codified treaty-right status (Level 3 treaty-level human right). The basis for this revision is the civic-proof series Phase 1+2 audit plus two rounds of audit (2026-05-16), with the focus of review being the risk of rights-language overclaim; the specific revision locations include the frontmatter description, §1 core proposition paragraph, §4 chapter introduction and §4.1 final paragraph, and §12 conditional academic conclusion paragraph. The core argumentative skeleton (three-tier guarantee structure, wallet three-presupposition decomposition, IIA three anti-corruption safeguards, dual-safeguard minimum viable civic proof, five failure cases, and four CF stress tests) is unchanged; revisions are limited to precision-enhancement of level-of-standing terminology and conditional formulations. Strong normative phrasings such as "equivalent to" and "will constitute" in the original version have been revised to the conditional formulations "carries a claimed scholarly standing as" and "may constitute on the severity spectrum."

## References

[^1]: Regulation (EU) 2024/1183 of the European Parliament and of the Council of 11 April 2024 amending Regulation (EU) No 910/2014 (eIDAS 2.0). OJ L, 30.4.2024. Source level A.

[^2]: World Bank ID4D Global Dataset 2024 + ID4D Practitioner's Guide 2024. Source level A.

[^3]: UNHCR Global Trends 2023 + Statelessness Statistics 2024. UNHCR Refworld. Source level A.

[^4]: ITU. *Measuring Digital Development: Facts and Figures 2024*. International Telecommunication Union. Source level A.

[^5]: GSMA Mobile Gender Gap Report 2024 + Mobile Internet Connectivity Report 2024. Source level A.

[^6]: WHO Global Dementia Statistics 2024. World Health Organization. Source level A.

[^7]: Marshall, T.H. (1950). *Citizenship and Social Class*. Cambridge University Press. Source level A.

[^8]: Dissertation draft Ch. 2, §2.3 "Normative Conditions: anonymity / unlinkability / verifiability / accountability" (civic-proof-dissertation/dissertation-outline.md). Source level A (internal document).

[^9]: Donner, J. (2015). *After Access: Inclusion, Development, and a More Mobile Internet*. MIT Press. Source level A.

[^10]: GSMA Mobile Gender Gap Report 2024, ch. 3, Sub-Saharan Africa and South Asia statistics. Source level A.

[^11]: ITU 2024, same source as note 4, ch. 4 unconnected populations. Source level A.

[^12]: Wyche, S., et al. (2018). "Sharing this with the family: Mobile phone use in rural Sub-Saharan Africa." *ACM CHI / ICTD*. Source level A.

[^13]: Sambasivan, N., et al. (2018). "Privacy is not for me, it's for those rich women." *SOUPS (Symposium on Usable Privacy and Security)*. Source level A.

[^14]: WHO 2024, same source as note 6. Source level A.

[^15]: Taiwan Alzheimer's Disease Association 2024 prevalence survey + WHO 2024 global estimates. Source level A/B.

[^16]: Hung-Dao Elderly Welfare Foundation family caregiver feedback reports 2023–2024 + Taiwan Alzheimer's Disease Association family group reports 2024. Source level B.

[^17]: NIST Face Recognition Vendor Test (FRVT) 2022. National Institute of Standards and Technology. Source level A.

[^18]: Eubanks, V. (2018). *Automating Inequality*. St. Martin's Press; Alston, P. (2019). UN A/74/493, *Digital welfare state*; Ranchordas, S. (2022). Empathy in the Digital Administrative State. *Duke Law Journal*, 71(6). Source level A.

[^19]: UNHCR 2024, same source as note 3. Source level A.

[^20]: Convention relating to the Status of Stateless Persons (1954), Arts. 27, 28; Convention on the Reduction of Statelessness (1961); UNHCR (2014). *Handbook on Protection of Stateless Persons*. HCR/GS/12/04. Source level A.

[^21]: UK Home Office (2020). *Windrush Lessons Learned Review* by Wendy Williams. Source level A.

[^22]: UK Parliamentary report on Windrush 2018 + UK Home Office (2020), same source as note 21. Source level A.

[^23]: UNHCR Digital Identity for Refugees programme documentation 2018–2024. Source level A.

[^24]: Khera, R. (2019). Aadhaar failures: Series in *Economic and Political Weekly* on PDS exclusion and Aadhaar-linked deaths. Source level A.

[^25]: Khera, R. (2019), same source as note 24. Source level A.

[^26]: Australian Royal Commission into the Robodebt Scheme (2023). Final Report. Source level A.

[^27]: TIWA (Taiwan International Workers' Association) 2024 case statistics + Taiwan International Workers' Association report. Source level B.

[^28]: *Volkszählungsurteil* (BVerfGE 65, 1, 1983). Bundesverfassungsgericht. Source level A.

[^29]: Marshall, T.H. (1950), same source as note 7. Source level A.

[^30]: International Covenant on Civil and Political Rights (ICCPR, 1966), Art. 16. Source level A.

[^31]: Sen, A. (1999). *Development as Freedom*. Oxford University Press; Sen, A. (2009). *The Idea of Justice*. Belknap Press. Source level A.

[^32]: Nussbaum, M. (2011). *Creating Capabilities: The Human Development Approach*. Belknap Press. Source level A.

[^33]: Anderson, E. (1999). What Is the Point of Equality? *Ethics*, 109(2), 287–337. Source level A.

[^34]: Pettit, P. (1997). *Republicanism: A Theory of Freedom and Government*. Oxford University Press. Source level A.

[^35]: Young, I.M. (2000). *Inclusion and Democracy*. Oxford University Press. Source level A.

[^36]: Fraser, N. (2007). Special Section: Transnational Public Sphere. *Theory, Culture & Society*. Source level A.

[^37]: Habermas, J. (1962/1989). *The Structural Transformation of the Public Sphere* (*Strukturwandel der Öffentlichkeit*). MIT Press; Habermas, J. (1992 Suhrkamp / 1996 MIT). *Faktizität und Geltung* / *Between Facts and Norms*. MIT Press. Source level A.

[^38]: Alston, P. (2019). UN A/74/493, same source as note 18. Source level A.

[^39]: Banerjee, A., & Duflo, E. (2011). *Poor Economics*; Banerjee, A., & Duflo, E. (2019). *Good Economics for Hard Times*. PublicAffairs. Source level A.

[^40]: Banerjee, A., Duflo, E., Imbert, C., Mathew, S., & Pande, R. (2020). E-Governance, Accountability, and Leakage in Public Programs. *AEA Papers and Proceedings*; Muralidharan, K., Niehaus, P., & Sukhtankar, S. (2016). Building State Capacity: Evidence from Biometric Smartcards in India. *American Economic Review*. Source level A.

[^41]: Posner, E., & Vermeule, A. (2010). *The Executive Unbound*. Oxford University Press. Source level A.

[^42]: Hoffmann, F. (2017). Relational equality (critique of inclusion). Source level A.

[^43]: Lessig, L. (1999). *Code and Other Laws of Cyberspace*. Basic Books. Source level A.

[^44]: Civil-law three-tier concepts: *formelle / materielle Rechtsstaatlichkeit / Schutzpflicht*, derived from Bundesverfassungsgericht case law tradition and German Basic Law theory. Source level A.

[^45]: East Asian constitutionalism's "institutional guarantee" tradition, including extensions from Taiwan Constitutional Court (Council of Grand Justices) Interpretations No. 380 (education rights) and No. 469 (state compensation). Source level A.

[^46]: UN General Comment No. 3 (1990) on the nature of states parties' obligations; No. 9 (1998) on the domestic application of the ICESCR; No. 12 (1999) on the right to adequate food. Source level A.

[^47]: EAA (European Accessibility Act) Directive (EU) 2019/882; EU EECC Directive (EU) 2018/1972 (successor to the Universal Service Directive). Source level A.

[^48]: The quantitative indicators "processing time not to exceed 1.5x, rejection rate not to exceed 1.5x" are policy recommendation figures that must undergo legislative negotiation. Source level A (policy recommendation).

[^49]: UNHCR 2024, same source as note 3. Source level A.

[^50]: UNHCR Digital Identity for Refugees programme, same source as note 23. Source level A.

[^51]: World Bank ID4D 2024, same source as note 2. Source level A.

[^52]: San Francisco Municipal ID program documentation 2009–2024; New York City IDNYC program documentation 2015–2024. Source level A.

[^53]: EAA Directive 2019/882, same source as note 47. Source level A.

[^54]: Wright, D., & De Hert, P. (Eds.). (2012). *Privacy Impact Assessment*. Springer. Source level A.

[^55]: Diver, L., & Schafer, B. (2017). Opening the black box: Petri nets and Privacy Impact Assessments. Source level A.

[^56]: UN Human Rights Council Resolution 20/5 (2012); Resolution 32/5 (2016); UN A/HRC/25/28 (2013), *Human Rights and Arbitrary Deprivation of Nationality*. Source level A.

[^57]: GSMA 2024, same source as note 5; ITU 2024, same source as note 4; WHO 2024, same source as note 6. Source level A.

[^58]: GSMA 2024, same source as note 5; ITU 2024, same source as note 4. Source level A.

[^59]: Wyche et al. (2018), same source as note 12. Source level A.

[^60]: Sambasivan et al. (2018), same source as note 13. Source level A.

[^61]: Donner, J. (2015), same source as note 9. Source level A.

[^62]: WHO 2024, same source as note 6. Source level A.

[^63]: Taiwan Civil Code Art. 1110, mandated guardianship reform (2019 amendment) + Legislative Yuan Gazette 2019, vol. 108, no. 49. Source level A.

[^64]: CRPD General Comment No. 1 (2014) on Equal recognition before the law (Art. 12). UN CRPD Committee. Source level A.

[^65]: W3C Decentralized Identifiers (DIDs) Core 1.0 + Verifiable Credentials Data Model 2.0; EU EUDI Wallet Architecture and Reference Framework 2024. Source level A.

[^66]: GSMA 2024, same source as note 5, ch. 1 ownership statistics. Source level A.

[^67]: WHO 2024, same source as note 6, 2050 projection chapter. Source level A.

[^68]: EU EUDI Wallet large-scale pilots (POTENTIAL, NOBID, EWC, DC4EU) 2024–2025 progress reports. Source level A/B.

[^69]: CRPD General Comment No. 1 (2014), same source as note 64. Source level A.

[^70]: W3C DID Core 1.0 + Verifiable Credentials 2.0, same source as note 65. Source level A.

[^71]: OpenWallet Foundation governance documents 2024. Source level A/B.

[^72]: IOM Migration Governance Indicators + Migration Data Portal 2023–2024. Source level A.

[^73]: NYC IDNYC and ICE data-access dispute 2017–2020 litigation records + NYC Council reports. Source level A/B.

[^74]: Treasury Board of Canada (2019). *Directive on Automated Decision-Making*. Source level A.

[^75]: CRPD "Nothing About Us Without Us" principle + CRPD 2006 legislative history. Source level A.

[^76]: Khera, R. (2019), same source as note 24. Source level A.

[^77]: Banerjee et al. (2020) + Muralidharan et al. (2016), same source as note 40. Source level A.

[^78]: UK Home Office (2020), same source as note 21. Source level A.

[^79]: UK Home Office (2020), same source as note 21. Source level A.

[^80]: Khera, R. (2019), same source as note 24; Drèze, J., & Khera, R. (2017). Recent Social Security Initiatives in India. *World Development*. Source level A.

[^81]: Alston, P. (2019); Eubanks, V. (2018); Ranchordas, S. (2022), same source as note 18. Source level A.

[^82]: Hung-Dao Elderly Welfare Foundation + Taiwan Alzheimer's Disease Association 2024 report, same source as note 16. Source level B.

[^83]: Taiwan Civil Code Art. 1110 + CRPD Art. 12 + General Comment No. 1, same sources as notes 63 and 64. Source level A.

[^84]: UNHCR Digital Identity for Refugees programme, same source as note 23; OpenWallet Foundation, same source as note 71; W3C VC/DID, same source as note 65. Source level A.

[^85]: CF3 estimate based on WHO 2024 + Taiwan's 7.9% dementia prevalence among persons aged 65 and above; Taiwan population aged 65 and above approximately 4.21 million (Ministry of the Interior 2024) → approximately 330,000 older persons living with dementia; estimated percentage using TW DIW approximately 25% (≈ 80,000). Constitutes a policy recommendation figure requiring corroboration from Ministry of the Interior data. Source level B (estimate).

[^86]: EAA Directive 2019/882 + EU EECC Directive 2018/1972 + ECtHR case law (Art. 8, Art. 14, Protocol 1 Art. 1). Source level A.
