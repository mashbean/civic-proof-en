---
title: "The Passport-Rooted Paradox: Why Proving 'Not a State Subject' Fails in Authoritarian Contexts"
description: "The Sovereignty-Root Paradox (SRP) is formalized as a conjunctive-necessary-condition proposition: when the adversary against which a civic experiment is directed includes the issuing state, a state-issued passport root cannot, standing alone, bear the structural weight of that experiment. SRP shares the same conjunctive architecture as the H1' three-wall thesis (article 03), the T three-element test (article 04), the IT' impossibility triangle (article 05), and the CB-Justice D1*∧D2* conditions (article 06), though it operates at a different normative level. The present analysis inventories six threats (D1–D4b) within the ICAO eMRTD PKI governance chain plus eight cross-regional cases (Russia, Iran, Belarus, Turkey, Hong Kong, North Korea, Syria, Eritrea) exhibiting four primary and two boundary forms of passport weaponization (W1–W6), and proposes a Multi-Rooted Civic Proof design skeleton (R1 passport root + R2 community root + R3 institutional root + R4 self-custodied root + D1/D2/D3 degradation criteria), together with five boundary conditions (B1–B5) and the UNHCR Iris in Jordan case. The passport root remains the highest-coverage root (approximately two billion); multi-rooted architecture is a supplement, not a replacement."
pubDate: 2026-05-05
tags: ["civic-proof", "passport-rooted", "sovereignty-root-paradox", "ICAO", "zkPassport", "multi-rooted-civic-proof", "statelessness", "exile-community", "doctoral-research", "Ch5-civic-experiment"]
category: "Civic Proof and Sovereignty Prerequisites"
aiModel: "Claude Opus 4.7"
aiPrompt: "What is the PKI governance structure of ICAO eMRTD (electronic passport chips)? Can an issuing state unilaterally revoke or refuse to issue passports? What happens to zkPassport-family schemes after revocation? How fragile is the reliability of passport-rooted civic proof in authoritarian and exile contexts? Can it genuinely protect citizens from surveillance by their state of origin? Do Pegasus, Apple Find My, and cross-border law enforcement cooperation constitute root disturbances for passport-rooted pseudonymity? Do non-sovereign supplementary roots (multi-rooted civic proof) exist that can mitigate this paradox?"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-05-05-passport-rooted-paradox"
aiGeneratedDate: 2026-05-05
humanReviewed: false
lang: "en"
slug: "2026-05-05-passport-rooted-paradox"
---

## § 1. Introduction: The Structural Paradox Internal to Passport-Rooted Civic Experiments

Over the past five years, the cryptographic community has developed a set of zero-knowledge proof tools anchored in the NFC chips of ePassports (electronic passports) as their trust root, enabling citizens to demonstrate "I am a real person, I am a citizen of this country, I am over eighteen" without exposing their true identity. This family of tools includes zkPassport, Anon Aadhaar, Self.xyz, the Rarimo Freedom Tool, Self Protocol, and Privado ID.[^1] The approach carries a compelling promise: by treating the electronic passport PKI under ICAO Doc 9303 as the trust root—a standard under which more than two billion persons already hold ePassports[^2]—civic proof (公民證明) can attain near-universal "globally verifiable" coverage without requiring any new identity infrastructure to be constructed.

Yet between the political-philosophical premises of this technical approach and its engineering design, there is a structural rupture that is evaded by both ICAO regulations and the academic zkPassport literature. When the adversary against which a civic experiment is directed includes the issuing state itself—as in the case of Russian anti-war activists, Iranian women's-rights organizers, Belarusian opposition members, the 234,000 Turkish citizens stripped of nationality following the 2016 coup attempt, holders of British National (Overseas) passports in Hong Kong, North Korean defectors, Syrian overseas communities, or Eritrean exiles—"using a state-issued passport to prove that one rejects that state" becomes structurally unreliable. The state is simultaneously the issuer of the trust root and the adversary against which civic proof seeks protection.

This structural rupture can be named with precision. The present analysis designates it the **Sovereignty-Root Paradox (SRP)**: when the institutional cluster I_R that issues trust root R stands in an adversarial relationship with the target group T_R that R is designed to protect, and when P(I_R taking hostile action against T_R | condition c, political project P) is non-negligible, then R cannot, *standing alone*, serve as the trust root for P.[^3] SRP is in character a normative-empirical composite proposition, not a cryptographic theorem; its empirical basis consists of six identifiable threats (D1 issuing authority / D2a DS revocation / D2b CSCA revocation / D3 DS signature refusal / D4a downstream list exclusion / D4b upstream PKD withdrawal) within the ICAO PKI governance chain over the past fifteen years, as well as a systematic cross-case structure of four primary and two boundary forms of passport weaponization (W1 non-renewal / W2 unilateral revocation / W3 status downgrade / W4 cross-border tracking / W5 exit control / W6 overseas extortion) observed in authoritarian states against politically inconvenient populations.

The present analysis is organized as follows. § 2 dissects the three-tier certificate architecture and six governance threats of ICAO eMRTD PKI, and distinguishes among the three generations of ePassport (BAC / EAC v1 / PACE+EAC v2)—a distinction critical for determining which passports the security claims of zkPassport-family schemes actually cover. § 3 draws on eight cases—Russia, Iran, Belarus, Turkey, Hong Kong, and others—to verify the systematic structure of passport weaponization and the trigger probability of SRP. § 4 formalizes SRP as a conjunctive-necessary-condition proposition within the theoretical lineage of Schmitt → Agamben → Sassen, and places it in comparative relief against the H1' three-wall thesis of article 03, the T three-element test of article 04, the IT' impossibility triangle of article 05, and the CB-Justice D1*∧D2* conditions of article 06—all sharing isomorphic conjunctive structure while operating at distinct levels. § 5 proposes the formal design skeleton of **Multi-Rooted Civic Proof (MR-CivicProof)**, comprising R1 passport root + R2 community root + R3 institutional root + R4 self-custodied root, together with design criteria D1 (failure-graceful degradation) + D2 (cryptographic composability) + D3 (transparent provenance with holder selectivity). § 6 examines the limitations of multi-rooted architecture through the UNHCR Iris in Jordan case and five boundary conditions (B1 coverage trade-off / B2 statelessness / B3 NGO political economy / B4 institutional-root dual mandate / B5 self-custodied root access thresholds for vulnerable populations). § 7 develops policy recommendations and engineering interfaces. § 8 concludes.

The core position of the present analysis is this: the passport root is useful, but it is not the sole root. Multi-rooted civic proof supplements rather than replaces it, and the five boundary conditions must be addressed simultaneously; neglecting any one of them will transfer costs to the very populations least capable of bearing them.

---

## § 2. The Three-Tier Architecture and Six Governance Threats of ICAO eMRTD PKI

### § 2.1 Three-Tier Certificate Architecture and Two Governance Chains

ICAO Doc 9303, 8th edition (2021), Part 12, specifies that the security of every electronic passport chip is anchored in a three-tier PKI: **Country Signing Certificate Authority (CSCA) → Document Signer (DS) → Document Security Object (SOD)**.[^4] The CSCA is self-signed by a designated authority of the issuing state, typically with a validity period of three to five years; the DS is a batch certificate issued by the CSCA, with a validity period of approximately three to six months; each passport chip contains a SOD issued by that DS, whose hash covers all data groups on the chip (DG1 personal data / DG2 facial photograph / DG3 fingerprints / DG14 EAC public key, and others).[^5]

For a verifying state to validate a foreign ePassport, it must obtain the CSCA public key of the issuing state. ICAO specifies two acquisition channels: the **ICAO PKD (Public Key Directory)**, a central repository to which issuing states upload CSCA and DS public keys for downloading by other states, and **bilateral Master List exchange**, maintained by particular states (typically Germany's BSI, the U.S. CBP, and Singapore's ICA) as their own "trusted foreign CSCA lists," which are disseminated externally.[^6] As of 2024, approximately 91 states upload to the ICAO PKD and approximately 130 states download from it, yet roughly 150 states issue ePassports globally.[^7] This means that even setting political refusals aside, PKD coverage is not universal. The bilateral Master List constitutes a parallel governance chain alongside ICAO PKD; for threat-modeling purposes, these are two independent pathways and must not be conflated.

### § 2.2 Three Generations of ePassport: Why zkPassport Security Claims Cover Only the Second Generation and Later

The security mechanisms of ICAO eMRTDs divide into at least three generations.[^8]

