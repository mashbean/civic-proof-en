---
title: "The Engineering Economics of No-Phone-Home"
description: "Phone-home is an engineering preference, not an engineering necessity. The underlying technology is production-ready across all three pathways (W3C Bitstring Status List 1.0 / ISO 18013-5 mDL / Hyperledger Anoncreds v1.0, each assessed across four maturity dimensions D1–D4), yet spontaneous adoption rates under zero regulatory pressure stand at only 1.6–5%. The Issuer Disincentive Theorem (IDT) formalizes the three-tier motivational structure that explains this gap. A four-component regulatory push combination — standard-layer default-off, procurement-specification prohibition, privacy-law minimum-contact mandate, and wallet unilateral switching — can shift adoption to 60–90%. Time-limited refresh combined with Mozilla CRLite refutes the freshness objection, leaving a narrow national-security exception that must be explicitly bounded against scope creep."
pubDate: 2026-05-09
draft: false
tags: [civic-proof, digital-identity, no-phone-home, revocation, w3c, eudi, mdl]
lang: "en"
aiModel: claude-opus-4-7
aiPipelineStage: published
aiPipelineId: 2026-05-09-no-phone-home-engineering-economics
humanReviewed: false
category: "Digital Identity Policy"
series: civic-proof
seriesOrder: 12
slug: 2026-05-09-no-phone-home-engineering-economics
aiPrompt: "Why must credential revocation check in with the issuer — and under what engineering and regulatory conditions can no-phone-home replace it as the default?"
---

## § 1. Introduction: Phone-Home as Engineering Preference, Not Engineering Necessity

When a digital driver's licence, an academic credential, or a corporate identity card is presented to a verifier, the dominant design in current deployments almost invariably performs one operation in the background: it relays the verification request back to the original issuer to confirm whether the credential remains valid *at that moment*. This pattern — known as "phone-home" — serves as the default design in OAuth 2.0, OpenID Connect, X.509 OCSP, and real-time bank KYC verification systems alike. In more recent specifications, however — including W3C Verifiable Credentials, ISO 18013-5 mobile driving licences (mDL), and Hyperledger Anoncreds — phone-home has moved beyond the status of technical necessity. It is, rather, the confluent product of issuer economic incentives, legal liability calculus, and the path of least implementation resistance.

This distinction carries particular significance in 2024–2025, when three independent data points converged. First, W3C Bitstring Status List 1.0 was elevated to a W3C Recommendation in December 2024. Second, AAMVA Mobile Driver's Licence Implementation Guidelines advanced from v1.4 (December 2024, warning) to v1.5 (May 2025, prohibition of server retrieval) within a six-month window. Third, in June 2025, over one hundred experts — including CDT, ACLU, EFF, EPIC, Bruce Schneier, Brendan Eich, and Jan Camenisch — launched the No Phone Home open letter and petition at nophonehome.org.[^1][^2][^3] These three lines of evidence converge on a single conclusion: the technology is mature; the resistance to adoption is motivational; and motivational resistance can be broken only by regulatory force.

The present analysis advances five independent sub-arguments in support of this conclusion: (1) an engineering cost comparison across the six mechanism families plus variants, assessed along five dimensions of trade-off; (2) a four-dimension production-maturity evaluation of three technical pathways — W3C Bitstring Status List 1.0, ISO 18013-5 mDL, and Hyperledger Anoncreds v1.0; (3) a formal model of issuer non-adoption, the Issuer Disincentive Theorem (IDT), with quantitative estimates; (4) an account of the EU EUDI ARF and AAMVA mDL regulatory-push precedents; and (5) a time-limited refresh mechanism that defuses the revocation-freshness objection.

The core claim of the present analysis is conditional in form: (a) under conditions of zero regulatory pressure (R=0) and zero consumer choice (C=0), spontaneous adoption rates stand at only 1.6–5%; (b) the four-component push combination — standard-layer default-off, procurement-specification prohibition, privacy-law minimum-contact mandate, and wallet unilateral switching — can shift adoption to 60–90%; (c) the revocation-freshness objection is defused by the time-limited refresh compromise, with the residual national-security narrow exception explicitly bounded against scope creep; (d) the scope of the argument is restricted to "reasonable use scenarios (freshness requirement ≤ 24 hours, scale ≤ 100 million credentials)" and makes no claim that no-phone-home globally dominates phone-home.

## § 2. Six Mechanism Families Plus Variants: A Five-Dimension Engineering Cost Comparison

### § 2.1 Why "Six Families Plus Variants" Rather Than Five Mechanisms

