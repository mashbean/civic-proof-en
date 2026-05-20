---
title: "From State-Issued Credentials to Citizens Proving Themselves: A Restatement of How Digital Identity Transforms Digital Civic Infrastructure under the Public Realm Floor (civic-proof Series Article 0')"
description: "The 0' academic restatement of the civic-proof concept. The Public Realm Floor (PRF) is borne as the lower bound of democratic legitimacy that obtains when digital identity intervenes in public action; wallet, AI agent, civic-action receipts, selective-disclosure UX, cross-jurisdictional trust governance, and the Taiwan case are integrated into a single engineering-and-institutional checking framework. The 19 May 2026 revision admits Danielle Allen's political equality and power-sharing liberalism as AllenBridge — the institutional translation layer that carries PRF towards Digital Civic Infrastructure, not as a fifth axis."
pubDate: 2026-05-17
updatedDate: 2026-05-19
tags: ["civic-proof", "civic-proof-foundations", "civic-proof-series-zero-prime", "Allen-Lab-academic-rewrite", "Harvard-Kennedy-School-Ash-Center", "digital-civic-infrastructure", "digital-public-infrastructure", "public-realm-floor", "Arendt-plurality", "Habermas-validity", "Pettit-contestation", "Mouffe-agonism", "conjunctive-normative-floor", "civic-proof-operational-concept", "Danielle-Allen", "power-sharing-liberalism", "political-equality", "AllenBridge", "input-to-action-loop", "co-ownership", "rights-of-participation", "issuance-legitimacy", "exchange-architecture", "two-layer-analysis", "legal-identity", "attribute-proof", "uniqueness-proof", "pseudonymous-participation", "anonymity", "unlinkability", "verifiability", "accountability", "accountability-without-real-name", "Talley-v-California", "NAACP-v-Alabama", "McIntyre-v-Ohio", "selective-disclosure", "no-phone-home", "minimal-proof", "holder-centric", "issuer-centric", "trust-list", "trust-root", "trust-anchoring", "federated-trust-list-alliance", "wallet-three-presupposition", "AI-agent-delegation-limits", "Tomasev-delegation-five-elements", "civic-action-receipt-schema", "selective-disclosure-UX", "supporter-UI-three-layer-separation", "CRPD-Article-29", "four-tier-trust-governance", "cross-jurisdictional-redress-gap", "inclusion-rights-three-layers", "functional-demos-operational-definition", "universal-conditional-distinction", "anti-mythologization-clause", "design-intuition-vs-normative-claim-separation", "working-strengthened-thesis-discipline", "likelihood-by-mechanism", "Taiwan-democratic-frontline", "MOICA", "TW-DIW", "moda", "Taiwan-Digital-Identity-Wallet", "EUDI-Wallet", "eIDAS-2.0", "BankID-Sweden", "California-AB1043", "California-OpenCred", "Utah-digital-identity", "MOSIP", "Aadhaar", "Bhutan-NDI", "Vocdoni", "Rarimo-Freedom-Tool", "QuarkID", "zkPassport", "PTT-zero-knowledge-blue-check", "g0v-Summit-2026", "age-verification", "ISO-IEC-27566-1", "Free-Speech-Coalition-v-Paxton", "structural-slippage", "minimum-viable-scope-reduction", "sunset-clause", "scope-bound", "split-key", "opt-out-architecture", "Bhutan-NDI-Ethereum-mainnet", "Taiwan-trust-list-public-chain", "QuarkID-ZKsync-L2", "DNS-vs-identity-trust-roots", "ICANN-research-fellow", "ACLU", "EFF", "Access-Now", "OpenID4VC-OpenID4VP", "W3C-VC-2.0", "W3C-DID", "Digital-Credentials-API", "NIST-SP-800-63-4"]
category: "Digital Identity and Democratic Theory"
aiModel: "Claude Opus 4.7"
aiPrompt: "Rewrite of the Allen Lab Fellow Meeting presentation of 17 April 2026, 'From State-Issued Credentials to Citizens Proving Themselves,' as the 0' (academic-submission state) version. Rewrite guidance: (1) abandon the mashbean-accent personal voice for an academic-submission register; (2) reduce contextual scene-setting and strengthen the discursive body of civic-proof theory and case-statement; (3) avoid acronymised technical codes (PRF / F1 / F2 / F3 / A2 etc.) and present technical terms in Chinese-English parallel form; (4) word count may be expanded. Inheriting the bearing of the past thirty days' civic-proof series of 25 main articles + 4 retrofits + 1 Taiwan deep-dive + 1 series capstone."
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-05-17-civic-proof-foundations"
aiGeneratedDate: 2026-05-17
humanReviewed: false
lang: "en"
series: "civic-proof"
seriesOrder: 25
slug: "2026-05-17-civic-proof-foundations"
---

## Abstract

When the digital-identity infrastructure enters the conditions of entry into the public realm of a democratic polity in the concrete form of wallets, verifiable credentials, selective-disclosure user interfaces, and cross-jurisdictional trust lists, where exactly does the normative lower bound of democratic legitimacy lie? This article advances the **Public Realm Floor (PRF)** as a normative answer to that question, bearing the conjunction of four political-philosophical anchors — Arendt's plurality, Habermas's validity, Pettit's contestation, and Mouffe's agonism — as the composite floor of democratic legitimacy. It advances **civic proof** as the operational concept that carries that normative floor into concrete engineering designs (wallets, AI agents, civic-action receipts, user interfaces, governance frameworks). The argument unfolds through a two-layer analysis (issuance legitimacy and exchange architecture), takes the four civic-proof demand types (legal identity, attribute proof, uniqueness proof, pseudonymous participation) and the four normative conditions (anonymity, unlinkability, verifiability, accountability) as its analytic base, and shows that the core thesis "accountability does not need to take real-name identification as a precondition" converges along three independent genealogies — cryptography, normative political theory, and the constitutional-law history of the United States. The Taiwan case is developed as a democratic-frontline stress-test, with multiple comparative cases (EU, Sweden, US, India, Bhutan) as references. The conclusion bears a **conditional** floor of democratic legitimacy: the normative force of the article presupposes a democratic context; it does not claim PRF as the unique standard of legitimacy; it does not claim that its conclusions extrapolate to non-democratic regimes; and it does not claim to be decisive ground truth for cryptographic engineering.

---

## § 1 Introduction: When Digital Identity Enters Public Action

The concept of **Digital Civic Infrastructure (DCI)** has been systematised in the context of the Allen Lab at the Harvard Kennedy School Ash Center; the recent framework understands it as the set of institutional and technical conditions that support citizens in **connecting, learning, and acting**. In contrast to **Digital Public Infrastructure (DPI)** — the more common tripartite split into "data / payment / identity" — DCI shifts the focus from the existence of infrastructure as such to whether it can support the civic action that a democratic society requires.

The present article was revised on 19 May 2026 to add a theoretical bridging layer drawn from Danielle Allen. Her **power-sharing liberalism** and **political equality** are *not* admitted as a fifth component of the Public Realm Floor; rather, they are designated **AllenBridge**, an institutional translation layer that carries PRF towards Digital Civic Infrastructure. Its check terms are rights of participation, non-monopoly, co-ownership, public responsiveness, and the input-to-action loop. The full bridging argument is presented separately in ["How Danielle Allen's Power-Sharing Liberalism Rewrites Digital Civic Infrastructure"](/reports/2026-05-19-danielle-allen-power-sharing-civic-proof-bridge/).

Under this DCI shift, the position of digital identity exhibits an asymmetry worth investigating. At the Connect phase, identity primarily handles persistence, community governance, role allocation, and basic trust; it often does not necessarily intervene in public decision-making. At the Learn phase, much information access and discussion does not require strong identity; reading without login and low-barrier participation in discussion remain feasible. At the Act phase, however — when the system begins to **gate action** by asking whether the participant is eligible, has voted twice, belongs to a particular district, meets the age threshold, conforms to procedure, or must bear responsibility for some outcome — digital identity enters directly into the core of public decision-making, public-resource allocation, and the conditions of entry into public space.

The reason that digital identity intervenes most strongly at the Act layer is not accidental, nor is it the tautology that "action is more important." It is rather that action is the moment at which the four normative conditions of the public realm — plurality, validity, contestation, and agonism — are simultaneously activated. The Connect phase does not require these four conditions to be in place simultaneously; the Learn phase does not require it either; only when the system begins to gate civic action are the four conditions all brought to the table together.

Taking this asymmetry as its starting point, the article develops the argument that civic proof is the core concept by which digital identity is transformed into digital civic infrastructure. The structure of the article is as follows. Section 2 establishes a two-layer analysis of digital identity, splitting it into issuance legitimacy and exchange architecture. Section 3 develops the four civic-proof demand types and four normative conditions. Section 4 argues for the convergence of "accountability does not need to take real-name identification as a precondition" along three independent genealogies. Section 5 is the normative core: it constructs the four-fold conjunctive structure of the Public Realm Floor and adds AllenBridge as the institutional translation layer for political equality and power-sharing liberalism. Section 6 is the operational core: it develops the concrete engineering-bearing of four layers — wallets, AI agents, civic-action receipts, and selective-disclosure UX — and adds an AllenBridge engineering check oriented towards non-monopoly, intelligibility, response-loop closure, co-ownership, and backup capacity. Section 7 develops cross-jurisdictional governance structure. Section 8 establishes the methodology of the universal-conditional distinction for comparative cases. Sections 9 and 10 treat country comparisons and the Taiwan deep-dive. Sections 11 through 15 handle civic-layer engineering cases, the age-verification stress test, the engineering bearing of minimal proof, civic and sub-national experiments, and the role of public blockchains at the trust layer. Section 16 presents the policy agenda, reinforced by power-sharing liberalism on procurement, standards, trust lists, vendor pluralism, public investment, and civilian backup. Section 17 concludes with the division of labour among the Public Realm Floor, AllenBridge, and Digital Civic Infrastructure.

---

## § 2 Two-Layer Analysis: Issuance Legitimacy and Exchange Architecture

The analysis of digital identity has two layers — **issuance legitimacy** and **exchange architecture**. The two layers are tightly coupled but bear different argumentative content; conflating them deprives many seemingly tangled debates of clarity.

Issuance legitimacy concerns legal effect, sovereignty, institutional accountability, revocation rights, and the normative question of *why* a credential is worthy of belief. Its bearers are states, trusted institutions, and community rules. Its key question is not a technical detail but: "who has the right to issue credentials that produce effects on civic rights and duties (civic consequences)?" Most contemporary high-assurance **trust roots** are still provided by states or by institutions recognised by states. Although alternative paths — individual self-issued identity (e.g., self-sovereign identity rooted in Ethereum addresses), civic-group self-issued identity (union membership, clubs, associations), and corporate-issued identity (e.g., email-based digital identity) — have long existed and seen concrete deployment, they remain, at the time of writing, hard to substitute for state-issued credentials in scenarios that require legal proof and high-assurance attribute proof. In uniqueness proof and pseudonymous participation, although experimental projects exist (such as the Ethereum-ecosystem Gitcoin Passport, which has since changed hands and direction), most of these experimental projects still rest on state-issued credentials as their trust root (e.g., zkPassport relying on the passport chip).

Exchange architecture concerns the engineering questions of *how* credentials are held, *how* they are presented, *who* verifies, *how* they are revoked, *how* they are reused across single systems, and *whether* the process leaves traceable footprints. Its bearers are Public Key Infrastructure (PKI), Verifiable Credentials (VC), wallets, browsers, trust lists, and trust registries — a set of technical components.

The genuine change of the past decade lies not at the issuance-legitimacy layer but at the exchange-architecture layer. Differences at this layer — how credentials are held, how they are presented, who can verify, who can enter the ecosystem, who controls the trust list, who bears onboarding cost — directly determine whether digital identity can intervene at the Act layer of DCI. A key historical context is the outbreak of the COVID-19 pandemic: because vaccine passports carried a great deal of sensitive personal data, various standards-setting bodies began proposing the concept of "decentralized identity" in response to the state-surveillance risk of the centralised identity databases stored and used by government. The field has since extended into Verifiable Credentials, Decentralized Identifiers (DIDs), zero-knowledge proofs, and other technical genealogies.

Once the two layers are pulled apart, the relations among the technical components — PKI, VC, wallets, browsers, trust lists, trust registries — operating at distinct layers can be clearly displayed. The subsequent sections of this article all build on this two-layer analysis.

---

## § 3 Four Civic-Proof Demand Types

The purpose of introducing the concept of **civic proof** is to shift the focus of digital-identity analysis from "what the credential is" to "what proof forms can support public action." Many forms of civic action do not require complete legal identity; what they require may be a proof of a particular attribute. Once demand is decomposed, civic proof comes in four types.