**First generation — BAC (Basic Access Control)**: Communication over NFC is encrypted using a symmetric key derived solely from the MRZ (machine-readable zone) character string. Academic and conference research by Hoepman (2008),[^9] Witteman and Oostdijk (2008),[^10] and Nohl and Krißler (2008)[^11] has demonstrated that BAC is vulnerable to skim-and-replay attacks and offline brute-force decryption. Hancke (2006)[^12] and Carluccio et al. (2007),[^13] whose paper *E-Passport: The Global Traceability Or How To Feel Like a UPS Package*, further demonstrated distance attacks and global traceability. Many passports issued before the 2010s possess only BAC.

**Second generation — EAC v1 (Extended Access Control v1)**: Under BSI TR-03110, Chip Authentication and Terminal Authentication are added, enabling the chip itself to demonstrate possession of the DG14 private key and to release sensitive data groups such as DG3 fingerprints only to authorized inspection systems.[^14]

**Third generation — PACE+EAC v2 (Password Authenticated Connection Establishment)**: PACE replaces BAC, employing a Password-Authenticated Key Exchange protocol that resists offline brute-force attacks.[^15] The European Union has progressively required newly issued passports to adopt PACE since 2014.

The security claims of zkPassport-family schemes (Andolfo et al. 2024, IACR ePrint 2024/1377)[^16] presuppose verification of the chip signature chain for second-generation and later passports; for first-generation BAC passports, the privacy guarantees of the entire ZK scheme are lost at the NFC communication layer. Treating the entire ICAO eMRTD system as "a single PKI" misrepresents multi-rooted design; the R1 passport root itself is not homogeneous across the three generations of ePassport.

### § 2.3 Six Governance Threats (D1 / D2a / D2b / D3 / D4a / D4b)

Drawing from ICAO Doc 9303 Part 12, BSI TR-03110, the ENISA ePassport security assessment, EU LoTL regulations, and existing academic security research, passport-rooted civic proof faces at least six identifiable threats along the PKI governance chain.[^17]

**D1 — Issuing authority**: The passport authority of the issuing state refuses to process, delays, or conditions on political concessions the processing of a passport application. This corresponds to W1 (non-renewal) in the weaponization taxonomy. It is the most common form, affecting individuals; it requires no cryptographic action—the passport simply need not be issued.

**D2a — DS revocation**: The CSCA of the issuing state publishes a Certificate Revocation List (CRL) against a particular Document Signer certificate and notifies global verifiers through the ICAO PKD or bilateral Master List channels. This invalidates all passports in the entire DS batch (a single DS typically signs between 1,000 and 10,000 passports). A critical clarification: **ICAO regulations themselves provide no revocation mechanism for the chip itself**. What is referred to as "revoking a chip" is in practice the superimposition of D2a with the next round of the Master List pathway—it is not direct physical revocation. Under authoritarian states, this can be weaponized to "void the passports of a group of dissidents through batch invalidation."

**D2b — CSCA revocation**: The issuing state self-signs a CRL against its own CSCA and notifies the world. This is a nuclear-level operation, causing an entire cohort of the state's ePassports to fail at the verifier end. Historically rare as a direct act, it is nonetheless technically feasible: Estonia's 2017 ROCA vulnerability incident (CVE-2017-15361) involved large-scale revocation and reissuance of ID-card certificates,[^18] providing a precedent (the ID-card and ePassport are distinct systems, but the CSCA revocation logic is analogous).

**D3 — DS signature refusal**: The personalization center of the issuing state refuses to sign SODs for particular individuals or groups. This is more granular than D2a: rather than revoking an existing DS, the state simply declines to issue new passports to specified applicants. This corresponds to the W1+W2 combination in the weaponization taxonomy and can be applied to "blacklist and simultaneously revoke existing passports."

**D4a — Downstream list exclusion**: A verifying state removes a foreign CSCA from its local trust list. For example, the UK FCDO's 2021 refusal to recognize certain travel documents newly issued by the People's Republic of China for BNO holders in Hong Kong[^19] is a political instantiation of D4a—operationally, the verifying state declines to continue recognizing the document, though China did not revoke the UK's CSCA. This corresponds to W3 (status downgrade).

**D4b — Upstream PKD withdrawal**: The issuing state withdraws from the ICAO PKD the DS or CSCA public keys it had previously uploaded. This deprives all verifiers relying on PKD (rather than bilateral Master Lists) of the ability to verify that state's passports. It partly corresponds to W4 (cross-border tracking) and can be used to "collectively sever the passport verifiability of a diaspora group."

The six threats D1–D4b form a conjunctive structure: in authoritarian states' treatment of exile citizens, individual threats may be combined (e.g., W1+W2+W5: non-renewal + revocation + exit control). ZK wrapping schemes such as zkPassport, Anon Aadhaar, and Rarimo can provide unlinkability in the cryptographic sense, but their trust anchor remains the CSCA public key; once any of the six threats is triggered, the ZK proof fails correspondingly.

### § 2.4 The EU LoTL and the ICAO System in Parallel

EU eIDAS 1.0 (Regulation (EU) 910/2014)[^20] and eIDAS 2.0 (Regulation (EU) 2024/1183)[^21] establish a LoTL (List of Trusted Lists) governance chain that runs parallel to ICAO PKI, primarily for qualified trust services (such as electronic signatures and qualified electronic seals). LoTL and ICAO PKD are governance-logically isomorphic: issuing states upload; verifying states download; a central directory maintains the lists. The design implication for multi-rooted civic proof is that even within the European Union, the premise that "the signing authority is the state" remains unchanged; LoTL constitutes a separate attack surface for D1–D4b.

---

## § 3. Eight Cases of Passport Weaponization and the 4+2 Systematic Structure

Passport weaponization, across the eight cases examined, exhibits a systematic structure that cuts across geographic regions, regime types, and political contexts; it is not sporadic behavior on the part of individual authoritarian states. The eight cases below are treated as a formal distribution comparison rather than as individually developed case narratives; their purpose is to support the empirical claim that W1–W6 are recurrently instantiated forms.[^22]

### § 3.1 Four Primary Forms and Two Boundary Forms

Summarizing the formal distribution across eight cases:

- **W1 — Non-renewal**: Refusal to process passport applications or extend their validity. Commonly encountered at overseas consulates.
- **W2 — Unilateral revocation**: Publication of a CRL against an existing passport, or marking it as invalid within the passport system.
- **W3 — Status downgrade**: A previously recognized travel document is refused by the verifying state, or replaced with a weaker travel document (such as a Refugee Travel Document or a 1954 Stateless Travel Document).
- **W4 — Cross-border tracking**: Pressure applied to exile citizens through INTERPOL Red Notices, Pegasus/Predator commercial spyware, or third-country law enforcement cooperation.
- **W5 — Exit control**: Restriction on the applicant's departure from the issuing state, decoupling "obtaining a passport" from "being permitted to leave."
- **W6 — Overseas extortion**: Demanding that overseas citizens pay special fees, submit political-attitude statements, or pay a Diaspora Tax to maintain passport validity.

W1–W4 are the four primary forms (each case exhibits at least one); W5–W6 are the two boundary forms (typical of highly closed and economically coercive regimes).

### § 3.2 The Eight Cases

**Russia (W1+W2, including W5)**: Following the February 2022 invasion of Ukraine, Russian overseas embassies refused to issue or renew passports for anti-war activists documented by OVD-Info, Memorial, and other independent human rights organizations.[^23] In April 2024, the Russian State Duma passed amendments adding "spreading false information about the Russian military" as a statutory basis for nationality revocation.[^24] An important distinction is warranted: Russia's relatively permissive stance toward dual nationality among middle-class exiles means that the heaviest practical burden of weaponization falls on lower-income exiles who hold no second passport.

**Iran (W1+W2, with a women-specific layer)**: Article 18 of the Iranian Passport Law of 1962 requires women to obtain written consent from a guardian (father or husband) to travel abroad. Following the Mahsa Amini protests of 2022, IranWire documented at least twelve publicly reported cases of passport revocation targeting journalists and activists.[^25] Citizen Lab simultaneously documented attacks by the Predator commercial spyware against Iranian exile journalists.[^26] For Iranian women in exile, D1 (issuing authority) and D2a (DS revocation) are compounded by the guardian consent law.

**Belarus (W1+W2, including W5 male exit restrictions)**: Following the mass protests of 2020, Belarusian Presidential Decree No. 278 (2023) prohibited citizens from renewing passports at Belarusian consulates abroad, requiring them to return to Belarus to do so.[^27] For exile opposition members, this constitutes a direct "no return, no passport" form of extortion. BYPOL, Viasna, and other organizations have documented numerous cases.

**Turkey (W2, large-scale)**: Following the failed coup of July 2016, the Turkish government, through Emergency Decree (KHK) procedures, revoked the nationality and passports of individuals alleged to have connections to the Gülen movement; the Stockholm Center for Freedom's 2018 count put the number of revoked passports at approximately 234,000.[^28] This is a paradigm case in which a single administrative decree, without individual adjudication, achieves mass revocation—directly corresponding to the group application of D3 (DS signature refusal).

