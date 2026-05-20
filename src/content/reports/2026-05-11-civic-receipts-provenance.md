---
title: "Civic-Action Receipts and the Evidentiary Chain: Auditable Engineering Primitives for the Conditionally Delegable Zone"
description: "The seventeenth article in the civic-proof series (F2). Building on Article 16 (F1) §5.4 DeliberationRecord schema and §7.3.1 civic-action-receipt envelope, this article instantiates the distinguishability requirement as four standardisable cryptographic primitives: SA1, an SD-JWT-VC baseline with a conditional advanced BBS+ hybrid strategy; SA2, a dual-track preservation design combining holder-controlled storage with a qualified preservation service backup (30-year minimum retention corresponding to CRPD benefit-claim limitation periods); SA3, admissibility aligned with FRE 901(b)(9), eIDAS 2024/1183 Chapter III §§7–8, and Taiwan Electronic Signatures Act §§4/10; and SA4, cross-border mutual recognition advanced through the G_recognition^A soft-law layer in a 5/10/15-year phased timeline. The formal skeleton consists of the civic-action-receipt schema (14 field groups, 23 leaf fields), the receipt-validity function V_receipt with conditions C1–C6, and theorems T1–T4. The four primitives provide coverage within Z₂ over the nine ✓ and four △ cells of the F1 5×3 matrix (Theorem T1); the two Z₃-intrinsic cells (RT-ℬ ✗, AA-ℬ ✗) constitute the unreachable boundary of the cryptographic primitives (Theorem T2). Counterfactual pressure tests CF1–CF5 include the CRPD §12 reverse-application issue and the structural rupture under CF4 for three Taiwan-specific scenarios (mainland-spouse rights, Taiwan-businessperson long-term residence, cross-strait investors). Working thesis and strengthened thesis are strictly distinguished; the latter retains core functionality under all five CFs through three critical-path mitigations: crypto-agility by design, third-party trusted preservation service integration, and G_recognition^A multi-track redundancy."
pubDate: 2026-05-11
tags: ["civic-proof", "civic-receipts", "verifiable-credentials", "selective-disclosure", "SD-JWT-VC", "BBS-cryptosuite", "ZK-SNARK", "EUDI-Wallet", "long-term-preservation", "qualified-preservation-service", "eIDAS-2024-1183", "FRE-902-14", "FRE-901-b-9", "Mata-v-Avianca", "Apostille", "Hague-PIL", "CETS-225", "OECD-AI-Principles", "APEC-CBPR", "CRPD-Article-12", "supported-decision-making", "threshold-signatures", "PQC-migration", "crypto-agility", "Estonia-X-Road", "BankID", "Toeslagenaffaire", "TW-DIW", "cross-strait-recognition"]
category: "Digital Identity and Democratic Theory"
aiModel: "Claude Opus 4.7"
aiPrompt: "civic-proof series Article 17 F2, building on Article 16 §5.4 DeliberationRecord schema and §7.3.1 civic-action-receipt envelope and §10 preview. Should cross-border selective disclosure adopt SD-JWT-VC, BBS+, or a hybrid strategy? How should long-term preservation responsibility be dual-tracked between holder-controlled and third-party notary? How is the 30-year retention floor (corresponding to CRPD benefit-claim limitation periods) established? How should court admissibility align with US FRE 902(14), eIDAS 2024/1183 Chapter III §§7–8, and Taiwan Electronic Signatures Act §§4/10? How should cross-border recognition through the G_recognition^A soft-law layer (OECD AI Principles supplementary guidance + CETS 225 supplementary protocol + Hague PIL e-Apostille extension) be phased over 5-10-15 years? What are the coverage boundaries of the four primitives within the conditionally delegable zone Z₂ and the Z₃-intrinsic unreachable structure?"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-05-11-civic-receipts-provenance"
aiGeneratedDate: 2026-05-11
humanReviewed: false
lang: "en"
slug: "2026-05-11-civic-receipts-provenance"
---

## § 1. Introduction: Three Unfinished Problems Left by Article 16 (F1)

By Article 16 (hereafter F1), the civic-proof series had established two mutually dependent argumentative axes. The first concerns the near-indistinguishability, at the behavioural layer, of supported decision-making and substituted decision-making once an LLM-agent intervenes (F1 §5.3 W4); the article argued that this indistinguishability must be recovered by engineering corrections at the cryptographic layer — namely audit-by-design, `chooser_signature`, and `revocation_endpoint`. The second concerns the temporal uncertainty left by FTLA-Agent four-tier governance at the G_recognition^A soft-law layer (F1 §7.8): cross-border mutual recognition cannot be achieved through a single treaty. F1 §10 accordingly previewed that the next article in the series (F2) would address three problems — which cryptographic family should cross-border selective disclosure adopt, how should long-term preservation responsibility be allocated, and how should court admissibility be aligned with existing electronic-evidence rules. The present article is the main text of F2.

F1 §5.4 supplied a DeliberationRecord schema of eleven field groups, and §7.3.1 supplied the `AgentDelegationProof2026` and `AgentDelegationCapability` envelope — both normative drafts. They identify which engineering fields are needed for supported/substituted distinguishability, but do not argue how those fields are to be instantiated across four layers (cryptosuite selection, long-term preservation, court admissibility, cross-border recognition), or what dependency chain they form with one another. The work of the present article is precisely this instantiation.

The core proposition of this article (working thesis) takes the following form: civic receipts are the cryptographic bearer of supported/substituted distinguishability within the conditionally delegable zone Z₂; instantiation requires four primitives — (1) a baseline SD-JWT-VC combined with a conditional advanced BBS+ Cryptosuite, a mixed strategy in which verifier policy inversely constrains the choices of issuer and holder; (2) a dual-track preservation design pairing holder-controlled primary storage with encrypted backup at a third-party qualified preservation service, with a retention floor of 30 years (an "analytic suggestion" rather than a "normative hard constraint"); (3) court admissibility aligned with US FRE 901(b)(9), eIDAS Regulation 2024/1183 Chapter III §§7–8 (the successor to 910/2014 Arts 25 and 35), and Taiwan Electronic Signatures Act §§4/10, with cross-border recognition via Hague e-APP; and (4) cross-border mutual recognition advanced through the G_recognition^A soft-law layer in a 5/10/15-year phased timeline (OECD AI Principles supplementary guidance, CETS 225 supplementary protocol, Hague PIL e-APP digital identity extension). The four primitives form a linearly closed dependency chain for verification: SA1 → SA2 → SA3 → SA4, while at the system-design layer there exists an SA4 → SA1 feedback loop.

The organisation of this article is as follows.

Section 2 provides the conceptual foundations and connects F1, incorporating five standardisation progress revisions — W3C VCDM v2.0, IETF SD-JWT-VC, W3C BBS CRD, EUDI ARF rolling iteration, and eIDAS article renumbering — and establishes the Z₂/Z₃ boundary and the ESI/ediscovery distinction.

Section 3 provides the formal skeleton: the civic-action-receipt 14-field-group data model, the mapping of the four primitives to cells in the F1 5×3 matrix, and the complete formal definition of the receipt-validity function V_receipt, including the six conditions C1–C6 and Theorems T1–T4. It also identifies the critical path and the SA4 → SA1 feedback loop.

Sections 4 through 7 develop the four primitives in turn. Section 4 addresses the comparative engineering analysis of SD-JWT-VC, BBS+, and ZK-SNARK, the verifier-policy three-decision-point framework (issuance/presentation/verification), the engineering reality of hardware key custody, and the tension between PQC migration and 30-year preservation. Section 5 addresses the three-window derivation of the 30-year floor (CRPD benefit-claim limitation periods, guardianship-declaration dispute review windows, and Toeslagenaffaire-level retroactive review periods), the failure modes of holder-controlled storage across three scenarios, and a comparison of three dual-track design options A, B, and C. Section 6 addresses admissibility alignment across three jurisdictions (FRE 901(b)(9), eIDAS Chapter III §§7–8, and Electronic Signatures Act §§4–10), ESI analogy limitations, the *Mata v. Avianca* negative precedent, *Daubert* five-factor analysis applied to BBS+ and ZK-SNARK, three hearsay-response paths, and the Apostille public/private document distinction gap. Section 7 addresses the conditional estimates and phasing of the 5/10/15-year timeline, historical soft-law transformation trajectories, and non-OECD parallel tracks.

Section 8 conducts process tracing through six cases.

Section 9 is the counterfactual pressure test, comprising five counterfactuals CF1–CF5, a likelihood × impact matrix, the CRPD §12 reverse-application issue, the particular impact of CF4 on three Taiwan-specific scenarios (mainland spouses, Taiwan businesspersons, and cross-strait investors), a working/strengthened thesis survival assessment, and three critical-path mitigations.

Section 10 connects forward-links to the series and previews F3.

Section 11 discloses the honesty boundary, lists 41 open questions (O1–O41), and provides a high-risk-claim verification checklist for the fact-checking stage.

Section 12 sets out the conditional academic conclusions — four-primitive instantiation, phased cross-border governance, and the strict distinction between working and strengthened theses — including a response position directed at the CRPD Committee and separate recommendations for three target audiences (engineering community, policy researchers, and CRPD scholars).

---

## § 2. Conceptual Foundations and Forward-Link Connections from Article 16

### § 2.1 The Civic-Action Receipt Is Not a VC Presentation

The W3C Verifiable Credentials Data Model v2.0 was elevated to Recommendation status on 15 May 2025.<sup>1</sup> Its §4.12 addresses securing mechanisms (covering JOSE, COSE, SD-JWT, and Data Integrity), §5.7 addresses zero-knowledge proofs, and §7.1 provides the verification algorithm. A VC Presentation (VP) is a message object signed by the holder's private key at the moment of presentation, by which the holder selectively discloses attributes to a verifier. The civic-action receipt occupies a formally distinct position: a VP is a disclosure object directed from the subject to the verifier, whereas a receipt is a commitment object directed from the (subject, verifier) pair towards an audit trail, produced on the verifier side, with one copy retained by the holder and one by the audit trail. This article adopts this distinction (SA0 §1 revision); the structure is analogous to the verifier-side dual structure of the ISO/IEC 18013-5:2021 §9.1.2.4 Mobile Security Object, but carries richer information — including a deliberation hash, agent delegation envelope, revocation pointer, and jurisdictional profile.

Conflating VP and receipt entails two argumentative costs. First, W3C VCDM v2.0 §5.7 describes ZKP as "derived from the original verifiable credentials but not containing the original data"; treating a receipt as a VP would render unworkable the requirement for "content_hash alignment that can be unlocked by court order in the audit trail", which directly violates the procedural requirement of CRPD General Comment No. 1 §29 for "regular review by a competent, independent and impartial authority".<sup>2</sup> Second, the Advisory Committee Notes to US Federal Rules of Evidence Rule 902(14) cite "hash value comparison" as the canonical example of a "process of digital identification";<sup>3</sup> a VP does not contain a hash-alignment field, and a receipt must contain `content_hash` to satisfy the engineering conditions of Rule 902(14).

### § 2.2 Four Revisions to the Standardisation Timeline

The writing date of this article is 2026-05-11. Four divergences from the known-sources assumed at the intake stage must be addressed prior to the main analysis.

First, W3C VCDM v2.0 has been elevated to Recommendation; citation numbers are updated from the Working Draft designations §5.8/§6.3.1 to §4.12/§5.7/§7.1.<sup>1</sup> An explicit distinction must be drawn between "IETF SD-JWT-VC" and the "SD-JWT secured credentials profile within W3C VC v2.0": IETF SD-JWT-VC (OAuth WG draft-16) is a credential format defining the token structure, KB-JWT, and selective disclosure mechanism for the issuer/holder/verifier triad; W3C VCDM v2.0 §6.3.3 JWT secured credentials is a securing mechanism providing format alignment for carrying JWT secured credentials within the W3C VCDM. The two are integrated through §6.3.3 but maintained by independent standards bodies. All subsequent SD-JWT-VC discussion in this article takes the IETF track as primary and W3C §6.3.3 as the carrier interface. Second, IETF SD-JWT-VC has advanced to draft-16 (2026-04-24), with the `cnf` claim (§2.2.2.2) and KB-JWT (§2.4) stable and selective disclosure inheriting RFC 9901.<sup>4,5</sup> Third, W3C Data Integrity BBS Cryptosuites v1.0 entered Candidate Recommendation Draft (CRD) status on 2026-04-07,<sup>6</sup> while IRTF CFRG `draft-irtf-cfrg-bbs-signatures-07` passed Last Call in August 2025;<sup>7</sup> the W3C VC WG 2025-10 charter renewal uses the language "target Candidate Recommendation Q3 2026, Recommendation best-effort Q4 2026 / Q1 2027".<sup>8</sup> BBS Cryptosuite is therefore still a CRD rather than a Recommendation at the time of this article's publication, and the tiered treatment of "BBS+ as the advanced option" adopts a conditionally established formulation. Fourth, the EUDI Wallet ARF has adopted a Cooperation Group rolling iteration format from 2025-Q4 onwards (reference: 2025-12-02 meeting);<sup>9</sup> citations must use "EUDI ARF 2025-12 iteration" rather than the static version designation v1.5.

### § 2.3 eIDAS Article Renumbering

Regulation (EU) 2024/1183 amends eIDAS (formerly Regulation (EU) 910/2014), renumbering provisions such as the former Art 34 (qualified preservation service) and Art 35 (evidentiary effect of qualified electronic signatures) as Chapter III Section 7 (preservation) and Section 8 (signature evidentiary effect).<sup>10</sup> All eIDAS citations in this article adopt the new numbering, with the old corresponding numbers provided at first occurrence.

### § 2.4 Forward-Link Connections with F1, A15, A14, and A8

F1 §5.4 established audit-by-design, `chooser_signature`, and `revocation_endpoint` as three engineering corrections; F1 §7.3.1 provided the `AgentDelegationProof2026` + `AgentDelegationCapability` dual-signature structure; and F1 §10 previewed that F2 would address cross-border selective disclosure, long-term preservation, and court admissibility.<sup>11</sup> The present article continues from that point without re-arguing the normative necessity of the supported/substituted distinction (already borne by F1 §5.4 and CRPD GC1 §§26–29).

Article 15 §6.2 established the "three wallet presuppositions" (individual ownership + individual identification + individual private key) as a degradation path — the three presuppositions cannot simultaneously hold without causing supported decision-making to degrade into substituted decision-making.<sup>12</sup> The §3.1 schema design in this article directly inherits that argument: `preservation_layer` loosens "individual ownership"; `coexistentSubjects` via DID extension loosens "individual identification"; and the dual-signature structure of `chooser_signature` and `agent_delegation_capability_hash` loosens "individual private key". Article 14 §§Q10a/Q10b separated authority transfer and accountability allocation into two attribution problems — one at the cryptographic layer and one at the cross-border layer;<sup>13</sup> §3.2 of this article maps Q10a to the SA1 + SA3 critical path and Q10b to SA3 + SA4. Article 8 established the FTLA four-tier governance framework;<sup>14</sup> §7 of this article disaggregates G_recognition^A into three phased timelines.

### § 2.5 Holder-Controlled Is Not Self-Sovereign

Continuing from Article 15 §6.2, this article adopts the following terminological convention: *self-sovereign* is an identity-theory position (rejecting any third-party intermediation in identity assertion); *holder-controlled* is a custody design (the holder takes the primary role within their capacity, while permitting fallback). The former has been falsified by Article 15 §6.2's three-presupposition argument. The "dual-track preservation" design in §5 of this article adopts a spectrum approach — holder-controlled as primary, qualified preservation service (QPSP) as backup — and does not slide into self-sovereign maximalism.

### § 2.6 The Boundary Between the Conditionally Delegable Zone Z₂ and the Permanently Non-Delegable Zone Z₃

F1 §3.3 established a tripartite division into Z₁ (permanently delegable), Z₂ (conditionally delegable), and Z₃ (permanently non-delegable). The engineering scope of civic-action-receipt applies only within Z₂. The two cells that exceed Z₂ and fall within Z₃ — RT-ℬ ✗ (responsibility-bearing requires first-personal mens rea) and AA-ℬ ✗ (contestation bearer requires Pettit active-stance) — constitute the unreachable boundary of Theorem T2. This article makes explicit: any argument claiming that civic-action-receipts can "solve the fundamental accountability problem of AI agents" violates this boundary. A concrete consequence: admissibility attempts in the legal forum for agent-mediated receipts falling within RT-ℬ ✗ or AA-ℬ ✗ will encounter *Mata v. Avianca*-style heightened scrutiny; this is addressed in §6.4.

### § 2.7 The ESI/Ediscovery Distinction

Electronically Stored Information (ESI) and electronic discovery (ediscovery) must be strictly distinguished in this article. ESI is an object-level concept designating evidence existing in electronic form, with questions of admissibility and authenticity governed by FRE Rules 901, 902, and 803, and by Taiwan Code of Civil Procedure Arts 363 and 363-1. Ediscovery is a process-level concept designating the collection, preservation, and disclosure of electronic evidence during pre-trial and trial proceedings, governed by FRCP 26(f), 34(b), and the Sedona Principles. Civic-action receipts are primarily aligned with ESI as an object layer rather than with the ediscovery process layer: receipts are jointly owned by holder and verifier at the moment of generation, so the disputes between producing party and requesting party over "whether to disclose" and "scope of disclosure" that arise in traditional ediscovery do not apply. The limitation of the ESI analogy table in §6.3 is the engineering expression of this distinction — Sedona Principle 6 (producing party most familiar with their own data) is structurally homologous to the holder's control over the scope of receipt-set disclosure, but Sedona Principle 11 (no requirement for full metadata disclosure) leaves the disclosure boundary for detailed `chooser_signature` traces in receipts to be addressed separately.