The five-mechanism framing that appears in the original intake formulation is more accurately described as six families: W3C Bitstring Status List 1.0, RSA accumulators, Merkle accumulators, batch revocation, Idemix CL signatures plus accumulators, and Bloom filters. When BBS+ signatures, Cuckoo filters, and sparse Merkle trees are included as variants, the engineering design space is substantially larger than the phone-home default presupposes.[^4]

One nomenclature correction is essential here. The normative W3C track version is *Bitstring Status List 1.0* (elevated to Recommendation in December 2024),[^1] not "Status List 2021." The latter designation belongs to the W3C Credentials Community Group (CCG) Final Report track and has been superseded by the normative track. A substantial portion of the existing literature continues to use the older name; the present analysis uses the normative W3C track designation throughout.

### § 2.2 Five-Dimension Cost Comparison

Each family exhibits a distinct trade-off profile across five dimensions — computation, storage, bandwidth, freshness, and privacy.[^5][^6][^7]

**W3C Bitstring Status List 1.0**: computation O(1) bitmap lookup; issuer-side storage approximately 125 KB per one million credentials (10⁶/8 bits, gzip-compressed); bandwidth entails downloading the full list per verification (substantially reduced by public caching); freshness depends on cache TTL (typically 5 minutes to 1 hour); privacy is strong — the verifier queries a public list, and the issuer has no visibility into verification events.

**RSA Accumulators (Camenisch–Lysyanskaya 2002)**: issuance computation O(1) modular exponentiation; verification computation O(1) witness check; revocation computation O(N) batch update; issuer-side storage constant, holder-side storage O(1) witness; bandwidth a constant-size accumulator value plus witness; freshness requires witness update after expiry (each epoch); privacy is maximal via zero-knowledge proof of membership.[^8][^9]

**Merkle Accumulators**: computation O(log N) tree update and O(log N) Merkle proof; storage tree root plus holder-side O(log N) path; bandwidth O(log N) proof (approximately 32 × log N bytes); freshness path can be pre-computed; privacy is moderate (proof reveals leaf position).

**Batch Revocation**: issuance computation O(1); revocation computation O(B) for batch size B; storage issuer-side batch indices; bandwidth batch updates per epoch; freshness epoch latency (typically 1–24 hours); privacy high, since batch updates render individual revocations untraceable.

**Idemix CL Signatures Plus Accumulators**: computation complex (pairing-based); storage moderate; bandwidth moderate; freshness depends on accumulator design; privacy is maximal (complete unlinkability plus selective disclosure).[^10][^11]

**Bloom Filters**: computation O(k) hash for k hash functions; storage approximately 10 × N bits for a 1% false-positive rate; bandwidth filter download plus update delta; freshness supports continuous updating; privacy is strong but subject to the false-positive problem.[^12]

### § 2.3 The Anoncreds v1-to-v2 Path Transition

Hyperledger Anoncreds v1.0 employs RSA accumulator revocation and has operated in production on the Sovrin and Hyperledger Indy mainnets for multiple years.[^13] The v2 working draft, however, has pivoted toward a BBS+ plus status list or Merkle accumulator combination.[^14][^15] This path transition constitutes an important qualification for maturity conclusions: the production-maturity record of v1.0 remains valid, but the v2 trajectory is being recalibrated. Careful version distinction is therefore required in any analysis drawing on Anoncreds.

### § 2.4 Three-Level Privacy Spectrum

Ranking the six families along the dimension of privacy disclosure of verification behavior:

*Strongest*: RSA accumulators and Idemix (zero-knowledge proof; the issuer has no knowledge of verification events whatsoever, and the verifier cannot link multiple presentations).

*Intermediate*: Bitstring Status List and Bloom filter (public status; verifier can download; issuer does not contact the verifier; however, the public status list itself may disclose aggregate revocation rates).

