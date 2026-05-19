---
title: "The Cost-Benefit Matrix of Uniqueness Proof and Sybil Resistance: From Worldcoin to zkPassport"
description: "Sybil resistance is formalised as an impossibility triangle IT' = ¬∃ S [ U(S) = max ∧ D(S) = min ∧ I(S) = max ], equipped with nine sub-dimensions and five boundary conditions. The analysis disaggregates, one by one, the corner-case trade-offs of Worldcoin, BrightID, Gitcoin Passport, zkPassport, and Proof of Humanity across the three axes of uniqueness, disclosure cost, and inclusion. The CAP–IT' analogy is characterised as medium-strong and provides design guidance without licensing formal inference; the PACELC extension yields the IS-AUEL-D weak-level methodology. The impossibility triangle shares a conjunctive structure with the three-wall argument of article 03 (H1') and the three-element conjunction of article 04 (T), though it operates at a different logical level."
pubDate: 2026-05-05
tags: ["civic-proof", "sybil-resistance", "personhood-proof", "worldcoin", "zkpassport", "brightid", "gitcoin-passport", "proof-of-humanity", "impossibility-triangle", "doctoral-research"]
category: "Engineering Comparisons in Civic Proof"
aiModel: "Claude Opus 4.7"
aiPrompt: "How do Worldcoin, BrightID, Gitcoin Passport, zkPassport, and Proof of Humanity perform under a civic-layer attack model? How should the 'good enough' principle of Sybil resistance be stratified? What are the political costs of each approach (data centralisation, irreversible biometrics, social-graph exposure, platform dependency, inclusion)? Does an impossibility triangle between uniqueness, disclosure, and inclusion exist?"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-05-05-sybil-resistance-cost-benefit"
aiGeneratedDate: 2026-05-05
humanReviewed: false
lang: "en"
slug: "2026-05-05-sybil-resistance-cost-benefit"
---

## § 1. Introduction: Why Sybil Resistance Is a Spectrum Problem

In 2002, John Douceur defined the Sybil attack in his IPTPS paper as "a single entity masquerading as multiple identities within a peer-to-peer system in order to distort majority-rule outcomes."[^1] Over two decades later, this modest proposition from a corner of distributed systems has been transplanted repeatedly into Web3, DAO governance, UBI pilots, and cross-border public-goods distribution—driving engineering competition among five representative personhood proof schemes: Worldcoin, BrightID, Gitcoin Passport, zkPassport, and Proof of Humanity.[^2]

The central controversy in this competition is not "which scheme is strongest." The genuine question is: "Should one key be used to lock every door?" Worldcoin, launched by Tools for Humanity (TFH) in 2019, proposes universal proof of personhood through iris recognition and deploys the same World ID across a broad spectrum of scenarios—login, UBI disbursement, community applications, and political petitions.[^3] This universal orientation prompted the Kenyan Office of the Data Protection Commissioner (ODPC) to issue a suspension order in 2023;[^4] Spain's AEPD to issue Resolución PS/00120/2024 in 2024;[^5] Brazil's ANPD to issue a suspension directive in 2025;[^6] and concurrent investigations by Hong Kong's PCPD, Portugal's CNPD, and Bavaria's BayLDA.[^7] During the same period, Aadhaar's coverage of India's 1.3 billion population was punctured by Drèze, Khera, and Somanchi's 2017 empirical study of PDS exclusion errors in Jharkhand, which documented a 12–37% gap;[^8] the 2018 *Puttaswamy II* judgment restricted Aadhaar's use in the private sector;[^9] and post-2023 reform PDS exclusion rates remained in the 5–10% range.[^10] The two rounds of Gitcoin GG18 and GG19—covering forty million dollars in public-goods distribution—were implicated in on-chain analyses by Trusta Labs and Nansen revealing between 5,427 and 30,000 Sybil addresses.[^11] The Indonesian e-KTP corruption scandal concluded in 2018 with the conviction of Setya Novanto to fifteen years' imprisonment.[^12]

Mapping these cases on a single chart, "Sybil resistance" ceases to be a unitary objective. The "required uniqueness strength," "disclosure cost," and "inclusion coverage" that different scenarios demand—forum blue-tick verification, political petitions, one-person-one-vote, subsidy distribution—differ radically across the three axes. The core proposition of the present analysis is that design choices in personhood proof are constrained by an impossibility triangle IT', derived from empirical and normative induction, under a normative premise set P: no scheme can simultaneously maximise uniqueness U, minimise disclosure D, and maximise inclusion I. The formal structure of this triangle is conjunctive, as are the three-wall argument H1' in article 03 and the three-element conjunction T in article 04—though IT' operates at a different level. The present analysis further argues that IT' is structurally isomorphic to the post-PACELC revised version of the CAP theorem at the level of "design trade-offs under adversarial tolerance," an analogy characterised as medium-strong: sufficient for design guidance, insufficient for formal inference. The problem with Worldcoin's orb model is that it claims no choice need be made. Choosing the strong-U corner is not itself an error; the error lies in concealing that choice.[^13]

The analysis proceeds in eight sections. Section 2 surveys the five schemes, making explicit their sub-configurations and threat-model deviations. Section 3 inductively derives five political costs across the five schemes. Section 4 formalises the impossibility triangle as IT', lists nine sub-dimensions, and clarifies the level differential between IT' and the H1' / T conjunctions in articles 03 and 04. Section 5 constructs the medium-strong CAP–IT' analogy and extends the PACELC weak-level methodology. Section 6 disaggregates the six-step causal chain of Worldcoin's over-generalisation and three counterfactuals. Section 7 sets out five boundary conditions, seven case comparisons, and a six-jurisdiction recognition spectrum, and argues the engineering obligation of scenario stratification. Section 8 closes with connections to articles 03 and 04 and to prompts 11 and 15.

## § 2. Survey of Five Schemes: Sub-Configurations, Threat Models, and Attack Surfaces

Before turning to individual schemes, a category confusion that frequently arises must be clarified. Sybil resistance proves the fact of "same human being"—it bears no necessary relationship to real-name identification. KYC (Know Your Customer) is a legal compliance procedure for financial institutions, whose purpose is to identify clients and establish ongoing monitoring; it differs from personhood proof in purpose, regulated subject, and institutional structure. Among the five schemes below, only a minority of variants—such as Civic and Holonym—directly internalise KYC as a trust root; the remaining schemes root trust in biometrics, social graphs, government documents, or vouching videos. Their objective is only the invariant of "same human being"; no built-in obligation to real-name disclosure is present.

### § 2.1 Worldcoin: v1 Orb / v2 SMPC + IrisCode 2.0 / Document Verification

Writing Worldcoin as a single scheme has already distorted the discussion. Following TFH's August 2024 announcement of SMPC three-party governance and IrisCode 2.0, and its November 2024 launch of Document Verification as a non-orb supplementary entry point,[^14] at least three sub-configurations coexist in practice: v1 orb (conventional iris capture with iris template destruction at the orb); v2 SMPC + IrisCode 2.0 (multi-party computation distributing iris template custody, with rotatable algorithm); and Document Verification (NFC reading of ICAO Doc 9303 passport chips, analogous to zkPassport).[^15] The disclosure and inclusion performance of these three sub-configurations differs entirely. Treating "Worldcoin" as a single object of comparison incorrectly extrapolates v1's irreversibility to v2, or conversely miscalculates v2's algorithmic rotatability as having resolved the physical-layer problem.

At the engineering level, World ID employs Semaphore zk-SNARK with a nullifier-per-app unlinkability design.[^16] The same World ID generates different nullifiers in different applications—Reddit, Discord, Match Group, Stripe Connect—achieving engineering-level inter-application unlinkability. The problem with this path is that it presupposes "inter-application isolation" suffices to curb data centralisation. But the token-economy binding of World ID Cloud Verifier, World App, and World Chain draws users back within the scope of single governance entity TFH.[^17] What is isolated is the verifier layer, not the issuer layer.

Worldcoin's core threat model is issuer collusion: orb vendor coordination, internal TFH data leakage, and SMPC three-party exit mechanisms are all attack surfaces.[^18] This differs entirely from BrightID's core threat (social-graph attack), discussed in the next subsection. When different schemes are compared on a single attack-model table, this threat-model deviation must be made explicit; failure to do so risks producing conclusions of false symmetry.

