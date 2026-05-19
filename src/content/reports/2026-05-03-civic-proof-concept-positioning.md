---
title: "Civic Proof: Concept and Conceptual Positioning"
description: "Civic proof is treated here as a normative concept rather than an engineering container. Through an analysis of category misplacement across the existing conceptual landscape, a non-derivability argument derived from Nissenbaum's contextual integrity, a heuristic analogy to Marshall's three layers of citizenship, and an abductive argument from four demand types, civic proof is positioned as a qualified concept-engineering proposal—an integrative name for a bundle of normative conditions, rather than an already-verified best superordinate concept."
pubDate: 2026-05-03
tags: ["civic-proof", "concept-engineering", "contextual-integrity", "verifiable-credentials", "digital-identity", "citizenship-theory", "privacy-theory", "marshall", "nissenbaum", "cohen", "hildebrandt", "cappelen"]
category: "Digital Identity and Concept Engineering"
aiModel: "Claude Opus 4.7"
aiPrompt: "Why is the term civic proof needed? How does it relate to existing concepts? Is it an engineering or a normative concept?"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-05-03-civic-proof-concept-positioning"
aiGeneratedDate: 2026-05-03
humanReviewed: false
lang: "en"
slug: "2026-05-03-civic-proof-concept-positioning"
---

## § 1. Introduction: Refusing Two Extreme Misreadings

When the term "civic proof" is introduced into academic, policy, and engineering communities, it is immediately exposed to two opposing misreadings. The first treats it as a marketing term—a repackaging of existing engineering concepts such as verifiable credential, attribute proof, proof of personhood, and SBT—suspecting that it adds nothing beyond terminology proliferation. The second moves in the opposite direction toward conceptual realism, treating it as a name for some independently existing "objective category of civic proof," as if the work of naming merely discovered a fact already in place.

Both misreadings miss the actual positioning of the concept. Civic proof is offered here as a qualified concept-engineering proposal: its academic legitimacy derives neither from terminological novelty nor from referential correspondence to an objective category. Its warrant rests on the integrative naming of a specific set of gaps in the existing conceptual landscape, and these gaps are themselves empirically testable. Cappelen, in *Fixing Language*, sets four criteria for such proposals—coverage, discrimination, policy uptake, and inheritance[^1]—and these criteria supply concrete standards of evaluation. Two tasks follow. The first is to lay out the current pass status of the four criteria. The second is to mark honestly the one criterion that remains open to challenge and awaits subsequent case verification (policy uptake), so that a proposal-level claim is not packaged as an already-verified claim.

To do this, the question of "whether a concept exists" must be separated from the question of "whether a concept is widely adopted," and the *normative-conditions layer* must be handled separately from the *data-model, cryptographic-primitive, carrier, and protocol layers*. The verifiable credential literature has existed in the engineering community for some time; this fact does not establish that the normative conditions of civic-action scenarios have been covered. Anonymous credential constructions have existed for more than thirty years; this fact does not establish that a normative framework for civic proof has been built. To prevent such slippage, a layered criterion must be set before any conceptual inventory; only then can the formal argument begin.

The discussion proceeds across seven sections. Section 2 inventories the existing conceptual landscape, deploying a "five-layer abstraction table" to address category misplacement and the existence-versus-adoption distinction, and locating verifiable credential and adjacent concepts at the abstraction layers to which they belong. Section 3 develops the philosophical foundations of privacy: it relies on the pluralist premise of Nissenbaum's *contextual integrity* to derive a formal non-derivability argument, reinforces this with Cohen's contextual self-formation and Hildebrandt's agonistic legality, and marks the conceptual differences among these three positions. Section 4 addresses the limits and the uses of Marshall's three layers of citizenship as a heuristic analogy, and introduces Sen and Anderson as two reinforcing routes. Section 5 synthesizes the previous three sections through an abductive normative concept-engineering argument from four demand types, giving the formalized M1–M4 structure. Section 6 provides the formal definition of civic proof, its minimum necessary conditions, and its maximum permissible range. Section 7 articulates the integration with the first article of the series, "accountability without identification." Section 8 concludes by explicitly marking the open portions awaiting Chapter 5 case-study verification and the connection points to subsequent chapters.

---

## § 2. The Existing Conceptual Landscape: Category Misplacement and "Existence vs Adoption"

### § 2.1 Dismantling Two Common Misreadings

The first misreading holds that "verifiable credential is enough; no new term is needed." The second holds that "anonymous credential was already proposed by Chaum in 1985[^2]; the current term merely rebadges old technology." Both miss an important distinction.

"Whether a concept exists" must be separated from "whether a concept is widely adopted." The academic literature on anonymous credentials has existed for more than thirty years, from Chaum 1985[^2], through Camenisch and Lysyanskaya's 2001/2002 CL signature constructions[^3], to the production deployment of BBS+; the engineering chain is intact. However, ISO 18013-5 mDL (mobile driving licence, 2021)[^4] does *not* enable unlinkability across presentations by default; W3C VC Data Model 2.0 (2025-05-15 Recommendation)[^5] lists selective disclosure as an optional cryptosuite rather than a normatively required one; the EUDI Wallet ARF (2025-12 Cooperation Group iteration; with v1.4 historically used as a stable snapshot)[^6] continues to negotiate the final position on unlinkability clauses at the level of implementing regulations. Engineering capacity exists; adoption in product specifications is limited. Treating "literature exists" as "normative conditions satisfied" is a common slippage.

The second misalignment runs deeper. Verifiable credential is a *data model*; attribute proof is a *cryptographic primitive*; proof of personhood is a subproblem within Sybil resistance; claim is a semantic unit internal to a VC; pseudonym is a form of identity reference; soulbound token is a proposal for an on-chain data structure[^7]. These concepts belong to different abstraction layers, and lining them up as "candidate terms of the same kind" is itself a category error. Civic proof, as the upper normative layer, does not enter the inter-layer competition; it specifies the conditions that the foregoing engineering and normative components must jointly satisfy under the purpose of "supporting civic action." The value of this position is that it removes from the argumentative axis disputes of the type "which engineering term should be elevated to a conceptual banner." The real focus of the dispute is the question of what kind of naming is needed at the normative-conditions layer, so that the choices in the four lower engineering, carrier, and protocol layers can be evaluated through a single normative vocabulary.

### § 2.2 The Five-Layer Abstraction Table

Unfolding this layered distribution as a table gives the subsequent argument a recognizable point of orientation.