**Hong Kong BNO (W3)**: In 2021, the UK FCDO opened a BNO visa pathway in response to Hong Kong's National Security Law, whereupon the People's Republic of China declined to recognize the BNO as a valid identity document.[^29] This corresponds to the political instantiation of D4a (downstream list exclusion): technically, China did not revoke the UK's CSCA; operationally, Chinese verifiers ceased to recognize BNO documents. Hong Kong Watch's 2022 report documented more than 140,000 persons who had arrived in the UK under the BNO visa scheme.[^30]

**North Korea (W5+W3)**: North Korea systematically withholds passports from the vast majority of its citizens, issuing them only to elite segments of the population; defectors obtain "temporary travel certificates" at the Chinese border, which are universally downgraded at verifier end.[^31] The Database Center for North Korean Human Rights has tracked the travel document situation of defectors systematically.

**Syria — overseas extortion (W6)**: Syrian overseas citizens applying to renew their passports must pay special fees of between USD 300 and 800, and in some cases must submit political-attitude statements.[^32] A 2020 Refugees International report and a 2019 Syrian Network for Human Rights report document specific cases. The Syrian pattern tends toward conditional exchange extortion; on the surface, a passport remains obtainable, but the actual cost threshold for exiles approaches de facto refusal.

**Eritrea — 2 percent Diaspora Tax (W6)**: The Eritrean government requires overseas citizens to pay an annual Diaspora Tax of 2 percent of their income; failure to do so prevents renewal of passports, registration of land, or processing of inheritance matters.[^33] UN Security Council Resolution 2023 (2011) condemned the practice but did not abolish it.[^34]

### § 3.3 Digital Downgrading of Relief Documents: Empirical Basis for Design Criterion D1

When W1–W6 are triggered, affected persons may sometimes apply for a Refugee Travel Document (RTD) under the 1951 Refugee Convention, or a Stateless Travel Document under the 1954 Convention. However, these relief documents encounter high rejection rates in practical KYC contexts: a 2023 EUAA report found that RTDs and STDs face rejection rates of approximately 18–43 percent in financial, telecommunications, and cross-border transaction KYC settings, compared with 2–7 percent for valid passports issued by the home state.[^35] This empirical finding constitutes the direct basis for MR-CivicProof design criterion D1 (policy-driven graceful degradation). Relief documents are not "similar but inferior" roots; in practice, they are roots "subject to systematic discounting within the actual verification ecosystem." If degradation logic is not explicitly addressed, a passport-rooted design will internalize the costs borne by stateless persons and exiles as a "personal document application failure rate."

### § 3.4 Limits on the Causal-Argument Strength

The upper bound of inferential strength for the induction across W1–W6 is "moderate-strong." The cross-case variation in political context is sufficient to rebut the strong claim that "all authoritarian states employ the same playbook" (democratic constitutional states and authoritarian structures exhibit qualitatively different trigger probabilities for D1–D4b), while simultaneously supporting the claim that "passport-rooted civic proof faces structural rather than individual risk in the authoritarian-against-exile scenario." The present analysis locates the claim about SRP at the level of a normative-empirical composite proposition whose empirical basis is sufficient; the upper bound of argument strength is assessed as moderate-strong.

---

## § 4. Formalizing SRP: Sovereign Container Logic and the Conjunctive-Necessary-Condition Structure

§§ 2 and 3 have supplied two evidentiary chains: ICAO PKI governance threats and passport weaponization cases. The present section synthesizes these two empirical chains, within the theoretical lineage of Schmitt → Agamben → Sassen, into a single normative proposition: the **Sovereignty-Root Paradox (SRP)**.

### § 4.1 Three-Step Reconstruction of the Sovereign Container

To explain "why a state-issued passport root cannot be used in isolation in a scenario of political contestation against the issuing state," it is necessary first to establish what the structure of sovereignty is. The present analysis employs a three-step reconstruction.

**First step — Schmitt's decisionist theory**: In *Politische Theologie* (1922),[^36] Schmitt defined the sovereign as "he who decides on the exception" (*Souverän ist, wer über den Ausnahmezustand entscheidet*); in *Der Begriff des Politischen* (1932),[^37] he further defined the essence of the political as the friend/enemy distinction. The core message of this definition is that "the sovereign retains the power to act outside ordinary law" (not a claim about who the sovereign concretely is). For the passport root, this implies that acts such as CSCA issuance, DS revocation, and PKD withdrawal are, in the normative sense, not merely technical operations; the issuing state retains decisional authority over "who qualifies as a citizen and who may hold a verifiable passport, even in a state of exception." Turkey's post-2016 coup KHK emergency decree revoking approximately 234,000 passports[^38] is a contemporary instantiation of this decisional authority.

**Second step — Agamben's state of exception**: In *Homo Sacer* (1995)[^39] and *State of Exception* (2003),[^40] Agamben described the state of exception as "the normal structure of modern sovereignty" and distinguished *zoē* (bare life) from *bios* (political life). For designers of passport-rooted civic proof, the key insight is this: when citizens are stripped of their passports (W1 / W2 / W3), they do not disappear in the biological sense, but they are expelled from the domain of "political life recognizable by modern verification systems"—which is precisely the contemporary cryptographic version of what Arendt called, in *The Origins of Totalitarianism* (1951),[^41] the loss of statelessness meaning "the loss of the right to have rights."

**Third step — Sassen's disassembled sovereignty**: In *Territory, Authority, Rights* (2006),[^42] Sassen argued that "sovereignty is being disassembled but has not disappeared": in cross-border governance (ICAO standards, INTERPOL, Frontex, EU LoTL, SWIFT), certain functions of sovereignty have been outsourced to international organizations and technical standards, yet the core "decisional authority over who counts as a citizen" remains vested in the nation-state. Brown's *Walled States, Waning Sovereignty* (2010)[^43] and Krasner's *Sovereignty: Organized Hypocrisy* (1999)[^44] reinforce this argument from different angles: the formal dimensions of sovereignty are dispersed through technical standards, but the power to exclude specific populations is preserved and can be mobilized at will. Foucault's *Discipline and Punish* (1975)[^45] and *Security, Territory, Population* (1977–78)[^46] on the genealogy of governmentality provide a more granular account of "how sovereignty operates through technical instruments such as data registration, biometrics, and mobility control."

The composite implication of the three steps is: **sovereignty in its institutional manifestation is a cross-level institutional cluster** (encompassing legislation, executive decree, judicial interpretation, diplomatic recognition, technical standards, and cross-border cooperation; its form is neither singular nor static). To avoid writing sovereignty as a single actor, the present analysis designates this institutional cluster **I_R (the institutional cluster issuing R)**. The denationalization literature—Macklin (2007),[^47] Lavi (2015),[^48] Gibney (2013),[^49] and Shachar (2009)[^50]—documents the contemporary expressions of I_R: denationalization as a sovereign technique, ranging from counter-terrorism statutory amendments to deprivation of dual nationality.

### § 4.2 Formal Statement of the Revised SRP

Let R denote a trust root (typically the ICAO eMRTD CSCA chain), I_R the institutional cluster issuing R (red line: sovereignty must not be written as a singular, static entity), T_R the target group that R is designed to protect, and c a political condition (including but not limited to: states of exception, emergency decree, counter-terrorism legislation, and national security exceptions). Let P denote the political project that T_R seeks to implement (typically, "a civic experiment in which citizens contest state surveillance").

**Revised SRP**: When

> (i) the political project P of T_R constitutes action identifiable as hostile to I_R, **and**
> (ii) P(I_R takes hostile action against T_R | c, P) ≥ θ, where θ is any non-negligible threshold,

then R cannot, *standing alone*, serve as the trust root for P.

Two critical red lines:

**Red line one**: The conditional probability P(... | c, P) ≥ θ is not a logical entailment; it is not the strong claim that "every authoritarian state is adversarial at every moment." SRP is a conditional-probability proposition: given condition c (including authoritarian governance or a state of exception) and political project P (including an anti-surveillance experiment), the probability that I_R takes hostile action against T_R is non-negligible. Its empirical basis is the eight cases of § 3 and the six threats of § 2.

**Red line two**: SRP is in character a normative-empirical composite proposition, not a cryptographic theorem. Its normative dimension is the engineering-ethical judgment that "when I_R and T_R are in opposition, R is insufficient standing alone"; its empirical dimension is the inductive finding that the conditional probability is non-negligible. The composite proposition thus formed should not be read as a theorem; it is correctly read as a normative premise that must be addressed in multi-rooted civic proof design.