### § 2.2 BrightID: The Promise and Limits of a Social-Graph Root

BrightID is a social-graph personhood proof launched in 2018. Users establish neighbour relationships through in-person meetings (connection parties) and then apply SybilGuard / SybilLimit algorithms to detect anomalous sub-graphs.[^19] Two foundational papers by Yu et al. in 2006 and 2008 proved that when the mixing time of the honest region is better than that of the Sybil region, detection is achievable in polynomial time.[^20] However, the 2013 NDSS empirical study by Mohaisen and Hopper showed that the mixing time of real social graphs is far greater than theoretical assumptions, so the attack-tolerance level of purely social-graph defences is overestimated.[^21]

BrightID's core threat is the social-graph attack: attackers invest time building what appears to be a natural social graph, eventually bringing the Sybil sub-graph's mixing time close to that of the honest region.[^22] BrightID Aura introduced a verifier regime as a mitigation, but simultaneously concentrated judgment power in a small group of verifiers, creating tension with the original intent of "democratising the social graph."[^23] Stamper's 2022 MIT thesis further identified that meta-graph attacks—observing connection patterns rather than individual links—constitute a dimension beyond BrightID's defences.[^24]

BrightID's disclosure performance is relatively better than Worldcoin's (no biometric upload), but the social graph itself is a long-term privacy-bearing carrier; this cost is elaborated in Section 3.

### § 2.3 Gitcoin Passport (Human Passport): Multi-Signal and Stamp Governance

Gitcoin Passport adopts a multi-signal path: users collect stamps from BrightID, ENS, Holonym, POAP, GitHub accounts, and similar sources; the platform determines eligibility by weighted thresholds.[^25] The advantage of this approach is a distributed attack surface—attackers must simultaneously circumvent multiple independent sources. The disadvantage is that stamp schema governance itself becomes a single point. In September 2024, Holonym acquired Gitcoin Passport and renamed it Human Passport; complete public data on the transition period's impact on downstream dApps remains unavailable.[^26]

The Sybil attacks across Gitcoin GG18 and GG19 constitute a stress test of the multi-signal path. Trusta Labs' Q3 2023 Gitcoin Passport Sybil analysis identified 5,427 Sybil addresses passing the initial threshold;[^27] Nansen's 2024 on-chain analysis of GG19 expanded the figure to approximately 30,000 addresses.[^28] The structural cause of these failures was not that any single stamp was broken; attackers used the Holonym KYC stamp vulnerability as the primary entry point, then augmented their scores with ENS and POAP credentials.[^29] Multi-rooted does not mean multi-secured; the attack surface is equally multi-rooted.

Gitcoin Passport's core threat is stamp schema governance: changes to the schema require all dependent dApps to upgrade synchronously.[^30] This threat became sharper after the September 2024 acquisition; governance change is attack-surface change.

### § 2.4 zkPassport: Government-Document Root and the Exclusion of 850 Million

zkPassport uses government passport chips (ICAO Doc 9303 standard) as its trust root. Users read their passport via NFC and generate a zk-SNARK proof of selective disclosure—for instance, "I hold a passport from country X and am aged 18 or over."[^31] Andolfo et al.'s 2024 IACR ePrint 2024/1377 provides the complete cryptographic design and analysis of CSCA (Country Signing Certificate Authority) trust roots.[^32]

zkPassport's disclosure-axis performance is the strongest among the five schemes: selective disclosure, no reliance on biometrics, no exposure of the social graph, no dependence on stamp schema governance. But its inclusion-axis cost is also the heaviest. The World Bank ID4D 2024 Global Dataset shows that approximately 850 million people worldwide have no legal identity documents, with 47% concentrated in sub-Saharan Africa, 25% in South Asia, and 10% in Southeast Asia.[^33] For this population, zkPassport is entirely unreachable—a structural consequence of design choices, not an engineering issue that "future patches" can remedy.

zkPassport's core threats are issuer collusion and fragmented CSCA maintenance. Some countries' CSCA trust roots have low update frequency and incomplete revocation mechanisms;[^34] state-level Sybil attacks are entirely indistinguishable to zk verifiers.[^35] This threat is of the same type as Worldcoin's issuer collusion but differs in scope: the former takes 192 ICAO member states as its trust boundary, the latter a single company.

### § 2.5 Proof of Humanity: The Video-Plus-Vouching Bottleneck

Proof of Humanity (PoH), launched by Kleros in 2021, requires users to upload a self-introduction video plus a vouching from an already-verified participant, with disputes arbitrated by the Kleros juror pool.[^36] PoH v2 went live in June 2024, introducing a new governance structure.[^37]