| Abstraction layer | Component examples | Role |
|---|---|---|
| Normative-conditions layer (normative) | civic proof, accountable pseudonymity, contextual integrity | Specifies what a combination must satisfy |
| Data-model layer (data model) | W3C VC, claim, mDoc, SD-JWT VC | Specifies data structure and three-party circulation |
| Cryptographic-primitive layer (cryptographic primitive) | BBS+, CL, ECDSA, BLS, accumulator, KVAC, ZK-SNARK | Provides composable mathematical guarantees |
| Storage / carrier layer (storage / carrier) | SBT (ERC-5114/5192/5484), DID document, on-chain registry | Specifies where data resides |
| Protocol layer (protocol) | OpenID4VCI/4VP, Privacy Pass (RFC 9576/77/78) | Specifies how data flows |

The table performs two functions. For the engineering community, it prevents downgrading discussion of the normative-conditions layer to the cryptographic-primitive layer. Writing civic proof, for example, as "a specific ZK schema" turns it into an intermediate artifact that can be displaced by a single updated cryptosuite; this both undervalues the independence of the normative-conditions layer and may bind the discourse to a particular cryptographic choice. For the privacy-research and political-philosophy communities, the table prevents upgrading the normative-conditions layer into an ontological category. Writing civic proof as "the essence of civic proof," for example, introduces the burdens of conceptual realism, turning a proposal-style act of naming into a metaphysical claim. Civic proof occupies the topmost layer; the other existing concepts occupy their respective layers. The five layers stand in a relation of composition, not replacement. A successful deployment of a civic-action scenario will involve choices at all five layers simultaneously, but the kinds of disputes these choices generate differ: disputes at the normative-conditions layer concern "why these functions should be combined," while disputes at the protocol layer concern "how to trade off between OpenID4VP and the mdoc presentation flow." The two should not be evaluated as one.

The counter-argument that "extending the VC specification is sufficient" can be precisely located within the five-layer table. It assumes that once W3C VC, in v2.x, builds selective disclosure, an accountability extension, and a pseudonymous-identifier extension into the specification normatively, civic proof becomes a redundant name. This assumption conflates two acts: writing the functional-requirements list of the normative-conditions layer into normative sections of the data-model layer, and embedding the normative argument for "why this list is what it is" into engineering specifications. The former is technically feasible; the latter falls outside the remit of W3C working groups. W3C specification documents do not bear responsibility for arguing why, for example, "privacy is the contextual appropriateness of informational norms"[^10][^11]. Conflating the two replaces normative argument with the illusion that "the normative conditions have already been internalized by engineering."

### § 2.3 Coverage Estimate of the "Closest Candidate"

Treating anonymous credential with selective disclosure as the closest candidate for civic proof is a reasonable benchmark within the literature inventory. The Camenisch–Lysyanskaya CL construction[^3] supports selective disclosure of attributes; Boneh, Boyen, and Shacham's short group signatures with opening[^8] provide the engineering basis for ex post accountability; BBS+ and SD-JWT bring these constructions to the threshold of production usability[^9]. The combined engineering capacity covers, by an integrated analytic estimate, roughly eighty percent of the four conditions for civic action—anonymity, unlinkability, verifiability, and accountability. The remaining twenty percent falls within gaps at the normative-framework layer, not at the engineering layer. Existing concepts tell us "what can be done"; they do not tell us "why these functions need to be combined, who decides the conditions of combination, and which subset should be mandated for which scenarios." The eighty-percent coverage estimate itself supports the reality of the normative gap.

The "eighty percent" is an integrative analytic estimate rather than an empirical measurement. The uncovered twenty percent falls mainly in two areas: the structure of ex post controllable opening within accountability, and the "strong recommendation" property of anonymity within uniqueness scenarios. The engineering primitives for these two areas exist—accountable group signatures, threshold pseudonyms, designated-verifier proofs—but an integrative name across them is missing, which makes policy discourse unable to refer with a single term to the full set of demands. The naming gap is one concrete expression of the normative gap.

### § 2.4 Field Positioning of the SBT Proposal

The soulbound token (Buterin–Ohlhaver–Weyl 2022)[^7] proposes on-chain non-transferable credentials; ERC-5114 / 5192 / 5484 are the corresponding standard proposals. Two levels must be distinguished when SBT is compared with civic proof. SBT is a proposal at the *on-chain carrier layer*, occupying a different abstraction layer than the *normative-conditions layer* of civic proof. Even if SBT adoption rises in 2027–2028 and selective revelation and selective linkability mechanisms are added, SBT will not absorb the position of civic proof.

The SBT-expansion scenario is treated below as a future-conditional. Should the SBT field expand, public chains will by default still conflict with unlinkability. Even with built-in ZK selectivity in SBT, the fact that "this address holds a particular SBT" remains a public on-chain fact unless the entire chain is a privacy chain, which raises a further set of governance issues. The conditions of civic proof should not presuppose that the execution carrier is on-chain or off-chain; doing so would downgrade civic proof to an engineering preference rather than a normative-layer concept. The on-chain/off-chain difference is a deployment difference, not a normative difference; deployment differences should not determine the content of the normative-conditions layer. Moreover, DeSoc's political-philosophical claims regarding "decomposable rights" and "community recovery" can be debated independently. Civic proof does not carry these claims; it carries only the normative conditions. Hence even with the widespread adoption of SBT, civic proof remains a concept parallel to, rather than subordinate to, DeSoc.

---

## § 3. Philosophical Foundations of Privacy: A Three-Step Argument from CI, Cohen, and Hildebrandt

### § 3.1 The Pluralist Claim of CI as Premise

Nissenbaum's *contextual integrity* (CI) framework takes informational norms as its core. Each social context has its own norms about "what information flows between whom under what principles," and these norms are demarcated by a four-tuple of actors (sender / subject / recipient), attributes (information types), and transmission principles[^10]. The internal structure of CI already entails the pluralist thesis that "different contexts are not mutually derivable"; in the 2011 *Daedalus* article, Nissenbaum marks this position succinctly with the phrase "no privacy 'in general'"[^11].

Treating CI as already-verified panacea overlooks several important internal challenges. Solove's critique of CI's heavy reliance on norms, Mulligan–Koopman–Doty's structural challenge marking privacy as an essentially contested concept[^12], and the disputes about CI operationalization acknowledged by Benthall–Gürses–Nissenbaum themselves should all be carried along when CI is invoked. These challenges are not uniformly successful: Solove's critique that the "contextual approach over-relies on the existence of norms" is partially addressed in Chapter 8 of Nissenbaum 2010; the "essentially contested" structure of Mulligan–Koopman–Doty does not negate CI's analytic power but requires authors to specify at which order of concept CI is being invoked. CI as a premise demands that authors mark its reasonable range of use rather than assert its universal validity.

The use of CI here carries specific limits. CI does not yield the normative conditions of civic proof directly; what CI yields is the structure of "context plurality" and the "context-relative ends" justification of norms. To derive "civic-specific norms" from the norms of commercial / government identity contexts requires a bridging premise: that civic action is an independent context whose informational norms are analyzable through CI structure. The CI framework itself does not pronounce explicitly on whether civic action is an independent context (Nissenbaum 2010 and 2011 handle medical, educational, and financial cases primarily); this bridging premise is introduced by the argument itself, drawing on the republican tradition of political philosophy[^11][^13]. Marking this borrowing explicitly is a necessary move for the transparency of the argument.