---

## § 3. Formal Skeleton: The civic-action-receipt Schema (14 Field Groups / 23 Leaf Fields), Primitive-to-Cell Mapping, and V_receipt Function

### § 3.1 The civic-action-receipt Data Model (14 Field Groups, Approximately 23 Leaf Fields after Nested Expansion)

Merging the F1 §5.4 DeliberationRecord (eleven field groups) with the §7.3.1 enabling envelope (`AgentDelegationProof2026` and `AgentDelegationCapability`) yields the schema of this article. To avoid ambiguity in field counts, this article adopts a two-level counting convention: "field group" refers to top-level named units in the schema, and "leaf field" refers to terminal entries expanded to primitive types (UUID, ISO8601, Enum, Hash, etc.). After merging, the schema contains 14 field groups; nested expansion yields approximately 23 leaf fields. Subsequent references to "14" in §3.5 and §10.1 refer to the field-group level; the leaf count of approximately 23 is visible in the schema block. Fields labelled "DR" are inherited from DeliberationRecord, "ENV" from the §7.3.1 envelope, and "F2" are newly added by this article.

```
civic-action-receipt {
  // Core identity & temporal block
  receipt_id:                     UUID                          // F2
  decision_id:                    UUID                          // DR
  timestamp_proposed:             ISO8601                       // DR
  timestamp_decided:              ISO8601                       // DR
  timestamp_presented:            ISO8601                       // F2

  // Party identifiers
  subject_did:                    DID                           // DR
  supporter_did:                  DID | null                    // DR
  agent_did:                      DID | null                    // ENV
  verifier_did:                   DID                           // F2

  // Deliberation evidence
  options_presented_hash:         OptionHashTree                // DR (upgraded to Merkle root)
  option_chosen_hash:             OptionHash                    // DR
  comprehension_attestation_hash: HashOfVC | null               // DR

  // Cryptographic binding (SA1)
  chooser_signature:              Signature                     // DR (signed by subject private key)
  holder_binding_method:          Enum {sd-jwt-kbjwt, bbs-2023-proof, mdoc-deviceauth, jose-cose}
  cryptosuite_id:                 URI                           // F2
  agent_delegation_proof:         Proof | null                  // ENV
  agent_delegation_capability_hash: HashOfVC | null             // ENV

  // Preservation (SA2)
  preservation_layer:             Enum {holder-controlled, qualified-preservation-service, dual}
  preservation_endpoint:          URL | null                    // F2
  retention_floor:                Duration                      // F2 (recommended ≥ 30 years)
  timestamp_token:                RFC3161Token | null           // F2

  // Admissibility (SA3)
  content_hash:                   Hash                          // F2
  qualified_person_attestation:   VC | null                     // F2
  jurisdictional_profile:         Enum {us-fre-901b9, eu-eidas-art25-35, tw-esign-art4-10, other}

  // Recognition (SA4)
  recognition_chain:              List<RecognitionAnchor>       // F2
  cross_border_envelope:          Envelope | null               // F2

  // Revocation & lifecycle
  revocation_window:              Duration                      // DR
  revocation_endpoint:            URL                           // DR
  audit_release_policy:           Policy                        // F2
}
```

At the field-group level, 11 groups are inherited from DR/ENV and 9 are newly added (totalling 14 field groups, with fields shared across primitives attributed to their primary assignment); at the leaf-field level, approximately 23 entries result. The ratio at the field-group level of 1.22:1 is consistent with the engineering entry count after nested expansion. F2 is an engineering instantiation of F1, not a new framework. Four design principles are as follows.

First, `chooser_signature` remains the cryptographic keystone of the supported/substituted distinction, directly inheriting the F1 §5.4 normative specification. Second, `holder_binding_method` is expressed as an enum, preserving the possibility of four parallel paths — SD-JWT-VC (draft-16), BBS-2023 cryptosuite (CRD), ISO/IEC 18013-5 mdoc, and JOSE/COSE. Third, the two `agent_delegation_*` fields are null in scenarios where no agent intervenes — they constitute the cryptographic distinction basis for the lawful Z₂ representations of the RT-ℬ ✗ and AA-ℬ ✗ cells. Fourth, `audit_release_policy` is the policy bearer for the "hash-content separation" design, aligned with the EDPB Statement 1/2024 requirement for holder-controlled audits in the EUDI Wallet.<sup>15</sup>

### § 3.2 Mapping the Four Primitives to Cells in the F1 5×3 Matrix

The F1 §3.1 matrix uses Tomasev's five elements (AT, RT, AA, BS, TC) as the i-axis and the civic proof three-element conjunction (𝒩, ℱ, ℬ) as the j-axis, yielding 15 cells of which 9 are ✓, 4 are △, and 2 are ✗.<sup>11</sup> The F2 primitives SA1–SA4 are anchored to the following cells (★ = primary anchor, ☆ = secondary support):

| Cell | 𝒩 (normative claim bearer) | ℱ (formally auditable) | ℬ (philosophical basis) |
|---|---|---|---|
| AT authority transfer | SA1 ★ + SA4 ☆ | SA1 ★ | (F1 ✓) |
| RT responsibility transfer | SA3 ★ | SA2 ★ + SA3 ☆ | ✗ (insurmountable) |
| AA accountability allocation | SA4 ★ + SA3 ☆ | SA2 ★ + SA3 ★ | ✗ (insurmountable) |
| BS boundary setting | (F1 ✓) | SA1 ☆ + SA2 ☆ | (F1 △) |
| TC trust calibration | SA4 ☆ | SA1 ★ + SA3 ☆ | (F1 △) |

**Theorem T1 (Z₂ Coverage Lemma):** For all nine ✓ cells and four △ cells in the matrix, there exists a subset σ ⊆ {SA1, SA2, SA3, SA4} such that P_degrade (F1 §3.2 probability-of-degradation function) for that cell is suppressed below θ₂ ≈ 0.7. The F2 four primitives provide coverage of the Z₂ zone as defined in F1 §3.3.

**Theorem T2 (Z₃-intrinsic Unreachability Lemma):** For the two cells RT-ℬ ✗ and AA-ℬ ✗, no σ exists that suppresses P_degrade ≤ θ₂. RT-ℬ ✗ represents the ontological incapacity arising from "responsibility-bearing requires first-personal mens rea"; AA-ℬ ✗ represents the ontological incapacity arising from "contestation bearer requires Pettit's active-stance". Cryptographic primitives do not alter ontological structure. T2 constitutes the hard honesty-boundary condition for F2: any argument claiming that civic-action-receipts can "solve the fundamental accountability problem of AI agents" violates this lemma.

### § 3.3 Critical Path and Feedback Loop

The four primitives form a linearly closed dependency chain for verification:

```
SA1 ─[D1]─▶ SA2 ─[D2]─▶ SA3 ─[D3]─▶ SA4
(cryptosuite) (preservation) (admissibility) (recognition)
```

The formal condition for dependency D1 (SA1 → SA2): SA2 long-term preservation is meaningful (preservation remains verifiable to a verifier 30 years hence) if and only if the hash function and signature algorithm of the cryptosuite selected in SA1 have not been broken within the `retention_floor` period, or a qualified preservation service executes timestamp re-signing to extend trust:

```
∀ r : V_preservation(r) ⇒ Crypto_Robust(r.cryptosuite_id, r.retention_floor)
                          ∨ TimestampReseal(r.timestamp_token, r.retention_floor)
```

The formal condition for dependency D2 (SA2 → SA3): SA3 court admissibility requires that the receipt be "reproducible and verifiable" at the time of litigation. SA2 is a prerequisite for SA3: if the receipt has been tampered with or lost prior to the initiation of proceedings, FRE 902(14)'s "process of digital identification" cannot be satisfied:

```
∀ r : V_admissibility(r) ⇒ V_preservation(r) ∧ ContentHashMatch(r.content_hash, retrieved_content)
                            ∧ QualifiedPersonCertification(r.qualified_person_attestation)
```

The formal condition for dependency D3 (SA3 → SA4): SA4 cross-border mutual recognition requires that the receipt be admissible in source jurisdiction J₁, and that target jurisdiction J₂ recognise J₁'s admissibility through a recognition mechanism:

```
∀ r, J₁, J₂ : V_recognition(r, J₁, J₂) ⇒ V_admissibility(r) under J₁
                                        ∧ Recognize(J₂, J₁, r.jurisdictional_profile)
                                        ∧ ∃ ra ∈ r.recognition_chain : ra.target = J₂
```

The SA4 → SA1 feedback loop also exists: `jurisdictional_profile` inversely constrains the available set for `cryptosuite_id` (some jurisdictions accept only NIST-approved algorithms; BBS+ over BLS12-381 falls outside FIPS 186-5 scope). This article identifies this feedback loop in the main text as a "design-stage constraint" that does not alter the verification-stage ordering; its formal semantics (a lattice over `(cryptosuite, jurisdiction)` pairs) are deferred to §11 open question O1.

### § 3.4 Complete Formal Definition of the Receipt-Validity Function V_receipt

```
V_receipt : Receipt → Bool

V_receipt(r) ≜
  // C1 — cryptosuite robustness
  ( r.cryptosuite_id ∈ AcceptedSuites(τ) ∧
    SigVerify(r.chooser_signature, r.subject_did) = true ∧
    HolderBind(r.holder_binding_method, r.cryptosuite_id) = true
  ) ∧
  // C2 — agent-vs-holder distinguishability
  ( (r.agent_did = null) ∨
    ( r.agent_delegation_proof ≠ null ∧
      VC_Verify(r.agent_delegation_capability_hash, r.subject_did) = true
    )
  ) ∧
  // C3 — preservation
  ( r.preservation_layer ∈ {holder-controlled, qualified-preservation-service, dual} ∧
    (now − r.timestamp_decided) ≤ r.retention_floor ∧
    (r.preservation_layer ≠ holder-controlled → r.timestamp_token ≠ null)
  ) ∧
  // C4 — admissibility
  ( ContentHashMatch(r.content_hash, retrieved_content) ∧
    ( (r.jurisdictional_profile = us-fre-901b9 → r.qualified_person_attestation ≠ null)
      ∧ (r.jurisdictional_profile = eu-eidas-art25-35 → r.timestamp_token ≠ null)
      ∧ (r.jurisdictional_profile = tw-esign-art4-10 → r.chooser_signature satisfies Electronic Signatures Act §4)
    )
  ) ∧
  // C5 — recognition
  ( ∀ J₂ ∈ targetJurisdictions(r) :
      ∃ ra ∈ r.recognition_chain : ra.target = J₂ ∧ Anchor_Valid(ra)
  ) ∧
  // C6 — revocability
  ( r.revocation_window ≠ null ∧ r.revocation_endpoint is reachable ∧
    Reachable(r.audit_release_policy) under {subject, court_order}
  )
```

Here τ is the moment at which the receipt is being verified; `AcceptedSuites(τ)` is the set of cryptosuites that have not been broken and remain on the SDO recognised list at time τ. The evolution rules for `AcceptedSuites(τ)` — who maintains this set, under what procedure — pertain to SDO mechanism design at the G_industry^A layer and are not elaborated here.

**Theorem T3 (Critical Path Serialisation Theorem):**

```
V_receipt(r) ⇔ V_cryptosuite(r) ∧ V_preservation(r) ∧ V_admissibility(r) ∧ V_recognition(r)
            ⇔ Crypto_Robust(r) ∧ Pres_Intact(r) ∧ Admis_Cert(r) ∧ Recog_Anchor(r)
```

**Theorem T4 (Correspondence of V_receipt with F1 Three-Layer Distinguishability):** V_receipt(r) entails supported/substituted distinguishability, decomposable into three sub-clauses — ex_ante_deliberation(r), ex_post_reversibility(r), and decision_trace(r) — borne respectively by C1+C2, C6, and C3+C4+C5. This theorem "translates" the F1 §5.3 engineering distinguishability conditions into the sub-clause structure of the F2 receipt-validity function, constituting the core bridge between F2 and F1.

### § 3.5 Counter-Argument: Is the Schema's Expansion from 11 to 14 Field Groups (and ~23 Leaf Fields) Over-Inflated?

The counter-argument against the expansion from DeliberationRecord's 11 field groups to 14 (approximately 23 leaf fields) is addressed as follows. First, proportionality check: at the field-group level, 11 are inherited from F1 §§5.4/7.3.1 and 9 are newly added (with multi-primitive fields attributed to their primary assignment); at the leaf level, approximately 23 entries result, consistent with the 1.22:1 field-group ratio — F2 is an engineering instantiation of F1, not a new framework. Second, each new field corresponds to a specific sub-argument engineering requirement: `cryptosuite_id` corresponds to SA1 mixed-strategy three-point negotiation; `preservation_layer` and `retention_floor` correspond to SA2 dual-track design; `content_hash` and `qualified_person_attestation` correspond to SA3 FRE 901(b)(9) alignment; `jurisdictional_profile` corresponds to SA3 three-jurisdiction routing; `recognition_chain` and `cross_border_envelope` correspond to SA4 soft-law three-phase design; and `audit_release_policy` corresponds to GDPR Art 5(1)(b)(c) proportionality and EDPB Statement 1/2024.<sup>15</sup> Third, the schema uses enums rather than free text to constrain `holder_binding_method` and `jurisdictional_profile`, preserving semantic boundaries and preventing implementation drift. An additional engineering indicator that the schema is not over-inflated: it provides complete cross-format carrier coverage for the ISO/IEC 23220 series (mobile eID architecture), generating receipts under all four binding paths — SD-JWT-VC, BBS-2023, ISO 18013-5 mdoc, and JOSE/COSE — without requiring a separate schema version per path.

---

## § 4. SA1 — Cryptographic Selection: SD-JWT-VC Baseline, Conditional Advanced BBS+, and the Three-Decision-Point Verifier Policy

### § 4.1 Comparative Engineering Analysis of Three Cryptographic Families

As of 2026-Q1, the engineering landscape of selective disclosure on Verifiable Credentials divides into three families: the SD-JWT-VC family, the BBS+ Cryptosuite family, and the ZK-SNARK on VC family. The three differ substantially in standards maturity, signature and proof size, verification cost, unlinkability, quantum-safe migration paths, and hardware-backed key custody support.

SD-JWT-VC belongs to the IETF OAuth WG track; the underlying SD-JWT reached Proposed Standard as RFC 9901 in April 2025,<sup>5</sup> and SD-JWT-VC has advanced to draft-16 (2026-04-24).<sup>4</sup> EUDI Wallet ARF 2025-12 iteration §2.3.1 explicitly requires wallets to support SD-JWT-VC (MUST),<sup>9</sup> making it the baseline of baselines. Technical characteristics: the signature scheme uses JOSE signatures (ES256 / EdDSA / RS256), does not support unlinkability (the issuer signature is identical across presentations, allowing verifier correlation), but hardware key custody is comprehensively supported (iOS Secure Enclave, Android StrongBox, Windows TPM, HSM),<sup>16</sup> and the PQC migration path is direct (replacing the algorithm with ML-DSA / Falcon suffices).

BBS+ Cryptosuite belongs to the W3C Verifiable Credentials Working Group track. IRTF CFRG `draft-irtf-cfrg-bbs-signatures-07` passed Last Call in August 2025;<sup>7</sup> W3C `vc-di-bbs` entered Candidate Recommendation Draft on 2026-04-07.<sup>6</sup> The W3C VC WG 2025-10 charter renewal's language on the Recommendation timeline is "best-effort Q4 2026 / Q1 2027".<sup>8</sup> Technical characteristics: BBS+ over BLS12-381 (a pairing-friendly curve) natively supports multi-message selective disclosure and unlinkable proof generation; presentation proofs cannot be correlated across multiple presentations. However, hardware key isolation is not natively supported on Apple Secure Enclave, Android StrongBox, or Windows TPM (Secure Enclave supports only P-256); the BBS+ prover must run in application memory, making the hardware anchor for holder binding weaker.<sup>17</sup> BLS12-381 pairing is insecure against quantum computers, and no near-term PQC replacement path exists (lattice-based unlinkable signatures remain at the IACR ePrint research stage).<sup>18</sup>

ZK-SNARK on VC belongs primarily to vendor-implementation tracks. The W3C "VC Data Integrity ZKP Cryptosuites Explorer Note" (September 2024) explicitly identifies itself as not on the Recommendation track and as merely a design-space exploration.<sup>19</sup> Implementation examples include Polygon ID / Privado ID (using Iden3 protocol with Groth16 + Circom), Anon Aadhaar (RSA + Groth16), and World ID (using Semaphore).<sup>20</sup> Proof generation costs for complex predicates on mobile devices range from 5 to 300 seconds; verification costs range from 3 to 50 ms (depending on the proof system). ZK-SNARK in the civic-action-receipt context is positioned as an "advanced narrow profile for complex-predicate use cases" and does not replace SD-JWT-VC or BBS+ as a baseline.