PoH's defining feature is permanent public disclosure of one's face: the video is public and personal data is irrevocable. The disclosure-axis cost is extremely high, but the engineering design is simple, requiring no biometric hardware and no social-graph algorithms. Its core threats are twofold: a Kleros juror-pool centralisation concern (Allen et al.'s 2023 preprint showed token holdings in the juror pool are concentrated in a small number of wallets[^38]) and an arbitration bottleneck (long processing times for disputed cases).

### § 2.6 The Five Schemes as Representative, Not Exhaustive

The five schemes do not exhaust the personhood proof design space. Idena (round-based verification via synchronised CAPTCHA solving and peer validation), Civic (KYC verification business model), Anon Aadhaar (Indian Aadhaar wrapped in zero-knowledge proofs), Sismo (attestation aggregation), Holonym (KYC stamps), and Humanity Protocol (palm scan) all represent further extensions of this design space.[^39] The five schemes serve as the comparative backbone because they cover corner cases across three axes: strong biometrics / weak biometrics / no biometrics; strong government root / weak government root / no government root; strong platform dependency / weak platform dependency.

## § 3. Cross-Scheme Induction of Five Political Costs

### § 3.1 Data Centralisation

Data centralisation and trust-root centralisation are distinct matters. Worldcoin v1 physically concentrated the hash of iris data within the digital infrastructure of TFH and the World Foundation;[^40] zkPassport concentrates trust roots in the CSCA systems of 192 ICAO member states while leaving individual users' passport data on their own devices; BrightID distributes social-graph data across decentralised storage while concentrating verification authority in verifiers; Gitcoin Passport distributes stamp sources while concentrating stamp governance in acquiring entity Holonym.[^41] The question of "who it is concentrated in" is more concrete than "whether it is concentrated." Any slogan of "decentralised therefore secure" requires disaggregation into the four layers of issuer, verifier, data store, and governance for separate examination.

### § 3.2 Irreversibility

The spectrum of irreversibility, from weak to strong: BrightID (social graph rebuildable) < Gitcoin Passport (stamps resettable) < zkPassport (passport reissuable) < Proof of Humanity (public face permanently on blockchain) < Worldcoin (iris itself irreplaceable).[^42] Daugman's 2004 classic paper on iris recognition confirmed that single-eye iris entropy is approximately 200+ bits and that iris minutiae patterns are stable across decades once adulthood is reached.[^43] Bowyer et al.'s 2008 *Computer Vision and Image Understanding* survey compiled the physical-layer characteristics of iris biometrics.[^44] Hill's 2023 *Your Face Belongs to Us* documented, from an investigative journalism perspective, how facial data from companies such as Clearview AI has spilled into ranges from which recovery is impossible.[^45]

Iris irreversibility must be cut into three layers: the software layer (nullifier design can revoke a single application's linkage), the institutional layer (the World Foundation's governance can choose to delete specific user records), and the physical layer (the iris itself is irreplaceable).[^46] The revocation costs across the three layers are entirely different; blurring the distinction between them inflates or deflates cost estimates.

### § 3.3 Social-Graph Exposure

Social-graph exposure is not a problem unique to BrightID. Gitcoin Passport's accumulation of multiple stamps itself constitutes a cross-platform social-identity fingerprint.[^47] If a user simultaneously holds a BrightID stamp, ENS, Lens Protocol, Farcaster, and POAP credentials, the time series and content combination of those stamps is sufficient to reconstruct that user's position in the Web3 social graph. Both Stamper (2022) and Borge et al. (2017) argued from different angles that the long-term exposure effects of social graphs far exceed those of any single verification event.[^48]

### § 3.4 Platform Dependency

Platform dependency is coupled to governance fragility. Gitcoin Passport was acquired by Holonym and renamed Human Passport in September 2024; downstream dApps must adapt to the new stamp schema and governance process.[^49] The World Foundation is registered in the Cayman Islands; the jurisdictional choices governing transparency and legal accountability are themselves design choices.[^50] zkPassport depends on each country's CSCA maintenance cycle; if a country issues a flawed CSCA signature, all zk proofs relying on that country are affected. The long-term usability of any personhood proof is affected by the political stability, legal recognition spectrum, and commercial-model sustainability of the governance entity to which it is attached.

### § 3.5 Inclusion: The Fifth Political Cost

Inclusion is listed here as a fifth political cost coordinate with data centralisation, irreversibility, social-graph exposure, and platform dependency. It is not a derivative effect of the preceding four; rather, it is one of the core revisions following a systematic literature review.[^51] zkPassport's complete inaccessibility to the approximately 850 million people worldwide without legal identity documents is not an engineering problem solvable by "future rollout"; it is the structural consequence of a design choice.[^52] Under the multi-country suspension orders affecting Worldcoin, actual orb collection has concentrated in locations such as Kenya and Argentina, which have higher ID coverage rates but relatively weaker regulatory capacity—exhibiting the "resource extraction chain" structure described by Crawford and Joler in their 2018 *Anatomy of an AI System*.[^53] BrightID's coverage of the elderly, persons with disabilities, and language minorities who lack the ability to attend in-person meetings is limited; Gitcoin Passport's multi-signal model poses relatively high barriers for users without prior Web3 participation experience.[^54]

Inclusion is also not a "developing-country problem." Pew Research 2023 shows that the device-sharing rate among U.S. households is 16%, rising to 27% among low-income households; UNICEF 2022 figures for developing countries range from 30 to 45%.[^55] UK ONS 2024 surveys of UK internet users also document the digital divide affecting the elderly and persons with disabilities.[^56] Sen's 1999 *Development as Freedom* and Nussbaum's 2011 *Creating Capabilities* provide the normative foundation for the inclusion axis: any design that deprives individuals of a basic capability—including the capability to have one's identity recognised—must offer sufficient countervailing value on other axes.[^57]

## § 4. Formalisation of the Impossibility Triangle IT'

### § 4.1 The IT' Proposition

Distilling the five political costs of Section 3 into three axes, the present analysis proposes the following proposition.

> **Impossibility Triangle IT'**
> Under the normative premise set P = { the distribution of real-world roots is uneven; the information-theoretic lower bound is non-zero; engineering resources are finite; fallback paths must exist },
> IT' = ¬∃ S [ U(S) = max ∧ D(S) = min ∧ I(S) = max ]
> where S is any personhood proof scheme; U is uniqueness strength; D is disclosure cost; I is inclusion coverage.

This proposition is an empirical and normative induction, not a theorem; invoking the authority of the CAP theorem to write it as a formally provable impossibility is strictly impermissible.[^58] It differs in degree of rigour from Gilbert and Lynch's 2002 formal proof of Brewer's Conjecture;[^59] the latter has formal language, a model, a theorem, and proof steps, whereas the former has only literature induction and normative argument.

### § 4.2 Nine Sub-Dimensions

Each of the three variables carries sub-dimensions.

**U (uniqueness):**

- Per-identity cost: the marginal cost for an attacker to forge one additional identity (ranging from BrightID's "organise a meeting" to Worldcoin orb's "procure an eyeball").
- Detection latency: the time elapsed between a Sybil account's creation and its detection (from GG18 / GG19 round closure to Trusta Labs report, approximately three to six months).
- Collusion resistance: the tolerance ceiling for coordinated action among issuer, verifier, and juror.

**D (disclosure minimisation):**

- Enrolment-time disclosure: data that must be uploaded at registration (iris vs. social graph vs. passport chip).
- Verification-time disclosure: data revealed at verification (zk proof vs. full data vs. partial data).
- Observer-side disclosure: information inferable by third-party observers (meta-graph, stamp combinations, time series).
- Future leakage risk: the cost of future data leakage (iris irreplaceable vs. passport reissuable).

**I (inclusion):**

- Document gap: population without legal identity documents (World Bank ID4D: 850 million).
- Biometric exclusion: biometric capture failure rates (demographic bias in Buolamwini and Gebru's 2018 *Gender Shades*).[^60]
- Technology gap: absence of smartphones, unstable internet connections, absence of NFC hardware.
- Language and disability gap: interface language, visual / hearing / cognitive impairment, elderly digital divide.

Only after the nine sub-dimensions are laid out does the triangle's concrete tension have a common scale. Any design claiming "my scheme performs well on all three sides" must provide concrete quantification or boundary proof for each of the nine sub-dimensions.

### § 4.3 Pairwise High Tensions and the D–I Degradation Path

The tensions are pairwise and high, but they do not entail logical mutual exclusion.

**U–D conflict:** To prove uniqueness, an issuer must at some point hold the invariant of "same human being." Zero-knowledge protocols can compress verification-time disclosure to a minimum, but they cannot eliminate enrolment-time disclosure.[^61] Zero knowledge shifts the conflict from the verifier to the issuer; it does not eliminate the conflict itself.

**U–I conflict:** Root distribution is uneven. A single root (such as a passport, Aadhaar, or orb) cannot cover 100% of the population; multiple roots reduce collusion resistance (the dispersed attack surface in GG18 / GG19 is precisely the linear addition of dispersed attack surfaces).[^62]

**D–I degradation path** (the most underestimated tension): when a zk system fails, the fallback path typically degrades into high disclosure.[^63] When zkPassport's NFC reading fails on a low-end device, users are directed to a "manual verification" path equivalent to full KYC; when the World ID Cloud Verifier fails in an offline environment, users must produce their passport as supplementary documentation. Failure rates are substantially higher among vulnerable groups (elderly devices, unstable networks, persons with disabilities) than among the general population. The cost of the D axis ultimately falls at the weakest point of the I axis.

### § 4.4 Level Differential Between IT' and H1' / T in Articles 03 and 04

IT' shares a conjunctive structure with the three digital-association walls H1' in article 03 (indelibility, impermeability, imparalysability) and the three-element conjunction T in article 04 (unlinkability ∧ accountability ∧ recoverability), but operates at a different level.[^64]

Both H1' in article 03 and T in article 04 are conjunctive necessary conditions: when any one of the three is missing, the institution collapses. Article 03 concerns three legal guarantees for digital association rights—failure of any single guarantee constitutes a constitutional-level breakdown; article 04 concerns the three-element engineering contract of pseudonymous participation—failure of any single element causes institutional failure. Both are "conjunctive necessary conditions" whose violation renders a scheme fundamentally unlaunehable.

IT' is conjunctive maximisation unachievable: simultaneously pulling all three sides to their maximum is not achievable, but any single side can be pulled to at least a moderate level. Its structure is not "missing one means failure"; rather, "all three cannot be simultaneously maximal" is the core. Worldcoin places U at 5, compresses D to 1, and leaves I at 2—the scheme still functions. BrightID places U at 2, pulls D to 4, and places I at 3—the scheme also still functions. The difference lies in each scheme's corner position and the political cost of that corner.

This level differential matters because it defines the normative status of IT': it is a "design-choice framework," not an "eligibility threshold."

## § 5. The CAP Analogy (Medium-Strong) and the PACELC Extension

### § 5.1 Correspondence Mode B

The CAP theorem was proposed in Brewer's 2000 PODC keynote and formally proved by Gilbert and Lynch in 2002,[^65] then revised by Brewer in his 2012 "CAP twelve years later" and by Abadi in his 2012 "Consistency Tradeoffs in Modern Distributed Database System Design" into the PACELC framework.[^66] The present analysis adopts Correspondence Mode B, centred on "adversarial tolerance as a prerequisite."

| CAP (distributed systems) | IT' (Sybil resistance) | Correspondence rationale |
|---|---|---|
| C, Consistency | U, Uniqueness | Global identity guarantee |
| A, Availability | I, Inclusion | No unit left out |
| P, Partition tolerance | D, Disclosure minimisation | Non-negotiable prerequisite against adversary |

The key rationale for mapping P to D is as follows. In distributed systems, partition tolerance is a non-negotiable engineering prerequisite (network partitions will occur), so system designers can only choose between C and A. In Sybil resistance, disclosure minimisation is a non-negotiable political prerequisite (privacy threats exist objectively), so designers can only make their principal trade-off between U and I.[^67]

### § 5.2 Four-Level Strength Assessment

- **Strength A (adversarial objective): strong.** Both CAP and IT' take "defending against a type of adversary" as the design objective (the former: partition; the latter: surveillance + Sybil); the adversarial impossibility structure is deeply similar.
- **Strength B (formal structure): weak** (red line). CAP is a theorem (with Gilbert–Lynch formal proof); IT' is empirical-normative induction, without formal proof. Treating them as equivalent in status is strictly impermissible.
- **Strength C (failure modes): medium-strong.** Both exhibit the structure of "refusing to acknowledge trade-offs → collapse": CAP's split-brain is a technical cascade (data inconsistency causes accumulated application-layer errors); IT's "universal design objective" is a political cascade (a single scheme extrapolated to all scenarios triggers cross-jurisdictional regulatory backlash).
- **Strength D (educational implications for design choice): strong.** Both draw practitioners away from "finding a perfect scheme" and toward "making trade-offs explicit." This is the strongest layer of the analogy.

Overall strength is characterised as medium-strong. It can serve as normative guidance; it cannot ground formal inference. The choice of Correspondence Mode B shares a sister structure with the "design choice" framework of SA-3 in article 04.[^68]

### § 5.3 The PACELC Extension: IS-AUEL-D as a Weak-Level Methodology

PACELC expands CAP from a static triangle into a dynamic structure: If Partition, choose between Availability and Consistency; Else, choose between Latency and Consistency.[^69] Extending this structure to IT' yields a weak-level methodological prompt.

> **IS-AUEL-D**: If Surveillance attack, choose between Uniqueness and Inclusion; Else, choose between Ergonomics and Uniqueness.

This extension is weak-level: it is neither a theorem nor a strict analogy, but merely expands IT' from a static three-axis framework into a dynamic structure of "attack-intensity stratification," providing normative language for the scenario stratification of Section 7.[^70] Its primary utility is to lead scenario designers to prioritise disclosure in scenarios of high surveillance threat (such as political petitions and human rights advocacy) and to prioritise ergonomics in scenarios of low threat (such as forum blue-tick verification).

### § 5.4 The Meta-Analogy with Mundell–Fleming and the Buterin Trilemma

IT' is not an isolated impossibility triangle. The Mundell–Fleming trilemma (capital mobility, fixed exchange rates, and independent monetary policy—choose two),[^71] Buterin's blockchain trilemma (decentralisation, security, and scalability),[^72] and the Tinbergen rule (the number of policy instruments must equal the number of policy objectives)[^73] are all members of the impossibility-triangle family in economics and engineering. Placing IT' within this family reveals the common features of triangular structures: an adversarial objective, normative premises, pairwise high tensions, and conjunctive maximisation unachievable. However, the degree of formalisation of each triangle varies enormously—from the Tinbergen rule as a mathematical theorem to the Buterin trilemma as empirical induction at opposite ends of the spectrum; IT' falls in the middle range.

## § 6. Worldcoin's Over-Generalisation: A Six-Step Causal Chain

### § 6.1 Causal Chain M1–M6

```
[M1] Universal proof of personhood (explicitly stated design objective)
        TFH whitepaper + World ID documentation + SDK integrations
        ↓
[M2] Physical-layer irreversibility of iris hash (biometric specificity)
        Daugman 2004 + Hill 2023 + three-layer revocation distinction
        ↓
[M3] Same iris hash covering multiple scenarios (M1 + M2 combined)
        Identity creep + WLD token-economy binding
        ↓
[M4] Cross-platform linkability + continuous monitoring (zk isolation vs. side-information reality)
        Three-layer side channels: device layer / service layer (World ID Cloud Verifier) / token layer
        ↓
[M5] Concentration in a single company → information asymmetry, extremely high exit costs
        TFH + Worldcoin Foundation governance + ODPC Kenya 2023 / AEPD Spain 2024
        ↓
[M6] Collection priorities → economic incentives driving developing-country prioritisation (medium-strong correlation)
        Rest of World reporting + Crawford & Joler 2018 + ID4D reports
        ↓
[Conclusion] The political costs of concentrating irreversible biometrics are extrapolated to scenarios that
             do not require them and to populations without capacity to opt out
```

M1: The universal proof of personhood design objective is explicitly stated in TFH's whitepapers (2023 and 2025 editions) and World ID 2.0 documentation; the SDK integrates a broad spectrum of applications including Reddit, Discord, Match Group, and Stripe Connect.[^74]

M2: Physical-layer irreversibility of the iris hash. Daugman (2004) confirmed that single-eye iris entropy is 200+ bits and that minutiae patterns remain stable across decades once adulthood is reached;[^75] Hill (2023) documented, from an investigative journalism perspective, the long-term spillage of irreversible biometrics.[^76] The three-layer revocation distinction (software layer / institutional layer / physical layer) was set out in Section 3.

M3: The combination of M1 and M2 produces identity creep. Hoofnagle et al.'s 2012 "Behavioral Advertising: The Offer You Cannot Refuse" describes the general mechanism of identity creep;[^77] Worldcoin's WLD token-economy binding makes it difficult for users to exit once registered.[^78]

M4: Three layers of side-information paths: the service-layer side channel of World ID Cloud Verifier, the device-layer side channel of World App, and on-chain behavioural traces from WLD tokens.[^79] The inter-application isolation of zk proofs (nullifier per app) covers only the verification-data layer, not these three side-channel layers.

M5: Concentration in the single governance structure of TFH + Worldcoin Foundation. Multiple-country suspension orders reveal the consequences of M5: Kenya ODPC (2023-08-02), Spain AEPD (2024-03), Brazil ANPD (2025-01), Portugal CNPD (2024-03), Hong Kong PCPD (2024-05), and Bavaria BayLDA (2023-12) together constitute three groups of regulatory response: explicit suspension / under investigation / soft regulation.[^80] Reducing these three groups to "suppression" would erase each jurisdiction's specific legal logic (GDPR Art. 9 special-category biometrics / Convention 108+ / EDPB Guidelines 05/2022 on facial recognition).[^81]

M6: Medium-strong correlation between collection priorities and developing-country distribution. Rest of World reporting documents Worldcoin orb's intensive deployment in Kenya, Argentina, Indonesia, Vietnam, and similar locations;[^82] Crawford and Joler's 2018 *Anatomy of an AI System* provides a political-economy analytical framework for AI systems.[^83] The characterisation is medium-strong correlation, not unidirectional causation; the Kenyan government's proactive suspension in 2023 is a counter-example demonstrating the agency of developing-country governments.[^84]

### § 6.2 Three Counterfactuals

**Counterfactual A:** Worldcoin restricted to cross-border UBI scenarios. In a UBI scenario, the political legitimacy of uniqueness is far stronger than for forum blue-tick verification, and the cost of using iris as a strong root is more tolerable—although whether iris is truly necessary would still require audit. A hybrid path (zkPassport-style passport root supplemented by PoH-style vouching) could achieve comparable results without introducing physical-layer irreversibility.

**Counterfactual B:** Adoption of revocable biometrics (face / voice hash with algorithmic rotation). Physical-layer irreversibility would partly disappear, but face hash exhibits more severe demographic bias than iris (Buolamwini and Gebru's 2018 *Gender Shades* found error rates for dark-skinned women from three major commercial systems reaching 34.7%)[^85] and is susceptible to remote capture; the overall cost may not diminish.

**Counterfactual C:** Complete separation of token incentives from personhood proof (public-goods model). The collection priority pattern of M6 would shift substantially; the information asymmetry of M5 would decrease. However, engineering speed and scale would be significantly sacrificed; TFH's venture-capital-plus-token business model could not sustain development after separation.

### § 6.3 Balanced Engineering Description and Four Policy Recommendations

Describing Worldcoin as a fraud would be erroneous. TFH's engineering investments across five areas warrant balanced description: (i) inter-application isolation in the Semaphore zk circuit; (ii) iris template destruction at the orb (only the hash is uploaded); (iii) open-source orb specifications; (iv) a self-custody path (users hold their own World ID private key); (v) public Privacy Documentation.[^86] These five items represent genuine engineering efforts that should not be negated by political criticism of the "universal design objective."

The argument here is not to prohibit Worldcoin; prohibiting extrapolation is the policy core. The present analysis advances four actionable policy recommendations.

1. **Scenario threshold:** The strength of personhood proof should match the adversarial strength of the scenario. Forum blue-tick verification does not require iris; UBI pilots do.
2. **Nullifier isolation legal contract:** The engineering isolation of nullifier-per-app should be reinforced by legal contract; service providers accepting World ID must sign legally enforceable obligations not to cross-compare nullifiers externally.
3. **Exit audit:** After a user revokes authorisation, the World Foundation must prove within an agreed time that the iris hash has been removed from the relevant jurisdictional systems, subject to third-party audit.
4. **Collection jurisdiction pre-clearance:** Before Worldcoin orbs enter a new jurisdiction, the relevant data protection authority's advance clearance should be obtained, rather than adopting a "deploy first, negotiate later" approach.

These four recommendations form a closed loop with the scenario stratification obligations of Section 7.

## § 7. Five Boundary Conditions and the Engineering Obligation of Scenario Stratification

### § 7.1 B1: How Countries with Weak ID Systems Substitute for L3

World Bank ID4D 2023 and 2024 updates show 830 million people globally without any ID document, with 47% concentrated in sub-Saharan Africa, 25% in South Asia, and 10% in Southeast Asia.[^87] For these countries, the L3 (strong passport root) approach does not apply. Four paths offer L3 alternatives.

(i) Multi-rooted fallback: accepting multiple weak roots simultaneously (community attestation, employer attestation, educational institution attestation), but at the cost of the dispersed attack surface documented in GG18 / GG19.[^88]
(ii) Community root: Rwanda's Umuganda monthly community meetings and Kenya's M-Pesa social-economic network as weak identity roots.[^89]
(iii) Cross-national credential piggyback: UNHCR credentials issued to stateless persons and refugees, as cross-national personhood proof alternatives.[^90]
(iv) Scenario stratification downgrade: when L3 is unavailable, providing downgraded L2 / L1 service rather than outright denial.

### § 7.2 B2: Four-Layer Lessons of Aadhaar

Aadhaar is neither a total failure nor a total success. Coverage of 1.3 billion constitutes a policy achievement of scale; reform has been effective but incomplete; exclusion errors remain 100% catastrophic for the most vulnerable individuals. These four layers correspond to four pieces of evidence.

**Strong-root engineering limits:** Even at 1.3 billion scale, duplicate registrations accumulate annually; the design objective of a strong root cannot achieve 100% success under scale pressure.[^91]

**Asymmetry of exclusion errors:** Drèze, Khera, and Somanchi's 2017 study of PDS exclusion rates in Jharkhand documented a range of 12–37%; the cost is borne by the most vulnerable individuals (the death of Santoshi Kumari in 2017—unable to collect food rations after Aadhaar authentication failure—is the embodiment of this asymmetry).[^92]

**Function creep:** Aadhaar gradually expanded from its original PDS subsidy distribution scenario to telecommunications real-name registration, taxation, banking, subsidies, pensions, and school enrolment. After the 2018 *Puttaswamy II* judgment restricted private-sector use, expansion into quasi-public services continued.[^93]

**Reform progress:** Following the 2018 judgment, UIDAI introduced mitigations including face authentication, Virtual ID, and offline Aadhaar; by 2023, PDS exclusion rates fell to 5–10%, still non-zero.[^94]

Aadhaar's lesson is not "strong roots are wholly wrong"; rather: "the political costs of a strong root exceed engineering expectations, and those costs fall asymmetrically on the most vulnerable individuals." This lesson directly constrains the deployment design of L3 schemes such as zkPassport and Worldcoin.

### § 7.3 B3: The Household Device-Sharing Counter-Test

Pew Research 2023 shows that the household device-sharing rate in the United States is 16%, rising to 27% among low-income households; UNICEF 2022 figures for developing countries range from 30 to 45%.[^95] Shared devices pose four categories of challenge for personhood proof.

(i) Passkey device-binding conflict: when a household shares a single phone, a personal passkey is equivalent to a household passkey.
(ii) Biometric enrolment conflict: multiple persons enrolling on the same device degrades Face ID / Touch ID accuracy.
(iii) Social-graph household clustering: social-graph systems such as BrightID treat household meetings as a single household cluster, making it difficult to distinguish individuals.
(iv) Behavioural-credit proxy operation: within a household, members with good credit operate accounts on behalf of others, undermining uniqueness testing.

Three design responses: household mode (explicitly recognising the household unit and providing intra-household individual-distinction mechanisms); scenario concession (reducing uniqueness requirements in household device-sharing scenarios); and community agent mode (vulnerable individuals authorise community agents to operate on their behalf). None is a perfect solution, but refusing to acknowledge the existence of device sharing renders the inclusion-axis costs hidden.

### § 7.4 B4: Multi-Rooted as a Conditionally Valid, Not Universal, Triangle Resolution

The multi-rooted approach is the core response to the counter-argument that "some scheme solves the triangle." The dispersal of the Gitcoin Passport GG18 / GG19 attack surface to multi-stamp resulted in attackers using the Holonym KYC stamp vulnerability as the primary entry point and ENS / POAP to augment their scores—ultimately allowing 5,427 to 30,000 Sybil addresses to pass the threshold.[^96] The Holonym KYC vulnerability points to the multi-rooted attack-surface structure in which "the weakest root determines overall strength."

PoH's Kleros juror-arbitration bottleneck represents another multi-rooted limitation: when the volume of disputed cases exceeds the juror pool's processing capacity, arbitration delay expands, and attackers can accumulate influence during the delay period.[^97] The BrightID + zkPassport dual-root concept provides some improvement on the disclosure axis but weakens the inclusion axis further (requiring both a passport and a social graph)—an asymmetric cost of dual roots.[^98]

Multi-rooted is a "conditionally valid" solution; the conditions include: independent attack surfaces for each root, a non-fatal weakest root, and no new side channels introduced by the combination of roots. These conditions are not automatically satisfied; designers must demonstrate that they hold.

### § 7.5 B5: The Cross-Jurisdictional Recognition Spectrum

Recognition performance across six jurisdictions is substantially asymmetric. The EU's eIDAS 2.0 (Regulation EU 2024/1183) mandates that member states accept the EUDI Wallet before 2026, covering all tiers from L0 to L3.[^99] Estonia's X-Road + smart-ID achieves 99% coverage, but the 2017 ROCA vulnerability affected 750,000 ID cards, revealing the systemic risk of a concentrated root.[^100] U.S. mDL (ISO/IEC 18013-5 + AAMVA Implementation Guidelines v1.4) has been deployed in fourteen states, with interstate and international mutual recognition still incomplete.[^101] India's DigiLocker surpassed 350 million registered users in 2024, serving as a supplementary entry point for Aadhaar.[^102] Taiwan's TW DIW roadmap for 2024–2026 was published by the National Development Council, with the citizen digital certificate as the strong root at the technical level.[^103] Indonesia's e-KTP, after the 2018 corruption scandal, has been supplemented by PeduliLindungi as a multi-signal fallback maintaining approximately 100 million users.[^104]

China's e-KYC and Hong Kong's PCPD constitute two comparison cases. China's internet real-name registration directly nationalises Sybil resistance tools, with individuals retaining no engineering unlinkability guarantees; Hong Kong's PCPD issued enforcement notices to Worldcoin in May 2024, taking a soft-regulatory path through personal data protection law.[^105] The same engineering scheme can face political costs differing by an order of magnitude across different jurisdictions.

### § 7.6 Seven Case Comparisons and Three Engineering Obligations

| Case | U axis | D axis | I axis | Structural cause |
|---|---|---|---|---|
| Aadhaar exclusion | Strong (1.3bn) | Weak (strong root + state centralisation) | Fractured (PDS 5–10% exclusion) | L3 strong-root inclusion asymmetry |
| Worldcoin in Kenya / Argentina | Strong | Weak (irreversible iris) | Weak (multi-country suspension) | Universal design objective + physical-layer irreversibility |
| GG18 / GG19 Sybil | Failed (30K Sybil) | Medium | Degraded (threshold raised post-remediation) | Multi-rooted = multi-rooted attack surface |
| Indonesia e-KTP scandal | Failed | Weak | Fractured | L3 strong root + low governance quality = weak root |
| Estonia smart-ID | Strong (99%) | Medium (strong identity binding) | Strong | Small country + political trust = full coverage vs. pseudonymous space trade-off |
| Indonesia PeduliLindungi | Medium (multi-signal) | Medium | Strong (fallback) | Multi-rooted fallback maintains inclusion |
| BrightID social graph | Weak | Medium (long-term social-graph exposure) | Medium | Meta-graph observation attack ineliminable |

The seven cases display at least five failure / success patterns (Aadhaar, Worldcoin, GG18 / GG19, e-KTP, and Estonia + PeduliLindungi). Avoiding these five patterns in scenario-stratified designs requires fulfilment of three engineering obligations.

(i) **Explicitly state "the fallback when L3 is unavailable":** when L3 is unreachable, provide concrete L2 / L1 alternatives and acknowledge their capability gap.
(ii) **Explicitly state "the relativity of L1 inclusion":** low L1 barriers do not equate to universality; coverage across the social-graph, device, and language dimensions must still be assessed.
(iii) **Explicitly state "the household device-sharing counter-test":** the handling of shared-device scenarios (household mode, scenario concession, agent mode) must be concretised in design documentation.

The three obligations are the minimum threshold of the scenario-stratification approach; missing any one of them causes the scheme to fall into the failure patterns of Section 7's seven cases.

## § 8. Conclusion: Triangle, Levels, and Boundaries

From Worldcoin to zkPassport, every personhood proof scheme has made trade-offs across the three axes U / D / I of the impossibility triangle IT'. This triangle shares a conjunctive structure with the three-wall argument H1' in article 03 and the three-element conjunction T in article 04, but operates at a different level: the first two are conjunctive necessary conditions—"missing one means failure"—while IT' is conjunctive maximisation unachievable—"all three cannot be simultaneously maximal."[^106] What CAP taught engineers is to make trade-offs explicit; what IT' teaches civic-technology practitioners is to stratify scenarios. The problem with Worldcoin's orb model is not that it chose the strong-U corner—that choice is not itself an error—but that it concealed the choice. Scenario stratification remains constrained by five boundary conditions (mobilisability in weak-ID-document countries, costs of Aadhaar's strong root, household device sharing, the three-axis asymmetry of multi-rooted approaches, and the cross-jurisdictional recognition spectrum); missing any one causes the scheme to fall into the failure patterns of Aadhaar exclusion, Worldcoin's regulatory setback, Gitcoin GG18 Sybil attacks, and the Indonesian e-KTP corruption scandal.

The connection to article 03 (*Freedom of Association × Digital Identity: An Empirical Test of Three Walls*) lies in the level differential of conjunctive structures: H1's three walls are constitutional-level conjunctive necessities, while IT' is engineering-level conjunctive maximisation unachievable. Both say "all three are needed," but the legal status of "all three" is entirely different. The connection to article 04 (*The Legal Foundations of Pseudonymous Public Participation*) lies in the sister structure of design choice: T's three-element conjunction (unlinkability ∧ accountability ∧ recoverability) is a conjunctive necessary condition at the legal-institutional level, while IT' is a conjunctive maximisation framework at the Sybil resistance engineering level. The CAP analogy is the shared design-choice sister structure of both articles.

The connection to prompt 11 (*Wallet as Essential Facility: Antitrust Application*) lies in the engineering conclusion of scenario-intensity stratification: a digital wallet serving as an essential facility should not impose a single personhood proof; wallets should support multi-level service combinations—L0 passkey, L1 social root, L2 multi-stamp, L3 strong passport root—with the required strength dynamically determined by scenario.[^107] The connection to prompt 15 (*Civic Proof Inclusion Rights: Alternative Paths Without a Wallet*) lies in L3 alternative paths: what the unbanked, undocumented, persons with disabilities, the elderly, and language minorities each need is not a "downgraded L3" but alternative schemes politically equivalent to L3 in legitimacy. Community roots, cross-national credential piggybacking, household mode, and community agent mode constitute the engineering draft of this alternatives catalogue.

Three limitations apply to the present analysis. First, measurement of the three IT' axes (U as upper bound on false positive rate, D as k-anonymity / differential privacy ε, I as population coverage rate) has not been formalised; the three-axis assessments of the five schemes are relative orderings derived from literature induction, not absolute quantifications. Second, the medium-strong strength of the CAP–IT' analogy is a middle-range characterisation of "sufficient for design guidance, insufficient for formal inference"; if IT' is elevated to the status of a theorem by future research, the analogy's strength would be upgraded, but for the present the authority of the CAP theorem cannot be borrowed. Third, the five boundary conditions were induced from the seven-case comparison; future new cases may yield a sixth or seventh boundary condition. The engineering obligations checklist for scenario stratification should expand as cases accumulate.

More than two decades ago, Douceur defined the Sybil attack as a single entity masquerading as multiple identities—an engineering proposition in distributed systems. Two decades later, this proposition has evolved, in the political contexts of Worldcoin, zkPassport, and Aadhaar, into a design-choice problem that civic-technology practitioners must confront. The triangle is not a theorem, but it is the coordinate system for design choice; what CAP gave engineers is the same gift.

## References

[^1]: Douceur, J. R. (2002). "The Sybil Attack." *IPTPS 2002*, LNCS 2429, 251–260. Source level A.

[^2]: Buterin, V., Ohlhaver, P., & Weyl, E. G. (2022). "Decentralized Society: Finding Web3's Soul." SSRN 4105763. Source level A.

[^3]: Worldcoin / Tools for Humanity (2023, 2025). *Worldcoin: A New Identity and Financial Network* whitepaper (two editions). Source level A.

[^4]: Office of the Data Protection Commissioner (Kenya) (2023-08-02). Suspension order on Worldcoin. Source level A.

[^5]: AEPD (Spain) (2024-03-06). Resolución PS/00120/2024. Source level A.

[^6]: ANPD (Brazil) (2025-01). Worldcoin suspension directive announcement. Source level A.

[^7]: PCPD (Hong Kong) (2024-05) enforcement notice; CNPD (Portugal) (2024-03) Deliberação 2024/124; BayLDA (Bavaria) (2023-12-20) press release on Worldcoin GDPR proceedings. Source level A.

[^8]: Drèze, J., Khera, R., & Somanchi, A. (2017). "Aadhaar and Food Security in Jharkhand." *Economic and Political Weekly*, 52(50), 50–59. Source level A.

[^9]: Supreme Court of India (2018). *Justice K. S. Puttaswamy (Retd.) v. Union of India*, (2019) 1 SCC 1. Source level A.

[^10]: UIDAI 2023 RTI data; Khera, R. (Ed.). (2019). *Dissent on Aadhaar: Big Data Meets Big Brother*. Orient BlackSwan. Source levels A / D.

[^11]: Trusta Labs (2023). *Gitcoin Passport Sybil Analysis Q3 2023*; Nansen (2024). *On-chain Analysis of Gitcoin GG19*. Source level B.

[^12]: Reuters (2018-04-24). "Indonesia e-KTP Corruption Case: Setya Novanto Convicted"; *Tempo* (Indonesia) 2017–2018 e-KTP scandal investigative reports. Source level B.

[^13]: Tools for Humanity / Worldcoin Foundation (2024–2025). *Privacy Documentation* (including five engineering documents: self-custody, orb-side destruction, Semaphore zk circuit, and others). Source level A.

[^14]: Tools for Humanity (2024-08). *IrisCode 2.0 Technical Brief*; (2024-11). *World ID Document Verification Specification*. Source level C.

[^15]: ICAO (2021). *Doc 9303: Machine Readable Travel Documents*, 8th edition. Source level A.

[^16]: Worldcoin Foundation (2023). *Worldcoin Whitepaper v2.0*; World ID Specification. Source levels A / C.

[^17]: Tools for Humanity (2024). *World ID 2.0 / Cloud Verifier* technical announcement; World Chain mainnet deployment technical reporting (*The Block* / *CoinDesk* 2024–2025). Source levels A / C.

[^18]: Worldcoin Foundation (2024). *World Whitepaper v3 draft*; Privacy International (2023). *Worldcoin: The Eye of Mass Surveillance*. Source level B.

[^19]: BrightID (2024-09 snapshot). Protocol documentation and yellowpaper. Source level C.

[^20]: Yu, H., Kaminsky, M., Gibbons, P. B., & Flaxman, A. (2006). "SybilGuard." *SIGCOMM 2006*. ACM; Yu, H., Gibbons, P. B., Kaminsky, M., & Xiao, F. (2008). "SybilLimit." *IEEE S&P 2008*. Source level A.

[^21]: Mohaisen, A., & Hopper, N. (2013). "Measuring the Mixing Time of Social Graphs." *NDSS 2013*. Source level A.

[^22]: Levine, B. N., Shields, C., & Margolin, N. B. (2006). "A Survey of Solutions to the Sybil Attack." University of Massachusetts Amherst technical report. Source level A.

[^23]: BrightID Forum / Discord governance discussions (2022–2024) and Aura design documentation. Source level D.

[^24]: Stamper, J. (2022). *Privacy Properties of Social Graph-Based Identity Systems*. MIT Master's thesis. Source level A.

[^25]: Gitcoin Passport / Human Passport (2024-12 snapshot). Documentation. Source level C.

[^26]: Holonym Foundation (2024-09). Acquisition of Gitcoin Passport announcement. Source level D.

[^27]: Trusta Labs (2023). *Gitcoin Passport Sybil Analysis Q3 2023*. Source level B.

[^28]: Nansen (2024). *On-chain Analysis of Gitcoin GG19*. Source level B.

[^29]: Holonym (2024). Holonym KYC Stamp Documentation; Gitcoin (2023–2024). GG18 / GG19 / GG20 retrospective posts and Sybil analyses. Source levels B / C.

[^30]: Allen, D., et al. (2023). "Sybil-Resistance via Subjective Verification." Preprint. Source level D.

[^31]: zkPassport (2024). Technical whitepaper. Source level C.

[^32]: Andolfo, A., Tognolini, et al. (2024). "zkPassport." IACR ePrint 2024/1377. Source level A.

[^33]: World Bank ID4D (2024). *ID4D Global Dataset Update 2024*; World Bank ID4D (2023). *Identification for Development Annual Report 2023*. Source level A.

[^34]: ICAO (2021). *Doc 9303: Machine Readable Travel Documents*, 8th edition; CSCA trust-root maintenance analysis in Andolfo et al. (2024), §§ 4–5. Source level A.

[^35]: Andolfo, A., Tognolini, et al. (2024). "zkPassport." IACR ePrint 2024/1377 (state-level Sybil discussion). Source level A.

[^36]: Proof of Humanity (2024-06). v2 launch documentation; Borge, M., et al. (2017). "Proof-of-Personhood: Redemocratizing Permissionless Cryptocurrencies." *IEEE EuroS&PW 2017*. Source levels A / C.

[^37]: PoH v2 launch documentation (2024-06). Source level C.

[^38]: Allen, D., et al. (2023). "Sybil-Resistance via Subjective Verification." Preprint (Kleros juror-pool centralisation analysis). Source level D.

[^39]: PSE Anon Aadhaar repository documentation (2024); Rarimo Foundation (2024). *RariMe technical brief*; Privado ID (2024). Protocol whitepaper. Source level C.

[^40]: Worldcoin / TFH (2024–2025). *Privacy Documentation*; Worldcoin Foundation Cayman Islands registered-foundation governance transparency. Source levels A / TODO-VERIFY.

[^41]: Holonym Foundation (2024-09). Acquisition of Gitcoin Passport announcement; Gitcoin Passport Documentation. Source levels C / D.

[^42]: Hill, K. (2023). *Your Face Belongs to Us*. Random House; Daugman, J. (2004). "How Iris Recognition Works." *IEEE Transactions on Circuits and Systems for Video Technology*, 14(1), 21–30. Source level A.

[^43]: Daugman, J. (2004). "How Iris Recognition Works." *IEEE Transactions on Circuits and Systems for Video Technology*, 14(1), 21–30. Source level A.

[^44]: Bowyer, K. W., Hollingsworth, K., & Flynn, P. J. (2008). "Image Understanding for Iris Biometrics: A Survey." *Computer Vision and Image Understanding*, 110(2), 281–307. Source level A.

[^45]: Hill, K. (2023). *Your Face Belongs to Us*. Random House; Hill, K. (2020). "The Secretive Company That Might End Privacy as We Know It." *New York Times*. Source level A.

[^46]: Selinger, E., & Hartzog, W. (2018). "The Inconsentability of Facial Surveillance." *Loyola Law Review*, 61(1); Privacy International (2023). *Worldcoin: The Eye of Mass Surveillance*. Source levels A / B.

[^47]: Stamper, J. (2022). *Privacy Properties of Social Graph-Based Identity Systems*. MIT Master's thesis; Borge, M., et al. (2017). "Proof-of-Personhood." *IEEE EuroS&PW 2017*. Source level A.

[^48]: Ibid. Source level A.

[^49]: Holonym Foundation (2024-09). Acquisition of Gitcoin Passport announcement; Gitcoin Passport Documentation transition period notes. Source levels D / C.

[^50]: Worldcoin Foundation Cayman Islands registration; Privacy International (2023). *Worldcoin: The Eye of Mass Surveillance*. Source levels B / TODO-VERIFY.

[^51]: World Bank ID4D & GSMA (2019). *Digital Identity and the Inclusive Economy*; UNHCR (2020). *Statelessness: An Analytical Framework*. Source level A.

[^52]: World Bank ID4D (2024). *ID4D Global Dataset Update 2024*. Source level A.

[^53]: Crawford, K., & Joler, V. (2018). *Anatomy of an AI System*. AI Now Institute & Share Lab; Rest of World Global South collection field-reporting series (2023–2025). Source levels B / C.

[^54]: Gitcoin (2023–2024). GG18 / GG19 / GG20 retrospective posts and Sybil analyses (threshold adjustment discussion). Source level B.

[^55]: Pew Research Center (2023). *Mobile Phone Sharing in U.S. Households*; UNICEF (2022). Global connectivity report. Source level B.

[^56]: UK ONS (2024). *Internet Users in the UK 2024*. Source level B.

[^57]: Sen, A. (1999). *Development as Freedom*. Knopf; Nussbaum, M. C. (2011). *Creating Capabilities*. Harvard University Press. Source level A.

[^58]: Solove, D. J. (2008). *Understanding Privacy*. Harvard University Press; Cohen, J. E. (2013). "What Privacy Is For." *Harvard Law Review*, 126; Nissenbaum, H. (2010). *Privacy in Context*. Stanford University Press. Source level A.

[^59]: Gilbert, S., & Lynch, N. (2002). "Brewer's Conjecture and the Feasibility of Consistent, Available, Partition-Tolerant Web Services." *ACM SIGACT News*, 33(2), 51–59. Source level A.

[^60]: Buolamwini, J., & Gebru, T. (2018). "Gender Shades: Intersectional Accuracy Disparities in Commercial Gender Classification." *PMLR*, 81, 1–15. Source level A.

[^61]: Goldwasser, S., Micali, S., & Rackoff, C. (1985). "The Knowledge Complexity of Interactive Proof Systems." *STOC 1985*. ACM; Camenisch, J., & Lysyanskaya, A. (2001). "An Efficient System for Non-transferable Anonymous Credentials with Optional Anonymity Revocation." *EUROCRYPT 2001*. Springer. Source level A.

[^62]: Trusta Labs (2023). *Gitcoin Passport Sybil Analysis Q3 2023*; Nansen (2024). *On-chain Analysis of Gitcoin GG19*. Source level B.

[^63]: Ohm, P. (2010). "Broken Promises of Privacy: Responding to the Surprising Failure of Anonymization." *UCLA Law Review*, 57, 1701–1777; Sweeney, L. (2002). "k-Anonymity: A Model for Protecting Privacy." *International Journal of Uncertainty, Fuzziness and Knowledge-Based Systems*, 10(5), 557–570. Source levels A / B.

[^64]: Cross-article conjunction structure connection with article 03 (*Freedom of Association × Digital Identity: An Empirical Test of Three Walls*, H1' three walls) and article 04 (*The Legal Foundations of Pseudonymous Public Participation*, T three-element conjunction). Source level: series-internal cross-article connection.

[^65]: Brewer, E. (2000). "Towards Robust Distributed Systems." *PODC 2000* keynote; Gilbert, S., & Lynch, N. (2002). Ibid. Source level A.

[^66]: Brewer, E. (2012). "CAP Twelve Years Later: How the 'Rules' Have Changed." *IEEE Computer*, 45(2), 23–29; Abadi, D. (2012). "Consistency Tradeoffs in Modern Distributed Database System Design (PACELC)." *IEEE Computer*, 45(2), 37–42. Source level A.

[^67]: Lynch, N. (1996). *Distributed Algorithms*. Morgan Kaufmann; Coulouris, G., Dollimore, J., Kindberg, T., & Blair, G. (2011). *Distributed Systems: Concepts and Design* (5th ed.). Pearson. Source level A.

[^68]: Hesse, M. (1966). *Models and Analogies in Science*. University of Notre Dame Press; Gentner, D. (1983). "Structure-Mapping: A Theoretical Framework for Analogy." *Cognitive Science*, 7(2), 155–170. Source level A.

[^69]: Vogels, W. (2009). "Eventually Consistent." *Communications of the ACM*, 52(1); Kleppmann, M. (2015). "A Critique of the CAP Theorem." arXiv:1509.05393. Source level B.

[^70]: Cavoukian, A. (2009). *Privacy by Design: The 7 Foundational Principles*. Information and Privacy Commissioner of Ontario; Cameron, K. (2005). "The Laws of Identity." Microsoft white paper. Source level B.

[^71]: Mundell, R. A. (1963). "Capital Mobility and Stabilization Policy Under Fixed and Flexible Exchange Rates." *Canadian Journal of Economics and Political Science*, 29(4), 475–485. Source level A.

[^72]: Buterin, V. (2017). "The Scalability-Security-Decentralization Trilemma." Ethereum Foundation blog. Source level B.

[^73]: Tinbergen, J. (1952). *On the Theory of Economic Policy*. North-Holland. Source level A.

[^74]: Worldcoin / TFH (2023, 2025). *Worldcoin: A New Identity and Financial Network* whitepaper; World ID 2.0 documentation; SDK integration announcements (Reddit / Discord / Match Group / Stripe Connect). Source level A.

[^75]: Daugman, J. (2004). "How Iris Recognition Works." *IEEE Transactions on Circuits and Systems for Video Technology*, 14(1), 21–30. Source level A.

[^76]: Hill, K. (2023). *Your Face Belongs to Us*. Random House. Source level A.

[^77]: Hoofnagle, C. J., King, J., Li, S., & Turow, J. (2012). "Behavioral Advertising: The Offer You Cannot Refuse." *Harvard Law and Policy Review*, 6, 273–296. Source level A.

[^78]: Bloomberg (2024–2025). Worldcoin token-economy reporting; *The Block* / *CoinDesk* (2024–2025). World Chain mainnet and L2 deployment. Source level C.

[^79]: Tools for Humanity (2024). *World ID 2.0 / Cloud Verifier* technical announcement; *MIT Technology Review* (2022–2024). Worldcoin investigative coverage. Source levels A / B.

[^80]: Office of the Data Protection Commissioner (Kenya) (2023-08-02); Communications Authority of Kenya (2023-08); Kenyan National Assembly Ad Hoc Committee (2023-09); AEPD (Spain) PS/00120/2024 (2024-03-06); AAIP (Argentina) (2024) investigation-initiation announcement; ANPD (Brazil) (2025-01); PCPD (Hong Kong) (2024-05); CNPD (Portugal) (2024-03) Deliberação 2024/124; BayLDA (Bavaria) (2023-12-20). Source level A.

[^81]: Council of Europe Convention 108+ (2018 amendment); EDPB Guidelines 05/2022 on the use of facial recognition technology in the area of law enforcement; EU Charter of Fundamental Rights, Arts. 11, 47. Source level A.

[^82]: Rest of World Global South collection field-reporting series (2023–2025); *Wired* (2023–2024). World ID and World App expansion series; *Reuters* (2023–2025). Worldcoin investigation series. Source level C.

[^83]: Crawford, K., & Joler, V. (2018). *Anatomy of an AI System*. AI Now Institute & Share Lab. Source level B.

[^84]: Kenyan National Assembly Ad Hoc Committee (2023-09). *Report on Worldcoin Activities in Kenya*. Source level A.

[^85]: Buolamwini, J., & Gebru, T. (2018). "Gender Shades." *PMLR*, 81, 1–15; Garvie, C. (2019). *Garbage In, Garbage Out: Face Recognition on Flawed Data*. Georgetown Law Center on Privacy and Technology. Source level A.

[^86]: Worldcoin / TFH (2024–2025). *Privacy Documentation*; ICO (UK) (2023-07). Worldcoin announcement; Buterin, V. (2023). "What do I think about biometric proof of personhood?" *vitalik.eth.limo* (personal blog). Source levels A / B.

[^87]: World Bank ID4D (2023). *Identification for Development Annual Report 2023*; World Bank ID4D (2024). *ID4D Global Dataset Update 2024*. Source level A.

[^88]: Trusta Labs (2023). *Gitcoin Passport Sybil Analysis Q3 2023*; Nansen (2024). *On-chain Analysis of Gitcoin GG19*; Gitcoin (2023–2024). GG18 / GG19 / GG20 retrospective posts. Source level B.

[^89]: Greenwood, D., Pentland, A., et al. MIT Connection Science SSI series; Allen, C. (2016). "The Path to Self-Sovereign Identity." *Life with Alacrity* (blog). Source levels D / B.

[^90]: UNHCR (2020). *Statelessness: An Analytical Framework*. Source level A.

[^91]: UIDAI 2023 RTI data; Banerjee, S., & Sharma, S. (2019). "Privacy Concerns with Aadhaar." *Communications of the ACM*, 62(11). Source level A.

[^92]: Drèze, J., Khera, R., & Somanchi, A. (2017). "Aadhaar and Food Security in Jharkhand." *Economic and Political Weekly*, 52(50), 50–59; Khera, R. (Ed.). (2019). *Dissent on Aadhaar: Big Data Meets Big Brother*. Orient BlackSwan. Source level A.

[^93]: Yadav, K. (2017). "Constitutionalising Aadhaar." *Economic and Political Weekly*, 52(45); Sen, R. (2018). "Aadhaar: Wrong Number, or Big Brother Calling?" *Asian Journal of Comparative Law*, 13(1), 85–114. Source level A.

[^94]: Supreme Court of India (2018). *Justice K. S. Puttaswamy (Retd.) v. Union of India*, (2019) 1 SCC 1; Access Now (2018–2024). Multiple reports on Aadhaar. Source levels A / B.

[^95]: Pew Research Center (2023). *Mobile Phone Sharing in U.S. Households*; UNICEF (2022). Global connectivity report; UNICEF (2023). *Birth Registration Data 2023*. Source levels B / A.

[^96]: See note 88 above.

[^97]: Allen, D., et al. (2023). "Sybil-Resistance via Subjective Verification." Preprint. Source level D.

[^98]: zkPassport (2024). Technical whitepaper; BrightID (2024-09 snapshot). Protocol documentation. Source level C.

[^99]: Regulation (EU) 2024/1183 (eIDAS 2.0). *Official Journal of the European Union*, L series, 2024-04-30. Source level A.

[^100]: OECD (2023). *Digital Government Review of Estonia*; e-Estonia (2024). *X-Road and smart-ID Documentation*. Source levels A / B.

[^101]: ISO/IEC 18013-5:2021; AAMVA (2024). *Mobile Driver's License Implementation Guidelines*, v1.4. Source level A.

[^102]: MeitY India (2024). *DigiLocker Annual Statistics 2024*. Source level B.

[^103]: National Development Council Taiwan 國發會 (2024). Digital wallet roadmap 2024–2026. Source level B.

[^104]: *Reuters* (2018-04-24). e-KTP corruption case; *Tempo* (Indonesia) 2017–2018 e-KTP scandal investigative reports; PeduliLindungi system public data. Source levels B / C.

[^105]: PCPD (Hong Kong) (2024-05). Enforcement notice; Privacy International. *State of Privacy* country profiles (2020–2024 updates). Source levels A / D.

[^106]: Cross-article conjunction structure connection with article 03 (*Freedom of Association × Digital Identity: An Empirical Test of Three Walls*) and article 04 (*The Legal Foundations of Pseudonymous Public Participation*). Source level: series-internal cross-article connection.

[^107]: ISO/IEC 27701:2019; W3C Verifiable Credentials Data Model 2.0; W3C (2022). *Decentralized Identifiers (DIDs) v1.0*. Source levels A / C.