### § 3.2 The Formal Argument from Non-derivability

Formalizing the foregoing premises yields a three-step structure.

> **Premise 1**. Within CI, each context has its own informational norms, and these norms are justified by the context-relative ends of that context[^10].
>
> **Premise 2**. The ends of the commercial context are transactional efficiency and contractual accountability; the ends of the government-identity context are legal validity and administrative interoperability. Neither entails the civic-specific ends of "low-threshold political participation" and "contestability of power."
>
> **Premise 3**. To derive the norms of Y from the ends of X, the ends of X must entail the ends of Y.
>
> **Conclusion**. The norms of the civic-action context cannot be derived from the norms of the commercial or government-identity contexts.

The form is deductive, but the establishment of Premise 2 depends on normative argument: why the ends of civic action do not overlap with those of commercial / government contexts. Mill 1859, *On Liberty*, ch. 3[^30]; Tocqueville 1840, *Democracy in America*, vol. 2[^31]; and Pettit 1997, *Republicanism*, ch. 6[^32], supply the historical and philosophical lineage for "the distinctive normative source of the civic context." Within contemporary privacy research, Mulligan–Koopman–Doty 2016[^12] and Pasquale 2015[^13] also support Premise 2 in their descriptions of the normative divergence between commercial and civic poles.

The limits of this inference must be made clear. To move from "context plurality" to "the civic field has a particular set of normative conditions," the argument passes through a bridging premise: that the ends of civic action are low-threshold political participation and contestability of power. This premise is itself borrowed from the republican tradition of political philosophy and is not internal to the CI framework. An author who rejects republican ends outright (for example, some minimalist liberals) would contest Premise 2, and the CI framework itself takes no stance on this. The argument acknowledges the borrowing of external normative resources here and marks it explicitly, so that the argument does not appear on its surface to follow purely from CI while concealing a republican commitment.

### § 3.3 Conceptual Differences Between Cohen and Nissenbaum

Citing Cohen alongside Nissenbaum requires handling the difference in their conceptual orientations. Nissenbaum's core concern is the *contextual appropriateness* of *information flow*; Cohen's core concern is the *contextual preconditions of self-formation*[^14]. The two overlap but are not equivalent; collapsing them imposes excessive ontological burdens on the argument.

In *Configuring the Networked Self* (2012), Cohen acknowledges CI as "currently the most powerful framework of contextual norms"[^14], while strengthening it on three points. The first is *semantic discontinuity*. The impermeability between contexts is a necessary condition for self-formation; when technical systems interconnect all contexts, semantic discontinuity is erased. The second is *playspace*. The *formation* of political opinion requires time and space and cannot, at a stage when it is not yet formed, be absorbed by cross-context surveillance into stable identity attributes. The third is *configuring versus constituting*. The "self" of the networked self is continuously generated by network configuration rather than being ontologically prior to the network. This dynamic-formation stance is pushed toward a critical inheritance of Nissenbaum in Cohen 2019, *Between Truth and Power*, ch. 2[^15]. Cohen argues that the "data refineries" structure of informational capitalism structurally dissolves the social arrangements on which contextual norms depend for survival, and that the normative framework of CI under contemporary conditions requires *institutional upgrade*.

This conceptual difference has specific consequences for civic proof. Within the Nissenbaum framework, unlinkability is one normative constraint of an informational norm, requiring engineering design to comply with an existing norm. Within the Cohen framework, unlinkability is an ontological precondition for personal freedom, requiring engineering design to participate in the institutional reconstruction on which norms depend for survival. When Cohen's reinforcement is used to support the sub-thesis that "unlinkability is a normative necessity rather than an optimization option," the internal tension between the two positions must also be acknowledged, and they should not be written as a single position.

Cohen's critical inheritance of Nissenbaum in the 2019 work is brief in ch. 2; the treatment adopted here treats the call for "institutional upgrade" as a supporting argument for the naming work at the normative-conditions layer of civic proof, while acknowledging that the specific engineering pathways for institutional upgrade require subsequent research.

### § 3.4 Extending Hildebrandt's Agonistic Legality

Hildebrandt, in *Smart Technologies and the End(s) of Law* (2015)[^16], proposes the concept of *agonistic legality*. Legal norms can be called law only under conditions of contestability; when automated decision-making compresses contestability, the existential conditions of legal norms themselves are squeezed. In *Privacy as Protection of the Incomputable Self* (2019)[^17], she further treats the incomputable self as an ontological precondition of legal subjectivity.

Hildebrandt's argument is primarily addressed to algorithmic decision-making, not to the engineering design of civic proof. Extending agonistic legality to the design layer of civic proof requires an interpretive translation: from "automated decision-making compressing contestability" to "civic-proof design must support ex post contestability." This is an *extension of application* rather than *Hildebrandt's direct claim*. The translation holds only under the accountability condition of civic action. Civic proof provides engineering support for conditional unmasking under ex post judicial procedures, particularly aligned with the *Doe v. Cahill* (2005) form of conditional unmasking. Hildebrandt's critique of "technological normativity displacing legal normativity" (read together with Cohen 2012)[^16][^14] is an integrative interpretation rather than the explicit text of any single source.

References to Hildebrandt rely primarily on the 2015 and 2019 works. The 2023–2024 deliverables of the Cohubicol project led by Hildebrandt, with their specific commentary on the W3C VC and EUDI Wallet specifications, have not been read directly in the present inventory; if reinforcement is needed, related inferences can be supported by Mulligan–Koopman–Doty 2016[^12] instead.

Reading Cohen and Hildebrandt as joint reinforcements, the deeper ontological point they provide is that "the privacy demand of civic-action scenarios cannot be reduced to the engineering realization of informational norms." Cohen provides an ontological route through "the contextual preconditions of self-formation"; Hildebrandt provides a jurisprudential route through "the legal conditions of contestability." Neither yields directly the engineering specifications of civic proof, but both signal that engineering specifications must respond to the normative-conditions layer rather than only to the cryptographic-primitive layer. This signal aligns with the layered distribution of the five-layer abstraction table in § 2.2: disputes at the normative-conditions layer cannot be displaced by progress at the engineering layer.

---

## § 4. The Heuristic Analogy of the Three Layers of Citizenship

### § 4.1 Marshall's Structure as Heuristic Framing