**Normative inference**: When P is "a civic experiment in which citizens contest state surveillance," c includes authoritarian governance or a state of exception, and I_R is the state itself, then R = the state-issued passport root cannot, standing alone, support P.

### § 4.3 Isomorphism with Other Articles: Conjunctive Structure Recurring at Different Levels

SRP is logically isomorphic in structure to the core propositions of articles 03, 04, 05, and 06 of this series, while operating at different levels:

- **Article 03 H1' three-wall thesis**:[^51] the conjunctive necessary condition for the engineering structure of digital association, requiring all three walls to hold simultaneously for civic dialogue quality to obtain. SRP and H1' share the same conjunctive structure, but H1' operates at the engineering-structure level while SRP operates at the normative-premises level.
- **Article 04 T three-element test**:[^52] the legal-institutional conditions for pseudonymous participation (Trigger / Authority / Remedy, all three required). T addresses the legal-institutional conditions for "pseudonymity plus ex post accountability"; SRP addresses the sovereignty premise that "I_R cannot be equivalent to Adversary(T_R)." In the normative sense, SRP is a sovereign-container extension of T.
- **Article 05 IT' impossibility triangle**:[^53] the engineering trade-off triangle of sybil-resistance design across "cost threshold, privacy strength, and coverage." IT' operates at the engineering trade-off level; SRP operates at the normative-premises level. The levels are distinct: SRP addresses the more upstream judgment of "whether R should be treated as the sole root at all," not a trade-off description.
- **Article 06 CB-Justice D1*∧D2***:[^54] the conjunctive necessary conditions of civic burden redistribution—D1* (costs not transferred to the vulnerable) and D2* (consent is substantive rather than formal) must hold simultaneously. SRP and CB-Justice share the conjunctive structure, but CB-Justice operates at the distributive-justice level and SRP at the sovereignty-premises level.

Stacking the four levels: **SRP occupies the most upstream sovereignty-premises level; below it is the legal-institutional level of article 04's T test; below that, the engineering trade-off level of article 05's IT' triangle and the distributive-justice level of article 06's CB-Justice D1*∧D2*; at the most downstream level is the engineering-structure level of article 03's H1' three-wall thesis.** SRP's position in this hierarchical structure is that of an upstream normative condition; it does not replace articles 03, 04, 05, or 06. If the premise of SRP—that I_R is not equivalent to Adversary(T_R)—fails to hold, the conjunctive structures of the four downstream levels are normatively pierced.

### § 4.4 Interface with the DID/VC on Public Blockchain Article

The interface between the present article and the did-vc-public-blockchain article (2026-05-01) lies in the alternatives or supplements to the R1 passport root. Bhutan's NDI has been deployed on the Ethereum mainnet as a DID public verification anchor;[^55] Catalonia's 2017 referendum employed Vocdoni for on-chain voting;[^56] Rarimo's Freedom Tool uses ZK plus blockchain as a bypass root for exile citizens.[^57] These three cases illustrate that "public blockchain as trust anchor" is an intermediate form between the R3 institutional root and the R4 self-custodied root; it does not directly resolve SRP, but it provides an evidence-availability pathway not subject to unilateral D4b withdrawal by a single issuing state. An important caveat: this pathway retains its own sovereignty premise (any public blockchain depends on certain governance actors), and multi-rooted design must address the meta-level concern that "the governance of an on-chain anchor is itself part of I_R."

---

## § 5. The Multi-Rooted Civic Proof Design Skeleton

Drawing from the attack surface analysis (SA-1), the authoritarian-case analysis (SA-2), and design requirements derived by abduction from SRP (SA-3), and integrating Camenisch-Lysyanskaya 2001 anonymous credentials,[^58] Boneh-Boyen-Shacham 2004 BBS+ short group signatures,[^59] Lampson 1971 protection matrix,[^60] Anderson 2008 multi-level security,[^61] Pfitzmann-Hansen 2010 anonymity terminology,[^62] Allen 2016 Self-Sovereign Identity,[^63] Cameron 2005 The Laws of Identity,[^64] W3C VC Data Model 2.0,[^65] and W3C DID Core 1.0,[^66] the present analysis proposes a formal **Multi-Rooted Civic Proof (MR-CivicProof)** design skeleton.

### § 5.1 Formal Definition

**MR-CivicProof**: Given a set of trust roots R = {R1, R2, R3, R4} and a target group set G = ∪_i G_i (partitioned by scenario), multi-rooted civic proof satisfies:

> **(M1) Coverage**: For any g ∈ G_target, there exists at least one r ∈ R such that the verifier accepts.
> **(M2) Degradation availability**: For any g ∈ G_w (the vulnerable subset), if R1 fails for g, there still exists R_j ∈ {R2, R3, R4} providing a degradation pathway.
> **(M3) Cryptographic composability**: Any conjunction ∧ / disjunction ∨ / threshold t-of-n combination of any subset R' ⊆ R is cryptographically unambiguous and verifiable; typical primitives include BBS+ multi-issuer aggregation,[^67] Sismo composition,[^68] and Shamir 1979 threshold signature.[^69]
> **(M4) Transparent provenance with holder selectivity**: Degradation information is transparent to the verifier while the holder retains selection rights (root provenance + holder selectivity, consistent with Pfitzmann-Hansen unlinkability).

(M1)–(M4) are the four formal conditions of MR-CivicProof. They are implementable in the cryptographic sense using Camenisch-Lysyanskaya 2001 and BBS+ as base primitives, though the formal conditions themselves do not specify a particular ZK pathway (zk-SNARK / zk-STARK / Bulletproofs can each serve as carriers).

### § 5.2 R1–R4: The Four-Layer Trust Root

| Root | Name | Trust Anchor | Coverage | Primary Vulnerability | Primary Applicable Scenario |
|---|---|---|---|---|---|
| **R1** | Passport root | ICAO eMRTD CSCA → DS → SOD | Approximately two billion | Six threats D1–D4b | Mainstream scenario for citizens of democratic rule-of-law states |
| **R2** | Community root | Exile organizations / religious / cross-border NGOs | Tens of millions | Governance + funding + compliance triple pressure | Exile communities and those denied passports by authoritarian states |
| **R3** | Institutional root | UNHCR / IOM / regional refugee organizations | Approximately 9.4 million registered refugees | Dual-mandate risk | Stateless persons and refugees |
| **R4** | Self-custodied root | Web of Trust / social graph / threshold pseudonym | Hundreds of thousands | Fourfold access thresholds + responsibility transfer | Highly sensitive scenarios |

The four roots are not interchangeable equivalents. R1 remains the highest-coverage root in terms of "global verifiability"; R2, R3, and R4 each serve distinct population groups following R1 failure—R2 primarily serving exile communities, R3 primarily serving stateless persons, and R4 primarily serving highly sensitive individual cases. The present analysis adopts the position of "supplement rather than replacement": in scenarios where SRP is triggered and R1 fails, R2, R3, and R4 provide successive coverage; in routine scenarios where SRP is not triggered, R1 remains the first choice.

### § 5.3 D1 / D2 / D3: Three Degradation Design Criteria

Reasoning abductively from the empirical lessons of the eight cases and from the cryptographic literature, three design criteria are derived:

**D1 criterion — Policy-driven graceful degradation, not rank-ordered fallback**: When R1 fails (W1 / W2 triggered), the system should not simply fall through to a "second-tier version" of R2, R3, or R4; instead, it should dynamically select the most appropriate degradation pathway according to policy (dependent on the scenario: voting, financial KYC, medical registration). Brewer's 2000 CAP theorem[^70] and the distributed-systems graceful degradation literature provide design models.

**D2 criterion — Cryptographic composability of primitives**: The conjunction ∧ / disjunction ∨ / threshold t-of-n combination of multi-rooted components must be cryptographically unambiguous. BBS+ multi-issuer aggregation, Sismo composition, and Camenisch et al. 2017 anonymous attestation using composite ZK proofs[^71] provide concrete implementation pathways.

**D3 criterion — Root provenance transparent, without leaking the G_w label**: The verifier needs to know "from which root(s) this proof originates" (for risk assessment), but must not thereby be able to infer "that the holder belongs to the G_w vulnerable subset." This is implementable under the Pfitzmann-Hansen unlinkability and selective disclosure frameworks. The specific requirement is that root provenance information must not be usable as a fingerprint to distinguish "vulnerable" from "general" populations.

### § 5.4 Interface with the Article 05 SA-5 Multi-Rooted Scheme