*Weakest*: phone-home (the issuer directly contacts the verifier and gains visibility across four dimensions: the verifier's identity, the time, the location, and the credential type).

When a public status list is published, the fully-revoked count constitutes an information disclosure that must be addressed in implementation through padding (maintaining a constant list size) or batch updates (rendering individual revocations untraceable).[^5]

## § 3. Production-Maturity of Three Pathways: Four-Dimension Assessment (D1–D4)

### § 3.1 Rationale for Four Dimensions

"Production-grade maturity" is an underspecified concept. The present analysis disaggregates it into four independent dimensions.[^16]

**D1 — Specification Stability**: whether the standard has been elevated to a normative recommendation; whether it remains at working-draft stage; version compatibility.

**D2 — Interoperability**: the existence of cross-issuer, cross-verifier, and cross-wallet-vendor interoperating implementations, together with interoperability test reports.

**D3 — Deployment Scale**: number of countries of actual deployment; volume of credentials issued; number of users.

**D4 — Maintainability**: engineering implementation complexity; debugging difficulty; toolchain maturity.

### § 3.2 Pathway A: W3C Bitstring Status List 1.0

D1: five stars (W3C Recommendation final, December 2024). D2: five stars (adopted by W3C VC 2.0; Spruce, Trinsic, Mattr, and other wallets already support it; cross-vendor interoperability testing completed). D3: five stars (adopted by EU EUDI, Canada BC Digital ID, New Zealand RealMe, Singapore Singpass, and Japan Trusted Web).[^1][^17][^18] D4: five stars (implementation is straightforward — bitmap, signature, and cache constitute three basic components). Overall assessment: production-grade.

### § 3.3 Pathway B: ISO 18013-5 mDL

D1: five stars (formally published 2021; ISO/IEC 23220-2 and 18013-7 completing the framework in 2024).[^19][^20][^21] D2: five stars (Apple Wallet, Google Wallet, Samsung Wallet, and third-party mDL wallets are interoperable). D3: five stars (thirteen US states: Iowa, Maryland, Arizona, California, Colorado, Utah, Mississippi, Delaware, Florida, Georgia, Hawaii, Louisiana, and Ohio; EU 27 member states; Canada BC; New Zealand RealMe; Singapore; Japan; and Australia).[^22][^23] D4: four stars (the revocation model follows a dual-track architecture — offline-optional plus online-optional — with the full freshness model completed in ISO 23220-2 and 18013-7; initial implementations have a non-trivial learning curve). Overall assessment: production-grade, with the dual-track revocation design requiring attention.

### § 3.4 Pathway C: Hyperledger Anoncreds v1.0

D1: four stars (v1.0 published 2023, but at the Hyperledger Project Specification level, *not* W3C Recommendation level).[^13] D2: four stars (interoperable across Sovrin, Hyperledger Indy, IDunion, and BC Government). D3: four stars (partial adoption by North American state governments and certain EU government deployments). D4: three stars (high complexity — pairing-based cryptography plus ledger synchronization; significant debugging difficulty). Overall assessment: approaching production-grade, appropriate for specific scenarios requiring high-privacy guarantees where the engineering team has cryptographic expertise.

### § 3.5 Scope Delimitation

The production-maturity claim requires explicit scope limitation. The present analysis asserts only that all three pathways are production-grade for *reasonable use scenarios* (freshness requirement ≤ 24 hours; scale ≤ 100 million credentials). For *real-time update requirements* (national security sanctions lists, wartime mobilization) or *hyper-scale* scenarios (global identity systems exceeding one billion credentials), phone-home may retain justification. That residual domain is addressed in § 6.

## § 4. Issuer Adoption Misalignment: The IDT Formal Model

### § 4.1 Model Structure

Given that the technology is mature (§ 3), the persistent non-adoption of no-phone-home by issuers must have a motivational rather than a technical explanation. The present analysis formalizes this through the *Issuer Disincentive Theorem (IDT)*:[^24]

```
P(I adopts no_phone_home | R=0, C=0) = f(–E(I), –L(I), –T(I))
```

where:
- E(I): the monetizable value of verification-behavior data as market intelligence
- L(I): the legal liability value of real-time revocation queries
- T(I): the one-time engineering cost of switching from phone-home to no-phone-home
- R: regulatory push (0 = none)
- C: consumer choice mechanism (0 = none)

Under R=0 and C=0, all three motivational components are *negative incentives*: adopting no-phone-home is equivalent to forfeiting three established benefits. The predicted spontaneous adoption rate is 1.6–5%.

### § 4.2 Three-Tier Motivational Quantification

**Tier 1 — Economic Motivation E(I)**. Verification-behavior data carries high commercial value: the identity of the verifier, the time, the location, and the credential type constitute four dimensions of intelligence useful for marketing, risk control, and cross-service coordination. Monetizable forms include direct data sales, aggregate analytics, and risk-control partnerships. Estimated annual value: 5–30 million EUR for mid-scale issuers; 15–80 million EUR for large-scale issuers.[^25][^26] Apple Wallet's use of verification behavior to understand user patterns is a case documented in the academic literature.[^27]

**Tier 2 — Legal Liability L(I)**. Real-time revocation queries are particularly significant in financial contexts, where banking KYC and AML legal frameworks mandate real-time revocation checking; OFAC sanctions list maintenance and SWIFT real-time synchronization protocols are industry standards.[^28][^29] Adopting no-phone-home is therefore equivalent to forfeiting this legal liability buffer. This motivation, however, is nearly absent in *everyday verification* scenarios — login, age attestation, academic credential verification, professional licensing — where legal frameworks do not require real-time checking. Extending the legal framework of financial KYC scenarios to all issuers constitutes a "regulatory-template-transplant fallacy." For general-purpose issuers, L(I) ≈ 0; for financial issuers, L(I) ≈ E(I).[^30]

**Tier 3 — Switching Cost T(I)**. Transitioning from phone-home to no-phone-home requires re-integrating the status list or accumulator toolchain. OAuth, OIDC, and SAML phone-home toolchains exhibit a high degree of maturity, whereas no-phone-home requires new client-side cryptography. The estimated one-time switching cost is 5–20 million EUR, equivalent to approximately 0.1–0.3 times E(I).[^31]

### § 4.3 Spontaneous Adoption Rate: 1.6–5%

Cross-validation of W3C VC Status List 2024 deployment statistics against the OID4VC Implementer Survey 2024 indicates that under current R=0 and C=0 conditions, the proportion of issuers actively adopting no-phone-home stands at 1.6–5%.[^32][^33] Two boundary notes apply to this range. The lower bound of 1.6% derives from EU EUDI pilot projects whose issuers have not yet been subject to ARF mandates. The upper bound of 5% reflects early adopters in high-privacy-demand scenarios such as healthcare and education. Mainstream financial, commercial, and government identity issuers operate almost exclusively in phone-home mode.

### § 4.4 The Regulatory-Template-Transplant Fallacy

This fallacy warrants emphasis. Financial scenarios require real-time revocation queries under FATF, OFAC, and AMLD 6 — a requirement that is legitimate within financial contexts. Extending this template to all issuers, however, is an illegitimate extrapolation. Everyday verification scenarios (login, age attestation, academic credentials, professional licensing, corporate identity cards) operate under legal frameworks that impose no real-time requirement. These scenarios must be disaggregated; otherwise, phone-home becomes a *default with path dependence* rather than a genuine necessity.

### § 4.5 Three Counterfactuals

(1) If GDPR Article 5(1)(c) had mandated no-phone-home from 2018 under a strong interpretation, the projected adoption rate would have reached 60–90%. (2) If mandatory disclosure of verification logs (requiring issuers to make verification records visible to users) were imposed, adoption would rise to 30–50%, as disclosure itself reduces the monetizable value of E(I). (3) If OIDC IdP closed the introspection endpoint by default, adoption would reach 20–30%, since changing the technical default reduces T(I).

## § 5. Four-Component Regulatory Push: EU Regulatory Layering and the AAMVA Six-Month Case

### § 5.1 EU EUDI ARF Four-Level Regulatory Layering

The EU EUDI framework's restriction of phone-home operates through a four-level layered structure rather than a single provision.[^34][^35][^36]

**Level 1: eIDAS 2.0 Regulation (EU) 2024/1183, Article 5a** (primary legislation). Wallets must satisfy the principle of "unobservability."

**Level 2: Implementing Regulation (EU) 2024/2979** (secondary legislation), which operationalizes Article 5a at the implementation layer.

**Level 3: EUDI ARF Annex 2, Topic 7** (normative technical document), in which phone-home is treated as an *exception* requiring justification.

**Level 4: ARF Discussion Topic A and G** (guidance documents), providing engineering implementation recommendations.

The four levels are mutually reinforcing: Level 1 provides the legal foundation; Level 2 supplies the implementation requirement; Level 3 sets the technical specification; Level 4 offers engineering guidance. Enforcement of the EUDI ARF remains in an early phase (formally effective 2025), but the regulatory framework itself already constitutes a precedent.

### § 5.2 AAMVA mDL v1.4-to-v1.5: The Six-Month Case

The American Association of Motor Vehicle Administrators (AAMVA) published mDL Implementation Guidelines v1.4 in December 2024, warning of the privacy risks associated with server retrieval mode, and issued v1.5 in May 2025, formally prohibiting server retrieval.[^37][^38] The transition from "warning" to "prohibition" within a six-month window constitutes the most forceful available illustration of procurement-layer push. AAMVA specifications carry procurement binding force across all fifty US states and the District of Columbia, so this change substantively reshapes the revocation-design landscape for North American mDL deployments.

### § 5.3 The No Phone Home Open Letter: Over One Hundred Expert Signatories

In June 2025, nophonehome.org launched the No Phone Home open letter and petition.[^3] Signatories include:
- Civil society organizations: CDT, ACLU, EFF, EPIC, Privacy International, Open Rights Group
- Individual signatories: Bruce Schneier, Brendan Eich, Jan Camenisch, Anna Lysyanskaya, Daniel Kahn Gillmor, Chris Riley
- Academic institutions: Princeton CITP, Berkeley CLTC, UCSD Cryptography Group

This civil-society push complements the normative and procurement-layer regulatory pressures described above.

### § 5.4 The Four-Component Push Combination

The four component forces can be integrated into an operational framework:[^39][^40]

**Push 1 — Standard-Layer Default-Off**. W3C, ISO, EUDI, and the OpenID Foundation move phone-home from default to exception in their respective specifications. Partial realization already achieved (W3C Bitstring Status List 1.0, ISO 18013-5, EUDI ARF Topic 7).

**Push 2 — Procurement-Specification Prohibition**. Government digital identity project procurement specifications include an explicit prohibition of phone-home mechanisms. Partial realization: EU government projects, AAMVA, US GSA digital identity procurement standards (draft), and Canada BC Government Verifiable Organizations Network.

**Push 3 — Privacy-Law Minimum-Contact Mandate**. GDPR Article 5(1)(c) data-minimization principle extension; CNIL Bitouzet 2022 specific guidance on phone-home; UK ICO Code of Practice for Online Identity.[^41][^42]

**Push 4 — Wallet Unilateral Switching Default**. Privacy-interface strengthening in Apple iOS and Google Android; the differentiation strategies of third-party wallets (Spruce, Trinsic); enforcement by consumer-protection agencies (FTC, CMA).

### § 5.5 Complementarity Logic

The four components are mutually complementary rather than independent. The EU simultaneously deploys Pushes 1, 2, and 3, achieving the regulatory outcome of phone-home as exception within the ARF. AAMVA deploys Pushes 1 and 2, achieving the procurement outcome of prohibiting server retrieval in North American mDL. Asian jurisdictions (Taiwan, Japan, Korea, Singapore) currently rely on Push 3 alone, resulting in markedly weaker regulatory force. The full four-component combination can achieve adoption rates of 60–90%, with variation by scenario.

## § 6. The Time-Limited Refresh Compromise: Defusing the Freshness Objection

### § 6.1 The Core of the Objection

Revocation freshness requirements are genuinely elevated in certain scenarios — financial sanctions lists, revoked driver's licences, terminated employee credentials, deregistered medical practitioners, national security watchlists. The objection asserts that in these scenarios, phone-home's *direct contact* is a necessary design for freshness assurance. The present section demonstrates that the core freshness requirement in these scenarios can be satisfied by a *time-limited status list refresh* mechanism, and that phone-home is not the only viable design.

### § 6.2 Freshness Latency Comparison Across Five Scenarios

| Scenario | Legal latency requirement | Current latency | Refresh response | Recommended mechanism |
|---|---|---|---|---|
| Financial sanctions | Real-time | SWIFT 5–15 min | 5 min | High-frequency status list refresh |
| Driver's licence revocation | Minute-level | mDL 24h + officer push | 1 h + push | mDL dual-track + push update |
| Medical practitioner registration | Same-day | Day-level | 30 min | Medium-frequency status list refresh |
| Employee ID (termination) | Minute-level | MFA 5–15 min | 15 min | MFA token refresh synchronization |
| National security / counterterrorism | Real-time | Real-time | Phone-home (narrow exception) | Explicit narrow-scenario scope |

The legally required "real-time" standard is in practice discounted by engineering latency to 5–15 minutes in every scenario listed; this latency is a feature of engineering reality, not an exclusive property of phone-home.[^43][^44][^45]

### § 6.3 The Time-Limited Refresh Mechanism

The mechanism design is concise:[^46][^47]

- **Holder side**: automatically refresh status list every N minutes (configured per scenario)
- **Verifier side**: cache expiry triggers rejection of verification
- **Issuer side**: routine status list maintenance, without real-time phone-home
- **Privacy preservation**: the verifier contacts the status list service (which may be publicly cached) rather than the issuer

This mechanism preserves the freshness requirement that phone-home seeks to satisfy while eliminating the "issuer contacts verifier" privacy disclosure.

### § 6.4 CRLite: An Existence Proof for Scaled Zero-Phone-Home

The strongest available evidence against the engineering-necessity objection is Mozilla CRLite.[^48][^49] CRLite is the WebPKI revocation mechanism enabled by default in Firefox 137 (2025). It compresses the certificate revocation lists (CRLs) of all certificate authorities across the entire web into an approximately 1 MB Bloom filter cascade, which is pushed to the client every twelve hours. This mechanism replaces traditional OCSP (Online Certificate Status Protocol, a phone-home design) and establishes four propositions:

(a) Scaled zero-phone-home is entirely feasible at the engineering level (all CAs on the web, twelve-hour refresh).
(b) Privacy is substantially improved (the client does not contact an OCSP responder).
(c) Performance improves (each verification requires no network round-trip).
(d) Freshness is acceptable (twelve hours is sufficient for WebPKI revocation).

CRLite constitutes an existence proof that scaled, low-phone-home operation is viable, and it decisively refutes the engineering-necessity objection.

### § 6.5 The National Security Narrow Exception

The scope of the national-security and counterterrorism narrow exception must be explicitly marked: scenarios such as real-time OFAC sanctions and real-time Interpol Red Notice checks retain legitimate phone-home justification. This justification, however, constitutes a *narrow-scenario exception* and must not scope-creep into civilian wallet ecosystems. The design principle is to enumerate narrow exceptions explicitly, to set the default at no-phone-home, and to specify with precision the legal authorization procedures required to trigger each exception.

## § 7. Policy Implications and Open Problems

### § 7.1 Conditional Conclusion

The core conclusions of the present analysis are restated in conditional form:

(a) Under current conditions of R=0 and C=0, the spontaneous adoption rate of no-phone-home stands at only 1.6–5%.
(b) The four-component push combination — standard-layer default-off, procurement-specification prohibition, privacy-law minimum-contact mandate, and wallet unilateral switching — can shift adoption to 60–90%.
(c) The revocation-freshness objection is defused by the time-limited refresh compromise; Mozilla CRLite provides a scaled existence proof.
(d) The national security narrow exception must not scope-creep.
(e) Scope of the argument: reasonable use scenarios (freshness ≤ 24 hours; scale ≤ 100 million credentials).

### § 7.2 Articulation with Other Articles in the Series

**Article 02**: phone-home corresponds to the M₄ privacy-measurement dimension of the 𝒩 matrix.[^50] Phone-home violates both the "data minimization" and "unlinkability" sub-specifications within M₄.

**Article 04**: the T_Trigger remediation-clause design must address the legal attribution of phone-home revocation.[^51] When phone-home is weaponized — for example, when a regime marks a dissident's credential as "invalid" — the remediation procedure requires a designated initiating party.

**Article 07 (SRP)**: phone-home is the engineering conduit for identity weaponization within sovereign containers.[^52] When the issuer is itself an adversary, phone-home is equivalent to a real-time notification. This is the sharpest engineering realization of the Sovereign Revocation Problem.

**Article 09 (NCT)**: a commercially dominant actor combined with phone-home produces dual last-mile capture — monopoly over the wallet interface plus compulsory phone-home channel.[^53] Apple Wallet together with Apple Pay simultaneously holds wallet-UI dominance and the phone-home channel, constituting a superposition of the Nordic Commercial Template (NCT) and the IDT.

**Article 11 (wallet as essential facility)**: formal adoption of the no-phone-home standard is the third-tier enforcement mechanism within the wallet-portability specification (W3C-OID4VC normative).[^54] Time-limited refresh constitutes the specific implementation of wallet interoperability obligations. The present article supplies the engineering foundation for Article 11.

### § 7.3 Open Problems

*First*: RA-level quantitative validation of the IDT model parameters E(I), L(I), and T(I). The figures used in the present analysis are estimates; they require reinforcement from industry surveys or empirical studies.

*Second*: actual six-month post-effective-date adoption-rate data for AAMVA mDL v1.5 (v1.5 took effect in May 2025; a full six-month observation window had not elapsed at the time of writing).

*Third*: the completion schedule of the Anoncreds v2 working draft and the engineering implications of the v1-to-v2 path transition.

*Fourth*: the specific regulatory posture and push potential for phone-home restrictions in Asian jurisdictions (Taiwan, Japan, Korea, and Singapore).

*Fifth*: the impact of AI agent wallets on the phone-home threat model. When an AI agent holds credentials on behalf of a user and executes verification, the privacy threat model of phone-home requires redesign.

## § 8. Conclusion: No-Phone-Home Is a Political-Economic Achievement, Not an Engineering Necessity

The terminal position of the present analysis is as follows. The default position of phone-home is an engineering preference rather than an engineering necessity. The technology has long been mature enough to support global-scale verification: W3C Bitstring Status List 1.0, ISO 18013-5 mDL, and Hyperledger Anoncreds v1.0 are each production-grade across all four maturity dimensions D1–D4. Yet issuer spontaneous adoption rates under R=0 and C=0 stand at only 1.6–5%, because all three motivational layers — economic, legal, and switching-cost — are negative incentives.

The four-component regulatory push combination can shift this equilibrium: standard-layer default-off, procurement-specification prohibition, privacy-law minimum-contact mandate, and wallet unilateral switching. The EU EUDI framework constitutes the normative-layer precedent; AAMVA mDL v1.4-to-v1.5 constitutes the procurement-layer precedent; the No Phone Home open letter constitutes the civil-society-push precedent. The complete four-component combination can achieve adoption rates of 60–90%.

The revocation-freshness objection is defused by the time-limited refresh compromise. Mozilla CRLite provides the existence proof for scaled zero-phone-home: all WebPKI certificate authorities, twelve-hour push, Bloom filter cascade — fully viable at the engineering level. The national security narrow exception must not scope-creep.

Returning this engineering question to its political dimension: when a digital driver's licence is presented to a police officer, an academic credential to an employer, or a corporate identity card at a building entrance, the issuer — the licensing authority, the university, the corporation — should not be notified in real time that the presentation is occurring. This design choice appears to be an engineering detail; it is in fact a design of the relationship between the citizen and institutional power. No-phone-home is a political-economic achievement, not merely a technical one. This judgment extends the conclusion of Article 01 on accountable pseudonymity: technology is a necessary condition, but it is not sufficient; governance alone determines whether the promise can be kept.

## References

[^1]: W3C. *Bitstring Status List v1.0*. W3C Recommendation, 2024-12-19. https://www.w3.org/TR/vc-bitstring-status-list/. Source level A.

[^2]: AAMVA. *Mobile Driver's License (mDL) Implementation Guidelines v1.5*. American Association of Motor Vehicle Administrators, 2025-05. Source level A.

[^3]: No Phone Home. *Open Letter and Petition*. nophonehome.org, 2025-06. Source level A.

[^4]: Camenisch, J., & Lysyanskaya, A. "Dynamic Accumulators and Application to Efficient Revocation of Anonymous Credentials." *CRYPTO 2002*, LNCS 2442, 61–76. Source level A.

[^5]: W3C. *Verifiable Credentials Data Model 2.0*. W3C Recommendation, 2024. Source level A.

[^6]: Garman, C., Green, M., & Miers, I. "Decentralized Anonymous Credentials." *NDSS 2014*. Source level A.

[^7]: Bloom, B. H. "Space/Time Trade-offs in Hash Coding with Allowable Errors." *Communications of the ACM* 13, no. 7 (1970): 422–426. Source level A.

[^8]: Camenisch, J., & Lysyanskaya, A. "An Efficient System for Non-transferable Anonymous Credentials with Optional Anonymity Revocation." *EUROCRYPT 2001*, LNCS 2045, 93–118. Source level A.

[^9]: Boneh, D., Boyen, X., & Shacham, H. "Short Group Signatures." *CRYPTO 2004*, LNCS 3152, 41–55. Source level A.

[^10]: IBM Research. *Specification of the Identity Mixer Cryptographic Library v2.3*. IBM Zurich Research, 2013. Source level A.

[^11]: Bichsel, P., Camenisch, J., et al. "Cryptographic Protocols of the Identity Mixer Library." IBM Research Report, 2009. Source level A.

[^12]: Naor, M., & Yogev, E. "Bloom Filters in Adversarial Environments." *CRYPTO 2015*, LNCS 9216, 565–584. Source level A.

[^13]: Hyperledger Foundation. *Anoncreds Specification v1.0*. 2023. Source level A.

[^14]: Hyperledger Anoncreds Working Group. *Anoncreds v2 Working Draft*. 2024–2025. Source level B.

[^15]: Sovrin Foundation. *SIP-0010 Revocation Registry Update Protocol*. 2024. Source level B.

[^16]: ISO/IEC. *ISO/IEC 25010:2011 Systems and Software Quality Requirements and Evaluation (SQuaRE)*. Source level A.

[^17]: EU Digital Identity Wallet Architecture and Reference Framework, Version 1.4/1.5. European Commission, 2024–2025. Source level A.

[^18]: Government of British Columbia. *BC Digital ID Implementation Report 2024*. Source level B.

[^19]: ISO/IEC 18013-5:2021. *Personal Identification — ISO-Compliant Driving Licence — Part 5: Mobile Driving Licence (mDL) Application*. 2021. Source level A.

[^20]: ISO/IEC 23220-2:2024. *IT Security Techniques — Building Blocks for Identity Management via Mobile Devices — Part 2: Data Objects and Encoding Rules for Generic eID Systems*. Source level A.

[^21]: ISO/IEC 18013-7:2024. *Personal Identification — ISO-Compliant Driving Licence — Part 7: Mobile Driving Licence (mDL) Add-On Functions*. Source level A.

[^22]: AAMVA. *mDL Implementation Status by US State (2024)*. Source level B.

[^23]: EU Commission. *EUDI Wallet Pilot Program Status Report 2024*. Source level A.

[^24]: The Issuer Disincentive Theorem (IDT) is a formal model constructed in § 4 of the present analysis. Source level B (series-internal).

[^25]: Acquisti, A., Brandimarte, L., & Loewenstein, G. "Privacy and Human Behavior in the Age of Information." *Science* 347, no. 6221 (2015): 509–514. Source level A.

[^26]: Zuboff, S. *The Age of Surveillance Capitalism*. New York: PublicAffairs, 2019. Source level A.

[^27]: Solove, D. J. *Understanding Privacy*. Cambridge, MA: Harvard University Press, 2008. Source level A.

[^28]: FATF. *Recommendation 6: Targeted Financial Sanctions Related to Terrorism and Terrorist Financing*. Financial Action Task Force, 2024 update. Source level A.

[^29]: SWIFT. *Transaction Screening Service Specification*. 2024. Source level A.

[^30]: EU Anti-Money Laundering Regulation (EU) 2024/1624 (AMLR). Source level A.

[^31]: OpenID Foundation. *OpenID for Verifiable Credentials Implementer Survey 2024*. Source level A.

[^32]: W3C VC Working Group. *Bitstring Status List Deployment Statistics 2024*. Source level A.

[^33]: OID4VC. *Implementer Survey 2024*. OpenID Foundation, 2024. Source level A.

[^34]: EU eIDAS 2.0, Regulation (EU) 2024/1183. Source level A.

[^35]: EU Implementing Regulation (EU) 2024/2979. Source level A.

[^36]: EUDI Wallet Architecture and Reference Framework, 2025-12 Cooperation Group rolling iteration (historical snapshots v1.4/v1.5), Annex 2 Topic 7. Source level A.

[^37]: AAMVA. *mDL Implementation Guidelines v1.4*. 2024-12. Source level A.

[^38]: AAMVA. *mDL Implementation Guidelines v1.5*. 2025-05. Source level A.

[^39]: CNIL. *Bitouzet, J. Phone-Home Privacy Analysis*. Commission Nationale de l'Informatique et des Libertés, 2022. Source level A.

[^40]: EDPS. *Opinion 03/2024 on the European Digital Identity Wallet*. European Data Protection Supervisor, 2024. Source level A.

[^41]: GDPR. *Regulation (EU) 2016/679, Articles 5(1)(c) and 25*. Source level A.

[^42]: UK ICO. *Code of Practice for Online Identity*. Information Commissioner's Office, 2024. Source level A.

[^43]: AAMVA. *mDL Law Enforcement FAQ*. 2024. Source level A.

[^44]: HL7 FHIR. *Practitioner Verification Implementation Guide*. 2024. Source level A.

[^45]: NIST SP 800-63-4. *Digital Identity Guidelines, Volume C: Federation and Assertions*. 2025 final. Source level A.

[^46]: IETF Token Status List Working Group. *Token Status List draft-20*. 2024–2025. Source level A.

[^47]: RFC 5280. *Internet X.509 Public Key Infrastructure Certificate and Certificate Revocation List (CRL) Profile*. 2008. Source level A.

[^48]: Larisch, J., Choffnes, D., Levin, D., et al. "CRLite: A Scalable System for Pushing All TLS Revocations to All Browsers." *IEEE S&P 2017*. Source level A.

[^49]: Mozilla. *Firefox 137 Release Notes — CRLite Default Enablement*. 2025-04. Source level A.

[^50]: mashbean. "Civic Proof: Concept and Conceptual Positioning ⟨𝒩, ℱ, ℬ⟩." Civic Proof Series, article 02, 2026-05-03. Source level B.

[^51]: mashbean. "The Legal Foundations of Pseudonymous Public Participation." Civic Proof Series, article 04, 2026-05-04. Source level B.

[^52]: mashbean. "The Passport-Rooted Paradox / SRP." Civic Proof Series, article 07, 2026-05-05. Source level B.

[^53]: mashbean. "The Nordic BankID Model: Commercial Monopoly and Democratic Resilience / NCT." Civic Proof Series, article 09, 2026-05-07. Source level B.

[^54]: mashbean. "Wallet as Essential Facility: Antitrust Application." Civic Proof Series, article 11, 2026-05-08. Source level B.