The first is **legal identity** proof. This demand arises in tax filing, legally effective digital signatures, the receipt of statutory benefits, and the like. It requires a root identity authorised by the state or law, with high assurance, revocability, and contestability. Its minimum requirements on freedom and privacy are verifiability and the availability of redress; it does not require anonymity or unlinkability.

The second is **attribute proof**. This demand arises in age checks, residency verification, student status, membership, and the like. It requires a verifiable attribute source but does not require the presenter to disclose their complete identity. Its core engineering requirements are selective disclosure and data minimisation. Its minimum requirements on freedom and privacy are unlinkability and no-phone-home — the verification process should not leave linkable traces across verifiers, and verification events should not be transmitted back to the issuer.

The third is **uniqueness proof**. This demand arises in one-person-one-account, one-person-one-vote, and forum "blue-check" scenarios. It requires that the uniqueness source be trustworthy, and that it be Sybil-resistant and low-disclosure. Its minimum requirements on freedom and privacy are pseudonymity and unlinkability.

The fourth is **pseudonymous participation**. This demand arises in whistleblowing, sensitive consultation, and political discussion. It requires procedural legitimacy and ex-post accountability mechanisms; participants must be able to participate, speak, contribute, and be audited after the fact, without disclosing their real identity in the ordinary state. Its minimum requirements on freedom and privacy are the simultaneous coexistence of anonymity, accountability, and a supervised audit chain.

Underpinning these four demand types are four normative conditions that must hold simultaneously: **anonymity, unlinkability, verifiability, and accountability**. The article reads these four conditions conjunctively: each is individually necessary and cannot be fully substituted by the other three; the violation of any one condition structurally threatens the legitimacy of the civic-proof design. The normative basis for this conjunctive reading is borne by Section 5.

It is worth flagging that one of these four normative conditions appears, in engineering implementation, internally contradictory: accountability is usually understood as "attributing behaviour to a specifically identifiable individual," while anonymity requires that behaviour *not* be attributed to a specifically identifiable individual. If both are simultaneously necessary, civic proof appears conceptually impossible. The dissolution of this surface contradiction is the task of Section 4.

---

## § 4 Accountability Does Not Need to Take Real-Name Identification as a Precondition: Convergence Across Three Independent Genealogies

The core thesis of the civic-proof concept is that "accountability does not need to take real-name identification as a precondition." This thesis sounds counter-intuitive to the engineering community and to policy circles, because the mainstream understanding directly equates accountability with legal prosecutability, and legal prosecutability with identifiability as a specific natural person. The chain of inference — accountability = legal prosecutability = real-name identifiability — is borne as a synonymy. The present article bears that this synonymy does not hold along three independent genealogies.

The first genealogy is the fact of cryptography. Contemporary cryptography provides concrete engineering primitives — selective disclosure, zero-knowledge proofs, unlinkable selective disclosure (BBS+ signature schemes), revocation status lists, auditable evidence chains. These primitives allow a credential to be presented without disclosing complete identity, and, in the event of a dispute, the evidence chain of the presentation to be reconstructed by particular audit bodies (such as courts or independent oversight authorities) under specific conditions. That is, the "audit-after-the-fact" property of accountability can be borne by cryptographic primitives without requiring full identity disclosure ex ante. This is a fact of cryptography, not a normative claim.

The second genealogy is the fact of normative political theory. Mark Bovens (2007) decomposes accountability into a two-layer structure: **answerability** (the actor can give an account of its behaviour) and **enforceability** (an external entity can impose sanction or correction on the behaviour). Bovens's structure does not presuppose that the addressee of the account must be a "specifically identifiable natural person"; the bearer of the account can be a pseudonymous identity, provided that under specific conditions the pseudonymous identity can be linked back to a position capable of bearing responsibility (not necessarily a real name). Philip Pettit, in *On the People's Terms* (2012), develops the republican concept of contestability, bearing the core requirement of non-domination as "behaviour can be externally questioned and redressed"; this core requirement likewise does not presuppose real-name identification.

The third genealogy is the fact of US constitutional-law history. *Talley v. California* (1960) establishes the free-speech protection of anonymous printed matter — California had required all printed matter to bear the author's name and address; the Supreme Court held by majority that the requirement was unconstitutional, on the ground that compelled disclosure would suppress minority political participation. *NAACP v. Alabama ex rel. Patterson* (1958) prohibits state governments from compelling disclosure of the membership lists of private associations, bearing the core protection of associational freedom. *McIntyre v. Ohio Elections Commission* (1995) recognises the constitutional status of anonymous political speech and explicitly states that "anonymous speech is one of the core elements of political freedom." Together, the three cases establish a genealogy of constitutional precedent for "anonymous expression and accountability do not require real-name identification simultaneously."

The three genealogies — cryptography, normative political theory, and US constitutional-law history — develop independently, do not depend on one another, and yet converge on the same conclusion: accountability does not need to take real-name identification as a precondition. This conclusion is not the invention of any single genealogy but the convergent consensus of the three. For engineering implementation, this convergence implies that civic-proof engineering can simultaneously bear accountability and pseudonymity/anonymity without violating any internal norm of any genealogy. For policy design, it implies that "compulsory real-name identification" as a regulatory instrument does not necessarily raise accountability in public-realm scenarios, and may instead suppress the plurality of civic participation.

The subsequent sections — especially Section 5 on the Public Realm Floor and Section 6 on engineering bearing — all build on this convergence thesis.

---

## § 5 The Public Realm Floor: Conjunction of Four Political Philosophies

This section is the normative core of the article. It bears, as the regulatory floor of democratic legitimacy, the conjunction of four political-philosophical primary sources: Hannah Arendt's **plurality**, Jürgen Habermas's validity claims (*Geltungsansprüche*), Philip Pettit's **contestation**, and Chantal Mouffe's **agonism**. This regulatory floor is named the **Public Realm Floor (PRF)**.

### § 5.1 The Constitution of the Four Anchors

The concept of **plurality** comes from Hannah Arendt's *The Human Condition* (1958). Arendt distinguishes human existence into three layers — labour, work, and action; among them, action is the distinctively human one, because action occurs in a public realm of co-presence among multiple subjects (multiple *who*). Arendt's plurality is not a statistical diversity but a "plurality" in the ontological sense: each subject entering the public realm brings a "who" that cannot be reduced, and the public realm is the very place where these "whos" appear to one another, acknowledge one another, and act with one another. If plurality is eliminated, action loses its public character. In the context of contemporary digital-identity infrastructure, the concrete bearing of plurality is whether citizens can coexist in the public realm under multiple identities without being forcibly collapsed into a single identity root.

The concept of **validity claims** (*Geltungsansprüche*) comes from Jürgen Habermas's *Theorie des kommunikativen Handelns* (1981) and *Faktizität und Geltung* (1992). Habermas decomposes the rationality structure of any communicative action into three claims — a truth claim (*Wahrheit*) about the external world, a rightness claim (*Richtigkeit*) about norms, and a sincerity claim (*Wahrhaftigkeit*) about subjectivity. The legitimacy of any public discussion requires participants to bear the obligation to respond to their own claims; this is validity. In *Faktizität und Geltung* Habermas further decomposes the structure of the public sphere into the informal opinion-formation layer and the formal decision-making layer, describing the bearing relation between them with the sluice model. In the context of contemporary digital-identity infrastructure, the concrete bearing of validity is whether the public-reason ground of a credential can be examined — whether the claim borne by the credential can be reasonably questioned and answered in public discussion.

The concept of **contestation** comes from Philip Pettit's *On the People's Terms* (2012). Pettit understands republican freedom as **non-domination**, engineered as **contestability**: any authoritative decision must, in principle, be open to questioning, redress, and reversal by those affected. Pettit advances the "Eyeball Test": if the affected person "cannot meet the eye" of the authority, that authority relation constitutes domination. He further extends the test into the four conditions of "editorial democracy," requiring that public decision-making be open to contestation, modification, and reversal by dissenters. In the context of contemporary digital-identity infrastructure, the concrete bearing of contestation is whether citizens can, in an active stance, raise ex-post contestation of authoritative decisions in digital space and obtain effective redress.

The concept of **agonism** comes from Chantal Mouffe's *The Democratic Paradox* (2000). Mouffe rejects Habermas's consensus orientation and holds that the core of democratic politics lies not in achieving consensus but in maintaining the relation of "legitimate adversary": opposing political positions need not be reduced to consensus, but must mutually recognise one another as legitimate adversaries rather than enemies. Mouffe divides the conditions of the legitimate-adversary relation into three: mutual recognition, shared rules, and an agonistic framework. In the context of contemporary digital-identity infrastructure, the concrete bearing of agonism is whether opposing political positions can coexist in the same identity infrastructure without elimination — whether the bearers of minority political views can continue to speak without being compelled to disclose their identity.

### § 5.2 The Bearing Structure of the Conjunctive Floor

The article bears the four above as a **conjunctive floor** of democratic legitimacy. The conjunctive reading has three core commitments: each component is individually necessary; no component can be fully substituted by the other three; and the floor cannot be replaced by digital engineering.

**Individually necessary** means that if any one component is violated, democratic legitimacy is structurally threatened. If plurality is violated, the public realm loses the ontological ground of "many *whos* coexisting." If validity is violated, public reason loses its justificatory ground. If contestation is violated, authoritative decisions fall into a relation of domination. If agonism is violated, political opposition degenerates either into the annihilation of enemies or into the suppression of disagreement under forced consensus.

**Non-substitutable** means that the four components are not redundant designs interchangeable with one another but bear independent normative content. Plurality bears the ontological "who"; validity bears the rationalisation structure of communicative reason; contestation bears the redress structure of authority relations; agonism bears the bearing structure of political opposition. When any one is violated, the other three cannot fill the normative gap.

**Not substitutable by digital engineering** means that the bearing of the four components cannot, in principle, be completed by any single engineering component alone — be it a cryptographic primitive, wallet architecture, AI agent, or blockchain consensus protocol. Engineering bearing can be the concrete implementation of the regulatory floor, but it cannot substitute for the regulatory floor itself. Section 6 will develop this point further.

The formal bearing of the conjunctive floor can be expressed as a conditional implication: for any digital-identity design *d*, if there exists any normative component *i* such that *d* violates *i*, then the legitimacy degradation of *d* will reach or exceed some threshold acceptable to a democratic polity. This threshold is an **analytic suggestion**, not an empirically measured value; its calibration requires regression studies across at least five independent cases as an empirical basis. The article does not claim that this threshold has been empirically calibrated; any citation that reads the function as an "empirical probability prediction" is withdrawn in advance.

### § 5.3 The Public Realm Floor as a Floor, Not the Unique Standard

The bearing of the Public Realm Floor extends only to the **floor** of democratic legitimacy; it does not claim PRF as the **unique standard**. This distinction has three important implications.

*First*, what the floor bears are necessary conditions, not sufficient conditions. The distinction between "has not crossed the floor" and "has attained the highest level of legitimacy" is kept strictly. An engineering design that does not violate any of the four components is not thereby the "best design"; it is merely a design that "has not fallen below the floor."

*Second*, the Public Realm Floor does not exclude other normative approaches. John Rawls's justice as fairness, Amartya Sen's capability approach, Martha Nussbaum's dignity-based capabilities, Axel Honneth's recognition theory, and other normative approaches may serve as ceiling or boundary conditions for the Public Realm Floor. The concrete conjunctive configurations — e.g., whether "PRF + Rawls's justice as fairness" yields a stronger normative requirement — are left as future work.

*Third*, the non-uniqueness stance bears the series' resistance to a manifesto register. The floor bears an examinable minimum threshold; it does not bear a sufficient criterion of legitimacy. Any citation that escalates the Public Realm Floor into an "absolute unique normative standard" departs from this bearing structure.

### § 5.4 AllenBridge: Political Equality as the Institutional Translation Layer

Danielle Allen's political equality and power-sharing liberalism provide a reinforcement of the Public Realm Floor. Its position is the translation layer that carries the floor towards institutional design and engineering checking. The Public Realm Floor answers "what minimum conditions of democratic legitimacy cannot be bypassed"; AllenBridge answers "how these minimum conditions translate into power-sharing, co-ownership, and public responsiveness in Digital Civic Infrastructure."

Formally, the reinforcement can be written as:

```
AllenBridge(d) =
  political_equality(d)
  ∧ rights_of_participation(d)
  ∧ no_monopoly(d)
  ∧ co_ownership(d)
  ∧ input_to_action_loop(d)
```