In *Citizenship and Social Class* (1950)[^18], Marshall proposes a three-tier differentiation of citizenship: civil rights (eighteenth century), political rights (nineteenth century), and social rights (twentieth century). The expansion of each layer depends on the consolidation of the prior layer, and the normative content of the layers is not mutually reducible. Using this tripartite differentiation as a *framing* for the upper-normative character of the three civic proof types (legal proof, political pseudonymous proof, attribute proof) is useful, but it must be confined to a *heuristic analogy* rather than a *structural isomorphism*.

The asymmetry of the analogy must be stated first. Marshall addresses ontological differentiation among *different types of rights*: civil, political, and social each point to distinct normative objects (freedom, suffrage, social provision). Civic proof addresses *different configurations of conditions for the same type of proof*: legal, attribute, uniqueness, and pseudonymous each point to distinct condition subsets, but all are of the same kind of object—"proof." Differentiation of rights and differentiation of proof-conditions are different kinds of structure; reading the former as an isomorphic model of the latter misreads normative objects as condition configurations. Downgrading the Marshall structure to a heuristic framing is an honest response to this asymmetry.

### § 4.2 Work Borne by the Heuristic Analogy

Although it is not isomorphic, the Marshall structure performs three framing tasks for civic proof.

First, *the historical reasonableness of differentiation*. Marshall describes the historical differentiation of citizenship as a process in which each layer's expansion responds to specific normative demands under specific historical conditions, with new layers added without displacing earlier ones. This structure allows the four types of civic proof to be understood as "the layered configuration of conditions for different demand types." Legal proof is not displaced by attribute proof, and pseudonymous proof is not displaced by uniqueness proof; each corresponds to a distinct normative necessity. The introduction of a new type—for example, the expansion of the PoP field through uniqueness proof—should be understood as a parallel configuration of the four types across different scenarios, not as the replacement of older types.

Second, *irreducible normative conditions*. Marshall's central claim is that social rights cannot be reduced to extensions of civil rights; they have their own normative sources (economic security, educational opportunity) and require different institutional arrangements (social insurance, public education). For civic proof, pseudonymous proof cannot be reduced to extensions of attribute proof; it has its own normative sources (freedom of association, freedom of expression[^19]) and requires different engineering mechanisms (accountable group signatures, threshold opening). This irreducibility resonates with the "normative necessity rather than preference" stance of the four-demand-type matrix in § 5.

Third, *the asymmetry of normative expansion*. Marshall's three-tier differentiation has displayed non-linear historical development. Civil and political rights stabilized in the second half of the twentieth century; social rights have been in reverse retreat since the 1980s. Joppke 2010[^20] observes that contemporary citizenship exhibits *degeneration* rather than progressive expansion, particularly on issues of cross-border identity controls, refugee status, and dual nationality. The implication of this asymmetry for civic proof is that the four-type condition configuration will not converge automatically toward "the strongest protection"; institutional pathways and political forces will suppress particular types, and pseudonymous proof faces particular pressure under current conditions of surveillance capitalism. Adopting the Marshall structure as framing inherits its instability. This instability itself issues a warning for the engineering design of civic proof: marking the strongest protections as "optional" by default produces, under political pressure, a de facto standard of weak protection.

Concretely, when the anonymity and unlinkability clauses at the normative-conditions layer of civic proof are marked as "optional" rather than "mandatory" in engineering specifications, actual deployments tend to accept the defaults—a "weak protection" configuration in engineering implementation. The historical lesson of Marshall's structure is that normative conditions require institutional accompaniment—normative-strength labeling of engineering specifications, coordination of conformance requirements across jurisdictions, and legal commitments to retain non-digital fallback paths for those who do not hold a wallet—if they are to be operationalized. The absence of any one of these elements leaves the naming work on paper.

### § 4.3 Sen and Anderson as Reinforcements and Their Internal Tension

When Sen's capability approach[^21] and Anderson's relational equality[^22] are placed side by side as reinforcements, the internal tension between them must be made explicit, and they should not be written as a single position.

Sen's capability approach provides teleological reinforcement along the route *entitlement → capability → functioning*. For civic proof, holding a wallet and the correct credentials is only *entitlement*; the actual capacity to participate in political association free from surveillance is *capability*; the political expression and collective decision-making actually achieved are *functioning*. Locating the engineering-design goal of civic proof in "supporting the conversion to capability" rather than in "providing entitlement credentials" follows directly from Sen[^21], shifting evaluation metrics from engineering indicators to outcome indicators.

Anderson's relational equality provides reinforcement along a different dimension through *relational equality*[^22]. Her critique of luck-egalitarian distributive thinking points out, for the design of civic proof, that "those without a wallet or a smartphone shall not be *systematically* excluded" is not the kind of problem that can be solved by "redistributing one additional wallet"; it is a question of whether institutional design avoids structurally subordinate status. The design implication that follows from Anderson's position is that civic-proof deployment must preserve non-digital fallback paths so that "not holding a wallet" is not structurally equated with "not exercising civic rights."

The tension between the two is this: Sen retains a distributive framework requiring assessment of who has what capabilities; Anderson critiques distributive luck-egalitarian thinking and contests the measurement framework of capability distribution itself. The treatment here borrows the teleological structure of Sen and the relational-equality critique of Anderson as reinforcements along different dimensions, without claiming that the two constitute a unified theory. A reader adopting Sen's position can derive a more granular capability-assessment design; a reader adopting Anderson's position can derive a stronger anti-exclusion institutional design. The normative conditions of civic proof remain open to both directions. This openness can be regarded as a feature appropriate to an upper-normative concept rather than a weakness of the argument. The concept specifies the satisfaction requirements of the condition bundle; it does not specify the particular political-philosophical choices beneath that bundle.

### § 4.4 The Tier of Analogical Strength

The evidential strength of this heuristic analogy is marked as level D (moderately strong reasoning), and should not serve as *independent evidence* for the upper-normative character of civic proof; it serves only as *supporting framing*. Independent evidence is borne by the inventory of the existing conceptual landscape in § 2 and the non-derivability inference in § 3.2; the Marshall analogy supplies a sense of conceptual location when the argument is composed, helping readers grasp the historical counterparts and normative necessity of the four-type structure of civic proof, but does not substitute for the argumentative axis. Downgrading the analogy to heuristic framing responds to a revision of analogical strength following the literature search, avoiding the misreading of a sense of conceptual location as structural isomorphism.

---

## § 5. The Abductive Argument from Four Demand Types

### § 5.1 The Normative-Differentiation Matrix

The demand types of civic action are formalized as a four-element set N = { N_legal, N_attribute, N_uniqueness, N_pseudonymous }, and the normative conditions as a four-element set C = { anonymity, unlinkability, verifiability, accountability }. Each demand type corresponds to one (or several) subset(s) of C, f(N_i) ⊆ C, and the mapping expresses the "necessary normative conditions" of the type.

