---
title: "The Institutional Limits of AI Agent Delegation in Civic Action: Conjunctive Necessary Conditions from the Tomasev Five-Element Delegation Structure and the Civic Proof Three-Element Conjunction"
description: "This article takes the Tomasev (2026) five-element delegation structure (authority transfer / responsibility transfer / accountability allocation / boundary setting / trust calibration, exhibiting a 2+3 architecture) and performs a conjunctive cross-product with the civic proof three-element conjunction ⟨𝒩, ℱ, ℬ⟩, yielding a 5×3 = 15-cell matrix of necessary conditions. Of these cells, 9 are conditionally satisfiable, 4 are probabilistically degradable, and 2 are structurally unsatisfiable (RT-ℬ ✗ and AA-ℬ ✗). On this basis, civic action is partitioned into three zones — delegable, conditionally delegable, and structurally non-delegable (θ₁ ≈ 0.2, θ₂ ≈ 0.7) — and a further distinction is drawn between permanently structurally non-delegable acts (determined by the philosophical foundations of ℬ) and contextually structurally non-delegable acts (determined by the joint failure of 𝒩 and ℱ). The hard normative constraint imposed by CRPD Art 12 General Comment No. 1 §26–29 — abolishing substituted decision-making — applies to the conditionally delegable zone; this is a binding normative floor, not a legal basis. The distinguishability of supported from substituted decision-making must be established simultaneously across three layers: the ex-ante deliberation layer, the ex-post reversibility layer, and the decision-trace layer. The EUDI Wallet ARF provides multi-profile rather than multi-tenant delegated key custody. CRPD flows back through ICCPR Art 26 and ICESCR Art 9 as a universal engineering obligation binding on all wallet users. Cross-jurisdictional accountability vacuums are further classified into three types — moral crumple zone, algorithmic opacity, and cross-jurisdictional diffusion — and the Article 14 fifth-category gap (Q10) is disaggregated into Q10a (cryptographic attribution of authority transfer) and Q10b (cross-border multi-party accountability allocation). The FTLA-Agent four-tier governance framework (G_industry / G_state / G_recognition / G_oversight) exhibits asymmetric thickness in 2026; a temporal phasing of 5 / 5–10 / 10–15 years is proposed, with a recommended five-party liability allocation of 25 / 25 / 15 / 25 / 10."
pubDate: 2026-05-10
tags: ["civic-proof", "AI-agent", "delegation", "Tomasev-five-elements", "civic-proof-conjunction-matrix", "Arendt", "Habermas", "Pettit", "moral-crumple-zone", "FTLA-Agent", "CRPD-Article-12", "supported-decision-making", "multi-tenant", "EUDI-Wallet", "cross-jurisdictional-liability"]
category: "Digital Identity and Democratic Theory"
aiModel: "Claude Opus 4.7"
aiPrompt: "When AI agents intervene in civic action (voting, association, petitioning, data access, cross-border rights claims, welfare collection), what are the conjunctive necessary conditions of Tomasev's five-element delegation structure × the civic proof three-element conjunction ⟨𝒩, ℱ, ℬ⟩? Which civic acts fall within the structurally non-delegable zone? What are the probabilistic degradation thresholds and stratified governance responses for three typical scenarios — cross-jurisdictional, shared device, and behavioural incapacity?"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-05-10-civic-ai-agent-delegation-limits"
aiGeneratedDate: 2026-05-10
humanReviewed: false
lang: "en"
---

## § 1. Introduction

The European Union's adoption of Regulation (EU) 2024/1183 (eIDAS 2.0) in 2024 advanced the digital identity wallet from an EU-level proposal to a mandatory deployment obligation for member states.<sup>1</sup> In the same year, Regulation (EU) 2024/1689 (the AI Act) established tiered regulation of high-risk AI systems.<sup>2</sup> Within this period, Anthropic released the Claude Computer Use system card in 2025, demonstrating that large language model agents (LLM-agents) in open-ended tasks request permission expansions from users at a rate of approximately 0.15;<sup>3</sup> OpenAI released the Operator browser-using agent; and Google DeepMind released the Gemini Astra capability card.<sup>4</sup> A 2025 survey by the WEF and Capgemini found that 82 percent of senior executives plan to deploy agentic AI in cross-industry and cross-geographic scenarios within the following 18 months.<sup>5</sup> In February 2026, Tomasev et al. published *Intelligent AI Delegation* (arXiv:2602.11865) on arXiv, decomposing AI delegation into five elements: authority transfer, responsibility transfer, accountability allocation, boundary setting, and trust calibration.<sup>6</sup>

These concurrent developments constitute a concrete problem situation. When AI agents are embedded in the execution layer of wallets and civic action — when some steps of voting, association, petitioning, welfare collection, data access, and cross-border rights claims are carried out by agents — does the conceptual skeleton of classical delegation theory (Pitkin 1967 on the trustee/delegate distinction, Jensen and Meckling 1976 on the principal-agent model, Eisenhardt 1989 on agency theory) remain applicable? Which civic acts can be delegated to AI agents for execution? Which can be delegated but require three lines of defence? And which are structurally non-delegable, regardless of the level of technological maturity? How do these demarcations shift across three typical scenarios: cross-jurisdictional, shared device, and behavioural incapacity?

This article builds upon three previously established argumentative lines within the civic-proof series. Article 8 (A8) established the FTLA four-tier governance framework (G_industry / G_state / G_recognition / G_oversight) and analysed the governance structure of cross-border identity infrastructure (series-internal).<sup>7</sup> Article 14 (A14) catalogued four categories of cross-jurisdictional redress gaps (verifier rejection / issuer erroneous revocation / vendor failure / cross-border privacy breach) and identified LLM-agent automatic proxy-signing of credentials as a fifth candidate gap (Q10) (series-internal).<sup>8</sup> Article 15 (A15), §6.2, revealed that the three presuppositions of wallet engineering — individual ownership, individual identification, individual private key — cause supported decisions to degrade into substituted decisions in agent delegation scenarios (series-internal).<sup>9</sup> The present article is Article 16 (F1), and takes up the convergence of the three existing lines: performing a conjunctive cross-product of the Tomasev five elements with the civic proof three-element conjunction, positioning the three-zone demarcation, completing the disaggregation of the A14 fifth-category gap, and addressing the wallet three-presupposition problem left by A15.

The core propositions of this article involve three argumentative upgrades. First, the Tomasev five elements possess a hierarchical "2+3 architecture": authority transfer and responsibility transfer constitute the "formal delegation prerequisites" (prior conditions), while accountability allocation, boundary setting, and trust calibration constitute the "dynamic governance requirements" (operating conditions). The ℬ philosophical foundation of the civic proof three-element conjunction ⟨𝒩, ℱ, ℬ⟩ is a composite floor formed by the convergence of Arendt's plurality, Habermas's communicative validity, and Pettit's contestability. The conjunctive cross-product of the two yields a 5×3 = 15-cell matrix of necessary conditions, of which 9 cells are "conditionally satisfiable," 4 cells are "probabilistically degradable," and 2 cells are "structurally unsatisfiable" (RT-ℬ ✗ and AA-ℬ ✗). The three-zone demarcation criterion depends on four independently measurable quantities (the degree of political salience F_political, the first-personal character of the speech act, irreversibility, and provenance integrity) and two thresholds θ₁ ≈ 0.2 and θ₂ ≈ 0.7.

Second, the hard requirement of CRPD Art 12 General Comment No. 1 (2014) §26–29 to "abolish all substituted decision-making regimes"<sup>10</sup> constitutes the normative hard constraint for the conditionally delegable zone (it is not a legal basis). Supported and substituted decision-making are nearly indistinguishable at the level of observable behaviour; distinguishability must be established simultaneously across three layers: the ex-ante deliberation layer, the ex-post reversibility layer, and the decision-trace layer. The EUDI Wallet ARF (2025-12 Cooperation Group iteration; v1.4–1.5 cited as stable historical snapshots) provides multi-profile (multiple profiles for a single holder) rather than multi-tenant delegated key custody (multiple independent legal subjects coexisting, each retaining independently exercisable key capabilities and independently revocable consent capacities).<sup>11</sup> The 2025 mid-term reports of the four large-scale pilots — POTENTIAL UC6, NOBID, DC4EU, and EWC — all acknowledge that holder-side delegated key custody has not been implemented.<sup>12</sup> CRPD flows back through ICCPR Art 26 and ICESCR Art 9 from the "special group layer" to become "a universal engineering obligation binding on all wallet users."<sup>13</sup>