This formula does not rewrite the four components of the Public Realm Floor. Political equality simultaneously touches Arendt's plurality, Habermas's validity, Pettit's contestation, and Mouffe's agonism; admitting it as a fifth axis would double-count existing components and would force the entire 32-cell bearing matrix and necessity argument of the nineteenth article to be reopened. The article takes a more restrained move: the Public Realm Floor is preserved as the normative floor, and AllenBridge bears the institutional direction towards Digital Civic Infrastructure.

The normative significance here is that civic proof cannot be evaluated solely as a privacy-protection technology. If a wallet, receipt, delegation, or trust-list design protects minimum disclosure but hands the gateway to public action to a single platform, a single vendor, a single issuer, or an unresponsive algorithm, it has still not passed the AllenBridge check. The democratic value of civic proof depends on whether it preserves citizens' real capacity to share power, participate in institutions, question decisions, and obtain responses.

### § 5.5 Strict Separation of Normative Claims and Descriptive Facts

As a normative argument, this section must be kept strictly separated from descriptive claims. The four anchors of the Public Realm Floor are **normative claims** — answers to the normative question "where does the regulatory floor of democratic legitimacy lie?" The section does not claim that any contemporary digital-identity infrastructure has actually reached the floor; nor does it claim that any contemporary system in violation of the floor has actually produced collapse of democratic legitimacy.

The relation between the regulatory floor and empirical measurement is a conditional implication: if a design violates the regulatory floor, then the design's legitimacy degradation will reach or exceed a threshold. The bearing of this conditional implication does not depend on empirical data of specific cases; its falsification path is "to find a concrete case that violates the regulatory floor but does not produce legitimacy degradation." The article bears the logical structure of the conditional implication, not its specific empirical content.

---

## § 6 Engineering Bearing: Wallets, AI Agents, Civic-Action Receipts, and User Interfaces

This section is the operational core of the article. It bears four concrete engineering designs — wallets, AI agents, civic-action receipts, and selective-disclosure user interfaces — as the concrete bearing of the Public Realm Floor in digital-identity infrastructure. For each engineering design, the section bears its correspondence with the four PRF components, its structural limits, and the concrete conditions of its engineering implementation.

### § 6.1 The Wallet's Three Presuppositions and Their Degradation Paths

The **wallet**, as the final user-facing interface of the digital-identity infrastructure, bears three mutually entangled presuppositions: **individual ownership**, **individual identification**, and **individual private-key holding**.

Individual ownership presupposes that the wallet is owned by a single natural person; it does not admit multiple holders, common ownership, or cross-generational inheritance. Individual identification presupposes that the holder's identity is a single identification; it does not admit pseudonymous holding, multiple identities, or contextualised switching. Individual private-key holding presupposes that cryptographic control of the wallet is concentrated in a single natural person; it does not admit multi-signature schemes, key escrow, or cross-institutional splitting.

Taken singly, each presupposition seems a reasonable engineering simplification; taken conjointly, they exclude specific groups — older persons with dementia, persons with cognitive impairment, minors, undocumented refugees, and elderly citizens who require ad-hoc guardianship — from the ability to enter the wallet infrastructure. Under the Public Realm Floor framework, this exclusion constitutes a systematic violation of the plurality component: the "who" of these groups is excluded from the public realm in advance.

Concrete engineering preventives against the degradation paths of the three presuppositions include: recognising multi-holder structures (e.g., co-holding with ad-hoc guardians), recognising pseudonymous-holding structures (e.g., community-endorsed pseudonymous identity), and recognising cross-institutional private-key splitting structures (e.g., dispersing the private key across trusted institutions through threshold signatures). Concrete engineering implementation of these three preventives requires extension at the wallet-specification layer and requires the verifier side to recognise and accept the extended designs.

### § 6.2 The Delegation Limits of AI Agents

When an **artificial intelligence agent** intervenes in civic action — querying, purchasing, signing, voting, submitting data, or operating civic workflows on behalf of a citizen — the core question of digital identity shifts from "who logs in" to "who can act on behalf of whom." This shift requires a dual normative and engineering bearing on the concrete form of agent delegation.

The **five-element structure of agent delegation** proposed by Nenad Tomasev et al. (2026) — authority transfer, responsibility transfer, accountability allocation, boundary setting, and trust calibration — is the principal engineering framework for contemporary delegation analysis. Cross-checking this five-element set against the three-element conjunction of civic proof — normative-claim bearer, formal-legitimacy bearer, actor-status bearer — yields a 15-cell necessary-condition matrix.

The analytic conclusion of this matrix is that two of the fifteen cells cannot be borne cryptographically: the intersection of responsibility transfer with the actor-status bearer, and the intersection of accountability allocation with the actor-status bearer. The former requires the bearing of first-personal *mens rea* — subjective responsibility for the act in the first person — a condition that presupposes a human consciousness structure, for which cryptography does not admit a primitive. The latter requires "appearance as legitimate adversary in the structure of agonistic politics," a condition that presupposes the bearer's entry into the agonistic relation of the public realm, for which cryptography again does not admit a primitive.

These two structurally unreachable cells constitute the **structurally non-delegable acts** of agent delegation. Under the Public Realm Floor framework, these non-delegable acts — bearing normative responsibility in the first person, and appearing as a legitimate adversary in political agonism — must be borne by the human person and cannot be substituted by an AI agent. Any product claim that "an AI agent can comprehensively substitute for civic action" violates this structural condition.

### § 6.3 The Formal Conditions of Civic-Action Receipts

A **civic-action receipt** is the evidential-chain structure left by a citizen in the course of public action. Its engineering bearing is a structured data model of fourteen field groups and twenty-three leaf fields. The model bears six necessary conditions: data minimisation (C1), presenter-holder cryptographic binding (C2), revocation-status verifiability (C3), cross-organisational independent verification (C4), cross-jurisdictional recognition (C5), and ex-post audit reconstruction (C6).

These six conditions are not interchangeable but conjunctive: if any one is missing, the evidential chain of the receipt structure exposes an exploitable breach. For example, if C2 (presenter-holder binding) is missing, any third party in possession of the receipt could impersonate the presenter, and the evidential value of the receipt would collapse instantly. If C6 (ex-post audit reconstruction) is missing, the accountability structure of the receipt fails, and the engineering bearing of the thesis "accountability does not need to take real-name identification as a precondition" cannot be sustained.