| Demand type | Typical scenarios | Necessary normative-condition subset | Existing engineering containers / cryptographic primitives | Normative gap |
|---|---|---|---|---|
| Legal identity proof | Tax filing, inheritance, real-estate contracting, cross-border identity verification | verifiability (strong) + accountability (strong); anonymity unnecessary, sometimes prohibited; unlinkability generally not required | VC + national-root PKI, eIDAS QES, NIST IAL3/AAL3[^23] | Existing concepts give sufficient coverage; gaps lie in cross-jurisdictional recognition, not in normative content |
| Attribute proof | Age verification, residence proof, membership status, credential verification | verifiability + unlinkability (avoiding issuer-verifier collusion) + anonymity (weak) + accountability (scenario-dependent) | BBS+ selective disclosure, AnonCreds, mDL with SD-JWT-VC | Partial coverage; existing engineering emphasizes minimal disclosure but has not fully integrated the joint condition of "unlinkability plus ex post accountability" |
| Uniqueness proof | One-person-one-vote electronic voting, UBI claiming, anti-Sybil in airdrops, one-account-per-person in communities | verifiability + uniqueness (context-bound) + unlinkability between contexts; anonymity strongly recommended (protecting political participation) | Proof of personhood (Worldcoin, BrightID, Idena, Proof of Humanity)[^24] | The Sybil-resistance perspective dominates; the argument for "why anonymity is a normative requirement rather than an optional optimization" is missing |
| Pseudonymous participation | Whistleblowing, sensitive medical consultation, political association, victims of domestic violence seeking help, source protection for journalists | anonymity (strong) + unlinkability (strong) + accountability (ex post controllable opening / threshold opening) | Accountable group signatures[^8], threshold pseudonyms, designated-verifier proofs | Engineering primitives exist but no integrative name; the normative layer lacks a lateral integrative term—a naming gap |

The differentiation among the four types (or, on certain arguments, three, if uniqueness is subsumed within pseudonymous; the four-type structure still retains analytical legitimacy, since each type corresponds to substantively distinct threat models and failure costs) carries normative necessity rather than user preference, for three reasons.

First, *rights support*. Pseudonymous proof supports freedom of association and freedom of expression[^19]; uniqueness proof supports political equality (one person, one vote); legal proof supports contractual accountability; attribute proof supports contextual minimal disclosure. The differentiation of rights makes the differentiation of conditions a normative necessity. The Marshall structure (§ 4.2) provides heuristic framing in support: the entry of new rights brings new requirements of condition configuration.

Second, *differences in threat models*. The threat model of legal proof is "impersonation"; that of pseudonymous proof is "de-anonymization followed by ex post retaliation"; that of attribute proof is "over-disclosure"; that of uniqueness proof is "Sybil attack with political suppression." Different threat models compel different condition subsets and directly determine the choice of cryptographic primitive.

Third, *asymmetry of failure costs*. The cost of failure for legal proof lies at the transactional level; for pseudonymous proof, it may extend to physical safety. The asymmetry of costs gives "condition omission" different normative weights across types. A weak anonymity default acceptable in uniqueness-proof scenarios may, when transposed to pseudonymous-proof scenarios, cause irreversible de-anonymization. This asymmetry cannot be dissolved by "giving users options," because actual users face default specifications rather than high-level configuration space.

It must be emphasized further that the matrix is an analytic tool, while actual scenarios often cross types. For example, "anonymous reporting that requires residence proof" covers both pseudonymous and attribute types; "voting that requires residence eligibility, one-person-one-vote, and unlinkability between ballot and voter" covers attribute, uniqueness, and pseudonymous types. Accountability also splits in meaning across types: in legal proof it means "responsibility imputed to a natural person"; in pseudonymous proof, "responsibility imputed to a pseudonym with ex post openability"; in attribute proof, "the issuer is responsible for the correctness of the attribute." This semantic splitting itself supports the argument that "an upper-normative integration is required," since absent an upper-layer integrative term, the different meanings of accountability are deployed against one another across communities, producing normative mistranslation.

It should also be noted that the "accountable group signatures" entry in the pseudonymous-proof row of the § 5.1 matrix corresponds to the short-group-signatures-with-opening framework established by Boneh, Boyen, and Shacham 2004[^8]; the CL construction of Camenisch and Lysyanskaya[^3], by contrast, corresponds to selective disclosure in attribute-proof scenarios. The two belong to different cryptographic-primitive families and should not be conflated.

Comparing the matrix with the assurance levels of NIST SP 800-63-4[^23] reveals the limits of the existing taxonomies. The NIST framework classifies "strength" along the three axes of IAL / AAL / FAL; this classification covers legal-proof scenarios well but lacks a framework for pseudonymous-proof scenarios. Solove 2008[^28] organizes a privacy taxonomy by *invasions*, whose objective differs from that of the present matrix. Pfitzmann and Hansen 2010[^27] provide formal definitions of anonymity terminology, which constitute a glossary rather than a normative integration. The three existing taxonomies are each useful, but none substitutes for the integrative-naming work at the normative-conditions layer.

### § 5.2 The Formalized M1–M4 Structure

The structure of the abductive argument is formalized as follows.

> **(M1) Empirical fact of normative differentiation**. There exists a mapping f from N to P(C) (the power set of C) such that f(N_legal), f(N_attribute), f(N_uniqueness), and f(N_pseudonymous) are non-emptily different at the level of normative necessity.
>
> **(M2) Insufficient coverage by existing concepts**. For any single existing concept X ∈ { VC, attribute proof, proof of personhood, anonymous credential, federated identity, … }, X cannot jointly cover the necessary normative conditions of all four f(N_i).
>
> **(M3) Integrative demand**. In the three domains of policy communication, engineering-specification design, and cross-field cooperation, the absence of an upper-layer integrative term incurs real costs (category confusion, normative mistranslation, governance gaps).
>
> **(M4) Candidate superordinate concept**. Among all candidates, "civic proof," as a normative (rather than engineering or cryptographic) upper-layer concept, is the best explanation.

The move from M1 ∧ M2 ∧ M3 to M4 proceeds as *inference to the best explanation* (IBE)[^25]. This is abductive reasoning—second-strongest, non-necessary. M1 is supplied by the normative-differentiation matrix in § 5.1 together with the normative-source arguments of §§ 3–4; M2 by the inventory of the existing conceptual landscape in § 2; M3 by cross-field case observations—the W3C VC Working Group's discussions of Conformance Profiles, the EUDI ARF disputes over unlinkability clauses, and the policy process around Taiwan's DIW lacking a single referring term for "why these engineering terms should be combined."

The weakness of the IBE structure must be marked explicitly. It depends on the credibility of M1 / M2 / M3 and is not deductively necessary in itself. If the four types collapse into three (some authors hold that uniqueness can be viewed as a special configuration of pseudonymous), M4 still holds, but the formalization of M1 needs adjustment. The argument here is robust with respect to the number of types: even if the count moves from four to three, the two premises that "necessary normative differences exist" and "existing concepts insufficiently cover" still hold, and the best-explanation structure remains the same. Disputes over the count of types belong to the specific organization of the matrix and do not affect the necessity of the upper-normative naming work.