The multi-rooted Sybil-resistance scheme of article 05 (Gitcoin Passport / Holonym KYC / BrightID + zkPassport combination) has already implemented part of the D2 criterion at the engineering level.[^72] The extension of the present article is to explicitly introduce roots beyond R1 (R2 community root, R3 institutional root, R4 self-custodied root) and to address SRP scenarios. The most important shared warning between article 05 and the present analysis is "weakest-root failure" (race to the bottom): if a multi-rooted design writes the OR composition rule too loosely, an adversary needs only to compromise the weakest root to bypass the entire system. The (M3) clause of MR-CivicProof explicitly requires that "any conjunction ∧ / disjunction ∨ / threshold t-of-n combination of any subset be cryptographically unambiguous and verifiable"—precisely in order to prevent weakest-root failure.

### § 5.5 Interface with the Wallet-as-Essential-Facility Article

The wallet-as-essential-facility article (article E1) advances the normative claim that "wallet as essential facility": when a wallet becomes the essential facility through which citizens access various services, the design obligations of that wallet should correspond to the non-discrimination obligations under the essential facility doctrine. The multi-rooted design of MR-CivicProof is the corresponding implementation at the wallet layer: wallets must support multi-root anchoring, must not differentiate against holders of R2, R3, or R4, and must disclose the provenance of each root. The regulatory-category distinction between commercial wallets and government wallets in article 06 SA-5[^73] is directly relevant here: the dual-mandate risk of the R3 institutional root and the advertising/data-monetization logic of commercial wallets point in different governance directions, and wallet regulation must address them distinctly.

---

## § 6. Five Boundary Conditions and the UNHCR Iris in Jordan Case

Without the five boundary conditions developed below, the engineering design skeleton of MR-CivicProof will degrade at the governance layer into "weakest-root failure," "cost transfer to substitute roots," or "institutional roots becoming another form of sovereign container." The present section examines the constraints that multi-rooted architecture must address in actual deployment, through the UNHCR Iris in Jordan case and five boundary conditions.

### § 6.1 B1: Coverage vs Vulnerability Trade-off

The passport root R1 covers approximately two billion persons.[^74] UNHCR has registered 4.4 million stateless persons,[^75] while academic estimates put the actual stateless population above 15 million.[^76] The R3 institutional root (including UNHCR's registration of approximately 9.4 million refugees) is in the tens of millions; the R2 community root (exile organizations, cross-border NGOs, religious communities) is similarly in the tens of millions; the R4 self-custodied root (Web of Trust / social graph) is in the hundreds of thousands.

This magnitude distribution determines the non-substitutability of R1 in terms of coverage: if a multi-rooted design marginalizes R1, it would surrender the convenience of the two billion global ePassport holders to R2, R3, and R4 systems whose scalability has not yet been validated. The "supplement rather than replacement" position of the present analysis is grounded precisely in this magnitude judgment: in routine scenarios where SRP is not triggered, R1 remains the first choice; the engineering significance of R2, R3, and R4 lies in their degradation availability when R1 fails.

### § 6.2 B2: Scope Difference Between Statelessness and General Cross-Border Issues

Statelessness and general cross-border issues should not be merged into a single normative category. The 1954 Convention (Relating to the Status of Stateless Persons)[^77] and the 1961 Convention (on the Reduction of Statelessness)[^78] have approximately 100 state parties each, considerably fewer than the 149 parties to the 1951 Refugee Convention.[^79] Birth registration rates in sub-Saharan Africa and South Asia remain below 80 percent,[^80] meaning that large numbers of *de facto* stateless persons have never been enrolled in any trust root. Myanmar's Rohingya population and the Dominican Republic's 2013 revocation of citizenship from Haitian-origin nationals[^81] are contemporary examples of states actively manufacturing statelessness.

For multi-rooted civic proof design, the implication of B2 is: if the R3 institutional root adopts biometric identification (such as UNHCR Iris) as the sole identifier, it converts the irreversible biometric characteristics of stateless persons into a new vulnerable root (structurally isomorphic with the warning against Worldcoin in article 05). The R2 community root requires a "root-proxy mechanism" to assist stateless persons in anchoring; Sadiq's *Paper Citizens* (2009)[^82] documents "substantive citizenship" pathways that show community-level identification can function without state recognition, though its legal validity remains limited.

### § 6.3 B3: Political Economy of NGO and Community Roots

R2 community roots (typically exile NGOs, cross-border communities, and religious organizations) are not inherently non-political. NGO governance faces three-directional pressure: from donors (OECD-DAC statistics show global NGO funding is concentrated among no more than five major donor states[^83]), from host states (local registration and compliance obligations), and from counter-terrorism finance law (FATF standards on customer due diligence and sanctions-list screening). Triple-directional pressure means that R2 and R3 face structural vulnerability on the question of "not being infiltrated by a particular government." Although the exact number of nodes to which the Vocdoni deployment for Catalonia's 2017 referendum migrated overseas after deployment is not available in precise public form (TODO-VERIFY), the fact that the deployment itself relied on the distribution of cross-border nodes has been documented in technical records.[^84]

Design implication: deployment of R2/R3 in multi-rooted civic proof must incorporate "root-diversity indicators"—that is, verifiers should be able to assess the governance structure of the root from which a given proof originates (donor / host state / issuing institution), and no single donor or government should be permitted to dominate the aggregate credibility of R2/R3.

### § 6.4 B4: UNHCR/IOM Dual-Mandate Risk

The UNHCR Iris in Jordan case (Zaatari deployment 2013 → WFP Building Blocks blockchain aid distribution 2018 → 9.4 million refugee registrations globally by 2024)[^85] constitutes the central case for evaluating the governance risks of the R3 institutional root.

The ODI 2019 *Eye to Eye* report[^86] found that over 70 percent of respondents did not believe they could still receive aid if they refused Iris enrollment. This is direct empirical evidence of the "compulsion" dimension in SA-5: institutional roots in practice find it difficult to maintain a genuinely "voluntary" character. On data governance, there are data flows and sharing arrangements among UNHCR ProGres v4, IrisGuard EyeCloud Health, and Cairo Amman Bank. Human Rights Watch's 2021 *I Got the Card by Mistake*[^87] revealed that certain fields in UNHCR ProGres had been shared with the Myanmar government (in the Rohingya case)—a concrete manifestation of the R3 institutional root's "dual-mandate" (protection versus cooperation with the host state) risk.

Madianou's *Technocolonialism* (2019),[^88] Latonero's *Stop Surveillance Humanitarianism* (2018),[^89] Latonero and Kift's *On Digital Passages and Borders* (2018),[^90] Jacobsen's *On Humanitarian Refugee Biometrics* (2017),[^91] and Sandvik and Lohne (2014)[^92] have established a mature critique of humanitarian biometrics: humanitarian organizations are not neutral technology providers; their data practices are shaped jointly by donor agendas, host-state cooperation requirements, and the commercial logic of technology vendors. For MR-CivicProof design, the implication of B4 is that the UI layer must expose governance information such as "whether this root shares data with the host-state government" and "the dual-mandate structure of this root," so that holders can give substantive rather than merely formal consent.

### § 6.5 B5: Four Access Thresholds of the Self-Custodied Root for Vulnerable Populations

The R4 self-custodied root (Web of Trust / social graph / threshold pseudonym) imposes four access thresholds on vulnerable persons:

- **Device threshold**: Self-custody requires trusted hardware (typically a secure-enclave smartphone or hardware wallet).
- **Cognitive threshold**: The learning cost of key management, social-graph construction, and threshold signature operations.
- **Legal threshold**: Self-custodied roots have no formal legal status in most jurisdictions; KYC compliance and judicial redress are constrained.
- **Bootstrapping threshold**: R4 at the initial anchoring stage still requires some prior root (typically R1, R2, or R3) to prove that the holder is a real person.

The four thresholds mean that R4 is least accessible precisely for "the most resource-deprived vulnerable persons." If a multi-rooted civic proof design transfers responsibility from R1 failure to R4, the result is a structural victim-blaming: costs are transferred to the very populations least capable of bearing them. Article 06's CB-Justice D1* (Rawls's difference principle: costs must not be transferred to the most vulnerable) directly constrains R4 design at this point: R4 must form part of a degradation chain together with R1–R3 and must not become the only available root for vulnerable populations.

### § 6.6 Interface with the Civic-Proof Inclusion Rights Article

The civic-proof inclusion rights article (article E5/A15) advances the normative claim of "civic proof inclusion rights": civic proof design must treat the includability of stateless persons, unregistered persons, and exile citizens as a design obligation. The five boundary conditions of the present section are precisely the elaboration of inclusion rights as applied to multi-rooted civic proof. Sadiq's *Paper Citizens* (2009)[^93] qualitative study of "substantive citizenship without state recognition" and the quantitative basis of UNICEF's 2024 birth registration data[^94] jointly support the design obligation grounding inclusion rights.