The formal-theorem bearing of the receipt structure carries four basic theorems and one reinforcement theorem. The four basic theorems bear the independent necessity of the six conditions. The reinforcement theorem (T2') bears the "unreachability of the user-interface layer to the legitimacy floor" — no user-interface engineering design can bypass the Public Realm Floor. The bearing of this theorem gives the selective-disclosure user-interface design (Section 6.4) a concrete legitimacy boundary.

### § 6.4 The Three-Layer Separation of the Selective-Disclosure UX

**Selective disclosure** — the cryptographic capability of revealing only the attributes required — requires concrete cognitive-engineering conditions of its user interface. The article bears four conditions as legitimacy-necessary conditions of the user interface: clarity of the cognitive-load bearer (C7), estimability of disclosure-scope information entropy (C8), reversibility of the disclosure choice (C9), and ex-post traceability of the decision outcome (C10).

The concrete requirements these four conditions impose on the user interface are borne as the **supporter UI three-layer separation**: an assistance-for-understanding layer, an operation-interface layer, and a decision-bearing layer must be borne separately and not merged into one.

This separation has a concrete normative ground. Article 29 of the UN *Convention on the Rights of Persons with Disabilities (CRPD)* bears the political rights of persons with disabilities and requires States to adopt "supported decision-making" in place of "substituted decision-making." Paragraphs 26–29 of CRPD General Comment No. 1 (2014) further require States to abolish substituted decision-making regimes. In engineering implementation, if a supporter interface merges these three layers into one, "support" slides in implementation into "acting in place of"; "supported decision-making" slides in implementation into "substituted decision-making"; the concrete bearing of the Convention is violated.

The concrete engineering requirements of the three-layer separation are: the assistance-for-understanding layer bears only the function of "presenting the scope of disclosure to the user in intelligible language"; the operation-interface layer bears only the function of "translating the user's choice into cryptographic operations"; the decision-bearing layer bears only the function of "recording the outcome of the decision into the receipt structure and bearing ex-post traceability." Separation requires that the software implementation of any one layer not invoke the control authority of another layer; concrete technical means include strict API boundaries, privilege separation, and the independent recording of audit logs.

### § 6.5 The Conjunctive Structure of the Four Engineering Bearings

The wallet's three presuppositions, the AI-agent delegation limits, the formal conditions of civic-action receipts, and the three-layer separation of the selective-disclosure UX — these four engineering bearings, under the Public Realm Floor framework, bear the concrete implementation of a conjunctive structure. Violation of any one engineering bearing corresponds to the violation of one or more of the four normative components.

Concretely: violation of the wallet's three presuppositions corresponds to violation of plurality — specific groups are excluded from the public realm. Violation of the AI-agent structurally non-delegable zone corresponds to violation of contestation and agonism — substituting delegation for first-personal normative responsibility and for the structure of legitimate adversary. Violation of the six conditions of civic-action receipts corresponds to violation of validity — the credential's evidence chain fails. Violation of the selective-disclosure UX three-layer separation corresponds to multiple components of plurality, validity, and contestation — particularly the inclusion dimension of plurality.

The conjunctive structure of these four engineering bearings is not arbitrary assembly but the systematic translation of the Public Realm Floor into the digital-identity infrastructure. For any civic-proof system about to be deployed, the framework proposes the four engineering bearings as the checking base prior to deployment.

### § 6.6 The AllenBridge Engineering Check

Beyond the four engineering bearings, **AllenBridge** offers a set of checking questions oriented to institutional implementation. It does not add cryptographic primitives, nor does it substitute for the four engineering bearings; its function is to place the engineering design back into the institutional context of power-sharing.

*First*, the non-monopoly check. If any one of the wallet, browser, OS, issuer, verifier, or trust-list manager layers forms de facto single-point control, civic proof can slide from democratic infrastructure into gatekeeping infrastructure.

*Second*, the intelligibility check. If selective disclosure, delegation, receipt fields, and revocation status are intelligible only to engineers or vendors, users cannot participate in decisions on equal standing. This connects to Habermas's validity and to Allen's emphasis on epistemic participation.

*Third*, the input-to-action check. If civic input cannot be traced to public action, administrative response, or institutional revision, then more voice may deepen cynicism. The evidential chain of civic-action receipts must simultaneously bear records of participation and the closure of the response loop.

*Fourth*, the co-ownership check. If digital-identity infrastructure is governed only by the state and its vendors, and civic communities, local organisations, marginalised users, and independent monitors lack institutional slots, its "public" character is insufficient.

*Fifth*, the backup-capacity check. Scenarios without phones, without credentials, with dementia, with disability, in exile, cross-border, or offline must all have a workable alternative path. Backup is the minimum bearing of political equality at the engineering layer.

---

## § 7 Cross-Jurisdictional Governance Structure

When digital-identity infrastructure crosses the boundary of a single jurisdiction, the complexity of governance rises markedly. This section bears four analytic layers — a four-tier governance framework, four classes of redress gap, three tiers of rights language, and an operational definition of the functional democratic community.

### § 7.1 The Four-Tier Governance Framework

Contemporary cross-jurisdictional digital-identity governance can be divided into four tiers: the industry governance tier (G_industry), the state governance tier (G_state), the cross-recognition governance tier (G_recognition), and the independent-oversight governance tier (G_oversight).

The industry tier bears industry-layer issues — technical standardisation, interoperability protocols, and market-competition rules — and is principally borne by standards-setting bodies (W3C, OpenID Foundation, ISO/IEC), industry alliances (e.g., Decentralized Identity Foundation), and open-source communities. The state tier bears sovereign-layer issues — legal authorisation, revocation rights, allocation of civic rights and duties — borne principally by states. The cross-recognition tier bears the recognition of cross-national trust lists, mutual recognition of cross-national credentials, and procedural cooperation on cross-border redress, borne principally by cross-national treaties (such as the EU's eIDAS 2.0), bilateral memoranda (Memoranda of Understanding, MoUs), and soft-law instruments. The independent-oversight tier bears external oversight of the first three — data protection, breach investigation, consumer protection, human-rights review — borne principally by independent oversight bodies (such as Data Protection Authorities, DPAs), human-rights commissions, and civil-society audit organisations.

The division of labour among the four tiers is not static; the maturity of bearing differs greatly across countries. For example, the EU is mature on the first three tiers (W3C VC at industry, eIDAS 2.0 at state, and the EUDI Wallet at cross-recognition), but the independent-oversight tier varies among member states in the independence of their DPAs. Taiwan is more mature at the state-governance tier (the Ministry of Digital Affairs and the MOI Certificate Authority), but its independent-oversight bearing (the Personal Data Protection Commission) is still in the transition phase between establishment and early enforcement; the cross-recognition tier faces structural limits owing to its distinctive international status.

### § 7.2 Four Classes of Cross-Jurisdictional Redress Gap

When a citizen is harmed through cross-jurisdictional digital identity — a wallet refused in another country, a credential erroneously revoked, a vendor failure, cross-border data exposure — the available channels of redress are structurally insufficient. The article bears four concrete classes of redress gap.

The first is the verifier-refusal redress gap. When a citizen is refused by a verifier in a cross-jurisdictional setting, the specific reason of refusal is hard to trace and effective contestation of the decision is difficult. The second is the issuer-erroneous-revocation redress gap. When an issuer wrongly revokes a credential, the affected citizen has difficulty quickly obtaining proof of the wrongful revocation and securing independent third-party adjudication. The third is the vendor-failure redress gap. When the wallet vendor, verifier vendor, or trust-list manager goes bankrupt or exits the market, the credentials of its users may instantly lose verification capability — yet bankruptcy law and commercial contract law have not made systematic provision for such scenarios. The fourth is the cross-border privacy-leak redress gap. When data leak crosses borders, the lead-supervisory-authority mechanism is partly in place within the EU but largely absent outside it.

Once AI agents enter civic action, the article bears a candidate fifth gap: the cross-border multi-party attribution of cryptographic responsibility. When an AI agent signs, submits data, or operates a civic workflow on behalf of a person, and that operation crosses multiple jurisdictions and involves multiple service providers, the concrete form of attribution of responsibility (which segment of which actor) lacks a mature legal framework.

Identifying the four-plus-one gaps does not automatically supply redress solutions; it makes the concrete insufficiencies of cross-jurisdictional redress explicit, so that policy makers can begin concrete filling work.

### § 7.3 Three-Tier Rights Language

Claims of digital-identity rights vary greatly in strength across jurisdictions. The article bears a three-tier rights language for layered classification.

The first tier is the **pre-legal access interest (Level 1)**. This tier bears the claim that "citizens have a reasonable interest in entering the digital-identity infrastructure" — but the claim has not yet obtained concrete legal protection. Its nature is a "worthy interest," which can ground legislative advocacy but does not have direct litigation standing.

The second tier is the **institutional entitlement (Level 2)**. This tier bears the concrete recognition of the right under domestic law — for example, a national data-protection statute that states "citizens have the right to selectively disclose personal data," or a national e-signature law that states "the legal effect of electronic signatures." Its nature is a statutory right with direct litigation standing, but limited in scope to the borders of that national law.

The third tier is the **treaty-level human right (Level 3)**. This tier bears the concrete recognition of the right under international human-rights conventions — for example, Article 6 of the Universal Declaration of Human Rights and Article 16 of the International Covenant on Civil and Political Rights on the right to legal personhood, or Article 29 of the *Convention on the Rights of Persons with Disabilities* on political participation. Its nature is a treaty obligation with cross-national litigation standing, but its enforcement depends on each state's concrete adoption of the treaty.

The "same" rights claim regarding digital identity may reach different tiers in different jurisdictions. The claim that "marginalised persons are not excluded from digital-identity infrastructure" may, in the EU, draw on CRPD Article 29 and the GDPR Article 5 proportionality principle and reach Level 3; in certain US states, it may rest only on that state's digital-identity rights statute (e.g., Utah Digital Identity), reaching Level 2; and in low-development democracies that have not yet recognised such rights, it may rest only at Level 1.

The three-tier classification allows the concrete strength of policy communication and judicial redress to be precisely identified, avoiding the conflation of claims at different tiers.

### § 7.4 An Operational Definition of the Functional Democratic Community

The application scope of the Public Realm Floor presupposes a clearly bounded **democratic constitutional community** (*demos*). Yet certain democracies — Taiwan, whose international status is distinctive, or regions where sovereignty recognition is contested — have democratic-community boundaries that are not stable in cross-border trust and international recognition.

For such cases, the article bears a retreat to the operational definition of a **functional democratic community (functional demos)** — operationalising the boundary of the democratic community as "the set of citizens and long-term residents who actually participate in the elections, taxation, health insurance, and private associations of the polity," sidestepping the political controversy of sovereignty recognition. The cost of this operational definition is that cross-border issues (in the Taiwan case, spouses with mainland Chinese household registration, Taiwanese business persons in mainland China, Southeast Asian spouses, overseas citizens, and so on) require independent argumentation under the Public Realm Floor and cannot be directly grafted onto the existing intra-EU cross-jurisdictional redress argument.

The operational definition does not claim that the Public Realm Floor applies only to the community covered by this operational definition; rather, it bears that, in cases where the boundary of the democratic constitutional community is unstable, the article's analytic scope is the functional community, and the bearing of cross-border issues is left as future work.

---

## § 8 Methodological Limits of Comparative Cases: The Universal-Conditional Distinction

Cross-case comparison — for example, juxtaposing Taiwan's TW DIW, the EU EUDI Wallet, Sweden's BankID, and US state-level mDLs — is a common method in policy research and technology assessment. Without prior methodological discipline, however, such comparison easily falls into the fallacy of treating "the same concept across different cases as running on the same track."

The article bears the **universal-conditional distinction** as the necessary methodological discipline for cross-case comparison. Its structure is as follows.

The bearing of the Public Realm Floor has two layers — a **universal part** and a **conditional part**. The universal part is the structural necessity of the four normative components: "plurality, validity, contestation, and agonism are each individually necessary and conjointly constitute a composite floor." This structural-normative proposition does not vary across cases. The conditional part has three sub-layers — the layer of mechanism bearing, the layer of inter-component coupling, and the layer of application scope — which vary across cases.

**The mechanism-bearing layer** means that the same normative component can be borne by different institutional mechanisms in different cases. In Taiwan, the plurality component is borne by the coexistence of five categories of bearer — street social movements, the legislature, online platforms, the referendum system, and social-movement networks; in Estonia, it may be borne by a different institutional configuration. The concrete instantiation of mechanism bearing is conditional and varies across cases.

**The inter-component-coupling layer** means that under the conjunctive-floor framework the components keep their distinguishable normative identities, but the mechanism bearing can be coupled: a single mechanism can simultaneously bear concrete instantiations of multiple components. In Taiwan, the civic-tech community (e.g., g0v) simultaneously bears plurality and agonism; this coupling does not violate the conjunctive structure of the floor, but requires that case analysis make the coupling explicit.

**The application-scope layer** means that the application domain of the Public Realm Floor presupposes a democratic constitutional community; in different cases, the stability of the boundary differs. For cases where sovereignty recognition is contested, the operational definition of the functional democratic community (Section 7.4) applies.

Cross-case comparison must first apply this layering; otherwise it falls into the extrapolation fallacy of "force-fitting Swedish BankID experience to Taiwan's TW DIW" or "force-fitting EU EUDI experience to Bhutan's NDI." Each case's conditional part is different, but the universal part is shared. The legitimate form of comparison is "comparing the concrete differences of the conditional part on the premise that the universal part is shared"; differences in the conditional part should not be read as falsification of the universal part, nor should the conclusions of one case's conditional part be directly extrapolated to other cases.

---

## § 9 Country Comparisons

Following the universal-conditional methodology of Section 8, this section describes the concrete bearing of seven cases — Taiwan, the EU, Sweden, the US, MOSIP, India's Aadhaar, and Bhutan NDI. The section is descriptive only; normative comparison is borne by other sections.

### § 9.1 Taiwan

Taiwan simultaneously runs the issuer-centric, high-assurance, legally effective PKI path of the Citizen Digital Certificate (MOICA) and the holder-centric, multi-issuer, scenario-based presentation, selective-disclosure path of the Digital Identity Wallet (TW DIW). MOICA is borne by the MOI Certificate Authority for legal authorisation and technical operation; its legal effect is clear, but third-party integration requires formal application and review, raising integration friction. TW DIW is led by the Ministry of Digital Affairs (moda) and adopts international standards such as OpenID for Verifiable Credentials and the SD-JWT VC selective-disclosure format, with the trust list anchored on a public blockchain. Statutory authorisation is still borne by moda and the MOI; the public blockchain bears only the auditable layer of the trust list — a "hybrid architecture." The Taiwan deep-dive is borne by Section 10.

### § 9.2 The EU

The EU's digital-identity infrastructure runs a two-layer structure: the upper layer is eIDAS 2.0 trust services and the national trusted lists of member states; the lower layer is the European Digital Identity Wallet (EUDI Wallet). eIDAS 2.0 entered into force in 2024 (Regulation (EU) 2024/1183), setting a mandatory-deployment phase for the EUDI Wallet across 2026–2027. The technical Architecture and Reference Framework (ARF) has iterated to its December 2025 version. The EU's strength lies in a complete legal framework and a formal framework for cross-border interoperability; its challenge lies in complexity of rules and the control rights over wallets and browsers becoming new gatekeepers.

### § 9.3 Sweden

Sweden's BankID is a commercial electronic-identification system jointly operated by the major Swedish banks, and has become *de facto* infrastructure of Swedish society — banking, tax filing, online consumption, and government-service login are almost all completed via BankID. Its social penetration and frequency of use are high. Its structural risk is that commercial monopoly combined with single-operator dependence leaves citizens without BankID (new immigrants, residents without a Swedish bank account, persons with insufficient credit scores) facing systematic exclusion. The Swedish central bank has publicly argued that government e-identification should serve as an essential complement, reflecting the fact that commercial identity systems can be deeply embedded in social life but that public-governance problems do not therefore disappear.

### § 9.4 The US

US digital-identity infrastructure is structurally distributed: state-level mobile Driver's Licences (mDLs), state-level wallet ecosystems (e.g., California's OpenCred), state-statute digital-identity rights (e.g., the Utah Digital Identity legislation), and federal guidance from NIST (SP 800-63-4, including the subscriber-controlled wallets model). Its strengths are OS and market influence; its challenges are nationwide institutional fragmentation, inter-state variance, and the absence of a unified federal framework.

### § 9.5 MOSIP

The Modular Open Source Identity Platform (MOSIP) is an open-source identity infrastructure aimed primarily at the Global South. MOSIP provides modular, locally-deployable identity-system components that allow countries to build identity infrastructure to their own requirements. Its strength is its cost and sovereignty appeal — especially to low-development countries lacking the capacity to build on their own; its challenge is that MOSIP itself is a technical component, and whether it can support civic rights depends on each country's concrete governance structure.

### § 9.6 India's Aadhaar

India's Aadhaar is a national-scale mass root-identity system covering more than 1.2 billion people, designed primarily for authentication and electronic Know-Your-Customer (eKYC). Its strength is its very high scale and coverage; its challenge is that high-scale verification and coverage are not the same as civic-freedom-first — Aadhaar's use cases are largely concentrated in government services and commercial authentication, and the concrete bearing of civic participation and pseudonymous action is weaker.

### § 9.7 Bhutan NDI

Bhutan's National Digital Identity (NDI) is a sovereign-backed national identity infrastructure that adopts the verifiable-credential and trusted-wallet architecture. In October 2025 NDI migrated to the Ethereum mainnet, anchoring credentials and DID resolution as a whole on the public blockchain. Its strength is the concrete instantiation of national-level innovation direction; its challenge is that international interoperability and the maturity of governance are still being formed.

### § 9.8 Methodological Limits of the Comparison

Following the universal-conditional discipline of Section 8, the comparison table below is descriptive only; it should not be used as a basis for cross-case extrapolation. The conditional parts of each case (mechanism bearing, inter-component coupling, application scope) are not the same, and their conclusions do not directly extrapolate. The following table is descriptive synthesis, not cross-case track-sharing.

| Case | Upper-layer issuance legitimacy | Lower-layer exchange architecture | Current strength | Principal challenge |
|---|---|---|---|---|
| Taiwan | MOICA strong legal effect; TW DIW multi-issuer ecology | PKI + wallet/VC dual track; trust list on public chain | Clear legal effect; rising policy-experimentation flexibility | Onboarding friction and civic burden coexist |
| EU | eIDAS 2.0 trust services; national trusted lists | EUDI Wallet; attestation; selective disclosure | Robust legal framework; formal cross-border interop | Complex rules; wallets and browsers as new gatekeepers |
| Sweden | Commercial BankID as *de facto* infrastructure | High daily adoption; platform maturity | High usage frequency; deep social penetration | Single-commercial-operator dependence; inclusion risk |
| US | State mDLs; state statutes; state wallets | Mature standards; distributed deployment | Strong OS and market influence | Nationwide fragmentation; inter-state variance |
| MOSIP | National modular identity infrastructure self-built | Open source; modular; locally deployable | Cost and sovereignty appeal | Civic-rights bearing depends on national governance |
| India Aadhaar | National-scale mass root identity | Authentication / eKYC-oriented | Massive scale and coverage | High scale ≠ civic-freedom-first |
| Bhutan NDI | Sovereign-backed national digital identity | Trusted wallet; VC-oriented; anchored on Ethereum mainnet | National-level innovation direction | Cross-national interop and governance maturity in formation |

---

## § 10 Taiwan as a Democratic-Frontline Stress-Test Case

The Taiwan deep-dive is borne against a background of four coexisting conditions — a strong civil society, a high-frequency election cycle on a four-year basis, the physical-infrastructure situation of earthquakes and submarine-cable disruption, and cross-Strait cognitive warfare and grey-zone intrusion. The article bears Taiwan as a **conditional-typical stress-test case + existence-pressure proof** for the Public Realm Floor under democratic-frontline conditions, and does **not** claim that its conclusions extrapolate to other democracies.

### § 10.1 Four Phases of Institutional History

Taiwan's digital-identity institutional history does not begin with the establishment of the Ministry of Digital Affairs in 2022; its structural cultivation can be traced through four phases.

The first phase is the democratic transition (1991–1996). Following the Wild Lily Student Movement of March 1990, Judicial Yuan Interpretation No. 261 of 21 June 1990 required the first-term central representatives — who had been in office indefinitely — to cease exercising office by 31 December 1991; full re-election of the National Assembly, the Legislative Yuan, and the Control Yuan was completed during 1991–1993; and the first direct presidential election was held on 23 March 1996. This phase laid the political foundation for the plurality component of the Public Realm Floor — the consensus that "dissenters are also legitimate members" was institutionalised in this phase.

The second phase is the first transition of party power (2000). The presidential election of 18 March 2000 produced Taiwan's first peaceful transition of power, ending fifty-five consecutive years of Kuomintang rule. Its key significance was not the transition itself but the fact that administrative continuity at the handover was not politicised — the administrative procedures of household registration and identity infrastructure did not break during the transition. This phase laid the procedural foundation for the validity component of the Public Realm Floor.

The third phase is the withdrawal of the New eID smart card (2018–2021). On 27 December 2018 the Executive Yuan passed a "Smart Government Development Blueprint," listing digital identification connecting government services as one of two foundational infrastructures, with a full rollout of the New eID planned for 2020. The plan met resistance from 2020 onward — from academic information-security experts (including Lin Tsung-Nan and Lee Jung-Shian) and civic groups (including the Taiwan Association for Human Rights and the Judicial Reform Foundation), via a joint statement. On 21 January 2021 the Premier agreed to the Ministry of the Interior's proposal to "suspend the digital identity card issuance plan" pending improvement of the legal framework. At the time of writing, the New eID rollout has not resumed and no special statute has been passed. This phase is a concrete case of the contestation component of the Public Realm Floor — a multi-layered contestation process (civic groups, academia, the Control Yuan, legislative questioning, internal disputes within ministries) made it possible to withdraw the government's original policy.

The fourth phase is the establishment of the wallet architecture (2022–2026). On 27 August 2022 the Ministry of Digital Affairs (moda) was formally inaugurated, integrating the digital affairs previously dispersed across ministries. From 2024 moda initiated the Digital Identity Wallet (TW DIW) project; from December 2025 it entered trial operation and anchored its trust list on a public blockchain. In parallel, on the data-governance side, pursuant to the Constitutional Court Judgement 111 Hsien-Pan-13, the State must establish an independent personal-data-protection oversight mechanism by August 2025; the preparatory office of the Personal Data Protection Commission was established in December 2023, and in 2025 the Legislative Yuan passed partial amendments to the Personal Data Protection Act.

The four phases cultivate the four components of the Public Realm Floor unevenly. Validity and contestation are relatively strengthened by the positive historical episodes of the 1990s democratic transition and the 2018–2021 New eID withdrawal; plurality is not structurally addressed because the trust root remains concentrated in state agencies; and the independent-oversight tier — which institutionally bears validity and contestation — is the most fragile, owing to the transition phase between the establishment of the Personal Data Protection Commission and full enforcement leverage.

### § 10.2 The Engineering-Bearing Gap Between the Digital Identity Wallet and the AI-Agent Interface

The alignment of Taiwan's Digital Identity Wallet with contemporary normative documents (the December 2025 version of the EUDI ARF, W3C VC 2.0, ISO/IEC 18013-5 for mobile driver's licences) can be described by four **disclosure gaps**.