### § 5.3 The Honest Downgrading of a Concept-Engineering Proposal

By Cappelen's criteria for concept-engineering proposals in *Fixing Language*[^1] (coverage, discrimination, policy uptake, inheritance), the current pass status of civic proof is as follows.

| Cappelen criterion | Status | Notes |
|---|---|---|
| Coverage | Pass | The four-demand-types-by-four-conditions matrix covers the core cases of existing civic scenarios (whistleblowing, voting, association, age verification, contracting, sensitive consultation) |
| Discrimination | Pass | Has clear boundaries against VC (engineering container), attribute proof (cryptographic primitive), PoP (a subset of uniqueness), and SBT (on-chain carrier) |
| Policy uptake | *Awaiting verification* | Dependent on Ch5 case-study verification across one or two ongoing policy processes (e.g., EUDI ARF v2.x, subsequent Taiwan DIW specs) of whether the introduction of "civic proof" improves communication |
| Inheritance | Partial pass | Compatible with the Burgess–Plunkett conceptual-ethics framework[^26] and the Pfitzmann–Hansen anonymity terminology[^27]; partially overlapping with the Solove privacy taxonomy[^28], with different objectives |

The "policy uptake" criterion must be honestly downgraded. Under Cappelen's strict criteria, passing this criterion requires observational evidence from actual policy processes. When legislators, engineering communities, and privacy researchers use the term "civic proof," do they in fact reduce category confusion, normative mistranslation, and governance gaps? The question cannot be answered at the concept-definition stage; it requires empirical verification in Ch5 case studies (the recommended candidates are the EUDI ARF v2.x implementing-regulations process and the subsequent Taiwan DIW specs). The criteria of judgment include whether legislative drafts use the term "civic proof," whether cross-field working groups adopt it as a common reference, and whether academic citations inherit it critically rather than merely list it.

The academic claim of this concept in Ch2 is therefore confined to the following: civic proof is a *qualified concept-engineering proposal*, passing the Cappelen criteria on coverage, discrimination, and inheritance; policy uptake remains for Ch5 verification. Until subsequent case studies are completed, the concept is not asserted as an *already-verified best superordinate concept*; this stronger claim is deliberately reserved as a conditional conclusion.

The distance from the closest candidate to the second-best candidate is also marked honestly. Anonymous credential with selective disclosure covers about eighty percent of the four dimensions. Even if W3C VC, in v2.5, makes BBS-based selective disclosure mandatory under conformance and incorporates a uniqueness-oracle interface and accountable-de-anonymisation clauses, civic proof still bears three tasks. The first is cross-specification neutrality: W3C VC, ISO 18013-5 mDL, and IETF SD-JWT VC are mutually incompatible in format, and civic proof as a normative-layer concept can simultaneously impose normative constraints across all three specification families. The second is the acceptability of normative argument: legal scholars and policy-makers do not deploy W3C terminology to argue "what proof conditions are required for voting." The third is legislative citability: citation of civic proof in legislative drafts is more easily portable across jurisdictions than citation of clauses in particular specifications.

---

## § 6. Formal Definition and Boundary Conditions

### § 6.1 Formal Definition

The argument of §§ 1–5 is synthesized into a formal definition.

> **Civic proof** is the normative upper-layer concept of "the form of proof designed to support civic action." It requires that a set of engineering components (VC + selective disclosure + unlinkability + revocation + uniqueness oracle + accountable de-anonymisation) jointly satisfy scenario-specific subsets of the four conditions—anonymity, unlinkability, verifiability, and accountability—where the subsets correspond to four types of civic-action demands (legal / attribute / uniqueness / pseudonymous).

The definition contains three structural elements. First, "normative upper-layer concept" marks that civic proof occupies the topmost position in the five-layer abstraction table of § 2.2 and does not enter the inter-layer competition of the four lower layers. Second, "scenario-specific subsets" marks that the four conditions are not all-or-nothing but are activated as different subsets according to the demand type: legal proof does not require anonymity, while pseudonymous proof strongly requires anonymity and unlinkability. Third, "corresponding to four demand types" marks that the type structure is an analytic tool; while actual scenarios may cross types, cross-type situations remain capturable by condition-subset analysis.

### § 6.2 Minimum Necessary Conditions

The minimum necessary conditions claimed by civic proof are as follows.

1. Within a designated civic-action scenario, the demand type N_i ∈ { legal, attribute, uniqueness, pseudonymous } can be identified.
2. The condition subset corresponding to that type, f(N_i) ⊆ { anonymity, unlinkability, verifiability, accountability }, is jointly satisfied in the engineering implementation.
3. The conditions are not systematically weakened by vendor lock-in, specification fragmentation, or off-by-default cryptosuites.

These three minimum conditions do not prescribe specific engineering choices. VC, mDL, or SBT may all serve as implementation carriers; BBS+, CL, or KVAC may all serve as cryptographic primitives—so long as the combination satisfies the condition subsets. The normative-conditions layer of civic proof remains neutral with respect to the lower layers, and this neutrality preserves its normative constraints when implementations switch among specification families.

### § 6.3 Maximum Permissible Range

What civic proof does not claim must also be made explicit.

1. It does not claim that the demand types of civic action must be restricted to four; should subsequent empirical observation reveal a fifth (for example, "collectively accountable group proof" forming an independent type), the matrix can be extended.
2. It does not claim that one specific cryptographic choice is superior to another; the trade-off between BBS+ and CL is an engineering-layer issue.
3. It does not claim that one specific governance structure is superior to another; the structure of wallet competition (single-national-wallet versus pluralistic-wallet ecosystems) is a normative and political question, not internally decided by the condition bundle of civic proof.
4. It does not claim that this concept is the unique solution to the naming work; if another concept performs better under the four Cappelen criteria, the present concept can be displaced.

Taking the minimum necessary conditions and the maximum permissible range together, the academic role of civic proof is located as that of a *normative-layer mediating concept*. Its function is to provide the normative-argument, engineering-design, and policy-communication communities with a shared reference. Both over-inflation (prescribing specific engineering or governance structures) and over-contraction (becoming an abbreviation for a particular specification) would impair the mediating function.

### § 6.4 The Core Convergent Statement

The foregoing positioning is condensed into one sentence.

> Civic proof is not a new primitive, nor a new specification—it is a normative conjunction, a normative name for "why these engineering terms should be combined."

This sentence rejects two misreadings simultaneously. It rejects "civic proof is a new cryptographic primitive," since its engineering content is already supplied by existing primitives such as BBS+, CL, and accountable group signatures; and it rejects "civic proof is a new specification," since it is not a member of any specification family at W3C, ISO, or IETF but rather a normative constraint on these specifications. The naming work is the act of "giving the combination of conditions a referring name."

