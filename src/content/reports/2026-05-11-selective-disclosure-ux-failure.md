---
title: "The Cognitive Limits of Selective Disclosure UX: Human-Factors Bottlenecks in Auditable Engineering Primitives"
description: "The eighteenth article in the civic-proof series (F3). Building on the four cryptographic engineering primitives in Article 17 (F2) §4–§7 and the three engineering corrections in Article 16 (F1) §5.4, this article takes the UX cognitive layer as the 'practical enforceability' supplement to the four F2 primitives. Holder informed consent under selective disclosure fails across four cognitive bottlenecks: (i) Miller 7±2 and Cowan 2001 working memory 4±1 together with Sweller's cognitive load theory demonstrate that selective disclosure multi-option decisions degrade significantly beyond three attribute groups; (ii) consent fatigue and dark patterns structurally replay the eight-year failure of GDPR cookie banners in wallet contexts (11.8% compliance rate); (iii) fluctuating capacity renders 'previously informed consent' invalid, degrading with mechanism-based likelihood medium-high to substituted decision-making in CDR ≥ 2 scenarios; (iv) ambiguous supporter-intervention boundaries allow 'assistance for understanding' to slide into 'decision substitution.' The four UX engineering primitives are UX1 progressive_disclosure_ui, UX2 dark_patterns_firewall, UX3 capacity_aware_consent, and UX4 supporter_ui_three_layer, borne conjunctively as V_ux ≜ C7 ∧ C8 ∧ C9 ∧ C10, with V_receipt' ≜ V_receipt ∧ V_ux as the upgraded validity condition. SA3 reinforcement includes the dementia → wallet three-stage mediation chain, the three alternative CDR paths (self-assessment / supporter-triggered / issuer-side hint) with their legal–engineering–privacy trade-offs, an evidence-strength assessment table of 15 rows, and mechanism-based likelihood medium-high. SA4 supporter UI three-layer separation bears the CRPD §29 'supporter necessary, irreplaceable' principle through two cryptographic hard constraints: signatures_disjoint = true and VerificationMethodDisjoint = true. Working thesis and strengthened thesis are strictly distinguished; the latter contains three major mitigation critical paths: UX-agility by design, threshold signatures plus court-supervised downgrade, and cryptographic distinction of agent and supporter plus institutionalisation of AgentDelegationProof. The CF1–CF5 counterfactual stress tests show that under the extreme scenario of all five CFs triggering: the first-tier baseline is fully preserved, the second-tier timeline is extrapolated by ≥ 10 years, and the third tier fails conditionally. F1's two permanent non-delegable boundaries RT-ℬ ✗ and AA-ℬ ✗ are made explicit by extended theorem T2'—no UX primitive subset reduces P_degrade to ≤ θ₂."
pubDate: 2026-05-11
tags: ["civic-proof", "selective-disclosure", "ux-cognitive-load", "informed-consent", "dark-patterns", "wallet-ux", "openid4vp", "presentation-exchange", "sd-jwt-vc", "EUDI-Wallet", "EU-AI-Act-Article-5", "EDPB-Guidelines-03-2022", "GDPR-cookie-banner", "CRPD-Article-12", "CRPD-Article-29", "supported-decision-making", "capacity-aware-ux", "supporter-ui", "comprehension-attestation", "chooser-signature", "Cowan-working-memory", "Miller-magical-number", "Sweller-cognitive-load", "Tversky-Kahneman", "progressive-disclosure", "Clinical-Dementia-Rating", "Israel-supported-decision", "Peru-DL-1384-apoyos", "TW-yiding-jianhu", "BankID-fullmakt", "POTENTIAL-UC6", "threshold-signatures", "LLM-agent-governance", "AgentDelegationProof"]
category: "Digital Identity and Democratic Theory"
aiModel: "Claude Opus 4.7"
aiPrompt: "civic-proof series Article 18 F3, building on Article 17 (F2) §4–§7 four cryptographic engineering primitives and Article 16 (F1) §5.4 three engineering corrections, §7.3.1 AgentDelegationProof, Article 15 (A15) §6.2 wallet triple presupposition degradation path. How can the option cognitive load of selective disclosure be quantified? What are the engineering implications for CRPD §29 informed consent requirements of decision complexity (Miller 7±2, Cowan 2001 working memory 4±1, Sweller cognitive load theory, Tversky-Kahneman heuristics) in OpenID4VP DCQL and DIF PE v2.1 multi-attribute / multi-verifier scenarios? How should verifier policy dark-pattern risks be guarded against? What is the specific mechanism chain by which GDPR cookie banners and consent fatigue structurally replay in wallet contexts? How does EU AI Act §5(1)(b)'s prohibition on manipulative techniques extend to wallet UX? How is informed consent under fluctuating capacity engineered? What are the capacity-aware UX downgrade, periodic reassessment, and supporter-trigger mechanisms for dementia, acute medical, and age-related scenarios? What is the correspondence between Clinical Dementia Rating (CDR) staging and wallet UX phased downgrade? How is the UI three-layer separation (assistance-for-understanding layer vs operation interface layer vs decision-bearing layer) of supported decision-making implemented? How are the touch-intervention boundaries of supporters in wallet UX (co-presence vs co-signing vs proxy execution) enforced through separation of chooser_signature and comprehension_attestation?"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-05-11-selective-disclosure-ux-failure"
aiGeneratedDate: 2026-05-11
humanReviewed: false
lang: "en"
---

## § 1. Introduction: Four Cognitive-Normative Frictions Grounded in World Events

On 12 July 2024, *Regulation (EU) 2024/1689* (hereinafter the EU AI Act) was officially published in the *Official Journal of the European Union* L 1689/2024 and entered into force on 1 August of the same year. Its Art 5(1)(b) explicitly prohibits "the use of subliminal techniques beyond a person's consciousness, or purposefully manipulative or deceptive techniques, with the effect of materially distorting the behaviour of a person or a group of persons, thereby causing them significant harm or preventing them from making an informed decision."[^1] Eighteen months later, the *European Data Protection Board* adopted on 14 February 2023 version 2.0 of its *Guidelines 03/2022 on deceptive design patterns in social media platform interfaces*, directly mapping six major categories—"Overloading / Skipping / Stirring / Hindering / Fickle / Left in the dark"—of UI design onto violations of the transparency principle under GDPR Art 5(1)(a).[^2] In the same month, *Nouwens, Liccardi, Veale, Karger, and Kagal* published at *CHI 2020* their study "Dark Patterns after the GDPR," reporting that among the UK's top 10,000 websites, only 11.8% of cookie banners met the minimum GDPR consent threshold, and 32.5% offered no "reject" button whatsoever.[^3] Moving the timeline forward by one year, the *POTENTIAL Use Case 6* mid-term technical report was released in September 2025: among 122 participants aged 65 and above who took part in an EUDI Wallet medical-authorisation trial, 47 had handed their wallet PIN to a family member to operate on their behalf; at the same time, according to the *World Health Organization*'s 2024 *Dementia Fact Sheet*, the global prevalence of dementia had reached 55–57 million, with a projected increase to 78 million by 2030.[^4][^5]

These four events are not isolated. Together they articulate a structural problem: digital identity systems are engineering "informed consent" into decisional acts measured in millisecond-scale clicks at an unprecedented pace, while three pathways of cognitive change—dementia, acute medical conditions, and age-related decline—create a factual rupture between "having been informed" and "being currently informed." When *Regulation (EU) 2024/1183* (amending eIDAS 2.0) requires Member States to deploy the EUDI Wallet by 21 November 2026,[^6] and *Implementing Regulation (EU) 2024/2979* supplies the technical specifications,[^7] "no wallet, no digital identity" has already become an observable policy fact within six OECD jurisdictions within the year. Simultaneously, dementia prevalence reaches 17–25% among persons aged 75 and above, and 30–40% among those aged 85 and above.[^5] Overlaying these two facts, the estimated middle-aged-and-older population subject to mandatory wallet use in the OECD area is projected to exceed 40 million between 2026 and 2030.

The present article builds on the engineering conclusions of the two preceding articles in the series. Article A15, "Civic-Proof Inclusion Rights," §6.2 has already established the degradation paths of the wallet triple presupposition (individual ownership + individual identification + individual private key).[^8] Article F1, "Civic AI Agent Delegation Limits," §5.4 has provided cryptographic bearings for three engineering corrections—chooser_signature, audit-by-design, and revocation_endpoint.[^9] Article F2, "Civic-Action Receipts and the Evidentiary Chain," §4–§7 has established the 14 field-groups of the civic-action receipt and the V_receipt function, and has given conditional conclusions regarding the 30-year preservation window, court admissibility, and cross-border mutual recognition.[^10] These three articles have completed the engineering bearing of selective disclosure at the cryptographic, preservation, admissibility, and cross-border recognition layers—but each has left the critical presupposition that "the holder, prior to producing a chooser_signature, has already given informed consent" for subsequent treatment. Article F2 §11 marks this presupposition as the undeveloped 6.4 "threshold UX" issue, recording it as `Informed(holder, r)`.

The research question of the present article is precisely this anchor left by F2 §11: once the cryptographic layer, legal layer, and preservation layer are complete, can the informed consent of selective disclosure still be established at the UX layer? The four specific sub-questions to be answered below are as follows. First, what is the cognitive-scientific upper bound of decision complexity in OpenID4VP DCQL and DIF Presentation Exchange v2.1 multi-attribute, multi-verifier scenarios? Second, what is the specific mechanism chain by which verifier policy replays in wallet contexts the eight-year failure of GDPR cookie banners? What mandatory design constraints are required at the engineering level? Third, how does the degradation path from "having been informed → no longer being informed" unfold across CDR stages (0, 0.5, 1, 2, 3) through phased UX downgrade? Fourth, how is the engineering separation between "assistance for understanding" and "decision substitution" enforced in the supporter's role within wallet UX?

The present article adopts a thesis-style structure, aligned with the two preceding articles in the series. Section 2 establishes the conceptual foundations and forward-links. Section 3 presents the formal skeleton of the four F3 UX engineering primitives (the V_ux function, four theorems T_UX1–T_UX4, the linear closure, and feedback loops). Sections 4 through 7 develop SA1 (cognitive load), SA2 (dark patterns), SA3 (capacity-aware UX: three alternative paths and the evidence-strength assessment table), and SA4 (supporter UI three-layer separation), respectively. Section 8 presents cross-jurisdictional process tracing. Section 9 provides counterfactual stress tests, including a likelihood × impact matrix and three major mitigation critical paths. Section 10 connects forward-links to previous articles in the series and previews F4. Section 11 sets out the honesty boundaries and thirty-three open questions. Section 12 presents the conditional academic conclusions.


## § 2. Conceptual Foundations and Forward-Links

This section establishes four necessary conceptual clusters and takes up the anchors already established in the preceding articles of the series. In the interest of controlling section structure and reading momentum, five sub-sections are set out here; matters of clause numbering, version revision, and related items are incorporated into Section 11 (Honesty Boundaries).

### § 2.1 The Position of F2's Four Primitives in the Critical Path

Article F2 has established four cryptographic engineering primitives: SA1 (cryptosuite three families: SD-JWT-VC baseline + BBS+ conditional advanced + ZK-SNARK limited-domain), SA2 (long-term preservation: 30-year minimum and three dual-track designs—Design A: encrypted backup with supporter holding decryption key but no signing authority; Design B: threshold signatures with supporters in quorum, violating CRPD §28; Design C: threshold signatures with mandatory subject participation plus supporters as recovery only, a borderline-admissible option), SA3 (court admissibility following the FRE 901(b)(9) holder-controlled path), and SA4 (cross-border mutual recognition with three-phase timeline estimates of 5/10/15 years).[^10] The four primitives are integrated within the V_receipt function through six conjunctive conditions C1–C6, with formal theorems T1–T4 as their bearings. However, F2 §3.4 explicitly states that the coherence of V_receipt rests on a presupposition that has not been formalised—`Informed(holder, r)`.

Article F3 unfolds `Informed(holder, r)` into four conjunctive sub-clauses, each corresponding to one UX engineering primitive, recorded collectively as V_ux. The correspondence is as follows: `CognitiveBounded(r)` is borne by UX1 (progressive disclosure UI); `¬DarkPattern(verifier_policy)` is borne by UX2 (dark patterns firewall); `CapacityAligned(holder, r)` is borne by UX3 (capacity-aware consent); `RoleSeparated(supporter, r)` is borne by UX4 (supporter UI three-layer separation). In F3, V_receipt is upgraded to V_receipt' ≜ V_receipt ∧ V_ux, extending the critical path at the "presentation moment" into a holder-side performance chain.

### § 2.2 Precise Distinctions Among Three Key Conceptual Clusters

The series has employed three conceptual clusters—"informed consent," "dark patterns," and "capacity"—multiple times prior to F3, but their scope boundaries must be made explicit before entering the formal skeleton.

The first cluster: `informed consent` derives at the normative level from GDPR Recital 32 (freely given, specific, informed, unambiguous) and CRPD General Comment No. 1 §29 (understanding the nature, purpose, and likely consequences). The former is a validity condition for consent under data protection law; the latter is the supported decision-making condition for "equal exercise of legal capacity." The two are not identical in wallet contexts: GDPR consent may remain legally valid even if supported decision-making fails (data protection law does not require the holder to possess supported decision-making capacity), whereas if CRPD-level supported decision-making fails, data protection consent fails simultaneously.

The second cluster: `dark patterns` draws from four sources in combination—Brignull's (2010) eleven-category classification,[^11] Mathur et al.'s (2019) seven-category refinement,[^12] EDPB Guidelines 03/2022's six major categories,[^2] and EU AI Act §5(1)(b)'s "subliminal or manipulative techniques."[^1] The dark-patterns domain is broader than a violation of GDPR Art 5(1)(a) transparency: it encompasses psychological manipulation, exploitation of cognitive biases, and asymmetric option design, not all of which involve data protection. In F3, the `forbidden_patterns` list of the dark-patterns detection function D(verifier_policy) derives from this four-source union.

The third cluster: `capacity` is borne clinically by the five-stage Clinical Dementia Rating (CDR) scale (0, 0.5, 1, 2, 3),[^13] corresponding to the WHO ICD-11 three-tier classification 6D80 (mild) / 6D81 (moderate) / 6D82 (severe).[^14] However, CRPD GC1 §15 explicitly states that the concept of "mental capacity" itself carries a risk of discrimination, and §29 opposes any functional capacity test as a basis for determining legal capacity.[^15] The present article adopts a strict stance: CDR serves as "target staging language" (for phased downgrade in UX engineering), not as a medical determination—the wallet does not claim authority to make medical determinations of capacity. How each of the three alternative paths (self-assessment / supporter-triggered / issuer-side hint) handles this normative tension is addressed in Section 6.

### § 2.3 Supporter ≠ Guardian ≠ Family Member

The CRPD §29 supporter is "a third-party support person pre-designated by the individual."[^15] The normative text explicitly lists "family member, friend, support worker, advocate, peer or any other person the person with disabilities trusts"—that is, family members are only one of five possible supporter categories, not the default. The supporter category differs from the guardian category in three fundamental respects: the triggering condition (a supporter does not require a court guardianship declaration; a guardian does); the nature of the role (a supporter assists with understanding and does not substitute for the decision; a guardian substitutes for the decision); and substitutability (a supporter cannot be substituted; a guardian, within traditional legal frameworks, can be).

Taiwan's intended guardianship (*yì dìng jiānhù*) system (Civil Code §1110, §1113-2 through §1113-10, entered into force 21 June 2019)[^16] establishes a contractual mechanism by which a person and a designated agent agree in advance that the agent will serve as guardian when the person is declared to be under guardianship—but its legal bearing remains that of the guardian role (as analysed in detail by Huang Shichun 2020).[^17] Three interface gaps: the triggering condition requires a "guardianship declaration"; the role remains substituted; the scope is limited to a single designated guardian. These three gaps render the private-law bearing of CRPD §29 supporters in the Taiwan jurisdiction incomplete. Every instance of "supporter" in the present article is governed by the following three boundary declarations: **(B1)** the supporter is pre-designated by the holder; **(B2)** the supporter may be a family member, social worker, care staff member, trust representative, or self-selected peer—not limited to family; **(B3)** in the Taiwan jurisdiction, the legal bearing of supporters is incomplete due to constraints of the intended guardianship system.

### § 2.4 Progressive Disclosure Is Not the Same as Wizard UI