The first gap: wallet-instance attestation specifications have not been publicly disclosed in full, making it hard to determine whether the wallet side can supply a cryptographic distinction between agent identity and principal identity at receipt generation. The second gap: representation/mandate specifications have not been publicly stated, leaving the concrete form of AI agents intervening in wallet operation without a direct bearing. The third gap: the trust list is on chain, but the specific chain, contract addresses, and DID methods have not been disclosed, leaving the path by which cross-border verifiers parse Taiwanese issuer-recognition status from on-chain data at the engineering-unverified stage. The fourth gap: the Digital Identity Wallet and the mobile Citizen Digital Certificate (TW FidO) are statutorily authorised under different ministries, making the holder-binding and chooser-signature key-attribution difficult to determine.

The four disclosure gaps together constitute the engineering-bearing gap between Taiwan's wallet and the AI-agent interface. Under the Public Realm Floor framework, the gaps do not directly trigger legitimacy degradation; their persistence, however, will place the Taiwan case under simultaneous pressure on multiple components — plurality, validity, contestation — during the 2026–2028 mandatory-deployment timeline.

### § 10.3 Case-Tracing of the Triple Pressure

The concrete pressure on Taiwan as a democratic frontline can be split into three categories — the malleability of issuer credibility under cognitive-warfare infiltration (pressure α), the availability of offline backup under submarine-cable disruption (pressure β), and the institutional revocation latency under grey-zone intrusion (pressure γ).

**Pressure α** is borne as follows: when an issuer's credibility is pre-framed as a political symbol by cognitive warfare (for example, binding a particular government-issued digital credential to a ruling-party narrative), the validity component of the Public Realm Floor is hollowed out at the cultural layer — even where the credential itself has not been forged. This pressure principally bears on validity and contestation. Doublethink Lab, the Taiwan FactCheck Center, IORG, and other civic organisations have monitored Taiwan since 2022, and Taiwan ranks at the front of the sample on the dimension of foreign influence operations.

**Pressure β** is borne with the February 2023 Matsu submarine-cable disruption as the direct historical anchor (Chunghwa Telecom announced that two Matsu submarine cables were severed on 2 February and 8 February 2023; local network connectivity took roughly thirty-five days to recover to backup level). Under submarine-cable disruption, the wallet's offline-verification mode can preserve a subset of cryptographic verification, but the freshness of revocation status is downgraded — in degraded verification with stale status, the validity component is "downgraded" rather than "failed," but the post-downgrade quality of validity differs from the original design. This pressure principally bears on plurality and contestation.

**Pressure γ** is borne as follows: under below-threshold conflict and grey-zone intrusion, issuers, verifiers, and revocation mechanisms experience persistent partial degradation. The push latency of revocation lists may extend from the order of minutes to hours or even days; the semi-failure state between issuers and verifiers leads to inconsistent verification outcomes for the same wallet across different verifiers. This pressure principally bears on contestation and agonism.

The compound scenario in which the three pressures occur simultaneously (α + β + γ) is not a pure hypothesis. The grey-zone series at the Institute for National Defense and Security Research (INDSR) and the Taiwan contingency-planning series at the Center for a New American Security (CNAS) both treat this compound scenario as a reasonable analytic anchor. Under compound pressure, the principally damaged component among the four PRF components is **contestation** — the survival of redress mechanisms is simultaneously attacked along the three conditions "audibility, redress-channel survival, acceptable redress timing."

### § 10.4 The Tension Between Civilian Backup and the Government Single-Stack

Taiwan's current government-led digital-identity infrastructure (including TW DIW, TW FidO, and the MyData personal-data self-determination application) has its core issuer trust root locked at moda. Under this single-stack structure, when grey-zone intrusion or cognitive warfare produces concrete impact, citizens lack a second trust root as a contestable fallback bearer.

In response to this structural fragility, the civilian advocacy text "*Bèibèi Érlái — Towards Interoperable but Unlinkable Digital Identity*," released for public consultation in November 2025, advances a civilian backup proposal under the three design principles of antifragility, backup, and trust rotation. The text proposes design intuitions including: "interoperable yet unlinkable" (three conditions: interoperability, unlinkability, no active call-back), on-chain commitment values for the trust list (the version changes of the meta-issuer structure can be externally audited), mirror-issuer takeover (when an issuer fails, the issuance authority for credentials of the same type can be hot-swapped online), and cross-segment offline backup (three layers of trust field — local, cross-domain, and dispersed).

The article treats the text under the **principle of separating design intuition from normative claim**. The design intuitions of the text are cited as descriptive objects; their mapping onto the Public Realm Floor, however, is independently argued by the article and does not rely on the text's normative language. Concretely, the text's notion of antifragility deviates noticeably from Nassim Nicholas Taleb's original definition (2012) — Taleb presupposes "gaining positive convexity from shock," while the text bears only "not degrading under shock," i.e., robustness and resilience as the two-step floor — and should not be transposed directly into a normative claim.

The text's design intuitions provide a stronger preliminary mapping onto plurality and contestation; but the boundary conditions of that mapping — substantive separability among civilian issuers, plurality of the publishing authority of offline-verifiable trust lists, and deployment maturity of cross-segment backup — have not been borne empirically as of 2026. The text has bearing value as a source of design intuitions; any citation that reads it as a policy recommendation or a normative claim is endorsed in advance to be withdrawn.

### § 10.5 The Anti-Mythologization Clause

The Taiwan case is most easily assembled by external readers into a "Taiwan romantic exceptionalism" narrative — combining civic-tech community, open-government practice, and civilian-backup resilience narratives into "Taiwan is the global template of democratic digital governance." The article explicitly bears an **anti-mythologization clause**: it does not claim Taiwan as a global template; it does not claim that civic-tech communities and civilian-backup mechanisms can independently bear the complete four-component PRF; and it does not claim that the Taiwan experience can be directly extrapolated to other democracies. Any citation that reads the article as a "Taiwan as model student" narrative is treated as departing from the bearing structure, and the article withdraws endorsement in advance.

---

## § 11 Civic-Layer Engineering Cases: PTT and the g0v Summit

In the civic-layer engineering practice of the Taiwan case, two cases warrant unfolding — the "blue-check" mechanism on the BBS PTT, generated through MOICA-based zero-knowledge proofs, and the entry-credential mechanism issued via the digital wallet at the g0v (Gov-Zero) Summit 2026. Taken singly, each is a small-scale implementation; taken conjointly, they bear two concrete possibilities: "state root credential + pseudonymous participation" and "non-governmental bearing of a holder-centric ecology."

### § 11.1 PTT's Zero-Knowledge-Proof Blue Check

PTT is the largest BBS in Taiwan, still maintaining hundreds of thousands of users; the platform has long been troubled by coordinated election-period operations (network-army coordination), and traditional content moderation has been unable to address them. 2026 is a Taiwanese local-election year; the PTT engineering team generates zero-knowledge proofs from MOICA so that users obtain a "blue check" mark without disclosing real identity, thereby reducing the frequency of coordinated attacks.

The bearing structure of this case is: the state root credential (MOICA) serves as the trust root, but full identity is not disclosed to the platform; the citizen presents only the attribute and uniqueness proof of "some person holding a valid MOICA"; and the operation can be audited after the fact (through evidence-chain reconstruction under specific conditions), bearing accountability. The case's concrete bearing on the Public Realm Floor distributes across three layers simultaneously — contestation (the civic community's active stance against network-army coordination), uniqueness (one-person-one-account), and unlinkability (no real-identity disclosure to the platform). The case demonstrates that the state root credential can supply a trust root without surrendering full identity to the platform and without requiring the platform to identify the citizen concretely — a concrete path "from state credentials to civic proof."

### § 11.2 The g0v Summit 2026 Wallet-Issued Entry Credential

g0v (Gov-Zero) is Taiwan's largest civic-tech community and holds a biennial summit. The 2026 summit's volunteer team issues badges and entry credentials through the digital wallet, with non-governmental third parties acting as issuer and verifier.