---

## § 7. Integration with "Accountability Without Identification"

The present concept is the second of nineteen doctoral research prompts and shares the detailed argument for the *pseudonymous proof* condition with the first article, "accountability without identification." The first article established three claims. First, at the engineering level, DAA (Direct Anonymous Attestation)[^29] has been deployed across hundreds of millions of TPM devices but with the *opener* role *not* enabled—a puzzle worth observing rather than an already-verified causal account. Second, at the normative level, accountable pseudonymity requires the joint satisfaction of three conditions—anonymity, unlinkability, and accountability—where the accountability structure is ex post + threshold-gated rather than ex ante + continuous. Third, at the level of political economy, "why an engineering-feasible accountable opener structure has not been deployed" is an independent governance question; answering it requires institutional rather than engineering analysis.

The condition configuration of the pseudonymous-proof row in the matrix of § 5.1 is inherited directly from the argument of the first article. Civic proof, as a normative upper-layer concept, supplies the normative framework for pseudonymous proof, while the first article supplies the engineering and political-economic support arguments. The two constitute the conceptual foundation for the first two chapters of the dissertation. The existence of the pseudonymous-proof type makes the argument for "the need for lateral integrative naming" hold; if only the legal, attribute, and uniqueness types were present, verifiable credential with selective disclosure would largely suffice.

The DAA TPM case, as a contrast observation in which something is "engineering-feasible plus normatively necessary plus undeployed," marks that civic proof reaches into the political-economic and governance layers. When cited, the treatment of the first article is retained: the case is written as a puzzle and observation rather than as causal evidence independently supporting the core claim. The DAA construction of Brickell, Camenisch, and Chen 2004[^29] is formalized in ISO/IEC 20008-2, and the ISO/IEC 11889 series integrates it into TPM specifications; the engineering chain is intact. However, a causal account of why the *opener* role has not been deployed in production TPMs remains a research question, which the first article lists as a puzzle and assigns to subsequent governance research.

Ch2 addresses the normative-conditions layer; Ch1 addresses engineering feasibility and deployment political economy. The academic role of Ch2 is bridging, allowing subsequent chapters (Ch3 digital association, Ch5 policy-communication verification, Ch11 wallet anti-monopoly) to connect directly to scene-specific analysis without repeatedly handling the normative argument of "why these engineering terms should be combined."

---

## § 8. Conclusion

### § 8.1 A Conditional Conclusion on Academic Positioning

Civic proof passes three of Cappelen's concept-engineering criteria (coverage, discrimination, inheritance); the fourth (policy uptake) awaits verification by Ch5 case studies. The academic claim of Ch2 is confined to the following: civic proof is a *qualified concept-engineering proposal*, providing a normative name for "why these engineering terms should be combined." It is not a new primitive, nor a new specification—it is a normative conjunction, an upper-layer integrative name rather than lower-layer engineering design.

The synthesis of the argument is supported along four axes. The inventory of the existing conceptual landscape in § 2 proves, by inductive reasoning, that existing concepts occupy different layers and have limited adoption. The philosophical foundations of privacy in § 3 derive, by deductive reasoning, that the normative conditions of the civic context are not derivable from commercial / government identity. Marshall's three layers of citizenship in § 4 supply, by analogical reasoning, a sense of conceptual location rather than independent evidence. The demand-type matrix in § 5 synthesizes the foregoing three lines through abductive reasoning into a "best but not unique" naming proposal. The composite strength of the argument is moderate-to-strong, strongest in the standard literature inventory of § 2 and the CI derivation of § 3.2, and weakest in the asymmetry of analogy in § 4, which has been confined to heuristic framing.

Writing the concept-engineering proposal as a conditional conclusion rather than an already-verified claim follows from the intrinsic requirements of Cappelen's criteria on concept-engineering claims. Subsequent observation of the two ongoing policy processes—EUDI ARF and Taiwan's DIW—will move the fourth criterion from "awaiting verification" to "verified result," and the outcome, whether affirmative or negative, will provide substantive feedback to the academic positioning.

### § 8.2 Open Problems for Subsequent Verification

The following questions are left to subsequent chapters and interview research.

First, empirical verification of the "policy uptake" criterion. Recommended cases are the EUDI ARF v2.x implementing-regulations process and the subsequent Taiwan DIW specs. The observations include whether legislative drafts use the term "civic proof," whether cross-field working groups adopt it as a common reference, and whether academic citations inherit it critically rather than merely list it.

Second, engineering anchor points from CI operationalization to wallet specifications. Developments after Benthall–Gürses–Nissenbaum 2017, the specific feasibility of introducing Conformance Profiles in W3C VC Working Group v2.x, and the production-ready pathways of Hyperledger AnonCreds and IBM Idemix all belong to this issue.

Third, redress gaps for cross-jurisdictional wallet failures and revocation errors. The differences in legal effect of accountable pseudonymity under EU GDPR, Taiwan's Personal Data Protection Act, and U.S. First Amendment case law require comparative legal research.

Fourth, comparative research on PoP families. The ontological assumptions of the iris, social, and vouching families and their differential compatibility with civic proof, together with empirical SBT-field deployment, revocation rates, and user-perception data, require supplementary research.

Fifth, historical comparison. Comparative research on the continuity between paper-era "civic proofs" (household-registration transcripts, birth certificates, voter-registration cards) and digital civic proof can prevent the framing of digital civic proof as a wholly novel invention and help identify which normative conditions remain consistent across media.

Sixth, the Taiwanese context. Academic discussion of contextual integrity and the civic context in Chinese-language journals is nearly absent; at present, work can proceed only along the layer of policy documents. Subsequent chapters should incorporate dialogue with domestic constitutional scholars and civic-technology communities (the g0v Summit and the Taiwan DIW policy team), and connect with research on the National Development Council's digital-ID controversies of 2018–2021 and the revision of the Personal Data Protection Act.

### § 8.3 Connections to Subsequent Chapters

The conceptual foundation below provides the normative framework for subsequent chapters. Article 03 (digital-association-empirical-test) will employ the four-demand-type matrix of § 5.1 to test the "digital association failure" hypothesis: the contemporary digital-association platforms (Discord, Telegram, Signal, Mastodon, g0v Slack) will be compared item-by-item against the pseudonymous-proof condition configuration to observe whether the gap between specifications and normative conditions points systematically to the same set of engineering omissions. Article 11 (wallet-as-essential-facility) will use the upper-normative position to provide a normative framework for wallet anti-monopoly arguments, connecting the claim that "the wallet is an essential facility for civic action" to the naming work at the normative-conditions layer of civic proof.