---

## § 7. Policy Recommendations and Engineering Interfaces

The argumentative skeleton built across the preceding six sections—six PKI threats, the 4+2 weaponization taxonomy, the formalization of SRP, the MR-CivicProof design, and the five boundary conditions—is not purely academic abstraction. Each element corresponds to a set of policy and design actions that engineering communities, legislators, and humanitarian organizations can concretely take. The present section organizes these recommendations across three levels.

### § 7.1 Engineering Level: Minimum Viable Version of the MR-CivicProof Specification

For engineering communities adopting zkPassport-family schemes, the minimum viable MR-CivicProof specification should comprise five technical obligations. First, the zkPassport signature-verification process must distinguish among the three generations of ePassport (BAC / EAC v1 / PACE+EAC v2), and must flag a security-level downgrade for first-generation BAC passports,[^95] on the grounds that BAC has been academically proven vulnerable to skim-and-replay. Second, CRL events for CSCA/DS revocation and ICAO PKD withdrawal events must be maintained in a public event log on the verifier side, enabling holders to assess in advance the validity period and political stability of R1.[^96] Third, multi-rooted signature composition must adopt cryptographic primitives such as BBS+ multi-issuer aggregation or Sismo composition, and must expose root provenance at the interface layer (red line: avoiding leakage of the G_w label, using unlinkable presentation).[^97] Fourth, degradation logic (R1 failure → R2 / R3 / R4) must be policy-driven rather than rank-ordered, with the holder and verifier negotiating the acceptable root set in advance. Fifth, initial anchoring of the R4 self-custodied root must not exclude other roots; social recovery and institutional custody should be provided as standard options.

These five technical obligations do not represent the current consensus among zkPassport schemes. The academic prototype of Andolfo et al. 2024 *zkPassport*[^98] primarily addresses ZK wrapping of a single root; the Rarimo Freedom Tool documentation[^99] addresses R1 plus partial on-chain attestation without fully covering R2–R4; Self.xyz and Self Protocol documentation[^100] remain oriented toward single-root plus wallet integration. The W3C VC Data Model 2.0[^101] and DID Core 1.0[^102] specifications themselves support multi-issuer credentials, but the engineering community lacks systematic consensus on the political implications of multi-rooted architecture (in particular, SRP and institutional-root dual mandate). The engineering contribution of the present analysis lies in relocating these technical primitives within sovereign-container logic and supplying the normative motivation for the degradation criteria.

### § 7.2 Legislative Level: Digitization of Relief Documents and Legal Recognition of the R3 Institutional Root

The key challenge at the legislative level is the digital downgrading of relief documents (refugee travel documents and 1954 stateless travel documents). As established in § 3, the EUAA 2023 report[^103] found rejection rates of 18–43 percent for relief documents in banking KYC contexts, far exceeding the 2–7 percent rate for home-state passports. This gap is a downstream consequence of SRP triggering and W1–W4 weaponization; its root is not a purely engineering problem but a failure of legal recognition.

Concrete legislative recommendations include three. First, state parties to the 1954 and 1961 Conventions should, through ICAO mechanisms, integrate stateless travel documents into the PKD and require verifier-side trust lists to mandatorily accept them. At the EU level, stateless and refugee clauses can be added to the trust framework under eIDAS 2.0.[^104] Second, the digital equivalents of UNHCR Convention Travel Documents and IOM emergency travel documents (such as verifiable credentials corresponding to ProGres entries) should have formal legal status and must not be treated merely as "supplementary identity documents." Third, the FATF standard's customer due diligence (CDD) requirements for R3 institutional roots should provide exception handling in "weaponized-sensitive-population" scenarios, to prevent relief document holders from being excluded at the KYC stage.

These three recommendations will encounter sovereignty resistance in practice; making R3 institutional roots legally recognized is equivalent to requiring states to relinquish part of the monopoly position of the passport root. But the normative implication of SRP is precisely this: for exiles, stateless persons, and those denied passports, the sovereign monopoly is itself the source of the problem, not the solution.

### § 7.3 Humanitarian Organization Level: Transparency of UNHCR/IOM Dual Mandate

For international organizations such as UNHCR, IOM, and WFP that implement the R3 institutional root, § 6.4 has already analyzed the dual-mandate risk. Concrete policy recommendations include: First, protocols under which ProGres, MIDAS, and similar databases share data with host-state governments must be transparently disclosed to holders (prior informed consent), and must no longer be shielded by "humanitarian immunity" claims;[^105] Second, deployment models that use biometrics (Iris / fingerprints / facial recognition) as the sole identifier should be reassessed, adopting a degradation chain (Iris + paper alternatives + community proxy issuance) as the standard;[^106] Third, the "donor-driven versus beneficiary-governed" imbalance identified by the technocolonialism critique (Madianou 2019, Latonero 2018)[^107] should be addressed through mechanisms such as beneficiary-representative participation in data governance boards.

The feasibility of these three recommendations is constrained by UNHCR/IOM's host-country cooperation obligations; host countries such as Jordan, Bangladesh, and Lebanon will not necessarily accept transparency requirements. But for the engineering design of multi-rooted civic proof, the minimum standard should be to assume that R3 cannot fully escape dual-mandate risk, and to require root provenance disclosure at the UI layer as a floor requirement.

### § 7.4 Policy Interface with Articles 04, 05, and 06

The policy recommendations of the present analysis, together with the policy pathways of the preceding three articles, construct a complete spectrum. The T three-element test (Trigger / Authority / Remedy) of article 04 (pseudonymous-participation-legal)[^108] addresses the legal-institutional conditions for "pseudonymity plus ex post accountability"; the SRP of the present analysis addresses the sovereignty premise that "I_R cannot be equivalent to Adversary(T_R)." The former is downstream of the latter: under conditions in which SRP is satisfied, the T three-element test has operating space; under conditions in which SRP is violated (as when Russian anti-war activists face the Russian passport authority), the Authority element of T fails directly.

The IT' impossibility triangle of article 05 (sybil-resistance-cost-benefit)[^109] (Uniqueness / Decentralization / Inclusion) is directly connected to the design trade-offs of multi-rooted architecture. The R1 passport root corresponds to the "strong Uniqueness but weak Decentralization" corner; the R4 self-custodied root corresponds to the "strong Decentralization but weak Inclusion" corner; MR-CivicProof uses a degradation chain to allow dynamic switching between different corners depending on the scenario.

The CB-Justice D1* (Rawls's difference principle) and D2* (Anderson's relational equality) of article 06 (civic-burden-redistribution)[^110] supply normative constraints on multi-rooted civic proof. D1* requires that costs not be transferred to the most vulnerable, corresponding to the design obligation in § 6.5 that "R4 must not become the only available root for vulnerable populations." D2* requires relational equality, corresponding to the design obligation that "R3 institutional roots must not place stateless persons in a relationship structure more surveilled than that of citizens."

The did-vc-public-blockchain article (2026-05-01)[^111] documents deployment cases of Bhutan NDI, Catalonia Vocdoni, and the Rarimo Freedom Tool; the cross-case analysis SA-5 of the present article extends these cases to a detailed analysis of the concrete operation of the sovereign container.

### § 7.5 Three Constraints on Policy Implementation

Three realistic constraints on policy implementation should be noted. First is the willingness of sovereign states to cooperate: state parties to the 1954/1961 Conventions number only approximately 100 (versus 149 for the 1951 Refugee Convention), and the political cost of expanding the treaty membership is substantial.[^112] Second is the hard constraint of FATF counter-terrorism finance law: relief-document KYC exception handling in sanctioned regions would directly violate OFAC and UN 1267 list obligations,[^113] requiring international-level negotiation. Third is the self-discipline of the engineering community: the engineering culture of zkPassport-family schemes tends toward "technology-neutral" discourse, treating political problems as matters to be addressed in "the downstream application layer"—a division of labor that is not conducive to adoption of the multi-rooted norm. The argumentative force of SRP in the present analysis lies in relocating political problems to the root level of engineering design, making them no longer reducible to "neutral technology" discourse.

---

## § 8. Conclusion