### § 4.2 Mixed Strategy as a Verifier-Policy Inverse-Constraint Structure

Translating "mixed strategy" as a neutral marketing term misses the engineering structure. This article positions the mixed strategy as an engineering structure in which verifier policy inversely constrains the choices of issuer and holder, borne across three independent decision points.

(a) Issuance-time decision: the issuer selects a cryptosuite when issuing a credential; a single credential uses one family.

(b) Presentation-time decision: the holder selects from multiple credentials in the wallet to choose a presentation mode satisfying the verifier's policy.

(c) Verification-time decision: the verifier accepts or rejects specific cryptosuites and returns a fallback prompt to the holder.

In other words, "mixed strategy" does not mean "a single credential signed simultaneously by three families"; it means "the issuer, holder, and verifier each select cryptosuites at different points in time, with verifier policy inversely constraining the choices of issuer and holder across the entire receipt chain." The negotiation channel is the `client_metadata.vp_formats_supported` mechanism in OpenID for Verifiable Presentations (OpenID4VP) draft-23,<sup>21</sup> combined with `input_descriptors[].format` and `submission_requirements` in DIF Presentation Exchange v2.1.<sup>22</sup> Draft-24 is expected to be completed in 2026-Q2; this article uses draft-23 as the stable reference.

### § 4.3 Three-Family Comparison Table and Verifier-Policy Three Decision Points

| Dimension | SD-JWT-VC | BBS+ Cryptosuite | ZK-SNARK on VC |
|---|---|---|---|
| Standards maturity (2026-05) | RFC 9901 + draft-16 | W3C CRD (2026-04-07) | Explorer Note, no Rec track |
| Signature/proof size | 600–800 bytes | 500–1200 bytes | 200 B–4 KB |
| Verification cost (mobile) | ~1 ms | ~50–150 ms | ~3–50 ms |
| Proof generation cost | instantaneous | 100–500 ms | 5–300 seconds |
| Revocation support | Status List 2021 | Accumulator + SL | Sparse Merkle |
| Unlinkability | none | native | native (stronger) |
| Predicate proofs | attribute filtering | range / set | arbitrary circuit |
| Quantum-safe path | replace JOSE alg | no near-term path | STARK transition |
| iOS Secure Enclave | native | not supported | not supported |
| Android StrongBox | native | not supported | not supported |
| EUDI ARF 2025-12 status | MUST baseline | optional advanced | not listed |

### § 4.4 Normative Hard Constraint vs Conditionally Established Tiering

The designation of "BBS+ as the advanced option" adopts a normative, conditionally established tiering formulation (not a present accomplished fact). The condition is that the W3C BBS Cryptosuite reaches Recommendation status. This article adopts the following fallback formulation: if W3C does not publish a BBS Cryptosuite Recommendation before 2027-Q1, the baseline reverts to SD-JWT-VC only and the BBS+ tier is deferred to 2028. EU Wallet Consortium Phase 2 deployment statistics show that a dual-issuance strategy — in which the issuer simultaneously issues an SD-JWT-VC baseline credential and a BBS+ presentation-ready credential, switching progressively based on verifier support — has been trialled in Germany, the Netherlands, and Sweden.<sup>23</sup>

The CRPD GC1 §29 audit-trail obligation does not have a single path for fulfilment at the cryptographic layer; BBS+ unlinkability is one path, not the only one.<sup>2</sup> The "named-trigger / anonymous-reception two-stage distinction" established in F1 §5.4 implies that unlinkability is only needed conditionally at the reception end: in civic action, the trigger end is often named (for example, a person with a disability co-signing a civic petition through a supporter), while unlinkability arises at the reception end (when the same civic credential is repeatedly presented to multiple verifiers thereafter). For receipt scenarios that are already named (such as EUDI Wallet identity verification for civil servants), unlinkability is of secondary importance.

### § 4.5 Preview of Connections to SA2–SA4