The academic value of civic proof, as a normative conjunction, lies in providing a mediating concept that allows the engineering community, the policy community, and the normative-philosophy community to sit at the same table. A successful concept-engineering proposal is not asserted as already verified at the concept-definition stage; its verification takes place after repeated use, critical inheritance, and translation into different languages and jurisdictions. The work of Ch2 is to mark this proposal with sufficient rigor so that the case observations of Ch5 have concrete objects to examine.

---

## References

[^1]: Cappelen, H. (2018). *Fixing Language: An Essay on Conceptual Engineering*. Oxford University Press. Source level A.

[^2]: Chaum, D. (1985). "Security Without Identification: Transaction Systems to Make Big Brother Obsolete." *Communications of the ACM*, 28(10), 1030–1044. Source level A.

[^3]: Camenisch, J., & Lysyanskaya, A. (2001). "An Efficient System for Non-transferable Anonymous Credentials with Optional Anonymity Revocation." *EUROCRYPT 2001*. Springer LNCS 2045; Camenisch, J., & Lysyanskaya, A. (2002). "Dynamic Accumulators and Application to Efficient Revocation of Anonymous Credentials." *CRYPTO 2002*. Springer LNCS 2442. Source level A.

[^4]: ISO/IEC 18013-5 (2021). *Personal identification — ISO-compliant driving licence — Part 5: Mobile driving licence (mDL) application*. International Organization for Standardization. Source level A.

[^5]: W3C. (2025-05-15). *Verifiable Credentials Data Model 2.0* (W3C Recommendation). World Wide Web Consortium. Source level A.

[^6]: European Commission. *European Digital Identity Wallet Architecture and Reference Framework*, 2025-12 Cooperation Group rolling iteration (historical snapshots v1.4 / v1.5). EUDI ARF. Source level A.

[^7]: Buterin, V., Ohlhaver, P., & Weyl, E. G. (2022). "Decentralized Society: Finding Web3's Soul." SSRN Working Paper 4105763; corresponding ERC-5114 / 5192 / 5484 proposals. Source level A (proposal texts) / B (adoption data).

[^8]: Boneh, D., Boyen, X., & Shacham, H. (2004). "Short Group Signatures." *CRYPTO 2004*. Springer LNCS 3152, 41–55. Source level A.

[^9]: IETF. (2025-11). *SD-JWT-based Verifiable Credentials* (RFC 9901); CFRG draft-irtf-cfrg-bbs-signatures; W3C VC Data Integrity BBS Cryptosuite v1.0 (2024). Source level A.

[^10]: Nissenbaum, H. (2010). *Privacy in Context: Technology, Policy, and the Integrity of Social Life*, chs. 7–8. Stanford University Press. Source level A.

[^11]: Nissenbaum, H. (2011). "A Contextual Approach to Privacy Online." *Daedalus*, 140(4), 32–48. Source level A.

[^12]: Mulligan, D. K., Koopman, C., & Doty, N. (2016). "Privacy Is an Essentially Contested Concept: A Multi-Dimensional Analytic for Mapping Privacy." *Philosophical Transactions of the Royal Society A*, 374, 20160118. Source level A.

[^13]: Pasquale, F. (2015). *The Black Box Society: The Secret Algorithms That Control Money and Information*. Harvard University Press. Source level A.

[^14]: Cohen, J. E. (2012). *Configuring the Networked Self: Law, Code, and the Play of Everyday Practice*, esp. ch. 5 (playspace) and ch. 7 (semantic discontinuity and networked-self configuration); see also Part II for the overall context. Yale University Press. Source level A.

[^15]: Cohen, J. E. (2019). *Between Truth and Power: The Legal Constructions of Informational Capitalism*, ch. 2. Oxford University Press. Source level A.

[^16]: Hildebrandt, M. (2015). *Smart Technologies and the End(s) of Law: Novel Entanglements of Law and Technology*, chs. 8–10. Edward Elgar. Source level A.

[^17]: Hildebrandt, M. (2019). "Privacy as Protection of the Incomputable Self: From Agnostic to Agonistic Machine Learning." *Theoretical Inquiries in Law*, 20(1), 83–121. Source level A.

[^18]: Marshall, T. H. (1950). *Citizenship and Social Class and Other Essays*. Cambridge University Press. Source level A.

[^19]: European Convention on Human Rights, Article 11 (freedom of association); International Covenant on Civil and Political Rights, Article 22 (freedom of association). Source level A (international-treaty texts).

[^20]: Joppke, C. (2010). *Citizenship and Immigration*. Polity Press. Source level A.

[^21]: Sen, A. (1999). *Development as Freedom*. Knopf / Oxford University Press; Sen, A. (2009). *The Idea of Justice*. Harvard University Press. Source level A.

[^22]: Anderson, E. (1999). "What Is the Point of Equality?" *Ethics*, 109(2), 287–337; Anderson, E. (2017). *Private Government: How Employers Rule Our Lives*. Princeton University Press. Source level A.

[^23]: NIST. (2024). *Digital Identity Guidelines* (Special Publication 800-63-4); EU. *eIDAS Regulation* (Regulation (EU) No 910/2014; as amended by Regulation (EU) 2024/1183, i.e., eIDAS 2.0); ISO/IEC 29115 entity-authentication assurance framework. Source level A.

[^24]: Buterin, V. (2023-07-24). "What Do I Think About Biometric Proof of Personhood?" *vitalik.eth.limo*; Siddarth, D., et al. (2020). "Who Watches the Watchmen? A Review of Subjective Approaches for Sybil-Resistance in Proof of Personhood Protocols." Source level A (academic paper) / C (personal blog).

[^25]: Lipton, P. (2004). *Inference to the Best Explanation* (2nd ed.). Routledge. Source level A.

[^26]: Burgess, A., & Plunkett, D. (2013). "Conceptual Ethics I & II." *Philosophy Compass*, 8(12), 1091–1110. Source level A.

[^27]: Pfitzmann, A., & Hansen, M. (2010). *A Terminology for Talking About Privacy by Data Minimization* (v0.34). Source level A (community-maintained terminology).

[^28]: Solove, D. J. (2008). *Understanding Privacy*. Harvard University Press. Source level A.

[^29]: Brickell, E., Camenisch, J., & Chen, L. (2004). "Direct Anonymous Attestation." *CCS 2004*. ACM; ISO/IEC 20008-2 (Anonymous digital signatures); ISO/IEC 11889 (TPM specification). Source level A.

[^30]: Mill, J. S. (1859). *On Liberty*, ch. 3. London: John W. Parker and Son. Source level A (classical text).

[^31]: Tocqueville, A. de (1840). *Democracy in America*, vol. 2. Paris: Librairie de Charles Gosselin. Source level A (classical text).

[^32]: Pettit, P. (1997). *Republicanism: A Theory of Freedom and Government*, ch. 6. Oxford University Press. Source level A.