The passport root is useful, but it is not the sole root. The structural fragility of passport-rooted civic proof in authoritarian and exile contexts has been established by the six ICAO PKI threats, the SRP normative proposition, and the eight cases of passport weaponization. SRP shares the conjunctive structure of the H1' three-wall thesis of article 03, the T three-element test of article 04, the IT' impossibility triangle of article 05, and the CB-Justice D1*∧D2* conditions of article 06, while operating at different levels; SRP addresses the sovereignty premise that "I_R cannot be equivalent to Adversary(T_R)," and constitutes a normative condition upstream of all four other levels.[^114] Multi-Rooted Civic Proof (R1 passport root + R2 community root + R3 institutional root + R4 self-custodied root + D1/D2/D3 degradation criteria) is the best available engineering response, but the passport root remains the highest-coverage root; multi-rooted architecture supplements rather than replaces it, and the five boundary conditions (B1 coverage trade-off / B2 statelessness / B3 NGO political economy / B4 institutional-root dual mandate / B5 self-custodied root access thresholds for vulnerable populations) must be addressed simultaneously. Neglecting any one of them will transfer costs to the very populations least capable of bearing them.

The argument strength of the present analysis is assessed as moderate-strong: the six PKI threats and the 4+2 weaponization taxonomy have sufficient empirical evidence; the formalization of SRP is a normative-empirical composite proposition (not a cryptographic theorem); and the MR-CivicProof design is engineering abduction under defeasibility, which can be defeated by three categories of evidence: hidden coupling between failure modes across roots, new attack surfaces introduced by the implementation of degradation criteria, and weakest-root failure dragging down overall system credibility. These three categories of risk have been specifically flagged in §§ 5 and 6.

Three working invitations are left for readers. First, beginning with the engineering community's adoption of the multi-rooted norm for zkPassport-family schemes, to translate the five technical obligations of § 7 into concrete standard proposals for the W3C VC Working Group. Second, at the level of national legislators, to advance the digitization of the 1954/1961 Conventions so that stateless travel documents enter the ICAO PKD and the eIDAS 2.0 trust framework. Third, at the level of humanitarian organizations, to advance the governance transparency of UNHCR ProGres, converting the technocolonialism critique into concrete data governance reform.

The solution to the paradox of "using a state-issued passport to prove that one rejects that state" is not a more sophisticated cryptographic wrapper. Acknowledging the political character of trust roots themselves, and establishing engineering practice for degradation-available architecture within a composable multi-rooted framework, is the genuine path forward. The present analysis is one point of departure along that path.

---

## References

[^1]: Andolfo, A., et al. (2024). *zkPassport: A Privacy-Preserving Identity Verification Scheme Using ZK-SNARKs over Passport Biometric Data*. IACR ePrint 2024/1377; Anon Aadhaar Specification (PSE 2024); Rarimo Foundation, *Freedom Tool Technical Brief*; Self.xyz / Self Protocol Documentation; Privado ID Protocol Whitepaper. Source level A/B.

[^2]: World Bank ID4D (2024). *Identification for Development Global Dataset*; ICAO PKD Annual Report 2024. Source level A.

[^3]: SRP formalization developed in § 4 of the present analysis; theoretical basis: Schmitt (1922); Agamben (1995); Sassen (2006); Krasner (1999). Source level A.

[^4]: ICAO Doc 9303 (2021). *Machine Readable Travel Documents*, 8th edition, Part 11 + Part 12. Source level A.

[^5]: BSI TR-03110, *Advanced Security Mechanisms for MRTDs* series (Germany BSI). Source level A.

[^6]: BSI TR-03135, *Machine Authentication of MRTDs by Inspection Systems*. Source level A.

[^7]: ICAO PKD Annual Report 2024; ICAO MRTD Programme public statistics. Source level A.

[^8]: ICAO Doc 9303 (2021), Part 12: Public Key Infrastructure for MRTDs. Source level A.

[^9]: Hoepman, J.-H. (2008). "Crossing Borders: Security and Privacy Issues of the European e-Passport." *ESORICS 2008*. Source level A.

[^10]: Witteman, M., & Oostdijk, M. (2008). *Reverse Engineering of MRTD Security*. Source level A.

[^11]: Nohl, K., & Krißler, J. (2008). Passport fingerprint cloning demonstration. Black Hat 2008. Source level B.

[^12]: Hancke, G. P. (2006). "Practical Attacks on Proximity Identification Systems." *IEEE S&P 2006*. Source level A.

[^13]: Carluccio, D., et al. (2007). "E-Passport: The Global Traceability Or How To Feel Like a UPS Package." *RFIDSec 2007*. Source level A.

[^14]: BSI TR-03110, Extended Access Control v1 specification. Source level A.

[^15]: ICAO Doc 9303 (2021), PACE specification; EU Regulation mandating PACE from 2014. Source level A.

[^16]: Andolfo, A., et al. (2024). *zkPassport*. IACR ePrint 2024/1377. Source level A.

[^17]: ENISA (2024). ePassport Security Assessment Series; ICAO Doc 9303, 8th edition, Annexes B–D. Source level A.

[^18]: Estonia 2017 ROCA vulnerability (CVE-2017-15361); Estonian RIA public announcement. Source level A.

[^19]: UK FCDO (2021). BNO Policy Documents. Source level A.

[^20]: Regulation (EU) 910/2014 (eIDAS 1.0). Source level A.

[^21]: Regulation (EU) 2024/1183 (eIDAS 2.0); EU LoTL (List of Trusted Lists) regulatory framework. Source level A.

[^22]: Human Rights Watch (2022–2024). *Russia Reports* series; OVD-Info (2022–2024); Memorial records; Stockholm Center for Freedom (2018). Turkey post-coup passport revocation statistics; BYPOL & Viasna documentation; Database Center for North Korean Human Rights; Refugees International (2020). Syria case documentation; Human Rights Concern Eritrea. Source level A/B.

[^23]: Human Rights Watch (2022–2024). *Russia Reports* series; OVD-Info 2022–2024; Memorial records. Source level A/B.

[^24]: Russian State Duma (2024-04). Legislative record on nationality revocation for spreading false military information. Source level A.

[^25]: Center for Human Rights in Iran (2023). *Iran's Weaponization of Citizenship Against Diaspora Activists*; IranWire (2023–2024). Passport revocation case tracking. Source level B.

[^26]: Iranian Passport Law 1962, Art. 18 (guardian consent / *mahram* law); Citizen Lab (2023). *Predator Surveillance Report*. Source level A/B.

[^27]: Belarus Presidential Decree No. 278 (2023); Human Rights Watch (2023). Belarus Report; BYPOL & Viasna documentation. Source level A/B.

[^28]: Stockholm Center for Freedom (2018). *Turkey: Post-Coup Passport Revocation Statistics*; Human Rights Watch (2017). Turkey Report. Source level A/B.

[^29]: UK FCDO (2021). BNO Policy Documents; People's Republic of China non-recognition statement regarding BNO. Source level A.

[^30]: Hong Kong Watch (2022). BNO Report. Source level B.

[^31]: Database Center for North Korean Human Rights; Liberty in North Korea documentation. Source level B.

[^32]: Syrian Network for Human Rights (2019). *Overseas Extortion Report*; Refugees International (2020). Syria Cases. Source level B.

[^33]: Human Rights Concern Eritrea. *Diaspora Tax Documentation*. Source level B.

[^34]: UN Security Council Resolution 2023 (2011). Condemnation of Eritrea Diaspora Tax. Source level A.

[^35]: EUAA (2023). *Refugee Travel Document KYC Acceptance Report*. Source level A.

[^36]: Schmitt, C. (1922/1985). *Political Theology: Four Chapters on the Concept of Sovereignty*. MIT Press. Source level A.

[^37]: Schmitt, C. (1932/1996). *The Concept of the Political*. University of Chicago Press. Source level A.

[^38]: Turkey Emergency Decree (KHK) passport revocation records 2016–2018; Stockholm Center for Freedom (2018), supra n. 28. Source level A/B.

[^39]: Agamben, G. (1995). *Homo Sacer: Sovereign Power and Bare Life*. Stanford University Press. Source level A.

[^40]: Agamben, G. (2003). *State of Exception*. University of Chicago Press. Source level A.

[^41]: Arendt, H. (1951). *The Origins of Totalitarianism*, ch. 9. Harcourt. Source level A.

[^42]: Sassen, S. (2006). *Territory, Authority, Rights: From Medieval to Global Assemblages*. Princeton University Press. Source level A.

[^43]: Brown, W. (2010). *Walled States, Waning Sovereignty*. Zone Books. Source level A.

[^44]: Krasner, S. D. (1999). *Sovereignty: Organized Hypocrisy*. Princeton University Press. Source level A.

[^45]: Foucault, M. (1975). *Discipline and Punish: The Birth of the Prison*. Gallimard. Source level A.

[^46]: Foucault, M. (1977–78). *Security, Territory, Population: Lectures at the Collège de France*. Gallimard/Seuil. Source level A.

[^47]: Macklin, A. (2007). "Who Is the Citizen's Other? Considering the Heft of Citizenship." *Citizenship Studies*, 11(4), 333–351. Source level A.