The bearing structure of this case is: a holder-centric ecology in which non-governmental third parties (civic communities, event organisers) can serve as issuer and verifier, bearing concrete civic implementation under the wallet architecture. The case's concrete bearing on the Public Realm Floor distributes across plurality (coexistence of non-governmental issuers) and agonism (institutional-slot expansion for a state–civic–commercial tripartite co-governance).

This case bears a structurally significant contrast with the Swedish BankID case in Section 9.3: BankID is a commercially monopolised holder-centric ecology (dominated by a single commercial operator); the g0v Summit is a civic-community holder-centric ecology (plural issuers plus non-governmental verifiers). The same technical architecture (a holder-centric wallet ecology) can move towards completely different political outcomes under different governance structures. The contrast confirms that the concrete bearing of the Public Realm Floor depends on governance structure, not on technical architecture alone.

---

## § 12 Age Verification as a Stress Test for National Digital-Identity Policy

Age verification easily slides from the legitimate aim of protecting children into generalised access control; this tension makes age verification the most pressure-laden testing ground for "digital identity as public infrastructure." Once the system demands age proof at the entry of specific services, discussion spaces, content, or social interactions, digital identity formally intervenes in the conditions of entry into public space.

### § 12.1 Institutional Trends

The pace of this wave of age-verification legislation is clearly faster than that of technical standards and human-rights assessment. Before the publication of the first international standard, ISO/IEC 27566-1 (*Age Assurance Systems — Framework*, December 2025), multiple US states had legislated, the UK's Ofcom had begun enforcement, and Australian law had taken effect. Importantly, the standard itself states that the goal of age verification is the determination of age-related eligibility, and that obtaining "age assurance" does not necessarily require establishing a person's complete identity.

The UK's Ofcom adopts a high-regulatory-intensity, technology-neutral model: age verification must be technically accurate, robust, reliable, and fair, and lists methods such as open banking, photo-ID matching, facial age estimation, mobile-operator age checks, credit-card checks, digital-identity services, and email-based age estimation. The strength of this model is flexibility; the challenge is that platforms may choose the cheapest and easiest-to-deploy method, which is not necessarily the most privacy-friendly.

Australia adopts a platform-liability and post-implementation supervision model. The social-media minimum-age regulation in force from 10 December 2025 requires platforms to take "reasonable steps"; in March 2026 the eSafety Commissioner released a compliance update, continuing to assess platform compliance.

The EU has sought to institutionalise "proof of being over eighteen only" as a design pattern. In April 2026 the European Commission announced that the age-verification app is deployable, initialised by passport or identity card.

The US turn came on 27 June 2025, when the Supreme Court ruled 6–3 in *Free Speech Coalition v. Paxton* that the Texas adult-content age-verification law was constitutional. The majority held that age proof is a typical and appropriate means of enforcing age restrictions. The legal reasoning, however, is limited to the context of "sexual content harmful to minors" and does not automatically authorise broader age gates on social media, general websites, or app stores.

California's AB1043 (the *Digital Age Assurance Act*), signed in 2025, requires operating-system providers to ask account holders for the user's date of birth or age at account creation, and to provide age-bracket signals to developers through a real-time API; developers must request the signal at app download and launch. The case sinks age verification from a content gate on specific categories of website to the infrastructure layer of devices, operating systems, and application distribution.

### § 12.2 The Risk of Structural Slippage

The article bears **structural slippage** as the core risk identification for age verification. Once the infrastructure is built, new policy tends to free-ride — California's AB1043 age-signal model, the UK from the *Online Safety Act* to broader wallet and digital-identity discussion, the EU integration of age verification with the EUDI Wallet, and US state laws moving from adult sites to social media and device-layer signals — all point in the same direction.