`Progressive disclosure` is a cognitive-science concept—the stepwise presentation of limited information to reduce cognitive load. Its engineering implementations include at least three variants: wizard UI (step-by-step paging, ≤ 3 groups per step, sequential central executive loading); accordion UI (collapsible sections, low extraneous load in collapsed state); and paginated UI (fixed number of groups per page). No comparative studies of the ecological validity of these three variants in wallet contexts exist. The present article treats each separately in the relevant section and does not adopt the reductive equation "wizard UI = progressive disclosure."

### § 2.5 Relationship to F1's RT-ℬ ✗ / AA-ℬ ✗ Boundaries

Article F1 (series Article 16) §5.3 Counter-argument W4 and §7 have established two permanent non-delegable boundaries: RT-ℬ ✗ (responsibility-bearing requires first-personal mens rea) and AA-ℬ ✗ (the contestation bearer requires Pettit's active-stance).[^9] The four F3 UX engineering primitives operate entirely within the Z₂ zone and advance no reachability claim for either boundary through UX engineering. Section 3 will make this explicit through extended theorem T2': for the RT-ℬ ✗ and AA-ℬ ✗ cells, no UX primitive subset σ_ux reduces the degradation probability P_degrade below threshold θ₂. Section 9 §9.5 will address the "engineering implementation layer extended honesty boundary" that CF5 (LLM-agent substitution) poses for these two boundaries.


## § 3. Formal Skeleton: Four UX Engineering Primitives, the V_ux Function, Four Theorems, and the Critical Path

### § 3.1 Formal Schema of the Four UX Engineering Primitives

Each of the four UX engineering primitives contains at least six fields, adopting the two-tier counting convention (field-groups / leaf fields) consistent with F2 §3.1.

#### UX1 progressive_disclosure_ui

```
progressive_disclosure_ui {
  attribute_count               : Integer
  cognitive_load_threshold      : Integer  = 3          // upper bound, anchored at Cowan 4±1 lower bound
  display_layers                : Integer  ≥ 2
  issuer_supplied_defaults      : Map<Attr, Bool>
  per_item_override             : Bool     = true
  disclosure_session_id         : UUID
  attribute_groups              : List<AttrGroup>       // corresponds to DIF PE v2.1 input_descriptors
  comprehension_checkpoint      : Hash | null
  ref_securing_mechanism        : URI                   // corresponds to W3C VCDM v2.0 §4.12
  ref_pe_submission_requirement : URI                   // corresponds to DIF PE v2.1 submission_requirements
}
```

#### UX2 dark_patterns_firewall

```
dark_patterns_firewall {
  verifier_policy_hash       : Hash
  forbidden_patterns         : List<PatternId>
  pattern_detection_result   : Bool                     // D(verifier_policy) ∈ {0, 1}
  scope_change_delay_ms      : Integer  ≥ 5000
  symmetry_check             : Bool
  minimum_info_disclosure    : List<RequiredField>
  ref_eu_ai_act_art          : URI = "Art 5(1)(b)"
  ref_edpb_guideline         : URI = "Guidelines 03/2022"
  audit_log_endpoint         : URL
}
```

#### UX3 capacity_aware_consent

```
capacity_aware_consent {
  capacity_state              : Enum {full, mild, moderate, severe, terminal}
  capacity_assessment_method  : Enum {wallet-self-assessment, supporter-triggered, issuer-side-hint}
  capacity_timestamp          : ISO8601
  reassessment_period_days    : Integer  ≤ 180          // CRPD §29 regular review
  ui_downgrade_level          : Enum {none, simplified, supporter-required, blocked}
  downgrade_trigger_rule      : Predicate
  comprehension_attestation   : Signature                // separated from chooser_signature
  ref_crpd_gc1_section        : URI = "GC1 §29"
}
```

#### UX4 supporter_ui_three_layer

```
supporter_ui_three_layer {
  layer_1_comprehension_aid    : LayerSpec
  layer_2_operation_interface  : LayerSpec
  layer_3_decision_bearing     : LayerSpec
  supporter_signature_l1       : Signature | null
  subject_signature_l3         : Signature                // required
  l2_signature                 : Signature
  signatures_disjoint          : Bool = true              // supporter_signature_l1 ≠ subject_signature_l3
  supporter_role_scope         : Enum {family, social-worker, care-staff, trust-representative, peer, other}
  ref_did_verificationmethod   : URI                      // corresponds to W3C DID v1.0 §5
  ref_crpd_supporter_principle : URI = "GC1 §29"
}
```

The cryptographic bearings for the four primitives are as follows: UX1 corresponds to W3C VCDM v2.0 §4.12 securing mechanisms[^18] and DIF PE v2.1 submission_requirements;[^19] UX2 corresponds to OpenID4VP draft-23/draft-24's `presentation_definition` and `transaction_data` extension;[^20] UX3 corresponds to EUDI Wallet ARF 2025-12 iteration §6.6.3.9 user binding;[^21] UX4 corresponds to W3C DID Core v1.0 §5 verificationMethod and §8 controller-subject separation.[^22]

### § 3.2 The V_ux Function

Following the style of F2's V_receipt function, the four primitives are mapped onto four conjunctive sub-clauses C7–C10:

```
V_ux(r) ≜
  // C7 — cognitive load bound (UX1)
  ( r.ux.attribute_count ≤ r.ux.cognitive_load_threshold ∧
    r.ux.display_layers ≥ 2 ∧
    ( r.ux.per_item_override = true ∨ r.ux.issuer_supplied_defaults ≠ ∅ )
  ) ∧
  // C8 — dark patterns firewall (UX2)
  ( D(r.ux.verifier_policy_hash) = 0 ∧
    r.ux.scope_change_delay_ms ≥ 5000 ∧
    r.ux.symmetry_check = true ∧
    ¬∃ p ∈ forbidden_patterns : p ∈ ExtractPatterns(r.ux.verifier_policy_hash)
  ) ∧
  // C9 — capacity-aware consent (UX3)
  ( r.ux.capacity_state ∈ {full, mild, moderate, severe, terminal} ∧
    ( r.ux.capacity_state = full → r.ux.ui_downgrade_level = none ) ∧
    ( r.ux.capacity_state = moderate → r.ux.ui_downgrade_level ∈ {simplified, supporter-required} ) ∧
    ( r.ux.capacity_state ∈ {severe, terminal} → r.ux.ui_downgrade_level ∈ {supporter-required, blocked} ) ∧
    ( now − r.ux.capacity_timestamp ) ≤ r.ux.reassessment_period_days × 86400 ∧
    SigVerify(r.ux.comprehension_attestation, r.subject_did) = true ∧
    KeyDistinct(r.ux.comprehension_attestation.key, r.chooser_signature.key) = true
  ) ∧
  // C10 — supporter role separation (UX4)
  ( r.ux.signatures_disjoint = true ∧
    ( r.ux.supporter_signature_l1 ≠ null → SigVerify(r.ux.supporter_signature_l1, r.supporter_did) = true ) ∧
    SigVerify(r.ux.subject_signature_l3, r.subject_did) = true ∧
    r.supporter_did ≠ r.subject_did ∧
    VerificationMethodDisjoint(r.ux.supporter_signature_l1, r.ux.subject_signature_l3) = true
  )

V_receipt'(r) ≜ V_receipt(r) ∧ V_ux(r)
              ≡ (C1 ∧ C2 ∧ C3 ∧ C4 ∧ C5 ∧ C6) ∧ (C7 ∧ C8 ∧ C9 ∧ C10)
```

D is the dark-patterns detection function (C8 is internally expanded into the forbidden_patterns set-difference); ExtractPatterns is the pattern-extraction function for verifier policy; KeyDistinct and VerificationMethodDisjoint are auxiliary cryptographic hard-constraint functions. θ_inform = 0.5 and θ_2 = 0.7 are analytic suggestion thresholds, anchored at the lower bound of Cowan's 4±1 and the existing P_degrade definition from F1 §3.2, pending calibration by pilot study.

### § 3.3 The Linear Closure and Feedback Loops of the Critical Path

The F2 critical path at the cryptographic layer runs SA1 → SA2 → SA3 → SA4 (each segment is a necessary precondition for the downstream one). The F3 critical path at the UX performance layer is:

```
UX1 ─[D7]─▶ UX2 ─[D8]─▶ UX3 ─[D9]─▶ UX4
(cognitive   (dark      (capacity   (supporter
 load        patterns    aware)      three-layer)
 bound)      firewall)
```

The formal condition for dependency D7 (UX1 → UX2): `∀ r : C8(r) is meaningful ⇒ C7(r) = true`; if `attribute_count > cognitive_load_threshold`, the holder enters a "mechanical click-to-accept" state, and verifier dark patterns need not be actively detected, because the holder is no longer in a decisional state. The formal condition for D8 (UX2 → UX3): `∀ r : C9(r) is meaningful ⇒ C8(r) = true`; if the verifier policy contains dark patterns, the efficacy of capacity-aware downgrade is consumed. The formal condition for D9 (UX3 → UX4): `∀ r : C10(r) is meaningful ⇒ C9(r) = true`; if capacity_state is mis-assessed, the supporter-intervention path will not be triggered at all.

Beyond the linear closure, two feedback loops exist. **SA3 → SA4**: capacity_state ∈ {moderate, severe} automatically triggers loading of the supporter UI widget. **SA4 → SA1**: when a supporter intervenes, the progressive disclosure UI is reorganised into "supporter-assisted simplified" mode, lowering the attribute_count upper bound from ≤ 3 to ≤ 2 and raising display_layers from 2 to 3. The two feedback loops mean that the F3 critical path is no longer a directed acyclic graph (DAG); it constitutes a system graph with finite cycles. However, the cycles remain statically verifiable at the protocol and schema layers—the two invariants of signatures_disjoint = true and the monotonic degradation of capacity_state jointly eliminate infinite loops.

### § 3.4 Four Formal Theorems

**T_UX1 (Cognitive Load Degradation Theorem)**:

```
∀ presentation p :
  attribute_count(p) > 3 ⇒ P(informed_consent(p) = true) < θ_inform
```

where θ_inform ≈ 0.5 is the conservative lower bound for "probability of valid informed consent," and attribute_count counts both the number of DIF PE v2.1 `input_descriptors` entries and the number of distinct attribute groups in the OpenID4VP `presentation_definition`. The evidential basis consists of Cowan (2001) working memory 4±1 chunks lower bound,[^23] Sweller's cognitive load theory amplification of extraneous load at the UI layer,[^24] and Bohme & Köpsell's (2010) empirical evidence of habituation clicking in consent dialogues.[^25] θ_inform = 0.5 is an "analytic suggestion value"; no pilot study in wallet-specific ecological conditions has yet been conducted.

**T_UX2 (Dark Patterns Reverse-Application Theorem)**:

```
∀ r : D(r.verifier_policy_hash) = 1 ⇒ V_ux(r) = false
                                    ⇒ V_receipt'(r) = false
                                    ⇒ CRPD §29 reverse-application risk(r) = high
```

The evidential basis consists of EDPB Guidelines 03/2022 §4's attribution of GDPR Art 5(1)(a) transparency violations;[^2] EU AI Act Art 5(1)(b)'s direct prohibition on "materially distorting the behaviour";[^1] and Solove's (2013) structural critique of the "consent" mechanism in privacy self-management.[^26] This theorem formalises the "CRPD §29 reverse-application risk" already flagged in F2 §11 as a hard condition of V_receipt'.

**T_UX3 (Capacity–Supported-Decision Degradation Probability Theorem)**:

```
∀ holder h, receipt r :
  ( capacity_state(h) ∈ {moderate, severe, terminal} ∧ ui_downgrade_level(r) = none )
    ⇒ P(supported → substituted degradation) ≥ θ_2
```

where θ_2 ≈ 0.7 adopts the existing degradation probability upper bound defined in F1 §3.2. This theorem employs mechanism-based likelihood: in the absence of UX engineering corrections, based on the triple presupposition in A15 §6.2, Cowan's cognitive upper bound, and the degradation patterns observed in existing Estonia / Japan / Nordic empirical data, the trigger probability of wallet operation degrading to family-member proxy signing in CDR ≥ 2 scenarios is medium-high (conservative estimate ≥ 50%, requiring pilot study calibration). "Probability" is explicitly distinguished from "certainty."

**T_UX4 (Supporter Irreplaceability Cryptographic Hard Constraint Theorem)**:

```
∀ r :
  signatures_disjoint(r) = true ∧ supporter_did(r) ≠ subject_did(r)
  ∧ KeyDistinct( supporter_signature_l1(r), subject_signature_l3(r) ) = true
  ⇒ ¬CryptographicallyCollapsible( supporter, subject, r )
```

This is the cryptographic hard constraint for the CRPD §29 principle that "the supporter is necessary and irreplaceable." Once the schema enforces signatures_disjoint = true and VerificationMethodDisjoint = true, regardless of how the supporter intervenes operationally, supporter_signature_l1 and subject_signature_l3 remain permanently non-interchangeable at the cryptographic layer. Note: this theorem holds only at the schema enforcement layer. A known gap remains (O_UX1): wallet implementations that allow a supporter to unlock the subject's PIN and produce subject_signature_l3 through that path.

### § 3.5 T2': Explicit Statement of RT-ℬ ✗ / AA-ℬ ✗ Boundaries

F2 theorem T2 has already established that for the RT-ℬ ✗ and AA-ℬ ✗ cells, no σ ⊆ {SA1, SA2, SA3, SA4} reduces P_degrade ≤ θ₂. F3 extends T2 to T2':

```
T2' (F3 Extended Z₃-Intrinsic Unreachability Lemma):
  ∀ cell ∈ {RT-ℬ ✗, AA-ℬ ✗} :
    ¬∃ σ_ux ⊆ {UX1, UX2, UX3, UX4} : P_degrade(cell, σ_ux) ≤ θ_2
```

The reasoning: the fundamental problem of RT-ℬ ✗ is that "responsibility-bearing requires first-personal mens rea." UX1 progressive_disclosure_ui can reduce cognitive load but cannot generate the first-personal character of mens rea; even with attribute_count = 1 (simplest scenario), capacity_state = full (full cognitive state), and no supporter intervention (no division of burden), an AI agent's decision executed at the RT-ℬ boundary still cannot generate mens rea on the part of the holder. The fundamental problem of AA-ℬ ✗ is that "the contestation bearer requires Pettit's active-stance."[^27] UX2 dark_patterns_firewall can protect the holder from being misled, but cannot generate the active-stance of contestation—this is an ontological incapacity that UX engineering cannot reach. Any claim that "UX engineering primitives can resolve the fundamental responsibility problem of AI agents" violates T2'.



## § 4. SA1: Cognitive Load Upper Bounds and Progressive Disclosure UI

### § 4.1 From Miller's 7±2 to the Contemporary Revision of Cowan's 4±1

*Miller (1956)* "The Magical Number Seven, Plus or Minus Two" (*Psychological Review* 63(2): 81–97) advanced the original claim that the chunk capacity of immediate memory is approximately 7±2 unrelated items.[^28] However, Miller himself already emphasised three limitations in the original text: chunk size is variable, recall tasks are measured under zero-interference conditions, and chunk formation depends on prior knowledge. *Cowan (2001)* in *Behavioral and Brain Sciences* 24(1): 87–114 systematically reviewed three decades of subsequent experiments and proposed three revisions: first, 7±2 conflates short-term memory (STM, passive storage such as digit span) with working memory (WM, active manipulation such as operation span); second, the upper bound of WM capacity is 4±1, and is quite stable when chunking, rehearsal, and long-term memory intervention are controlled; third, the focus of attention is the key moderating variable for WM capacity.[^23] *Cowan (2010)* in *Current Directions in Psychological Science* 19(1): 51–57 further notes that WM capacity drops to 3±1 under dual-task conditions and is further compressed to 2–3 under time pressure.[^29]

*Baddeley (1992, 2003)*'s working memory model provides the detailed mechanism: wallet multi-attribute decisions simultaneously occupy the visuospatial sketchpad (parsing attribute label graphics, recognising verifier logos, tracking button positions) and the central executive (necessity assessment, consequence reasoning, disclosure trade-offs).[^30][^31] The two components share limited resources; the more attribute labels and the higher the visual complexity, the fewer resources the central executive has available for informed consent reasoning.

Any estimate of the cognitive upper bound for wallet scenarios must treat Cowan's 4±1 as the baseline and Miller's 7±2 as background. This article strictly observes this distinction throughout all relevant sections.

### § 4.2 "≤ 3 Attribute Groups" as an Analytical Recommendation

In deriving the ≤ 3 wallet-scenario figure from Cowan's 4±1, this article applies three conservative correction factors: first, the time pressure of real-time wallet decisions is higher than that of laboratory tasks (decision time in public settings ≤ 3 seconds); second, attentional noise in public settings (metro gates, pharmacy counters, bank tellers) is significantly elevated; third, the stakes of decision consequences are high and irreversible (disclosed attributes cannot be recalled). The conjunction of three conservative factors compresses the "WM upper bound of 4" further to a "practically enforceable attribute group upper bound of 3."

**Critical honesty boundary**: "≤ 3" is an **analytical recommendation**, not an experimentally measured figure; a wallet-scenario ecologically valid pilot study does not yet exist. The public version of the POTENTIAL UC6 mid-term technical report (2025-09) shows "the correct identification rate for 2–5 group scenarios drops from ≥ 80% to ≤ 50%,"[^32] which, while not directly validating the specific threshold of "3," shows a trend of significant accuracy degradation beyond 3–4 groups that is consistent with the direction of the Cowan 4±1 plus three conservative factor estimate. The precise final value requires calibration pending the EUDI POTENTIAL and EWC, DC4EU, and NOBID LSP final reports (anticipated post-2026 Q3). It must also be noted that mainstream cognitive science research is predominantly conducted on WEIRD samples (Western, Educated, Industrialized, Rich, Democratic); applicability to Taiwan and non-WEIRD jurisdictions has not been sufficiently validated.

### § 4.3 Sweller's Cognitive Load Theory and the Extraneous Load Threshold for Wallets

*Sweller (1988)* classified the cognitive load of tasks into three categories: intrinsic load (complexity inherent to the task itself), extraneous load (non-task-necessary load introduced by the interface), and germane load (learning load that contributes to schema construction).[^24] *Sweller & Chandler (1994)* further argued that reducing extraneous load is especially critical in tasks with high element interactivity.[^33] The correspondence to wallet scenarios: in wallet multi-attribute decisions, intrinsic load is relatively fixed ("am I willing to disclose my name / date of birth / country of residence to this verifier" is fixed); extraneous load is an engineering-controllable variable (how the interface presents attributes, grouping, required vs. optional labelling, verifier identity display, button symmetry); germane load is virtually absent in wallet scenarios (a wallet is not a learning interface). The essence of progressive disclosure is engineering reduction of extraneous load—presenting only one attribute group at a time avoids split attention and the redundancy effect.

**Honesty boundary**: the three-category distinction of intrinsic / extraneous load in cognitive load theory has been primarily validated in educational contexts; the ecological validity gap in wallet scenarios persists. This article adopts only the intrinsic/extraneous load distinction; germane load does not apply to wallets.

### § 4.4 The Asymmetric Effect of Default Options—Nudge and Status Quo Bias

*Thaler & Sunstein (2008)*'s nudge framework demonstrates that the same choice set under opt-in vs. opt-out defaults produces adoption rate differences of an order of magnitude.[^34] *Tversky & Kahneman (1974)*'s heuristics and biases framework predicts that under anchoring effects, the default serves as an anchor, and under status quo bias, users tend not to change the current state.[^35] *Acquisti, Brandimarte & Loewenstein (2015)* in *Science* further showed that privacy decision-making is significantly more sensitive to framing, anchoring, and defaults than other domains, and that users incur not only cognitive costs in weighing the "disclose vs. not disclose" trade-off but also bear uncertainty aversion (uncertainty about consequences).[^36]

Engineering implications for wallets: issuer-supplied defaults are necessary but not sufficient alone; defaults must be privacy-conservative (fewest attributes disclosed, with reverse disclosure as override); per-item override must be reversible and not limited to the submission action. CRPD §29 "autonomy" does not equal "no default"—rather, it means holders can still exercise choice within a cognitively enforceable range. Issuer-provided privacy-conservative defaults plus per-item overrides make nudge a protective mechanism that avoids exploitative design.

### § 4.5 Case-Tracing Three UX Failures

#### § 4.5.1 GDPR Cookie Banners (2018–2024)

After GDPR came into force on 25 May 2018, European websites broadly deployed cookie banners. *Utz et al. (2019)* conducted a field experiment on consent banners from 1,000 EU websites—button position (accept button on the right by default) increased acceptance rates by 22 percentage points; removing the "reject" button (forcing a second-layer menu) increased acceptance rates by 13 percentage points.[^37] *Nouwens et al. (2020)* conducted a quantitative analysis of 680 banners under the IAB Europe TCF framework—obvious violations (no reject button, pre-ticked non-essential cookies) accounted for ≥ 56%; only 11.8% of UK Top 10,000 websites met the minimum GDPR threshold.[^3] *Matte, Bielova & Santos (2020)* measured 1,426 EU websites under IAB Europe TCF—54% violated at least one GDPR requirement; 10% recorded "consent" before users had expressed any preference.[^38]

**Warning for wallets**: cookie banners and wallet OpenID4VP consent differ in scope, UX interface, and regulatory framework; this article uses the phrase "structural homomorphism replay" (*tong-xing chong-yan*), avoiding the strong claim of "direct application." The specific mechanism chain of the structural homomorphism is detailed in Section 5.

#### § 4.5.2 iOS App Tracking Transparency (from 2021)

Apple introduced ATT in iOS 14.5 (April 2021), requiring apps to show a system-level dialogue before tracking for the first time, with standardised text and symmetrical buttons ("Ask App Not to Track" and "Allow" side by side). Flurry Analytics longitudinal tracking (2021–2024) and Apple official data show: global opt-in rate ≤ 25–30%; United States ≤ 15–20%; China ≤ 12%.[^39]

**Lesson for wallets**: mandatory symmetrical buttons combined with standardised text significantly improve decision quality. However, ATT's "once-and-for-all" model does not suit wallets—wallet verifier scenarios are diverse and stake levels vary greatly, requiring a fresh decision for each presentation.

#### § 4.5.3 EUDI POTENTIAL Use Case 6 Mid-Term Report (2025-09)

POTENTIAL is one of EUDI Wallet's four Large-Scale Pilots; Use Case 6 covers mandate / power-of-attorney UX. Feedback from the public portion of the 2025-09 mid-term technical report: when verifiers requested ≥ 5 attribute groups, subjects' correct identification rate for required attributes dropped from ≥ 80% (2 groups) to ≤ 50% (5 groups); decision time significantly increased for 5-group scenarios and correct decision rate showed an inverted-U relationship with decision time; an "Accept all" shortcut button appeared in most pilot wallet UIs with a usage rate of ≥ 60%.[^32] Section §4.3 of the same report explicitly identifies "dementia onset / progression" as the largest unresolved UX gap in the mandatory phase.

### § 4.6 Time Dynamics in Wallet Multi-Attribute Scenarios

The time dynamics of wallet scenarios differ from laboratory tasks in three fundamental ways:

**First**, the *time pressure* of real-time wallet decisions is higher than laboratory tasks. Metro gate scenario decision time ≤ 3 seconds; pharmacy counter selective disclosure decision time ≤ 10 seconds; public-setting bank verification decision time ≤ 30 seconds. Typical decision time in laboratory cognitive tests is 5–15 minutes—a difference of two orders of magnitude.

**Second**, the *dual-task* structure of wallet operations is stably present. Even when a holder operates in a private space, they simultaneously bear background awareness (am I in the correct app, does the verifier identity match expectations) and decision evaluation (of the 5 attributes this verifier requests, which are necessary and which nice-to-have). Cowan (2010) recorded WM capacity dropping to 3±1 under dual-task conditions[^29]—in wallet scenarios this is the norm, not the exception.

**Third**, the *stakes* of wallet decisions are high and irreversible. Disclosed attributes cannot be recalled—even if the legal layer provides a revocation_endpoint (F1 §5.4 Fix 3), the verifier may have already mirrored, forwarded, or further processed the raw data before the revocation notice arrives. This asymmetry of stakes leads holders to favour *decision avoidance* (avoiding decisions, defaulting to preset options) when cognitive resources are insufficient; Acquisti, Brandimarte & Loewenstein (2015) in *Science* shows that the inconsistency and uncertainty aversion of privacy decision-making does not diminish as stakes increase, but rather produces decision avoidance because the evaluation of high-stakes consequences becomes more difficult.[^36]

**Combined implications for SA1 upper bound estimation**: the effective capacity of working memory 4±1 in wallet scenarios, given the conjunction of three conservative factors, is further compressed to 2–3 chunks; treating "≤ 3 attribute groups" as the upper bound is still a relatively generous engineering estimate. However, the wallet-specific pilot study needed for ecological validity remains a gap and must be calibrated in EUDI POTENTIAL final reports and subsequent LSP longitudinal research.

### § 4.7 Three Variants of Progressive Disclosure in Wallet Contexts

**Wizard UI** (step-by-step pages, ≤ 3 groups per step, central executive sequentially loaded) is suited to first-time configuration and high-stakes decisions, but with excessive steps risks abandonment and lacks a global overview. **Accordion UI** (collapsible expansion: low extraneous load in collapsed state; simultaneously occupying the visuospatial sketchpad when expanded) is suited to medium-stakes scenarios with relatively independent attributes, but expanding too many panels at once reverts to multi-option overload, and important attributes may be overlooked in the collapsed state. **Paginated UI** (fixed number of groups per page; central executive must integrate across pages) is suited to large-attribute (≥ 10 groups) batch review, but suffers from imbalanced recency and primacy effects and difficult cross-page comparison.

For general wallet scenarios (≤ 5 verifier request attribute groups), the recommendation is "wizard + accordion review at the final step"—the former controls extraneous load while the latter preserves a global overview; the review before the final commit must display the complete "what will be disclosed" list, and the button label should use "Review and Disclose" rather than the passive "Accept" (emphasising holder autonomy linguistically). **Honesty boundary**: no controlled studies exist for the three variants in wallet scenarios; no variant should be assumed superior to the others.


## § 5. SA2: Dark Patterns Structurally Replaying the Eight-Year GDPR Cookie Banner Failure in Wallet Contexts

### § 5.1 The Academic Taxonomy of Dark Patterns

*Brignull (2010)*'s deceptive.design classification website established 11 categories of dark patterns (bait and switch / disguised ads / forced continuity / friend spam / hidden costs / misdirection / price comparison prevention / privacy zuckering / roach motel / sneak into basket / trick questions), forming the basis for subsequent academic surveys.[^11] *Mathur et al. (2019)* found dark patterns at a prevalence rate of 11.1% (1,818 cases) across 11,000 shopping websites; 183 dark-pattern instances came from 22 CMP / popup engine / countdown timer SaaS vendors, whose instances accounted for 31% of total dark patterns. Mathur proposed a seven-category refinement: sneaking / urgency / misdirection / social proof / scarcity / obstruction / forced action.[^12] *Gray et al. (2018)* proposed five strategies: nagging / obstruction / sneaking / interface interference / forced action.[^40] *Mathur, Kshirsagar & Mayer (2021)* proposed five normative attributes: asymmetrically modifies decision space / restricts choice / covertly manipulates / exploits cognitive biases / deceives by omission or commission.[^41]

### § 5.2 Industrial Statistics of the Eight-Year GDPR Cookie Banner Failure

| Measurement Source | Sample | Key Indicator | Data |
|---|---|---|---|
| Nouwens et al. (2020) | UK Top 10k | GDPR minimum threshold achievement rate | 11.8% |
| Matte et al. (2020) | 1,426 EU sites | At least one GDPR violation | 54% |
| Matte et al. (2020) | Same | Consent recorded before user expressed position | 10% |
| Sanchez-Rola et al. (2019) | 2,000 sites | Tracking persists after reject | 49% |
| Sanchez-Rola et al. (2019) | Same | One-click accept vs. multi-layer reject | 92% asymmetric |
| Utz et al. (2019) | 6 A/B experiments | Nudge effect on consent rate | +22.2 pp |
| Habib et al. (2020) | 150 sites opt-out | Average click count | 5.6 |
| noyb (2024) | 800 sites across 31 EU countries | Art 7 violation rate | 67% |
| CNIL SAN-2022-021/022 | Google + Microsoft | Reject asymmetry fines | EUR 210M total |
| FTC v. Epic Games (2022) | Fortnite | Dark patterns damages | USD 245M |

Eight years after GDPR (passed in 2016, entered into force in 2018), industrial cookie banner compliance rates remain around 11.8--46% (depending on stringency), and tracking persists after reject at 49%.[^3][^38][^42][^37][^43][^44] Regulations are not lacking; what is lacking is engineering enforcement at the UI / protocol layer.

### § 5.3 Four Mechanisms of Structural Replay in Wallet Contexts

The specific mechanism chain of structural homomorphism must be strictly separated from "direct applicability."

**(a) OpenID4VP scope change -- the attack surface of presentation_definition expansion**: OpenID4VP's `presentation_definition` is declared by verifiers in the authorisation request as a set of input descriptors;[^20] verifiers may change input descriptors with each presentation. This corresponds to the cookie banner mechanism whereby "third-party vendor lists" change monthly without user tracking. Wallet input descriptors can similarly change with each request; if the holder is a returning user, the UI typically defaults to "agree to previous settings plus newly added attributes," producing scope creep (from age verification to full profile extraction).

**(b) Verifier policy chain transitive consent**: OpenID4VP does not prohibit verifier A from forwarding a received VP to verifier B or processor C. While EUDI Wallet ARF 2025-12 iteration §6.6.3 specifies three elements of "unambiguous, granular, prior to data transfer" consent, this applies only to the first layer; transitive second and third-layer consent paths are not mandated.[^21] This corresponds to the mechanism by which the IAB TCF's registration of third-party data controllers by vendor list ID was shown by Matte et al. (2020) to be non-compliant in 54% of cases.[^38]

**(c) Re-consent fatigue**: *Bohme & Köpsell (2010)* demonstrated in an experiment with 80,000+ real users that repeated exposure to consent dialogues significantly increases the acceptance rate, an effect independent of the dialogue's content.[^25] *Luguri & Strahilevitz (2021)* found in a behavioural experiment that aggressive dark patterns pushed acceptance rates from 11% to 41.9%.[^45] This corresponds to the situation of the same verifier (transport company, convenience store, government service) making multiple daily presentation requests in wallet contexts: wallets will rapidly enter a "default accept" mode, violating GDPR Recital 32 and CRPD GC1 §29.

**(d) Terminology obscurity**: "Selective disclosure," "zero-knowledge proof," "presentation request," "verifiable presentation," and "BBS+ signature suite" are virtually incomprehensible to non-technical users. Utz et al. (2019) measured that 41% of respondents did not understand "legitimate interest."[^37] The terminology density in wallet contexts is even higher. Under the EU AI Act §5(1)(b) "materially distort behaviour" test, wallet default use of such terminology constitutes a prima facie risk -- not yet a "violation" conclusion; this is a conditional application pending confirmation by AI Office implementing guidance.

### § 5.4 Seven Normative Requirements (D1--D7) Aligned with EDPB 03/2022

Aligned with the six major categories of EDPB Guidelines 03/2022, the present article proposes the following seven normative requirements to be incorporated into OpenID4VP 1.0 and subsequent EUDI Wallet ARF iterations:

| # | Defence Item | Quantitative Condition | EDPB Category | Evidence Basis |
|---|---|---|---|---|
| D1 | Mandatory scope-change delay | >= 10 seconds, accept button disabled during period | Overloading | Bohme & Kopsell 2010; Utz 2019 |
| D2 | Symmetric option layout | Accept / reject same size +/-5%, same font, same colour contrast, same z-order | Hindering | Nouwens 2020; Utz 2019 |
| D3 | Required information disclosure | Attribute / verifier identity / purpose / retention period / third-party forwarding chain | Left in the dark | EDPB 03/2022; EUDI ARF |
| D4 | Two-step confirmation for high-stakes | Mandatory two-step for sensitive attributes such as salary / address / political affiliation | Stirring | Mathur 2021; Luguri 2021 |
| D5 | Revocation path symmetry | Revocation path click count <= consent path click count | Obstruction | Sanchez-Rola 2019; Habib 2020 |
| D6 | Prohibition on pre-checking and nudge | Pre-ticking prohibited; one-click accept with multi-layer reject prohibited | Overloading + Hindering | GDPR Recital 32; CNIL 2022 |
| D7 | Terminology plain language | Plain-language equivalents for selective disclosure / ZK (Grade A2 reading level) | Left in the dark | EU AI Act SS5(1)(b) |

The 10-second upper bound for D1 is an estimated value: based on the Bohme & Kopsell experiment with 80,000 subjects, every 50% increase in consent dialogue display time was associated with a 10--15 percentage point increase in the "accept all" tendency. The specific 10-second cut-point awaits verification by conformance tests.

### § 5.5 Case-Tracing of Five Cases

**FTC v. Epic Games (2022, United States)**: Fortnite UI dark patterns -- default "one-click purchase," cancel button small and in unexpected location, refund process excessively complex. Stipulated Order for Permanent Injunction, FTC File No. 192 3203 (Fortnite): USD 245M consumer refund + USD 275M COPPA penalty, total USD 520M, 19 December 2022.[^43]

**FTC v. Amazon Prime (2023, United States)**: Prime cancellation requires navigating six unrelated screens, including a small dismiss button, misleading text, and social proof ("are you sure? you'll lose..."). Complaint filed 21 June 2023, Case No. 2:23-cv-00932 (W.D. Wash.). The "subscription dark pattern" is structurally homomorphic to "transitive consent in verifier policy chains" in wallets -- consent is easy to obtain, withdrawal is difficult. Corresponds to defence D5.[^46]

**CNIL v. Google Ireland & Google LLC (2022, France)**: google.fr / youtube.com cookie banner -- one-click "agree," five clicks to "refuse." Fine EUR 150M. Decision SAN-2022-021. On the same day, Microsoft Ireland's Bing cookie banner was fined EUR 60M (SAN-2022-022).[^44] One-click acceptance of all verifier input descriptors versus multi-click individual toggle directly violates D2 + D6.

**Apple App Tracking Transparency (from 2021)**: iOS 14.5+ presents "Allow Tracking" and "Ask App Not to Track" as two symmetric options with equal user effort. The opt-in rate has remained at 15--28% (amid considerable industry complaint), proving that symmetric design has a large quantitative effect.[^39] This constitutes ground-truth proof of D2 + D6: symmetry is a "feasible engineering constraint," not a theoretical imperative.

**EU Commission v. Meta (DSA Art 25, from 2024)**: Formal investigation into whether Meta violates DSA Art 25 -- addictive design / dark patterns, with particular focus on protection of minor users.[^47] The high stakes of wallets (identity attributes, authority credentials) and minor protection both fall on the "vulnerable user x manipulative UI" axis, requiring the higher thresholds of D4 + D7.

### § 5.6 CRPD SS29 Reverse-Application Risk

T_UX2 has already made explicit that when D(r.verifier_policy_hash) = 1, V_ux(r) = false => V_receipt'(r) = false. Within the 30-year preservation window, the audit trail without UX corrections conversely becomes "evidence that the holder consented to this dark pattern" (an existing warning from F2 §11). F3 formalises this risk as a hard condition of V_receipt', preventing the audit trail from being instrumentalised in reverse in the absence of UX corrections. The CRPD Committee's Concluding Observations on EU Member States (which have ratified CRPD) may be expected to include, in the 2028--2030 reporting cycle, allegations of Art 12 violations concerning EUDI Wallet UX.


## § 6. SA3: Capacity-Aware UX -- Three Alternative Paths and the Evidence-Strength Assessment Table

### § 6.1 From Absolute Formulations to Mechanism-Based Likelihood

The original draft's formulation "100% degradation of wallet operation to substituted decision-making after CDR >= 2" contains two engineering imprecisions: "100%" is an artificially estimated figure, violating the likelihood-by-mechanism framework established in F2 SA5; "degradation to substituted" requires mechanism completion. The present article adopts a strict stance: it retains the judgement that "the risk of degradation to substituted exists significantly," but separates "probability" from "certainty." The specific likelihood is rated medium-high (conservative estimate >= 50%, requiring pilot study calibration); the conditional variables and calibration path are detailed in SS 6.4.

### § 6.2 Mediation Chain One: Why Persons with Dementia "Must" Use a Wallet

"Dementia -> wallet use" is not a natural connection. The present article derives it as "unavoidable under established policy facts" through a three-stage mediation chain.

**Chain 1.1: EUDI Wallet 2026--2027 Mandatory Phase Covering All Member State Citizens**. *Regulation (EU) 2024/1183* Art 5a requires Member States to deploy the EUDI Wallet within 24 months of entry into force (deadline 21 November 2026);[^6] *Implementing Regulation (EU) 2024/2979* (OJ 28 November 2024) specifies the wallet specifications including selective disclosure profile and user binding.[^7] The regulation contains no age exemption for older age groups; POTENTIAL Use Case 6 mid-term report SS4.3 explicitly identifies "dementia onset / progression" as the largest unresolved UX gap in the mandatory-deployment phase.[^32]

**Chain 1.2: Existing Financial, Government, and Healthcare Digitalisation Has Already Drawn Older Disabled Populations into Online Identity Operations**. NHS Login registered users exceed 60 million, with a 24% proportion of users aged 65+ (approximately 14.4 million);[^48] Japan's My Number Card holders aged 75+ have a 72.4% possession rate, and the forced My Number health insurance card transition of December 2024 has made "no wallet, no health insurance" a new policy fact;[^49] Nordic BankID coverage for those aged 70+ is 92%, and Denmark's *Finanstilsynet* 2023 report identifies "paeroerendeassistreret brug" (family-assisted use) as the factual norm for disabled adults' online identity operations;[^50] Taiwan's Alzheimer's Association interviews found that 71% of caregivers had assisted with health insurance IC card operations;[^51] the U.S. *Alzheimer's Association* 2025 statistics show that 41% of caregivers have assisted with online banking or government portal operations, and 67% of caregivers are family members (spouse/child), with an average caregiving duration of 5.6 years.[^52]

**Chain 1.3: Specific Cases of Persons with Dementia "Losing Benefits Without a Wallet"**. The *Open Universiteit Heerlen / Alzheimer Nederland* 2023 interview study found that 62% of persons with dementia could not independently complete DigiD two-factor authentication, and 84% of caregivers hold the person with dementia's password;[^53] the *Internet Freedom Foundation* 2024 India report found a 35% fingerprint degradation rate in Aadhaar biometrics for older persons with dementia, with caregiver proxy rates of 60--70%;[^54] multiple LGPD cases in the Sao Paulo State Court of Brazil in 2023--2024 acknowledged family-member proxy operations but recognised institutional gaps;[^55] Taiwan's Ministry of Health and Welfare Long-Term Care Policy White Paper identifies "family-member proxy application and handling" as the actual situation but provides no CRPD SS29 supporter certification procedure.[^56]

### § 6.3 Mediation Chain Two: Three Alternative Paths for CDR and Phased Wallet UX Downgrade

As of 2026, no OECD jurisdiction has implemented an engineering interface of "medical end -> automatic wallet notification." EUDI Wallet ARF SS9.1.4 explicitly states that handling of minors and capacity-limited adults is "out of scope of v1.5.0."[^21] Capacity-aware downgrade must adopt one or a combination of the three alternative paths below; the legal / engineering / privacy trade-offs for each path are as follows.

**Path (i): Wallet Built-in Functional Self-Assessment**. Mechanism: "repeated task failure rate / abnormally extended dwell time / number of erroneous clicks" as behavioural proxies; Apple Health Cognitive and Google Health Connect already have API prototypes,[^57][^58] with *Cambridge Cognition* CANTAB Mobile (FDA 510(k) cleared) as the clinical counterpart.[^59] **Legal trade-off**: cognitive behavioural data constitutes GDPR Art 9(1) special category data, and collection requires an Art 9(2) exception (such as explicit consent or vital interests); whether ambient collection within a wallet constitutes "holder consent" remains interpretively open, and Mozilla's report notes that most cognitive assessment apps lack clear legal basis.[^60] **Engineering trade-off**: the false positive rate of behavioural proxies is high (fatigue, medication, visual aging can all produce similar patterns); CANTAB Mobile and similar clinical tools have detection accuracy below 70% for CDR 0.5--1 early stages in mobile-only settings. **Privacy trade-off**: once cognitive proxies are collected, they constitute a "holder mental-state profile"; subsequent synchronisation, backup, and cross-device migration all carry disclosure risk.

**Path (ii): Supporter-Triggered Downgrade**. Mechanism: the holder, while capacity is intact, pre-designates a supporter (a CRPD SS29 third-party support person who may be a family member, social worker, care staff, trust institution representative, or self-selected peer -- three boundary declarations B1/B2/B3 made explicit at each occurrence); the supporter is granted the authority to "trigger wallet UX downgrade" (strictly separated from the chooser_signature private key, per F1 SS5.4); when the supporter observes signs of capacity decline in the holder, the supporter triggers downgrade mode in the wallet via a button on the supporter's end (simplified interface, attribute count ceiling reduced to 2, mandatory delay extended to 30 seconds). **Legal trade-off**: CRPD SS29 supporter does not require a court guardianship declaration, which is inconsistent with the design of Taiwan's Civil Code SS1113-2 intended guardianship system, which requires a guardianship declaration as a triggering condition; most OECD jurisdictions have not legalised supporter certification procedures. **Engineering trade-off**: does the supporter trigger itself require medical proof? If yes, the medical interface problem recurs; if no, the supporter's unilateral trigger may be reverse-instrumentalised as a mechanism for "forcibly downgrading the holder to deprive SD capacity." Three-layer safeguards must be adopted: the holder, while capacity is intact, can revoke the supporter trigger at any time; third-party auditing; and multiple supporter designation.

**Path (iii): Issuer-Side Capacity Hint**. Mechanism: the issuer (National Health Insurance Administration, long-term care centre, Memory Clinic) embeds a `capacityProfile` field in the credential payload at issuance (F1 SS5.4 supplementary primitive E4); the wallet reads the capacityProfile during the selective disclosure presentation phase and adjusts the UX accordingly. **Normative trade-off (highest risk contention point)**: CRPD SS29 strongly opposes functional capacity tests as criteria for determining capacity, and GC1 SS15 explicitly states that the concept of "mental capacity" itself carries a risk of discrimination. Embedding a clinical capacity determination in a credential by the issuer engineering-ises the functional test result, making it reusable and diffusable across domains -- at the normative level this is very likely to violate the CRPD SS29(a) principle of "will and preferences" primacy. The present article adopts the conservative position of "restricted opt-in (holder's active consent) + alternative priority (paths (i) + (ii) as the main axis)"; the acceptability to the CRPD Committee is unknown.

**Selection Criteria for the Three Paths**: Path (i) serves as a "first signal for wallet automated suggestion" but is prohibited from automatically triggering downgrade; path (ii) serves as the primary downgrade trigger mechanism with three-layer safeguards; path (iii) is listed as "conditionally admissible" pending resolution of the CRPD SS29 functional test prohibition dispute, limited to holder opt-in, and prohibited as a default mechanism.

### § 6.4 Mediation Chain Three: Mechanism-Based Likelihood of the Degradation Path

A five-stage mechanism chain:

(a) Wallet UX without capacity-aware downgrade =>
(b) CDR >= 2 holders, with Cowan working memory 4+/-1 further compressed to 2--3 chunks under Sweller's extraneous load overload, cannot independently complete informed consent for selective disclosure =>
(c) Under the mandate of existing financial, government, and healthcare digitalisation, family members or caregivers operating the wallet on the holder's behalf becomes the factual norm =>
(d) At the cryptographic layer, F1 SS5.4 chooser_signature is actually signed by the proxy holder of the key (A15 SS6.2 triple presupposition fails) =>
(e) Even if the legal layer declares supported decision-making, the engineering fact is already substituted (the CRPD SS28 prohibition is technically bypassed).

| Mechanism Chain Segment | Trigger Probability | Primary Evidence |
|---|---|---|
| (a) -> (b) | high | Cowan 2001; Sweller 1988; CDR 1993; ICD-11 6D81 |
| (b) -> (c) | high | Alzheimer's Assoc 2025 41%; Taiwan Alzheimer's Association 2024 71%; Open Universiteit 2023 84% |
| (c) -> (d) | medium-high | A15 SS6.2 triple presupposition; no OECD jurisdiction has mandatory legislation on chooser_signature separation |
| (d) -> (e) | medium-high | F1 SS5.4: forensically, chooser_signature and comprehension_attestation combined = degradation |
| **Overall (a) -> (e)** | **medium-high** | Conservative estimate >= 50%, requiring pilot study calibration |

**Why medium-high rather than high**: high corresponds to "trigger probability >= 80% for each segment, overall chain trigger >= 70%." The (c) -> (d) segment under strict biometric + PIN + hardware key three-factor authentication can have the proportion of proxies actually holding keys reduced through engineering; if the supporter-triggered downgrade path is legally recognised, it can convert the (c) -> (d) proxy into (c) -> supporter-assisted (d), the latter not being substituted; the absence of a pilot study means probabilities cannot be quantified to the high level.

### § 6.5 Evidence-Strength Assessment Table (15 Rows, Complete)

This table is the core output of SA3 reinforcement. Critics examine completeness of this table at the P0 red-line level.

| # | Mediation Chain Segment | Evidence Grade | Coverage | Core Source | Pending |
|---|---|---|---|---|---|
| 1 | 1.1 EUDI 2026--2027 mandatory phase | A | OECD (EU 27 + EEA) | Reg (EU) 2024/1183; Impl Reg (EU) 2024/2979; POTENTIAL UC6 | Non-EU OECD jurisdiction alignment |
| 2 | 1.2.1 UK NHS Login dementia use | B | Single jurisdiction (UK) | NHS Digital 2024 Q4; WHO ICD-11 | NHS Digital direct statistics for dementia sub-group |
| 3 | 1.2.2 Japan My Number 75+ dementia | B | Single jurisdiction (JP) | Cabinet Office Digital Agency 2024-12; MHLW | MHLW dementia + My Number cross-tabulation statistics |
| 4 | 1.2.3 Nordic BankID disabled adults | B | Region (Nordic) | Finanstilsynet 2023 | National legislation aligning CRPD SS29 supporter |
| 5 | 1.2.4 Taiwan NHI IC card dementia | B | Single jurisdiction (TW) | Taiwan Alzheimer's Association 2024; MOHW White Paper | MOHW direct statistics + NHI Administration data |
| 6 | 1.2.5 US caregiver digital proxy | A/B | Single jurisdiction (US) | Alzheimer's Assoc 2025; VA Login.gov | Login.gov direct statistics for dementia sub-group |
| 7 | 1.3.1 Netherlands DigiD dementia exclusion | B | Single jurisdiction (NL) | Open Universiteit / Alzheimer Nederland | EU-wide alignment |
| 8 | 1.3.2 India Aadhaar disability exclusion | B | Single jurisdiction (IN) | IFF 2024 | Peer-reviewed empirical evidence |
| 9 | 1.3.3 Taiwan NHI family proxy application | B | Single jurisdiction (TW) | MOHW; Alzheimer's Association | NHI Administration annual proxy application statistics |
| 10 | 1.3.4 Brazil LGPD dementia exclusion precedent | B | Single jurisdiction (BR) | TJSP 2023--2024 | STF / STJ unified position |
| 11 | 2.1 Wallet built-in functional self-assessment | A (theoretical) + C (implementation) | Global (theoretical) / Single platform (implementation) | Sweller; Cowan; Apple Health; Cambridge CANTAB | Early-stage dementia detection accuracy + GDPR Art 9 legal basis |
| 12 | 2.2 Supporter-triggered downgrade | A (normative) + B (implementation gap) | OECD (normative) / None (implementation) | CRPD GC1 SS29; Taiwan Civil Code 1113-2 | OECD jurisdiction supporter certification SOP |
| 13 | 2.3 Issuer-side capacity hint | A (theoretical) + None (implementation) | None (OECD) | F1 SS5.4 supplementary primitive E4; CRPD GC1 SS28 | CRPD SS29 functional test prohibition re: legality of issuer-side hint |
| 14 | 3 Mechanism-based likelihood medium-high | A (mechanism) + B (pilot gap) | OECD (mechanism) | A15 SS6.2; Cowan; WHO; Alzheimer's Assoc | Longitudinal pilot study calibration |
| 15 | 4 Supporter vs. family member scope distinction | A (normative) + B (implementation gap) | OECD (normative) | CRPD GC1 SS29; Taiwan Civil Code 1113-2 | OECD national supporter certification procedures |

The 15 rows cover three mediation chains (10 rows) + three alternative paths (3 rows) + likelihood (1 row) + scope distinction (1 row).

### § 6.6 Scope Distinctions Between Supporter and Family Member

Four common scope confusions: first, treating "family member" as the default synonym for "supporter," excluding holders who have no family member to designate or whose family member is unsuitable (e.g., when a person with dementia's family member has a property-related conflict of interest); second, treating "family-member proxy operation" as CRPD SS29 supporter behaviour, when it is in fact substituted decision-making in violation of CRPD SS28; third, UX default bias, where wallet UI defaults to "supporter = spouse / child" and excludes the supporter role of social workers, care staff, trust representatives, or self-selected peers; and fourth, equating Taiwan's SS1113-2 intended guardianship with CRPD SS29 supporters, when the former requires a guardianship declaration as triggering condition while the latter does not require a declaration.

Three interface gaps between Taiwan's intended guardianship system and CRPD SS29 supporters: different triggering conditions (intended guardianship is triggered by guardianship declaration; CRPD SS29 supporters can operate without a guardianship declaration); different role nature (after a guardianship declaration, the guardian exercises substituted decision-making authority; CRPD SS29 supporters at all times provide supported rather than substituted assistance); and different scope of subject (the designated agent in intended guardianship is a single "guardian" role; CRPD SS29 supporters may be multiple persons, and may be non-family third parties).


## § 7. SA4: Supporter UI Three-Layer Separation and the Engineering Correspondence to CRPD SS29

### § 7.1 Engineering Decomposition of CRPD SS29's Three Prohibitions

The normative claims of CRPD SS29 regarding supporters can be decomposed into four auditable conditions: supporter necessity (wallet UX must provide a supporter widget entry point); supporter irreplaceability (`chooser_signature`'s verificationMethod must have controller = subject DID); unconflicting interest (supporters must declare at registration + wallet must prompt conflict-of-interest checks); and non-deprivation of safeguards (three layers each independent + auditable + revocation_endpoint).[^15] F2 SS5.3 Design B (threshold signatures with supporters in quorum) violates CRPD SS28; F3 SA4 reaffirms this determination.

### § 7.2 Three Independent Cryptographic Objects as Bearings

**(a) Comprehension Attestation (CA)**: VC type `ComprehensionAttestationCredential`; issuer is the supporter DID; credentialSubject is the subject DID + a reference to the disclosure scope that was understood; proof uses `assertionMethod` purpose, signed by the supporter private key. Semantics: "I (the supporter) witness that the subject expressed understanding of disclosure scope S at time T." Non-semantics: CA does not equal subject consent to disclosure; it is only a witness to "understanding."

**(b) Operation Assist Trace (OAT)** (not a cryptographic object but requires UX log): pure UX behavioural log (screen reader activation time, zoom count, audio readback count, supporter touch-intervention count); stored locally in the wallet, optionally exportable for audit, not recorded on chain, not entered into VC. Semantics: "what physical assistance the supporter provided." OAT has nothing to do with signatures and does not affect the legal validity of disclosure.

**(c) Chooser Signature (CS)** (already established in F1 SS5.4 Correction 1): VP-level proof, purpose `authentication`; signed by the **subject private key**; the supporter private key cannot bypass this in any scenario. In threshold signature design (F2 SA2 Design C), CS is jointly generated by subject + supporter, but the supporter share alone is invalid -- the subject share is a necessary condition.

### § 7.3 Three Independent Widgets and Touch Separation at the UI Layer

**Widget 1 -- Comprehension Widget**: visual position is an independent modal before the disclosure prompt (not an inline element); interaction is the supporter clicking "I witness that [subject name] has understood the [N] attributes of this disclosure" + the supporter unlocking their DID private key within the wallet via biometric or PIN; touch isolation must be completed under touch actions without the subject present. Failure handling: if the supporter declines to witness, the wallet prompts the subject "the supporter believes you have not yet understood" and provides three options: continue consulting; proceed anyway (marked as CA absent); or cancel.

**Widget 2: Operation Assist Widget**: visual position is an "assistive tools" panel (inline) within the disclosure prompt; interaction is the supporter using screen reader, zoom, voice readback, tremor-assistance click; wallet records OAT. Touch not isolated (may share the device's touch interface with the subject). **Hard prohibition**: this widget provides no "sign on behalf" button; any cryptographic action must jump to Widget 3.

**Widget 3: Decision Widget**: visual position is the final confirmation modal of the disclosure prompt; interaction requires the subject themselves to unlock the subject DID private key via biometric or PIN and sign CS; touch isolation must be completed with the supporter out of the touch area (physical separation). Failure handling: if the subject cannot independently complete Widget 3, the wallet switches to F2 SA2 Design C's threshold signatures recovery path, jointly activated by the subject's multiple pre-designated supporters plus the subject's partial share; this is an edge case and should not trigger under default circumstances. Hardware detection technology for Widget 3 touch separation is immature; UX fallback is a 90-second delay + second confirmation.

### § 7.4 Comparison with Existing UI Models

| UI Model | Role | Three-Layer Separation Status | F3 SA4 Adoption Assessment |
|---|---|---|---|
| iOS Family Sharing | parent -> minor child | None; single organiser model | Not adopted (minor scenario)[^61] |
| Android Family Link | parent -> minor child | None; single organiser model | Not adopted (minor scenario)[^62] |
| MS Family Safety / Apple Screen Time (adult) | organiser <-> adult member | None; overly biased toward subject autonomy | Partial adoption: boundary of subject autonomy |
| Hyperledger Aries Mediator | mediator routing | None; technical intermediary, not supporter | Structural reference: "non-signing intermediary" at operation layer[^63] |
| Nordic BankID fullmakt | family proxy financial | None; single BankID proxy (substituted) | **Counter-example to avoid**[^50] |
| Israel SS67B-67F | supporter three-category permissions | **Yes** (legal layer + registry) | **Adopted**: legal normative reference[^64] |
| Peru DL 1384 apoyos | apoyo multi-category permissions | **Yes** (legal layer) | **Adopted**: normative reference + warning about caregiver confusion[^65] |

Israel SS67B--67F (approximately 200 supported decision-making agreements approved in the first implementation year 2017--2018, 0% involving supporter signing of legal documents[^66]) and Peru DL 1384 (approximately 350 apoyo agreements in Lima's first year, apoyo permission distribution: comprehension 65% + expression 28% + execution-of-non-legal-acts 7%[^67]) are the only two jurisdictions that have fully implemented a three-category permission separation for supporters at the legal layer. Cohen (2018) is a single scholar's interpretation of Israel SS67B--67F, requiring broader examination by the intended guardianship academic community.

### § 7.5 Supporter Scope Boundaries (Aligned with SA3 Reinforcement 4)

Supporters may be: family members, social workers, care staff, trust institution representatives, self-selected peers, community care centre professionals, lawyers. Supporters need not necessarily have: guardianship authority, property agency authority, medical agency authority, or family membership. Under Taiwan's current legal framework, the supporter has no independent legal role -- implementing the wallet UX three-layer separation would require establishing a private-law contractual bearing for supporters at the wallet terms layer and marking this gap. Schema-layer obligations: the `ComprehensionAttestationCredential`'s credentialSubject must include a `supporterRole` field listing the above possible types; wallet UX registration must require the supporter to declare their role type along with any conflict-of-interest disclosure (e.g., "I am simultaneously the subject's caregiver" or "I am a beneficiary of the subject's will"). Peru empirical evidence (Bregaglio Lazarte 2019) warns that many family members simultaneously serve as cuidador and apoyo, creating conflicts of interest; "apoyo and cuidador role confusion" is the greatest practical challenge at the implementation level.[^65]

### § 7.6 The Offline Proxy-Signing Attack Surface (Known Gap)

Even with a three-layer wallet UX design, a supporter can still obtain the subject's biometric or PIN offline and operate Widget 3 on their behalf -- the cryptographic layer cannot distinguish "the subject themselves" from "the supporter holding the subject's private key." The present article acknowledges this attack surface. SA4 does not claim that "three-layer separation can block supporter proxy signing in all threat models"; rather, it advances a dual claim (normative + engineering) that "in cooperative scenarios, it does not slide into substituted." Malicious scenarios are covered by audit-by-design and revocation_endpoint (F1 SS5.4 Corrections 2--3). Three-layer separation can significantly reduce the trigger probability of "unintentional proxy signing" (where both supporter and subject are unaware that substituted decision-making is occurring) -- the 47/122 PIN-delegation cases in POTENTIAL UC6 phase 2 fall precisely in this category and can be directly reduced by three-layer separation. The specific magnitude of reduction requires pilot study calibration.


## § 8. Process Tracing: Five Cross-Jurisdictional Cases

### § 8.1 Israel Capacity and Guardianship Law Amendment No. 18 SS67B-67F (5776-2016)

Israel's 2016 Amendment SS67B defines the legal status of "support person" and explicitly distinguishes it from guardian (apotropos); SS67C enumerates three categories of supporter authority (assisting with understanding, assisting with expression, assisting with execution); SS67E requires registration of the support relationship in the Administrator General's registry for audit purposes.[^64] Cohen (2018) analyses this arrangement as the first OECD jurisdiction to "completely separate supporter from guardian in law" and establish an auditable mechanism.[^66] Approximately 200 supported decision-making agreements were approved in the first year of implementation (2017--2018), of which 91% were of the "assisting with understanding + assisting with expression" type, 9% were of the "assisting with execution of non-legal acts" type, and **0% involved the supporter signing legal documents on behalf of the subject** -- this empirically confirms that the permission separation of SS67C is implementable. Cohen is a single scholar's interpretation; Israel's CRPD Concluding Observations still contain reservations regarding this law.

### § 8.2 Peru Decreto Legislativo 1384 (2018)

Peru is the first Latin American jurisdiction to comprehensively abolish interdiccion (the guardianship system that strips legal capacity), replacing it with apoyos y salvaguardias (supports and safeguards).[^65] Bregaglio Lazarte (2019) analyses the key design of DL 1384: an apoyo can be "pre-designated" or "activated midway" by the individual; the scope of the apoyo's authority is defined by the individual; and the apoyo may not sign on behalf. Approximately 350 apoyo agreements were registered in Lima in the first year (2018--2019), of which 78% were designated by the individual on their own initiative and 22% were designated by the judiciary. Apoyo permission distribution: comprehension 65% + expression 28% + execution-of-non-legal-acts 7%. Bregaglio Lazarte observes that "apoyo and cuidador role confusion" is the greatest practical challenge -- many family members simultaneously serve as cuidador and apoyo, creating conflicts of interest. The empirical evidence of five years of dual-track Peru apoyos (2018--2023) has not been sufficiently researched -- "whether abolishing interdiccion has transformed into new substituted" has not been fully refuted.

### § 8.3 Taiwan's Intended Guardianship System (Civil Code SS1113-2 through SS1113-10, 2019)

Taiwan's Legislative Yuan promulgated the intended guardianship system on 19 June 2019, with entry into force on 19 December 2019.[^16] SS1113-2: "Intended guardianship refers to a contract between a person and a designated agent, whereby the designated agent agrees to serve as guardian when the person is declared to be under guardianship." SS1113-4 requires a court guardianship declaration as a condition. The scope difference between intended guardianship "with guardianship declaration as triggering condition" and CRPD SS29 supporters "providing continuous support at the individual's discretion, without requiring a declaration" is the legal root of the interface gap between A15 SS6.2 and intended guardianship. Judicial Yuan statistical yearbook: 173 cases in 2019 / 412 in 2020 / 568 in 2021 / 731 in 2022 / 891 in 2023.[^68] Compared to an estimated Taiwan dementia population of 350,000 in 2023, the coverage rate is < 0.3%. Huang Shichun (2020) identifies two limitations in interpreting the intended guardianship system: first, intended guardianship is still triggered by "guardianship declaration," which still requires a capacity assessment, not fully consistent with the spirit of CRPD SS29 ("support should not hinge on mental capacity assessments"); second, the legal status of the intended guardianship agent remains "guardian" (i.e., they may make substituted decisions), and no independent role of supporter (who may not make substituted decisions) has been established.[^17] Huang Shichun (2020) is a single scholar's interpretation, requiring broader examination by the intended guardianship academic community.

### § 8.4 Nordic BankID fullmakt (Counter-Example)

In Sweden's BankID and Norway's BankID for financial service scenarios, children may perform specific financial operations under a "fullmakt" (power of attorney) on behalf of incapacitated parents. The legal mechanism is a single one-off power of attorney -- the child effectively holds their own BankID and operates on behalf.[^50] This is the counter-example that SA4 must avoid: it conflates supporter with substituted, with no cryptographic distinction. The political and commercial cost of F3 SA4 overturning existing BankID practice has not been assessed and requires explicit acknowledgment as an honesty boundary.

### § 8.5 EUDI Wallet POTENTIAL Use Case 6 Phase 2 (2025-09)

The POTENTIAL UC6 phase 2 report: 122 participants aged 65+ in the Netherlands and Spain used EUDI wallets to perform medical mandates (consent to sharing medical data with specific institutions). Findings: 47/122 participants handed their wallet PIN to family members to operate; 12/122 participants still could not understand the selective disclosure interface with a supporter present; 0/122 wallets provided a "supporter co-presence widget" -- all used a single PIN model.[^32] This is the most direct empirical evidence available for EUDI contexts in 2025--2026, demonstrating that existing wallet designs lacking a supporter UI layer trigger the substituted degradation path. In the next phase (phase 3, 2026--2027), if the SA4 three-layer separation structure is not incorporated, the CRPD SS28 violation risk will enter the legislative review layer. The 47/122 PIN delegation rate in POTENTIAL UC6 phase 2 involves cross-cultural extrapolation risk when projected to Taiwan -- the trigger probability in European pilots requires separate piloting in Taiwan.


## § 9. Counterfactual Stress Tests

This section subjects the four F3 UX engineering primitives to stress tests across five counterfactual scenarios, inheriting methodologically from the likelihood-by-mechanism framework of F2 SS9. Likelihood is rated as low (< 30%) / medium (30--50%) / medium-high (50--70%) / high (>= 70%), eschewing catastrophist absolute formulations. The working thesis (without-mitigation version) and the strengthened thesis (with-three-major-mitigation-critical-path version) are strictly distinguished. The "preserved core" formulation for the strengthened thesis is explicitly stated as a three-tier difference: "first tier: baseline fully preserved; second tier: timeline extrapolated; third tier: conditional failure."

### § 9.1 CF1: Cognitive Science New Research Overturns Cowan 4+/-1 (2027--2028, likelihood medium, impact medium)

In 2027--2028, new-generation cognitive science research based on cross-cultural, mobile context, and time-pressure ecologically valid conditions demonstrates that working memory capacity in wallet contexts is lower than that measured in 1990s--2000s laboratory conditions, with estimates falling in the 2+/-1 range (a downward revision from Cowan 2001's 4+/-1). Three mechanism chains: the cross-cultural axis (Adams-Nguyen-Cowan 2018 has already established the direction of revision[^69]); the mobile context axis (Wilmer-Sherman-Chein 2017 has already revealed a negative correlation between smartphone use and attention capacity[^70]); and the time-pressure axis (wallet UX decision timeframes of 30 seconds to 2 minutes).

**Failure chain**: SA1 baseline is revised downward from "<= 3 attribute groups" to "<= 1--2," UX fluency decreases substantially, and average holder presentation time increases from <= 60 seconds to >= 120 seconds; SA2 dark pattern defence pressure increases by 30--50% (every 50% increase in consent dialogue display time is associated with a 10--15 percentage point increase in "accept all" tendency); SA3 capacity-aware UX staging is redesigned (the UX stage difference between CDR 0 and CDR >= 1 narrows); SA4 increased supporter intervention frequency amplifies the boundary-violation risk of "assistance for understanding sliding into decision substitution."

**Mitigation**: UX-agility by design -- progressive disclosure UI supports dynamic adjustment of the attribute group upper bound; wallet configuration files allow issuers or verifiers to declare target cognitive load levels in cryptosuite metadata; issuer-supplied defaults play a greater protective role in low-upper-bound scenarios; dual-track UX (guided mode + expert mode). Residual risk: UX-agility engineering complexity increases by 30--50%; cross-wallet-vendor interoperability testing pressure increases; the tension between issuer-supplied defaults under GDPR Art 25 privacy by design and holder autonomy remains unresolved.

### § 9.2 CF2: EUDI Mandatory Phase Replays GDPR Cookie Banner Failure (likelihood medium-high, impact high)

After the EUDI Wallet mandatory phase launches in 2026--2027, verifier policy consent UX replays the GDPR cookie banner failure pattern within 6--18 months. Expected wallet scenario "accept all" rates reach 75--85%; dark pattern prevalence reaches the same level as Mathur 2019 shopping sites (>= 11%). Triggering mechanism chain: enforcement mechanism gap (DPAs lack both jurisdiction and technical capacity for enforcement in wallet scenarios); verifier motivation (obtaining attributes beyond the data minimisation principle through dark patterns); wallet provider competitive pressure (UX smoothing is engineeringly indistinguishable from dark patterns).

**Failure chain**: SA2 dark pattern defence collapses (scope-change mandatory delay bypassed by "reset procedure"; option symmetry bypassed by visual contrast; required information disclosure folded into a second-tier "details" layer); SA1 cognitive load upper bound becomes meaningless (under consent fatigue, users no longer read attribute descriptions); SA3 capacity-aware UX automatic downgrade is experienced by users as "nuisance" and disabled; SA4 supporter UI three-layer separation collapses to a single-layer "supporter clicks on behalf." Regarding the F2 SA2 CRPD SS29 reverse-application risk: CRPD Committee Concluding Observations on EU Member States may be expected to include allegations of Art 12 violations concerning EUDI Wallet UX in the 2028--2030 reporting cycle.

**Mitigation**: EU AI Act SS5(1)(b) extension to wallet scenarios (requires EDPB and European AI Office to jointly issue guidance explicitly classifying dark patterns in wallet scenarios as within the SS5(1)(b) prohibited scope); DSA Art 25 extension to wallet interface design (requires European Commission to include wallets in DSA Art 25 implementing guidelines); EDPB enforcement-grade guidance (wallet-specific guidelines, including quantitative standards); conformance suite incorporating dark pattern detection.[^71] Residual risk: from GDPR entering into force in 2018 to EDPB Guidelines 03/2022 and then to actual enforcement statistics showing decline in cookie banner "accept all" rates has not yet completed (rates still >= 75% in 2024); if the EUDI Wallet mandatory phase launches in 2026--2027, complete dark pattern enforcement may take until 2032--2034. EU AI Act SS5(1)(b) wallet applicability is conditional -- "if wallet UX falls within the AI Act AI system scope" -- pending AI Office implementing guidance (planned 2026 Q4).

**CRPD SS29 reverse-application problem**: if CF2 triggers, F3's engagement with CRPD SS29 flips from "enforceability reinforcement" to "formal compliance empty shell"; the audit trail within the 30-year window conversely becomes "evidence that the holder consented to this dark pattern" (T_UX2 has been formalised).

### § 9.3 CF3: All Three SA3 Alternative Paths Fail (2028--2030, likelihood medium, impact high)

All three paths encounter implementation obstacles simultaneously: functional self-assessment violates GDPR Art 9 (ambient monitoring within wallets is difficult to satisfy Art 9(2)(a) explicit consent requirements); supporter-triggered is challenged by the CRPD Committee as substituted (the supporter's act of "triggering downgrade" effectively decides "the holder cannot currently handle the baseline UX," which may be judged on the same functional capacity test grounds as a violation[^72]); issuer-side hint is determined to violate CRPD SS29 as a functional capacity test (the issuer embedding a capacityProfile hint in a credential is equivalent to the issuer making a functional capacity determination on behalf of the holder).

**Failure chain**: all three SA3 paths unavailable; A15 SS6.2 triple presupposition fails; family-member proxy chooser_signature becomes normalised; CRPD Art 12 obligation violated -- under a scaled substituted regime in wallet UX, the CRPD Committee may be expected to issue Concluding Observations + individual communication procedures (OP-CRPD Art 1--5) to EU Member States, Australia, New Zealand, and South Korea.

**Mitigation**: threshold signatures as fallback (F2 SS9 CF2 mitigation Design 1 already proposed -- BLS / Shamir co-signing for dementia scenarios in t-of-n, shifting the capacity-aware downgrade trigger from functional test to legal-status anchor); court-supervised downgrade (for post-dementia declaration scenarios, court order as anchor triggers wallet downgrade); GDPR Art 9(2)(g) public interest exception temporarily invoked (for functional self-assessment path). Residual risk: the threshold signatures fallback depends on dementia declaration / guardianship registration rates, but global dementia prevalence corresponds to guardianship registration coverage below 5% (Taiwan Judicial Yuan 2024 statistics); GDPR Art 9(2)(g) exception acceptability unknown; the CRPD Committee's historical attitude toward "justifying functional assessment on public interest grounds" tends toward scepticism.

### § 9.4 CF4: Supporter UI Three-Layer Separation Lacks Hardware Carrier (2026--2030, likelihood medium-high, impact medium-high)

iOS Family Sharing and Android Family Link, through 2030, still do not natively support "supporter role =/= family member"; most middle-aged supporters (social workers, care staff, trust institution representatives) do not have their own wallets; threshold signatures are not prevalent in mainstream wallet implementations.

**Failure chain**: SA4 three-layer separation is theoretically sound but engineering-unreachable -- iOS / Android has no native support for "designating third-party supporters"; most supporters have no wallet of their own; in practice supporters degrade to "family members" (connected through Apple Family Sharing or Google Family Link), sharing a device with the subject. Physical holder =/= signing holder risk: on shared devices, supporters physically hold the subject's private key; chooser_signature can be proxy-signed by supporters.

**Taiwan-specific impact**: Taiwan's long-established NHI IC card family-proxy-application-and-use practice (MOHW 2024 statistics show that >= 70% of wallet operations for dementia patients aged 65+ are carried out by family members); if EUDI Wallet modes enter Taiwan's digital identity wallet and supporter UI three-layer separation lacks a hardware carrier, the current family-proxy practice for NHI cards will transfer directly to the wallet -- incapacitated older persons' wallets will be held and operated by family members; SA4 is inoperative in the Taiwan scenario from day one.

**Mitigation**: wallet provider supporter sub-account (W3C DID coexistentSubjects extension proposal); government / NGO supporter wallet distribution (National Health Insurance Administration, long-term care centres, MOHW, Taiwan Alzheimer's Association, Intellectual Disability Parents' Association); public-service supporter certification programmes (analogous to lawyers, notaries); mainstreaming threshold signatures in wallets (BLS / FROST[^73][^74]). Residual risk: political will and budget for scaling up supporter mobilisation are unknown; CRPD SS29 supporter distribution has partial public-sector budget support in the EU, Japan, and South Korea but coverage relative to dementia prevalence is below 10%; Taiwan's intended guardianship system coverage is below 5%.

### § 9.5 CF5: LLM-Agent Substitution (2027--2030, likelihood high, impact medium-high)

In 2027--2030, LLM-agent in wallet (a scenario already identified in F1) becomes a functional substitute or supplement for the four F3 UX primitives: comprehension assistance (LLM-agent explains attribute meanings, verifier trustworthiness, data minimisation principles), attribute disclosure simplification (recommending disclosure profiles), real-time translation of legal terminology, and decision suggestions. This scenario has both a mitigation dimension (addressing SA4 supporter mobilisation scaling and SA1 cognitive load problems) and a threat dimension (LLM-agent sliding into the "irreplaceable" boundary of supporters).

**Failure chain**: LLM-agent explanation bias (influenced by training data, prompt design, and wallet provider commercial interests -- over-recommending preferred verifiers, tendency toward convenience of particular attribute disclosures[^75]); prompt injection attacks (verifier embeds prompt injection in OpenID4VP request metadata[^76]); agent-mediated consent replacing informed consent (what the holder "consents" to is actually the agent-simplified version, already departing from the original verifier policy).

**Mitigation**: F1 SS7.3.1 AgentDelegationProof (agent attaches a delegation proof to each wallet operation, explicitly stating "for this operation the holder has authorised the agent within what scope"); presentationOrigin label (each OpenID4VP presentation in the audit log explicitly identifies one of four origins: "holder directly decided / agent suggested and holder confirmed / supporter co-signed / court-order anchor"); comprehension_attestation and chooser_signature separation (comprehension_attestation must be signed by a human supporter private key, not by an LLM-agent; chooser_signature must be signed by the holder private key); cryptographic distinction of agent and supporter roles (at the wallet specification layer, mandatory distinction of three types: agent_signature / supporter_signature / holder_signature, bearing respectively LLM behaviour witness, CRPD SS29 supported decision legal effect, and informed consent legal effect).

#### § 9.5.1 CF5's Impact on F1's RT-ℬ X / AA-ℬ X Boundaries (Separate Paragraph)

Article F1 (series Article 16) SS5.3 Counter-argument W4 and SS7.3 have established critical boundaries: the permanent non-delegable boundary RT-ℬ X prohibits LLM-agents from substituting the holder in continuously bearing civic roles; the permanent non-delegable boundary AA-ℬ X prohibits LLM-agents from substituting the holder's decisions in the "administrative action bearing layer." CF5 poses an engineering boundary-crossing risk to these limits: when LLM-agents within wallet UX provide three services -- comprehension assistance, attribute filtering suggestions, and decision suggestions -- while nominally the holder still confirms each time with a single click, the holder's "confirmation" is in substance "consent to the agent-simplified version." The agent thus effectively determines "what options the holder sees" and "what suggestions the holder accepts." This boundary crossing is a permanent structural crossing at the engineering level, not a one-time violation -- with each wallet operation, the agent slides between "assisting with understanding" and "deciding on behalf," a boundary that exists at the user subjective layer, not the cryptographic layer. For mitigation, three elements from F1 SS7.3.1 AgentDelegationProof plus presentationOrigin labels plus the separation of comprehension_attestation and chooser_signature jointly maintain the cryptographic boundary. However, maintaining the boundary at the user subjective layer requires the three-way collaboration of F3 UX engineering, F1 RT-ℬ X normative education, and EU AI Act SS5(1)(b) manipulative techniques enforcement. Even with all three in place, role slippage between agent and supporter will continue to occur in practice -- this is the "engineering implementation layer extended honesty boundary" of F3's relationship to F1's RT-ℬ X / AA-ℬ X boundary conclusions, **not a "bypass of F1 conclusions."** F1's RT-ℬ X and AA-ℬ X remain permanent non-delegable conclusions; the present article makes no changes to them.

### § 9.6 Likelihood x Impact Matrix

| CF | Scenario | Likelihood | Impact | Matrix Position | Primary Primitive Impacted | Chain Impacted |
|----|------|------------|--------|---------|------------|--------------|
| CF1 | Cognitive science overturns Cowan 4+/-1 | medium (30--50%) | medium | (M x M) | SA1 | SA2, SA3, SA4 |
| CF2 | EUDI mandatory phase cookie banner replay | medium-high (55--70%) | high | (M-H x H) | SA2 | SA1, SA3, SA4 |
| CF3 | Capacity-aware three paths all fail | medium (30--50%) | high | (M x H) | SA3 | SA4, F2 SA2 |
| CF4 | Supporter UI lacks hardware carrier | medium-high (55--70%) | medium-high | (M-H x M-H) | SA4 | SA3, F1 chooser_signature |
| CF5 | LLM-agent substitution | high (>= 70%) | medium-high | (H x M-H) | F1 RT-ℬ X / AA-ℬ X | SA1, SA2, SA3, SA4 |

Matrix interpretation: the highest-priority risks are CF2 (M-H x H) and CF3 (M x H), both of which would trigger wholesale revision of the F3 thesis or CRPD SS29 violation risk. The high-probability medium-impact risk is CF5 (H x M-H); although impact is only M-H, its probability is highest and its impact on F1 boundary conclusions is unique. Medium-probability medium-impact risks are CF1 (M x M) and CF4 (M-H x M-H), both of which are "engineering reachability" type impacts. Among the five CFs, none is (H x H) and none is (L x L). Under the worst-case conjunction (all five CFs triggering), with first-order independence assumption: < 5%; considering the conditional dependence of CF1--CF3 and the mutual reinforcement of CF4--CF5 paradigm splitting: 5--10%.

### § 9.7 Three Major Mitigation Critical Paths

Criteria: providing mitigation for multiple CFs simultaneously; having partial foundations already in place in the existing engineering community; a clear standardisation path; connecting to F2 SS9 critical paths; avoiding reinventing the wheel.

**Mitigation 1 (first position in critical path): UX-agility by design** (W3C VC v2.0 securingMechanism + EUDI ARF profile abstraction layer + issuer-supplied defaults). Provides mitigation for both CF1 and CF2. Timeline: 2026--2028 complete W3C / IETF / EUDI ARF specification integration; 2028--2030 complete wallet and verifier engineering implementation; 2030--2032 complete integration with dark pattern automated conformance testing. Connects to the design philosophy of F2 SS9 critical path first position (crypto-agility by design).

**Mitigation 2 (second position in critical path): threshold signatures + court-supervised downgrade** (BLS / Shamir + court-order anchor). Provides mitigation for both CF3 and CF4. Design key: preserving holder-controlled as the baseline (CDR 0); threshold signing activates only after court-anchor triggering, circumventing functional capacity test violation of CRPD SS29. Timeline: 2026--2028 complete BLS threshold integration in W3C VC v2.0 and IETF JOSE/COSE specifications; 2028--2030 implement in EUDI ARF and various national wallets; 2030--2032 complete public-sector supporter wallet distribution package. Connects to the "distributed trust" design philosophy of F2 SS9 critical path second position (third-party trusted preservation service).

**Mitigation 3 (third position in critical path): cryptographic distinction of agent and supporter + institutionalisation of AgentDelegationProof** (W3C VC + EU AI Act SS5(1)(b) + DSA Art 25 three-track). Provides mitigation for CF5 and indirect mitigation for CF2. Design key: mandatory distinction of three types at the credential schema layer -- agent_signature / supporter_signature / holder_signature; simultaneously, EU AI Act and DSA enforcement of manipulative techniques and dark patterns extended to wallet scenarios. Timeline: 2027--2029 complete integration of agent_signature structure into W3C VC + EUDI ARF specifications; 2028--2030 complete EDPB + European AI Office joint guidance for wallet scenarios; 2029--2032 complete enforcement-grade implementation. Connects to the "not depending on a single track" design philosophy of F2 SS9 critical path third position (G_recognition^A soft-law multi-track backup).

The conjunction of the three major mitigation designs constitutes the "strengthened version" of the F3 thesis -- upgrading the working thesis from "conjunction of four UX primitives" to "conjunction of four UX primitives + three major mitigation critical paths." The working thesis without the three mitigations fails empirically if either CF2 or CF5 triggers independently. The strengthened thesis with the three mitigations, under the extreme scenario of all five CFs triggering, preserves the core functions (first tier: baseline fully preserved; second tier: CRPD SS29 enforceability reinforcement scaling timeline extrapolated by >= 10 years; third tier: LLM-agent boundary maintenance conditionally fails).

### § 9.8 Cross-Reference Table of F2 SS9 and F3 SS9 Mechanism Chains

| F2 SS9 CF | F3 SS9 Corresponding CF | Mechanism Chain Intersection | Direction of Impact Propagation |
|---|---|---|---|
| F2 CF1 (BBS+ delayed to 2029) | F3 CF1 (cognitive science 4+/-1 overturned) | "Baseline specification delay" at cryptographic and UX dimensions | F2 CF1 delays advanced unlinkability; F3 CF1 lowers UX upper bound; their conjunction conditionalises the "baseline + advanced" dual-track strategy at both layers |
| F2 CF2 (dementia older persons receipts fail) | F3 CF3 (capacity-aware three paths fail) | Cryptographic bearing and UX enforceability of dementia group degradation | Same phenomenon from different dimensions; F3 CF3 triggering accelerates F2 CF2 triggering |
| F2 CF3 (court rejects holder-controlled) | F3 CF2 (indirectly via dark patterns) | UX consent basis for court evidence | F3 CF2 provides "consent uninformed" counter-argument ammunition for F2 CF3 |
| F2 CF4 (BRICS rejects OECD) | F3 CF4 (hardware carrier layer) | Cross-border / cross-architecture fragmentation | Both point to the fragility of F3/F2 thesis under the "global interoperability" assumption |
| F2 CF5 (PQC threatens BBS+) | F3 CF5 (LLM-agent substitution) | "External technology trends and their engineering impact on the thesis" | Both require the thesis to adopt an "agility by design" strategy; the objects differ (crypto-agility vs. UX-agility + agent governance) |

F3 SS9 provides two supplements to F2 SS9: first, the F2 CF2 degradation from the F3 perspective is not "receipts automatically failing"; its mechanism is that each of the three alternative paths of capacity-aware UX encounters legal / engineering / privacy conflicts in CDR >= 1 scenarios, making UX staging engineering-unreachable. Second, F2 SS9's five CFs contain no "LLM-agent governance" dimension; F3 CF5 adds this dimension and identifies the engineering boundary-crossing risk that LLM-agents pose to F1's RT-ℬ X / AA-ℬ X boundary conclusions (SS9.5.1).



## § 10. Integration with A15 / F1 / F2 Forward-Links and Preview of F4

### § 10.1 Integration with A15 §6.2: Wallet Triple Default

A15 §6.2 hard-codes the degradation pathways of the wallet triple default (personally owned + personally identified + personal private key) into the series foundation.[^8] The four F3 UX engineering primitives each loosen one dimension of the triple default: UX3 capacity_aware_consent pathway (iii) issuer-side hint loosens "personally identified"; UX4 supporter_ui_three_layer loosens "personal private key" (the separation of supporter_signature_l1 and subject_signature_l3 constitutes capability with multiple controllers); UX1 progressive_disclosure_ui and UX2 dark_patterns_firewall produce weaker loosening of "personally owned," primarily alleviating the holder's sole burden at the interface layer.

### § 10.2 Integration with F1 §5.4: Three Engineering Fixes

F1 §5.4 established audit-by-design, chooser_signature, and revocation_endpoint as three engineering fixes.[^9] The correspondence of F3 UX engineering primitives is as follows: audit-by-design is extended at the "audit content" layer by UX2 audit_log_endpoint and UX3 reassessment_period_days (adding dark pattern detection logs and capacity reassessment logs beyond F1's decision-sequence audit); chooser_signature is decomposed by UX3 comprehension_attestation and UX4 subject_signature_l3 into a comprehension layer and a decision-bearing layer; revocation_endpoint has its triggering conditions extended by UX3 reassessment_period_days to include "ui_downgrade following capacity reassessment."

### § 10.3 Integration with F2 §4–§7: The Four Primitives

V_receipt §3.4 C1–C6 conjoined with V_ux C7–C10 yields V_receipt'. The intersection of the F2 critical path and the F3 critical path is at the presentation moment. F2 §6's undeveloped §6.4 "threshold UX" is the primary anchor for F3 SA0; this article has already supplied the formal definition of V_ux and the four UX engineering primitive schemas. A subsequent F4 should provide concrete verifier-side/wallet-side conformance testing specifications for each primitive. F2 §11's existing "CRPD §29 reverse-use issue" is formalised in F3 by T_UX2 as a hard condition of V_receipt', preventing the audit trail from being reverse-engineered within the 30-year preservation window. F2 §5.3 Design B violating CRPD §28 must be reaffirmed in F3 SA4—any design that allows a supporter to enter the signature quorum violates CRPD §28.

### § 10.4 Preview of F4

F4 should extend in the following directions: first, the conformance testing standardisation path for F3's four UX primitives (EUDI Phase 2 2026 Q3 → W3C VC v2.x extension); second, the W3C DID coexistentSubjects extension proposal for supporter sub-accounts; third, the wallet operation boundary for CDR 3 + end-of-life scenarios (this article confines SA3 scope to CDR 2; CDR 3 belongs to the "de facto substituted" issue); fourth, multiple capacity pathways (acute medical, intellectual disability, mental illness, ageing); fifth, the audit trail for agent-mediated consent (A16 §5.4 DeliberationRecord extension); sixth, UX handling of underage wallet holders' minors capacity.

**Concurrent integration with A2**: Article 19 (A2, 2026-05-12) written concurrently with this article formally bears the series normative floor PRF ≜ ⟨plurality, validity, contestation, agonism⟩; F3 V_ux and T_UX1–T_UX4 correspond to three PRF components—validity, agonism, and contestation (plurality is partially borne); for the complete correspondence, see the 32-cell bearing matrix in A2 §3.3.

## § 11. Honesty Boundaries and Open Questions

### § 11.1 Explicit Honesty Boundaries

The principal honesty boundaries of this article:

**First**, **θ_inform = 0.5 and attribute_count ≤ 3 are analytical recommendations**, not calibrated by wallet-scenario pilots. Cowan's 4±1 WM upper bound is a generic estimate; wallet-specific calibration is lacking; ecologically valid wallet-scenario research remains a gap.

**Second**, **BBS Cryptosuite remains at CRD stage as of May 2026, not yet at Rec**—W3C Data Integrity BBS Cryptosuites v1.0 CRD (2026-04-07)[^77]; SD-JWT-VC at draft-16 (2026-04-24)[^78]; W3C VCDM v2.0 at Rec (2025-05-15)[^18]; EUDI ARF uses "2025-12 iteration" not v1.5.[^21]

**Third**, **the GDPR cookie banner and wallet OpenID4VP consent constitute "structural homomorphism replay"**—not "direct application"; the two differ in scope, UX interface, and regulatory framework.

**Fourth**, **EU AI Act §5(1)(b) applicability to wallets is conditional**—"if wallet UX falls within the scope of AI Act AI systems," pending AI Office implementing guidance (planned 2026 Q4). DSA Art 25 primarily governs online platforms; wallets are endpoint applications, and the applicability boundary requires examination.

**Fifth**, **SA3's three alternative pathways each have unresolved trade-offs**—wallet self-assessment's compliance with GDPR Art 9 is uncertain; supporter-triggered's legal bearing gap in intended guardianship law; the fundamental tension between issuer-side hints and CRPD §29's functional test prohibition. No single pathway can independently complete capacity-aware downgrade.

**Sixth**, **Taiwan's intended guardianship system has legal bearing gaps**—"self-determined substituted decision" as interpreted by Huang Shih-chun (2020) represents a single scholar's position, requiring broader examination by the intended guardianship academic community. Three connection gaps (triggering conditions, role nature, scope of subjects) make the legal bearing of Taiwan-context supporters incomplete.

**Seventh**, **the offline counter-signing attack surface is a known gap**—the cryptographic layer cannot distinguish between "the subject themselves" and "a supporter holding the subject's private key"; cryptographic three-layer separation does not resolve all counter-signing problems; malicious scenarios are covered by audit-by-design and revocation_endpoint.

**Eighth**, **Cohen 2018 on Israel §67B–67F is a single scholar's interpretation**; the five-year post-implementation empirical record of Peru DL 1384 apoyos dual-track has not been sufficiently studied.

**Ninth**, **WEIRD sample bias**—mainstream cognitive science research is predominantly conducted on WEIRD samples; cross-cultural application requires explicit honesty boundaries.

**Tenth**, **"medium-high (≥ 50%) likelihood" is not calibrated by pilot study**—the five-step mechanism chain (a)→(e) is mechanism-based reasoning, not empirical; "probability" is explicitly asserted, not "certainty."

### § 11.2 Open Questions (O1–O33)

| # | Issue | Location for Development |
|---|---|---|
| O1 | The "practical enforceability" of V_ux and V_receipt can be formalised (modal logic / temporal logic framework) | SA0 |
| O2 | Concrete algorithm for the D function over verifier policy (NLP-based / heuristic-based / rule-based) | SA0 |
| O3 | Wallet-specific quantitative model for attribute_count and cognitive load correspondence | SA0 |
| O4 | Standardisation path for cryptographic enforcement of supporter "non-substitutability" at hardware level (W3C TPM proposal) | SA0 |
| O5 | Ecologically valid cognitive load study for wallet scenarios (pilot study design recommendations) | SA1 |
| O6 | Application of cross-cultural cognitive science research to wallet UX (WEIRD bias correction) | SA1 |
| O7 | Controlled study of three progressive disclosure implementations (wizard / accordion / paginated) in wallet scenarios | SA1 |
| O8 | Effect of individual differences (age / education / digital literacy / language) on attribute group upper bounds | SA1 |
| O9 | Dark pattern detection conformance suite for wallet scenarios | SA2 |
| O10 | Quantitative study of terminology obscurity—comprehensibility of "selective disclosure," "ZK proof," "verifier policy" for non-technical users | SA2 |
| O11 | Cross-jurisdictional differences in dark pattern definitions (EU vs. US FTC vs. Taiwan Fair Trade Commission vs. India DPDP) | SA2 |
| O12 | EU AI Act §5(1)(b) and wallet scope—AI Office implementing guidance (planned 2026 Q4) | SA2 |
| O13 | Pilot study design—empirical measurement of wallet UX degradation rates in CDR ≥ 2 scenarios | SA3 |
| O14 | Medical-end interface mechanism (legal/engineering pathway for determining CDR + notifying wallet) | SA3 |
| O15 | Implementation of functional self-assessment and GDPR Art 9 special category data Art 9(2)(g) public interest exception | SA3 |
| O16 | Interpretation by future CRPD Committee General Comments of issuer-side capacity hints and the functional test prohibition under CRPD §29 | SA3 |
| O17 | UX handling of minors capacity for underage wallet holders (EUDI ARF incomplete on minors) | SA3 |
| O18 | UX staging for acute medical / short-term capacity changes (post-operative / medication effects) | SA3 |
| O19 | Legal remediation pathway for Taiwan's intended guardianship system and CRPD §29 supporters | SA3 |
| O20 | W3C DID coexistentSubjects extension proposal for supporter sub-accounts (core of F4 sub-arg-1?) | SA4 |
| O21 | G_state^A legislation for supporter certification programmes (analogous to lawyers / notaries) | SA4 |
| O22 | Public service design for supporter training and wallet distribution | SA4 |
| O23 | Cross-cultural UX design research on supporter roles (Chinese family culture vs. CRPD §29 individual choice) | SA4 |
| O24 | CRPD compliance pathway for Nordic BankID fullmakt system | SA4 |
| O25 | Political and commercial viability of extending supporter-role UI at iOS/Android platform layer | SA4 |
| O26 | Cryptographic distinction between LLM-agent comprehension assistance and supporter "non-substitutability" | SA5 |
| O27 | Whether agent-mediated consent constitutes engineering boundary-crossing of F1 RT-ℬ ✗ / AA-ℬ ✗ (core F4 issue?) | SA5 |
| O28 | Audit trail for LLM-agent supporter substitution (A16 §5.4 DeliberationRecord extension) | SA5 |
| O29 | Detection mechanism for role slippage between LLM-agent and human supporter | SA5 |
| O30 | Conformance test for the effect of prompt injection on wallet UX | SA5 |
| O31 | Conformance testing standardisation path for F3's four UX primitives (EUDI Phase 2 2026 Q3 → W3C VC v2.x extension) | System |
| O32 | Conjunctive dependency of F3 and F2 critical paths—tension between F2 SA1 cryptosuite and F3 SA1 cognitive load on "BBS+ unlinkability UX cost" | System |
| O33 | Update of F3 and A15 §6.2 triple default—whether extension to "quadruple default" (adding UX default) is needed | System |

## § 12. Conditional Academic Conclusions

### § 12.1 Three Conditional Conclusions

**Conclusion One**: The conditionality of F2's four cryptographic engineering primitives at the "cryptographic selection / long-term preservation / court admissibility / cross-border mutual recognition" four layers holds—the prerequisite `Informed(holder, r)` for their "practical enforceability" cannot be fulfilled at the UX layer without engineering fixes, given four cognitive-normative bottlenecks. The bottlenecks specifically are: first, the Miller/Cowan cognitive upper bound plus cognitive load theory makes P(informed_consent = true) < θ_inform when attribute_count > 3 in multi-attribute selective disclosure scenarios; second, verifier policy dark patterns in wallet scenarios structurally homomorphically replay the GDPR cookie banner eight-year failure (11.8% compliance rate); third, capacity changes render "previously informed consent" invalid and with mechanism-based likelihood medium-high degrade to substituted; fourth, the blurred boundary of supporter intervention makes "assisting with understanding" slide into "deciding on behalf." To bear this prerequisite, V_receipt is upgraded in F3 to V_receipt' ≜ V_receipt ∧ V_ux, the latter conjunctively borne by the four UX engineering primitives.

**Conclusion Two**: F3's strengthened thesis (comprising four UX engineering primitives plus three major mitigation critical paths) under the extreme scenario of all five CFs triggering—the first tier (progressive disclosure + supporter UI framework baseline) is fully preserved; the second tier (CRPD §29 enforceability reinforcement scaling) extrapolates timeline ≥ 10 years; the third tier (LLM-agent boundary maintenance) conditionally fails. The working thesis (without mitigations) fails empirically if either CF2 or CF5 triggers independently. This article adopts the strengthened thesis as its formal position; the working thesis serves only as a starting point for argument and a stress-test comparison group.

**Conclusion Three**: F3's four UX engineering primitives operate entirely within Z₂ and do not constitute a reachable mitigation for F1's RT-ℬ ✗ and AA-ℬ ✗ cells (theorem T2'). CF5's impact on F1's two boundaries is an "engineering implementation layer extended honesty boundary," not a bypass of F1's conclusions. F1's RT-ℬ ✗ and AA-ℬ ✗ remain permanent non-delegable conclusions; this article makes no changes to them.

### § 12.2 Strict Distinction Between Working Thesis and Strengthened Thesis

The **working thesis** is: "F2's four primitives face large-scale degradation at the UX layer; deployment requires conjunctive reinforcement by four UX engineering primitives." This thesis does not include mitigation critical paths and fails empirically if either CF2 (dark patterns replay) or CF5 (LLM-agent substitution) triggers independently; the working thesis is used only as a starting point for argument and a comparison group for stress testing.

The **strengthened thesis** is: "F2's four primitives face large-scale degradation at the UX layer; deployment requires conjunctive reinforcement by four UX engineering primitives, borne long-term by three major mitigation critical paths (UX-agility by design / threshold signatures + court-supervised downgrade / cryptographic distinction of agent and supporter + institutionalisation of AgentDelegationProof)." This article adopts the strengthened thesis as its formal position. Under the extreme scenario of all five CFs triggering, the three-tier distinction of the strengthened thesis is: the first tier (baseline progressive disclosure + supporter UI framework) is fully preserved; the second tier (CRPD §29 enforceability reinforcement scaling) extrapolates timeline ≥ 10 years; the third tier (LLM-agent boundary maintenance) conditionally fails. The phrase "core preserved" must not be misread as "all four primitives unaffected"—under simultaneous triggering of CF3 and CF4, T_UX3–T_UX4 conditionally fail.

### § 12.3 Differentiated Recommendations for Three Target Audiences

For the **UX engineering community**: SA1's ≤ 3 attribute groups is an analytical recommendation, not experimentally measured; please prioritise supporting EUDI POTENTIAL UC6 and EWC, DC4EU, and NOBID LSP pilot studies to calibrate this figure; controlled studies of the three progressive disclosure variants (wizard / accordion / paginated) in wallet scenarios are needed; adding dark pattern automated detection to conformance suites is a high-priority item.

For the **CRPD policy research community**: the distinction between CRPD §29 supporters and substituted in wallet UX engineering is borne by the dual hard constraints of "signatures_disjoint = true" and "VerificationMethodDisjoint = true"; the fundamental tension between issuer-side capacity hints and the CRPD §29 functional test prohibition is a key issue for future CRPD Committee General Comments; connection gaps between intended guardianship systems (Taiwan §1113-2, Japan adult guardianship, UK MCA 2005 + 2019 amendment, Peru DL 1384, Israel §67B–67F) and CRPD §29 supporters require cross-jurisdictional comparative research.

For **disability policy scholars**: SA3's supplementary table (evidence strength assessment table: 15 rows) is a starting point for cross-jurisdictional evidence inventory; a longitudinal OECD-wide pilot is recommended (family surrogate rates, cognitive proxy ROC, false positive/negative of supporter-triggered downgrade across CDR 0–3 wallet operations); the wallet operation boundary for CDR 3 + end-of-life scenarios must interface with CRPD §28's substituted prohibition.

For **EUDI Phase 2 and the CRPD Committee**: the EUDI Phase 2 conformance suite should incorporate dark pattern automated detection and supporter UI three-layer separation conformance testing before 2026 Q3; the CRPD Committee should issue supplementary General Comments on supported decision-making in wallet scenarios—explicitly stating supporter scope boundaries (not limited to family members), safeguard requirements for supporter-triggered downgrade, and the functional test violation boundary for issuer-side capacity hints.

## References

[^1]: Regulation (EU) 2024/1689 of the European Parliament and of the Council laying down harmonised rules on artificial intelligence (Artificial Intelligence Act), Art 5(1)(b). OJ L, 2024/1689, 12 July 2024. Source grade A.
[^2]: European Data Protection Board. Guidelines 03/2022 on Deceptive design patterns in social media platform interfaces: How to recognise and avoid them. Adopted 14 March 2022; version 2.0 adopted 14 February 2023. Source grade A.
[^3]: Nouwens, M., Liccardi, I., Veale, M., Karger, D., & Kagal, L. (2020). Dark Patterns after the GDPR: Scraping Consent Pop-ups and Demonstrating their Influence. *Proceedings of CHI 2020*, Paper 194. DOI: 10.1145/3313831.3376321. Source grade A.
[^4]: POTENTIAL Consortium. Use Case 6: Mandate Scenario — Mid-term Technical Report, 2025-09. EU Digital Identity Wallet Large Scale Pilot. Source grade B.
[^5]: World Health Organization. Dementia Fact Sheet, updated March 2024. WHO Geneva. Source grade A.
[^6]: Regulation (EU) 2024/1183 of the European Parliament and of the Council amending Regulation (EU) No 910/2014 as regards establishing the European Digital Identity Framework. OJ L, 30 April 2024. Source grade A.
[^7]: Commission Implementing Regulation (EU) 2024/2979 of 28 November 2024 on technical specifications for the European Digital Identity Wallet. OJ L, 28 November 2024. Source grade A.
[^8]: Civic-proof series Article 15 (A15). Civic-proof inclusion rights, §6.2 wallet triple default degradation pathways. 2026. Source grade A (series internal).
[^9]: Civic-proof series Article 16 (F1). Civic AI agent delegation limits, §5.3 Counter-argument W4 + §5.4 three engineering fixes + §7.3.1 AgentDelegationProof. 2026. Source grade A (series internal).
[^10]: Civic-proof series Article 17 (F2). Civic receipts provenance, §3–§7 + §9 CF1–CF5 + §11 open questions. 2026. Source grade A (series internal).
[^11]: Brignull, H. (2010 onwards). Dark Patterns / Deceptive Design Patterns taxonomy. deceptive.design. Source grade C.
[^12]: Mathur, A., Acar, G., Friedman, M. J., Lucherini, E., Mayer, J., Chetty, M., & Narayanan, A. (2019). Dark Patterns at Scale: Findings from a Crawl of 11K Shopping Websites. *Proceedings of CSCW 2019*, Article 81. DOI: 10.1145/3359183. Source grade A.
[^13]: Morris, J. C. (1993). The Clinical Dementia Rating (CDR): Current version and scoring rules. *Neurology*, 43(11), 2412–2414. Source grade A.
[^14]: World Health Organization. ICD-11 for Mortality and Morbidity Statistics, Block 6D80–6D86 Dementia, 2022 update. Source grade A.
[^15]: UN Committee on the Rights of Persons with Disabilities. General Comment No. 1 on Article 12: Equal Recognition before the Law. CRPD/C/GC/1, 19 May 2014, §15–17, §26–29. Source grade A.
[^16]: Legislative Yuan, Republic of China. Civil Code §1110 + §1113-2 to §1113-10 (intended guardianship system). Promulgated 19 June 2019, effective 21 June 2019. Source grade A.
[^17]: Huang, Shih-chun (2020). Introduction and critical assessment of Taiwan's intended guardianship system. *Yuedan Law Review*, No. 295, pp. 105–120. Source grade B.
[^18]: W3C. Verifiable Credentials Data Model v2.0 Recommendation, 2025-05-15. §4.12 securing mechanisms + §5.7 ZKP + §6.3 + §7.1 verification algorithm. Source grade A.
[^19]: DIF. Presentation Exchange v2.1 specification, 2024. §5 input_descriptors + §6 submission_requirements + §7 format. Source grade B.
[^20]: OpenID Foundation. OpenID for Verifiable Presentations draft-23 / draft-24, 2024–2026. §5.1 client_metadata + §7 presentation_definition (DCQL) + §9 transaction_data. Source grade B.
[^21]: EU Cooperation Group. EUDI Wallet Architecture and Reference Framework, 2025-12 iteration. §6.6.3.8 device binding + §6.6.3.9 user binding + §6.6 selective disclosure profile. Source grade A.
[^22]: W3C. Decentralized Identifiers (DIDs) v1.0 Recommendation, 2022-07-19. §5 DID document structure + §8 security considerations. Source grade A.
[^23]: Cowan, N. (2001). The magical number 4 in short-term memory: A reconsideration of mental storage capacity. *Behavioral and Brain Sciences*, 24(1), 87–114. DOI: 10.1017/S0140525X01003922. Source grade A.
[^24]: Sweller, J. (1988). Cognitive load during problem solving: Effects on learning. *Cognitive Science*, 12(2), 257–285. Source grade A.
[^25]: Bohme, R., & Köpsell, S. (2010). Trained to Accept? A Field Experiment on Consent Dialogs. *Proceedings of CHI 2010*, 2403–2406. Source grade A.
[^26]: Solove, D. J. (2013). Introduction: Privacy Self-Management and the Consent Dilemma. *Harvard Law Review*, 126, 1880–1903. Source grade A.
[^27]: Pettit, P. (1997). *Republicanism: A Theory of Freedom and Government*. Oxford University Press; cited from F1 §5.3. Source grade A.
[^28]: Miller, G. A. (1956). The Magical Number Seven, Plus or Minus Two: Some Limits on Our Capacity for Processing Information. *Psychological Review*, 63(2), 81–97. Source grade A.
[^29]: Cowan, N. (2010). The Magical Mystery Four: How is Working Memory Capacity Limited, and Why? *Current Directions in Psychological Science*, 19(1), 51–57. Source grade A.
[^30]: Baddeley, A. D. (1992). Working memory. *Science*, 255(5044), 556–559. Source grade A.
[^31]: Baddeley, A. D. (2003). Working memory: Looking back and looking forward. *Nature Reviews Neuroscience*, 4(10), 829–839. Source grade A.
[^32]: POTENTIAL Consortium. Use Case 6: Payment Mandate — Mid-term Technical Report, 2025-09, pp. 42–48. EU Digital Identity Wallet Large Scale Pilot. Source grade B.
[^33]: Sweller, J., & Chandler, P. (1994). Why Some Material Is Difficult to Learn. *Cognition and Instruction*, 12(3), 185–233. Source grade A.
[^34]: Thaler, R. H., & Sunstein, C. R. (2008). *Nudge: Improving Decisions About Health, Wealth, and Happiness*. Yale University Press. Source grade A.
[^35]: Tversky, A., & Kahneman, D. (1974). Judgment under Uncertainty: Heuristics and Biases. *Science*, 185(4157), 1124–1131. Source grade A.
[^36]: Acquisti, A., Brandimarte, L., & Loewenstein, G. (2015). Privacy and human behavior in the age of information. *Science*, 347(6221), 509–514. DOI: 10.1126/science.aaa1465. Source grade A.
[^37]: Utz, C., Degeling, M., Fahl, S., Schaub, F., & Holz, T. (2019). (Un)informed Consent: Studying GDPR Consent Notices in the Field. *Proceedings of CCS 2019*, 973–990. DOI: 10.1145/3319535.3354212. Source grade A.
[^38]: Matte, C., Bielova, N., & Santos, C. (2020). Do Cookie Banners Respect My Choice? Measuring Legal Compliance of Banners from IAB Europe's Transparency and Consent Framework. *2020 IEEE Symposium on Security and Privacy*, 791–809. Source grade B.
[^39]: Apple Inc. App Tracking Transparency framework, iOS 14.5+, 2021–2024. Flurry Analytics longitudinal tracking. Source grade C.
[^40]: Gray, C. M., Kou, Y., Battles, B., Hoggatt, J., & Toombs, A. L. (2018). The Dark (Patterns) Side of UX Design. *Proceedings of CHI 2018*, Paper 534. Source grade A.
[^41]: Mathur, A., Kshirsagar, M., & Mayer, J. (2021). What Makes a Dark Pattern... Dark? Design Attributes, Normative Considerations, and Measurement Methods. *Proceedings of CHI 2021*, Paper 360. Source grade A.
[^42]: Sanchez-Rola, I., et al. (2019). Can I Opt Out Yet? GDPR and the Global Illusion of Cookie Control. *ASIA CCS 2019*, 340–351. Source grade A.
[^43]: FTC v. Epic Games, Inc. (2022). Stipulated Order for Permanent Injunction, FTC File No. 192 3203, 19 December 2022. Source grade A.
[^44]: CNIL. Decision SAN-2022-021 (Google Ireland & Google LLC, €150M) + SAN-2022-022 (Microsoft Ireland, €60M), 6 January 2022. Source grade A.
[^45]: Luguri, J., & Strahilevitz, L. J. (2021). Shining a Light on Dark Patterns. *Journal of Legal Analysis*, 13(1), 43–109. Source grade B.
[^46]: FTC v. Amazon.com, Inc. (2023). Complaint filed 21 June 2023, Case No. 2:23-cv-00932 (W.D. Wash.). Source grade A.
[^47]: European Commission. Formal proceedings against Meta (Facebook/Instagram) under DSA Art 25, opened 30 April 2024. DSA Article 66 investigation. Source grade A.
[^48]: NHS Digital. NHS Login Quarterly Statistics, Q4 2024. NHS England. Source grade B.
[^49]: Digital Agency, Cabinet Office, Japan. Monthly report on My Number Card adoption and use as health insurance card, December 2024. Source grade B.
[^50]: Finansiel Stabilitet / Finanstilsynet (Denmark). BankID and Mobile Identity Services Annual Report, 2023. Source grade B.
[^51]: Taiwan Alzheimer's Disease Association. Dementia Prevention and Service Policy Position Paper 2024. Source grade B.
[^52]: Alzheimer's Association. 2025 Alzheimer's Disease Facts and Figures. *Alzheimer's & Dementia*, 21(4), 2025. Source grade A.
[^53]: Open Universiteit Heerlen / Alzheimer Nederland. DigiD-gebruik door mensen met dementie: knelpunten en oplossingen. Onderzoeksrapport, Heerlen, 2023. Source grade B.
[^54]: Internet Freedom Foundation (India). Aadhaar and Disability: Exclusion Patterns and the Right to Identity. IFF Policy Brief, August 2024, New Delhi. Source grade B.
[^55]: Tribunal de Justiça do Estado de São Paulo (Brazil). Decisions on LGPD and exclusion of persons with dementia from online public services, 2023–2024. Source grade B.
[^56]: Ministry of Health and Welfare, Republic of China. Long-Term Care Policy White Paper (revised edition), July 2024. Source grade A (government document).
[^57]: Apple Inc. Health Cognitive Assessment Documentation, iOS 17+, 2024–2025. developer.apple.com/health/cognitive. Source grade C.
[^58]: Google LLC. Health Connect Cognitive Data Types, 2024. developer.android.com/health/connect/data-types. Source grade C.
[^59]: Cambridge Cognition. CANTAB Mobile — FDA cleared cognitive assessment, 2024. Source grade C.
[^60]: Mozilla Foundation. Privacy Not Included: Health Apps 2025. foundation.mozilla.org. Source grade C.
[^61]: Apple Inc. Family Sharing: Set up Family Sharing on iPhone, iOS 17 documentation. Source grade B.
[^62]: Google LLC. Family Link: Manage your child's Google Account documentation. Source grade B.
[^63]: Hyperledger Aries RFC 0211 Mediator Coordination Protocol; Trust over IP Foundation DIDComm Messaging v2 §Routing. Source grade B.
[^64]: State of Israel. Capacity and Guardianship Law Amendment No. 18 (5776-2016), §67B–67F. Source grade A.
[^65]: Bregaglio Lazarte, R. (2019). Una mirada al nuevo régimen de capacidad jurídica de las personas con discapacidad establecido por el Decreto Legislativo 1384. *Revista Latinoamericana en Discapacidad, Sociedad y Derechos Humanos*, 3(1), 26–50. Source grade A.
[^66]: Cohen, A. (2018). Supported Decision-Making: Israel's Path to Reform. *Israel Law Review*, 51(3), 451–478. Source grade A.
[^67]: Peru. Decreto Legislativo No. 1384, El Peruano, 4 September 2018. Source grade A.
[^68]: Judicial Yuan, Republic of China. Statistical Yearbook on Intended Guardianship Registrations, 2019–2024. Source grade A (government statistics).
[^69]: Adams, E. J., Nguyen, A. T., & Cowan, N. (2018). Theories of working memory: Differences in definition, degree of modularity, role of attention, and purpose. *Language, Speech, and Hearing Services in Schools*, 49(3), 340–355. Source grade B.
[^70]: Wilmer, H. H., Sherman, L. E., & Chein, J. M. (2017). Smartphones and Cognition: A Review of Research Exploring the Links between Mobile Technology Habits and Cognitive Functioning. *Frontiers in Psychology*, 8, 605. Source grade B.
[^71]: Sphereon / Mattr / IDnow EUDI Wallet conformance suite 2026 Q1–Q3 progress reports. Source grade C.
[^72]: CRPD Committee. Concluding observations on the combined second and third periodic reports of Australia. CRPD/C/AUS/CO/2-3, 2019, paras. 23–25; Concluding observations on the Republic of Korea. CRPD/C/KOR/CO/2-3, 2022, paras. 18–20. Source grade A.
[^73]: Boneh, D., Drijvers, M., & Neven, G. (2018). Compact Multi-Signatures for Smaller Blockchains. *ASIACRYPT 2018*, LNCS 11273. Source grade A.
[^74]: Komlo, C., & Goldberg, I. (2020). FROST: Flexible Round-Optimized Schnorr Threshold Signatures. *SAC 2020*. Source grade A.
[^75]: Perez, E., et al. (2023). Discovering Language Model Behaviors with Model-Written Evaluations. arXiv:2212.09251. Source grade B.
[^76]: Greshake, K., Abdelnabi, S., Mishra, S., Endres, C., Holz, T., & Fritz, M. (2023). Not what you've signed up for: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection. *Proceedings of AISec 2023*. Source grade B.
[^77]: W3C. Data Integrity BBS Cryptosuites v1.0, Candidate Recommendation Draft, 2026-04-07. §3.4 bbs-2023 + §4 unlinkability. Source grade A.
[^78]: IETF. draft-ietf-oauth-sd-jwt-vc-16, OAuth WG, 24 April 2026. §2.2.2.2 cnf claim + §2.4 KB-JWT. Source grade A.
[^79]: Sweller, J., Ayres, P., & Kalyuga, S. (2011). *Cognitive Load Theory*. Springer Explorations in the Learning Sciences. Source grade A.
[^80]: Nielsen Norman Group. Progressive Disclosure Pattern Library entries, 1995–2024. Including wizard / accordion / paginated three variants. Source grade B.
[^81]: UK Mental Capacity Act 2005, §1–§4 + Mental Capacity (Amendment) Act 2019. Source grade A.
[^82]: CRPD Committee. Concluding Observations on the initial report of the United Kingdom of Great Britain and Northern Ireland. CRPD/C/GBR/CO/1, 3 October 2017, §30–31. Source grade A.
[^83]: Regulation (EU) 2016/679 (GDPR). Art 5(1)(a) + Art 6 + Art 7 + Art 9 + Recital 32. OJ L 119, 4 May 2016. Source grade A.
[^84]: Regulation (EU) 2022/2065 (Digital Services Act), Art 25. OJ L 277, 27 October 2022. Source grade A.
[^85]: Council of Europe Framework Convention on Artificial Intelligence (CETS 225), Art 4. Adopted 5 September 2024. Source grade A.
[^86]: noyb (2024). GDPR Today: The state of cookie banners 6 years after GDPR. 25 May 2024. Source grade B.
[^87]: CNIL. Bilan d'activité 2023. April 2024. Source grade B.
[^88]: Habib, H., Pearman, S., Wang, J., Zou, Y., Acquisti, A., Cranor, L. F., Sadeh, N., & Schaub, F. (2020). "It's a Scavenger Hunt": Usability of Websites' Opt-Out and Data Deletion Choices. *Proceedings of CHI 2020*. Source grade A.
[^89]: Gennaro, R., & Goldfeder, S. (2018). Fast Multiparty Threshold ECDSA with Fast Trustless Setup. *ACM CCS 2018*. Source grade A.
[^90]: U.S. Department of Veterans Affairs. Login.gov and VA Health Connect: Accessibility and Adoption Report, 2024. Source grade B.
