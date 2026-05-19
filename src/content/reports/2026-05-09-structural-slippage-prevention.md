---
title: "Age Verification and the Engineering Prevention of Structural Slippage"
description: "The causal mechanism of structural slippage is real (a strong tendency, reversible by countervailing institutional pressure), the shared condition across historical expansion cases is the simultaneous absence of legal constraint and technical binding, and the four prevention tools constitute a cross-tier combination rather than mutually exclusive options. The present article extracts a common pattern from four historical cases (Aadhaar, SSN, eIDAS, China real-name) and two critical counter-examples (Austria sourcePIN, Germany nPA), derives the causal mechanism through a triangulation of path dependency, infrastructure studies, and institutional layering, evaluates the prima facie evidence offered by the EUDI ARF and California AB 1043, responds to two objections from nihilism and public choice, and concludes with a three-tier Minimum Viable Slippage Resistance (MVSR) clause."
pubDate: 2026-05-09
draft: false
tags: [civic-proof, digital-identity, structural-slippage, path-dependency, sunset-clauses, prevention-design]
lang: "en"
aiModel: claude-opus-4-7
aiPipelineStage: published
aiPipelineId: 2026-05-09-structural-slippage-prevention
humanReviewed: false
category: "Digital Identity Policy"
series: civic-proof
seriesOrder: 13
slug: 2026-05-09-structural-slippage-prevention
---

## § 1. Introduction: Between Two Misreadings

Two common misreadings attend the phenomenon of identity-infrastructure expansion. The first treats expansion as "structural inevitability"—since Aadhaar slid from the Public Distribution System (PDS) to SIM cards and electoral rolls, since the Social Security Number (SSN) slid from taxation to a universal identifier, and since eIDAS slid from electronic signatures to wallets and age verification, any centralized identity infrastructure, once built, will expand its uses, and institutional-design tools are merely palliatives that delay the slide. The policy conclusion of this misreading is therapeutic nihilism: either resign oneself to expansion, or refrain from building any identity infrastructure at all. The second misreading treats expansion as "weakness of political will"—if legislators were more prudent, administrative officials more restrained, and civil society more vigilant, slippage would not occur. This misreading demotes a structural problem to a personal one, equating slippage with moral deficiency rather than institutional design failure.

Both misreadings miss the real shape of slippage. The position taken here is: identity infrastructure, once built, exhibits a **strong tendency toward expanded use in the absence of countervailing institutional pressure**. The "strong tendency" is produced by the superimposition of three mechanisms—path dependency, infrastructure invisibility, and institutional layering—but all three mechanisms speak in probabilistic language rather than logical necessity. When any one or more of the following appear—constitutional review, a strong civil-society movement, cross-national comparative pressure, structural constraint through technical affordance—slippage can be reversed. Historical evidence supports both "strong tendency" (expansion in the majority of cases) and "reversibility" (Germany's *Volkszählungsurteil* 1983, the UK repeal of ID cards in 2010, the abolition of the U.S. Civil Aeronautics Board in 1985, Estonia's X-Road maintaining a limited scope).

The argument of this paper is constructed in four tiers. The first tier extracts, from four historical cases, the shared conditions for slippage, and introduces two critical counter-examples—Austria's sourcePIN and Germany's nPA—to correct the original proposition from "no clause written → slippage" to "**no clause written and no technical binding done** is a weak necessary condition for significantly elevated expansion pressure." The second tier derives the causal mechanism of expansion through a triangulation of Pierson's path dependency, Bowker and Star's infrastructure studies, and Mahoney and Thelen's institutional layering, with explicit probabilistic qualifications throughout. The third tier introduces four cross-tier prevention tools (sunset clauses, scope-bound infrastructure, split-key governance, opt-out by design), providing for each the legal or technical rationale, concrete clause examples, failure modes, and combination strategy. The fourth tier evaluates the EUDI Wallet ARF v1.4/1.5 and California AB 1043 (2023) as early empirical candidates, honestly marking their evidential limits: both cases offer prima facie support for the prevention-tool hypothesis, but neither has been deployed for more than three years, which is insufficient relative to the five-to-ten-year time constant of path dependency literature; the current observation of "no slippage" cannot be distinguished from "slippage not yet initiated."