[^48]: Lavi, S. (2015). "Citizenship Revocation as Punishment: On the Modern Duties of Citizens and Their Criminal Breach." *Yale Law Journal*, 124, 2448. Source level A.

[^49]: Gibney, M. (2013). "Statelessness and the Right to Citizenship." *Forced Migration Review*, 32. Source level A.

[^50]: Shachar, A. (2009). *The Birthright Lottery: Citizenship and Global Inequality*. Harvard University Press. Source level A.

[^51]: Article 03 (digital-association-empirical-test): H1' three-wall thesis. Source level A (series).

[^52]: Article 04 (pseudonymous-participation-legal): T three-element test (Trigger / Authority / Remedy). Source level A (series).

[^53]: Article 05 (sybil-resistance-cost-benefit): IT' impossibility triangle. Source level A (series).

[^54]: Article 06 (civic-burden-redistribution): CB-Justice D1*∧D2*. Source level A (series).

[^55]: did-vc-public-blockchain article (2026-05-01). Bhutan NDI on Ethereum mainnet. Source level A (series).

[^56]: Vocdoni Foundation (2017–2024). Catalonia 2017 referendum technical retrospective. Source level B.

[^57]: Rarimo Foundation. *Freedom Tool Technical Brief*. Source level B.

[^58]: Camenisch, J., & Lysyanskaya, A. (2001). "An Efficient System for Non-transferable Anonymous Credentials with Optional Anonymity Revocation." *EUROCRYPT 2001*. Springer. Source level A.

[^59]: Boneh, D., Boyen, X., & Shacham, H. (2004). "Short Group Signatures." *CRYPTO 2004*. Springer. Source level A.

[^60]: Lampson, B. W. (1971). "Protection." *Proceedings of the 5th Princeton Conference on Information Sciences and Systems*. Source level A; Anderson, R. J. (2008). *Security Engineering*, 2nd ed., ch. 8. Wiley. Source level A.

[^61]: Shamir, A. (1979). "How to Share a Secret." *Communications of the ACM*, 22(11), 612–613. Source level A.

[^62]: Pfitzmann, A., & Hansen, M. (2010). *A Terminology for Talking About Privacy by Data Minimization: Anonymity, Unlinkability, Undetectability, Unobservability, Pseudonymity, and Identity Management*. v0.34. Source level A.

[^63]: Allen, C. (2016). "The Path to Self-Sovereign Identity." Life with Alacrity (blog); Cameron, K. (2005). "The Laws of Identity." Microsoft. Source level B.

[^64]: Ibid.

[^65]: W3C Verifiable Credentials Data Model 2.0 (2025 Recommendation). Source level A.

[^66]: W3C Decentralized Identifiers (DIDs) v1.0 (W3C Recommendation). Source level A.

[^67]: BBS+ multi-issuer aggregation; W3C Data Integrity BBS Cryptosuites v1.0 CRD (2026-04-07). Source level A.

[^68]: Sismo whitepaper; Holonym whitepaper; Polygon ID / Privado ID whitepaper. Source level B.

[^69]: Shamir (1979), supra n. 61. Source level A.

[^70]: Brewer, E. (2000). "Towards Robust Distributed Systems." *PODC 2000* (CAP theorem); Lamport, L. (1978). "Time, Clocks, and the Ordering of Events in a Distributed System." *Communications of the ACM*, 21(7), 558–565. Source level A.

[^71]: Camenisch, J., et al. (2017). *Anonymous Attestation Using Composite ZK Proofs*. Source level A.

[^72]: Article 05 (sybil-resistance-cost-benefit), SA-5: Gitcoin Passport / Holonym KYC / BrightID + zkPassport combination. Source level A (series).

[^73]: Article 06 (civic-burden-redistribution), SA-5: regulatory category distinction between commercial wallets and government wallets. Source level A (series).

[^74]: World Bank ID4D (2024); ICAO PKD 2024 statistics. Source level A.

[^75]: UNHCR Annual Report 2024. Source level A.

[^76]: European Network on Statelessness (2024). *Statelessness Index 2024*. Source level A.

[^77]: Convention Relating to the Status of Stateless Persons (1954). Source level A.

[^78]: Convention on the Reduction of Statelessness (1961). Source level A.

[^79]: 1951 Refugee Convention + 1967 Protocol. Source level A.

[^80]: UNICEF (2024). *Birth Registration Data 2024*. Source level A.

[^81]: Human Rights Watch, Myanmar Rohingya report series; Human Rights Watch (2014). *Dominican Republic: 2013 Stripping of Haitian-Origin Citizens' Nationality*. Source level A/B.

[^82]: Sadiq, K. (2009). *Paper Citizens: How Illegal Immigrants Acquire Citizenship in Developing Countries*. Oxford University Press. Source level A.

[^83]: OECD-DAC (2024). *Development Finance Statistics*. Source level A.

[^84]: Vocdoni Foundation (2017–2024). Catalonia 2017 referendum technical retrospective; Privacy International (2024). *Refugee Data Project*. Source level B.

[^85]: UNHCR Annual Report 2024; UNHCR, *Digital Identity for Refugees* policy documents; World Food Programme (2018). *Building Blocks*. Source level A.

[^86]: Overseas Development Institute (ODI). (2019). *Eye to Eye: Biometric Identity in Refugee Aid*. Source level A.

[^87]: Human Rights Watch. (2021). *I Got the Card by Mistake*. Source level A.

[^88]: Madianou, M. (2019). "Technocolonialism: Digital Innovation and Data Practices in the Humanitarian Response to Refugees." *Social Media + Society*, 5(3). Source level A.

[^89]: Latonero, M. (2018). "Stop Surveillance Humanitarianism." *The New York Times* op-ed, with academic extension. Source level B.

[^90]: Latonero, M., & Kift, P. (2018). "On Digital Passages and Borders: Refugees and the New Infrastructure for Movement and Control." *Social Media + Society*, 4(1). Source level A.

[^91]: Jacobsen, K. L. (2017). "On Humanitarian Refugee Biometrics and New Forms of Intervention." *Journal of Intervention and Statebuilding*, 11(4), 491–510. Source level A.

[^92]: Sandvik, K. B., & Lohne, K. (2014). "The Rise of the Humanitarian Drone: Giving Content to an Emerging Concept." *International Review of the Red Cross*, 96(893), 145–164. Source level A.

[^93]: Sadiq (2009), supra n. 82. Source level A.

[^94]: UNICEF (2024), supra n. 80. Source level A.

[^95]: ICAO Doc 9303 (2021), Part 11; BSI TR-03110; Hoepman (2008); Witteman & Oostdijk (2008). Source level A.

[^96]: ICAO PKD Annual Report 2024; W3C Verifiable Credentials Data Model 2.0. Source level A.

[^97]: Camenisch et al. (2017); Sismo whitepaper; Pfitzmann & Hansen (2010). Source level A/B.

[^98]: Andolfo et al. (2024), supra n. 1. Source level A.

[^99]: Rarimo Foundation. *Freedom Tool Technical Brief*. Source level B.

[^100]: Self.xyz / Self Protocol Documentation. Source level B.

[^101]: W3C VC Data Model 2.0, supra n. 65. Source level A.

[^102]: W3C DID Core 1.0, supra n. 66. Source level A.

[^103]: EUAA (2023), supra n. 35. Source level A.

[^104]: Regulation (EU) 2024/1183 (eIDAS 2.0); ETSI EN 319 401 / 411-1 / 411-2. Source level A.

[^105]: UNHCR Annual Report 2024; Human Rights Watch (2021), supra n. 87. Source level A.

[^106]: ODI (2019), supra n. 86; Privacy International (2024). *Refugee Data Project*. Source level A/B.

[^107]: Madianou (2019); Latonero (2018), supra nn. 88–89. Source level A/B.

[^108]: Article 04 (pseudonymous-participation-legal). T three-element test (Trigger / Authority / Remedy). Source level A (series).

[^109]: Article 05 (sybil-resistance-cost-benefit). IT' impossibility triangle. Source level A (series).

[^110]: Article 06 (civic-burden-redistribution). CB-Justice D1*∧D2*. Source level A (series).

[^111]: did-vc-public-blockchain article (2026-05-01). Bhutan NDI / Catalonia Vocdoni / Rarimo Freedom Tool deployment. Source level A (series).

[^112]: UNHCR statelessness conventions ratification status 2024. Source level A.

[^113]: FATF Recommendations; OFAC SDN List; UN Security Council 1267 Sanctions Committee. Source level A.

[^114]: For the argument that SRP is structurally isomorphic to H1' (article 03) / T (article 04) / IT' (article 05) / CB-Justice (article 06) while operating at different levels, see §§ 4.3, 5, and 7.4 of the present analysis.