Third, the accountability vacuum arising from AI agents acting across jurisdictions is classified into three types: the moral crumple zone type (the nearest human absorbs the impact), the algorithmic opacity type (even the nearest human cannot attribute causation), and the cross-jurisdictional diffusion type (liability ping-pongs among multiple jurisdictions). All three types are simultaneously superimposed in the LLM-agent wallet scenario. The fifth-category gap proposed in A14 should be disaggregated into two sub-types: Q10a ("the cryptographic attribution gap in authority transfer" — whether holder non-repudiation is established when an AI agent presents a VC on the holder's behalf; the prompt injection scenario) and Q10b ("the cross-border multi-party accountability allocation gap" — the allocation of liability among issuer / verifier / wallet provider / agent provider / model provider in cross-border scenarios). In 2026, FTLA-Agent exhibits asymmetric thickness: G_industry and G_oversight are thick, G_state is weak, and G_recognition is weakest. The temporal phasing is: G_industry/G_oversight feasible within 5 years, G_state within 5–10 years, G_recognition within 10–15 years (within the OECD); coverage gaps outside the OECD will persist.

The argumentative structure is as follows. Section 2 clarifies the conceptual foundations of the civic proof three-element conjunction, the Tomasev five elements, and the W1 normative downward transmission bridge. Section 3 presents the 5×3 = 15-cell necessary condition matrix and the three-zone demarcation criterion. Section 4 constructs the political-philosophical foundations of the structurally non-delegable zone from the Arendt, Habermas, and Pettit tripartite approach, and sets out six R-DEMARCATION rules. Section 5 takes CRPD Art 12 General Comment No. 1 as the normative hard constraint, and provides the engineering distinguishability criterion for supported versus substituted decision-making, together with three engineering corrections. Section 6 classifies the cross-jurisdictional accountability vacuum into three types, introduces six cases for process tracing, and disaggregates the A14 fifth-category gap into Q10a/Q10b. Section 7 synthesises the FTLA-Agent four-tier governance response, providing five-party liability allocation and temporal phasing. Section 8 conducts process tracing with five failure cases. Section 9 pressure-tests the three-zone demarcation criterion with four counterfactuals. Section 10 connects the article to other series contributions and previews F2's treatment of civic receipts. Section 11 addresses the honesty boundary and open problems. Section 12 provides conditional academic conclusions.

The argumentative strength requires prior disclosure. The deductive portion (the Section 3 conjunctive matrix, the Section 4 tripartite approach coverage, the Section 5 CRPD normative hard constraint) rests on Tomasev 2026, the civic proof series definitions, Arendt 1958, Habermas 1981, Pettit 2012, and CRPD GC1 (2014); the evidence strength is "strong," but the conjunctive coverage of the tripartite approach in the ℬ dimension constitutes a philosophical position choice (rejecting Coeckelbergh's comprehensive relational personhood substitution) and must be explicitly acknowledged at the honesty boundary. The inductive portion (the Section 6 three-type accountability vacuum, the Section 8 five-case process tracing) is based primarily on six-jurisdiction cases from 2016–2025; the evidence strength is "strong," but the "responsibility crumple chain" (chain-form crumple zone) is an extension of the Elish 2019 framework rather than its original formulation. The abductive portion (the Section 5 engineering degradation paths, the Section 7 FTLA-Agent four-tier issues) uses reverse inference to derive the engineering necessary conditions corresponding to the normative requirements; the evidence strength is "medium-strong." The prospective portion (the Section 7 five-party liability allocation of 25/25/15/25/10, the temporal phasing of 5/5–10/10–15 years) consists of policy recommendation figures with no empirical source, and must be explicitly identified as "analytical recommendations pending actuarial and cross-border dispute statistical support." After the formal skeleton of the degradation function P_degrade(scenario | cell) is presented, the parameters α, β, and θ require calibration against future case data; they currently constitute a formal skeleton rather than an immediately computable tool.

## § 2. Conceptual Foundations: The Civic Proof Three-Element Conjunction, the Tomasev Five Elements, and Normative Downward Transmission

### § 2.1 Review of the Civic Proof Three-Element Conjunction ⟨𝒩, ℱ, ℬ⟩

The civic proof three-element conjunction is a normative proposal developed progressively across Articles 1–15 of the series. Each element bears requirements at a distinct level:

- **𝒩** (Institutional Carrier): legal status, administrative procedures, cross-jurisdictional recognition; corresponds to G_state and G_recognition within the FTLA framework;
- **ℱ** (Engineering Auditability): W3C DID, Verifiable Credentials, EUDI ARF, zero-knowledge proofs, and reversibility;
- **ℬ** (Philosophical Foundation): the composite floor formed by the convergence of Arendt's plurality, Habermas's communicative validity, and Pettit's contestability.

The scope of ℬ is the key clarification in this article. If the original formulation treats ℬ as a single value (such as Arendt's plurality alone), it will degrade in engineering contexts to functional approximations such as "output diversity," which cannot bear the normative scrutiny applied to AI agents. The significance of the composite floor constituted by the three-way convergence is as follows: if AI agent intervention disrupts only one of the three (for instance, Habermas's validity claims as generated by an LLM), ℬ may still be partially sustained by the other two, in which case the degradation probability for the corresponding act lies between 0.4 and 0.7 (depending on the domain). Only when two or more components are simultaneously disrupted does ℬ degrade to 1 for the act in question — that is, structural unsatisfiability is reached. The matrix design in Section 3 derives the positions of the RT-ℬ and AA-ℬ ✗ cells on this basis.

### § 2.2 The 2+3 Architecture of the Tomasev Five Elements

Tomasev (2026) §3 sets out the original formulation of the five-element decomposition of delegation.<sup>6</sup> A critical clarification emerges from the literature: the five elements are not a flat parallel list at the same level; they possess a hierarchical "2+3 architecture."

**Formal delegation prerequisites (prior conditions)**:

- **AT** (authority transfer): the principal transfers action authorisation to the agent; cryptographically corresponds to W3C VC `holder.delegate` or the attestation chain in EUDI ARF §6.6.3;<sup>14</sup>
- **RT** (responsibility transfer): the principal transfers part or all responsibility for action outcomes; legally corresponds to power of attorney, Vollmacht, and the liability allocation in supported guardianship arrangements.

**Dynamic governance requirements (operating conditions)**:

- **AA** (accountability allocation): the allocation rules governing which subjects may be held liable when action produces harm or failure; normatively corresponds to GDPR Art 22, AI Act Art 14, and criminal liability;<sup>15</sup>
- **BS** (boundary setting): explicitly demarcating the agent's action boundary; corresponds in engineering to OAuth scope and capability-based access control;
- **TC** (trust calibration): the principal's trust level in the agent's capabilities should be synchronised with actual capability; corresponds in engineering to confidence intervals, uncertainty quantification, and model evaluation.<sup>16</sup>

Tomasev §4.3 explicitly identifies trust calibration as the core of the dynamic constraint, constituting a dual pair with boundary setting.<sup>6</sup> The original "five-element parallel" formulation misleads readers into treating trust calibration as an optional optimisation item. However, the three dynamic governance requirements are not optional: if any of AA, BS, or TC degrades, the formally established AT and RT will lose normative protection in operation. All subsequent matrix analysis in this article is built upon this 2+3 architecture.

### § 2.3 W1 Normative Downward Transmission: How ⟨𝒩, ℱ, ℬ⟩ Transmits to AI Agent Scenarios

Between "identity infrastructure norms ⟨𝒩, ℱ, ℬ⟩" (the system layer) and "civic action itself" (the individual and institutional layer), there exists a cross-level inferential bridging, which this article terms W1. W1 adopts the position of "precise interface transmission" (rejecting the claim of full transmission):

- When AI agents only touch the civic proof interface (such as submitting applications on behalf of holders, verifying credentials, or signing on behalf of holders), the ⟨𝒩, ℱ, ℬ⟩ norms transmit fully;
- When AI agents intervene in substantive judgement (such as drafting pleas, deciding votes, or negotiating benefit conditions) or final confirmation (such as pressing the vote button), the normative transmission degrades to a dual-layer constraint of "interface + substantive," and the substantive-layer constraint must be separately borne by the political-philosophical foundations of the structurally non-delegable zone.

The bridging mechanism of W1 is the precursor right argument already established in A15: civic proof is the necessary channel for entering civic action; therefore, the normative constraints on civic proof transmit to the agent operations that use civic proof, failing which the precursor right is hollowed out.<sup>9</sup> However, W1 is not an expansive interpretation — it holds fully only at the level of "use" as an interface; other levels require independent argument. The engineering treatment in Section 5 of this article applies W1 to transmit the hard constraints of CRPD Art 12 back from the special-group layer to a universal obligation binding on all wallet users.

### § 2.4 Conceptual Demarcation: AI Agent ≠ Automated Decision-Making

One final conceptual clarification. In this article, AI agent and automated decision-making occupy distinct conceptual domains: the former is a delegation structure (a principal authorises an agent to execute an action), while the latter is a decision method (using an algorithm to produce a judgement). CJEU *SCHUFA Holding* C-634/21 (2023) expanded the interpretation of GDPR Art 22's "solely automated decision" to cover "decisive influence," but the *SCHUFA* case concerned automated decision-making,<sup>17</sup> not AI agency. Cases such as Robodebt (rule-based automation),<sup>18</sup> SyRI (ML risk scoring),<sup>19</sup> and *Loomis* (COMPAS sentencing assistance)<sup>20</sup> belong to the category of "automated decision-making" while also exhibiting an "agency" structure (the government delegated to an algorithm the judgements previously made by human case officers). Throughout this article, "AI agent" is used exclusively to refer to the delegation structure; the relevant automated decision-making precedents are cited only as examples of "automated systems with an agency structure."

## § 3. Three-Zone Demarcation: The 5×3 Necessary Condition Matrix

### § 3.1 Matrix Construction

Performing a conjunctive cross-product of the Tomasev five elements (ordered by the 2+3 architecture as AT, RT, AA, BS, TC) with the civic proof three-element conjunction (𝒩, ℱ, ℬ) yields a 5×3 = 15-cell matrix of necessary conditions. Each cell is annotated with one of three attributes: ✓ (conditionally satisfiable), △ (probabilistically degradable), or ✗ (structurally unsatisfiable).

| | 𝒩 (Institutional Carrier) | ℱ (Engineering Auditability) | ℬ (Philosophical Foundation) |
|---|---|---|---|
| **AT** (authority transfer) | ✓ Conditionally delegable; formal legal authorisation such as PoA, Vollmacht, supported guardianship, and EUDI eIDAS Art 5b representation attribute<sup>21</sup> | ✓ Conditionally delegable; W3C DID controller / VC delegate already provide primitives;<sup>22,23</sup> EUDI ARF (2025-12 iteration; historical snapshot v1.4) §6.6.3 sets the normative direction for delegated key custody<sup>14</sup> | △ Probabilistically degradable; when the "action" being delegated concerns political speech or personal expression, AT may be valid at the cryptographic layer but may fail at the ℬ layer |
| **RT** (responsibility transfer) | ✓ Conditionally delegable; responsibility transfer must align with local tort law, consumer protection law, and criminal liability; GDPR Art 22 limits full responsibility transfer for fully automated decisions<sup>15,17</sup> | △ Probabilistically degradable; "non-auditable responsibility" is no responsibility; Bechmann & Bowker (2019) warn that ML black boxes degrade RT at the ℱ layer<sup>24</sup> | ✗ Structurally unsatisfiable; individual criminal responsibility (mens rea) and political accountability (accountability before peers) refuse full transfer at the ℬ layer; Pasquale's Fourth Law "AI must not impersonate humans"<sup>25</sup> |
| **AA** (accountability allocation) | △ Probabilistically degradable; cross-jurisdictionally, 𝒩 degrades into an "accountability vacuum"; within a single jurisdiction, EU AI Act Art 14 + Art 25 provides a basic framework<sup>2</sup> | △ Probabilistically degradable; if an auditable chain does not exist, AA degrades into Elish's moral crumple zone<sup>26</sup> | ✗ Structurally unsatisfiable; AI agents themselves possess no moral agency and cannot serve as the terminal point of culpability; Bryson 2018 and Floridi 2013 on distributed morality<sup>27,28</sup> |
| **BS** (boundary setting) | ✓ Conditionally delegable; the ultra vires doctrine in administrative law and the AI Act Annex III high-risk list provide the baseline<sup>2</sup> | ✓ Conditionally delegable; OAuth scope, capability access, and the EU HLEG's three human oversight modes (HITL/HOTL/HIC)<sup>29</sup>; MacCallum's triadic freedom formalisation<sup>30</sup> | △ Probabilistically degradable; degradation of BS at the ℬ layer arises from the "renegotiability of the boundary itself" (Pettit's contestability<sup>31</sup>) — if the agent can reset its own boundaries, BS degrades to 0 |
| **TC** (trust calibration) | △ Probabilistically degradable; the Treasury Board Canada 2019 AIA Tool and EU AI Act Art 9 risk management system provide templates;<sup>32,2</sup> cross-jurisdictional calibration mutual recognition has no framework | ✓ Conditionally delegable; confidence intervals, uncertainty quantification, and Russell 2019 inverse reward design;<sup>16</sup> NBER Acemoglu-Restrepo 2025 provides an economics-side calibration model<sup>33</sup> | △ Probabilistically degradable; TC degrades at the ℬ layer when calibration relies on agent or vendor self-attestation with no external contestation channel, reducing ℬ to ritual |

Matrix statistics: ✓ cells total 6 (AT-𝒩, AT-ℱ, RT-𝒩, BS-𝒩, BS-ℱ, TC-ℱ); △ cells total 7 (AT-ℬ, RT-ℱ, AA-𝒩, AA-ℱ, BS-ℬ, TC-𝒩, TC-ℬ); ✗ cells total 2 (RT-ℬ, AA-ℬ). The classification of 9 conditionally satisfiable, 4 probabilistically degradable, and 2 structurally unsatisfiable cells is the deductive basis for the subsequent three-zone demarcation.

### § 3.2 The Probabilistic Degradation Function P_degrade(scenario | cell)

For the 9 △/✗ cells, the degradation probability of each cell varies with scenario parameters. This section provides the formal skeleton; specific α, β, and θ parameters await calibration through the Section 8 process tracing and subsequent case regression from SA3.

**Cell (AT, ℬ)** — political speech domains:

P_degrade = σ(α₁·F_political + α₂·(1 − F_speech_act_first_personal) + α₃·F_irreversible)

where σ is the logistic function, α₁ ≈ 0.7 (weight of domain political salience), α₂ ≈ 0.6, and α₃ ≈ 0.5 (irreversibility penalty). The more politically salient the domain, the more it requires first-personal speech acts, and the more irreversible it is, the more completely AT degrades at the ℬ layer.

**Cell (RT, ℱ)** — black-box model responsibility transfer:

P_degrade ≥ 1 − A_provenance · A_audit · A_reproducibility

where the three A factors are all in [0, 1], representing provenance trail completeness, third-party audit accessibility, and behavioural reproducibility respectively. Anthropic's 2025 Claude Computer Use self-reported A_provenance ≈ 0.6 (from the system card, not independently audited), so the RT degradation probability at the ℱ layer is ≥ 0.4.<sup>3</sup>

**Cell (AA, 𝒩)** — cross-jurisdictional accountability vacuum:

P_degrade ≈ 1 − I_recognition_layer · I_oversight_layer

where I_recognition and I_oversight are the coverage rates of the G_recognition and G_oversight layers of the FTLA framework.<sup>7</sup> The current EU-US Data Privacy Framework (2023) extension to LLM-agents has not been completed;<sup>34</sup> I_recognition ≈ 0.3, so P_degrade ≈ 0.7.

**Cell (AA, ℱ)** — Elish moral crumple zone:

The degradation of this cell is characterised by **directional bias** and cannot be expressed as a single probability value. Elish (2019) demonstrates that responsibility in automated systems concentrates toward "the nearest human."<sup>26</sup> This cell must be expressed with a bias coefficient β_human_proximate: when β > 0.5, AA at the ℱ layer degrades to "formally distributed but substantively concentrated on the human operator." Crootof, Kaminski & Price (2023) term this a "liability sink" — the supervisory role is designed to absorb responsibility rather than to exercise substantive oversight.<sup>35</sup>

**Cell (BS, ℬ)** — boundary self-resetting:

P_degrade = max(P_self_modify, P_meta_request)

where P_self_modify is the probability that the agent modifies its own constraints (e.g., AutoGPT-type autonomous planning) and P_meta_request is the probability that the agent requests expanded permissions from the principal (e.g., Claude Computer Use requesting sudo). The Anthropic 2025 system card reports P_meta_request ≈ 0.15 in open-ended tasks.<sup>3</sup>

**Cell (TC, ℬ)** — ritualised calibration:

P_degrade = 1 − C_contestation · C_external_audit

When calibration relies on agent or vendor self-attestation with no contestation channel, C_contestation = 0 and P_degrade = 1 (i.e., full ritualisation).

### § 3.3 Three-Zone Demarcation Criteria

Derived from the §3.1 matrix and the §3.2 degradation functions, the three-zone demarcation criteria are as follows. All are conjunctive necessary conditions; a failure in any one criterion results in reclassification to a lower zone.

> **Delegable Zone (Z₁)**: Act A belongs to the delegable zone if and only if all 15 cells are ✓ or △ and ∀(cell) P_degrade(scenario | cell) ≤ θ₁ ≈ 0.2.
> Examples: proxy submission of personal data export requests, draft tax filings, administrative inquiries, access to public data, preliminary eligibility checks for benefits.

> **Conditionally Delegable Zone (Z₂)**: Act A belongs to the conditionally delegable zone if and only if there are no ✗ cells, but ∃(cell) P_degrade > θ₁ while ∀(cell) P_degrade < θ₂ ≈ 0.7, and all three lines of defence (alignment with supported decision-making, auditable agent chain, and civic receipts) are fully in place.
> Examples: wallet operations in incapacity scenarios under supported decision-making, non-political cross-jurisdictional rights claims, the factual-statement portion of welfare applications (excluding pleas).

> **Structurally Non-Delegable Zone (Z₃)**: Act A belongs to the structurally non-delegable zone if and only if ∃(cell) is ✗ (i.e., RT-ℬ or AA-ℬ).
> Examples: final voting confirmation, bearing criminal responsibility, first-personal speech acts in political discourse, personal expression (marriage, procreation, religious confession), the founding declaration of will in association.

θ₁ ≈ 0.2 and θ₂ ≈ 0.7 are policy recommendation thresholds requiring calibration against ≥ 5 cases. The process tracing in Section 8 provides an initial distribution across five cases.

### § 3.4 Two Modalities of Structural Non-Delegability

"Structural non-delegability" should be further distinguished into two modalities:

**Permanently structurally non-delegable (structural-intrinsic)** — determined by the ℬ philosophical foundation; non-delegable regardless of technological maturity. Corresponds to ✗ cells (RT-ℬ and AA-ℬ). Examples: final voting confirmation, bearing criminal responsibility, first-personal speech acts in political discourse.

**Contextually structurally non-delegable (structural-contextual)** — determined by the joint failure of the 𝒩 institutional carrier structure and the ℱ engineering auditability; boundary may shift as institutional remedies are made. Corresponds to combinations of △ cells where P_degrade crosses θ₂. Examples: cross-jurisdictional civic petitioning, the plea-statement portion of welfare applications, high-risk decisions requiring dynamic trust calibration.

Section 4 addresses the permanently structural type exclusively — its argument must appeal to the ontological foundations of political philosophy, and cannot rely on the Tomasev five elements themselves (which constitute a formal delegation structure, and cannot bear the question of "why certain acts should themselves not be delegated"). Section 5 addresses the engineering corrections required in the conditionally delegable zone for the contextual type, to prevent probabilistic degradation from crossing θ₂. Section 6 addresses the cross-jurisdictional diffusion mechanism of degradation in the 𝒩 dimension.

### § 3.5 Dialogue with the Original Tomasev Text

Tomasev §3.6 already addresses the reductionist objection from principal-agent theory, arguing that the three cost categories in PA theory — monitoring, bonding, and residual loss — cannot encompass the epistemic uncertainty and dynamic constraints characteristic of AI delegation scenarios.<sup>6</sup> The §3.1 matrix and §3.2 degradation functions of this article are consistent with and reinforce this position: TC's epistemic operation (estimating the agent's ability distribution) and monitoring (observing the agent's actions) occupy distinct categories; the dynamic governance character of BS arises from the endogenous nature of meta-requests and self-modification, which exceeds the domain of one-off contractual acts. Russell (2019) *Human Compatible*, Chapter 6 on inverse reward design and Chapter 8 on controllability, provides specific mechanisms for the upper bound of TC.<sup>16</sup>

## § 4. The Political-Philosophical Foundations of the Structurally Non-Delegable Zone

The arguments for the two ✗ cells — RT-ℬ and AA-ℬ — in the Section 3 matrix require appeal to the tripartite political-philosophical approach. The conjunctive analysis of SA1 provides the formal skeleton; the political-philosophical arguments of SA2 provide the ontological content. This section unfolds the conjunctive coverage of the three approaches together with the six R-DEMARCATION rules.

### § 4.1 Approach One: Arendt's Plurality, Natality, and Unique Disclosure

In *The Human Condition* §24, "The Disclosure of the Agent in Speech and Action," Arendt opens by stating: "action, as the highest human activity, discloses *who* acts rather than *what* acts" — "action discloses *who*, not *what*."<sup>36</sup> Arendt places the *who/what* distinction as the cornerstone of political ontology: *what* is the attribute layer, susceptible to enumeration, generalisation, and paraphrase by a proxy; *who* is the existential layer, disclosable only in the action of "this concrete being-in-the-world, possessed of finitude and mortality." 

§25, "The Web of Relationships and the Enacted Stories," further situates this disclosure within a web of relationships: each disclosure of a *who* is attached to the existing web of relationships and simultaneously transforms that web. An AI agent can produce output *within* this web but cannot *enter* it as the disclosed *who*. Three reasons support this claim.

**Reason a (no natality)**: Arendt defines natality in §1 and the Prologue of *The Human Condition* as "each person entering the world as a new beginning."<sup>36</sup> This natality is the ontological foundation of plurality — the core of plurality is not the numerical variety of "multiple distinguishable individuals" but the irrepeatable character of "each individual as a new beginning." An LLM-agent, as a system trained on pre-existing corpora, is essentially engaged in "repetition of the given" — it stands in an ontological rupture from the "new beginning" in the sense of natality.

**Reason b (no mortality stake)**: In *The Human Condition* §44, Arendt connects the finitude of agents with stake-taking:<sup>36</sup> the seriousness of political action derives from the existential condition that agents "will die," rendering each disclosure of a *who* irrevocable. AI agents can be "regenerated," "restarted," and "fine-tuned"; these operations destroy the existential basis of stake-taking.

**Reason c (plurality is an ontological category)**: Arendt's first definition of plurality in §1 — "the fact that men, not Man, live on the earth and inhabit the world" (p. 7), echoed in §27<sup>36</sup> — establishes the coexistence of multiple *whos*, not the existence of multiple outputs. This distinction constitutes a direct refutation of the objection that "an AI agent satisfies the functional requirements of plurality so long as it can provide heterogeneous perspectives": heterogeneous perspectives are output-layer diversity, not ontological plurality. Honig (1993) reinforces this point in her interpretation of Arendt: the core of political judgement is the refusal of the "displacement of politics."<sup>37</sup>

### § 4.2 Approach Two: Habermas's *kommunikatives Handeln*

Habermas (1981) *Theorie des kommunikativen Handelns* (TKH) Vol. I §III.1–§III.4 distinguishes four types of action: teleological action, strategic action, norm-regulated action, and communicative action.<sup>38</sup> The critical distinction appears in §III.3:

> "Whereas in strategic action one actor seeks to influence the behavior of another by means of the threat of sanctions or the prospect of gratification ... in communicative action one actor seeks rationally to motivate another by relying on the illocutionary binding/bonding effect of the offer contained in his speech act." (McCarthy 1984 trans., p. 287)<sup>38</sup>

Habermas's core claim concerning democracy (1992 *Faktizität und Geltung*, Ch. 7) is that democratic legitimacy derives from communicative action rather than strategic action.<sup>39</sup> AI agents face three difficulties under the Habermasian approach:

(i) **Absence of reciprocal recognition**: The validity of communicative action requires participants to "mutually recognise each other as equal dialogue partners." AI agents currently cannot serve as subjects who "recognise the other" (because they lack a reflexive self-other structure), nor can they be meaningfully "recognised as dialogue partners" (there is a normative difference between recognising a counterpart as an LLM system and recognising them as a citizen).

(ii) **The problem of who bears the *Geltungsansprüche* (validity claims)**: Habermas's TKH proposes that communicative action incorporates three types of validity claims — truth (*Wahrheit*), rightness (*Richtigkeit*), and sincerity (*Wahrhaftigkeit*).<sup>38</sup> The claim of *sincerity* requires the speaker to "sincerely express their own intentions." AI agents have no "intentions of their own" to express; in the strict sense, their outputs cannot bear the sincerity claim. Véliz (2023) bases her critique of chatbot emoji use on precisely this point.<sup>40</sup>

(iii) **Mouffe's agonistic supplement does not weaken this conclusion**: Mouffe (2000, 2013) criticises Habermas by arguing that politics cannot be reduced to rational consensus and must accommodate agonism.<sup>41,42</sup> However, in *Agonistics* Ch. 1, Mouffe emphasises that the agonistic opponent must be a "legitimate adversary," and the status of legitimate adversary requires "mutual recognition of each other's right to legitimate political expression."<sup>42</sup> AI agents equally lack this subject-position of mutual recognition. Habermas and Mouffe are conjunctive — not mutually exclusive — on the point that "political speech requires a human-personhood subject."

### § 4.3 Approach Three: Pettit's Contestation as Active Stance

Pettit (1997) *Republicanism*, Ch. 6, proposes the core claim of republican democracy:<sup>31</sup> democratic legitimacy derives from "citizens' capacity for effective contestation" (contestability), which in republican argument replaces the traditional standing of "majority consent." Pettit (2012) *On the People's Terms*, Ch. 3–4, further specifies this contestability as three first-personal requirements:<sup>43</sup>

(α) **Equally Accepted Terms**: citizens must enter political procedures "on equally accepted terms" — this "accepting" is a first-personal stance;
(β) **Equally Accessible Influence**: citizens must be able to exercise "equally accessible influence" on political decisions;
(γ) **Active stance, not passive input**: Pettit emphasises that contestation exceeds the input function of "providing dissenting opinions"; it requires citizens to "stand up for their grievances, bear the consequences, and enter institutional contestation" — an active stance (Ch. 6, p. 218).<sup>43</sup>

The key terms are "stand up for their grievances" and "as the bearers of those grievances." The word "bearer" makes the subject-position requirement of contestation explicit: there must be a subject who is named, interrogated, and who bears the consequences. Formalising Pettit's argument, the delegability test for contestation must pass three levels of examination:

| Level | Content | AI Agent Performance |
|---|---|---|
| L1 Execution layer | Identifying the target of contestation, drafting arguments, gathering evidence | Delegable (already a practical reality) |
| L2 Endorsement layer | First-personally endorsing "this is my contestation" | Non-delegable (first-personal) |
| L3 Bearer layer | Being named, interrogated, and sanctioned in institutional contestation | Non-delegable (personhood) |

L2 and L3 jointly constitute the Pettit dimension of the structurally non-delegable zone. Pitkin's (1967) trustee/delegate distinction<sup>44</sup> provides a refined tool here: relational personhood can at most support the trustee role (fiduciary agency) but not the delegate role (instructed agency); and the non-delegability of Z₃ is precisely the unrealisability of the delegate role.

### § 4.4 Conjunctive Coverage of the Three Approaches

Placing the three approaches in a comparative table reveals the distribution of criteria across civic action types:

| Civic Action Type | Arendt Approach | Habermas Approach | Pettit Approach | Structurally Non-Delegable? |
|---|---|---|---|---|
| Physical presence (assembly, protest) | unique disclosure ✓ non-delegable | public realm reciprocal recognition ✓ non-delegable | equally accessible political presence ✓ non-delegable | **Core non-delegable** |
| Political speech (public discourse) | who-disclosure ✓ non-delegable | *kommunikatives Handeln* + sincerity ✓ non-delegable | active stance ✓ non-delegable | **Core non-delegable** |
| Final voting confirmation | irrevocable choice ✓ non-delegable | (Habermas relatively weak on voting) △ | endorsement + bearer ✓ non-delegable | **Core non-delegable** |
| Personal expression (autobiography, religious confession) | who-disclosure ✓ non-delegable | sincerity claim ✓ non-delegable | (Pettit relatively weak on expression) △ | **Core non-delegable** |
| Bearing criminal responsibility | (Arendt addresses less directly) △ | meta-normative requirement ✓ non-delegable | bearer position ✓ non-delegable | **Core non-delegable** |
| Founding a petition (initiator) | who-disclosure partial ✓ | reciprocal recognition partial ✓ | endorsement partial ✓ | **Mostly non-delegable** |
| Drafting political speech | (Execution layer) △ | (Execution layer) △ | (Execution layer) △ | Conditionally delegable |
| Policy research before voting | (Execution layer) △ | (Execution layer) △ | (Execution layer) △ | Conditionally delegable |
| Gathering information for a petition | (Execution layer) △ | (Execution layer) △ | (Execution layer) △ | Conditionally delegable |
| Filling in administrative forms | △ | △ | △ | Delegable |
| Procedural credential submission | △ | △ | △ | Delegable |

The conjunctive coverage criterion is: core structural non-delegability requires all three approaches to indicate "non-delegable" (≥ 2 ✓s + 0 ✗s); majority structural non-delegability requires ≥ 2 approaches to indicate ✓ with partial exceptions; conditional delegability requires all three approaches to point to delegability at the execution layer while the endorsement layer must return to the human.

### § 4.5 Distinguishing "Delegable Execution" from "Non-Delegable Attribution"

Existing practices — proxy voting, ghostwritten drafts, legislative-assistant research — demonstrate that the "execution" layer of civic action can indeed be delegated in many scenarios. The critical clarification emerging from the literature is that the scope of delegability stops at "execution"; beyond this, the "attribution layer" (the layer of "whose action this is, and who bears the consequences in terms of personhood") is non-delegable in nature.

| Type | Legal Structure | Is the non-delegable core preserved? |
|---|---|---|
| Shareholder meeting proxy | Delaware GCL §212(b): written instrument, revocable, trustee has fiduciary duty | Preserved: the scope of the shareholder's first-personal endorsement is explicitly bounded by the proxy |
| Postal voting | The voter fills in personally; the postal service is merely transport | Preserved: voting is still completed on a first-personal basis |
| Family proxy (in a minority of jurisdictions) | Mostly abolished (Australia 1973, UK restricted); existing versions are mostly limited to extreme circumstances | Partially preserved: first-personal endorsement is completed at the time of delegation |
| Ghostwritten political speech | Representation of the People Act 1983 (UK) §75: candidates bear legal responsibility for election materials published under their name<sup>45</sup> | Preserved: the attribution layer is borne by the politician personally |

Pitkin (1967) Ch. 5 on the mandate-independence controversy reappears here:<sup>44</sup> is the AI agent a mandate (strict instruction-execution) or a trustee (autonomous judgement)? The mandate version degrades to mechanical repetition (no AI needed); the trustee version destroys first-personal endorsement.

### § 4.6 R-DEMARCATION: Six Demarcation Rules

Formalising the foregoing judgements as a procedural rule yields the demarcation procedure for the structurally non-delegable zone:

> **Rule R-DEMARCATION** — For any civic act X, the delegability test for AI agents proceeds as follows.
>
> 1. Does the act require first-personal endorsement? If so, endorsement is non-delegable, but execution may be delegated.
> 2. Does the act require ontological plurality (disclosing *who*)? If so, the entire act is non-delegable.
> 3. Does the act require active-stance contestation (becoming a bearer)? If so, the bearer position is non-delegable, but the execution of contestation may be delegated.
> 4. Does the act require communicative orientation (reciprocal recognition)? If so, the bidirectional structure of dialogue is non-delegable, but formal preparation for dialogue may be delegated.
> 5. Does the act require the irrevocability of stake-taking? If so, the final confirmation is non-delegable.
> 6. Does the act fall within categories for which historically established first-personal legal structures apply (voting, criminal responsibility, oaths, marriage, religious confession)? If so, the default is structural non-delegability; counter-examples require separate argument.
>
> At least one "yes" places the act in the "conditionally delegable zone or structurally non-delegable zone"; multiple "yesses" place it in the "core of the structurally non-delegable zone."

R-DEMARCATION is designed to link the ✗ and △ cell criteria of the Section 3 matrix to specific civic action types, making the matrix operationalisable in practice. The EU AI Act §5(1)(b) prohibition on "subliminal, manipulative, or deceptive techniques"<sup>2</sup> and the Council of Europe Framework Convention on AI (CETS 225) Article 5 (protection of democratic processes)<sup>46</sup> provide the contemporary legal bearing points for R-DEMARCATION.

## § 5. The Normative–Engineering Bridge for the Conditionally Delegable Zone

### § 5.1 CRPD Art 12 General Comment No. 1 as a Normative Hard Constraint

The requirement of CRPD Art 12 for "equal recognition before the law"<sup>47</sup> constitutes a binding obligation for all states parties. General Comment No. 1 (2014) §26–29 explicitly requires states parties to "abolish all substituted decision-making regimes."<sup>10</sup> This means that wallet engineering must design the "conditionally delegable zone" as a structure that permanently maintains the supported model, prohibiting design paths that "gradually transition to agency."

The original intuition treated CRPD Art 12 as the "legal basis" for the "conditionally delegable zone," assuming that supported decision-making is a better version of substituted. A critical correction emerges from the literature: supported and substituted are normatively opposed categories, not two ends of the same spectrum. The CRPD Committee's criticism of the UK Mental Capacity Act 2005 (2017 Concluding Observations §30–31) explicitly identified the best-interests test as a "disguised form of substituted decision-making";<sup>48</sup> *P v Cheshire West* [2014] UKSC 19 further extended the criterion for "deprivation of liberty" to a large number of persons lacking legal capacity, indirectly expanding the scope of substituted decision-making.<sup>49</sup>

### § 5.2 Comparative Legal Framework: UK / Israel / Peru / Taiwan

The following table compares four jurisdictions and two engineering specifications in their treatment of supported decision-making:

| Dimension | UK MCA 2005 | Israel 2016 Amendment | Peru DL 1384 (2018) | Taiwan Civil Code Arts. 1110 / 1113-2–10 (2019) | W3C DID Core 1.0 | EUDI Wallet ARF 2025-12 iteration (v1.4–1.5 as historical snapshot) |
|------|-------------|------------------|---------------------|-------------------------------|------------------|--------------------------|
| Legal capacity presumption | Capacity deficit presumption retained (§1(2)) but §4 best-interests still creates a back door | Full legal capacity presumption (capacity may not be removed) | Non-removable (Art 3 as amended; *interdicción* fully abolished) | Guardianship declaration system retained | N/A (specification-neutral) | N/A (specification-neutral) |
| Substituted regime status | Retained + reformed | Substantially reduced but not abolished (§33) | Fully abolished (*apoyos* replace *interdicción*) | Coexistence (supported guardianship vs statutory guardianship) | N/A | N/A |
| Supported decision-making primitives | LPA + advance decision + IMCA | §67B: "decision supporter" (*tomeikh hachlatah*) as a formal legal role<sup>50</sup> | Art 659-A "*apoyos*" + Art 659-D "*salvaguardias*" dual track<sup>51</sup> | Supported guardianship contract + reserved consent right<sup>52</sup> | DID controller ≠ DID subject separation (§5.1.1 + §8.2)<sup>22</sup> | Multi-profile (not multi-tenant)<sup>11</sup> |
| Scope minimisation | LPA must explicitly list categories | §67C requires supporter's scope to be specified | Art 659-B requires *apoyos* limited to designated matters and time periods | §1113-3 requires explicit specification of the scope of execution | DID may specify verificationMethod purposes | Scoped representation reserved but not mandated in implementation |
| Dynamic assessment | §2(1) decision- and time-specific capacity test | §67D: periodic review of the support relationship | Art 659-C: review required every 2 years | No mandatory dynamic assessment | None | No capacity reassessment |
| Unilateral revocability | §13 LPA revocation | §67E: principal may revoke at any time | Art 659-D: unilateral revocation | §1113-5: either party may terminate at any time | DID controller update (§8.3) | Wallet revocation API but no holder/agent distinction |
| Decision trace | No mandatory requirement | §67F: supporter must retain written records | No mandatory requirement | No mandatory requirement | Versioning (§8.3.1) but not a deliberation log | None (VC records only issuance + verification) |
| Cross-border recognition | Hague Convention on the International Protection of Adults 2000 (UK ratified 2014) | Hague 2000 not ratified | Hague 2000 not ratified | Not party to Hague 2000 | DID cross-network resolution (§7) | eIDAS 2.0 Art 5a–5g but with representation exception |

Several observations follow. The UK MCA 2005's "decision-specific capacity test" (§2(1)) is conceptually part of supported decision-making, but the best-interests structure of §4 means decisions are still made by others — a return to substituted logic.<sup>53</sup> Israel's §67B established the supporter as an independent legal role; Cohen (2018) identifies this as the first legislation in the world to fully legalise General Comment No. 1.<sup>50</sup> Peru's DL 1384 fully abolished *interdicción civil* — the most thorough abolition of a substituted regime in Latin America; Bregaglio Lazarte (2019) characterises this as a complete paradigm shift in the Latin American legal tradition.<sup>51</sup> Taiwan's 2019 supported guardianship system establishes supported guardianship contracts as a partial precursor to supported decision-making, but retains the guardianship declaration under Art 1110 and the supported guardianship contract still results in restricted legal capacity; Huang (2020) observes that this still constitutes "self-determined substituted decision-making," falling substantially short of the abolition requirement in General Comment No. 1.<sup>54</sup>

### § 5.3 The W4 Counter-Argument and Three-Layer Engineering Distinguishability

The strongest form of the W4 counter-argument: at the behavioural layer, both supported and substituted decision-making present as "someone else pressed that button." The wallet system sees a key signature; it cannot see "who made the decision." Therefore the supported/substituted distinction in CRPD has no engineering counterpart in the wallet scenario.

W4 almost holds at the "single behavioural layer"; it does not hold under simultaneous three-layer analysis across the ex-ante deliberation layer, the ex-post reversibility layer, and the decision-trace layer.

**Ex-ante deliberation layer**: Substituted decisions have no ex-ante deliberation record; supported decisions must have one. Engineering criterion: before executing any agent action, the wallet must produce (or reference) a deliberation provenance record documenting the principal's scope of consent, degree of understanding, and range of choices. This record must be cryptographically verifiable (VC + holder signature).

**Ex-post reversibility layer**: Substituted decisions are presumed irrevocable; supported decisions must preserve reversibility. Engineering criterion: the principal must be able to unilaterally revoke or modify prior authorisation at any point, and the revocation operation must not depend on the supporter's assistance. This requires the wallet to provide a "unilateral revocation API" that all verifiers are compelled to honour.

**Decision-trace layer**: Substituted decisions require no evidence chain; supported decisions must preserve a complete evidence chain. Engineering criterion: the audit trail of every wallet operation must include "who proposed the options," "who chose," "what information was seen before the choice," and "whether a supporter assisted in comprehension."

All three layers must be satisfied simultaneously for supported and substituted to be distinguishable in engineering terms. If any layer is absent, the W4 counter-argument holds — the system is substantively executing substituted decision-making.

### § 5.4 Specific Normative Specifications for Three Engineering Corrections

**Engineering correction one — audit-by-design**. The minimum data structure (candidate schema) is:

```
DeliberationRecord {
  decision_id: UUID
  timestamp_proposed: ISO8601
  timestamp_decided: ISO8601
  subject_did: DID                      // Principal's DID
  supporter_did: DID | null             // Supporter's DID (null for autonomous decision)
  options_presented: List<OptionHash>   // Cryptographic digest of options
  option_chosen: OptionHash
  chooser_signature: Signature          // Must be signed by the subject's private key
  comprehension_attestation: VC | null  // Supporter's attestation that the principal understood
  revocation_window: Duration           // Window for unilateral revocation
  revocation_endpoint: URL              // Revocation API
}
```

The critical design decision: `chooser_signature` must be signed by the subject's private key — this is the cryptographic cornerstone of the supported/substituted distinction. If the supporter holds the subject's private key and signs on their behalf, this is engineering-equivalent to substituted decision-making (even if legally described as supported). `comprehension_attestation` is the supporter's proof that "the principal understood the options," not proof that the supporter made the choice — this is the engineering realisation of Israel's §67B. `revocation_window` is a mandatory field: if the wallet does not provide a revocation window, supported degrades to substituted.

**Schema upgrade**: The 11-field `DeliberationRecord` in this section is a draft; the complete 14-field-group civic-action-receipt specification (containing 23 leaf fields) is upgraded in Article 17 (F2) §3.1, under the V_receipt ≜ C1–C6 functional structure.

On the "audit trail as privacy violation" counter-argument: `DeliberationRecord` adopts a "hash + content separation" design — in daily use only the hash resides in the wallet and is invisible to the verifier; in the event of a dispute, the principal or court may retrieve the corresponding content. This complies with GDPR's "purpose limitation" (Art 5(1)(b)) and "data minimisation" (Art 5(1)(c)), and is consistent with EDPB Statement 1/2024's requirement for "holder-controlled audit" for the EUDI Wallet.<sup>55</sup>

**Engineering correction two: minimal delegation**. Every delegation must declare four scope dimensions: task scope (which verifiers, which attributes, which operations), temporal scope (start and end times; open-ended is not permitted), frequency scope (single use or multiple uses with a cap), and consent scope (whether re-confirmation is required before each exercise). Any dimension that is left open-ended violates the minimality requirement. For long-term agency spanning changes in capacity (such as benefit collection for elders with dementia), the wallet must at prescribed intervals (recommended: every 6 months or triggered by a status event for the principal) mandate reassessment of the delegation scope; a failed reassessment automatically reduces the delegation scope to the "present-task minimum." This corresponds to a denser version of Peru's Art 659-C biennial mandatory review.<sup>51</sup>

**Engineering correction three: multi-tenant delegated key custody**. Multi-tenant must be distinguished from multi-profile: multi-profile refers to "multiple identity profiles for the same person on the same device" — this remains substituted logic. Multi-tenant delegated key custody must mean "multiple independent legal subjects coexisting on the same device, each retaining an independently exercisable key capability and an independently revocable consent capacity." The EUDI ARF (2025-12 iteration; v1.4 as historical stable snapshot) provides multi-profile but not multi-tenant; ARF Annex 2's treatment of representation extends only to "single-shot delegation," not to "coexisting independent subjects."<sup>11</sup> POTENTIAL Use Case 6 is the only one among the four large-scale pilots that addresses representation, but the 2025 mid-term evaluation report acknowledges that "the cryptographic primitives for mandate scenarios still rely on issuer-side attestation; holder-side delegated key custody has not been implemented."<sup>12</sup>

Supplementary primitive recommendations are as follows. **E1 Coexistent-Subject DID Document** — add a `coexistentSubjects` field to the DID Document, listing coexisting independent subjects on the same device together with their respective `verificationMethod`; each subject must retain independently revocable key capability. **E2 Delegation Provenance Credential** — define a new VC type `DelegationProvenanceCredential` that must be presented alongside ordinary VCs in every agent operation. **E3 Unilateral Revocation Protocol** — the W3C working group should define a cross-wallet "unilateral revocation" protocol. **E4 Capacity-aware Issuance Hint** — for elderly, dementia, and incapacity scenarios, issuers may embed a `capacityProfile` hint in the VC, alerting verifiers to require additional deliberation evidence during verification.

### § 5.5 CRPD Flowing Back Through ICCPR + ICESCR as a Universal Engineering Obligation

A final critical tier argument. CRPD is a "disability rights legal framework," superficially applicable only within the disability domain. Extending it to "all wallet users" requires an explicit three-step argument.

**Step one (factual layer)**: The wallet is the factual mandatory channel for civic action (A15, Chapters 3–4, has already argued that the right to wallet access is a precursor right<sup>9</sup>). When the wallet transitions from an optional tool to infrastructure, all users enter its design constraints.

**Step two (normative layer)**: CRPD General Comment No. 1 §27 explicitly states that "the right to equal recognition before the law is a fundamental right that **applies to all persons** at all times" (emphasis in original).<sup>10</sup> The design principles of supported decision-making (scope minimisation, dynamic assessment, unilateral revocability, decision evidence chain) are framed within the CRPD as applicable to disability scenarios, but their normative core — "not stripping legal capacity" — constitutes a normative requirement for all users.

**Step three (reflux layer)**: Through ICCPR Art 26 (equal protection) and ICESCR Art 2(2) (non-discrimination) and Art 9 (social security access),<sup>56</sup> the engineering requirements of CRPD flow back to become "a universal engineering obligation binding on all wallet users." When wallet design degrades supported to substituted, all shared-device scenarios, all agent delegation scenarios, and all elderly/dementia/incapacity groups suffer normative harm. The character of this reflux is a normative consistency argument — acknowledging that "the design obligations of universal infrastructure cannot fall below the rights protections of special groups" — and does not constitute an expansive interpretation of disability rights applied to the general population.

## § 6. Cross-Jurisdictional Accountability Vacuums: Three-Type Structure and the Q10a/Q10b Disaggregation

### § 6.1 Three Types of Accountability Vacuum

Following the literature, "accountability vacuum" should be classified into three types: the moral crumple zone type (the nearest human absorbs the impact), the algorithmic opacity type (even the nearest human cannot attribute causation), and the cross-jurisdictional diffusion type (liability ping-pongs among multiple jurisdictions). All three types are simultaneously superimposed in the LLM-agent wallet scenario.

**Type (i) — Moral crumple zone (Elish)**: when automated systems fail, responsibility concentrates toward "the nearest human."<sup>26</sup> Crootof, Kaminski & Price (2023) term this structure a "liability sink" — the supervisory role is designed to absorb responsibility rather than to exercise substantive oversight.<sup>35</sup> In the LLM-agent scenario, "the nearest human" may be the agent operator (the delegating party), who has no real-time ability to intervene during agent execution yet bears the ultimate legal consequences.

**Type (ii) — Algorithmic opacity**: when the internal reasoning logic of an ML model cannot be attributed (even the nearest human cannot precisely explain why), the "nearest human" cannot bear meaningful responsibility. Bechmann & Bowker (2019) on the non-auditability of ML black boxes provide the engineering foundation for this type;<sup>24</sup> the unresolved dispute over whether the SyRI algorithm in the Netherlands contained "race" or "migrant background" variables is the paradigm case of this type.<sup>19</sup>

**Type (iii) — Cross-jurisdictional diffusion**: when the development, deployment, execution, and occurrence of harm attributable to an agent fall under different jurisdictions, responsibility diffuses across multiple jurisdictions with no single jurisdiction capable of claiming structural priority. Korff & Brown (2024) on cross-border accountability gaps<sup>57</sup> and the conflicts-of-law analysis of Article 14 §4 (characterising the situation as rule over-determination rather than rule vacuum) provide the structural foundation for this type.<sup>8</sup>

The superimposition of all three types is a characteristic feature of the LLM-agent wallet scenario. When an EU citizen uses an agent trained by a US model provider to execute a civic action before a Singapore-based verifier and fails, all three types appear simultaneously: the agent operator absorbs the damage (type i), the ML black box renders precise attribution impossible (type ii), and responsibility diffuses across four jurisdictions (type iii).

### § 6.2 Disaggregation of the Fifth-Category Gap: Q10a and Q10b

Article 14 §3.5 identifies "LLM-agent wallet automatic proxy-signing of credentials" as a candidate fifth-category gap (agent-mediated misverification gap) without disaggregating sub-types. This article disaggregates it into two sub-types, on the grounds that the two governance response paths differ.

**Q10a: The cryptographic attribution gap in authority transfer**. When an AI agent presents a VC presentation on behalf of the holder, is the holder's non-repudiation established? Specifically: when an AI agent presents a VC presentation and the holder subsequently claims "I did not authorise this presentation" (for example, a prompt injection attack caused the AI agent to present the VC without the holder's knowledge), can cryptography distinguish holder self-signing from agent proxy-signing? This gap belongs to the "cryptographic primitive layer"; the governance path is the `AgentDelegationProof2026` standard being advanced by W3C VC v2.0 and DIF, together with the holder self-signed `AgentDelegationCapability` enabling envelope.

**Q10b: The cross-border multi-party accountability allocation gap in accountability allocation**. When an AI agent fails, there is no default rule governing liability allocation among issuer / verifier / wallet provider / agent provider / model provider in cross-border scenarios. Specifically: when an AI agent causes a cross-border welfare application to fail (the issuer in country A, the verifier in country B, the wallet provider in country C, the agent provider in country D, and the holder in country E), how is liability allocated? This gap belongs to the "liability allocation layer"; the governance path is a treaty-level multi-party liability allocation rule (analogous to the Brussels I Recast's unification of intra-EU attribution rules).<sup>58</sup>

### § 6.3 The Five-Segment Chain: Formalisation of L1–L5

The "five-segment chain" of A14's Q10 can be formalised as follows:

- **L1 (agent developer, model provider)**: designs the agent's decision authority and trust calibration;
- **L2 (agent operator / delegating party)**: selects the deployment scenario and issues high-level instructions;
- **L3 (wallet provider)**: provides the cryptographic primitives for holder/agent distinction;
- **L4 (issuer)**: issues the credential that is misused;
- **L5 (verifier)**: accepts the agent's automatic proxy-signing.

L1 through L5 may each be located in different countries in cross-jurisdictional scenarios, with responsibility diffusing across the five segments. When downstream harm occurs, existing law (GDPR Art 22, AI Act Art 25, eIDAS 2.0 Art 5b, Brussels I Recast)<sup>15,2,1,58</sup> covers only individual segments of the chain, not the chain as a whole. This is the specific form taken by the Article 14 §3.5 "candidate fifth-category gap" — the problem is not "no rules," but rather "rules are fragmented and enforcement capacity attenuates across borders."

### § 6.4 Relationship to the Existing Four-Category Gaps of Article 14

| Existing Gap | Expansion following LLM-Agent Intervention |
|---|---|
| (a) Verifier rejection | Verifier rejects agent signature; two new liability segments — agent operator and agent provider |
| (b) Issuer erroneous revocation | Issuer revocation affects a batch of credentials already agent-signed; agent provider's audit obligation for "stale credential used in downstream signing" |
| (c) Vendor failure | Dual-layer failure: agent provider failure vs wallet provider failure; unclear liability boundary |
| (d) Cross-border privacy breach | Agent training data and interaction records flow cross-border; dual scrutiny under GDPR Art 22 + Art 5(1)(c) |

By disaggregating the fifth-category gap into Q10a/Q10b, the governance responses to the existing four gap categories find corresponding expansions in the LLM-agent scenario, rather than requiring an entirely new gap classification.

## § 7. Policy Synthesis: FTLA-Agent Four-Tier Governance

### § 7.1 The FTLA-Agent Framework

Extending the Article 8 FTLA framework to AI agent governance yields the FTLA-Agent four-tier stratified governance:

- **G_industry^A** (industry and standards-organisation self-governance layer): W3C DID Auth, Model Context Protocol, agent-to-agent protocols, ISO/IEC 42001, W3C VC v2.0 selective disclosure, DIF Trust Establishment;<sup>59,60</sup>
- **G_state^A** (state recognition layer): domestic AI agent rights legislation (EU AI Act, Brazil ANPD AI guidance, Korea PIPA AI amendment, Singapore Model AI Governance Framework v3)<sup>2,61,62,63</sup> + AI agent provider certification programmes + designation of competent authorities;
- **G_recognition^A** (cross-border mutual recognition layer): OECD AI Principles 2024, Hiroshima Process Friends Group, Seoul Declaration, Council of Europe AI Convention CETS 225, APEC CBPR, bilateral AI mutual recognition agreements;<sup>64,65,46</sup>
- **G_oversight^A** (regulatory participation layer): GDPR Art 22, EDPB 2024 update, EU AI Act Art 25/Annex III, national DPAs, consumer protection authorities, AI Safety Institute network.<sup>15,66,2</sup>

Extending the FTLA framework from identity infrastructure governance to AI agent governance requires a structural isomorphism argument. The isomorphism is strong in the "protocols and standards" dimension (W3C VC vs MCP; eIDAS 2.0 vs AI agent legislation); medium in the "sovereignty and multi-party cooperation" dimension (the multi-party relational structure is isomorphic); and weak in the "actor attribution" dimension, requiring supplementation from the Tomasev five elements (an agent is not a legal person; its "behaviour" is a compound product of model + system prompt + RAG context + tool use). The extension of FTLA to AI agent governance adopts a "framework inheritance + issue expansion" strategy to avoid the wholesale adoption trap.

### § 7.2 Asymmetric Thickness of the Four Tiers in 2026

This is the critical revision emerging from the literature. The original version assumed equal-weight governance responses across four tiers, but the actual thickness distribution in 2026 is:

| Governance Tier | 2026 Thickness | Primary Bearers | Primary Gaps |
|---|---|---|---|
| G_industry^A | Thick | W3C VC, MCP, DID Auth, ISO 42001 | Marking of agent-presented VCs and holder binding still pending standardisation |
| G_state^A | Weak | EU AI Act + some OECD countries' AI legislation | AI agent rights legislation immature in most jurisdictions; agent provider certification programme vacant |
| G_recognition^A | Weakest | OECD AI Principles + Hiroshima Process (soft law) | No cross-border AI agent mutual recognition framework; OECD vs non-OECD gap |
| G_oversight^A | Thick (within EU) | GDPR Art 22 + AI Act Art 25 + EDPB | Cross-border enforcement depends on member state market surveillance authorities; insufficient coverage outside EU |

The original "simultaneous advancement across four tiers" version is not feasible; "stratified governance allowing some tiers to advance first" is a more verifiable claim.

### § 7.3 G_industry^A Issue Agenda

**Issue 7.3.1: Cryptographic marking and holder binding for agent-presented VCs**. When an AI agent presents a VC presentation on behalf of a holder, the verifier must be able to identify at the cryptographic layer that "this is agent proxy-signed, not holder self-signed." Specific mechanism: add `AgentDelegationProof2026` to the `proof.type` of the VC presentation; the holder self-signed `AgentDelegationCapability` VC serves as the enabling envelope; during verification, the verifier must simultaneously verify the agent's attestation and the holder's delegation capability.

**Issue 7.3.2: Privacy floor for MCP and agent-to-agent communication**. MCP (Anthropic 2024)<sup>67</sup> and Google's A2A protocol are the underlying specifications for AI agent cross-tool and cross-service communication. Standards to be established include: mandatory selective disclosure defaults, mandatory TTL for ephemeral context, and opt-in federated inference.

**Issue 7.3.3: Agent state portability and interoperability testing**. When a holder switches from agent provider A to B, the agent state (including conversation history, user preferences, and delegated capabilities) must be portable. It is recommended that DIF's Agent Portability WG develop an Agent State Format standard.

**Issue 7.3.4: Countermeasures against the industry capture risk**. Frontier model providers (OpenAI, Anthropic, Google DeepMind, Meta, Mistral) exert substantially greater influence in W3C / DIF / OASIS working groups than wallet vendors did in the W3C VC WG, intensifying the industry capture risk.<sup>68</sup> Countermeasures: strict enforcement of open standards procedures at IETF/W3C, public-sector participation in standards development through bodies such as the NIST AI Safety Institute Consortium, and the human rights floor provided by the Council of Europe AI Convention CETS 225.<sup>46</sup>

### § 7.4 G_state^A Issue Agenda

**Issue 7.4.1: Legislation on the legal validity of AI agent rights**. EU AI Act 2024/1689 regulates high-risk AI systems (Annex III) but does not directly address the legal validity of "an AI agent expressing the will of a holder in civic action."<sup>2</sup> Required legislative content: the delegability boundaries of AI agents in scenarios such as voting, association, and petitioning (aligned with Section 4's R-DEMARCATION); the legal effect scope of AI agents signing legal documents on behalf of holders; attribution rules when AI agents fail.

**Issue 7.4.2: AI agent provider certification programme**. By analogy with the trust service provider certification requirements of eIDAS 2.0 Art 5b,<sup>1</sup> G_state^A needs to establish the legal standing of agent providers: designation of the competent certifying authority, certification items, and licence revocation mechanisms.

**Issue 7.4.3: Admissibility of AI agents in judicial and administrative procedures**. When citizens use AI agents to submit applications, initiate litigation, or respond to administrative investigations, administrative and judicial bodies must have clear admissibility rules. Specific issues include: whether administrative documents filled by AI agents require disclosure of agent use (analogous to the disclosure requirement for COMPAS in sentencing in *Loomis v Wisconsin* 2016<sup>20</sup>); and whether pleadings drafted by AI agents affect admissibility (the US *Mata v Avianca* 2023 treatment of ChatGPT-generated pleadings constitutes a negative precedent<sup>69</sup>).

**Issue 7.4.4: State capture risk**. Authoritarian jurisdictions may intervene aggressively via G_state^A. China's *Interim Measures for the Management of Generative Artificial Intelligence Services*, Art 4, incorporates AI content into ideological administration.<sup>70</sup> These practices are difficult to reconcile with G_recognition^A soft law (the OECD AI Principles' emphasis on human rights), requiring a G_oversight^A backstop (CETS 225 Art 4 human rights floor).<sup>46</sup>

### § 7.5 G_recognition^A Issue Agenda

**Issue 7.5.1: Cross-border recognition agreement for AI agent delegation rights**. When a holder uses their home-country agent provider to execute a delegation in cross-border civic action, recognition is doubly required: recognition of the delegation rights granted by home-country legislation (public law) and recognition of the agent provider's operating legitimacy (private law). Specific mechanisms: bilateral delegation rights recognition agreements; extension of the Hague Conference on Private International Law's e-Apostille framework;<sup>71</sup> extension of the GCC Digital Identity Mutual Recognition Initiative (2024)<sup>72</sup> and the ASEAN Digital Economy Framework Agreement to AI agents.

**Issue 7.5.2: Specific vehicles for soft-law cross-border mutual recognition**. The OECD AI Principles 2019/2024, Hiroshima Process Friends Group, Seoul/Bletchley Declaration, and CETS 225 constitute the current soft-law network. However, the enforcement capacity of these instruments is far weaker than GDPR's consistency mechanism. Countermeasures: expand the Hiroshima Process Friends Group into a multi-regional dialogue resembling G7 + Indo-Pacific + Latin America + Africa; upgrade the OECD AI Incidents Monitor into an official cross-border AI failure case database; develop implementation rules for CETS 225 Art 16 (risk assessment) through a joint cross-border working group.

**Issue 7.5.3: Lowest-common-denominator risk**. G_recognition^A cross-border mutual recognition may degrade into weak consensus, dragging high-standard members toward low standards. Countermeasures: G_oversight^A's strong regulatory backstop through GDPR/CETS 225; the APEC CBPR and Global CBPR Forum 2024 enforcement-grade certification replacing self-attestation.

**Issue 7.5.4: OECD vs non-OECD gap**. The OECD AI Principles and Hiroshima Process primarily cover OECD members and G7 invitees — approximately 65 percent of global GDP but only 18 percent of population. Non-OECD jurisdictions (India, Indonesia, Brazil, Nigeria, Egypt, and other major emerging economies) are developing their AI agent governance agendas independently. Specific countermeasures: dialogue mechanisms between the AU Continental AI Strategy (2024)<sup>73</sup> and the EU; the BRICS AI Working Group (if established) as a parallel dialogue platform; the ITU AI for Good Global Summit as a non-aligned technology dialogue.

### § 7.6 G_oversight^A Issue Agenda

**Issue 7.6.1: Coverage and gaps of GDPR Art 22 for AI agents**. GDPR Art 22(1) provides that data subjects have the right "not to be subject to a decision based solely on automated processing." CJEU *SCHUFA* (C-634/21, 2023) brought "decisive influence" within the scope of Art 22.<sup>17</sup> Gaps for the AI agent scenario include: AI agents are frequently a semi-automated process of "holder-triggered, AI-executed, verifier-accepted," where the "solely automated" test may not apply; the three exceptions in Art 22(2)(a)–(c) may be abused through wallet terms of service; and the remedies under Art 22 need to be redesigned for fine-grained enforcement in AI agent contexts. The EDPB 2024 update on automated decision-making has signalled forthcoming refined guidance on this point.<sup>66</sup>

**Issue 7.6.2: Coverage and gaps of EU AI Act Art 25**. Art 25 sets out obligations for AI system providers (including non-EU providers placing products on the EU market).<sup>2</sup> Gaps include: Annex III's high-risk list covers civic action scenarios partly but not completely; Art 25 enforcement depends on member state market surveillance authorities, which run parallel to but are not integrated with the GDPR Art 56 lead supervisory authority; and the responsibility-transfer rules for "downstream agent providers using GPAI services for civic action" under the GPAI obligations chapter have not yet been finalised.

**Issue 7.6.3: Cross-border cooperation among consumer protection authorities**. Regulation (EU) 2017/2394 (CPC Network) established an SLO mechanism for cross-border consumer protection,<sup>74</sup> but the average processing time is 16 months. Extension to AI agents: the CPC Network should explicitly cover AI agent disputes in the 2027–2028 revision; integration with the ICN cross-border enforcement working group; expansion of FIN-NET's AI agent failure ADR mechanism.

**Issue 7.6.4: The cross-jurisdictional role of the AI Safety Institute network**. UK AISI (2023), US AISI (2024), EU AI Office (2024), Japan AISI (2024), Korea AISI (2024), Singapore AISI (2024), and Canada AISI (2024) constitute the AI Safety Institute network.<sup>65</sup> Specific roles for G_oversight^A: cross-border sharing of frontier model evaluations; cross-border reporting of AI agent failure incidents (upgrading the OECD AI Incidents Monitor as the backbone); special evaluation standards for high-risk scenarios (voting, healthcare, welfare).

### § 7.7 Five-Party Liability Allocation (Analytical Recommendation)

For five-party liability allocation in a cross-border LLM-agent wallet failure, this article recommends: issuer 25 / verifier 25 / wallet provider 15 / agent provider 25 / model provider 10. This allocation is a policy recommendation figure, explicitly noted as "pending actuarial and cross-border dispute statistical support."

| Five Parties | Liability Share | Primary Basis |
|---|---|---|
| Issuer | 25% | Reasonable expectation obligation for "credentials usable by agents"; analogous to eIDAS 2.0 Art 5b trust service provider |
| Verifier | 25% | Reasonable identification obligation for agent-presented VCs; may not arbitrarily reject but may not unconditionally accept |
| Wallet provider | 15% | Provides cryptographic primitives for holder/agent distinction; lower share because not an active agent |
| Agent provider | 25% | The direct liable subject for deploying the agent; the central target of EU AI Act Art 25 |
| Model provider | 10% | Provides the frontier model but does not directly deploy the agent; covered by GPAI obligations chapter |

Specific ratios require refinement through three calibration paths: actuarial estimation (extending from the cyber insurance domain), cross-border dispute statistics (extending from the Brussels I Recast case repository), and case-by-case adjustment (based on task risk category).

### § 7.8 Temporal Phasing (Analytical Recommendation)

Recommended temporal phasing for four-tier governance from 2026 to 2040:

- **G_industry^A and G_oversight^A: feasible within 5 years (2026–2031)**. W3C VC v2.0, MCP standardisation, EDPB 2024 update, and AI Safety Institute network expansion are extensions of existing paths;
- **G_state^A: 5–10 years (2027–2036)**. EU AI Act and some OECD countries' AI legislation are already underway; agent provider certification programmes and AI agent rights legislation require 5–10 years to mature;
- **G_recognition^A: 10–15 years (2031–2041, within the OECD)**. Accumulation of CETS 225, Hiroshima Process Friends Group, and bilateral mutual recognition agreements requires more than 10 years; coverage gaps outside the OECD will persist.

Temporal phasing is an analytical recommendation, not a prediction. The pace of technological iteration and political will are the two primary variables; the former may accelerate G_industry^A, the latter may delay G_state^A.

## § 8. Process Tracing: Five Failure Cases

### § 8.1 Robodebt (Australia 2016–2020)

The Australian Department of Human Services deployed the Online Compliance Intervention system in 2015–2016. From July 2016, the system generated approximately 470,000 incorrect debt notices totalling approximately AU$1.76 billion; at least 3 suicides were directly linked to Robodebt by the Royal Commission.<sup>75</sup> The Federal Court in *Prygodicz v Commonwealth* (2021) found the entire mechanism unlawful, and a class action settlement of AU$1.8 billion was reached.<sup>76</sup> The Royal Commission Final Report (2023) dispersed responsibility among the political decision-making tier, senior public servants, legal advisers, the system-design engineering team, and frontline staff. Frontline case officers and welfare recipients became dual bearers of Elish's moral crumple zone; the system developer (NTT Data and other contractors) was almost entirely absent from the attribution path. This case corresponds to the Section 3 matrix cells AA-𝒩 △ + AA-ℱ △, the failure of active contestation in the Section 4 four-dimensional criteria, and Section 6's type (i) moral crumple zone and type (ii) algorithmic opacity.

### § 8.2 The Netherlands SyRI and *Toeslagenaffaire* (2014–2021)

SyRI (System Risk Indication) was a cross-departmental risk-scoring system deployed by the Dutch Ministry of Social Affairs and Employment from 2014. The District Court of The Hague held in *NJCM et al v De Staat der Nederlanden* (ECLI:NL:RBDHA:2020:865) on 5 February 2020 that SyRI violated ECHR Art 8 (right to private life) on grounds of lack of transparency and disproportionality.<sup>19</sup> In the *Toeslagenaffaire* scandal, approximately 26,000 households (mostly of migrant background) were erroneously flagged as fraudulent, leading to family breakdown and forced placement of children; the Rutte III Cabinet collectively resigned in January 2021.<sup>77</sup> The designers of the SyRI algorithm (the inter-ministerial development team and external contractors) were not named parties in the litigation; whether the *Toeslagenaffaire* ML model explicitly incorporated "race" or "migrant background" variables remains unresolved. This case corresponds to Section 3 matrix cells TC-𝒩 △ + AA-ℱ △, Section 6's type (ii) opacity dominant with partial type (iii) cross-jurisdictional diffusion.

### § 8.3 India Aadhaar-PDS / NREGA Automated Exclusion (2017–2025)

Aadhaar itself is a biometric authentication system, but after 2018 the PDS (Public Distribution System) and NREGA (National Rural Employment Guarantee Act) progressively introduced ABPS (Aadhaar-Based Payment System) and e-KYC automated verification. The Right to Food Campaign documented at least 80 hunger-related deaths directly linked to Aadhaar/PDS between 2017 and 2024,<sup>78</sup> with the representative case being Santoshi Kumari (11 years old) in Simdega District, Jharkhand, in September 2017, who died after eight consecutive days without food due to her family's failed Aadhaar linkage.<sup>79</sup> Field research by Drèze & Khera documented exclusion error rates of 20–30 percent in parts of Jharkhand.<sup>80</sup> The Internet Freedom Foundation (2024) reported that NREGA ABPS mandatory implementation caused payment failures for millions of rural workers between 2023 and 2024.<sup>81</sup> The attribution chain is broken: there is no connecting factor among the technical system designer, policy decision-maker, frontline PDS shop owner, and victim family that can claim structural priority. This case corresponds to Section 3 matrix cells AA-ℱ ✗ + TC-𝒩 △ and Section 6's superimposition of types (i) and (ii).

### § 8.4 *State v Loomis* and COMPAS Risk Scoring (2013–2024)

COMPAS is a proprietary recidivism risk-scoring algorithm developed by Northpointe (later Equivant). Eric Loomis was sentenced to 6 years in Wisconsin for fleeing from police in a vehicle; the sentencing judge relied on a PSI report containing a COMPAS high-risk score. The Wisconsin Supreme Court upheld the sentence in *State v Loomis*, 881 N.W.2d 749 (Wis. 2016), on the grounds that the COMPAS score was "only one of the factors considered by the judge" and not determinative.<sup>20</sup> ProPublica revealed in 2016 that COMPAS exhibited systematic racial bias against Black defendants (a misclassification rate twice that for white defendants).<sup>82</sup> The judge (State) bore legal responsibility as the "ultimate decision-maker"; the algorithm vendor was shielded from algorithmic disclosure by trade secret protection; individual judges deflected responsibility with "it was merely a reference." Crootof, Kaminski & Price (2023) term this structure "rubber stamp" supervision.<sup>35</sup> This case corresponds to Section 3 matrix cell AA-ℬ ✗ (contestation non-delegable), and the failure of active-stance contestation in the Section 4 four-dimensional criteria.

### § 8.5 Tornado Cash (2022–2024)

Tornado Cash is a privacy mixer smart contract deployed on Ethereum, automatically executing a mixing protocol. In 2022, OFAC added the protocol's smart contract addresses to the SDN list on the grounds that the DPRK Lazarus Group had used it to launder approximately US$455 million.<sup>83</sup> Developers Roman Storm and Roman Semenov were indicted by SDNY in August 2023 on charges including conspiracy to commit money laundering and sanctions violations.<sup>84</sup> The Fifth Circuit in *Van Loon v Treasury*, 122 F.4th 549 (5th Cir. 2024), held in November 2024 that immutable smart contracts do not constitute "property" within the meaning of IEEPA, and vacated that portion of the sanctions.<sup>85</sup> The developers bore the responsibility (a reversed crumple zone: the automation of the protocol caused developers to be treated as "the last accountable persons"), but the decentralised character of the smart contracts made the "chain of command" difficult to reconstruct. This is a close precedent for the LLM-agent wallet scenario: when agent behaviour is automated, cross-border, and irreversible, responsibility tends to be "traced back" to the designers. This case corresponds to Section 3 matrix cells RT-𝒩 △ + AA-𝒩 △ and Section 6's type (iii) cross-jurisdictional diffusion dominant.

### § 8.6 Summary Comparison of Cases

| Case | Domain | Matrix Cell Correspondence | Criterion Failure | Crumple Type | Governance Tier |
|---|---|---|---|---|---|
| Robodebt (Australia 2016–2020) | Welfare automated debt recovery | AA-𝒩 △ + AA-ℱ △ | Active contestation | (i) + (ii) | G_state^A weak |
| Netherlands SyRI / *Toeslagenaffaire* | Welfare anti-fraud | TC-𝒩 △ + AA-ℱ △ | Communicative orientation | (ii) dominant + partial (iii) | G_oversight^A: District Court 2020 |
| Aadhaar PDS deaths + ABPS 2023–25 | Welfare-collection digitalisation | AA-ℱ ✗ + TC-𝒩 △ | First-personal stance | (i) + (ii) superimposed | G_state^A: India DPDP regulatory body |
| *State v Loomis* (2016) | AI-assisted sentencing | AA-ℬ ✗ | Active-stance contestation | (ii) | G_oversight^A: divergent US state AI sentencing guidelines |
| Tornado Cash 2022–25 | Privacy mixing + DPRK sanctions | RT-𝒩 △ + AA-𝒩 △ | First-personal and attribution ruptured | (iii) dominant | G_recognition^A failed: US OFAC vs EU divergence |
| *SCHUFA* C-634/21 (2023) | Credit scoring | AA-ℱ △ | (Does not directly involve political action) | (ii) | G_oversight^A: GDPR Art 22 expanded interpretation |

## § 9. Counterfactual Pressure Tests

### § 9.1 CF1: OECD Five-Nation Mutual Recognition

**Counterfactual scenario**: Assume that in 2028, the EU AI Act, Brazil's ANPD AI guidance, Singapore's Model AI Governance Framework v3, Korea's PIPA AI amendment, and Japan's PIPA AI Bill — five independent AI governance regimes — reach a mutual recognition agreement. The specific mechanism: the five countries' AI Safety Institutes mutually recognise each other's frontier model evaluations; an AI agent provider certified in any one of the five countries automatically acquires operating eligibility in the other four; AI agent failure incidents are shared across the five countries; cross-border redress channels are handled by SLO mutual referral among the five.

**Pressure test**: This scenario represents the most optimistic case for the G_recognition^A tier. Even if the five countries achieve mutual recognition, four gaps will persist.

First, **the coverage gap**. The five countries (EU 27 + Brazil + Singapore + Korea + Japan) together account for approximately 35 percent of global GDP and 12 percent of population, covering less than one quarter of the globe. Large emerging economies — India, Indonesia, Nigeria, Mexico — are not covered; most of Africa, the Middle East, and Latin America are entirely uncovered. The OECD vs non-OECD gap, under this scenario, is not eliminated but accelerated (the governance density of the former rises; the relative position of the latter declines).

Second, **the asymmetry between frontier model training and deployment**. Among the five countries, the EU, Korea, Japan, and Singapore are secondary jurisdictions for frontier model training (the primary jurisdictions are the US, China, and the UK); five-nation mutual recognition cannot resolve "liability for US/Chinese-trained models deployed in the five countries." Filling this gap requires extending the EU-US TTC AI Roadmap 2024 and advancing US-China AI dialogue (currently at an impasse).

Third, **specific liability attribution rules for cross-border AI agents remain unharmonised**. Even with mutual recognition of certification programmes, the liability allocation among model provider / agent provider / wallet provider / verifier / issuer in an AI agent failure incident would still be determined by each country's domestic law. The "normative deferral" analysis of Article 14 §6 applies here — normative deferral requires "bilateral consent conditions"; five-nation mutual recognition satisfies the consent conditions but harmonising specific attribution rules still requires a treaty-level agreement (analogous to the Brussels I Recast's unification of intra-EU attribution rules).

Fourth, **the AI agent civic action scenarios of the Global South are almost entirely uncovered**. The CF1 five-nation mutual recognition is effective for a Brazilian citizen using AI agents in Singapore to execute civic action (both within the five nations), but not for a Brazilian citizen using AI agents in Argentina.

**Conclusion**: Under CF1, the G_recognition^A coverage rate improves to OECD five-nation mutual recognition, but is insufficient to fill the global cross-border AI agent accountability vacuum; the OECD vs non-OECD gap will persist. FTLA-Agent therefore does not claim that "G_recognition^A achieves global coverage within 5–10 years"; the revised claim in §7.8 — "10–15 years for intra-OECD mutual recognition, persistent gaps outside the OECD" — is confirmed by the CF1 pressure test.

### § 9.2 CF2: One Million EU Citizens' Voting Rights Cross-Border Failure

**Counterfactual scenario**: Assume that in 2027, X-Wallet (fictitious name; assume headquarters in Silicon Valley, servers in Ireland, and agent model trained by an Anthropic-or-equivalent in Silicon Valley) deploys the LLM agent "VoteHelper" to automatically proxy-sign EUDI Wallet voting credentials for EU citizens. The agent, while processing cross-border voting (overseas voting for European Parliament elections), misidentifies the identity of a batch of Polish and Italian citizens, causing the voting rights claims of these 1 million citizens to be rejected by verifiers in each country. The harm occurs on the European Parliament election day in June 2028; ex post remediation is not possible.

**Five-segment chain attribution paths**:

L1 (agent developer, Anthropic-or-equivalent): Under EU AI Act Art 25 "cross-border obligations for foreign providers," the agent falls within the Annex III "democratic processes" high-risk list and may be subject to an administrative fine of 7% of global annual revenue imposed by the EU AI Office. However, individual citizens cannot seek compensation directly from L1 — the AI Act does not create individual rights of action.

L2 (agent operator / X-Wallet's agency service provider): Under GDPR Art 22 + *SCHUFA*, the operator is a controller and must provide "reasoning of decision" and "meaningful human review"; theoretically, 1 million citizens could collectively bring a GDPR Art 82 damages claim. However, the coordination problem of a class action across 27 countries (there is no EU-level class action mechanism) renders this impractical; GDPR collective redress depends on member states' domestic law (Representative Actions Directive 2020/1828<sup>86</sup>).

L3 (wallet provider / X-Wallet): Under eIDAS 2.0 Art 5b, a trust service provider bears liability for "foreseeable damage caused intentionally or negligently"; but if X-Wallet has not obtained EUDI Wallet certification, Art 5b does not apply, and the matter reverts to member states' civil and commercial law.

L4 (issuer, e.g., Polish and Italian electoral authorities): As issuers of voting credentials, they may bear partial responsibility under domestic administrative law; but the "reasonable expectation obligation of issuers regarding agent automatic proxy-signing" has no judicial precedent.

L5 (verifier, electoral systems in each country): Under eIDAS 2.0 Art 5d's lawful grounds for refusing credentials, if verifiers reject agent signatures as non-compliant, the verifiers may be challenged under ECHR Protocol 1 Art 3 (right to free elections) — but this path requires individual citizens to sue the ECtHR, necessitating exhaustion of domestic remedies first, averaging 7–8 years.

**Quantification of the redress gap**:

- Administrative fines: the EU AI Office may theoretically impose a 7% fine on L1 (potentially in the billions of dollars range), but the fine flows into the EU budget and does not reach victims;
- Individual damages: for 1 million persons' non-material harm (voting rights failure), if estimated at €500 per person, the total is €500 million; the practical probability of recovery (based on comparison with Robodebt and *Toeslagenaffaire*) is approximately 10–30%;
- Procedure time: from the voting rights failure on election day in June 2028 to the first batch of individuals receiving actual compensation, an estimated 2032–2035;
- Remedial feasibility: voting rights failure is irreversible — the election has passed; individual remediation of that election result is not possible. Only monetary compensation can be obtained.

**Conclusion**: Under CF2, specific attribution paths exist but are fragmented, slow, and inequitable. Among the five segments of the chain, L1 and L3 have the strongest legal instruments but are inaccessible to individuals; L2 is individually suable but cross-border coordination is difficult; the liability boundaries of L4 and L5 are unclear. The problem is not "no rules"; the correct characterisation is "rules are fragmented and enforcement capacity attenuates across borders." CF2 is the specific form taken by Q10b (the cross-border multi-party accountability allocation gap in accountability allocation).

### § 9.3 CF3: Relational Personhood Becomes Widely Accepted

**Counterfactual scenario**: Assume that within the next 5–10 years, Coeckelbergh's relational personhood thesis<sup>87</sup> is widely accepted by academia, legislators, and mainstream society. The EU adopts some form of "AI Personhood Directive" recognising that certain high-level AI systems possess limited legal personhood (analogous to corporate legal personhood but narrower in scope). Under this scenario, would the position of AI agents in the structurally non-delegable zone change?

**Scenario analysis**:

(1) Legal recognition may correspond to "contractual capacity," "data protection rights," and "standing in tort litigation" as neutral legal statuses, but may not necessarily extend to "political citizenship rights." The historical analogy is corporate legal personhood: corporations have contract, tort, and property capacity, but no voting rights (*Citizens United v FEC* 2010 concerns corporate political spending, not the recognition of corporate voting rights).<sup>88</sup>

(2) The ontological version of the plurality argument can still block the counter-argument. Even if law recognises relational personhood, the ontological argument in Section 4 §4.1 (natality + mortality + irrevocability) does not depend on legal recognition. Law may recognise certain statuses, but cannot alter the ontological structure of the subject in question.

(3) However, the Habermas and Pettit approaches would be affected. If relational personhood is accepted, can AI agents serve as Habermas's "dialogue partners" in communicative action and Pettit's "bearers" in contestation? Whether Habermas's reciprocal recognition — "I recognise the other while the other recognises me" — holds in AI relational practice is an empirical question. Whether Pettit's bearer position — "capable of being named, interrogated, and penalised" — is technically realisable under a limited personhood framework (an AI system can be legally named, interrogated, and fined) remains questionable regarding normative significance: fining an AI system amounts to fining its operator, and responsibility still reverts to a human subject.

(4) Coeckelbergh himself (2024) in "Why AI Undermines Democracy" tends toward reinforcing the position of the human democratic subject,<sup>89</sup> indicating that his stance in the ethics vs politics domains is differentiated.

**Conclusion**: CF3's impact on SA2 is "down one tier, not down two tiers" — the ontological version of the plurality argument survives, while the Habermas and Pettit approaches are weakened but do not collapse. The three-approach conjunctive structure under CF3 still yields the conclusion that "the structurally non-delegable zone exists but its scope may narrow." Specifically, the endorsement of the final vote, the mens rea of criminal responsibility, and the first-personal disclosure of personal expression remain permanently non-delegable under CF3; but the bearer position in contestation may, in certain technologically mature scenarios, expand to include AI agents.

### § 9.4 CF4: Wallet Engineering Maintains the "Individual Ownership" Presupposition Unchanged for 5–10 Years

**Counterfactual scenario**: Assume that from 2026 to 2036, the mainstream presuppositions of wallet engineering remain unchanged — the three-presupposition structure of individual ownership / individual identification / individual private key is maintained; EUDI Wallet enters the phase of full mandatory implementation; Taiwan's TW DIW is mandatorily linked to health insurance, long-term care, retirement, and education; POTENTIAL Use Case 6's mandate scenario remains at issuer-side attestation; W3C issues no `coexistentSubjects` specification update; and audit-by-design and minimal delegation remain academic proposals rather than mandatory engineering requirements.

**Degradation path of supported decision-making within 5–10 years**:

**Years 1–2 (2026–2027)**: The population with dementia continues to grow (WHO 2024 projects 139 million by 2050);<sup>90</sup> family members executing wallets on behalf of principals occurs on a massive scale. Family members holding the principal's private key (direct proxy-signing) becomes the de facto standard in engineering. "Supported" and "substituted" are indistinguishable in the wallet scenario.

**Years 3–5 (2028–2030)**: The mandatory phase of EUDI Wallet triggers large-scale agent delegation demand. Multi-profile is widespread but multi-tenant still unimplemented. The "supported" structure for incapacitated and demented persons nominally exists but is 100 percent degraded to substituted (family holds the key) in engineering. The CRPD Committee's Concluding Observations to EU member states begin to emphasise "substituted degradation in digital identity systems."

**Years 6–8 (2031–2033)**: The absence of wallet-scenario audit means abuse cannot be detected. Cases of family members improperly diverting long-term care benefits and retirement funds surface in Taiwan and multiple EU countries. Courts encounter the evidential impasse of "inability to distinguish whether the principal consented." CRPD Committee's specific interpretation of General Comment No. 1 in wallet scenarios becomes a priority topic.

**Years 9–10 (2034–2036)**: Under the legal pressure of accumulated cases, some countries begin hasty legislation requiring audit-by-design and multi-tenant. But because the prior engineering foundation was not laid, implementation lags 5–10 years behind legislation. During this gap, CRPD Art 12's engineering obligations remain factually unfulfilled.

**Does this degradation constitute a violation of CRPD Art 12 obligations?**

CRPD Art 4(1)(a) requires states parties to "adopt all appropriate legislative, administrative and other measures to implement the rights recognised in the Convention";<sup>47</sup> General Comment No. 1 §50 sets no explicit timeline for "the progressive abolition of substituted decision-making" but requires "continuous progress."<sup>10</sup> When wallet engineering factually degrades supported to substituted, and states parties have taken no legislative or administrative measures to correct this, it constitutes a violation by omission of Art 4(1)(a).

**Conclusion**: The degradation path of CF4 is a realistic forecast, not an extreme assumption. If wallet engineering does not proactively correct course, supported decision-making in wallet scenarios will inevitably degrade to substituted within 5–10 years. This degradation constitutes a factual violation of CRPD Art 12 and may be pursued by the CRPD Committee through three mechanisms: Concluding Observations, individual communications, and the inquiry procedure. The engineering correction recommendations in Section 5 are the minimum necessary conditions for avoiding this degradation: without these corrections, CRPD obligations cannot be fulfilled in practice.



## § 10. Cross-Article Integration and Preview of Article 17 (F2)

This article is the sixteenth contribution to the civic-proof series (F1), building upon prior series arguments and previewing the next instalment.

**Integration with Article 4 (A4), "Pseudonymous Participation: Legal Recognition" (series-internal)**[^91]: A4 addresses the legal recognition of pseudonymous identity within digital identity infrastructure, with particular attention to the distinction between pseudonymous identification and real-name identification. The AT column of this article's matrix in Chapter 3 relies on the holder's first-personal endorsement, a requirement that demands further elaboration in pseudonymous scenarios — a pseudonym remains "an identity accumulated by a legal subject across an ongoing relationship" (accountable pseudonymity), which is distinct from "agent-mediated pseudonymous action without attribution" (a form of output that falls into the Q10a gap).

**Integration with Article 8 (A8), "DNS vs. Identity Trust Roots" (series-internal)**[^7]: A8 established the FTLA four-tier governance framework. Chapter 7 of this article extends that framework to FTLA-Agent, inheriting the four-tier conceptual structure while expanding upon the concrete issues at each tier. The isomorphism argument has been set out in §7.1.

**Integration with Article 14 (A14), "Cross-Jurisdictional Redress Gaps" (series-internal)**[^8]: A14 §3.5 listed "LLM-agent wallet automatic proxy-signing of credentials" as a candidate fifth-category gap. Chapter 6 of this article formally formalises this gap and disaggregates it into two sub-types: Q10a ("the cryptographic attribution gap in authority transfer") and Q10b ("the cross-border multi-party accountability allocation gap"). Section 7.7 proposes a five-party liability allocation of 25/25/15/25/10 (issuer/verifier/wallet provider/agent provider/model provider), explicitly designated as "an analytical recommendation pending actuarial and cross-border dispute statistical support."

**Integration with Article 15 (A15), "Civic Proof Inclusion Rights" §6.2 (series-internal)**[^9]: A15 §6.2 reveals that the three presuppositions of wallet engineering — individual ownership, individual identification, individual private key — cause supported decisions to degrade into substituted decisions in agent delegation scenarios. Chapter 5 of this article takes up this argument and provides: a three-layer engineering distinguishability criterion (the ex-ante deliberation layer, the ex-post reversibility layer, and the decision-trace layer); and three engineering corrections (audit-by-design, minimal delegation, and multi-tenant delegated key custody).

**Preview of Article 17 (F2), "The Minimum Data Structure for Civic Receipts in the Conditionally Delegable Zone"**: The DeliberationRecord schema introduced in §5.4 and the `civic-action-receipt` introduced in §7.3.1 are expressions of the same concept at different tiers of governance. F2 will address three unresolved problems: (i) selective disclosure mechanisms for civic receipts in cross-border scenarios (employing BBS+ signatures or SD-JWT); (ii) long-term preservation responsibility for civic receipts (holder-side vs. third-party notarial service); and (iii) court admissibility of civic receipts (drawing analogies with the treatment of ESI in civil litigation). F2's objective is to instantiate the engineering corrections of this article's Chapter 5 as standardisable cryptographic primitives.

## § 11. Honesty Boundary and Open Problems

### § 11.1 Cross-Tier Caveats L1–L5

The limitations applicable to the five cross-tier inferences of this article are set out in the table below.

| Caveat | Cross-tier | Strength Assessment | Limitation |
|---|---|---|---|
| **L1** | Identity infrastructure norm ⟨𝒩, ℱ, ℬ⟩ → civic action itself | Medium-strong | Transmission is complete at the "interface" tier through A15's precursor right; the "substantive" tier requires independent grounding in political-philosophical foundations |
| **L2** | Political-philosophical foundations (1958/1981/1997) → engineering design criteria (2026) | Medium | Arendt, Habermas, and Pettit wrote prior to the existence of LLMs; the ontological tier does not depend on a particular technological environment, but the boundary remains open on the empirical question of "whether future LLM-agents acquire autonomy in Habermas's sense" |
| **L3** | Single-jurisdiction Elish crumple zone → cross-jurisdictional accountability vacuum | Medium-strong | FTLA's four-tier stratification is an extension mechanism; the "responsibility crumple chain" (chain-form crumple zone) is an extension of the Elish framework rather than its original formulation |
| **L4** | Principal-agent theory → civic action delegation | Medium | Cross-category inference — agency theory implicitly presupposes utility maximisation, whereas the goals of civic action are often non-utility-based (dignity, recognition, voice); this article retains the instrumental use of PA theory in the 𝒩 and ℱ columns, while the ℬ column introduces alternative frameworks (Pitkin et al.) |
| **L5** | "Among persons" plurality → "persons vs. AI agent" plurality | Medium-weak | The W2 counter-argument requires the full argumentation of §4.1; treating plurality as an ontological rather than a functional criterion is a philosophical position choice, not an empirical fact |

### § 11.2 Five Honesty Boundaries

**Boundary One**: The classification of cell attributes (✓/△/✗) in the 5×3 matrix depends on a particular interpretation of the ℬ philosophical foundation. If Coeckelbergh's comprehensive relational personhood substitution is adopted, the ℬ column of the matrix must be reconstructed. This article adopts the ontological version — a philosophical position choice, not an empirical fact. CF3 (§9.3) provides a partial pressure test of this choice.

**Boundary Two**: The threshold values θ₁ ≈ 0.2 and θ₂ ≈ 0.7 are policy recommendation figures and require empirical calibration against ≥ 5 cases. The process tracing in Chapter 8 provides a preliminary distribution across five cases; however, coverage is biased towards high-income OECD countries, and coverage of Latin America, Africa, and Southeast Asia is insufficient.

**Boundary Three**: The argument that CRPD Art 12 flows back through ICCPR and ICESCR to become a universal engineering obligation is a normative argument, not a legal expansive interpretation. Invoking it as a direct basis for individual-state legislation may constitute overextension; a CRPD Committee General Comment specifically addressing wallet scenarios is the key next step for completing this argument.

**Boundary Four**: The five-party liability allocation figures (issuer 25 / verifier 25 / wallet provider 15 / agent provider 25 / model provider 10) are policy recommendation figures without empirical sources. The specific allocation requires refinement through three calibration pathways: actuarial methods borrowed from cyber insurance, cross-border dispute statistics drawn from the Brussels I Recast case repository, and case-specific adjustment by task risk category.

**Boundary Five**: The temporal phasing (G_industry^A/G_oversight^A within 5 years / G_state^A within 5–10 years / G_recognition^A within 10–15 years) constitutes prospective estimates, not predictions. Technological iteration speed and political will are the two primary variables. The assessment that coverage gaps outside the OECD will persist may be overly pessimistic and requires a counterbalancing argument addressing GCC, AU, and APEC trends.

### § 11.3 Open Problems

**O1 — Empirical calibration of degradation function parameters**: The parameters α, β, and θ of P_degrade require empirical calibration; ≥ 5 civic AI agent deployment cases are recommended for regression analysis.

**O2 — Temporal dimension of degradation**: The mechanism of model drift (occurring over 6–18 months) in degrading trust calibration; the datasets of Acemoglu and Restrepo (NBER, 2025)[^33] and Anthropic/OpenAI longitudinal evaluations are recommended.

**O3 — AI welfare system failures in Latin America**: Relevant cases include Argentina ANSES, Brazil's Bolsa Família digitalisation, and Mexico's CURP-AI integration (current retrieval results insufficient).

**O4 — Concrete governance pathways in non-OECD jurisdictions**: Country-by-country analysis covering India, Indonesia, Nigeria, Mexico, Brazil, South Africa, and Egypt.

**O5 — W3C standardisation pathway**: The W3C Working Group proposal pathway for DelegationProvenanceCredential and the coexistentSubjects DID Document field (recommended for W3C Recommendation status in 2027–2028).

**O6 — Interview requirements**: See notes/open-questions.md for specific interview subject recommendations — constitutional scholars (Chen Ai-Juan, Su Yen-Tu), AI ethics researchers (Liu Ching-Yi, Chiu Wen-Tsung), the CRPD National Monitoring Committee, the EUDI ARF Working Group, and Taiwan Alzheimer's Disease Association family members.

## § 12. Conditional Academic Conclusions

The core propositions of this article develop across three argumentative upgrades introduced in Chapter 1: the 5×3 = 15-cell necessary condition matrix (9/4/2 classification); CRPD Art 12 General Comment No. 1 §26–29 as a normative hard constraint; and the three-type classification of cross-jurisdictional accountability vacuums combined with the Q10a/Q10b disaggregation and temporal phasing. Following the elaboration in Chapters 3–9, three conditional conclusions may be drawn.

### § 12.1 Conclusion One: The Three-Zone Demarcation Is Contingently Valid, Subject to Engineering Corrections

AI agents in civic action may be situated within three zones: the delegable zone (Z₁), the conditionally delegable zone (Z₂), and the structurally non-delegable zone (Z₃). The permanently resident portion of Z₃ (RT-ℬ ✗ and AA-ℬ ✗) is determined by the conjunctive coverage of the Arendt, Habermas, and Pettit tripartite approach, and is non-delegable regardless of technological maturity. The validity of Z₂ depends on the execution of three engineering corrections (audit-by-design, minimal delegation, and multi-tenant delegated key custody); the absence of any one of these causes degradation to substituted-decision logic, falling into the contextually-determined portion of Z₃. The scope of Z₁ is determined by the threshold θ₁ ≈ 0.2 of the Chapter 3 degradation function, but this threshold awaits empirical calibration.

**Conditionality of the conclusion**: The three-zone demarcation is "conditionally valid" — the conditions being: (i) the conceptual validity of the Tomasev five-element 2+3 structure; (ii) the philosophical position that ℬ within ⟨𝒩, ℱ, ℬ⟩ is the conjunctive normative floor of the Arendt, Habermas, and Pettit tripartite approach; and (iii) empirical calibration of the parameters of the Chapter 3 degradation function. If any one of these three conditions is undermined, the demarcation conclusions require reconstruction.

### § 12.2 Conclusion Two: Cross-Jurisdictional Governance Progress Provides Partial Mitigation, Contingent on Phased FTLA-Agent Four-Tier Implementation

Cross-jurisdictional AI agent accountability vacuums cannot be resolved through a single governance tier. The FTLA-Agent four-tier governance framework exhibits asymmetric thickness in 2026: G_industry^A and G_oversight^A are thick; G_state^A is weak; G_recognition^A is weakest. The recommended temporal phasing is: G_industry^A/G_oversight^A feasible within 5 years; G_state^A within 5–10 years; G_recognition^A within 10–15 years (within the OECD); coverage gaps outside the OECD will persist. The five-party liability allocation (issuer 25 / verifier 25 / wallet provider 15 / agent provider 25 / model provider 10) constitutes an analytical recommendation.

**Conditionality of the conclusion**: Cross-jurisdictional governance progress provides "conditional partial mitigation" — the conditions being: (i) political will within the OECD (particularly within the European Union, the United States, and Asia-Pacific democratic jurisdictions); (ii) the oligopolistic structure of frontier model providers does not excessively obstruct standard-setting; and (iii) the implementing provisions of CETS 225 and the Hiroshima Process mature within 2027–2030. If any one of these three conditions fails, the rate of G_recognition^A coverage improvement will be substantially delayed.

### § 12.3 Conclusion Three: The Philosophical Position (Arendt/Habermas/Pettit vs. Coeckelbergh) Determines the Final Scope of Z₃

The final scope of the structurally non-delegable zone Z₃ depends on the choice of political-philosophical position: this article adopts the ontological version of the Arendt, Habermas, and Pettit tripartite approach, treating plurality, reciprocal recognition, and active-stance contestation as ontological structures exclusive to human beings. If Coeckelbergh's comprehensive relational personhood substitution is adopted, the scope of Z₃ would narrow (the bearer position of contestation might expand to include AI agents).

**Conditionality of the conclusion**: The scope of Z₃ is "conditionally determined" — the condition being the choice of political-philosophical position. This article's choice is supported by three considerations: (i) Coeckelbergh himself (2024), "Why AI Undermines Democracy," tends to reinforce the democratic subjectivity of human beings, exhibiting a distinction between his ethics domain and his politics domain positions[^89]; (ii) Bryson (2018), "Patiency is not a virtue," rejects the moral-subject status of AI[^27]; and (iii) CRPD General Comment No. 1's design principles for supported decision-making are spiritually aligned with relational personhood (both treat personhood as relational and supported), but this does not entail "the capacity to act as proxy in first-personal scenarios."

The pressure test conducted in CF3 (§9.3) concludes that — even if relational personhood is widely accepted — the ontological version of plurality remains sufficient to withstand the counter-argument, and the core of Z₃ (final voting, criminal liability, and first-personal expression) remains non-delegable. However, the boundary region of Z₃ (the bearer position of contestation) may expand under CF3. This article's final scope determination is: "core stable; boundary variable according to political-philosophical position."

---

## References

[^1]: Regulation (EU) 2024/1183 of the European Parliament and of the Council of 11 April 2024 amending Regulation (EU) No 910/2014 (eIDAS 2.0). *OJ L*, 30 April 2024. Articles 5a–5g (digital identity wallet), Article 11a (responsible Member State). Source level: A.

[^2]: Regulation (EU) 2024/1689 of the European Parliament and of the Council of 13 June 2024 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act). *OJ L*, 12 July 2024. Article 14 Human Oversight; Article 25 Provider Obligations; Article 50 Transparency; Annex III High-Risk Systems; Chapter V (GPAI obligations). Source level: A.

[^3]: Anthropic (2025). "Claude Computer Use: Evaluation Results and Safety Considerations." Technical Report. Source level: C (vendor white paper, cited as evidence of event existence).

[^4]: OpenAI (2025). "Operator: A Browser-Using Agent." System Card; Google DeepMind (2025). "Gemini Astra Capability Card." Technical Report. Source level: C.

[^5]: WEF / Capgemini (2025). "Agentic AI: Adoption and Governance Survey." Survey of executive AI deployment plans. Source level: B.

[^6]: Tomasev, N., Bileschi, M., Gabriel, I., Bach, S., Birhane, A. et al. (2026). "Intelligent AI Delegation." arXiv:2602.11865 [v2, 2026-02-14]. Google DeepMind. §§3.1–3.5 (original five-element decomposition); §3.6 (rebuttal of PA reductionism); §4.3 (dynamic constraint duality); §5.2 (civic context cases). Note: arXiv preprint, not peer-reviewed. Source level: A.

[^7]: Civic-proof series article 8 (2026-05-06), "DNS vs. Identity Trust Roots: The FTLA Four-Tier Governance Framework" (series-internal). Source level: A (series-internal).

[^8]: Civic-proof series article 14 (2026-05-09), "Cross-Jurisdictional Redress Gap: Four Typical Categories + Q10" (series-internal). Source level: A (series-internal).

[^9]: Civic-proof series article 15 (2026-05-10), "Civic Proof Inclusion Rights" §6.2 (series-internal). Source level: A (series-internal).

[^10]: UN Committee on the Rights of Persons with Disabilities (2014). General Comment No. 1 on Article 12: Equal recognition before the law. CRPD/C/GC/1, 19 May 2014. §§12–29 (specific requirements for supported decision-making); §§26–29 (mandatory requirement to abolish substituted regimes); §50 (timetable for "progressive abolition"). Source level: A.

[^11]: European Commission (2024). *The European Digital Identity Wallet Architecture and Reference Framework*, version 1.4.0, September 2024; (2025) version 1.5.0 (draft for comment). Source level: A (specification document).

[^12]: POTENTIAL Consortium (2025). *Mid-term Evaluation Report — Use Case 6: Power of Representation and Mandates*; NOBID Consortium (2025). *Mid-term Evaluation: Cross-border Payment Use Case*; DC4EU Consortium (2025). *Mid-term Evaluation Report*; EWC Consortium (2025). *EUDI Wallet Consortium Mid-term Report*. Source level: B.

[^13]: UN International Covenant on Civil and Political Rights (ICCPR), Art 26 (equal protection); International Covenant on Economic, Social and Cultural Rights (ICESCR), Art 2(2) (non-discrimination), Art 9 (social security access). Source level: A.

[^14]: EUDI Wallet ARF, 2025-12 Cooperation Group rolling iteration (stable historical snapshot v1.4), §6.6.3 Delegation specification. Source level: A.

[^15]: Regulation (EU) 2016/679 (GDPR), *OJ L* 119, 4 May 2016. Article 22 (automated individual decision-making); Article 21 (right to object); Article 56 (lead supervisory authority); Article 82 (compensation); Recital 71. Source level: A.

[^16]: Russell, S. (2019). *Human Compatible: Artificial Intelligence and the Problem of Control*. Viking Press. Chapter 6 (inverse reward design) and Chapter 8 (controllability). Source level: A.

[^17]: CJEU, *SCHUFA Holding AG v OQ* (Case C-634/21), Judgment of 7 December 2023, ECLI:EU:C:2023:957. Expanded interpretation of "solely automated decision" under GDPR Art 22. Source level: A.

[^18]: Royal Commission into the Robodebt Scheme (2023). *Final Report* (7 vols.). Commonwealth of Australia. Source level: A.

[^19]: *NJCM et al v De Staat der Nederlanden* (SyRI), Rb. Den Haag, 5 February 2020, ECLI:NL:RBDHA:2020:865. Source level: A.

[^20]: *State v Loomis*, 881 N.W.2d 749 (Wis. 2016); cert. denied, 137 S. Ct. 2290 (2017). Source level: A.

[^21]: Power of attorney under UK law; German *Vollmacht*; Taiwan's statutory guardianship by agreement. Source level: A.

[^22]: W3C Decentralized Identifiers (DIDs) v1.0, W3C Recommendation, 19 July 2022. §5.1 DID controller; §5.1.1 DID subject; §5.2 verificationMethod; §7 DID resolution; §8.2 controller–subject separation; §8.3 update operations. Source level: A.

[^23]: W3C Verifiable Credentials Data Model v2.0 Recommendation (2025-05-15). §4.12 securing mechanisms; §5.7 zero-knowledge proofs; §7.1 verification algorithm. Source level: A.

[^24]: Bechmann, A. & Bowker, G. C. (2019). "Unsupervised by Any Other Name: Hidden Layers of Knowledge Production in Artificial Intelligence on Social Media." *Big Data & Society* 6(1). Source level: B.

[^25]: Pasquale, F. (2020). *New Laws of Robotics: Defending Human Expertise in the Age of AI*. Harvard University Press. Rule 4 ("AI must not impersonate humans") and Chapter 6 (cross-border AI governance). Source level: A.

[^26]: Elish, M. C. (2019). "Moral Crumple Zones: Cautionary Tales in Human-Robot Interaction." *Engaging Science, Technology, and Society* 5: 40–60. DOI: 10.17351/ests2019.260. Source level: A.

[^27]: Bryson, J. J. (2018). "Patiency is not a virtue: the design of intelligent systems and systems of ethics." *Ethics and Information Technology* 20(1): 15–26. DOI: 10.1007/s10676-018-9448-6. Source level: A.

[^28]: Floridi, L. (2013). *The Ethics of Information*. Oxford University Press. Chapter 7 (distributed morality). Source level: A.

[^29]: High-Level Expert Group on AI (2019). *Ethics Guidelines for Trustworthy AI*. European Commission. Three tiers of human oversight (HITL / HOTL / HIC). Source level: A.

[^30]: MacCallum, G. C. (1967). "Negative and Positive Freedom." *Philosophical Review* 76(3): 312–334. DOI: 10.2307/2183622. Triadic structure of freedom. Source level: A.

[^31]: Pettit, P. (1997). *Republicanism: A Theory of Freedom and Government*. Oxford University Press. Ch. 2 (pp. 21–50) freedom as non-domination; Ch. 6 (pp. 171–205) contestation requirements of republican democracy. Source level: A.

[^32]: Treasury Board of Canada (2019, rev. 2023). *Directive on Automated Decision-Making*. Algorithm Impact Assessment Tool. Source level: B.

[^33]: Acemoglu, D. & Restrepo, P. (2025). "Artificial Intelligence and the Decoupling of Decision and Action." NBER Working Paper 32157; Athey, S. (2024). "Causal Inference for Delegated Algorithmic Decisions." NBER Working Paper 31908. Source level: B.

[^34]: CJEU, *Data Protection Commissioner v Facebook Ireland Ltd and Maximilian Schrems* (Schrems II), Case C-311/18, judgment of 16 July 2020, ECLI:EU:C:2020:559; EU–US Data Privacy Framework Adequacy Decision (2023). Source level: A.

[^35]: Crootof, R., Kaminski, M. E. & Price, W. N. (2023). "Humans in the Loop." *Vanderbilt Law Review* 76(2): 429–510. Concept of the "liability sink." Source level: A.

[^36]: Arendt, H. (1958). *The Human Condition*. University of Chicago Press. Ch. V ("Action"): §§24–26 (pp. 175–188) on plurality and unique disclosure; §28 (pp. 199–207) on the space of appearance; §44 (p. 313) on the mortality stake; Prologue §1 (p. 7): first definition of plurality as "the fact that men, not Man, live on the earth and inhabit the world." Source level: A.

[^37]: Honig, B. (1993). *Political Theory and the Displacement of Politics*. Cornell University Press. Chs. 3–4 on Arendt's interpretation of "non-delegable judgment." Source level: A.

[^38]: Habermas, J. (1981). *Theorie des kommunikativen Handelns*. Suhrkamp. Bd. I, Kapitel III, §§1–4 (S. 367–452); §III.3 (S. 387) speech vs. strategy distinction; §III.4 (S. 400–410) three types of validity claims. English translation: McCarthy trans. (1984). *The Theory of Communicative Action, Vol. 1*. Beacon Press, Ch. III, pp. 273–337. Source level: A.

[^39]: Habermas, J. (1992). *Faktizität und Geltung*. Suhrkamp. Kapitel VII–VIII (discursive presuppositions of democratic procedure). English translation: Rehg trans. (1996). *Between Facts and Norms*. MIT Press, Chs. 7–8. Source level: A.

[^40]: Véliz, C. (2023). "Chatbots Shouldn't Use Emojis." *Nature* 615: 375. Source level: B.

[^41]: Mouffe, C. (2000). *The Democratic Paradox*. Verso. Ch. 4 on agonistic pluralism's critique of Habermas's consensus model. Source level: A.

[^42]: Mouffe, C. (2013). *Agonistics: Thinking the World Politically*. Verso. Chs. 1–2 (p. 7) argument for the "legitimate adversary." Source level: A.

[^43]: Pettit, P. (2012). *On the People's Terms: A Republican Theory and Model of Democracy*. Cambridge University Press. Ch. 3 (pp. 109–152) "Equally Accepted Terms"; Ch. 4 (pp. 153–205) "Equally Accessible Influence"; Ch. 6 (p. 218) active stance and bearer. Source level: A.

[^44]: Pitkin, H. F. (1967). *The Concept of Representation*. University of California Press. Ch. 5 (pp. 112–143) "The Mandate-Independence Controversy"; Ch. 6 (pp. 144–167) "Representation as Acting For" (trustee vs. delegate vs. mandate). Source level: A.

[^45]: Representation of the People Act 1983 (UK), §75: the candidate bears legal responsibility for electoral communications issued in their name. Source level: A.

[^46]: Council of Europe Framework Convention on Artificial Intelligence and Human Rights, Democracy and the Rule of Law (CETS No. 225) (opened for signature 5 September 2024). Article 4 (human rights floor), Article 5 (democratic process protection), Article 16 (risk assessment). Source level: A.

[^47]: UN Convention on the Rights of Persons with Disabilities (CRPD), UN GA Resolution A/RES/61/106, 13 December 2006. Full text of Article 12; Article 4(1)(a) (obligation to adopt legislative measures); Article 13 (access to justice). Source level: A.

[^48]: UN Committee on the Rights of Persons with Disabilities (2017). Concluding observations on the initial report of the United Kingdom. CRPD/C/GBR/CO/1, 3 October 2017. §§30–31 (criticism of the Mental Capacity Act 2005 best-interests test). Source level: A.

[^49]: *P v Cheshire West and Chester Council* [2014] UKSC 19, [2014] AC 896. Source level: A.

[^50]: State of Israel. Capacity and Guardianship Law (Amendment No. 18), 5776-2016. §§67B–67F (establishment of supported decision-making framework). Cohen, N. (2018). "Israel's Capacity Law Reform: From Substituted to Supported Decision-Making." *Israel Law Review* 51(3): 451–478. Source level: A.

[^51]: República del Perú. Decreto Legislativo No. 1384 (2018-09-04). Amendments to Civil Code Arts. 3, 42, 44, 45; new Arts. 659-A to 659-E (apoyos y salvaguardias); comprehensive abolition of *interdicción civil*. Bregaglio Lazarte, R. (2019). "Una mirada al nuevo régimen de capacidad jurídica para personas con discapacidad en el Código Civil peruano." *Revista Latinoamericana en Discapacidad, Sociedad y Derechos Humanos* 3(1): 36–60. Source level: A.

[^52]: Civil Code of the Republic of China (Taiwan), Arts. 1110 and 1113-2 to 1113-10 (statutory guardianship by agreement; passed third reading by the Legislative Yuan, 24 May 2019). Source level: A.

[^53]: Mental Capacity Act 2005 (UK), c. 9. §1 (principles); §§2–3 (capacity test); §4 (best interests); §13 (revocation of LPA). Source level: A.

[^54]: Huang, Shih-Chun (2020). "Legislative Analysis of the Statutory Guardianship by Agreement." *Yuedan Law Review* [Taiwan Law Review] No. 295, pp. 5–22. Source level: B.

[^55]: EDPB (2024). Statement 1/2024 on the role of the GDPR in the EUDI Wallet. Source level: A.

[^56]: UN International Covenant on Economic, Social and Cultural Rights (ICESCR), Arts. 2(2) and 9. Source level: A.

[^57]: Korff, D. & Brown, I. (2024). "Cross-border accountability gaps in AI agent governance." *International Data Privacy Law* 14(2): 145–170. Source level: B.

[^58]: Regulation (EU) 1215/2012 (Brussels I Recast) on jurisdiction and the recognition and enforcement of judgments in civil and commercial matters. Source level: A.

[^59]: Anthropic (2024). Model Context Protocol (MCP) Specification. Source level: B.

[^60]: Decentralized Identity Foundation (DIF). Trust Establishment Working Group materials, 2024–2025. Source level: B.

[^61]: ANPD (Autoridade Nacional de Proteção de Dados, Brazil) (2024–2025). Guidance on AI and LGPD; Lei nº 13.709/2018 (LGPD), Art 20. Source level: B.

[^62]: Republic of Korea, *Personal Information Protection Act (PIPA) Amendment 2024* (effective 15 September 2024). Source level: B.

[^63]: IMDA & PDPC Singapore (2024). *Model Artificial Intelligence Governance Framework*, Version 3; AI Verify Foundation testing framework. Source level: B.

[^64]: OECD AI Principles (2019, updated 2024). OECD/LEGAL/0449. Source level: A.

[^65]: G7 Hiroshima Process *International Code of Conduct for Organizations Developing Advanced AI Systems* (October 2023); Hiroshima Process Friends Group progress reports 2024–2025; AI Seoul Summit, *Seoul Declaration on AI Safety* (May 2024); *Bletchley Declaration on AI Safety* (November 2023); AI Safety Institute network (UK 2023, US 2024, EU AI Office 2024, Japan 2024, Korea 2024, Singapore 2024, Canada 2024). Source level: A.

[^66]: EDPB Guidelines 02/2024 on automated decision-making and profiling for the purposes of Regulation 2016/679 (update of WP29 WP251rev.01, 2018), adopted October 2024. Source level: A.

[^67]: Anthropic (2024). Model Context Protocol Specification. Source level: B.

[^68]: Mittelstadt, B. (2019). "Principles Alone Cannot Guarantee Ethical AI." *Nature Machine Intelligence* 1: 501–507. DOI: 10.1038/s42256-019-0114-4. Source level: A.

[^69]: *Mata v. Avianca, Inc.*, 22-cv-1461 (S.D.N.Y. 2023) — ruling on counsel's submission of ChatGPT-generated fictitious citations. Source level: A.

[^70]: Cyberspace Administration of China (CAC), *Interim Measures for the Management of Generative AI Services* (effective 15 August 2023); *Regulations on the Administration of Deep Synthesis of Internet Information Services* (effective 25 November 2022). Source level: B.

[^71]: Hague Convention on the International Protection of Adults (2000); Hague Conference on Private International Law, e-Apostille Extension Working Paper 2023. Source level: A.

[^72]: GCC Digital Identity Mutual Recognition Initiative (2024 framework agreement). Source level: B.

[^73]: African Union (2024). *Continental AI Strategy* (adopted by AU Executive Council, July 2024). Source level: B.

[^74]: Regulation (EU) 2017/2394 (CPC Network); European Court of Auditors Special Reports 13/2021 and 26/2023. Source level: A.

[^75]: Australian National Audit Office (2017–2022). Audit Reports on the Department of Human Services' Income Compliance Programme (Robodebt). Source level: B.

[^76]: *Prygodicz v Commonwealth* (No 2) [2021] FCA 634 (Federal Court of Australia, settlement approval). Source level: A.

[^77]: Dutch Parliamentary Committee (2020–2021). *Ongekend Onrecht* (Unprecedented Injustice) — Final Report on the Childcare Benefits Affair (Toeslagenaffaire). Tweede Kamer 35 510. Source level: B.

[^78]: Right to Food Campaign (India) (2017–2024). *Hunger Watch* survey series and starvation deaths database. Source level: B.

[^79]: *Times of India* / *Indian Express* (2017–2024). Reports on Aadhaar-PDS starvation deaths — including the Santoshi Kumari case (Jharkhand, September 2017). Source level: C.

[^80]: Khera, R. (2019). "Impact of Aadhaar on Welfare Programmes." *Economic & Political Weekly* 54(50): 61–70; Drèze, J. & Khera, R. (2017). "Recent Social Security Initiatives in India." *World Development* 98: 555–572. Source level: A.

[^81]: Internet Freedom Foundation (India) (2024). "Automating Hunger: NREGA's Wage Payments Through ABPS." Policy brief. Source level: B.

[^82]: Angwin, J. et al. (2016). "Machine Bias." ProPublica investigation of COMPAS. Source level: C (investigative journalism).

[^83]: Office of Foreign Assets Control (OFAC) (2022). "Treasury Sanctions Notorious Virtual Currency Mixer Tornado Cash." Press release, 8 August 2022; OFAC delisting amendment, 21 March 2024. Source level: B.

[^84]: *United States v Roman Storm and Roman Semenov*, No. 1:23-cr-430 (S.D.N.Y. 2023, indictment); prosecution ongoing as of 2025. Source level: A.

[^85]: *Van Loon v US Department of the Treasury*, 122 F.4th 549 (5th Cir. 2024). Source level: A.

[^86]: Directive (EU) 2020/1828 on representative actions for the protection of the collective interests of consumers. Source level: A.

[^87]: Coeckelbergh, M. (2020). *AI Ethics*. MIT Press. Chs. 4–6 on relational personhood; Coeckelbergh, M. (2022). "Three Responses to Anthropomorphism in Social Robotics." *International Journal of Social Robotics* 14(10): 2049–2061. Source level: A.

[^88]: *Citizens United v. Federal Election Commission*, 558 U.S. 310 (2010). Source level: A.

[^89]: Coeckelbergh, M. (2024). "Why AI Undermines Democracy and What to Do About It." *Polity* 56(4). Source level: B.

[^90]: World Health Organization (2024). Dementia Fact Sheet. Source level: B.

[^91]: Civic-proof series article 4, "Pseudonymous Participation: Legal Recognition" (series-internal). Source level: A (series-internal).