The SA1 cryptosuite selection imposes engineering constraints on the three downstream primitives. First, the JOSE signatures in SD-JWT-VC can be re-verified over 30 years (provided the issuer's public key remains accessible), while BBS+ over BLS12-381 has additional requirements for 30-year key preservation (accumulator state must be continuously maintained); SA2 must accommodate these cryptosuite differences in its "holder-controlled plus third-party notary" dual-track design. Second, FRE 902(14) self-authentication for "digital signatures" presupposes NIST-approved algorithms: SD-JWT-VC's ES256/EdDSA are NIST-approved, while BBS+ over BLS12-381 falls outside FIPS 186-5 scope, making self-authentication under Rule 902(14) uncertain for BBS+ (no precedent exists).<sup>24</sup> SA3 therefore follows the heavier FRE 901(b)(9) "process or system description plus accuracy proof" path. Third, the three-tier division of labour in the mixed strategy corresponds to the three phases of G_recognition^A over 5/10/15 years — SD-JWT-VC for the five-year phase, BBS+ for the ten-year phase, and the complete stack including ZK-SNARK for the fifteen-year phase.

### § 4.6 The Engineering Reality of Hardware Key Custody

The absence of hardware key isolation for BBS+ on mobile wallets is a fundamental engineering constraint. Apple iOS Secure Enclave, as documented in public technical specifications through 2025-Q2, supports only P-256 (NIST secp256r1);<sup>16</sup> Google Android StrongBox, similarly documented through 2025-Q2, also primarily supports P-256;<sup>17</sup> and Windows TPM 2.0 lists NIST-certified ECC and RSA as its primary supported algorithms, with BLS12-381 not in scope for native support. BBS+ over BLS12-381 must run the prover in application memory — meaning the private key leaves hardware-protected memory during execution, making the hardware anchor for holder binding weaker than SD-JWT-VC's.

Three engineering mitigation paths exist. First, an ARM TrustZone-based BBS+ prover: moving the prover into execution within a Trusted Execution Environment (TEE); Bhattacharya et al. 2025 (USENIX Security) provide a preliminary implementation with a 3–5x performance penalty but functional viability.<sup>17</sup> Second, certain advanced HSMs (Thales Luna 7, Utimaco SecurityServer Se Gen2) offer BLS12-381 acceleration modules as optional features; this path is available to enterprise-side verifiers but not to holder-side mobile wallets. Third, MPC (Multi-Party Computation) to distribute the BBS+ secret key — holder and wallet provider jointly hold key shares and jointly produce signatures — conflicts with the holder-controlled default and is treated by this article's §5.3 Design B equivalently, and is not adopted. Among the three mitigation paths, TrustZone is the most viable engineering direction, deferred to §11 open question O9.

The verifier-side OpenID4VP conformance test suite (developed in collaboration by Sphereon, Mattr, and IDnow as the EUDI Wallet conformance suite) has no "mixed cryptosuite negotiation" test cases. EWC Phase 2 plans to add these in 2026-Q3,<sup>23</sup> but currently relies on manual interop testing. The SA1 thesis carries implementation uncertainty until the conformance path matures — an engineering reality explicitly stated at the honesty boundary in §11.

### § 4.7 The Tension Between PQC Migration and 30-Year Preservation

PQC migration is the deepest tension between the SA1 cryptosuite selection and the SA2 30-year preservation window. This article makes the honesty boundary explicit here (corresponding to the sixth item in §11). NIST FIPS 203 (ML-KEM, Kyber), FIPS 204 (ML-DSA, Dilithium), and FIPS 205 (SLH-DSA, SPHINCS+) were standardised in August 2024;<sup>78,79,80</sup> NSA CNSA 2.0 (2022, 2024 update) sets a PQC migration timeline of 2030–2035 for national security systems.<sup>76</sup> Mosca's theorem states: if the sum of an information's preservation period and the PQC migration timeline exceeds the time until the first cryptographically relevant quantum computer appears, that information is no longer secure.<sup>77</sup> For civic receipts: a 30-year preservation period plus a 5–10-year PQC migration timeline amounts to 35–40 years. If a cryptographically relevant quantum computer appears in 2035–2045 (the mainstream estimation range), civic receipts generated between 2026 and 2035 will be insecure for verification in 2045–2055.

Three engineering mitigation paths exist. First, crypto-agility by design: W3C VCDM v2.0 has pre-defined a cryptosuite abstraction layer (the `securingMechanism` concept),<sup>1</sup> and IETF PQUIP WG 2024–2025 drafts provide specific paths for hybrid signing design;<sup>82</sup> the `cryptosuite_id` field in §3.1's schema is the carrier for this abstraction layer. Second, hybrid signing during transition: each civic receipt simultaneously carries a conventional signature (Ed25519) and a PQC signature (ML-DSA); the conventional signature ensures backward compatibility, while the PQC signature ensures forward security. The receipt size inflates by a factor of 2–3 during the hybrid period, but this is tolerable from a wallet and verifier engineering perspective. Third, archive re-anchoring automation: for long-term preservation (30 years), an archive operator re-anchors content every 5–7 years using the latest PQC hash function, generating a new chain-of-custody hash log entry; the combination of RFC 8392 CWT and RFC 5816 TSP can carry this design.<sup>72</sup> The PQC replacement for BBS+ (lattice-based unlinkable signatures) remains at the IACR ePrint research stage (following Bootle et al. 2024);<sup>18</sup> this is §11 open question O8. This article makes no claim that this problem can be resolved within five years; the strengthened thesis reserves a carrier interface for this open problem through the crypto-agility abstraction layer.

---

## § 5. SA2 — Long-Term Preservation: Three-Window Derivation of the 30-Year Floor, Three Dual-Track Design Options, and Holder-Controlled Failure Modes

### § 5.1 Three-Window Derivation of the 30-Year Floor

The "30-year floor" is derived through a minimum-equilibrium aggregation of normative and empirical evidence from three normative windows, rather than logical necessity. The derivation takes the maximum value across three normative windows: CRPD benefit-claim limitation periods, retroactive review periods for guardianship-declaration disputes, and Toeslagenaffaire-level retroactive review periods.

**First window: CRPD benefit-claim limitation periods.** The CRPD text does not directly set limitation periods for "benefit claims," but Art 12 GC1 §29 requires supported decision-making to include "safeguards including independent review" — "independent review" entails "reviewable ex post," and the ex post review window must be at least as long as the limitation period for the underlying claim.<sup>2</sup> State practice on disability-related benefit limitation periods varies: Germany's Civil Code (BGB) §197(1) Nr. 1 explicitly sets 30 years for "pension claims confirmed by final judgment," and Social Code SGB I §45 allows extension to comparable magnitudes under circumstances of non-disclosure;<sup>25</sup> Taiwan's National Health Insurance Act Art 71 sets a default two-year limitation for excess-benefit claims, while the Civil Code Art 125 fifteen-year general limitation carries no explicit ceiling in guardianship-declaration disputes; the UK Mental Capacity Act 2005 framework treats lasting powers of attorney as valid for life; and France's Civil Code Art 2224 sets a general five-year limitation, though certain family-law matters reach 30 years.<sup>26</sup> Taking the maximum across these windows yields 30 years.

**Second window: retroactive review periods for guardianship-declaration disputes.** Civil Code §14 and equivalent provisions in other jurisdictions permit rescission or modification of existing guardianship declarations upon reassessment of capacity. In Taiwan, guardianship declarations have a typical duration of 8–15 years, but extreme cases (first declaration at age 30, dispute at age 60) can span 30 years.<sup>27</sup>

**Third window: Toeslagenaffaire-level retroactive review periods.** The Netherlands childcare-benefit retroactive case (2013–2019 decisions) demonstrates that administrative injustices may not enter public deliberation until 5–8 years after the events, with subsequent remediation for affected families extending another 5–10 years; some families had still not received full compensation as of 2026.<sup>28</sup> For child welfare placement decisions, the OECD average ex post dispute window falls at 15–25 years; extreme cases (Australia's Stolen Generations, Canada's Sixties Scoop) reach 30–50 years. This article takes the "Toeslagenaffaire-level" floor as 22 years (8 years post-event discovery plus 14 years of remediation long-tail, a self-derived estimate).

After aggregating the three windows, the minimum equilibrium falls in the range of 22–30 years. This article adopts 30 years as the floor for three reasons: alignment with German pension-benefit practice (a duration already validated by existing preservation infrastructure), coverage of most guardianship-declaration dispute scenarios, and sufficiency for a Toeslagenaffaire-level event to be fully resolved. It must be emphasised that this floor is conditional: it is an "analytic suggestion" and not a "normative hard constraint"; a normative floor should be derived from eIDAS implementing acts or domestic law. The 30-year floor is also not universal across all jurisdictions — India's DPDP Act 2023 prioritises the right to erasure over retention;<sup>29</sup> China's PIPL mandates domestic storage without distinction for persons with disabilities; and Aadhaar UIDAI adopts a tiered 6-month active plus 2-year archival retention policy.<sup>30</sup> This article limits the scope accordingly: the 30-year floor holds for "OECD and CRPD state parties without declared reservations."

### § 5.2 Holder-Controlled Failure Modes Across Three Scenarios

A holder-only design ties accessibility to the holder's cognitive, physical, and vital capacity; as those capacities degrade over time, the audit trail degrades with them. WHO 2024 estimates approximately 55 million people globally living with dementia in 2023, projected to reach 139 million by 2050; the Alzheimer's Association 2025 estimates approximately 7.3 million Americans aged 65+ living with dementia, of whom approximately 30% have entered stage 5 (severe cognitive decline).<sup>31,32</sup> After moderate-to-severe dementia (Clinical Dementia Rating ≥ 2), the holder cannot remember seed phrases, cannot evaluate phishing attempts, and cannot unlock devices with a PIN. For wallets using a holder-only design, this means that all civic receipts of that holder become inaccessible once CDR ≥ 2 is reached.

The second failure category is device loss, damage, theft, or forced OS updates. Industry practice indicates that hardware wallet loss or damage rates fall below 5% per year, but OS forced updates — such as iOS forced upgrades that disable older Secure Enclave versions, or Android factory resets that overwrite the keystore — make wallet key recovery impossible each year.<sup>33</sup> EUDI Wallet ARF 2025-12 iteration requires holders to set up a recovery anchor during onboarding for "key recovery," but the long-term accessibility of the recovery anchor itself is a further recursive problem.

The third failure category is post-mortem digital estate. The US Revised Uniform Fiduciary Access to Digital Assets Act (RUFADAA, 2015) adopts a three-tier access hierarchy: the user's online tool (e.g. Google Inactive Account Manager) has priority, followed by the user's will or trust, with terms of service as a last resort.<sup>34</sup> However, RUFADAA presupposes that the fiduciary can obtain access credentials — for self-custody wallets, the credentials are the seed phrase; if the seed phrase has not been pre-incorporated into a trust as continuing instructions to the fiduciary, the fiduciary cannot obtain access. Pew Research 2023 estimates that approximately 46% of Americans aged 65+ have a will, while fewer than 10% have provided instructions for digital assets.<sup>35</sup>

Under the conjunction of these three failure modes, the CRPD GC1 §29 audit-trail obligation is difficult to fulfil within the 30-year long tail of supported decision-making. When the mechanism chain described in §§9.2/9.3 is satisfied (cognitive endorsement engineering gap, routine proxy signing by care workers, guardianship void, plus the independent chains of device loss and digital estate), the conditional probability of audit-trail degradation in a holder-only design is medium-high. The degradation manifests as supported decision-making reverting at the cryptographic layer to substituted decision-making, with the audit trail disappearing simultaneously, and the §29 obligation entering a state of "empirically difficult to fulfil" within the 30-year window. The three dual-track designs in §5.3 and the three mitigations in §9.3 are engineering suppression paths for this likelihood (not statements of absolute causal necessity).

### § 5.3 Comparison of Three Dual-Track Design Options (A / B / C)

| Dimension | Design A: Third-party holds encrypted backup | Design B: Multi-sig escrow with court override | Design C: Threshold signatures (t-of-n) |
|---|---|---|---|
| Key material held by third party | Encrypted ciphertext + chain-of-custody evidence | One independently exercisable private key + court override rules | One threshold share (no unilateral capability) |
| Decryption / signing capability | Requires decryption key from holder | Third party acts independently upon court order activation | Requires t-1 other shares to cooperate |
| W3C DID Core §8.2 correspondence | controller = holder; subject = holder | controller ≠ subject (third party is backup controller) | controller is t-of-n collective |
| Whether holder-controlled default is broken | No | Yes | Partially (depends on t and n configuration) |
| CRPD §28 substituted-decision prohibition | Passes | Violates | Borderline (requires additional assurance that t-1 trustees are not simultaneously co-opted) |
| Recoverability in incapacity scenario | Weak (holder must still exercise decryption key) | Strong | Medium |
| Recoverability in post-mortem scenario | Medium (estate fiduciary must obtain decryption key) | Strong | Strong |
| Resistance to third-party co-option | Strong | Weak | Medium-strong |
| Engineering complexity | Low | Medium | High |
| Existing standard support | eIDAS 2024/1183 Chapter III §7 (QPSP) | Partially supported (trust frameworks) | W3C VC + GG18 / FROST (academic) |

Design B directly violates the CRPD §28 prohibition on substituted decision-making: "the third party acts independently once a court override is activated" is precisely the technical embodiment of substituted decision-making. This article does not adopt Design B. Both Design A and Design C pass the §28 test but involve different engineering trade-offs. This article recommends a hybrid approach: Design A as a cold-storage layer for the notary (QPSP provides an encrypted backup, holder retains the sole decryption key); Design C as a hot-storage layer for daily supported-decision-making signing (threshold signatures among holder and supported decision-maker(s), with a recommended starting configuration of t=2, n=3, with configurable space).

The third-party notary in the dual-track design is positioned as a "preservation agent" (avoiding the expression "trusted intermediary"): under Design A, the QPSP holds the encrypted backup and the chain-of-custody evidence but not the decryption key, and does not substitute for the holder. This distinction corresponds to the CRPD §29 "independent review" requirement — zero third-party trust is inherently in contradiction with CRPD obligations, and self-sovereign maximalism has already been falsified by Article 15 §6.2.<sup>12</sup>

### § 5.4 Case Witnesses: Estonia X-Road and Nordic BankID

Estonia X-Road has operated from 2001 to 2026 — a period of 25 years — and e-Residency from 2014 for 12 years. X-Road applies chained timestamps and log replication for service-to-service communications, with all transaction logs preserved by RIA (Riigi Infosüsteemi Amet).<sup>36</sup> After the 2007 cyberattack, Estonia extended its log-preservation infrastructure to a data embassy in Luxembourg, demonstrating the practical feasibility of cross-border redundancy. X-Road has undergone multiple generations of cryptographic parameter upgrades, and ISO 14721 OAIS requirements for "representation information migration"<sup>37</sup> have been validated in Estonian practice. However, the specific SHA function migration timeline has not been fully documented in public literature; this article uses the non-specific description "multiple generations of cryptographic parameter upgrades."

Norwegian BankID's handling of deceased cardholders: family members must provide a death certificate, a certificate of inheritance (skifteattest), and the identifying information associated with the existing BankID; only then will the BankID consortium revoke the existing credential and issue a new one.<sup>38</sup> BankID does not preserve individual transaction content — it retains only the metadata of authentication and signature events; transaction content is preserved by relying parties. This corresponds to the "responsibility stratification" of this article: the BankID layer is responsible only for key custody and the audit log of signatures, while the content of specific supported decisions (civic receipts in plaintext) is preserved by relying parties. The BankID deceased-recovery procedure demonstrates that "the third-party notary need not directly hold the private key" and can still provide audit trail reconstruction in post-mortem scenarios. However, BankID also has failure cases: when the cardholder had already revoked their existing credential before death (e.g. to avoid fraud), family members cannot obtain a re-issuance; and when relying parties have already deleted transaction content beyond their own retention period, the audit trail is partially incomplete. This warns that QPSP preservation obligations must be synchronised with relying-party obligations; otherwise, the 30-year floor will be limited by the shortest layer.

### § 5.5 Counter-Argument: The Risk of Conflating Self-Sovereign and Holder-Controlled

Opponents frequently invoke the self-sovereign identity position's "no third-party trust assumption" to object to the introduction of a QPSP — any assumption of third-party trust reverts to a federated identity model and breaks the digital sovereignty commitment. This article established in §2.5 that self-sovereign and holder-controlled are not synonymous: the former is an identity-theory position, the latter a custody design; and the former has been falsified by Article 15 §6.2's three-presupposition argument.<sup>12</sup> The trust assumption in Design A is "the third party does not collude (with other trustees or the decryption key holder)" — a considerably weaker assumption than the "the third party does not abuse its position" required by federated identity, because the third party cannot independently decrypt without the decryption key. The CRPD §29 audit-trail obligation itself requires independent review, which already entails "not only the holder knows" — zero third-party trust is inherently in contradiction with CRPD obligations.

Regarding the engineering counter-argument that "30 years is too long, and the technology will be obsolete": ISO 14721 OAIS explicitly provides for representation information migration obligations, and the engineering goal of 30-year preservation is to "preserve interpretable information" (not "preserve original bits"), with QPSP responsible for migration;<sup>37</sup> ISO/IEC 27040 §7 recommends 5–10-year storage media re-encryption cycles (advisory, not mandatory), meaning 30-year preservation requires 3–5 cryptographic parameter upgrades — a known engineering requirement; eIDAS amended Chapter III §7 already requires QPSP to bear obligations for preservation-format changes. Regarding the critique that "the 30-year floor is not universal outside the OECD": this article has already limited its scope in §5.1 to "OECD and CRPD state parties without declared reservations," and §7 parallel tracks have designed a carrier structure for coverage gaps outside the OECD. Regarding the critique that "QPSP centralisation creates a single point of failure": mitigation paths include cross-jurisdictional redundancy (Estonia data embassy model), the Design A encrypted-backup structure (which cannot be decrypted even if co-opted), and Design C threshold signatures distributing risk across multiple trustees. Regarding the critique that "automatic update obligations destroy immutability": OAIS has already established that "the engineering goal of preservation is to maintain an interpretable chain of information, not the original bits," with each migration accompanied by a provenance chain, keeping the entire chain immutable; eIDAS amended Chapter III §7 QPSP obligations already include "preserving chain-of-custody integrity across migrations."

---

## § 6. SA3 — Court Admissibility: Three-Jurisdiction Alignment, ESI Analogy, the *Mata v. Avianca* Negative Precedent, and the Apostille Public/Private Document Distinction

### § 6.1 Three-Jurisdiction Alignment Table

| Dimension | US (FRE) | EU (eIDAS, amended 2024/1183) | Taiwan (Electronic Signatures Act + CPC) |
|---|---|---|---|
| Foundational provisions | FRE 901, 902(14), 803(6) | Reg 2024/1183 Chapter III §§7–8 (formerly 910/2014 Arts 25, 33–35) | Electronic Signatures Act §§4/10; CPC Arts 363/363-1 |
| Self-authentication structure | 902(14): qualified person certification + hash + chain of custody | QES automatically equivalent to handwritten signature (formerly Art 35, now §8) | §10: electronic signature equivalent to handwritten when requirements met; not automatic self-authentication |
| Algorithm reliability test | *Daubert v. Merrell Dow* five-factor test<sup>39</sup> | No equivalent precedent; replaced by trust service provider conformity assessment | None; expert testimony used in practice |
| Holder-controlled structure support | Moderate (must use 901(b)(9) process description) | Low (eIDAS presupposes issuer-side TSP) | Moderate (§10 does not explicitly exclude holder side) |
| Agent-mediated structure support | Low (heightened scrutiny following *Mata v. Avianca* negative precedent) | Low (QES must be under the signatory's sole control) | No position taken |
| Business records / hearsay path | FRE 803(6) regularly conducted activity | National law of each member state | CPC Art 363 (private documents) |
| Chain of custody standard | Sedona Principles 4th ed.<sup>40</sup> + ISO 27037<sup>41</sup> | ETSI TS 119 511/512 + ARF audit trail | Government Agency Electronic Document Procedures (incomplete) |

### § 6.2 Holder-Controlled Taking the FRE 901(b)(9) Rather Than 902(14) Path

FRE 902(14) was designed to allow neutral third parties such as ISPs or cloud providers to replace live testimony with a certification. The text of Rule 902(14) requires certification by a qualified person; the Advisory Committee Notes map "qualified person" to a person familiar with the procedures of a regularly conducted business activity.<sup>3</sup> *Lorraine v. Markel American Insurance* (D.Md. 2007), at pages 540–543, emphasises that ESI authentication must pass the "the process is consistent and reliable" test;<sup>42</sup> a holder authenticating their own conduct in a receipt is unlikely to pass this test.

This article adopts the following position: civic-action-receipts do not claim self-authentication under Rule 902(14) but instead take the heavier FRE 901(b)(9) "process or system description plus accuracy proof" path. The three-element suite of `chooser_signature`, audit-by-design, and `revocation_endpoint` provides objective evidence of process description and accuracy. This corresponds to the three engineering corrections in F1 §5.4: audit-by-design provides temporal evidence, `chooser_signature` provides holder presence, and `revocation_endpoint` provides currency.

eIDAS amended Chapter III Section 8 (formerly Art 35) recognises equivalence in evidentiary force between qualified electronic signatures (QES) and handwritten signatures, with a default presupposition of an issuer-side trust service provider. Holder-controlled receipts must therefore connect to Section 7 (preservation; formerly Arts 33–34), drawing on a qualified preservation service for an independent chain of evidence for long-term reliability.<sup>10</sup> Taiwan's Electronic Signatures Act §4 (effect of electronic documents), §10 (conditions for equivalence of electronic signatures and handwritten signatures), combined with CPC Arts 363 (private documents) and 363-1 (quasi-application to electronic documents), constitutes the domestic-law carrier; the Executive Yuan's 2026 draft amendment aligns with eIDAS to introduce qualified electronic signatures and trust service provider concepts, though the draft remains under Legislative Yuan review with text subject to change.<sup>43</sup>

### § 6.3 Limitations of the ESI Analogy

| ESI principle | Correspondence to civic receipts |
|---|---|
| FRCP 26(f) ESI conference<sup>44</sup> | Receipt schema must define disclosure format at issuance time |
| FRCP 34(b) producing party selects form | Holder asserts receipt format over verifier-imposed format |
| Sedona Principle 6 (producing party most familiar with own data) | Holder has control over receipt-set disclosure scope |
| Sedona Principle 11 (no requirement for full metadata disclosure) | Receipts default to not disclosing detailed `chooser_signature` traces |
| ISO/IEC 27037 chain of custody | Receipts must have three-stage coverage: issuer-signed + holder counter-signed + `revocation_endpoint` |
| *Lorraine* five-step test | (1) relevance; (2) authentication using both holder key + issuer key; (3) hearsay treated as business record or verbal act; (4) original writing: hash treated as duplicate; (5) probative value balanced against prejudice via `chooser_signature` |

The ESI framework presupposes "enterprise records" (naturally generated in the course of business activity), whereas civic receipts presuppose holder-controlled assertion (a citizen making active declarations). FRE 803(6) explicitly requires that business records be "kept in the course of a regularly conducted activity," and if "the source of information or the method or circumstances of preparation indicate a lack of trustworthiness," they are excluded; US Courts of Appeals (e.g. 5th Circuit, *US v. Foster*, 711 F.3d 657 (2013)) exclude records specially prepared for litigation purposes.<sup>45</sup> Receipts have two alternative paths for hearsay rule purposes: the first is the verbal act (not hearsay) or present sense impression (FRE 803(1)) path, bypassing the "regularly conducted activity" burden of proof under the 803(6) hearsay exception; the second frames receipts as "the occurrence of conduct" (an act of consent or authorisation) falling outside the hearsay rule's scope of application to "the proof of facts" (assertions of truth). Both alternative paths lack clear federal precedent regarding whether VC-style consent tokens constitute verbal acts in US federal courts. This article treats these as "preliminary arguments" and lists them as open questions in §11.

### § 6.4 *Mata v. Avianca* Is a Negative Precedent

In *Mata v. Avianca*, 22-cv-1461 (S.D.N.Y. 2023), Judge Castel imposed a $5,000 sanction on a lawyer who submitted fictitious cases generated by ChatGPT and required future AI-generated filings to include explicit disclosure.<sup>46</sup> This article's position on this case must be clear: *Mata v. Avianca* is a **negative precedent / cautionary example**, not a legitimate template. Any agent-mediated receipt that lacks a `chooser_signature` explicitly attesting that the holder was present and signing may be treated by a court as a ChatGPT-style hallucination record, rendering the entire batch of receipts inadmissible. The §3.1 schema's design of `agent_did` as nullable — requiring that when `agent_did ≠ null`, both `agent_delegation_proof` and `agent_delegation_capability_hash` fields are non-null and verifiable back to `subject_did` — is precisely the engineering correction responding to this negative precedent.

EU AI Act (Regulation (EU) 2024/1689) Annex III lists "AI systems used in the administration of justice" as high-risk, requiring conformity assessment.<sup>47</sup> Texas State Bar 2024 rules and Oklahoma Supreme Court 2025 Order mandate lawyers to disclose AI involvement.<sup>48</sup> CJEU *SCHUFA Holding* C-634/21 (2023) on the scope of "solely automated" determination under GDPR Art 22 for automated decision-making indirectly sets an admissibility floor requiring "the holder must meaningfully participate in the decision path."<sup>49</sup> At the literature-review stage, this article had considered citing CJEU C-300/22 (2024), but the case reference could not be verified with sufficient confidence and has been withdrawn from the main text; CJEU citations are confined to *SCHUFA* C-634/21.

### § 6.5 The Apostille Public/Private Document Distinction Gap

The Hague Convention on Apostille (1961) and the e-Apostille Pilot Program address cross-border recognition of "public documents."<sup>50</sup> The e-APP has operated since 2006, with approximately 5.1 million e-Apostilles issued globally as of 2024;<sup>51</sup> the 2024 Berlin Working Group report shows signatory state count approaching 36 (the exact figure is treated in this article as "to be verified against the final draft").<sup>52</sup>

Whether civic receipts qualify as public documents is the core unresolved problem at the Apostille alignment layer. Traditional Apostille certification authenticates "a signature on a document," whereas receipts are "structured data plus a signature chain"; the former is issued by a public authority (such as a household registry, land registry, or court), while the latter is jointly generated by the holder and verifier sides. If a civic receipt is issued by a public authority (such as the National Health Insurance Administration or a Long-Term Care Management Centre) and the `chooser_signature` in the receipt is used to prove the holder's consent in a public-authority service-delivery scenario, the receipt may be argued to fall within the broad category of public documents — but this argument has no established precedent in existing HCCH practice. If the receipt is issued by a private issuer (such as a commercial wallet provider), it constitutes a private document, to which Apostille does not apply; cross-border recognition must instead be pursued through the 1965 Service Convention, the 1970 Evidence Convention, or individual diplomatic certification. This article's position: whether civic receipts qualify as public documents requires supplementary argumentation; otherwise there is a gap at the cross-border recognition layer. Specific classification rules are treated as a matter for §7's G_recognition^A soft-law layer third phase (the Hague PIL e-APP digital identity extension issue).

Taiwan is not a party to the Hague Apostille Convention; e-APP does not apply. Civic receipt cross-border admissibility has a fast-track only between the US and the EU through Apostille/e-APP. Taiwan holders in the short term must route through a third country (e.g. Singapore or Japan, both Apostille signatories); the long-term path requires Taiwan to accede to the Apostille Convention or negotiate bilateral MoUs.

### § 6.6 *Daubert* Reliability Applied to BBS+ and ZK-SNARK

*Daubert v. Merrell Dow Pharmaceuticals, Inc.*, 509 U.S. 579 (1993), sets five factors for the admissibility of algorithm-generated evidence: testability, peer review, known or potential error rate, existence of standards controlling the technique's operation, and general acceptance in the relevant scientific community.<sup>39</sup> SD-JWT-VC maps relatively directly onto the five factors: RFC 9901 provides standards; IETF working group records and multiple implementer reports provide testability and peer review; and ECDSA/EdDSA have general acceptance in federal courts and under NIST FIPS 186-5. BBS+ Cryptosuite's mapping onto the *Daubert* five factors corresponds to the conditionally established nature of the BBS+ advanced tier in §4.2: IRTF CFRG `draft-irtf-cfrg-bbs-signatures-07` provides algorithm-level standards, but W3C `vc-di-bbs` CRD had not reached W3C Recommendation as of May 2026; BLS12-381 has general acceptance in academic communities (IRTF CFRG, IEEE, ACM) but is not listed in federal standards under FIPS 186-5. The fourth and fifth *Daubert* factors accordingly still bear a burden of proof for BBS+; expert witnesses in court must cite Tessaro-Zhu (EUROCRYPT 2023) on tight reductions for BBS and Camenisch-Drijvers-Lehmann (TRUST 2016) on strong DH assumption security proofs for BBS+,<sup>85</sup> extending "standards/general acceptance" from the federal-recognised tier to the international cryptographic community tier.

ZK-SNARK on VC faces greater pressure under the *Daubert* five factors: vendor implementations (Iden3 + Circom, Semaphore, Anon Aadhaar) provide testability, but the W3C VC Data Integrity ZKP Cryptosuites Explorer Note (September 2024) explicitly identifies itself as "not on the Recommendation track, for design-space exploration only,"<sup>19</sup> leaving the fourth factor (standards) severely deficient; general acceptance has been established in the cryptocurrency and DeFi communities but not in federal civic-action contexts. The positioning of ZK-SNARK in §4.1 as an "advanced narrow profile for complex-predicate use cases" is the engineering conclusion of this *Daubert* assessment — it is not claimed as a baseline or advanced option for civic-action-receipts but is left for reassessment in §11 open question O10 in 5–10 years.

### § 6.7 Three Hearsay-Response Paths for Receipts

FRE 803(6) business-records exception creates fundamental tension with the hearsay rule for receipts. Enterprise records are presupposed to "arise naturally in the course of regularly conducted activity," whereas civic receipts are presupposed to be "actively generated by the holder for future evidentiary use," with the latter carrying litigation motivation. Sedona Principles 4th edition (2018) and ISO/IEC 27037:2012 chain-of-custody standards are both premised on the enterprise-records presupposition.<sup>40,41</sup> This article adopts three response paths.

**First path: verbal act.** The evidentiary function of receipts is framed as "the occurrence of conduct" (an act of consent or authorisation) — positioning them outside the scope of the hearsay rule; under this framework, receipts are not used as "the proof of facts" (assertions of truth). Whether VC-style consent tokens qualify as verbal acts has no clear federal precedent; the analogical reference is the verbal act character of contract signing itself (the act of signing itself constitutes a legal act and need not be proven as an assertion of fact through the hearsay rules). This path is relatively direct under Taiwan's CPC Art 363-1 (quasi-application of private-document provisions to electronic documents) — the response to disputes about the authenticity of private documents is borne by `chooser_signature` and the chain-of-custody hash log, with no hearsay rule counterpart.

**Second path: present sense impression (FRE 803(1)).** Receipts are generated "at the moment" the holder undergoes the supported decision-making process and may be argued to fall within "the declarant's statement, describing or explaining an event or condition, made while or immediately after the declarant perceived it." This path requires that the receipt's generation time be closely proximate to the deliberation time — the three temporal fields `timestamp_proposed`, `timestamp_decided`, and `timestamp_presented` in the §3.1 schema are the engineering carrier supporting this argument.

**Third path: 803(6) expanded path.** The interpretation of "regularly conducted activity" under FRE 803(6) may be extended to individual's regularly conducted personal record-keeping. Paul Grimm and co-authors in *Authenticating Digital Evidence* (2017, Baylor Law Review) and a 2019 ABA Section of Litigation commentary argue that an individual's regularly conducted record-keeping in the course of supported decision-making falls within the expanded scope of 803(6);<sup>86</sup> Daniel J. Capra's 2022 *Electronic Evidence and the Federal Rules of Evidence* takes a reserved position on this expanded reading.<sup>87</sup> This article's position: the 803(6) expanded path is supplementary; verbal act and present sense impression are the primary paths. The three paths have differing applicability across litigation types (civil tort, administrative litigation, succession disputes); specific choice is left to case-by-case tactical decision in SA3 admissibility litigation and is not developed further here.

### § 6.8 Legal-Layer Limits of `chooser_signature`

F1 §5.3 W4 argues that supported and substituted decision-making are nearly indistinguishable at the behavioural layer; F2 §3 V_receipt conditions C1+C2 use `chooser_signature` to recover this distinction at the cryptographic layer. SA3 must be honest, however: `chooser_signature` still cannot distinguish between "the holder signed under free will" and "the holder signed under coercion"; the latter is a legal-layer coercion defence, not a cryptographic-layer problem. Even when `chooser_signature` is present, a signature obtained by an agent through psychological coercion of the holder can still be set aside in civil proceedings. This article states explicitly at the §11 honesty boundary that the three-element cryptographic suite does not resolve all attribution problems; guardianship arrangements, capacity assessments, and other legal institutions remain indispensable procedural safeguards.

---

## § 7. SA4 — Cross-Border Mutual Recognition: Conditional Estimates for the 5/10/15-Year Phased Timeline and Non-OECD Parallel Tracks

### § 7.1 Three Soft-Law Paths and Their Conditional Timelines

Cross-border mutual recognition falls within the G_recognition^A layer under the Article 8 FTLA four-tier governance framework.<sup>14</sup> G_recognition^A in F1 §7.8 carries an aggregate estimate of 10–15 years; this article disaggregates that layer into three phases, each corresponding to one soft-law path and one verifiable intermediate milestone. All timelines are conditional estimates expressed as orders of magnitude; the formulation "will be achieved by 2031" is not adopted.

#### § 7.1.1 OECD AI Principles Supplementary Guidance (5-Year Phase: 2026–2031)

The OECD AI Principles 2019 (OECD/LEGAL/0449) were revised in May 2024 to introduce generative AI provisions and strengthen accountability.<sup>53</sup> The OECD AI Incidents Monitor launched in April 2024 as a public database of AI incidents and hazards,<sup>54</sup> providing a concrete hook for civic-action-receipts to connect to the soft-law layer — incident reports may attach receipts as evidentiary material. The Hiroshima Process International Code of Conduct (adopted by the G7 in October 2023), at item 7, calls for investment in watermarking and provenance mechanisms,<sup>55</sup> constituting a superior soft-law basis for civic receipts.

Milestones (conditional estimates): 2026–2027, the OECD AI Working Party lists civic receipts as a work item under provenance and accountability mechanisms; 2027–2029, the OECD publishes supplementary guidance standardising receipts as attachments to incident reports; 2029–2031, the second OECD AI Principles revision incorporates receipt-based audit trails into the implementation guidance for Principle 1.5 (accountability). Conditioning variables: uninterrupted political will within the OECD; at least one leading member (candidates: Japan, Canada, South Korea) domestic adoption ahead of others; the G7 Hiroshima Process Friends Group remaining intact.

#### § 7.1.2 CETS 225 Supplementary Protocol (10-Year Phase: 2026–2035)

The Council of Europe Framework Convention on Artificial Intelligence (CETS 225) opened for signature in Vilnius on 2024-09-05.<sup>56</sup> Art 4 establishes human rights baselines; Art 15 addresses transparency and oversight; Art 16 creates a risk and impact management framework (the direct superior normative basis for civic receipts); Art 26 provides for supplementary protocol (additional protocol) mechanisms. Known signatories include the EU, US, UK, Japan, Israel, and Canada, among others.

Assumed supplementary-protocol path: 2027–2028, the Conference of Parties initiates the civic-action-receipt topic (initially as an expert report); 2028–2030, a Drafting Committee drafts the supplementary protocol text; 2030–2032, the Committee of Ministers adopts the text and opens it for signature; 2032–2035, the Nth instrument of ratification is deposited and the supplementary protocol enters into force. Conditioning variables: CETS 225 signatory states maintain their signatory status (US does not withdraw); the Conference of Parties proceeds by majority decision (China and Russia are currently non-signatories, limiting their influence). Achieving supplementary protocol entry into force within ten years is an optimistic estimate — the CoE's historical average for supplementary protocol drafting is 5–8 years, and CETS 225 itself took approximately five years from drafting to opening for signature.

#### § 7.1.3 Hague PIL e-Apostille Extension (15-Year Phase: 2026–2041)

The Hague Convention on Apostille (1961) counts approximately 125 state parties as of 2025 and is one of the few procedural conventions covering a large number of non-OECD jurisdictions (including China, which acceded in 2023; and India, Brazil, Indonesia, Russia, Turkey, and CIS states).<sup>50</sup> The e-APP has operated for twenty years but remains a pilot; formal extension to wallet-borne digital identity cross-border recognition requires bridging the conceptual expansion of "public document."

Milestones (conditional estimates): 2026–2028, the HCCH Special Commission on the Apostille Convention lists wallet-borne credentials as a work item; 2028–2031, the HCCH Permanent Bureau publishes a preliminary document and questionnaire; 2031–2034, the Special Commission adopts Recommendations on e-APP extension to verifiable credentials; 2034–2038, domestic implementation in each state; 2038–2041, full operation. Conditioning variables: HCCH political will; domestic legislation in at least the US, EU, Japan, and India as four major jurisdictions; China's participation as a state party rather than a blocking actor. The fundamental conceptual expansion of Apostille (from "documents" to "structured data") may not suit HCCH's conservative style and might instead proceed via a different Hague Convention (e.g. the digital-era update of the 1965 Service Convention). This path represents "the most likely" rather than "the only possible" route.

### § 7.2 OECD Coverage Gaps and Non-OECD Parallel Tracks

The OECD covers approximately 65% of global GDP but only approximately 18% of global population (established in F1 §7.5.4).<sup>11</sup> All three soft-law paths have coverage gaps outside the OECD. This article's position: OECD coverage gaps constitute an "acknowledgement" rather than a "prediction," and are not an eliminable boundary through SA4. Parallel track designs:

(a) African Union Continental AI Strategy 2024 (adopted by the AU Executive Council, July 2024).<sup>57</sup> For African jurisdictions, the integration of mobile money (M-Pesa, Airtel Money, MTN MoMo) with foundational ID (Nigeria NIN, Kenya Huduma Namba, Ethiopia Fayda) is central; wallet-borne credentials are not the AU's primary assumption. Civic receipts for AU jurisdictions require parallel design modelled on mobile-money receipt structures.

(b) APEC CBPR and Global CBPR Forum 2024. The APEC CBPR has operated since 2011; the Global CBPR Forum was launched in April 2022 by the US, Japan, Singapore, Canada, South Korea, the Philippines, and Chinese Taipei, with the 2024 Declaration extending to non-APEC members and wallet scenarios.<sup>58</sup> This is particularly significant for Taiwan — Taiwan is neither an OECD member, nor a CoE member, nor an EU member; the APEC CBPR is the primary track through which Taiwan can carry cross-border civic receipt recognition.

(c) India DPDP Act 2023 and DEPA. The DPDP Act was promulgated on 2023-08-11; DEPA was proposed by NITI Aayog in 2020 and adopts a consent manager model.<sup>29,59</sup> DEPA consent artefacts are structurally homologous to civic-action-receipts (both use selective disclosure and audit trails), but cross-border mutual recognition requires separate treatment; schema-level functional equivalence awaits further public disclosure of DEPA specification text.

(d) Brazil LGPD and ANPD adequacy (Resolução CD/ANPD nº 19/2024);<sup>60</sup> Indonesia PDP Law 2022 (UU No. 27/2022);<sup>61</sup> GCC Digital Identity Mutual Recognition Initiative 2024 (six-state wallet and e-ID mutual recognition);<sup>62</sup> ASEAN DEFA (negotiations launched 2023, target signature 2025).<sup>63</sup>

### § 7.3 EUDI Mandatory Phase as OECD 5-Year Path Accelerator

Regulation (EU) 2024/1183 Art 5a requires member states to mandatorily provide EUDI Wallets from December 2026, and Art 14 requires cross-border recognition (limited to within the EU).<sup>10</sup> The full rollout of EUDI in 2026–2027 will generate demand for cross-border receipt flows within the EU, and EU–non-EU mutual recognition will constitute the primary engineering pressure from 2027 to 2030. EUDI pressure is an accelerator for the OECD 5-year path: if EUDI proceeds smoothly, the OECD AI Principles supplementary guidance may be achieved as early as 2028–2029.

### § 7.4 Structural Limits of Soft Law

The OECD AI Principles, CoE supplementary protocol, and Hague extension are all soft law or procedural conventions without direct binding force. This article does not claim that soft law constitutes binding force. Soft law is a phased carrier framework: in the absence of a binding treaty, soft law provides a mechanism for inter-state expectation convergence. Between eIDAS 2.0's binding force within the EU and OECD soft law lies the division of labour between G_state^A and G_recognition^A. Historically, soft law has multiple times transformed into hard law: 1980 OECD Privacy Guidelines → 2018 GDPR over 38 years; 1990 OECD Cryptography Guidelines → 2001 Cybercrime Convention over 11 years; 2019 OECD AI Principles → 2024 CETS 225 over 5 years. Transformation paths exist, but the variables are political will and time. Even when soft law does not transform into hard law, soft law combined with bilateral MoUs (e.g. the EU–US Data Privacy Framework 2023) can form functional equivalence.<sup>64</sup>

### § 7.5 Historical Trajectories of Soft-Law Transformation

Soft law has transformed into hard law multiple times historically, though transformation is not a deterministic function. The 1980 OECD Privacy Guidelines (OECD/LEGAL/0188) established eight principles of data protection; the 1995 EU Data Protection Directive partially inherited them; the 2018 EU GDPR fully carried a 38-year evolutionary path. The conditions for this transformation included sustained support from EU internal governance will, technological evolution (the spread of the internet), and civil society advocacy (European Digital Rights and others).<sup>88</sup> The 1990 OECD Cryptography Guidelines (OECD/LEGAL/0289) recommended that member states adopt a user-choice position on cryptography; the 2001 Budapest Cybercrime Convention (CETS 185) partially transformed them into treaty obligations over 11 years; the enabling conditions were primarily the joining of the OECD and CoE governance systems. The 2019 OECD AI Principles (OECD/LEGAL/0449) to 2024 CETS 225 took five years — the fastest transformation of the three; the enabling condition was the reverse incentive from EU AI Act legislative pressure on the CoE convention structure.

For F2, after the OECD AI Principles supplementary guidance incorporates civic-action-receipts in 2029–2031, could they further transform into treaty obligations within 5–10 years? This article's position: the transformation path depends on (a) whether hard law governing civic-action-receipt engineering is established within the EU (whether eIDAS 2.0 and the AI Act introduce mandatory civic receipt provisions), (b) the Conference of Parties' political will regarding a CETS 225 supplementary protocol, and (c) the United States' status with respect to CETS 225 following administrative transitions. Conditions (a) and (b) are observable during 2026–2028 (EUDI Wallet mandatory rollout) and (b) during 2027–2030 (Drafting Committee work), and (c) following the 2024–2028 US administrative transition. This article makes no timeline prediction for this transformation but notes its structural possibility.

### § 7.6 Acknowledgement of China/Russia Non-Blocking Paths

The CETS 225 Conference of Parties does not require unanimous decisions — China and Russia, even if they join, cannot block the supplementary protocol; they are currently non-signatories with limited influence. Hague Apostille Convention: China acceded in 2023, Russia in 1992. The difficulty of the Hague extension falls on the procedural obstacle of "the fundamental threshold for treaty amendment" (not "Chinese-Russian obstruction") — China and Russia are not currently blocking actors within HCCH. Regarding specific cases of "Chinese obstruction": China has consistently advanced its cryptographic standards (SM2/SM3/SM4) within ISO/IEC JTC 1/SC 27; this does not obstruct the adoption of BBS+ and SD-JWT-VC in Western jurisdictions but does create functional incompatibility for receipts within China. CRPD (ratified by China) audit-trail requirements are partially implemented within China through the Personal Information Protection Law (PIPL, 2021),<sup>65</sup> but wallet-borne receipts are not the Chinese path. Adoption of civic receipts in authoritarian jurisdictions falls outside the predictable scope of SA4. This article adopts a three-component model: OECD track, parallel tracks, and authoritarian-jurisdiction externality.

---


## § 8. Process Tracing: Five Cross-Jurisdictional Cases

### § 8.1 Estonia X-Road / e-Residency: Two Decades of Preservation Practice

Estonia has operated X-Road since 2001 and e-Residency since 2014 — 25 and 12 years of operation respectively as of 2026.[^36] Following the 2007 cyberattack, the system was extended to a Luxembourg data embassy; it has undergone multiple generations of cryptographic parameter upgrades; and transaction logs are retained by RIA under Estonian data retention law. X-Road provides single-case evidence for the engineering feasibility of SA2's 30-year retention floor, though the specific timeline of SHA function migration has not been publicly verified — this article adopts a summary characterisation. Lessons: QPSP should not be concentrated in a single jurisdiction; ISO 14721 OAIS requirements for representation information migration are validated by Estonian practice; the data embassy model can serve as an engineering reference for cross-border redundancy.

### § 8.2 Nordic BankID: Dual-Track Preservation and Death-of-Holder Remediation

The five-country Nordic BankID networks — Norway BankID, Sweden BankID, Denmark MitID, Finland Trust Network, and Iceland Auðkenni — interface with eIDAS through the NOBID Consortium.[^38] Norwegian BankID's handling of deceased cardholders: family members must provide a death certificate, *skifteattest*, and existing identification data; the consortium revokes the existing credential and issues a new one. BankID does not retain individual transaction content, only authentication/signature event metadata. Lessons: "Third-party notarial service without directly holding the private key" can still provide audit trail reconstruction in death scenarios; however, QPSP preservation obligations must be synchronised with relying-party obligations, or the 30-year floor will be constrained by the shortest tier.

### § 8.3 EUDI POTENTIAL UC6 Mandates Pilot

The EUDI Wallet POTENTIAL Consortium Use Case 6 (Mandates) September 2025 mid-term technical report shows that in the 2025 Q3 pilot, only 3 of 11 wallet vendors completed BBS+ interoperability testing; 5 of 11 wallets still operated OpenID4VP draft-23 in non-automated mode, with verifiers pre-publishing supported-format lists and holders making manual selections.[^23] Lessons: The ARF multi-profile vs. multi-tenant delegated key custody distinction established in F1 §4 remains unresolved in 2025–2026; the mixed strategy under the EUDI framework in practice relies on OpenID4VP rather than DIF Presentation Exchange (the latter is an informative reference in ARF). This case provides a concrete baseline for the engineering reality of SA1's three-decision-point verifier policy.

### § 8.4 India Aadhaar UIDAI Retention Policy

Aadhaar has operated from 2010 to 2026 — sixteen years. UIDAI applies a tiered retention policy of six months active retention plus two years archival for authentication logs.[^30] This falls far short of this article's 30-year floor — but India, while a CRPD signatory, filed declarations excluding certain provisions; and the DPDP Act prioritises the right to erasure over long-term retention. Aadhaar constitutes a concrete case of "the 30-year floor not necessarily holding in non-OECD jurisdictions." Lessons: The scope of SA2's 30-year floor must be narrowed to "OECD and CRPD states parties with no relevant reservation"; non-OECD parallel-track design must accommodate short-limitation jurisdictions.

### § 8.5 The *Toeslagenaffaire* and the 22-Year Latency Window

The Netherlands' retrospective child benefit case (2013–2019) constitutes the key inductive evidence for SA2's 30-year floor third window (post-hoc retrospective period). The Dutch parliamentary inquiry final report (Tweede Kamer, December 2020) shows that administrative errors accumulated across 2013–2019, did not enter public deliberation until 2018, and some families remained without full compensation as of 2026.[^28] The specific figure "22-year latency window" (8 years ex-post detection + 14-year remediation long tail) is the present author's estimate — no Dutch official source published this aggregated figure. Three lessons: first, the post-hoc retrospective period is determined by the longest among four chains (administrative process, judicial remedy, legislative response, political will), and statutory limitation periods are not the sole determinant; second, the accessibility differential between pre-event and post-event audit trails is enormous — receipts engineering must model the workload pattern of "not needed in advance, suddenly needed after the fact"; third, the design objective of the 30-year floor is to enable full resolution of ≥ 95% of *Toeslagenaffaire*-scale events, not to set the floor on any single case's "long enough." Engineering implication for F2 SA2: `audit_release_policy` must permit strict access control in the "pre-event" state (to avoid use as personal surveillance infrastructure) while allowing court-order-triggered access in the "post-event" state (to avoid remedy proceedings being blocked by access denial).

### § 8.6 Process Tracing: Synthesis

| Case | Sub-arg | Evidential significance for F2 primitives | Contribution to strengthened thesis revision |
|---|---|---|---|
| Estonia X-Road / e-Residency | SA2 | Single-case evidence for 30-year preservation feasibility | Multi-generation cryptographic parameter upgrades + cross-border data embassy redundancy |
| Nordic BankID | SA2 + SA4 | Mature reference for dual-track preservation and cross-border mutual recognition | "Third-party notarial service without holding private key" engineering model |
| EUDI POTENTIAL UC6 | SA1 + SA2 | Mid-term technical report confirms multi-tenant gap unresolved | Mixed strategy engineering reality: relying on OpenID4VP, not PE |
| Aadhaar UIDAI | SA2 + SA4 | Six-month active + two-year archival short-retention practice | 30-year floor not universal in non-OECD jurisdictions; narrowed to "OECD + CRPD states parties with no relevant reservation" |
| Taiwan TW DIW (warning) | SA2 + SA3 | Engineering preparation requirements before LLM-agent phase | Specific Taiwan recommendation: DIW v1.0 spec should explicitly incorporate QPSP interface clauses + 30-year preservation commitment |
| *Toeslagenaffaire* | SA2 + SA3 | 22-year latency window (author's estimate) constitutes post-hoc retrospective floor | `audit_release_policy` must distinguish pre-event strict / post-event court-order-reachable |

### § 8.7 Taiwan TW DIW Warning

Taiwan's Digital Identity Wallet (TW DIW) has been in pilot since 2025, with the trust list placed on a public blockchain.[^66] If DIW enters the LLM-agent phase without civic receipts engineering in place, the supported-decision evidentiary chain cannot be reconstructed within the 30-year civil litigation window — Taiwan's Civil Code §125 general limitation period of 15 years combined with the guardianship-declaration dispute window can reach a total of 30 years, exceeding current receipts engineering retention planning. This article's specific recommendation for TW DIW: the DIW v1.0 specification should explicitly incorporate QPSP interface clauses and a 30-year preservation commitment. The characterisation of the Taiwan trust list as "placed on a public blockchain" is maintained; Bhutan NDI uses an EVM-compatible private chain (not direct write to Ethereum L1).[^67]

---

## § 9. Counterfactual Stress Tests: Five CFs, Likelihood × Impact Matrix, and Three Critical-Path Mitigations

### § 9.1 Methodological Integration with F1 §9

F1 §9 applies likelihood-by-mechanism reasoning to the four CFs of FTLA-Agent governance — for each CF, beyond asking "what if it occurs," it also asks "under what mechanism chain would it occur," "whether the preconditions of that mechanism chain are already partially satisfied," and "whether the overall argument would still hold even if it did occur." This chapter strictly follows the same methodology for the five CFs at the cryptographic substrate tier of F2. Three principles are maintained: no catastrophism (possible events must not be smuggled in as inevitable); no illusion-of-mitigation (mitigation designs must not be presented too optimistically); strict distinction between working thesis (without mitigations) and strengthened thesis (with three critical-path mitigations).

### § 9.2 CF1 — BBS+ Standardisation Delayed to 2029

The W3C BBS Cryptosuite WG delays its scheduled 2026 Q4 Recommendation by three years to 2029. The delay can be decomposed into three mechanism chains: the interoperability test failure chain (BLS12-381 incompatibility with hardware token batch verification); the IPR disclosure chain (unpredictable W3C PAG processing timeline for IBM 2004–2009 group signature patent family and Microsoft anonymous credential applications); and the policy dispute chain (EU, US, and Japan diverge on unlinkability strength assessment). The first chain has partially materialised — as of mid-2025, the issue regarding BLS12-381 hardware compatibility in the W3C BBS Cryptosuite WG public issue tracker remained open. Combined trigger probability: medium.

Impact chain: SA1 baseline falls back to SD-JWT-VC-only, the advanced unlinkability tier disappears; SA2's dual-track advanced unlinkability fails (salted-hash disclosure in SD-JWT-VC remains statistically side-channel-exploitable across multiple verifications); SA3 court admissibility "accuracy of process" counter-argument strength increases 30–50%; SA4 cross-border recognition delayed five years. Mitigation design: F2 thesis explicitly states "BBS+ is a high-order objective, not a baseline condition"; adopts IETF JOSE/COSE independent RFC pathway for BBS as a W3C pathway fallback; adopts a dual-reference engineering compromise (W3C WD + IETF Internet-Draft) for high-unlinkability scenarios such as healthcare and long-term care. Residual risk: BBS+ still has a 15–20% probability of delay past 2031; F2 thesis adopts a conditional structure for this (IF baseline SD-JWT-VC OR BBS Recommendation by 2029, THEN …).

### § 9.3 CF2 — Collective Failure of Civic Receipts for Persons with Dementia

In 2030, Taiwan, the EU, and Japan simultaneously discover that civic receipts are exhibiting substituted-regime degradation in dementia scenarios. WHO 2024 estimates global dementia population at approximately 78 million by 2030, with dementia prevalence among those aged 65+ in the three jurisdictions of approximately 7–10% by 2030 and a combined dementia population of approximately 12–15 million.[^31] Even taking the conservative value of a "30% degradation rate" (a hypothetical figure requiring pilot study validation), the scale of substituted civic receipts is approximately ≥ 3.5 million persons. Three mechanism chains: the cognitive endorsement engineering gap (wallet UX generally presupposes full adult cognitive capacity); normalisation of care-worker proxy signing (foreign caregivers routinely operate wallets for efficiency; holder-side biometric authentication can be physically guided through for persons with dementia, producing a "physical holder but cognitive non-holder" condition); and the legal guardian coverage gap (Taiwan's 2019 guardianship reform moved toward supported decision-making, but "assisted declaration + agreed guardianship" coverage remained below 5% of the dementia population in 2024). All three mechanism chains were partially manifested by 2026; trigger probability: medium-high (50–65%).[^68]

Impact chain: SA2 holder-controlled presupposition fails — cognitive holder ≠ physical holder; third-party notarial services, to avoid liability, will require proof of holder cognitive endorsement, which is practically impossible; notarial services degrade to substituted-regime arbiters requiring joint holder + supporter co-signing; SA2's holder-sovereign position collapses. Mitigation design: threshold signatures (holder + legal guardian + medical institution representative, t-of-n signing); court-order backup (following dementia declaration, wallet must have court-approved guardian/assistant co-signing anchor before receipts are generated); court-supervised decryption protocol; mandatory cognitive endorsement engineering (EUDI ARF subsequent versions to require micro-consent confirmation delay and mandatory supporter co-signing for accounts of persons declared to have dementia). Residual risk: threshold signatures carry high UX deployment cost at scale for incapacity populations; court-order anchors are accessibility-limited for rural and low-income elderly persons.

#### § 9.3.1 CRPD §12 Reverse Application

Following CF2 triggering, CRPD GC1 §29 audit trail requirements will be reverse-applied by the Committee as evidence of §12 violation. F2 working thesis holds that civic receipts are the cryptographic vehicle for audit trails; following CF2 triggering, §29 would be reverse-interpreted — the CRPD Committee would invoke §29 to charge that civic receipts engineering failed to distinguish supported from substituted decisions, rendering civic receipts themselves evidence of Art 12 violation rather than proof of compliance. The normative foundation of SA2 is thereby inverted. Australia, New Zealand, Japan, and the EU all fall within CRPD oversight; the CRPD Committee's 2019 Concluding Observations on Australia have already raised individual complaint procedure comments on Art 12.[^69] Taiwan has not ratified CRPD but voluntarily bound itself through the Convention on the Rights of Persons with Disabilities Implementation Act (2014); the 2017 and 2022 international reviews of national reports have already issued concluding observations on Art 12. Following CF2 triggering, Taiwan faces a factual violation within the scope of voluntary binding force. This article explicitly identifies at §11: the weakest link in F2 thesis's normative obligations under CRPD is this §29 reverse application; F2 strengthened thesis blocks this reverse application through three critical-path mitigations (threshold + court anchor + cognitive endorsement engineering), but F2 working thesis fails empirically under CF2 triggering.

### § 9.4 CF3 — Court Rejection of Holder-Controlled Receipts as Evidence

In 2028, the Taiwan High Court or a US federal circuit court rules that holder-controlled civic receipts do not satisfy the FRE 902(14) reliability-of-generating-system requirement and may only be admitted as supplementary evidence. The ruling's reasoning can be anticipated along three axes: the *Lorraine v. Markel* axis (holder-controlled systems offer no chain-of-custody guarantee when the holder controls the system); the *In re Vee Vinhnee* axis (holder-controlled systems cannot satisfy the requirement that the originality of records be independently auditable);[^70] and the Taiwan Supreme Court 110-Year Civil Judgment No. 1429 axis (requiring that the creation process, storage process, and freedom from unilateral alteration by the creator all be demonstrable — holder-controlled systems lose points on the third criterion).[^71] Trigger probability: medium (40–55%).

Impact chain: SA3 court admissibility collapses; SA4 cross-border recognition loses domestic legal foundation (US courts reject → US OECD mutual recognition negotiating position held in reserve → entire OECD track delayed); SA1 and SA2 engineering effort, even if perfect, cannot achieve admissibility in court. Mitigation design: mandatory routing through trusted preservation service (eIDAS post-amendment Chapter III §7 QPSP); mandatory third-party timestamping (IETF RFC 3161 TSP or RFC 5816 upgrade);[^72] chain-of-custody hash log (IETF RFC 8392 CWT or W3C VC v2.0 evidence mechanism); FRE 902(14) certification system (promoting wallet vendors or W3C to submit FRE 902(14) qualified record-generating system certifications for specific cryptosuite configurations, analogous to ISO/IEC 17025 laboratory accreditation). Residual risk: introducing third-party preservation service reverts to the SA2 holder vs. third-party tension; mandatory preservation service partially undermines the holder-controlled position. F2 thesis adopts a three-tier solution: daily receipts holder-controlled; litigation receipts holder + third-party jointly managed; dispute receipts third-party exclusively managed.

### § 9.5 CF4 — BRICS Collective Rejection of OECD AI Principles Pathway

In 2032, expanded BRICS (China, Russia, India, Brazil, South Africa, UAE, Iran, Egypt, Ethiopia, Saudi Arabia) collectively reject the OECD AI Principles 2024 update as the core of the global civic receipts mutual recognition pathway, instead promoting a BRICS-led alternative AI governance framework. Three mechanism chains: China's *Interim Measures for the Management of Generative AI Services* Art 4 extrapolation (government pre-review of issuer lists; cross-border verifiers required to register within China);[^73] BRICS Kazan Declaration 2024 and Rio 2025's three positions on "Global South subjectivity," "symmetric technology governance," and "rejection of unipolar technology standards";[^74] data sovereignty legislation wave (India DPDP 2023, Indonesia PDP 2022, Brazil LGPD 2018, Russia 152-FZ 2022 amendment). Collective rejection probability: medium; partial rejection probability: high.

Impact chain: SA4 G_recognition^A pathway fragments; all three soft-law tracks affected; global civic receipts splits into two non-interoperable networks — the OECD track and the BRICS-AAGF track. Mitigation design: APEC CBPR as an intermediate bridge (China, Vietnam, Taiwan, Korea, Japan, the Philippines, Mexico, Canada, US, Chile, New Zealand, and Australia are all in APEC); ITU AI for Good as non-aligned dialogue (193 ITU members, no OECD/BRICS axis presupposition);[^75] Hague Private International Law maintaining neutrality (91 members including China, Russia, India, Brazil — focused on private law); Taiwan's cross-strait track (civil intermediaries, Hong Kong-Macao cross-track intermediation, limited application of the 2010 Cross-Strait Judicial Assistance Agreement framework).

#### § 9.5.1 Special Impact on Taiwan

Following CF4 triggering, cross-strait mutual recognition of civic receipts for rights claims structurally ruptures, with significant engineering impacts on three Taiwan-specific scenarios.

**First scenario — protection of rights of mainland-born spouses.** Civic receipts acquired during long-term care benefit eligibility periods, national health insurance entitlements, and domestic violence shelter records while residing in Taiwan under family reunion provisions, if used to claim rights or inheritance upon return to mainland China with no cross-strait mutual recognition, will have no evidentiary force in mainland courts. Conversely, civic receipts from pension insurance, occupational injury recognition, and similar entitlements accumulated during mainland work periods face the same rupture when processed in Taiwan for capacity assessment, assisted declaration, or estate inheritance. The current Cross-Strait People Relations Act §7 adopts a document authentication model for mainland notarial documents, presupposing paper-based public instruments and providing no interface for structured receipts; following CF4 triggering, receipts must be downgraded to paper-based or notarially certified documents for cross-track use, and all engineering value of 30-year preservation and cryptographic signatures is eliminated in cross-track scenarios.

**Second scenario — civic receipts arising from long-term mainland residence of Taiwan businesspersons.** Receipts generated within China from medical care (including long-term care, chronic disease management, and occupational injury), real estate transactions, and labour arbitration cannot be verified against Taiwan's wallet system if China deploys a wallet system (PIPL audit trail pathway), and vice versa. Engineering impact: family members in Taiwan processing incapacity declarations or inheritance must individually authenticate and certify-translate mainland receipts, increasing expert witness costs and extending litigation timelines. Impact on SA2's 30-year preservation window: a Taiwan businessperson career (typically 20–40 years of cross-border activity) falls precisely within the core preservation window of receipts design; following CF4 triggering, the cross-track admissibility of this window is substantively lost.

**Third scenario — cross-strait investor rights protection.** Board resolution receipts and AI-assisted investment deliberation records generated in mainland China by Taiwan investors establishing operations or conducting M&A, when invoked in arbitration or judicial proceedings requiring cross-track use, face two dilemmas: first, mainland arbitral institutions (e.g., CIETAC) have no precedent for assessing the reliability of holder-controlled receipts; second, Taiwan's recognition of functional equivalence of mainland PIPL audit trails has not been clarified. The dispute resolution mechanism in the *Cross-Strait Investment Protection and Promotion Agreement* (2012) defaults to paper-based documentary evidence and provides no interface for wallet-borne structured receipts.

The engineering impacts across all three scenarios converge on the same conclusion: CF4's impact on Taiwan is characterised as "structural rupture in the cross-strait track" — qualitatively beyond the level of "delayed cross-border mutual recognition timeline." SA4's mitigation design (APEC CBPR bridge, Hague PIL neutral track) can only provide downgraded interoperability for this impact, not equivalent mutual recognition. This article explicitly states at §11 and Chapter 12: F2 strengthened thesis's commitments regarding Taiwan's cross-strait rights claim scenarios are weaker than its commitments regarding OECD intra-block mutual recognition scenarios; working thesis fails empirically under CF4 in Taiwan scenarios. The gap between working thesis and strengthened thesis survival in Taiwan scenarios is more pronounced along the CF4 axis than along any of the other four CF axes — this is the most concrete policy implication of F2's two-tier thesis structure (working/strengthened) for Taiwan.

### § 9.6 CF5 — Quantum Computing Threat to BBS+ and SD-JWT

In 2035, NIST issues updated guidance requiring PQC migration for all long-lived government-use signature schemes by 2040. NIST's position is extrapolated from NSA CNSA 2.0 (2022, 2024 update) timelines for "2030–2035 national security system PQC migration."[^76][^77] Technical background: NIST FIPS 203 (ML-KEM, Kyber), FIPS 204 (ML-DSA, Dilithium), and FIPS 205 (SLH-DSA, SPHINCS+) were standardised in August 2024.[^78][^79][^80] Mosca's theorem: if data retention period + PQC migration timeline > the year of appearance of the first cryptographically relevant quantum computer, then the data is already insecure.[^81] For F2: 30-year civic receipts retention + 5–10 years PQC migration = 35–40 years. If a cryptographically relevant quantum computer appears in 2035–2045 (mainstream estimated range, though scholarly estimates diverge from 2030 to 2050), civic receipts generated in 2026–2035 will be insecurely verifiable in 2045–2055. Trigger probability: medium-high.

Impact chain: all three SA1 cryptosuite families require replacement (SD-JWT's ECDSA/Ed25519/RSA, BBS+'s BLS12-381 pairing, ZK-SNARK's Groth16 all rest on discrete log or factoring assumptions, insecure under Shor's algorithm); SA2 long-term preservation of legacy receipts requires active re-signing and re-anchoring under holder-controlled setups following PQC migration, further degrading holder control; SA3 court admissibility reliability requirements shift from single-cryptosuite reliability to crypto-agility process reliability; SA4 cross-border PQC migration asymmetry (OECD aligned with NIST FIPS; BRICS may adopt Russian GOST or Chinese SM post-PQC variants). Mitigation design: crypto-agility by design (W3C VC v2.0 already provides a cryptosuite abstraction layer; IETF PQUIP WG 2024–2025 hybrid signing design drafts);[^82] alignment with NIST IR 8547 PQC migration timeline (2024–2030 hybrid signing trial; 2030–2035 mainstream switch; 2035–2040 legacy cleanup);[^83] hybrid signing during transition (each receipt simultaneously carries both legacy Ed25519 + PQC ML-DSA signatures, with receipt size increasing 2–3× during the hybrid period); automated archive re-anchoring (re-anchoring receipt content with the latest PQC hash function every 5–7 years). Residual risk: hybrid signing engineering complexity significantly elevated; archive re-anchoring requires holder trust in archive operator PQC engineering capability; jurisdictions with smaller PQC engineering communities (Taiwan, Brazil, India) face access limitations for re-anchoring services.

### § 9.7 Likelihood × Impact Matrix

| CF | Scenario | Likelihood | Impact | Primary impacted primitive | Cascading impact |
|----|------|------------|--------|------------|--------------|
| CF1 | BBS+ standardisation delayed to 2029 | Medium-low (40–50%) | Medium | SA1 | SA2, SA3, SA4 |
| CF2 | Collective failure of receipts for persons with dementia | Medium-high (50–65%) | High | SA2 | SA3 |
| CF3 | Court rejection of holder-controlled receipts | Medium (40–55%) | High | SA3 | SA4, SA1, SA2 |
| CF4 | BRICS rejection of OECD pathway | Medium (collective) / High (partial) | Medium | SA4 | — |
| CF5 | Quantum threat to cryptosuite | Medium-high (2035 trigger) | Medium | SA1 | SA2, SA3, SA4 |

Matrix interpretation: highest-priority risks are CF2 and CF3 (both high impact); high-probability medium risk is CF5; medium-probability medium risks are CF1 and CF4. Among the five CFs: no (high × high) combination; no (low × low) combination. Under the first-order independence assumption for the worst-case conjunctive scenario (all five CFs triggered), the combined probability is < 5%; accounting for the conditional dependence of CF1–CF3 and the mutual reinforcement of the CF4–CF5 standards split, the realistic probability is 5–10%.

### § 9.8 Working Thesis vs. Strengthened Thesis: Survival Assessment

Survival assessment of working thesis and strengthened thesis for various numbers of CF triggers:

| Number of CFs triggered | Working thesis retention | Revision magnitude |
|-----------|---------------------|----------|
| 0 | Fully retained | None |
| 1 (any) | Primarily retained | Single primitive conditional |
| 2 | Partially retained | Two primitives conditional + timeline extrapolation |
| 3 | Structural revision | Thesis statement substantially rewritten |
| 4–5 | Failure | Thesis fails; requires complete rewrite |

| Number of CFs triggered | Strengthened thesis retention | Revision magnitude |
|-----------|--------------------------|----------|
| 0–2 | Fully retained | None |
| 3 | Primarily retained | Timeline extrapolation 5–10 years |
| 4 | Structurally retained | Second and third segments extrapolated ≥ 10 years |
| 5 | Partially retained | Third segment (global mutual recognition) fails; first and second segments retained |

The comparison shows that "working thesis + three critical-path mitigations" has a substantially higher survival rate than "working thesis alone." F2's main text adopts the strengthened thesis as its formal position; working thesis serves only as the argumentative starting point. The conditional dependence between the mechanism chains of CF1 (BBS+ delay) and CF5 (PQC threat) will be partially mitigated through the IETF JOSE/COSE independent RFC pathway for BBS (as a W3C pathway fallback); the mutual reinforcement between CF4 (BRICS alignment) and CF5 (PQC migration) standards fragmentation is the subject of §11 open question O41 (Bayesian network analysis).

### § 9.9 Three Critical-Path Mitigations

Ranked by critical path from the mitigation designs across five CFs:

**Mitigation 1 (First priority): crypto-agility by design.** Provides mitigation for both CF1 (BBS+ delay) and CF5 (PQC threat); foundations already exist in W3C VC v2.0's securingMechanism abstraction layer and IETF PQUIP WG drafts; F2 thesis should upgrade this to a first-order engineering requirement. Estimated timeline: 2026–2028 normative integration; 2028–2030 engineering implementation.

**Mitigation 2 (Second priority): third-party trusted preservation service integration.** Provides mitigation for both CF2 (persons with dementia) and CF3 (court rejection); normative basis in eIDAS post-amendment Chapter III §7 QPSP and IETF RFC 3161/5816 TSP; design key — preserve holder-controlled as the primary default, with third-party preservation as a backup, not the primary track. Estimated timeline: 2026–2028 EU internal integration; 2028–2030 OECD rollout.

**Mitigation 3 (Third priority): G_recognition^A soft-law multi-track redundancy.** Provides mitigation for CF4 (BRICS alignment) and indirectly mitigates the cross-border impacts of CF1 and CF3; four tracks run in parallel — OECD AI Principles, APEC CBPR, Hague e-Apostille extension, ITU AI for Good; design key — not dependent on any single track achieving global recognition; using a four-track combination to hedge political risk. Estimated timeline: 2026–2032 minimum interface coordination; 2032–2040 concrete mutual recognition operation.

The conjunction of three mitigations constitutes F2 strengthened thesis. F2 working thesis (without mitigations) fails empirically under either CF2 or CF5 triggered alone. F2 strengthened thesis (with three critical-path mitigations) retains core functionality under the extreme scenario of all five CFs triggered: the third segment (global mutual recognition) fails; the second segment (OECD intra-block mutual recognition) is partially retained; the first segment (single-primitive cryptographic vehicle) is fully retained.

---

## § 10. Forward-Link Integration and Preview of Article 18 (F3)

### § 10.1 Series Integration Map

Article 8 FTLA four tiers → Article 14 Q10a/Q10b → Article 15 §6.2 three presuppositions → Article 16 §5.4 DeliberationRecord + §7.3.1 envelope → F2 four primitives instantiated. F2's specific responses to forward-links are as follows.

To Article 8: the FTLA four-tier governance framework is further disaggregated in this article's §7 at the G_recognition^A tier into three segments (5/10/15 years). OECD AI Principles supplementary guidelines, CETS 225 supplementary protocols, and Hague PIL e-Apostille extension constitute the concrete vehicles of the soft-law tier; non-OECD parallel tracks (APEC CBPR, AU, India DEPA, Brazil LGPD, Indonesia PDP, GCC, ASEAN DEFA) constitute the acknowledgement structure for OECD external coverage gaps.

To Article 14: Q10a (cryptographic attribution in authority transfer) is borne by this article's SA1 and SA3. V_receipt conditions C1 and C2 constitute the cryptographic formal expression of Q10a; F1 §7.3.1's enabling envelope is carried in this article's §3.1 schema through the `agent_delegation_proof` and `agent_delegation_capability_hash` fields. Q10b (cross-border multi-party accountability allocation) is borne by SA3 and SA4: SA3 provides the interface pathway for receipts entering litigation procedures in each jurisdiction (FRE 901(b)(9) / eIDAS §§7–8 / Electronic Signatures Act §4); SA4 provides the phased soft-law vehicle for cross-border recognition. This article's positioning: SA3 provides supplementary evidence-side reinforcement for Q10b, not a complete resolution; coercion defence and psychological coercion belong to the legal tier, not the cryptographic tier.

To Article 15: the §6.2 wallet three presuppositions (individual ownership + individual identification + individual private key) are spectrally broadened in this article's SA2 dual-track design and SA1 schema. Individual ownership is relaxed by `preservation_layer`; individual identification is carried by the DID extension for `coexistentSubjects` (noting that W3C DID v1.0 Rec 2022-07-19 core attributes are the five fields of id / controller / authentication / verificationMethod / service,[^84] and `coexistentSubjects` is an extension proposal not in v1.0, requiring DID v1.1 or method-specific extension); individual private key is carried by the dual-signature structure of `chooser_signature` and `agent_delegation_capability_hash`.

To Article 16: F1 §5.4's 11-field-group DeliberationRecord is the core inheritance of this article's §3.1 14-field-group schema (with 23 leaf fields); F1 §7.3.1's enabling envelope is the source of three newly added field groups; F1 §7.7's five-party liability allocation (issuer 25 / verifier 25 / wallet provider 15 / agent provider 25 / model provider 10) is mapped through `jurisdictional_profile` and `recognition_chain` in this article's SA3 and SA4; F1 §3's 5×3 matrix cells (9 ✓ / 4 △ / 2 ✗) are mapped to SA1–SA4 cells in this article's §3.2 (RT-ℬ ✗ and AA-ℬ ✗ two cells are Z₃-intrinsic unreachable; Theorem T2).

### § 10.2 Preview of Article 18 (F3)

F3 will address three issues left unresolved by this article. First, the SDO standardisation pathway for `AgentDelegationProof2026` — this article's schema presupposes this proof type already exists; in reality W3C VC v2.0 and DIF have not yet standardised it, and this is the core of F3 sub-argument 1. Second, the formal semantics of the SA4 → SA1 feedback loop (a lattice over `(cryptosuite, jurisdiction)` pairs) — this article treats this as a "design-phase constraint" deferred for future work; F3 must provide a formal definition. Third, the lawful basis for receipt processing under the tripartite AI Act + GDPR + eIDAS framework — the three candidate pathways under GDPR Art 6 (contract, legal obligation, legitimate interests) have not been specifically selected in this article; F3 must address this at the legal-tier sub-argument level.

---

## § 11. Honesty Boundary and Open Problems

### § 11.1 Honesty Boundary List

This article must explicitly acknowledge the following boundaries. First, the BBS Cryptosuite remained a Candidate Recommendation Draft (CRD) as of 2026-05, not a Recommendation; the W3C VC WG's 2025-10 charter renewal language on the Recommendation timeline is "best-effort." This article's "BBS+ as high-order" stratification is conditionally valid — the condition being that W3C BBS Cryptosuite achieves Recommendation status; if this has not occurred by 2027 Q1, the baseline reverts to SD-JWT-VC only, and the BBS+ stratum is deferred to 2028. Second, FRE 902(14) self-authentication is a non-primary route for holder-controlled receipts; this article adopts the heavier FRE 901(b)(9) process/system description + accuracy proof route. CJEU Case C-300/22 cannot be verified; this article withdraws that citation from the main text and constrains CJEU citations to *SCHUFA* C-634/21. Third, the 30-year floor is an "analytical recommendation figure," not a "normative hard constraint"; the normative floor should be derived from eIDAS implementing acts or domestic law. The 30-year floor is not universal outside the OECD (India DPDP, Brazil LGPD, Indonesia PDP, Aadhaar UIDAI short retention policies). Fourth, cross-border mutual recognition soft-law tiers have no binding force; OECD external coverage gaps are "acknowledged," not "predicted." Fifth, CRPD §29 audit trail obligations may be reverse-applied by the CRPD Committee as evidence of §12 violation following CF2 triggering; F2 strengthened thesis blocks this reverse application through three critical-path mitigations, but working thesis fails empirically under CF2 triggering. Sixth, the cryptographic triple (chooser_signature, audit-by-design, revocation_endpoint) does not resolve all attribution problems; legal institutions such as coercion defence, capacity assessment, and agreed guardianship remain indispensable procedural safeguards. Seventh, the Apostille public/private document distinction constitutes a gap in cross-border recognition; the question of whether civic receipts qualify as public documents requires supplementary argument. Eighth, Estonia X-Road's specific SHA function migration timeline has not been publicly verified; this article adopts a summary characterisation. Ninth, the "30% dementia degradation rate" is a hypothetical figure requiring pilot study validation. Tenth, *Mata v. Avianca* is a negative precedent / counter-example, not a legitimate template.

### § 11.2 Forty-One Open Problems (O1–O41)

**Formal skeleton tier**: O1 formal semantics of the SA4 → SA1 feedback loop critical path (lattice over `(cryptosuite, jurisdiction)` pairs); O2 SDO mechanism design for `AcceptedSuites(τ)` temporal evolution rules; O3 non-OECD jurisdiction receipt mutual recognition interface points (India DPDP / Brazil LGPD / Indonesia PDP); O4 `coexistentSubjects` and DID v1.0 splice (requires DID v1.1 or method spec); O5 SDO standardisation pathway for `AgentDelegationProof2026` (F3 sub-argument 1 core); O6 lawful basis for receipt processing under AI Act + GDPR + eIDAS tripartite framework (four GDPR Art 6 pathways).

**Cryptographic tier**: O7 tension between PQC migration timeline and 30-year preservation (W3C VC WG 2027 discussion launch vs. receipts still requiring verification in 2055); O8 PQC alternative for BBS+ (lattice-based unlinkable signatures; follow-on work from Bootle et al. 2024); O9 hardware-backed unlinkability (Secure Enclave / StrongBox BLS12-381 native support; ARM TrustZone BBS+ prover); O10 conformance testing for automated verifier policy negotiation (EWC Phase 2, 2026 Q3).

**Preservation tier**: O11 specific timeline for PQC transition and compulsory wallet upgrade obligations (at least one transition mandatory within 30 years); O12 engineering cost of threshold signatures (GG18, FROST) in production (trustee communication + UX); O13 QPSP bankruptcy handling + cross-border succession under eIDAS Art 24 termination plan; O14 DAO / multi-person joint-holding scenarios (are trustees DAO members or the DAO itself?); O15 engineering downgrade pathway for jurisdictions with mandatory domestic storage laws (China PIPL / Russia 152-FZ / Iran); O16 impact of AI-assisted supported decision-making on audit trails (whether LLM internal state / CoT needs preservation); O17 continuity of audit trails for minor wallet holders through capacity transitions (reaching adulthood); O18 Hague Convention 2000 on cross-border protection of incapable adults (as of 2025, only 15 states parties).

**Court admissibility**: O19 Korean Constitutional Court / Supreme Court precedent on e-government evidentiary force; O20 Singapore Electronic Transactions Act 2010 + Cybersecurity Act 2018 interface (bridging to e-APP); O21 CJEU C-300/22 (2024) case number verification (if unconfirmable, withdraw citation — this article has adopted this treatment); O22 Taiwan Executive Yuan 2026 amendment bill final text (requires re-verification before final draft); O23 most recent list of e-APP contracting states (2024 Berlin Working Group 36-country figure pending verification); O24 normative chapter of EUDI Wallet ARF audit trail profile; O25 follow-on appeals and federal circuit rulings in *Mata v. Avianca*; O26 full text verification of Taiwan Supreme Court cases 109-Tai-Shang-1716 / 110-Tai-Shang-1525 / 110-Tai-Shang-1429.

**Cross-border mutual recognition**: O27 mobile-money-based receipt structures in the AU (M-Pesa, MTN MoMo); O28 India DEPA consent artefact and W3C VC schema mapping; O29 ASEAN DEFA wallet mutual recognition trust list design (no single superior regulator); O30 GCC closed-system and OECD open-system interface; O31 Latin American CAF / MERCOSUR / Pacific Alliance pathway differences; O32 CIS / EAEU framework digital ID agreements (too many variables post-Russia-Ukraine war); O33 recognition of functional equivalence in authoritarian jurisdictions (whether China PIPL audit trails satisfy foreign court standards); O34 cross-border recognition of receipts in climate displacement and migration scenarios (stateless status); O35 multi-lateral recognition agreement verifier revocation mechanisms; O36 self-authentication of AI-generated receipts (post-*Mata v. Avianca* judicial attitudes).

**Stress testing**: O37 PQC migration impact on verifiability of legacy archives under CF5 (formalisation of hash function replacement); O38 UX feasibility of threshold signatures for persons with dementia under CF2 (pilot study requirements); O39 FRE 902(14) certification system under CF3 (W3C / ISO type-level certification); O40 deepened analysis of CF4 special impact on Taiwan (detailed cases for mainland-spouse / Taiwan businessperson / cross-strait investor rights protection); O41 Bayesian network analysis of conjunctive correlation among five CFs.

### § 11.3 Verification Obligations for High-Risk Claims

This article's §§3–9 contain certain claims regarding specific years, case numbers, technical facts, and legislative versions that must be submitted to downstream subagent fact-checking for line-by-line verification. Specific list: "German BGB §197: 30-year limitation for retirement benefit claims confirmed by final judgment" (narrowed to "retirement benefits confirmed by final judgment" + SGB I §45 "undisclosed" extension clause); "30-year floor valid in OECD and CRPD states parties with no relevant reservation"; "*Toeslagenaffaire* 22-year latency window" (author's estimate; must be labelled as such); "Alzheimer's CDR ≥ 2 after which wallet private key capacity fails" (uses Clinical Dementia Rating rather than stage 4–5 characterisation); "Estonia X-Road multi-generation cryptographic parameter upgrades" (specific SHA migration timeline not publicly verified); "Design B violates CRPD §28" (based on this series' interpretation of §28; CRPD Committee has not explicitly ruled on this); "threshold signatures t=2/n=3 as recommended starting point" (open configuration space); "cross-jurisdictional QPSP redundancy as mitigation direction" (limited practical maturity); "Taiwan Executive Yuan 2026 amendment draft QPSP clause" (legislative version subject to change); "BankID death-of-holder handling procedure" (source level C; exceptional cases open); "Aadhaar 6-month active + 2-year archival policy" (UIDAI 2024–2025 latest policy requires re-verification); "ISO/IEC 27040 §7 storage media 5–10 year re-encryption" (recommendation, not mandatory); "e-APP contracting states reaching 36 in 2024" (HCCH figure requires verification); "*Mata v. Avianca* as negative precedent" (all citation locations must make this explicit); "'30% dementia degradation rate' as CF2 hypothetical figure" (requires pilot study). Fact-check subagents must apply one of three treatments to each of the above claims: source verification, conditional narrowing, or language weakening — direct retention of unconditional claims is not permitted.

---

## § 12. Conditional Academic Conclusions

### § 12.1 Conclusion One — Conditional Feasibility of Four-Primitive Instantiation

Civic receipts as the cryptographic vehicle for distinguishability between supported and substituted decisions in the conditionally delegable zone Z₂ can be standardised and instantiated within 5–10 years under five existing normative pathways: W3C VCDM v2.0 Recommendation (2025-05-15), IETF SD-JWT-VC draft-16 (2026-04-24), W3C BBS Cryptosuite CRD (2026-04-07), EUDI ARF 2025-12 iteration, and IRTF CFRG BBS Signatures draft-07. The formal vehicle for instantiation is the 14-field schema and the C1–C6 six-condition V_receipt function provided in §3. Conditional statement: if W3C BBS Cryptosuite achieves Recommendation status before 2027 Q1, Primitive 1 (mixed strategy) adopts a dual-tier structure of baseline SD-JWT-VC + advanced BBS+; otherwise the baseline reverts to SD-JWT-VC only, and the BBS+ tier is deferred to 2028.

### § 12.2 Conclusion Two — Phased Cross-Border Governance Timeline

Cross-border mutual recognition advances in three phases through the G_recognition^A soft-law tier: 5/10/15 years — OECD AI Principles supplementary guidelines 2029–2031; CETS 225 supplementary protocols 2030–2035; Hague PIL e-Apostille digital identity extension 2038–2041. The timeline constitutes a conditional estimate at order-of-magnitude precision, not an absolute statement. OECD external coverage gaps are acknowledged, not predicted; non-OECD parallel tracks (AU, APEC CBPR, India DEPA, Brazil LGPD, Indonesia PDP, GCC, ASEAN DEFA) are designed as "parallel" rather than "alternative." Taiwan-specific vehicle: APEC CBPR + Global CBPR Forum constitutes the primary track for cross-border civic receipts recognition accessible to Taiwan (as a non-OECD, non-CoE, non-EU jurisdiction); under CF4 triggering, structural rupture in the cross-strait track represents F2 thesis's weakest commitment to Taiwan scenarios.

### § 12.3 Conclusion Three — Strict Distinction Between Working Thesis and Strengthened Thesis

F2 working thesis (without mitigations) fails empirically under either CF2 (dementia receipts collective failure) or CF5 (PQC threat) triggered alone. F2 strengthened thesis — with three critical-path mitigations (crypto-agility by design; third-party trusted preservation service integration; G_recognition^A multi-track redundancy) — retains core functionality under the extreme scenario of all five CFs simultaneously triggered: the third segment (global mutual recognition) fails; the second segment (OECD intra-block mutual recognition) is partially retained; the first segment (single-primitive cryptographic vehicle) is fully retained. F2's main text adopts the strengthened thesis as its formal position; working thesis serves only as the argumentative starting point.

On fulfilment of CRPD Art 12 GC1 §29 audit trail obligations: F2 strengthened thesis can fulfil these obligations within Z₂ through the four primitives; fulfilment is not achievable beyond Z₂ into Z₃ (RT-ℬ ✗ and AA-ℬ ✗ cells), which constitutes the unreachable boundary of cryptographic primitives against ontological structures (Theorem T2). Any claim that civic-action-receipt can "resolve the fundamental accountability problem of AI agents" violates this boundary. Specific warning for Taiwan TW DIW before entering the LLM-agent phase: without civic receipts engineering in place, the supported-decision evidentiary chain cannot be reconstructed within the 30-year civil litigation window. Specific recommendation: DIW v1.0 specification should explicitly incorporate QPSP interface clauses and a 30-year preservation commitment.

### § 12.4 Response Position to the CRPD Committee

F2 strengthened thesis's commitment to fulfil CRPD General Comment No. 1 §29 audit trail obligations is limited to the Z₂ (conditionally delegable zone) scope and is conditional upon the three critical-path mitigations. In response to the risk of §29 being reverse-applied as §12 violation evidence following CF2 triggering, this article adopts the following position: civic receipts engineering's design objective is "support with the least restrictive means" (CRPD Art 12(3)), consistent with §28's prohibition on substitution, §29's audit trail obligation, and Art 12(4)'s safeguards against abuse. The strengthened thesis, through three engineering corrections — threshold signatures (Design C; recommended starting point: t=2/n=3); court-anchored backup (wallet requires court-approved guardian/assistant co-signing anchor before generating receipts following dementia declaration); and cognitive endorsement engineering (micro-consent confirmation delay; mandatory supporter co-signing) — advances §29 audit trails from "formal existence" to "substantive realisation of §12(3) supported decision-making." The CRPD Committee's 2019 Concluding Observations on Australia required that audit trails for supported decision-making regimes include independent review; F2 thesis holds that this independent review can be carried by V_receipt conditions C5 and C6 (`recognition_chain` providing cross-jurisdictional anchoring; `audit_release_policy` providing court-order-triggered access conditions).[^69] Taiwan has not ratified CRPD but is voluntarily bound through the Convention on the Rights of Persons with Disabilities Implementation Act; the 2017 and 2022 international reviews have already issued concluding observations on Art 12. F2's specific recommendations for TW DIW accordingly carry dual significance — evidence of §29 fulfilment for international review; and the engineering foundation for domestic supported decision-making legal reform (extension of the 2019 guardianship reform).

### § 12.5 Three Differentiated Recommendations for Engineering Community, Policy Researchers, and CRPD Scholars

This article's target audience consists of three groups: digital identity policy researchers, wallet/VC engineering community, and CRPD and constitutional scholars.

**For the engineering community**: SA1 mixed strategy engineering recommendation — issuer-side dual-issuance (simultaneously issuing both SD-JWT-VC baseline and BBS+ presentation-ready credential); verifier-side negotiation through OpenID4VP draft-23 `client_metadata.vp_formats_supported` and DIF Presentation Exchange v2.1 `submission_requirements` dual-pathway. The hardware key custody engineering gap in BBS+ can be partially mitigated through ARM TrustZone BBS+ prover (preliminary implementation by Bhattacharya et al. 2025 USENIX Security).[^17]

**For digital identity policy researchers**: SA4 G_recognition^A three-phase policy advancement recommendation — prioritise the OECD five-year pathway accelerator from the EUDI mandatory phase; APEC CBPR + Global CBPR Forum constitute the access track for non-OECD countries (including Taiwan); schema-level functional equivalence assessment for non-OECD parallel tracks (AU, India DEPA, Brazil LGPD, Indonesia PDP, GCC, ASEAN DEFA) awaits further public release of DEPA normative texts before re-evaluation; functional equivalence in authoritarian jurisdictions is the weakest link in both OECD and CRPD dual recognition, assigned to §11 open question O33.

**For CRPD and constitutional scholars**: SA2's 30-year floor is an "analytical recommendation figure"; normative floors should derive from eIDAS implementing acts or domestic law. The specific fulfilment pathway for CRPD §29 audit trail obligations at the cryptographic tier is not the only possible pathway; this article adopts the three critical-path mitigations as the strengthened thesis position. The risk of §29 reverse application as §12 violation evidence following CF2 triggering is the weakest link in F2 thesis's CRPD normative obligations; scholarly follow-up through CRPD Committee individual complaint procedures is required. Taiwan's Art 12 obligation fulfilment within the scope of voluntary binding under the Convention on the Rights of Persons with Disabilities Implementation Act, combined with the 2019 guardianship reform (agreed guardianship system), jointly constitutes the legal foundation for supported decision-making; F2's engineering corrections provide the concrete instantiation vehicle for this legal foundation.

This article concludes here. This article asserts no new conclusions in revisions to the final draft — all specific technical choices (cryptosuite, preservation design, `jurisdictional_profile` interface, `recognition_chain` construction) must be verified against the C1–C6 six-condition structure of §3's V_receipt function. F3 will address three issues: `AgentDelegationProof2026` SDO standardisation; formal semantics of the SA4 → SA1 feedback loop; and the lawful basis for receipt processing under AI Act + GDPR + eIDAS.

---

## References

[^1]: World Wide Web Consortium. *Verifiable Credentials Data Model v2.0*. W3C Recommendation, 15 May 2025. Source level: A.

[^2]: UN Committee on the Rights of Persons with Disabilities. *General Comment No. 1 on Article 12: Equal Recognition before the Law*. CRPD/C/GC/1, 19 May 2014, §§26–29. Source level: A.

[^3]: US Federal Rules of Evidence Rule 902(14), as amended December 1, 2017. Source level: A.

[^4]: Internet Engineering Task Force. *SD-JWT-based Verifiable Credentials (SD-JWT-VC)*. draft-ietf-oauth-sd-jwt-vc-16, 24 April 2026. Source level: A.

[^5]: Internet Engineering Task Force. *Selective Disclosure for JWTs (SD-JWT)*. RFC 9901, April 2025. Source level: A.

[^6]: World Wide Web Consortium. *Data Integrity BBS Cryptosuites v1.0*. W3C Candidate Recommendation Draft, 7 April 2026. Source level: A.

[^7]: Internet Research Task Force. *The BBS Signature Scheme* (draft-irtf-cfrg-bbs-signatures-07). CFRG, August 2025 (Last Call). Source level: A.

[^8]: W3C Verifiable Credentials Working Group. *Charter Renewal 2025–2027*. Approved 15 October 2025. Source level: A.

[^9]: European Commission, EUDI Wallet Cooperation Group. *Architecture and Reference Framework*. Cooperation Group iteration, 2 December 2025. Source level: A.

[^10]: Regulation (EU) 2024/1183 amending Regulation (EU) No 910/2014 (eIDAS 2.0). *OJ L*, 30 April 2024. Chapter III, §§7–8. Source level: A.

[^11]: Civic-proof series Article 16: *Civic AI Agent Delegation Limits*. 2026-05-10. Source level: A (series-internal).

[^12]: Civic-proof series Article 15: *Civic-Proof Inclusion Rights*. 2026-05-10, §6.2. Source level: A (series-internal).

[^13]: Civic-proof series Article 14: *Cross-Jurisdictional Redress Gap*. 2026-05-09. Source level: A (series-internal).

[^14]: Civic-proof series Article 8: *DNS vs. Identity Trust Roots — FTLA Four-Tier Governance*. 2026-05-06. Source level: A (series-internal).

[^15]: EDPB. *Statement 1/2024 on EUDI Wallet*. 2024. Source level: B.

[^17]: ARM TrustZone BBS+ prover: Bhattacharya et al. (2025). Preliminary implementation paper, USENIX Security 2025. Source level: C.

[^18]: Bootle, J. et al. "Lattice-Based Unlinkable Signatures." IACR ePrint 2024/378, 2024. Source level: B.

[^21]: OpenID Foundation. *OpenID for Verifiable Presentations* — draft 23, 22 October 2024. Source level: A.

[^22]: Decentralized Identity Foundation. *Presentation Exchange v2.1.1*. 17 April 2024. Source level: A.

[^23]: EUDI Wallet Consortium POTENTIAL. *Use Case 6 Mandates — Mid-Term Technical Report*. September 2025. Source level: A.

[^28]: Government of the Netherlands. *Toeslagenaffaire Parliamentary Inquiry Final Report*. Tweede Kamer, December 2020. Source level: B.

[^30]: UIDAI. *Annual Report 2023–2024*. Government of India, 2024. Source level: C.

[^31]: World Health Organization. *Dementia Fact Sheet*. WHO, 15 March 2024 update. Source level: A.

[^36]: Republic of Estonia, e-Residency Programme. *e-Residency Annual Report 2023–2024*. Source level: B.

[^38]: Norwegian BankID Consortium. *BankID Recovery Procedures for Deceased Account Holders*. BankID AS, 2023. Source level: C.

[^39]: *Daubert v. Merrell Dow Pharmaceuticals, Inc.*, 509 U.S. 579 (1993). Source level: A.

[^42]: *Lorraine v. Markel American Insurance Co.*, 241 F.R.D. 534 (D. Md. 2007). Source level: A.

[^46]: *Mata v. Avianca, Inc.*, 22-cv-1461 (S.D.N.Y. June 22, 2023). **Negative precedent.** Source level: A.

[^53]: OECD. *Recommendation of the Council on Artificial Intelligence (OECD/LEGAL/0449)*. Adopted 22 May 2019; amended 3 May 2024. Source level: A.

[^56]: Council of Europe. *Framework Convention on Artificial Intelligence and Human Rights, Democracy and the Rule of Law (CETS No. 225)*. Opened for signature 5 September 2024. Source level: A.

[^57]: African Union. *Continental AI Strategy*. AU Executive Council, July 2024. Source level: A.

[^58]: APEC. *Cross-Border Privacy Rules System: Policies, Rules and Guidelines*, updated 2022; Global CBPR Forum 2024 Declaration. Source level: A.

[^66]: Ministry of Digital Affairs, Republic of China (Taiwan). *Trust List and Public Blockchain Deployment Plan for TW DIW*. 2024–2025. Source level: C.

[^67]: Bhutan NDI / Druk Holding & Investments. *Technical Architecture: EVM-Compatible Private Chain Deployment and Cryptosuite Choices*. June 2024. Bhutan NDI uses an EVM-compatible private chain, not direct write to Ethereum L1. Source level: C.

[^68]: Taiwan Alzheimer's Disease Association. *2024 Annual Report*; Ministry of Health and Welfare. *Long-Term Care 2.0 Benefit Statistics 2024*. Source level: C.

[^69]: UN Committee on the Rights of Persons with Disabilities. *Concluding observations on the combined second and third periodic reports of Australia*. CRPD/C/AUS/CO/2-3, 2019. Source level: A.

[^70]: *In re Vee Vinhnee*, 336 B.R. 437 (9th Cir. BAP 2005). Source level: B.

[^71]: Supreme Court of the Republic of China (Taiwan). Civil Judgment, 110-Year No. 1429. Source level: C.

[^72]: Internet Engineering Task Force. *Time-Stamp Protocol (TSP)*. RFC 3161; *Update to RFC 3161 for Long-Term Validation*. RFC 5816. Source level: A.

[^73]: Cyberspace Administration of China. *Interim Measures for the Management of Generative AI Services*. Effective 15 August 2023, Art 4. Source level: A.

[^74]: BRICS. *Kazan Declaration*. XVI BRICS Summit, 23 October 2024; BRICS Rio Declaration (draft), July 2025. Source level: B.

[^75]: International Telecommunication Union. *AI for Good Global Summit 2024 Outcomes*. Geneva. Source level: C.

[^76]: National Security Agency. *Commercial National Security Algorithm Suite 2.0 (CNSA 2.0)*. September 2022; 2024 update. Source level: C.

[^77]: Mosca, M. "Cybersecurity in an Era with Quantum Computers: Will We Be Ready?" *IEEE Security & Privacy* 16(5), 2018, pp. 38–41. Source level: B.

[^78]: NIST. *FIPS 203: Module-Lattice-Based Key-Encapsulation Mechanism Standard*. 13 August 2024. Source level: A.

[^79]: NIST. *FIPS 204: Module-Lattice-Based Digital Signature Standard*. 13 August 2024. Source level: A.

[^80]: NIST. *FIPS 205: Stateless Hash-Based Digital Signature Standard*. 13 August 2024. Source level: A.

[^81]: Chen, L. et al. *NISTIR 8105: Report on Post-Quantum Cryptography*. NIST, 2016. Source level: A.

[^82]: IETF PQUIP Working Group. *Hybrid Signing Drafts*. 2024–2025. Source level: B.

[^83]: NIST. *NIST IR 8547 (Draft): Transition to Post-Quantum Cryptography Standards*. November 2024. Source level: B.

[^84]: World Wide Web Consortium. *Decentralized Identifiers (DIDs) v1.0*. W3C Recommendation, 19 July 2022. Source level: A.