The article closes by responding to two objections. Objection A comes from the nihilist lineage (cypherpunk, anarcho-capitalist, post-Snowden radical skepticism), arguing that if slippage will occur anyway, the rational conclusion is not to build identity infrastructure at all; the response deploys normative argument (Anderson's private government, Habermas's infrastructure as public good, SSI/ZKP coverage limitations on low-end devices). Objection B comes from the public-choice school (Buchanan–Tullock, Niskanen, Olson), arguing that sunset clauses will be extended under political pressure and that the PATRIOT Act is the canonical counter-example; the response deploys empirical argument (Australia's 38% automatic-lapse rate, layered defense combinations, genuine sunset abolition cases). The two objections belong to different levels of reasoning, and responses must be correspondingly stratified; conflating the levels produces logical error.

## § 2. The Expansion Trajectory of Four Historical Cases

### § 2.1 Aadhaar: Sixteen Years of Slippage from PDS to Electoral Roll

India's Aadhaar system was launched in 2009 by the Unique Identification Authority of India (UIDAI),[^1] with original policy discourse framing it as providing "a unique identifier for welfare delivery," focused on the Public Distribution System (PDS) and the Mahatma Gandhi National Rural Employment Guarantee Scheme (MGNREGS). The legal basis during the construction phase (2009–2016) consisted of executive orders and cabinet resolutions, without dedicated legislation. The *Aadhaar Act* passed in 2016[^2] retroactively legitimized the system and wrote the scope of use as "targeted delivery of financial and other subsidies, benefits and services."

The expansion trajectory can be divided into four waves. The first wave (2011–2013) linked Aadhaar to PDS and MGNREGS welfare delivery—scope expressly authorized under § 7 of the Aadhaar Act. The second wave (2013–2016) progressively extended to bank accounts (KYC), gas subsidies, and tax identification (PAN), driven by administrative circulars from the Reserve Bank of India (RBI) and the Securities and Exchange Board of India (SEBI).[^3] The third wave (2017–2018) mandated linkage to SIM cards and income-tax filing, driven by administrative orders from the Department of Telecommunications and the Central Board of Direct Taxes, bypassing legislative deliberation. The fourth wave (2018–2026) expanded to the electoral roll (Election Laws Amendment Act 2021) and the National Population Register / Citizenship Amendment Act package.[^4]

The critical judicial intervention came with the 2017 *Justice K.S. Puttaswamy v. Union of India* privacy ruling[^5] and the 2018 nine-judge bench *Puttaswamy II* partial unconstitutionality review of the Aadhaar Act.[^6] The rulings partially reversed the compulsory linkage of Aadhaar to SIM cards and bank accounts but preserved the core use contexts of "targeted delivery"—PDS, MGNREGS, taxation, and subsidies. The policy significance of the rulings is that courts can narrow scope ex post, but cannot return to the pre-construction stage to reset the clauses. The series of empirical studies by Drèze, Khera, and Pudussery[^7] documents the exclusion effects of slippage on the most vulnerable populations—the elderly and workers lacking biometric matches.

### § 2.2 The U.S. Social Security Number: Ninety Years of Slippage from Taxation to Universal Identifier

The U.S. Social Security Number (SSN) was created by the *Social Security Act* of 1936,[^8] with its original use limited to Old Age Reserve Account tax records. The construction phase included no provisions restricting use; one reason was that cross-agency sharing was technically impossible at the time, so no one foresaw the structural possibility of expansion.

The expansion trajectory spans seventy years. In 1943, the Civilian Conservation Corps used SSNs to identify military personnel. In 1961, the Internal Revenue Service adopted the SSN as the taxpayer identification number (TIN). From 1965, the launch of Medicare made the SSN a health-insurance identifier. The Tax Reform Act of 1976 authorized states to use SSNs for driver's-license identification.[^9] From the 1990s onward, the SSN became the standard identifier for credit scoring, tenancy screening, and employer background checks—far beyond its original tax scope.

The U.S. Government Accountability Office (GAO) has published multiple audit reports since 1999[^10] criticizing SSN expansion. The GAO 1999 report *Social Security Numbers: Government Benefits from SSN Use but Could Provide Better Safeguards* noted that federal agencies' use of the SSN had exceeded the original authorization, but that remedial measures required legislative intervention—executive orders could not retrieve the expanded scope. Garfinkel, in *Database Nation*,[^11] described the SSN as "the de facto national identifier we said we would never have"—the United States never passed national identity card legislation at the federal level, but the SSN assumed that function through administrative slippage.

The critical difference is that the 1936 SSN statute included no sunset clause, no functional-limitation clause, and no cryptographic binding to prevent cross-agency sharing. Retroactive restriction clauses added ninety years later (such as the *Social Security Number Confidentiality Act 2010*)[^12] can manage only partial abuse and cannot roll back existing expansion.

### § 2.3 eIDAS: Ten Years of Normative Expansion from Electronic Signature to Wallet

The EU *eIDAS Regulation* (Regulation EU 910/2014)[^13] was passed in 2014, with its original scope limited to electronic identification and trust services (electronic signatures, electronic seals, time stamps, and qualified certificates). The policy discourse during the construction phase concerned "providing legal certainty for cross-border e-commerce"; there were no wallets, no attribute credentials, and no KYC integration.

The expansion trajectory was driven by normative texts. From 2018, the European Commission initiated discussions on amending eIDAS; in 2021 it proposed *eIDAS 2*,[^14] incorporating wallets into the regulatory scope. In April 2024, *Regulation (EU) 2024/1183*[^15] (eIDAS 2.0) was adopted, expanding the scope from electronic signatures to three new categories: the European Digital Identity Wallet (EUDI Wallet), Person Identification Data (PID), and Qualified Electronic Attestation of Attributes (QEAA). Current (2026) expansion pressure extends to KYC, age verification, transit tickets, medical credentials, and driving licenses—all use cases under active discussion.

The distinctive feature of eIDAS is that expansion occurred at the level of normative text, with each wave passing through formal legislative procedure. This means that civil society and member states had formal windows to oppose, but in practice the European Commission's Impact Assessment[^16] framed expansion requirements as "the inevitable demand of cross-border interoperability," positioning opposition as "refusal to modernize." The EDPB and EDPS, in *Joint Opinion 2/2023*,[^17] raised privacy-risk warnings regarding the EUDI Wallet; some recommendations were adopted (unlinkability and minimum disclosure written into the ARF), while others were not (no explicit mandatory requirement for pairwise pseudonyms). The eIDAS trajectory demonstrates that even within the transparent EU procedural framework, expansion pressure can advance through the "impact-assessment framework" and "cross-border interoperability discourse," and civil society's window of opposition is structurally compressed in practice.

### § 2.4 China Real-Name: Rolling Ministry-Level Implementation from Network Registration to Universal Access

The trajectory of China's real-name system differs from the other three cases in its primary reliance on administrative orders rather than legislation. The *Decision of the Standing Committee of the National People's Congress on Strengthening Network Information Protection* in 2012[^18] first required that "network service providers shall require users to provide true identity information," with the original scope limited to network registration.

The expansion trajectory spans fourteen years. From 2014, it progressively extended to instant messaging, microblogs, and social platforms. Between 2015 and 2017, the *National Security Law of the People's Republic of China*, the *Counter-Terrorism Law of the People's Republic of China*, and the *Cybersecurity Law of the People's Republic of China*[^19] elevated real-name requirements to statutory level. From 2018, it extended to e-commerce, ride-sharing, and online education. From 2020, it extended to mobile SIM cards, mobile online payment, and online healthcare. From 2022, it extended to health-code and travel-code systems.[^20] From 2024, it extended to AI-generated-content labeling and LLM service registration.

Creemers, Triolo, and other scholars of Chinese digital policy[^21] describe this trajectory as *rolling implementation*: each wave of expansion is advanced through ministry-level administrative orders, with legislative retroactive endorsement. Full-text comparisons by NPC Observer and China Law Translate[^22] show that from 2012 to 2024 more than sixty ministry-level normative documents touched the real-name scope, more than half without corresponding legislative deliberation.

The distinctive significance of the Chinese case is that it demonstrates how, in a polity lacking strong constitutional review, strong civil society, and strong cross-national comparative pressure, the speed and depth of slippage are markedly higher than in the other three cases. At the same time, the expansion of real-name also encountered localized countervailing pressure (for example, the 2017 partial withdrawal of specific use contexts by facial-recognition companies SenseTime and Megvii under international pressure), showing that even in an authoritarian polity countervailing pressure can influence parts of the expansion trajectory.

## § 3. Extracting Common Conditions: A Two-Condition Analysis of Legal Constraint and Technical Binding

Placing the four cases in juxtaposition, a shared condition for slippage can be extracted: during the construction phase, the legal basis included *no* functional-limitation clause (function-creep prevention clause), sunset clause, or technical scope-binding constraint. This induction immediately encounters two critical counter-examples—Austria's sourcePIN and Germany's nPA—which force a correction of the original proposition from "no clause written → slippage" to a more precise version.

### § 3.1 Austria sourcePIN: No Legal Limitation Written, Yet No Significant Expansion Because of Technical Binding

Austria's sourcePIN system[^23] was introduced in 2004 by the *E-Government Act* as a cryptographic identifier underlying citizen identity. The legal basis during the construction phase did not include explicit functional-limitation clauses; § 6 of the E-Government Act merely designated the sourcePIN as "the derivation source for private-sector-domain identifiers," without enumerating prohibited uses and without a sunset clause.

However, Austria wrote strong constraints at the *technical layer*: the sourcePIN is never disclosed in its original form to a verifier; each use context (taxation, healthcare, private-sector KYC) receives a *sectoral PIN* (ssPIN) derived from the sourcePIN by symmetric cryptographic derivation. The ssPINs of different sectors are cryptographically irrecombineable; even if two verifiers collude, they cannot reconstruct a citizen's cross-sector behavioral record.[^24]

The outcome: over twenty-two years of sourcePIN deployment, the scope of use has in substance remained within the sectors for which it was originally designed. No Aadhaar-style cross-domain layering has occurred; no SSN-style universal-identifier drift has occurred. Criticism by Austrian civil-society organizations such as Epicenter.works and noyb has focused on different issues (such as data governance in the ELGA healthcare system); scope expansion of sourcePIN itself does not figure prominently in their critiques.

The Austrian case demonstrates that technical binding can perform the role of a functional-limitation clause in the absence of legal clause provisions.

### § 3.2 Germany nPA: Legal Limitation Written, But Loosening at the Implementation Layer Due to Technical Reconfigurability

Germany's *neuer Personalausweis* (nPA) system[^25] was introduced in 2010 by the *Personalausweisgesetz* (PAuswG), with explicit limitation clauses written into the legal basis during the construction phase. PAuswG § 18 provides for function-restricted reading: verifiers must hold a *Berechtigungszertifikat* (authorization certificate) in order to read attributes, and may only read the attributes listed in the authorization register. PAuswG § 19 provides for pseudonym as the default mode: verifiers by default see only a service-specific pseudonym and cannot directly view the citizen's identity.

However, the nPA did not fully bind constraints at the *technical layer*: the core chip supports multiple applications, and the scope of authorization certificates is managed by the *Bundesverwaltungsamt* (BVA), whose authorization scope can be adjusted by administrative order. As the *Online-Zugangsgesetz* (OZG) of 2017 promoted digital government services, the BVA progressively expanded the authorization register, adding attribute types (such as age proof, address proof, and academic qualification proof) and verifier categories (such as financial-institution KYC and age-verification services).[^26]

The outcome: the legal limitation clauses of the nPA underwent three expansions (2014, 2017, 2021) during the sixteen-year deployment period, each passing through the BVA's administrative procedure rather than legislative deliberation. Although the scope of expansion is far smaller than that of Aadhaar or the SSN, the "loosening trajectory" is clearly visible. German information-security expert communities (CCC, Stiftung Datenschutz) note[^27] that PAuswG's limitation clauses remain strict at the text level, but the BVA at the implementation layer effectively assumed a "quasi-legislative" role, hollowing out the limitation clauses.

The German case demonstrates that legal limitation clauses, lacking technical-binding support, will gradually loosen at the implementation layer.

### § 3.3 The Corrected Common Condition

The two counter-examples of Austria's sourcePIN and Germany's nPA together support the following corrected version:

> Within the sample space of "large-scale, state-led identity infrastructures designed from the outset for cross-departmental reuse," **the simultaneous absence of written functional-limitation clauses *and* technical binding** is a weak necessary condition for significantly elevated expansion pressure relative to systems of the same type.

The precise meaning of "weak necessary condition" is that legal clauses and technical binding *are mutually substitutive*. Either, if present, suffices to substantially slow expansion; only when both are absent does significant expansion pressure arise. All four high-expansion cases—Aadhaar, SSN, eIDAS, China real-name—satisfy the condition of "both absent": the core identifiers of SSN and Aadhaar can be used directly across agencies; the trust-list mechanism of eIDAS has no cryptographic scope binding; the ministry-level orders of China's real-name system have neither legislative sunset nor technical sectoral derivation.

This correction carries two important implications. First, it expands the prevention strategy from a single tool ("just write a sunset clause") to a cross-tier combination ("both legal and technical measures are required"), which is precisely the argument developed in § 5. Second, it explains why certain systems that did write legal clauses (such as the nPA) still loosened—clauses without technical-binding support leave ample space for the implementation layer to gradually hollow them out.

## § 4. Causal Mechanisms: Path Dependency × Infrastructure Invisibility × Institutional Layering

The common conditions for expansion have been established, but "conditions" and "mechanisms" are questions at two different levels. Explaining *why* systems lacking dual binding expand requires a discursive account at the level of mechanism. The present analysis employs a superimposition of three mechanisms, converging after the derivation to "strong tendency" rather than "structural inevitability."

### § 4.1 Mechanism One: Path Dependency

Pierson's *Politics in Time*[^28] and his 2000 article in the *American Political Science Review*[^29] formalize path dependency through four micro-foundations: (a) increasing returns to adoption, (b) learning effects, (c) coordination effects, and (d) adaptive expectations. When all four micro-foundations hold simultaneously, the marginal cost of building a new substitute rises exponentially over time, and the political incentive to use the existing system systematically exceeds the incentive to build anew.

Identity infrastructure satisfies all four micro-foundations to a high degree. Taking Aadhaar as the illustration: (a) once UIDAI's central database (CIDR) accumulates biometric data for 1.3 billion people, the marginal cost of building an alternative database exceeds any substitute benefit; (b) the various ministries have learned to integrate data using Aadhaar identifiers, and the learning investment has been sunk; (c) the PDS, banking, and tax systems have all connected to the Aadhaar API, and coordination costs have been paid; (d) citizens, administrative officials, and the private sector all expect Aadhaar to continue, and behavior has been adjusted accordingly.

North's *Institutions, Institutional Change and Economic Performance*[^30] further argues that the path dependency of institutions is not only a technical lock-in but also an "ideational lock-in"—once an institution is seen as "just the way things work," the political cost of challenging its existence is far greater than the cost of extending it. Both Aadhaar and the SSN exhibit this ideational lock-in: questioning the existence of the system (abolition) is almost outside the realm of political possibility; questioning the scope of its expansion (containment) is the realistic terrain of debate.

### § 4.2 Mechanism Two: Infrastructure Invisibility

Bowker and Star's *Sorting Things Out*,[^31] Star's "The Ethnography of Infrastructure,"[^32] Edwards's *A Vast Machine*,[^33] and *Infrastructure and Modernity*[^34] established the analytical tradition of infrastructure studies. The core insight is that infrastructure becomes invisible once it operates stably: its existence is treated as a natural fact rather than a political choice, and it accordingly withdraws from public deliberation.

This mechanism is particularly salient in the application to identity infrastructure. During the early period of Aadhaar's activation (2009–2013), the legitimacy of UIDAI, the privacy risks of CIDR, and the biometric failure rate were all subjects of intense public debate. But five years into deployment, the Aadhaar number had become a component of daily life, and the newly added expanded use contexts (compulsory linkage to SIM, PAN, and banks) were no longer perceived as "political problems with the Aadhaar system" but as "engineering problems of integrating Aadhaar with other systems." The SSN trajectory is more extreme: the 1936 tax identifier, after ninety years of invisibility, has reached a state in which American citizens are asked to provide their SSN for housing, employment, and credit scoring with almost no one questioning the demand itself.

The political consequence of infrastructure invisibility is that expansion does not require formal policy debate: it can proceed quietly through administrative orders, inter-agency agreements, and private-sector conventions. Each expansion is framed as a technical integration rather than a political choice, and the triggering mechanism for public deliberation fails.

### § 4.3 Mechanism Three: Institutional Layering

Mahoney and Thelen's *Explaining Institutional Change*,[^35] Thelen's "How Institutions Evolve,"[^36] and Hacker's "Privatizing Risk without Privatizing the Welfare State"[^37] established the theory of institutional layering. The core insight is that new policy demands tend to be layered onto existing institutions (through drift, layering, or conversion) rather than prompting wholesale reconstruction, because reconstruction requires mobilizing a supermajority while layering requires only a marginal majority.

This mechanism explains why expansion typically takes the form of "integration" rather than "new construction." The SSN's expansion from a 1936 tax instrument to a credit-scoring identifier proceeded step by step, layering new functions onto the existing number system, without any single step requiring the legislature to pass a highly sensitive bill entitled "American National Identity Card." Aadhaar's expansion from a 2009 welfare identifier to the electoral roll also proceeded step by step through layering—mandatory linkage to SIM cards required only an administrative circular from the Department of Telecommunications, not a legislature passing a "National SIM Card Identity Binding Act."

Hacker's *Privatizing Risk* furnishes the critical empirical evidence for layering: the erosion of American social security occurred not through its frontal repeal (revision) but through the gradual overlay of the existing institution by new functions (drift and conversion), until the original function of the existing institution was hollowed out. This analysis applies directly to identity infrastructure: the original functional constraints need not be frontally abolished; it suffices for new use contexts to be layered onto the existing system, and the original constraints will be gutted at the implementation layer.

### § 4.4 Convergence from "Probability" to "Strong Tendency"

The superimposition of three mechanisms produces a strong tendency toward expansion, but all three mechanisms speak in *probabilistic language*, not logical necessity. Path dependency describes "the marginal cost of new construction systematically rising"—not "new construction being impossible." Infrastructure invisibility describes "the triggering mechanism for public deliberation failing"—not "public deliberation never being triggered." Institutional layering describes "marginal-majority layering being easier than supermajority reconstruction"—not "supermajority reconstruction being impossible."

Superimposing three probabilistic mechanisms can only reach "high-probability expansion under most conditions"—it cannot reach "necessary expansion under all conditions." The phrase "structural inevitability" in the original thesis misrules probability mechanisms into logical conclusions; this is the most fragile inferential leap in that chain of reasoning. The present analysis revises to "strong tendency, reversible by countervailing institutional pressure."

Counter-example cases support this revision. The German *Volkszählungsurteil* 1983[^38] (Census Judgment), decided by the *Bundesverfassungsgericht*, established the principle of *informational self-determination* (*informationelle Selbstbestimmung*) and pushed the expanded scope of the census back to its starting point; here path dependency was interrupted by constitutional review. Estonia's X-Road[^39] employs cryptographic logging plus a compulsory citizen-visible audit interface, preventing infrastructure from becoming invisible—citizens receive notification every time their data is accessed by an agency, and the triggering mechanism for public deliberation is structurally preserved through systems engineering. The UK *Identity Cards Act 2006* was repealed in 2010 by the *Identity Documents Act 2010*,[^40] a case of a strong civil-society movement (NO2ID) and regime change (Conservative–Liberal Democrat coalition replacing Labour) together reversing layering. The abolition of the U.S. Civil Aeronautics Board (CAB) in 1985[^41] is a case of industry pressure combined with cross-party consensus causing institutional scope reduction (not an identity-infrastructure case, but significant as a comparative illustration that path dependency can be interrupted).

These four counter-examples do not negate the existence of the three mechanisms; they demonstrate that the three mechanisms constitute a "strong tendency" rather than a "necessity." The revised formulation returns the spectrum to politics: slippage can be reversed, but doing so requires acting before construction, through structural clauses, while the political opportunity window remains open.

One further observation should be noted: the identity-infrastructure trajectories of Nordic countries (particularly Denmark and Sweden) reveal a subtle phenomenon—displacement (substitution) in certain political cultures takes the place of layering as the *form*, but does *not* take the place of expansion as the *outcome*. The trajectory of Sweden's *personnummer* from tax identifier to healthcare, banking, housing, and employer background-check identifier closely parallels that of the SSN, even though individual expansion steps may take the form of displacement (abolishing old rules and adopting new ones) rather than layering (adding new functions to the old system).[^42] This observation warns that institutional-design form (layering versus displacement) and expansion outcome do not correspond one-to-one; prevention strategies must aim at the expansion outcome, not at the institutional-design form.

## § 5. Cross-Tier Combinations of Four Prevention Tools

If the shared condition for expansion is "the simultaneous absence of legal constraint *and* technical binding" and the causal mechanism is the triangle of path dependency × infrastructure invisibility × institutional layering, then prevention tools must be combined across tiers. This section introduces four tools, providing for each the legal or technical rationale, concrete clause examples, failure modes, and combination strategy.

### § 5.1 Tool (a): Sunset Clauses (Time-Limited Expiry of Functions)

**Legal rationale.** A sunset clause forces provisions to expire automatically after N years, with re-legislation required for continuation. Ackerman's *Legislatures of the Future*[^43] describes the sunset as "reversing the burden of legislative inertia"—provisions expire by default, and active effort is required to continue them, transferring the burden of proof from opponents to proponents.

**Concrete clause example.** Australia's *Legislation Act 2003* § 50A[^44] is the authoritative legislative model for sunset clauses. The provision specifies that legislative instruments (secondary legislation) default to automatic lapse after ten years, unless the responsible authority submits a Sunset Audit Report and Parliament passes a continuation act. Schoenmaker and Wierts's study of sunset clauses in financial regulation[^45] shows that automatic-lapse mechanisms are more effective than periodic-review mechanisms—the former defaults to expiry while the latter defaults to continuation; the difference in burden-of-proof allocation determines renewal rates.

**Failure mode.** USA PATRIOT Act § 215[^46] is the canonical case of sunset-clause failure. The original provision designed a four-year sunset (2005), but the actual trajectory was: extended in 2005 → extended in 2010 → *USA FREEDOM Act* of 2015[^47] partially amended while preserving most powers → after the 2020 expiry the executive branch initiated an emergency § 215 reauthorization attempt → continued extension discussions in subsequent years. Over nineteen years, § 215 never truly lapsed automatically; every extension passed by Congressional majority. The public-choice critique of sunsets is fully confirmed in this case.

**Combination strategy.** Sunset clauses used alone are vulnerable to being hollowed out by extensions; they require combination with scope-bound and split-key mechanisms. When sunset clauses coexist with scope-bound infrastructure, even if an extension passes, functions cannot expand. When sunset clauses coexist with split-key governance, extension requires multi-party consensus, and centralizing pressure is dispersed. Davis's cross-national comparison in *Sunset Clauses in Australian Legislation*[^48] shows that the survival rate of "sunset plus ancillary measures" combinations is significantly higher than that of sunset used alone.

### § 5.2 Tool (b): Scope-Bound Infrastructure (Technically Non-Expandable)

**Technical rationale.** Scope-bound uses cryptographic binding to tie attributes to verifier identifiers, making attributes irrecombineable across verifiers. The specific mechanism is the *audience claim*—credentials are locked to their intended recipient at issuance, so other verifiers, even if they obtain the credential, cannot verify it.

**Concrete clause example.** The IETF *Selective Disclosure for JWTs* (SD-JWT) draft series[^49] and the companion standards SD-JWT VC and Key Binding JWT (KB-JWT) write audience binding and selective disclosure into the standard layer. Each credential can selectively disclose sub-attributes (for example, age ≥ 18 without disclosing the specific age), and each disclosure carries an audience claim limiting the recipient. The W3C *Verifiable Credentials Data Model* v2.0[^50] provides the companion verifiable-presentation framework. The EUDI Wallet ARF v1.4/v1.5[^51] makes SD-JWT VC and KB-JWT mandatory specifications for PID and QEAA.

**Failure mode.** The primary failure mode of scope-bound is *verifier collusion to recombine attributes*. Even if each verifier obtains only the sub-attributes bound to itself, multiple verifiers can accumulate across sessions and collude across organizations to reconstruct a citizen's cross-domain behavioral record. Ohm's research in "Broken Promises of Privacy"[^52] on anonymization demonstrates that even when some attributes are cryptographically protected, re-identification attacks can succeed through a sufficient combination of sub-attributes. Privacy & Scaling Explorations (PSE) and other cryptography research teams are developing wallet-side aggregation-control mechanisms (enabling wallets to detect cumulative cross-session use by verifiers), but this work remains at the research stage.

**Combination strategy.** Scope-bound and opt-out by design are complementary: scope-bound constrains the technical-layer flow of attributes while opt-out preserves citizens' ultimate right of exit. Scope-bound and split-key are complementary: split-key controls the governance-layer threshold for expanding the attribute schema, while scope-bound controls the access-layer gate for specific verifiers.

### § 5.3 Tool (c): Split-Key (Unilateral Expansion Technically and Governmentally Impossible)

**Technical and governance rationale.** Split-key divides the issuer's primary signing private key into (k, n) shares (threshold cryptography), such that expanding the attribute schema or adding a new verifier requires k shareholders to sign jointly. The technical foundations are Shamir's secret sharing (1979),[^53] Pedersen's verifiable secret sharing (1991),[^54] and Boneh, Lynn, and Shacham's BLS signature (2001).[^55] Contemporary implementations include FROST,[^56] GG18, Lindell17, and related threshold ECDSA and BLS multi-signature families.

**Concrete clause example.** Boneh and Shoup's *A Graduate Course in Applied Cryptography*,[^57] Chapter 22, provides detailed descriptions of threshold signature implementation and security proofs. A concrete deployment example: the European Blockchain Services Infrastructure (EBSI) employs a (k, n) trust-list mechanism—not yet full threshold cryptography, but trust-list expansion requires joint decisions by multiple member states. Komlo and Goldberg's 2020 FROST paper[^58] provides a round-optimized Schnorr threshold signature implementation that has been adopted by several wallet projects.

**Failure mode.** The primary failure mode of split-key is *de facto centralization*. Multi-DAO governance post-mortems[^59] documenting the Parity multi-sig vulnerability, the Multichain bridge governance failure, and the Ronin Network incident show that (k, n) designs in practice frequently degrade to *de facto* (1, n)—shareholders share strong correlations (same company, same geographic region, same political faction), enabling a single party to effectively control k shares. The prevention strategy is to diversify shareholders across seven categories—regulatory authority, audit authority, legislative authority, civil society, academia, mutual-recognition authority, and vendor—with the shareholder-replacement threshold set higher than the daily operational threshold.

**Combination strategy.** Split-key makes the political cost of expansion visible—each expansion requires multi-party consensus, and the public-deliberation window is structurally preserved. Combined with sunset clauses, extension requires multi-party consensus; combined with scope-bound, each verifier's admission requires multi-party review.

### § 5.4 Tool (d): Opt-Out by Design (Citizens Can Withdraw at Any Time)

**Legal, UX, and systems-engineering rationale.** Opt-out by design grants citizens the right to withdraw at any time, with the system designed to permit exit without leaving traces. The legal-layer foundations are the *California Consumer Privacy Act* (CCPA) § 1798.135,[^60] CPRA, and GDPR Article 17[^61] (*right to erasure*). The UX-layer principle is *symmetry*—the difficulty of withdrawing must not exceed the difficulty of registering. The engineering-layer principles are log retention ceilings, differential-privacy log processing, and automatic expiry of backups.

**Concrete clause example.** CCPA § 1798.135 requires businesses to provide an opt-out link and to honor Global Privacy Control (GPC) signals. GDPR Article 17 gives data subjects the right to require controllers to delete their data, and requires controllers to notify all downstream processors that have received the data. Privacy by Design literature[^62] provides concrete implementation patterns at the systems-engineering layer (log retention limits, differential privacy processing, impact-chain tracking for derived analytics).

**Failure mode.** Opt-out by design is the weakest of the four tools. Research by Mathur et al. on dark patterns[^63] documents that GDPR/CCPA-compliant websites routinely deploy dark patterns making opt-out significantly harder than opt-in (hidden options, pre-ticked checkboxes, confusing language). Ohm's "Broken Promises of Privacy"[^52] criticizes from the technical layer: once data enters derived analytics and backup systems, "complete deletion" is nearly impossible—residual logs and derived models retain reconstructable traces. The Netflix re-identification case[^64] demonstrates that even anonymized data, cross-dataset linking can restore identity.

**Combination strategy.** Opt-out is citizens' last bargaining chip but cannot sustain prevention independently. Sunset clauses are needed to force periodic re-legislation of the system, scope-bound to constrain technical-layer flows, and split-key to require multi-party consensus for expansion; only under the combination of all three can opt-out approach complete implementation at the engineering level.

### § 5.5 Cross-Tier Combination Matrix and Minimum Viable Combination

Placing the four tools in a cross-tier table:

| Tool | Operational Tier | Primary Failure Mode | Complementary Tools |
|---|---|---|---|
| Sunset clauses | Legal | Political-pressure extension (PATRIOT Act) | Scope-bound + Split-key |
| Scope-bound | Cryptographic / Standard | Verifier collusion to recombine | Opt-out + Split-key |
| Split-key | Governance + Cryptographic | De facto centralization | Sunset |
| Opt-out by design | Legal + UX + Engineering | Dark patterns + residual logs | All three above |

The minimum viable combination—Minimum Viable Slippage Resistance (MVSR)—is the "sunset + scope-bound + split-key" trio supplemented by opt-out by design. The first three tools respectively establish expansion barriers at the legal, technical, and governance tiers; opt-out preserves citizens' bargaining position at the final layer.

The criterion for implementation priority: (a) retrofitting an existing infrastructure versus new construction—for existing systems, first supplement with sunset (lowest engineering cost) and opt-out (highest citizen visibility); for new systems, implement all at once; (b) cross-national versus domestic—in cross-national mutual-recognition scenarios, prioritize split-key (governance consensus costs are already high; designing for this from the outset is natural); in domestic scenarios, prioritize scope-bound (technical conformity costs can be internalized); (c) political resistance—if legislators resist sunset, begin with split-key, because split-key appears as "governance modernization" rather than "constraining government."

## § 6. Early Evidence: Prima Facie Assessment of the EUDI ARF and California AB 1043

The causal mechanism of the four prevention tools is derived from reverse inference from existing slippage trajectories, but "whether writing these clauses actually slows expansion" requires positive empirical evidence. This section evaluates two early empirical candidates—the EUDI Wallet ARF and California AB 1043—and honestly marks their evidential limits.

### § 6.1 Anti-Slippage Clauses in the EUDI Wallet ARF

The EU *European Digital Identity Wallet Architecture and Reference Framework* (ARF) v1.4/v1.5[^65] is the technical companion specification for *Regulation (EU) 2024/1183*. ARF §§ 4–6 write in multiple anti-slippage clauses:

- **Minimum disclosure**: the wallet discloses only the minimum subset of attributes necessary to complete verification in each verifier interaction, technically enforced by selective disclosure via SD-JWT VC and KB-JWT
- **Unobservability**: multiple interactions between the same citizen and the same verifier cannot be linked, technically enforced by pairwise pseudonyms and unlinkable presentations
- **No phone home**: the wallet does not report use context to the issuer during the verification flow, with cryptographic enforcement through the issuer's non-participation in the verification flow
- **Wallet refusal of universal phone-home**: the wallet must refuse any verifier request requiring the wallet to log use context with a third party
- **Scope binding**: each attribute type contains an embedded audience binding that is cryptographically non-reusable across attribute types

The EDPB and EDPS's *Joint Opinion 2/2023*[^17] raised privacy-risk warnings regarding the ARF draft; some recommendations were adopted (unlinkability and minimum disclosure written into the ARF), while others were not adopted (no explicit mandatory requirement for pairwise pseudonyms). The progress of the Implementing Acts in elaborating these provisions is ongoing.

### § 6.2 Scope-Limitation Clauses in California AB 1043

California *AB 1043 (2023)*[^66] is a scope-limitation statute for age-verification infrastructure, now incorporated into *California Civil Code* § 22585. Key provisions include:

- **§ 22585(b)**: age-verification systems may transmit only the single boolean signal "user age ≥ X"; transmission of specific age, date of birth, or other identity attributes is prohibited
- **§ 22585(e)**: liability shift—if a verifier demands attributes beyond the scope of § 22585(b), liability shifts to the verifier
- **Companion § 1798.135**: CCPA opt-out and GPC signal support requirement
- **Companion § 1798.140**: strict boundary definitions for *de-identified* and *aggregate consumer information*

The California Office of the Attorney General (OAG) memorandum[^67] describes AB 1043 as establishing *attribute-bounded infrastructure*, aimed at preventing age-verification requirements from being expanded into general identity-verification requirements.

### § 6.3 Evidential Limits: Prima Facie Support, Pending Sustained Observation

Both cases constitute prima facie evidence, not verified effectiveness. Four reasons support this qualification.

First, **time-constant limitations**. ARF v1.4 was published in 2024, v1.5 in 2025; AB 1043 took effect in July 2024. Neither has been live for more than three years. Pierson's path-dependency literature indicates that institutional lock-in effects typically have a time constant of five to ten years; Mahoney and Thelen's institutional-change framework is similar. The current (2026) observation of "no significant expansion" cannot be statistically distinguished from "expansion trajectory not yet initiated."

Second, **no slippage-pressure stress test**. Neither ARF nor AB 1043 has been subjected to the typical slippage pressures of regime change, national-security incidents, or cross-border crises. PATRIOT Act § 215 also included a sunset clause at the construction stage (after 9/11 in 2001), but the actual trajectory demonstrates that under "sustained security pressure" sunset clauses can be repeatedly extended. The clauses in ARF and AB 1043 must pass through at least one major slippage-pressure stress test before their effectiveness can be claimed.

Third, **the tier jump from normative text to implementation behavior**. The clauses of ARF and AB 1043 exhibit a high degree of consistency with slippage-prevention doctrine at the level of normative text, but the specific behaviors at the implementation layer—whether wallet providers are implementing unobservability, whether verifiers are respecting scope binding in practice, whether the California OAG is actually initiating enforcement—require independent observation. Germany's nPA history demonstrates that limitation clauses in normative text can be gradually hollowed out at the implementation layer.

Fourth, **sample-size limitations**. EUDI and California are two cases and cannot support broad cross-national, cross-domain induction. The prima facie conclusion of this paper is: "Available early evidence has not yet falsified the prevention-tool hypothesis, and the clauses of ARF and AB 1043 exhibit a high degree of consistency with slippage-prevention doctrine at the normative level." This conclusion provides a reasonable candidate basis for the policy recommendation to write these clauses into newly planned identity infrastructures, but makes no claim that "these clauses have been verified as effective."

Key nodes requiring sustained observation: (a) the elaboration progress of ARF Implementing Acts on minimum disclosure—whether they will be hollowed out by "reasonable exceptions"; (b) whether § 22585(e) liability shift in California AB 1043 is strictly applied in the first substantive enforcement case; (c) differences in local implementation of ARF across EU member states—whether any member state adopts a more permissive reading; (d) the weakest link in cross-border mutual-recognition scenarios—whether a permissive implementation in one member state will drive expansion pressure across the entire EU.

## § 7. Responding to Two Objections: Stratified Treatment of Nihilism and Public Choice

Two serious objections to the main argument require response. They belong to different levels of reasoning, and responses must be correspondingly stratified; conflating the levels produces logical error.

### § 7.1 Objection A (Nihilism): Normative Argument in Response

**The strongest form of the objection.** If any centralized identity infrastructure will expand its uses and ultimately crowd out fundamental rights, the rational conclusion is to build nothing. The strongest support for this position comes from three schools: (1) the cypherpunk tradition[^68] (May's *Crypto Anarchist Manifesto* of 1992, Hughes's *A Cypherpunk's Manifesto* of 1993), arguing for cryptographic protocols as a replacement for state identity systems; (2) the anarcho-capitalist position[^69] (Friedman's *The Machinery of Freedom*, 1989), arguing that identity and trust should be market-provided; (3) post-Snowden radical skepticism[^70] (Greenwald 2014, Lyon 2014), arguing that any surveillance infrastructure will ultimately be abused. Some advocates in the SSI (Self-Sovereign Identity) and ZKP (Zero-Knowledge Proof) lineage push this position to an extreme: "identity requirements are pseudo-requirements manufactured by the state for administrative convenience."

**The core of the response is normative argument.** Objection A raises a normative question—"should it be built or not"—and the response must deploy normative argument rather than empirical argument. Empirical arguments (such as "not building will increase financial exclusion") can supplement normative arguments but cannot replace them. The normative response here consists of four components.

First, Anderson's *Private Government*[^71] demonstrates that "not building" is far from a neutral option. If the state withdraws from identity infrastructure, private-sector substitutes (Apple ID, credit scoring, platform accounts) will fill the gap, but their governance quality is lower than democratic state systems—no due process, no right to be forgotten, no standing to bring suit. "Not building" in effect transfers governance costs to the most vulnerable citizens and disperses them to unaccountable private-sector actors.

Second, Habermas's *Between Facts and Norms*[^72] provides a normative argument for infrastructure as public good. When infrastructure assumes the role of a necessary channel for citizens to enter democratic procedures (such as electoral roll management, welfare delivery, and cross-border movement), its existence is *normatively required*, not merely optional. The question of "should it be built or not" has already been answered by the real needs of civil society; what remains is the question of "how it should be built."

Third, the genuine limitations of SSI and ZKP must be honestly acknowledged.[^73] On low-end Android devices, the computation time for selective disclosure ZKP may be five to thirty seconds and unstable; the computation cost of BBS+ signatures at the issuer end remains higher than traditional PKI solutions; decentralized trust anchors face key-recovery problems in low-income countries. SSI is a reasonable supplement under mid-to-high-end device and stable network conditions, but cannot at current technological maturity fully replace centralized identity infrastructure.

Fourth, a marginal-cost framework directly addresses the charge that "clauses are placebos." Even if clauses cannot completely prevent expansion, they change the marginal cost of expansion—making expanded use require a higher political cost than non-expansion (compulsory re-legislation, compulsory multi-party consensus, compulsory citizen-visible audits). Raising the marginal cost need not reduce the probability of expansion to zero to be effective; raising the marginal cost sufficiently will produce inhibition in most political environments.

Counterfactual scenarios support this response. If G20 countries were to cease all new centralized identity infrastructure construction from 2026 and gradually phase out existing systems, World Bank Findex 2021[^74] estimates that the 1.4 billion unbanked adults would face an expansion of verification difficulties by two to four hundred million; cross-border employment compliance costs would rise by thirty to fifty percent; the U.S. Federal Reserve's estimated annual cost of synthetic identity fraud (approximately USD 20 billion in 2020)[^75] would multiply; tax evasion rates would rise, fiscal capacity would fall, and social-security payments would be affected. Private-sector substitutes (Apple ID, Mastercard ID platform, platform accounts) would fill the gap, but their coverage and accountability are lower than state systems. "Not building" is not a neutral option; it carries concrete normative costs.

### § 7.2 Objection B (Public Choice Against Sunset Clauses): Empirical Argument in Response

**The strongest form of the objection.** Sunset clauses will be extended under political pressure, with PATRIOT Act § 215's extension history as the canonical counter-example; administrative officials have strong incentives to rent-seek and sustain their authority (Niskanen 1971),[^76] lobbying groups dissipate institutional constraints (Olson 1965),[^77] and legislators themselves have extension incentives (Buchanan and Tullock 1962).[^78] The most sophisticated version goes beyond the crude claim that "sunsets are useless" and advances a *category mistake* proposition: sunsets will themselves undergo slippage, so placing prevention strategy in sunsets is a category mistake; what actually works is other mechanisms (regime change, judicial review, civil-society movements); sunsets are merely *institutional theatre*.

**The core of the response is empirical argument plus historical evidence.** Objection B raises an empirical question—"will sunsets actually fail"—and the response must deploy empirical evidence and historical comparison. The empirical response consists of four components.

First, **cross-domain sunset survival rate data**. Davis's research in *Sunset Clauses in Australian Legislation*[^48] shows that 38% of sunset clauses under Australia's *Legislation Act 2003* § 50A lapse automatically—far above the objection's implicit prediction of "all are extended." Schoenmaker and Wierts's research on financial-regulation sunsets[^45] shows that automatic-lapse mechanisms have a significantly higher lapse rate than periodic-review mechanisms. These data do not negate the PATRIOT Act's extension trajectory, but demonstrate that the proposition "all sunsets will be extended" does not hold in cross-domain empirical evidence.

Second, **complementary layered defense significantly changes survival rates**. When sunset clauses are combined with scope-bound and split-key, even if an extension passes, functions cannot expand. The *Independent Counsel Act*'s expiry in 1999[^79] is a powerful counter-example—the provision expired in a 1999 Congressional vote without renewal, because the companion liability provisions had already constrained the scope of independent counsel expansion at the constitutional level. Combination use significantly changes the failure rate of sunset used alone.

Third, **genuine sunset abolition cases**. Beyond the Independent Counsel Act 1999, other cases include: partial lapse of Australia's control orders[^80] (specific provisions of counter-terrorism authorizations failing to obtain extensions after sunset); Canada's *Anti-terrorism Act* 2007 vote failure[^81] (specific provisions enacted in 2001 failing to obtain renewal in the 2007 Parliamentary vote). These cases demonstrate that "all sunsets will be extended" is a peculiarity of the PATRIOT Act, not a universal pattern of the sunset mechanism.

Fourth, **"will be extended" does not equal "ineffective."** Even when a sunset is extended in some particular vote, the extension process itself creates a public-deliberation window and raises the marginal cost. Each extension vote for PATRIOT Act § 215 was accompanied by opposition movements from the ACLU, EFF, and other civil-society organizations; each extension vote returned § 215 to the status of a public issue. These public-deliberation windows are not institutional theatre—they succeeded in the 2015 *USA FREEDOM Act* in partially retrieving certain powers of § 215 (such as restrictions on bulk metadata collection). Adding complete lapse rates and partial-amendment rates together, the "marginal inhibiting effect" of PATRIOT Act § 215 is far greater than a binary comparison of "complete lapse versus total failure" would suggest.

**The methodological significance of stratified discipline.** Conflating Objection A and Objection B produces two types of error: (1) using empirical evidence (sunset survival rate data) to respond to a normative question (should identity infrastructure be built) commits the *naturalistic fallacy*—"effective in fact" does not entail "normatively ought"; (2) using normative argument (citizens' bargaining rights) to respond to an empirical question (will sunsets fail) evades the actual empirical doubt. The present analysis maintains strict stratification: Objection A is responded to with Anderson, Habermas, SSI limitations, and the marginal-cost framework; Objection B is responded to with sunset survival rates, complementary layered defense, genuine abolition cases, and the marginal-inhibition argument.

## § 8. Synthesis: The Minimum Viable Slippage Resistance (MVSR) Three-Tier Time Window

Synthesizing the arguments of the preceding seven sections, the core policy recommendation of this paper is the Minimum Viable Slippage Resistance (MVSR) three-tier clause, which must be written into specifications and legal basis *before construction*.

**Tier 1 (required): the sunset + scope-bound + split-key trio**

- *Sunset clauses*: automatic expiry in five to seven years, with automatic-lapse (rather than periodic-review) burden-of-proof allocation. Extension requires the responsible authority to submit a *slippage audit report* and obtain passage of a continuation act at the legislative level. Australia's *Legislation Act 2003* § 50A[^44] provides the authoritative model.
- *Scope-bound infrastructure*: mandatory SD-JWT VC + KB-JWT + audience claim + selective disclosure. Verifiers that violate the constraint cannot receive credentials; wallet providers must not implement functions that violate conformity. EUDI Wallet ARF v1.4/v1.5 and California AB 1043 § 22585(b) provide clause models.
- *Split-key governance*: the issuer's primary signing private key employs a (k=4, n=7) Pedersen VSS + BLS threshold scheme. Shareholders are drawn across seven categories—regulatory authority, audit authority, legislative authority, civil society, academia, mutual-recognition authority, and vendor—with the shareholder-replacement threshold set higher than the daily operational threshold.

**Tier 2 (strongly recommended): opt-out by design supplementation**

- *Legal*: personal data legislation explicitly provides withdrawal rights, with notification obligations covering all verifiers and derived databases, and providing a cryptographically signed receipt of erasure
- *UX*: symmetry principle (the difficulty of withdrawal must not exceed the difficulty of registration); the interface must support Global Privacy Control (GPC) signals
- *Engineering*: log retention ceilings, differential privacy processing, automatic expiry of backups without continued retention

**Tier 3 (ideal conditions): constitutional or fundamental-rights-level anti-slippage guarantee**

Write "identity infrastructure must comply with the foregoing clauses" into constitutional interpretation or a bill of fundamental rights. Available precedent includes the German *Bundesverfassungsgericht*'s *Volkszählungsurteil* 1983,[^38] the Indian Supreme Court's *Puttaswamy* 2017[^5] privacy ruling, and Taiwan's Council of Grand Justices Interpretation No. 603 (informational self-determination right).[^82] Tier 3 is difficult to achieve in one step, but if precedent accumulates it can serve as the last line of defense when Tiers 1 and 2 are legislatively abolished.

**Concrete recommendations for identity infrastructures currently being planned:**

- **EUDI Wallet ARF**: v1.5 has adopted minimum disclosure and unobservability, but requires the addition of split-key governance (a multi-member-state joint-signature mechanism for trust-list expansion) and sunset clauses (periodic review of the ARF's primary normative texts)
- **Taiwan Digital Identity Wallet (TW DIW)**: the 2024–2026 deployment phase should incorporate the MVSR Tier 1 trio; the design of the trust list on public blockchain provides the technical foundation for split-key, and sunset and scope-bound clauses should be added
- **California OpenCred and follow-on AB 1043 companion legislation**: § 22585(b) has established the attribute-bounded model; sunset clauses (periodic re-legislation of AB 1043 itself) and split-key (multi-party consensus for attribute-schema expansion) should be added
- **UK Online Safety Act Part 3 age-verification system**: current clauses tend toward technical neutrality, leaving excessive discretion to implementers; it is recommended that SD-JWT VC + scope-binding conformity requirements be added through the Ofcom Code of Practice

**The criticality of the time window.** All currently planned identity infrastructures are at the pre-construction political opportunity window—MVSR three-tier clauses are relatively easy to write in because interest groups have not yet formed around existing systems. Once a system is deployed and stakeholders complete their path-dependency investments, the political cost of writing in limitation clauses rises exponentially. Germany's nPA trajectory demonstrates that supplementing limitation clauses after construction is nearly impossible; the SSN trajectory demonstrates that even sixty years after construction the expanded scope cannot be fully retrieved. Aadhaar's *Puttaswamy II* ruling demonstrates that courts can narrow scope ex post, but cannot return to the pre-construction stage to reset the clauses.

The "pre-construction" time window is not an abstract point in time; it is the concrete political process of the *specification-drafting stage*. The EUDI Wallet ARF remains at the elaboration stage of v1.5 and Implementing Acts; the Taiwan Digital Identity Wallet remains at the pilot and standardization stage; California AB 1043 and the UK OSA's secondary legislation and code of practice remain under development. These all represent genuine opportunity windows in which MVSR clauses can be written; each window closes on a timeline measured in months and political circumstances, and will not wait for the completion of academic research.

## § 9. Conclusion: Returning the Politics of Slippage to Politics

The argument of this paper converges. Structural slippage is not a personal problem of weak political will; it has real causal mechanisms (the triangle of path dependency × infrastructure invisibility × institutional layering). But it is also not structural inevitability; countervailing institutional pressure (constitutional review, strong civil-society movements, cross-national comparative pressure, structural constraints through technical affordance) has reversed slippage in multiple historical cases. The middle position between the two misreadings is "strong tendency, reversible by countervailing pressure."

The genuine tools for preventing slippage are not ex post contestation but structural clauses written before construction. The four cross-tier tools (sunset / scope-bound / split-key / opt-out by design) each have their failure modes and must be used in combination; the MVSR Tier 1 trio supplemented by Tier 2 opt-out and Tier 3 constitutional guarantee is the minimum viable combination currently operable. The EUDI Wallet ARF and California AB 1043 are two prima facie early candidates of evidence, but neither has passed a five-to-ten-year slippage-pressure stress test; the current observation of "no slippage" cannot be distinguished from "not yet slipped," and sustained observation is a necessary academic discipline.

The nihilist objection (the "don't build" argument) rests on a miscalculation of the costs of "not building"—Anderson's private-government argument demonstrates that "not building" in practice transfers governance costs to the most vulnerable; Habermas's infrastructure-as-public-good argument demonstrates that the question of "should it be built or not" has already been answered by the real needs of civil society. The public-choice critique of sunset clauses has empirical grounds (the extension history of PATRIOT Act § 215), but cross-domain sunset survival rate data, complementary layered defense, and genuine abolition cases demonstrate that "all sunsets will be extended" is a special phenomenon rather than a universal pattern; "will be extended" also does not equal "ineffective," since the public-deliberation windows created by extension processes raise the marginal cost of expansion.

Writing MVSR clauses is not a panacea. Each tool has failure modes and each failure mode requires complementary tools as backup. But their combination can substantially raise the marginal cost of slippage, create public-deliberation windows, and preserve citizens' bargaining chips. This is the minimum effort required for identity-infrastructure politics, and the concrete path for restoring slippage from a "structural problem" to a "governable political choice."

The time window is opening—EUDI ARF v1.5, the Taiwan Digital Identity Wallet pilot, California AB 1043 follow-on legislation, and UK OSA secondary legislation are all at the pre-construction specification stage. MVSR clauses are relatively easy to write in because interest groups have not yet formed path-dependency investments around existing systems. Once systems are deployed, the political cost of writing in limitation clauses rises exponentially. The pre-construction time window closes on a timeline measured in months and political circumstances, and will not wait for the completion of academic research.

Returning the politics of slippage to politics requires not more warnings but the translation of warnings into clauses that can be concretely written into specifications. The task of this paper is complete—these clauses now have cross-tier causal argumentation, two prima facie empirical candidates, concrete implementation recommendations in the MVSR three tiers, and stratified responses to two serious objections. The remaining work lies outside academic argumentation; it is the collaborative work of specification drafters, legislators, civil-society organizations, and cryptographic engineers at each identity infrastructure currently under planning.

---

## References

[^1]: UIDAI (2009–2026). *Annual Reports & Mission Documents*. Unique Identification Authority of India. https://uidai.gov.in

[^2]: Government of India (2016). *Aadhaar (Targeted Delivery of Financial and Other Subsidies, Benefits and Services) Act*. Act No. 18 of 2016.

[^3]: RBI & SEBI (2013–2018). *KYC Guidelines and Aadhaar Linking Circulars*. Reserve Bank of India & Securities and Exchange Board of India.

[^4]: Government of India (2021). *Election Laws (Amendment) Act, 2021*. Act No. 43 of 2021.

[^5]: Supreme Court of India (2017). *Justice K.S. Puttaswamy (Retd.) v. Union of India*, Writ Petition (Civil) No. 494 of 2012.

[^6]: Supreme Court of India (2018). *Justice K.S. Puttaswamy (Retd.) v. Union of India*, Writ Petition (Civil) No. 494 of 2012 (Constitution Bench Judgment, Aadhaar challenge).

[^7]: Drèze, J., Khera, R., & Pudussery, J. (2021). *Cash for food, food for work: Aadhaar and the safety net*. Economic & Political Weekly, multiple volumes 2017–2024.

[^8]: United States Congress (1936). *Social Security Act*. Pub. L. 74-271, 49 Stat. 620.

[^9]: United States Congress (1976). *Tax Reform Act of 1976*. Pub. L. 94-455, 90 Stat. 1520.

[^10]: Government Accountability Office (1999, 2002, 2005). *Social Security Numbers* audit report series. GAO/HEHS-99-28; GAO-02-352; GAO-05-1016.

[^11]: Garfinkel, S. L. (2000). *Database Nation: The Death of Privacy in the 21st Century*. O'Reilly Media.

[^12]: United States Congress (2010). *Social Security Number Confidentiality Act*. Pub. L. 111-318, 124 Stat. 3454.

[^13]: European Parliament & Council (2014). *Regulation (EU) No 910/2014 (eIDAS Regulation)*. OJ L 257, 28.8.2014.

[^14]: European Commission (2021). *Proposal for a Regulation amending Regulation (EU) No 910/2014 as regards establishing a framework for a European Digital Identity*. COM(2021) 281 final.

[^15]: European Parliament & Council (2024). *Regulation (EU) 2024/1183 (eIDAS 2.0)*. OJ L, 30.4.2024.

[^16]: European Commission (2021). *Impact Assessment of eIDAS Regulation Revision*. SWD(2021) 124 final.

[^17]: EDPB & EDPS (2023). *Joint Opinion 2/2023 on the Proposal for a Regulation establishing a framework for a European Digital Identity*. European Data Protection Board & European Data Protection Supervisor.

[^18]: NPC Standing Committee (2012). *Decision of the Standing Committee of the National People's Congress on Strengthening Network Information Protection*. Standing Committee of the National People's Congress, December 2012.

[^19]: NPC (2015–2017). *National Security Law of the People's Republic of China* (2015); *Counter-Terrorism Law of the People's Republic of China* (2015); *Cybersecurity Law of the People's Republic of China* (2017).

[^20]: Health Commission of China (2020–2022). *Provincial Health Code Mutual Recognition Plan: Ministry-Level Administrative Order Series*.

[^21]: Creemers, R., Triolo, P., & Webster, G. (2018–2024). *Translating China's Cybersecurity and Digital Identity Regulations*. New America DigiChina Project & Stanford DigiChina.

[^22]: NPC Observer & China Law Translate (2012–2024). *Real-Name Regulations Compendium and Cross-Reference*. https://npcobserver.com & https://chinalawtranslate.com

[^23]: Republic of Austria (2004). *E-Government-Gesetz (E-GovG)*. BGBl. I Nr. 10/2004.

[^24]: Hörbe, R., & Hörbst, A. (2008). Identity concept for the public sector in Austria: SourcePIN and sectoral PINs. *Proceedings of EGOV 2008*.

[^25]: Federal Republic of Germany (2009). *Personalausweisgesetz (PAuswG)*. BGBl. I S. 1346.

[^26]: Bundesverwaltungsamt (2014–2021). *Berechtigungszertifikat Erweiterungsverordnungen*. BVA administrative orders.

[^27]: Chaos Computer Club & Stiftung Datenschutz (2017–2024). *Stellungnahmen zum nPA und seiner Erweiterung*. CCC and Stiftung Datenschutz position papers.

[^28]: Pierson, P. (2004). *Politics in Time: History, Institutions, and Social Analysis*. Princeton University Press.

[^29]: Pierson, P. (2000). Increasing returns, path dependence, and the study of politics. *American Political Science Review*, 94(2), 251–267.

[^30]: North, D. C. (1990). *Institutions, Institutional Change and Economic Performance*. Cambridge University Press.

[^31]: Bowker, G. C., & Star, S. L. (1999). *Sorting Things Out: Classification and Its Consequences*. MIT Press.

[^32]: Star, S. L. (1999). The ethnography of infrastructure. *American Behavioral Scientist*, 43(3), 377–391.

[^33]: Edwards, P. N. (2010). *A Vast Machine: Computer Models, Climate Data, and the Politics of Global Warming*. MIT Press.

[^34]: Edwards, P. N. (2003). Infrastructure and modernity: Force, time, and social organization in the history of sociotechnical systems. In T. J. Misa, P. Brey, & A. Feenberg (Eds.), *Modernity and Technology*. MIT Press.

[^35]: Mahoney, J., & Thelen, K. (Eds.). (2010). *Explaining Institutional Change: Ambiguity, Agency, and Power*. Cambridge University Press.

[^36]: Thelen, K. (2003). How institutions evolve: Insights from comparative-historical analysis. In J. Mahoney & D. Rueschemeyer (Eds.), *Comparative Historical Analysis in the Social Sciences*. Cambridge University Press.

[^37]: Hacker, J. S. (2004). Privatizing risk without privatizing the welfare state: The hidden politics of social policy retrenchment in the United States. *American Political Science Review*, 98(2), 243–260.

[^38]: Bundesverfassungsgericht (1983). *Volkszählungsurteil*. BVerfGE 65, 1 (15. Dezember 1983).

[^39]: e-Estonia (2024). *X-Road: Data Exchange Layer Documentation and Audit Logs*. Estonian Information System Authority.

[^40]: United Kingdom Parliament (2010). *Identity Documents Act 2010*. UK Public General Acts 2010 c. 40.

[^41]: United States Congress (1978, 1985). *Airline Deregulation Act 1978* and *CAB Sunset Act 1984*. Pub. L. 95-504; CAB ceased operations January 1, 1985.

[^42]: Skatteverket (2020). *Personnummer i Sverige: Användning och Utveckling*. Swedish Tax Agency historical analysis.

[^43]: Ackerman, B. (2007). *The Decline and Fall of the American Republic*. Harvard University Press; and *Legislatures of the Future* (2010).

[^44]: Parliament of Australia (2003). *Legislation Act 2003* (Cth), Section 50A. https://www.legislation.gov.au

[^45]: Schoenmaker, D., & Wierts, P. (2011). *Macroprudential Policy: The Need for a Coherent Policy Framework*. Duisenberg School of Finance Policy Paper No. 13.

[^46]: United States Congress (2001). *USA PATRIOT Act*. Pub. L. 107-56, Section 215.

[^47]: United States Congress (2015). *USA FREEDOM Act*. Pub. L. 114-23.

[^48]: Davis, J. P. (2017). Sunset clauses in Australian legislation. *Adelaide Law Review*, 38, 175–194.

[^49]: IETF (2024). *Selective Disclosure for JWTs (SD-JWT)*. draft-ietf-oauth-selective-disclosure-jwt; *SD-JWT-based Verifiable Credentials*. draft-ietf-oauth-sd-jwt-vc.

[^50]: W3C (2024). *Verifiable Credentials Data Model v2.0*. W3C Candidate Recommendation.

[^51]: European Commission (2024–2025). *EUDI Wallet Architecture and Reference Framework*, versions 1.4 and 1.5. https://github.com/eu-digital-identity-wallet

[^52]: Ohm, P. (2010). Broken promises of privacy: Responding to the surprising failure of anonymization. *UCLA Law Review*, 57, 1701.

[^53]: Shamir, A. (1979). How to share a secret. *Communications of the ACM*, 22(11), 612–613.

[^54]: Pedersen, T. P. (1991). Non-interactive and information-theoretic secure verifiable secret sharing. In *CRYPTO '91*. Lecture Notes in Computer Science, vol. 576.

[^55]: Boneh, D., Lynn, B., & Shacham, H. (2001). Short signatures from the Weil pairing. In *ASIACRYPT 2001*. Lecture Notes in Computer Science, vol. 2248.

[^56]: Komlo, C., & Goldberg, I. (2020). *FROST: Flexible Round-Optimized Schnorr Threshold Signatures*. Selected Areas in Cryptography 2020.

[^57]: Boneh, D., & Shoup, V. (2023). *A Graduate Course in Applied Cryptography*. https://crypto.stanford.edu/~dabo/cryptobook/

[^58]: Komlo, C., & Goldberg, I. (2020). *FROST: Flexible Round-Optimized Schnorr Threshold Signatures*. Selected Areas in Cryptography 2020.

[^59]: Trail of Bits, OpenZeppelin, Quantstamp (2017–2024). *Multi-Signature and Bridge Governance Post-Mortem Series* (Parity, Multichain, Ronin, Wormhole). Public security audit reports.

[^60]: State of California (2018). *California Consumer Privacy Act (CCPA)*. Cal. Civ. Code § 1798.100 et seq.; specifically § 1798.135.

[^61]: European Parliament & Council (2016). *General Data Protection Regulation (GDPR)*. Regulation (EU) 2016/679, Article 17.

[^62]: Cavoukian, A. (2009). *Privacy by Design: The 7 Foundational Principles*. Information & Privacy Commissioner of Ontario.

[^63]: Mathur, A., et al. (2019). Dark patterns at scale: Findings from a crawl of 11K shopping websites. *Proceedings of the ACM on Human-Computer Interaction*, 3(CSCW).

[^64]: Narayanan, A., & Shmatikov, V. (2008). Robust de-anonymization of large sparse datasets. *IEEE Symposium on Security and Privacy 2008*.

[^65]: European Commission (2024–2025). *EUDI Wallet ARF v1.4/v1.5*. Same as note 51. **Note**: the present paper takes ARF v1.4/v1.5 as the case-study object for prima facie slippage evidence; from 2025-12 onward the ARF adopted a Cooperation Group rolling-iteration format (without static version numbers), but the structural conclusions are unchanged.

[^66]: State of California (2023). *Assembly Bill 1043 (AB 1043)*. Cal. Civ. Code § 22585.

[^67]: California Office of the Attorney General (2024). *Memorandum on AB 1043 Implementation Guidance*.

[^68]: May, T. C. (1992). *The Crypto Anarchist Manifesto*. Distributed at Hackers Conference; Hughes, E. (1993). *A Cypherpunk's Manifesto*.

[^69]: Friedman, D. D. (1989). *The Machinery of Freedom: Guide to a Radical Capitalism* (2nd ed.). Open Court.

[^70]: Greenwald, G. (2014). *No Place to Hide: Edward Snowden, the NSA, and the U.S. Surveillance State*. Metropolitan Books; Lyon, D. (2014). *Surveillance after Snowden*. Polity.

[^71]: Anderson, E. (2017). *Private Government: How Employers Rule Our Lives (and Why We Don't Talk about It)*. Princeton University Press.

[^72]: Habermas, J. (1996). *Between Facts and Norms: Contributions to a Discourse Theory of Law and Democracy* (W. Rehg, Trans.). MIT Press.

[^73]: Privacy & Scaling Explorations (PSE) (2023–2025). *Technical Assessments of EUDI Wallet ARF and SSI Implementations*. https://pse.dev

[^74]: World Bank (2021). *Global Findex Database 2021: Financial Inclusion, Digital Payments, and Resilience in the Age of COVID-19*.

[^75]: Federal Reserve (2020). *Synthetic Identity Fraud in the U.S. Payment System*. White Paper, Federal Reserve.

[^76]: Niskanen, W. A. (1971). *Bureaucracy and Representative Government*. Aldine-Atherton.

[^77]: Olson, M. (1965). *The Logic of Collective Action: Public Goods and the Theory of Groups*. Harvard University Press.

[^78]: Buchanan, J. M., & Tullock, G. (1962). *The Calculus of Consent: Logical Foundations of Constitutional Democracy*. University of Michigan Press.

[^79]: United States Congress (1978, 1999). *Ethics in Government Act of 1978*, Independent Counsel Act provisions, expired 1999 without renewal.

[^80]: Parliament of Australia (2005, 2014). *Anti-Terrorism Act (No. 2) 2005* (control orders provisions); selected control orders provisions sunset and were not renewed.

[^81]: Parliament of Canada (2001, 2007). *Anti-terrorism Act 2001*, Sections 83.28 and 83.3 sunset votes 2007.

[^82]: Judicial Yuan Council of Grand Justices, Taiwan (2005). *J.Y. Interpretation No. 603* (Household Registration Act Article 8, paragraphs 2 and 3: fingerprinting and storage). Judicial Yuan.