The concrete rights impact of structural slippage covers at least four dimensions — privacy (centralised processing of documents, ages, and biometrics), anonymity (lawful browsing in conflict with the right to remain anonymous), free speech (the chilling effect on adults' self-censorship), and the digital divide (exclusion of undocumented and unbanked persons).

The information-security risk of centralised third-party age-verification providers also cannot be ignored. In 2025 Discord acknowledged that, in an incident involving its third-party vendor, government-ID photographs of about 70,000 users used for age-related appeals may have been exposed. Other cases (Tea, AU10TIX, IDMerit, etc.) share a common thread: once age verification adopts centralised document upload and outsourced services, it forms a high-value attack target.

### § 12.3 The Engineering-Prevention Mechanism: Three-Tier MVSR

Against the structural-slippage risk, the article bears a preventive combination of **Minimum Viable Scope Reduction (MVSR)** at three tiers plus four engineering primitives.

The three MVSR tiers are: scope minimisation (any age-verification facility should presuppose a minimum-necessary scope and not be expanded to unrelated scenarios); retirement clauses (any age-verification facility should presuppose retirement conditions and a retirement timetable); and explicit boundary (any age-verification facility should make its applicable boundary explicit, with cross-boundary use requiring renewed regulatory justification).

The four engineering primitives are: sunset clause (the facility retires automatically after a specific date unless actively extended), scope-bound (the use scope of a credential is bound to the specific field declared at issuance; cross-field use requires re-verification), split-key (the decryption authority of a credential is dispersed across multiple trusted institutions, avoiding single-point centralised control), and opt-out architecture (citizens must have a structurally available exit path, with paper or non-smartphone alternatives preserved).

The four engineering primitives are not interchangeable but conjunctive — the absence of any primitive weakens the prevention of structural slippage. The combination of three MVSR tiers and four primitives can serve as a checking base prior to the deployment of any age-verification facility.

### § 12.4 Application of the Three-Tier Rights Language to Age Verification

The three-tier rights language established in Section 7.3 enables layered identification of the concrete rights risks of age verification.

For example, the claim that "undocumented or unbanked persons are excluded from digital space" may, in the EU, draw on CRPD Article 29 and the GDPR Article 5 proportionality principle to reach Level 3 treaty-level human-rights strength; in certain US states it may rest only on the state's digital-identity rights statute (e.g., Utah Digital Identity), reaching Level 2 institutional-entitlement strength; and in jurisdictions that have not yet recognised such rights it may remain at Level 1 pre-legal-interest strength.

The same concrete phenomenon of "marginalised exclusion" supports very different rights-claim strengths in different jurisdictions — a difference that should not be ignored or flattened. The three-tier classification allows the concrete strength of policy communication and judicial redress to be precisely identified.

Good solutions exist. France's double-anonymity scheme, the EU EUDI Wallet route, and Spain's earlier zero-knowledge-proof age-verification experiments all demonstrate that age verification need not equal full identity upload. The EUDI ARF explicitly states that selective disclosure, user approval, anti-tracking, and even a zero-knowledge-proof "I am over eighteen" are legitimate directions.

---

## § 13 From Full Identification to Minimal Proof

Age verification is a typical attribute-proof scenario. Attribute proof has two digital-identity solutions — **full identification** and **minimal proof**.

Full identification requires the presenter to hand over the complete credential, date of birth, address, ID number, and so on; the verifier makes a determination based on the complete data. Minimal proof requires the presenter only to prove a specific attribute ("over eighteen," "resident in a jurisdiction," "holding a qualification," "the same person"), with no further disclosure. The two solutions differ greatly in their impact on freedom and privacy across scenarios.

| Scenario | Full-identification path | Minimal-proof path |
|---|---|---|
| Age check | Disclose date of birth, full credential | Prove only "over eighteen" |
| Residency eligibility | Disclose full address or household registration | Prove only residency eligibility |
| Uniqueness | Hand over real name, ID number | Uniqueness proof or pseudonymous credential |
| Qualification | Hand over the entire credential | Disclose only the specific attribute |

The engineering bearing of minimal proof is concretely implemented through the three layers borne by Section 6 — the structurally non-delegable zone of AI-agent delegation, the field set and formal theorems of civic-action receipts, and the three-layer separation of the selective-disclosure UX. Each layer provides formal constraints on the concrete implementation of minimal proof.

The necessity of the wallet can be answered conditionally. If the need is single-service login, federation (e.g., "Sign in with Google"), passkeys, or existing high-assurance login tools are often sufficient. When the need turns to multi-issuer, cross-scenario reuse, minimum disclosure, user consent, and cross-border interoperability, the institutional value of the wallet rises significantly — at that point the wallet is not merely a container but also bears presentation, consent, credential management, and the composition logic across issuers. NIST's *Digital Identity Guidelines* (SP 800-63-4) integrate "subscriber-controlled wallets" into the model, reflecting this bearing.

The presentation layer is platformising rapidly. When wallets, operating systems, and browsers become the default entry to digital credentials, competition expands from "who issues identity" to "who controls the presentation and consent interface of identity." Google Wallet, Chrome, Apple Wallet, and the EU's browser-mediated presentation all point in this direction. The platform layer is no longer neutral; it can become a new gatekeeper or a new locus of rights protection. The EU's concrete restrictions on browsers and operating systems and Google's public framing of "no server tracking" both indicate that the layer is being institutionalised.

The Privacy and Scaling Explorations (PSE) team at the Ethereum Foundation continues to drive performance breakthroughs in client-side proving, usable revocation design, and the engineering work that allows mobile devices and general consumer devices to bear proofs. PSE has placed client-side proving and zero-knowledge identity (zkID) on its roadmap and in 2026 continues to discuss GPU acceleration and revocation mechanisms — bringing zero-knowledge proof beyond the language of research and into a technological foundation that products and civic experiments can depend on.

---

## § 14 Civic and Sub-National Experiments

When mainstream institutions do not adequately support low-exposure, portable, verifiable civic proofs, civic and sub-national experiments emerge. The primary value of these projects is not that they have shown alternative identity regimes to be mature, but that they make explicit the demands that mainstream institutions have not adequately served.

### § 14.1 Three Cases

**Vocdoni** is a Catalan technology-development non-profit. Since the failure of the 2017 Catalan independence referendum, Catalan political activity has faced constraints, and many emerging organisations have explored new forms of civic participation. Vocdoni verifies holders as Catalans through Spanish passports, for simulated voting. The case shows that local governments and civic organisations have a concrete need for verifiable, auditable, privacy-first digital voting tools.

**Rarimo's Freedom Tool** likewise transforms passports into anonymous digital identity for simulated voting. Rarimo has run small-scale simulated votes in Romania, Russia, and Iran. The case shows that, in exile communities and authoritarian contexts, passport-rooted ZK-based anonymous eligibility proof has concrete demand.

**QuarkID** is the city-level digital identity project of Buenos Aires, placing a digital trust framework and citizen-controlled credentials into public governance. The case shows that city governments are also experimenting with wallet architectures to bear civic identity infrastructure.

### § 14.2 The Separation of Design Intuition and Normative Claim

For citations of civic and sub-national experiments, the article bears the **principle of separating design intuition from normative claim** as a concrete discipline. The structure of separation is as follows.

When citing speculative civilian implementation documents, grey literature, or civilian advocacy texts, one must distinguish **design intuition** — the engineering-design concept proposed by the descriptive object — from **normative claim** — the Public Realm Floor mapping borne independently by the article. The former can be cited and analysed; the latter does not rely on the descriptive object's own normative language.

Concretely, Vocdoni, Rarimo, and QuarkID may in their own documents claim that "our tools are democratic," "our designs protect privacy," and "our solutions bear civic freedom" — these are normative claims of the authors' stance. The article can cite "the design intuition proposed by the project," but the article's mapping of that design intuition onto the Public Realm Floor must be borne by the article's own argument and not transpose the project's normative language.

This separation does not deny the reasonableness of the projects' normative claims; it forestalls a common analytic deficiency at the boundary of normative political theory and engineering practice — the **smuggling of normative language**, in which a civilian text's normative advocacy is transposed as an academic normative bearing.

The principal value of civic and sub-national experiments is not "replacing the existing identity regime" but "making the under-served demands explicit." Their most important value is bringing the demands — "passport-rooted pseudonymous-eligibility proof in exile communities," "city-level trust frameworks," "anonymous civic participation in exile contexts" — from the theoretical layer into the layer of concrete implementation. Their root identity still relies on existing passports, membership boundaries, local-government documents, or other institutional trust roots; that is, the root identity still requires public legitimacy and democratic accountability, and only at the divergence outward does flexibility rise while the trust base weakens.

A more likely future direction is not the comprehensive replacement of state root credentials but their combination with civic-layer participation tools. Here lies a deeper political question — how to make citizens trust that government-issued credentials will not become tools by which the government tracks citizens. This is the most important implicit question in many civic experiments. If citizens trust that the credential is only a trust root and that the verification flow itself will not transmit transactions back to the state, acceptance becomes completely different. This is the concrete political significance of the engineering primitives **no-phone-home** and **unlinkability**.

---

## § 15 The Position of Public Blockchains at the Trust Layer

Among the new digital-identity infrastructures, the **public blockchain** has long been in standards plans but has not been deployed at scale in many national cases. The article takes a restrained stance — the institutional value of public blockchains in the digital-identity infrastructure lies not in legitimacy itself, nor in placing personal data on chain; its most appropriate position is the trust layer, status anchoring, cross-organisational visibility, and auditable status publication.

### § 15.1 Three Cases

Bhutan's NDI migrated to the Ethereum mainnet in October 2025. This is the most complete deployment of a public blockchain as national-level digital-identity infrastructure to date. The NDI architecture anchors credentials and DID resolution as a whole on the Ethereum mainnet — not a testnet, not an L2, the mainnet.

Taiwan's Digital Identity Wallet trust list is also on a public chain. The specific chain, contract addresses, and DID method were not fully disclosed on the developer page as of May 2026, but the fact that "the trust list is anchored on a public blockchain" has been made public. The architecture is hybrid: statutory authorisation is still borne by moda and the MOI, and the public blockchain bears only the auditable layer of the trust list.

QuarkID (Buenos Aires' city-level digital identity) is deployed on Ethereum L2 ZKsync. This is a city-level rather than a national-level public-chain deployment, distinct from the routes taken by Bhutan and Taiwan.

Taken together, the three cases show that the role of public blockchains in the digital-identity infrastructure is no longer a future imagination but a concrete fact unfolding. The three cases differ in chain, layer, and governance structure — Bhutan on the mainnet, Taiwan on the mainnet (inferred), QuarkID on an L2. Under the Public Realm Floor framework, the three choices differ greatly in the strength of their bearing on validity and contestation; the concrete chain choice is a governance choice.

### § 15.2 The Reasonable Scope of On-Chain Content

The reasonable scope of on-chain content for digital-identity infrastructure should not include personal data itself. Whether viewed from the GDPR, privacy, unlinkability, or practical data governance, placing personal data itself on chain is not a reasonable direction. More reasonable on-chain content includes the issuer's DID, the issuer's public keys, the trust-list anchor, the commitment values of status lists, and other publicly verifiable but not directly personally-identifying data.

This design allows holders or verifiers to confirm the trustworthiness of an issuer without contacting the issuer for each verification. This is critical for civic proof — it reduces centralised querying, that is, the possibility of "phone-home."

The concrete advantages of public blockchains over permissioned consortium infrastructures lie in the simultaneous provision of permissionless publication, cross-organisational visibility, independent verification, and stronger single-point-failure resistance. This advantage is especially appealing in cross-jurisdictional, civic-community, sub-national governance, and city-level trust frameworks. Permissioned consortium infrastructures are valuable in the coordination efficiency within a specific jurisdiction or alliance, but their node-governance and global-verifiability logic is completely different from that of public blockchains.

Taking the EU's trust lists as an example, their core value derives from law and supervision. If a public chain is placed at that position, its most reasonable role is closer to a trust layer and registry interface, rather than a substitute for legal legitimacy itself.

### § 15.3 The Federated Trust-List Alliance

The truly viable future direction may be not a single global trust root but a network of trust lists across different jurisdictions, cities, institutions, and communities, bridging one another into a connectable, auditable, tier-governable network. The article advances the **federated trust-list alliance** as the conceptual bearing of this direction.

The concrete governance tools of the federated trust-list alliance are still in formation. A historical reference worth consulting is the trust-root governance of the Domain Name System (DNS). Drawing on long-term participation in ICANN-affiliated research-fellow programmes, the article bears the observation that DNS took a governance path completely different from that of state power, and that the twelve trust roots are still, to a large extent, not managed by states. Yet the concrete conditions of that history (the Postel jar community culture, the strategic relinquishment by the US government, the historical opportunity of technology-neutrality discourse, the transitional mechanisms of the IANA transition) differ markedly from the concrete conditions of contemporary digital identity. The article bears: the non-state path shown by DNS governance is hard to reproduce directly in digital identity.

---

## § 16 Policy Agenda: Five Principles and Five Methodological Tools

The article bears five policy principles as the concrete policy direction for transforming digital identity into digital civic infrastructure, and five methodological tools that elevate the five principles from "the right direction" to "an externally examinable discipline."

### § 16.1 Five Policy Principles

**The first principle is to fix the privacy-first baseline.** It must include at least minimum disclosure, unlinkability, no phone-home, voluntariness, paper or non-smartphone alternative paths, and clear complaint redress. The principle aligns with the digital-rights direction of the ACLU, EFF, and Access Now. Without fixing the baseline, almost every new use case starts from the direction of maximum visibility, easiest manageability, and easiest datafication.

**The second principle is to require open wallets and standardised provisioning.** The presentation layer is about to become the new gatekeeper. If the wallet, OS, and browser layers are dominated by single platforms, digital identity moves from state monopoly to platform monopoly. Taiwan's wallet adopts OpenID for Verifiable Credentials and OpenID for Verifiable Presentations at its core; Google Chrome is bringing the Digital Credentials API into implementation; California handles the verifier ecosystem via OpenCred — these provide observable material. The concrete policy requirement is to standardise provisioning, presentation, and verifier onboarding as far as possible, avoiding the formation of a new closed ecology.

**The third principle is to build a procurement sandbox.** Many rights claims that look attractive in policy white papers disappear at implementation because they have not been translated into procurement language. What truly needs testing concretely includes whole-life-cycle cost, third-party testing, incident response, module-substitution capability, exit clauses, and the real friction of verifier onboarding. Rollout is not the last step but part of institutional design itself.

**The fourth principle is to build a testbed network.** Pursuing universal digital identity from the start is not recommended. A more robust move is to choose several civic-use scenarios for small-scale comparable experiments — uniqueness proof in forums or public discussion, minimum-disclosure proof of age or residency, membership proof for civic self-government or civic groups. If pilots produce comparable, evaluable, and diffusable material, they will contribute concretely to the research environment concerned with Digital Civic Infrastructure.

**The fifth principle is to bring AI-agent delegation into the main line.** AI agents have entered civic workflows rapidly. The biggest question of the next phase shifts from "who logs in" to "who can act on behalf of whom." Whether an AI agent can query, purchase, sign, vote, submit data, or operate a civic workflow on behalf of a citizen requires scope limitation, revocation, auditability, and human override. The OpenID Foundation and NIST have written this into formal documents; agentic identity and delegated authority must be brought back into the main agenda of digital identity.

### § 16.2 Five Methodological Tools

The five methodological tools provide concrete examination discipline for the five policy principles.

**The first tool is the working/strengthened thesis discipline.** External citations use the working-thesis version — "the core functions preserved under the harshest conditions" — and the strengthened thesis (functions extended under mitigating conditions such as cryptographic agility, multi-track backup, and institutional reinforcement) is used only after the mitigating conditions have been made explicit. The tool corresponds to the first principle — preventing the smuggling of "strong privacy bearing" as "absolute privacy guarantee."

**The second tool is the universal-conditional distinction.** Universal claims are built with contextualisation: the universal part is the structural necessity (schema structure borne by wallet standardisation); the conditional part is the concrete implementation (configuration of issuer pluralisation, application scope, and mechanism bearing). The tool corresponds to the second principle — preventing the reading of standardisation as a "single global standard."

**The third tool is likelihood-by-mechanism four-level assessment.** For vendor product claims, design-intuition ranking (low / medium / medium-high / high) is used, resisting the lure of concrete probability decimals such as "our solution is 99.9% privacy-safe." The tool corresponds to the third principle — presenting procurement-sandbox test results in ordinal language, avoiding spurious-precision probabilistic claims.

**The fourth tool is the anti-mythologization clause.** Pilot results are not claimed as templates for other jurisdictions; extrapolation of pilots requires independent argument of conditional conditions. The tool corresponds to the fourth principle — preventing the reading of one pilot's success as a "global template."

**The fifth tool is the principle of separating design intuition from normative claim.** The normative language of AI-agent products ("our agent protects your privacy") cannot be transposed as a policy bearing; the policy bearing must be argued independently from analysis of agent delegation. The tool corresponds to the fifth principle — moving AI-agent product bearing from "vendor normative language" to the analytic layer of "policy independent argument."

### § 16.3 Conjunctive Application of Five Principles and Five Tools

The pairing of the five principles and the five tools is not a mechanical one-to-one mapping; in concrete policy design they are applied conjunctively. Any policy memorandum, white paper, legislative briefing, or procurement document may be examined for: where is the smuggling? what step into the structurally non-delegable zone? where is a pilot read as a template?

The systematised bearing of the five tools moves policy design from "the right direction" into "externally examinable" specificity. This is the key difference between mature and immature policy design.

### § 16.4 Power-Sharing Liberalism as a Reinforcement of the Policy Agenda

AllenBridge's direct reinforcement of the policy agenda pushes the five principles further into a power-sharing check. The privacy-first baseline asks whether users are only protected data subjects or also institutional co-owners. Open wallets and standardised provisioning ask whether interoperability is merely vendor-market interoperability or actually reduces platform and trust-root monopoly. The procurement sandbox asks whether public procurement writes vendor substitution, data portability, exit clauses, civic-community audit, and marginalised-user alternative paths into acceptance conditions. The testbed network asks whether pilots measure only conversion rate and UX or also measure how civic input reaches public action. AI-agent delegation asks whether AI extends civic-participation capacity or hands decision rights to an unquestionable delegation flow.

Policy design therefore cannot stop at the risk language of "avoiding harm." Reinforced by power-sharing liberalism, the policy agenda must also address public investment, vendor pluralism, open source and open standards, co-governance of trust lists, independent oversight, civilian backup capacity, and the input-to-action loop. These items need not all be borne by the same institution, but their bearers must be visible on the institutional map.

---

## § 17 Conclusion: A Conditional Floor of Democratic Legitimacy

The digital-identity system a democratic society needs must do more than prove the concrete identity of a participant; it must also decide when the participant can refrain from exposing more information than necessary and still participate lawfully in public life. Starting from this proposition, the article bears the following three closing commitments.

*First*, the article does not claim the Public Realm Floor as the **unique** normative standard of democratic legitimacy. The floor bears necessary conditions, not sufficient ones. Rawls's justice as fairness, Sen's capability approach, Nussbaum's dignity-based capabilities, and Honneth's recognition theory, among other normative approaches, may serve as ceilings or boundary conditions for the floor. The article does not claim to replace existing normative approaches, nor does it claim its bearing structure to be terminal.

*Second*, the article does not claim that the Public Realm Floor is universal to all regimes. It presupposes a democratic political context; its descriptive force is weaker for non-democratic regimes. The normative and descriptive forces of the article separate in authoritarian settings; the bearing of digital-identity infrastructure under non-democratic regimes requires an independent argumentation framework not borne by the article. The Taiwan deep-dive bears an anti-mythologization clause: it does not claim Taiwan as a global template of democratic digital governance; the Public Realm Floor's bearing under democratic-frontline conditions is a conditional-typical stress-test case + existence-pressure proof, with the strength of universalisation downgraded to "a hypothesis extrapolable to a weaker conditional subset."

*Third*, the article does not claim to be decisive ground truth for cryptographic engineering. The Public Realm Floor is a regulatory floor; civic proof is its operational concept. Any engineering design cannot bypass the floor (the concrete bearing of "engineering unreachability"). This does not imply that the engineering solutions borne by the article (the wallet's three presuppositions, the five-element / three-element conjunction of AI-agent delegation, the field set of civic-action receipts, the three-layer separation of the selective-disclosure UX) are "optimal engineering." The choice of concrete engineering must be made independently by each implementation scenario; the article's bearing is limited to the necessary-condition constraints of the regulatory floor on engineering.

By this revision the article adds a fourth closing commitment. The Public Realm Floor gives the floor of democratic legitimacy for civic proof; AllenBridge gives the institutional design direction of power-sharing and political equality; Digital Civic Infrastructure is the field in which the two are realised in public institutions, technical specifications, and policy procurement. The task of civic proof is therefore not merely to make credentials more private, more verifiable, and more portable, but also to keep the gateway to public action participable, contestable, co-ownable, and responsive. The full argument of this reinforcement is borne separately by the 19 May 2026 bridge article.

Many concrete questions are left for future work. Higher-priority items include: empirical calibration of the legitimacy-degradation threshold (requiring regression across at least five independent cases); independent argument for the Public Realm Floor mapping of civilian backup (avoiding the smuggling of civilian advocacy texts' design intuitions as normative claims); extension of delegation boundaries under the active-mode upgrade of AI agents (when agents move from passive delegation tools to subjects with active reasoning, the five-element / three-element conjunctive coverage must be re-formalised); the minimal-conditional-variable set required for cross-case comparison (e.g., among Taiwan, Estonia, and Bhutan); time-dynamic research of the Public Realm Floor in dynamic contexts (election cycles, crisis cycles, transitions of power); Chinese indigenisation bearing (the historical bearer conditions of Zhu Yunhan's *qun* (群), Wang Hui's *gong* (公), and the Confucian *jianyi* (諫議) and *zheng-you* (諍友) traditions); and cross-domain application of the universal-conditional distinction as a general methodology of normative political theory.

Finally, the article bears the following open questions for shared thinking with the reader: which civic behaviours truly need legal identity, and which need only attribute proof, uniqueness proof, or pseudonymous participation? If wallets, operating systems, and browsers gradually become the default presentation layer, have they not already become new public infrastructure? If state root credentials remain the mainstream in the foreseeable future, what exchange architecture is sufficient to support the privacy, portability, redress, and inclusion a democratic society requires? The article provides only a preliminary framework; concrete answers depend on continued dialogue across the multidisciplinary communities of normative political theory, cryptographic engineering, public policy, and case studies.

---

## References

### Primary Sources in Normative Political Theory

- Arendt, Hannah. (1958). *The Human Condition*. Chicago: University of Chicago Press.
- Habermas, Jürgen. (1981). *Theorie des kommunikativen Handelns*. Frankfurt am Main: Suhrkamp.
- Habermas, Jürgen. (1992). *Faktizität und Geltung: Beiträge zur Diskurstheorie des Rechts und des demokratischen Rechtsstaats*. Frankfurt am Main: Suhrkamp.
- Pettit, Philip. (1997). *Republicanism: A Theory of Freedom and Government*. Oxford: Oxford University Press.
- Pettit, Philip. (2012). *On the People's Terms: A Republican Theory and Model of Democracy*. Cambridge: Cambridge University Press.
- Mouffe, Chantal. (2000). *The Democratic Paradox*. London: Verso.

### Other Normative Approaches (Candidate Ceiling or Boundary Conditions)

- Rawls, John. (1971). *A Theory of Justice*. Cambridge, MA: Harvard University Press.
- Sen, Amartya. (2009). *The Idea of Justice*. Cambridge, MA: Harvard University Press.
- Nussbaum, Martha. (2011). *Creating Capabilities: The Human Development Approach*. Cambridge, MA: Harvard University Press.
- Honneth, Axel. (2014). *Freedom's Right: The Social Foundations of Democratic Life*. New York: Columbia University Press.

### Norms-Engineering Genealogy

- Bovens, Mark. (2007). "Analysing and Assessing Accountability: A Conceptual Framework." *European Law Journal*, 13(4), 447–468.
- Cavoukian, Ann. (2009). *Privacy by Design: The 7 Foundational Principles*. Toronto: Information and Privacy Commissioner of Ontario.
- Bygrave, Lee A. (2014). *Data Privacy Law: An International Perspective*. Oxford: Oxford University Press.
- Nissenbaum, Helen. (2010). *Privacy in Context: Technology, Policy, and the Integrity of Social Life*. Stanford: Stanford University Press.
- Tomasev, Nenad, et al. (2026). "Intelligent AI Delegation: A Framework for Authority Transfer, Responsibility Allocation, and Trust Calibration in AI Agent Systems." arXiv:2602.11865.

### Cross-Jurisdictional Governance and Comparative Cases

- Mueller, Milton L. (2002). *Ruling the Root: Internet Governance and the Taming of Cyberspace*. Cambridge, MA: MIT Press.
- Mueller, Milton L. (2010). *Networks and States: The Global Politics of Internet Governance*. Cambridge, MA: MIT Press.
- Bennett, Colin J., and David Lyon (eds.). (2008). *Playing the Identity Card: Surveillance, Security and Identification in Global Perspective*. London: Routledge.
- Bjørgo, Tore. (2019). "BankID and Trust in Norway."
- Marshall, T. H. (1950). *Citizenship and Social Class*. Cambridge: Cambridge University Press.

### US Constitutional-Law Cases

- *Talley v. California*, 362 U.S. 60 (1960).
- *NAACP v. Alabama ex rel. Patterson*, 357 U.S. 449 (1958).
- *McIntyre v. Ohio Elections Commission*, 514 U.S. 334 (1995).
- *Free Speech Coalition v. Paxton*, 605 U.S. ___ (27 June 2025).

### International Standards and Normative Documents

- W3C. (2025). *Verifiable Credentials Data Model 2.0*. W3C Recommendation. https://www.w3.org/TR/vc-data-model-2.0/
- W3C. (2022). *Decentralized Identifiers (DIDs) v1.0*. W3C Recommendation. https://www.w3.org/TR/did-core/
- ISO/IEC. (2025). *ISO/IEC 27566-1: Age Assurance Systems — Framework*.
- OpenID Foundation. *OpenID for Verifiable Credentials (OID4VC) and OpenID for Verifiable Presentations (OID4VP)*. https://openid.net/sg/openid4vc/
- W3C / WICG. *Digital Credentials API*. https://wicg.github.io/digital-credentials/
- NIST. *Digital Identity Guidelines (SP 800-63-4)*. https://pages.nist.gov/800-63-4/
- Regulation (EU) 2024/1183 (eIDAS 2.0). https://eur-lex.europa.eu/eli/reg/2024/1183/oj
- European Commission. *EUDI Wallet Architecture and Reference Framework (ARF)*, December 2025 iteration. https://eudi.dev/
- UN. (2006). *Convention on the Rights of Persons with Disabilities*. https://www.un.org/disabilities/documents/convention/convention_accessible_pdf.pdf
- UN CRPD Committee. (2014). *General Comment No. 1 on Equal Recognition before the Law*.

### National and Regional Institutional Documents

- Executive Yuan, Republic of China (27 December 2018): 3632nd cabinet meeting, "Digital Identification Card — A Key to Smart Government."
- Executive Yuan, Republic of China (21 January 2021): "Suspension of the Digital Identity Card Issuance Plan."
- Judicial Yuan, Interpretation No. 261 (21 June 1990).
- Judicial Yuan, Constitutional Court Judgement 111 Hsien-Pan-13.
- Ministry of Digital Affairs (moda), public information August 2022 – May 2026: TW FidO mobile Citizen Digital Certificate, TW DIW Digital Identity Wallet. https://moda.gov.tw/
- TW DIW Digital Identity Wallet: https://www.diw.gov.tw/
- BankID (Sweden): https://www.bankid.com/
- MOSIP (Modular Open Source Identity Platform): https://mosip.io/
- Aadhaar (India UIDAI): https://uidai.gov.in/
- Bhutan National Digital Identity NDI: https://ndi.gov.bt/
- California AB1043 (Digital Age Assurance Act, 2025).
- California OpenCred open credential verifier ecosystem.
- Utah Digital Identity rights legislation.

### Triple-Pressure External Sources (Taiwan Case)

- Doublethink Lab: *China Index Annual Report* (2022–2025).
- IORG (Taiwan Information Environment Research Center) + Taiwan FactCheck Center annual monitoring reports.
- V-Dem Institute: *Democracy Report 2025*.
- Freedom House: *Freedom on the Net 2024 — Taiwan*.
- Chunghwa Telecom / National Communications Commission announcements: Matsu submarine-cable disruption (2 February 2023, 8 February 2023; approximately 35 days to recovery).
- TeleGeography Submarine Cable Map (2024–2025).
- Ministry of National Defence, ROC: *2025 National Defence Report*.
- Institute for National Defense and Security Research (INDSR): grey-zone series.
- Center for a New American Security (CNAS): *Taiwan Gray Zone* + *Taiwan Contingency Planning* series.

### Civic and Sub-National Experiments

- Vocdoni (Catalan digital-voting infrastructure): https://vocdoni.io/
- Rarimo Freedom Tool (passport-rooted anonymous eligibility proof and simulated voting): https://rarimo.com/
- QuarkID (Buenos Aires city-level digital identity project): https://quarkid.org/
- zkPassport: https://zkpassport.id/
- Ethereum Foundation Privacy and Scaling Explorations (PSE): https://pse.dev/

### Civilian Advocacy Texts

- "*Bèibèi Érlái — Towards Interoperable but Unlinkable Digital Identity*" (civilian advocacy text, public-consultation version of November 2025): https://blog.bonds.tw/litepaper/. Cited as a civilian advocacy text, not in academic citation format.

### Advocacy and Research Institutions

- Allen Lab / Harvard Kennedy School Ash Center: [A Framework for Digital Civic Infrastructure](https://ash.harvard.edu/resources/a-framework-for-digital-civic-infrastructure/).
- Danielle Allen. (2025). "Setting the 2025–26 Agenda for the Allen Lab for Democracy Renovation." Harvard Kennedy School Ash Center. https://ash.harvard.edu/articles/setting-the-2025-26-agenda-for-the-allen-lab-for-democracy-renovation/
- Danielle Allen. (2022). "Introducing Power-sharing Liberalism." RadicalxChange. https://www.radicalxchange.org/updates/blog/introducing-power-sharing-liberalism/
- Danielle Allen et al. (2025). "A Roadmap for Governing AI: Technology Governance and Power-Sharing Liberalism." *AI and Ethics*. https://link.springer.com/article/10.1007/s43681-024-00635-y
- Danielle Allen, Eli Frankel, Woojin Lim, Divya Siddarth, Joshua Simons, E. Glen Weyl. (2023). *Ethics of Decentralized Social Technologies: Lessons from Web3, the Fediverse, and Beyond*. https://philarchive.org/archive/ALLEOD
- Sarah Hubbard and Darshan Goux. (2026). "The Ecosystem of Deliberative Technologies for Public Input." Harvard Kennedy School Ash Center. https://ash.harvard.edu/resources/the-ecosystem-of-deliberative-technologies-for-public-input/
- Danielle Allen. (2023). *Justice by Means of Democracy*. University of Chicago Press. https://press.uchicago.edu/ucp/books/book/chicago/J/bo192735333.html
- American Civil Liberties Union (ACLU): https://www.aclu.org/
- Electronic Frontier Foundation (EFF): https://www.eff.org/
- Access Now: https://www.accessnow.org/
- Internet Corporation for Assigned Names and Numbers (ICANN): https://www.icann.org/
- Internet Engineering Task Force (IETF): https://www.ietf.org/
- OpenID Foundation: https://openid.net/

### Supplementary Literature (Norms-Description Separation, Methodology, Cross-Case Comparison)

- Stears, Marc. (2007). "Two Approaches to Political Theory." In *Political Theory: Methods and Approaches*. Oxford: Oxford University Press.
- Beach, Derek, and Rasmus Brun Pedersen. (2013). *Process-Tracing Methods: Foundations and Guidelines*. Ann Arbor: University of Michigan Press.
- Bennett, Andrew, and Jeffrey T. Checkel (eds.). (2014). *Process Tracing: From Metaphor to Analytic Tool*. Cambridge: Cambridge University Press.
- Yin, Robert K. (2018). *Case Study Research and Applications: Design and Methods* (6th ed.). Thousand Oaks: SAGE.
- George, Alexander L., and Andrew Bennett. (2005). *Case Studies and Theory Development in the Social Sciences*. Cambridge, MA: MIT Press.
- Beitz, Charles. (1979). *Political Theory and International Relations*. Princeton: Princeton University Press.
- Pogge, Thomas. (1989). *Realizing Rawls*. Ithaca: Cornell University Press.
- Walzer, Michael. (1983). *Spheres of Justice: A Defense of Pluralism and Equality*. New York: Basic Books.
- Zweigert, Konrad, and Hein Kötz. (1998). *An Introduction to Comparative Law* (3rd ed.). Oxford: Oxford University Press.
- Clifford, James, and George E. Marcus (eds.). (1986). *Writing Culture: The Poetics and Politics of Ethnography*. Berkeley: University of California Press.
- Rosaldo, Renato. (1989). *Culture and Truth: The Remaking of Social Analysis*. Boston: Beacon Press.
- Skinner, Quentin. (1969). "Meaning and Understanding in the History of Ideas." *History and Theory*, 8(1), 3–53.
- Taleb, Nassim Nicholas. (2012). *Antifragile: Things That Gain from Disorder*. New York: Random House.

### Supplementary: Source of the Original Draft

- mashbean (17 April 2026): "From State-Issued Credentials to Citizens Proving Themselves — How Digital Identity Transforms Digital Civic Infrastructure." https://mashbean.net/blog/2026/0417-1trens/
  - Presentation slides (Chinese): https://mashbean.net/blog/allen-lab-share-0417-zh/
  - Presentation slides (English): https://mashbean.net/blog/allen-lab-share-0417-en/

The article bears a systematic restatement of the original draft; the original draft is not replaced as the source text.
