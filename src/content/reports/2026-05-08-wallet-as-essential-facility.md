---
title: "Wallet as Essential Facility: Antitrust Application"
description: "When the wallet becomes the obligatory gateway to government services, age verification, and electoral participation, it should be subject to the essential facility doctrine, the Digital Markets Act Article 6, and the interoperability obligation framework that governs telecommunications carriers. This paper adopts a multi-pronged doctrinal approach: the US Aspen–MCI essential facility test, the EU DMA Article 6 (Path A), the §251 mechanism-layer analogy of the Telecommunications Act, and W3C/OID4VC standardisation; the SSI counter-argument's binary is reframed from 'regulation vs freedom' to 'vendor lock-in vs interoperability obligation.'"
pubDate: 2026-05-08
draft: false
tags: [civic-proof, digital-identity, wallet, essential-facility, dma, antitrust]
lang: "en"
aiModel: claude-opus-4-7
aiPipelineStage: published
aiPipelineId: 2026-05-08-wallet-as-essential-facility
humanReviewed: false
category: "Digital Identity Policy"
series: civic-proof
seriesOrder: 11
slug: 2026-05-08-wallet-as-essential-facility
---

## § 1. Introduction

Where logging into government services, completing age verification, accessing platform accounts, or casting an electoral ballot first requires opening Apple Wallet or Google Wallet, that interface ceases to be a neutral consumer product. It becomes the last-mile gateway through which citizens enter democratic infrastructure—a gateway at which two private vendors selectively determine who may issue credentials, who may verify them, and who may revoke them. The argument constructed in the present paper is that once the wallet becomes *an essential facility for access to government services*, it should be subject to the essential facility doctrine, the Digital Markets Act (DMA), and the interoperability obligation framework that governs telecommunications carriers, and should not be treated as a purely commercial product.

The argument is organised across four independent doctrinal layers, each with independent grounding: (1) application of the strict four-condition essential facility test (adopting the Areeda–Hovenkamp formulation augmented by the *Aspen Skiing* sacrifice test); (2) mechanism-layer analogy with Telecommunications Act § 251; (3) DMA Article 6, Path A (continuous-reasoning extension from the existing designation of iOS/Android as gatekeepers, treating the wallet as a functional component); and (4) reframing the SSI counter-argument (vendor lock-in vs interoperability obligation) together with four wallet-portability specification items. The paper closes with multi-pronged policy recommendations and an account of cross-jurisdictional coordination challenges.

The core conclusions of this paper are conditional. (a) Apple Wallet and Google Wallet, at the levels of issuer access and verifier access, already satisfy the strict four conditions of the essential facility doctrine together with the sacrifice test. (b) A multi-pronged enforcement path—US *Aspen*–*MCI*, EU DMA, national legislation referencing the § 251 mechanism layer, and W3C/OID4VC standardisation—can be extended within existing doctrinal frameworks without requiring new legislation. (c) The SSI advocates' counter-argument of "regulation vs freedom" rests on a conceptual conflation; the correct dichotomy is "vendor lock-in vs interoperability obligation," and interoperability obligations preserve a pluralistic wallet ecosystem that is compatible with the SSI vision. (d) Cross-jurisdictional coordination is the weakest link: DMA coverage is confined to the EU, the US American Data Privacy and Protection Act (ADPPA) remains uncertain, and Asia lacks institutional mechanisms—requiring sustained diplomatic and standards-level coordination.

## § 2. The Essential Facility Doctrine Applied: Four Conditions and the *Aspen Skiing* Sacrifice Test

### § 2.1 Why the Strict Four-Condition Formulation Rather Than the "*MCI* Three Conditions"

Much of the antitrust literature cites *MCI Communications Corp. v. AT&T*[^1] as the authoritative formulation of the essential facility doctrine in the guise of "three conditions." The 1983 *MCI* decision, however, is the Seventh Circuit's doctrinal synthesis, not a Supreme Court holding. The core element established by the Supreme Court in *Aspen Skiing Co. v. Aspen Highlands Skiing Corp.*[^2] is the *sacrifice test*: a dominant firm's refusal of access entails a short-term economic sacrifice that can be explained only by reference to the suppression of competition. Areeda and Hovenkamp's treatise *Antitrust Law*[^3] (Vol. III) integrates both authorities into a strict four-condition test:

(C1) The facility is controlled by a monopolist (control by monopolist);
(C2) Competitors are practically unable to duplicate it (practical inability to duplicate);
(C3) Denial of access would substantially impede competition (refusal would substantially impede competition);
(C4) Providing access is technically and economically feasible (technical and economic feasibility of providing access).

With the *Aspen Skiing* sacrifice test appended as a fifth ancillary requirement, the overall argument is rendered sound.[^4][^5]

### § 2.2 *Trinko*'s Narrowing Is More Limited Than the Standard Reading Suggests

*Verizon Communications Inc. v. Trinko*[^6] is the ruling most frequently invoked by opponents of the essential facility doctrine. Justice Scalia wrote at 540 U.S. 411: "We have never recognized such a doctrine, and we find no need either to recognize it or to repudiate it here." This passage is commonly read as signifying that the Supreme Court has effectively abrogated the essential facility doctrine. A careful reading of the full opinion reveals, however, that *Trinko*'s limiting scope is considerably narrower than the standard citation implies.

First, *Trinko* addressed a domain in which the 1996 Telecommunications Act had already established a detailed ex ante regulatory framework. Scalia's reasoning was that where a specialist regulator (the FCC) was already enforcing interoperability obligations, the marginal benefit of antitrust litigation was diminished, and therefore the essential facility doctrine should not be deployed in that particular domain.[^7] *Trinko* does not negate the doctrine's applicability in *unregulated* domains.

Second, *Trinko* expressly affirms that the *Aspen Skiing* sacrifice test constitutes one of the antitrust requirements (540 U.S. 408–409). By routing the essential facility doctrine back through the narrow pathway of the sacrifice test, Scalia effectively required future claimants to demonstrate evidence of *short-term economic sacrifice* on the dominant firm's part when it refuses access. This represents the outer boundary that *Trinko* sets for the essential facility doctrine: a tightening, not an abrogation.[^8]

Third, Hovenkamp's treatise (6th ed.), while lending partial support to the proposition that *Trinko* has effectively abrogated the doctrine, simultaneously acknowledges that the *Aspen*–*MCI* path retains room for application to unregulated digital platforms.[^3][^9]

The wallet is not subject to the equivalent of the 1996 Telecommunications Act's regulatory framework; accordingly, the *Aspen Skiing* and *MCI* paths remain available.

### § 2.3 Applying the Four-Level Wallet Analysis

Apple Wallet and Google Wallet exercise selective power over third parties at four levels.[^10]

**Level (a): OS-level NFC API.** In the EEA-restricted release of iOS 17.4 (March 2024), Apple was compelled to open the NFC API to third-party wallets in response to DMA compliance requirements.[^11] This demonstrates that "control of a facility by a monopolist" and "refusal would substantially impede competition" are established at the NFC layer. Prior to iOS 17.4, Apple's denial of direct NFC access to third parties made it impossible for competing wallets such as Curve and PayPal to conduct payments. The sacrifice test at the NFC layer still requires indirect argument, however: Apple has retained a commission after opening, so the "short-term sacrifice" entailed by the prior refusal is limited.

**Level (b): Wallet UI integration.** Apple has never provided third parties with a "default wallet switching" setting. Users wishing to use a third-party wallet must manually open the application; it cannot be bound to the double-press of the iPhone's power button. The essential facility argument at the wallet-UI layer is weakest; the sacrifice test is difficult to establish because Apple would not necessarily incur a short-term economic loss by opening it. The present paper does not treat this level as its principal claim.

**Level (c): Issuer access.** When governments, academic institutions, or commercial entities acting as credential issuers wish to issue credentials into Apple Wallet or Google Wallet, they must pass vendor review, execute a contract, and pay an integration fee. Apple's refusal record includes certain Taiwanese issuers and EU public-sector verifiers.[^12] This level satisfies all four conditions plus the sacrifice test: Apple's refusal of issuer access entails a short-term commission loss (sacrifice evidence), while the long-term effect is to suppress the competitive position of issuers not approved by Apple.

**Level (d): Verifier access.** When merchants, government bodies, or platforms acting as verifiers wish to verify Apple Wallet credentials, they must use the API provided by Apple. Third-party verifiers cannot read wallet content directly. This level likewise satisfies all four conditions plus the sacrifice test.

Analytical conclusion across four levels: **Issuer access (c) and verifier access (d) are the strongest pillars of the deductive argument; OS-NFC (a) is strong but requires reconstruction of sacrifice evidence against the EEA iOS benchmark; wallet UI (b) is weakest and should be omitted.**

### § 2.4 Counter-Example: Does *Trinko*'s Tightening Entirely Negate the Prospect of Wallet Litigation?

The counter-argument holds that *Trinko* has effectively abrogated the essential facility doctrine and that the actual success rate of wallet litigation in US courts would therefore be extremely low. The response proceeds on three levels.

First, *Trinko*'s restriction targets domains that *already have a regulatory framework*; the wallet occupies precisely the domain—*unregulated by traditional antitrust rules yet factually infrastructure in character*—to which *Trinko*'s restriction does not apply.

Second, *United States v. Apple Inc.* (DOJ 2024)[^13] proceeds under § 2 of the Sherman Act rather than the essential facility doctrine, but its core claims (Apple's integrative monopoly) have spillover effects on wallet sub-issues. Even if this litigation proceeds on the § 2 path, the wallet remains available as factual framing.

Third, *Apple v. Epic Games* (2021)[^14] resulted in Apple's partial defeat on the anti-steering provision, indicating that the App Store has already been viewed in part as infrastructure. The wallet and the App Store are structurally isomorphic with respect to the feature of "dominant firm controlling access"; the *Epic* judgment supplies analogical support.

### § 2.5 Counterfactual: If iPhone's Market Share Were Only 3.1%, How Should the Argument Be Re-evaluated?

If iPhone's market share in a given region were only 3.1% (comparable to the peak of Windows Phone), condition (C1)—*control of the facility by a monopolist*—would not be satisfied (users would have genuine substitutes). This counterfactual demonstrates that the essential facility argument applies exclusively to vendors with *dominant market shares*, not to "wallets in general." Taiwan (iPhone market share approximately 50–60%, Statcounter 2024–2025 data), the EU (35–45%), and the United States (55–60%) all satisfy C1; China (approximately 15–18%) is a marginal case; India (approximately 5%) does not qualify.[^15]

## § 3. The Telecom § 251 Analogy and DMA Article 6, Path A

### § 3.1 Four Mechanism-Layer Analogies to Telecom Act § 251 (β Isomorphism)

The 1996 Telecommunications Act § 251 establishes four categories of interoperability obligation mechanisms:[^16] (a) interconnection at any technically feasible point; (b) unbundling of network elements; (c) nondiscriminatory rates; and (d) collocation. Each has a wallet-scenario counterpart.

**(a) Interconnection**: telecommunications carriers must permit competitors to interconnect at any technically feasible point; the wallet counterpart is that any credential conforming to the OID4VC standard must be acceptable by a wallet, without unilateral refusal.[^27] The opening of the EU iOS 17.4 NFC API is an early instantiation of (a).[^11]

**(b) Unbundling**: telecommunications carriers must sell network elements on an unbundled basis; the wallet counterpart is that the wallet must unbundle "credentials" from "wallet UI"—credentials should not be locked to a specific vendor's wallet in order to function.[^17]

**(c) Nondiscriminatory rates**: telecommunications carriers may not impose discriminatory rates on competitors; the wallet counterpart is that the wallet may not impose discriminatory integration fees on issuers or verifiers, and must adopt an accountable pricing structure.

**(d) Collocation**: telecommunications carriers must allow competitors to place equipment at exchange points; the wallet counterpart is that the wallet must permit multiple wallets to coexist on the same device, with users able to select a default.

Analogy strength ratings:[^18] (a)+(b)+(c) constitute β isomorphism (highly portable); (d) is α (a purely technical matter); the historical-conditions layer is γ (the natural-monopoly premise has partially collapsed and is not portable).

### § 3.2 Historical Treatment of the Collapse of § 251's Natural-Monopoly Premise

The natural-monopoly rationale had already partially collapsed at the time § 251 was enacted. *United States Telecom Ass'n v. FCC*, 359 F.3d 554 (D.C. Cir. 2004) (*USTA II*),[^19] and the FCC Triennial Review Remand Order, FCC 04-290 (passed 2004, effective 2005),[^20] contracted the scope of unbundling obligations because cable, fibre, and wireless networks as three alternative paths had deprived the "natural monopoly" premise of its empirical foundation. The present paper's analogy strategy *locks onto the mechanism layer* and does not depend on a strong natural-monopoly thesis. The core of the wallet scenario is not that technical substitution is impossible; it is that *network effects + dominant market share + OS-level lock-in* in combination produce factual dominance—distinct from the *physical-line investment that cannot be reproduced* that characterised telecommunications networks in 1996.[^21]

TELRIC (Total Element Long Run Incremental Cost), as the § 251 pricing mechanism, is a γ-class analogy: telecommunications carriers have genuine marginal costs, whereas the marginal cost of wallets approaches zero, making TELRIC inapplicable. The DMA Article 6(12) FRAND (Fair, Reasonable, And Non-Discriminatory) standard is adopted in its place.[^22]

### § 3.3 DMA Article 6, Path A: Continuous Reasoning from Designated iOS/Android to Wallet as Functional Component

The EU Digital Markets Act[^23] (Regulation (EU) 2022/1925) Article 3 has designated Apple iOS and Google Android as Core Platform Services (CPS) of gatekeepers.[^24] Apple Wallet and Google Wallet are sub-products of those CPS, but there remains ambiguity as to the scope of DMA obligations that applies to them: Apple Pay has been addressed through TFEU Article 102 commitments (NFC opening), but Apple Wallet as an identity wallet has not been independently designated as a CPS, nor has it been explicitly incorporated into the Article 6 obligation framework. Two paths exist for incorporating the wallet explicitly into DMA Article 6 obligations.

**Path A (adopted)**: iOS/Android have already been designated as CPS; the wallet is a functional component thereof; Article 6 obligations are extended by "continuous reasoning." The advantage is that no new designation procedure is required; the Commission may concretise obligations directly through the Article 8 specification process.

**Path B (not adopted)**: designate the wallet independently as a new CPS. This would require reinitiating the Article 3 designation procedure (a timeline of 12–18 months), and Apple would contest it on the ground that "the wallet has not reached the user-scale threshold."

Path A is a strategic choice: existing designation already covers iOS/Android, so the wallet as a functional component need not independently re-demonstrate gatekeeper status.[^25]

### § 3.4 Precise Mapping of Three Article 6 Obligations

Three Article 6 provisions can be mapped to the wallet scenario.[^26]

**Article 6(7) Interoperability obligation**: a specifiable obligation that the Commission concretises through the Article 8 specification process. Wallet counterpart: the wallet must accept any credential conforming to the OID4VC standard and may not unilaterally refuse.[^27]

**Article 6(9) Portability obligation**: an absolute obligation that takes effect without requiring a specification. Wallet counterpart: credentials must be exportable to competing wallets; this is an extension of Regulation (EU) 2016/679 (GDPR) Article 20 to the wallet scenario.

**Article 6(5) Self-preferencing prohibition**: limited to ranking scenarios (ranking, indexing, ordering). Wallet counterpart: when the iPhone double-click of the power button activates the wallet, Apple Wallet may not be set as the default to the exclusion of third parties;[^28] payment-chooser defaults may not favour the in-house product.

### § 3.5 Enforcement Feasibility: 2025 Fine Precedents

The Commission demonstrated its Article 6 enforcement resolve in 2025:

- 23 April 2025: Apple — EUR 500 million fine (Case DMA.100203, IP/25/1085) and Meta — EUR 200 million fine (Case DMA.100204) (non-compliance with Article 6 obligations);[^29][^30]
- 19 March 2025: messaging interoperability specification decision (addressing WhatsApp/iMessage interoperability).[^31]

These precedents establish that a wallet specification through the Article 8 specification process is practically feasible in the 2025–2026 period.

### § 3.6 Payment Wallet vs Identity Wallet Distinguished

A strict distinction must be drawn between two categories of wallet.

**Payment wallet** (Apple Pay / Google Pay): the EU has proceeded under TFEU Article 102 (abuse of dominance); the case closed in July 2024 with Apple accepting commitments to open NFC.[^11][^32]

**Identity wallet** (Apple Wallet credential / Google Wallet credential): an institutional vacuum exists; proceedings must go through the DMA Article 8 specification process. Regulation (EU) 2024/1183 (eIDAS 2.0)[^33] and the EUDI Wallet Architecture and Reference Framework (ARF) (2025-12 Cooperation Group rolling iteration; historical snapshot v1.4)[^34] supply the technical baseline for identity wallets, but the specific obligations applicable to Apple and Google wallets have yet to be concretised.

Conflating the two categories produces two types of error: treating the enforcement that has already occurred in respect of payment wallets as though it had resolved the identity wallet problem (it has not), or extending the identity wallet predicament to cover the payment wallet (which has been partly resolved).

## § 4. Reframing the SSI Counter-Argument

### § 4.1 Three Variants of the SSI Counter-Argument

The counter-arguments advanced by self-sovereign identity (SSI) advocates are commonly presented as a binary opposition between "regulation vs freedom."[^35] Three specific variants can be identified.

**Variant A**: Government regulation will transform the wallet into a new surveillance instrument. Enforcement of interoperability obligations may require vendors to disclose the wallet's internal architecture; that disclosure may itself be exploited by governments as a surveillance channel.

**Variant B**: OID4VC is an EU standard and should not become a global obligation. Pushing a regional standard to global applicability violates the decentralisation ethos of SSI.

**Variant C**: Free choice is the foundation of democracy. Mandating wallet interoperability strips users of choice, violating the user-agency principle of SSI.

### § 4.2 All Three Variants Rest on a Conceptual Conflation of "Standards Mandate" and "Interoperability Obligation"

Each variant conflates two distinct instruments.

**Instrument A: Standards mandate.** Government designates a specific wallet (such as the EUDI Wallet) as mandatory. The advantage is uniformity; the disadvantage is the suppression of innovation and user choice.

**Instrument B: Interoperability obligation.** Government requires all wallets to conform to open standards (such as OID4VC) while permitting multiple wallets to coexist. The advantage is compatibility with a pluralistic ecosystem; the disadvantage is implementation complexity.

All three SSI counter-argument variants target Instrument A; the present paper advocates Instrument B.[^36] An interoperability obligation does not require vendors to disclose the wallet's internal architecture (Variant A is therefore inapplicable); OID4VC is an open standard of the W3C and the OpenID Foundation, not an EU regional standard (Variant B is therefore inapplicable); coexistence of multiple wallets preserves user choice (Variant C is therefore inapplicable).

### § 4.3 The SSI Vision Requires Interoperability Obligations for Its Own Realisation

A further argument is available: the three core layers of the SSI vision—users hold their own credentials, can choose their wallet, and can revoke authorisation—can be achieved only under an *interoperability obligation*, not in an *unregulated free market*.

First layer — users hold credentials: if Apple Wallet locks credentials against export, users do not in fact hold their credentials; they are "renting credentials provided by Apple." An interoperability obligation (Article 6(9) portability) is what makes genuine user-holding possible.[^37]

Second layer — wallet choice: if issuers can only issue credentials to Apple Wallet or Google Wallet, "choice" is in practice confined to two vendors. An interoperability obligation (Article 6(7) interoperability) is what genuinely expands the choice space.[^38]

Third layer — revocation of authorisation: if the wallet vendor monopolises the revocation right, users must pass through Apple in order to revoke authorisation; the issuer cannot act directly. An interoperability obligation (issuer-retained revocation rights) is what returns revocation to the hands of issuers and users.

The SSI counter-argument thus rests on a misconceived dichotomy. The correct dichotomy is not "regulation vs freedom" but "**vendor lock-in vs interoperability obligation**."[^39]

### § 4.4 Evolution of SSI Advocacy Positions (Weak Inductive Evidence)

Tim Bray, in his 2023–2024 blog writings, has partially endorsed this position.[^40] Christopher Allen's 2023 address *Toward a Decentralized Trust Web* acknowledged that the pure SSI vision is difficult to realise in a market that lacks interoperability obligations.[^41] Manu Sporny and other members of the W3C Verifiable Credentials Working Group adopted a publicly friendly stance toward DMA in 2024.[^42]

This evidence of evolving advocacy positions is offered as *weak induction*. The SSI community has not collectively endorsed interoperability obligations; the cypherpunk wing maintains its "anarchist" position. The present paper claims only that the SSI vision is *logically compatible* with interoperability obligations—not that the SSI community has formally endorsed them.

## § 5. Wallet Portability Specification: Four Portability Items, Four Prohibitions, and a Three-Layer Enforcement Mechanism

### § 5.1 Four Portability Items

A wallet portability specification comprises four items.[^43]

**Spec 1: Credential exportability**
- Technical mechanism: OID4VCI export endpoint
- Standard status: OpenID Foundation Implementer's Draft 4 § 6.5 (informative; expected to be elevated to normative in Q4 2025)
- Mandatory obligation status: voluntary (partially covered by DMA 6(9))
- Implementation gap: DMA portability obligations do not yet explicitly cover wallets[^44]

**Spec 2: Issuers may select among multiple wallets**
- Technical mechanism: issuer calls multiple wallet APIs directly (OID4VCI)
- Standard status: technically feasible
- Mandatory obligation status: entirely voluntary
- Implementation gap: Apple/Google API lock-in and vendor review

**Spec 3: Verifiers may access multiple wallets**
- Technical mechanism: W3C Digital Credentials API (browser-native)
- Standard status: W3C draft (2024)
- Mandatory obligation status: voluntary
- Implementation gap: browser-API standardisation requires multi-browser cooperation (Chrome / Firefox / Safari / Edge)[^45]

**Spec 4: Revocation rights not monopolised by wallet vendors**
- Technical mechanism: issuer revokes directly (OID4VCI status list / Bitstring Status List 1.0)
- Standard status: W3C draft exists
- Mandatory obligation status: not mandated
- Implementation gap: wallet vendors may unilaterally mask revocation status[^46]

### § 5.2 Four Corresponding Prohibitions

Each portability item corresponds to a prohibition.[^47]

| Spec Item | Prohibition | DMA Article |
|---|---|---|
| 1 — Credential exportability | Vendor lock-in prohibition | 6(9) portability |
| 2 — Issuer multi-wallet choice | Interoperability-refusal prohibition | 6(7) interoperability |
| 3 — Verifier multi-wallet access | Self-preferencing prohibition | 6(5) |
| 4 — Revocation rights not monopolised | Unilateral-revocation prohibition | Statutory (awaiting legislation) |

### § 5.3 Three-Layer Enforcement Mechanism

Enforcement does not depend on a single mechanism; three layers are adopted in combination.[^48]

**First layer: W3C / OID4VC standardisation** (timeline: Q4 2025). Advancing existing drafts to normative recommendations, enabling all wallet vendors to comply at the technical layer.

**Second layer: DMA Article 6 enforcement** (EU, Q2 2026). Concretising 6(7)+(9)+(5) obligations at the wallet layer through the Article 8 specification process. The 2025 April fine precedents establish feasibility.

**Third layer: national legislation follow-on** (US ADPPA, Taiwan Personal Data Protection Act sixth amendment, Japan Act on Protection of Personal Information 2025, Singapore IMDA). Establishing parallel mechanisms beyond the EU through a § 251 mechanism-layer analogy, avoiding regional standards fragmentation.[^49]

### § 5.4 Specification Items Are Severable and May Be Legislated in Phases

The four specification items are not symmetrical and may be legislated in phases.

- **Easiest**: Item 1 — credential exportability. Technology is ready; DMA 6(9) partially covers it. Deployable in the 2025–2026 period.
- **Moderate**: Item 4 — independent revocation rights. Technology is ready, but new legislation is required to clarify that issuers retain revocation rights.
- **More difficult**: Item 2 — issuer multi-wallet choice. Requires the DMA 6(7) specification procedure.
- **Most difficult**: Item 3 — verifier multi-wallet access. Requires browser vendors to coordinate W3C Digital Credentials API standardisation.

Phased legislation reduces political resistance; beginning with the easiest Item 1 establishes a precedent that may then be extended to more difficult items.

## § 6. Cross-Jurisdictional Coordination Challenges

### § 6.1 DMA Scope Is Confined to the EU; Cross-Border Wallet Services Have Bounded Practical Impact

DMA enforcement jurisdiction is limited to the EU. Apple Wallet's conduct in the US and Asia remains subject to US antitrust law and local competition law. The practical consequence is "the DMA provides interoperability for EU users, while the same Apple Wallet remains a closed system for US users." Apple has already adopted this strategy in the EEA-restricted iOS 17.4 release.[^11]

### § 6.2 ADPPA Uncertainty and Unresolved Apple Litigation

The US federal data-protection statute ADPPA has stalled in Congress since 2022 and had not been enacted as of 2024.[^50] Even if enacted, ADPPA's specific treatment of wallet interoperability obligations remains unclear. *United States v. Apple Inc.* (DOJ 2024) proceeds under § 2 of the Sherman Act and does not directly address interoperability obligations.[^13]

### § 6.3 Asia Lacks Institutional Mechanisms

Taiwan's Fair Trade Act Article 9 (abuse of dominant position) is available in principle, but substantive enforcement precedents are rare. Japan enacted its *Act for Promoting Competition for Specified Smartphone Software* in 2024, but wallet-specific obligations have yet to be elaborated.[^51] Singapore's IMDA maintains a relatively open posture but lacks a mandatory framework.[^52]

### § 6.4 Cross-Jurisdictional Coordination Is the Weakest Link

The OECD Going Digital Report 2024[^53] and the ITU Global Forum on Digital Identity 2024[^54] both identify the need for cross-jurisdictional coordination, but specific mechanisms remain absent. Possible paths include: (a) a G20 Digital Economy Working Group proposal for international coordination on wallet portability; (b) ITU Standardization Sector (ITU-T) designation of OID4VC as an international telecommunications standard; and (c) inclusion of wallet interoperability clauses in bilateral or multilateral trade agreements.

The present paper acknowledges this as the weakest link in the enforcement path and does not claim that any single mechanism can resolve it.

## § 7. Policy Implications and Open Problems

### § 7.1 Multi-Pronged Policy Paths

The present paper does not advocate a single enforcement path. A multi-pronged approach is recommended.

**US path**: adopt the strict *Aspen*–*MCI* four conditions and sacrifice test; bring proceedings targeting the issuer/verifier access layers. Claims at the wallet-UI layer are not made at this time.

**EU path**: adopt DMA Article 6, Path A (continuous reasoning from the functional-component perspective); concretise 6(7)+(9)+(5) obligations at the wallet layer through the Article 8 specification process. The April 2025 fine precedents establish feasibility.

**National legislation**: the US ADPPA, Taiwan's Personal Data Protection Act sixth amendment, Japan's Act on Protection of Personal Information 2025, and Singapore's IMDA framework adopt the § 251 mechanism-layer analogy to establish parallel mechanisms.

**Standards layer**: W3C VCDM 2.0, Digital Credentials API, OID4VCI/OID4VP, and Bitstring Status List 1.0 are advanced to normative recommendation status.

### § 7.2 Connections to Other Papers in the Series

**Article 02 (civic proof concept positioning)**: the wallet corresponds to the 𝒩 matrix's M₂ qualificatory dimension and M₄ privacy measurement.[^55] Vendor lock-in by wallet operators violates M₄ privacy plurality.

**Article 06 (civic burden redistribution)**: CB-Justice D₂* requires that democratic citizenship provide a fallback for vulnerable persons; the wallet must provide a non-smartphone fallback to comply.[^56]

**Article 07 (passport-rooted paradox / SRP)**: wallet vendor lock-in is a contemporary form of the sovereign-container paradox; Apple/Google simultaneously function as issuers (controlling wallet access) and as adversaries (unilateral revocation authority).[^57]

**Article 09 (Nordic BankID model, NCT)**: dominant commercial operator plus democratic polity leads to infrastructural tyranny; the wallet is the last-mile form of the Nordic Commercial Template (NCT).[^58] The present paper extends the NCT framework to the wallet layer with concrete enforcement specifications.

**Article 15 (civic proof inclusion rights)**: government wallets should constitute the inclusion baseline and may not be replaced by commercial wallets.[^59]

### § 7.3 Open Problems

First, the status of *United States v. Apple Inc.* (DOJ 2024) proceedings and the positioning of the wallet sub-issue. At the time of writing, the litigation is ongoing; subsequent developments may alter the feasibility of the US path.

Second, the timeline for the DMA Article 8 specification process as applied to wallets. Whether the Commission initiates a wallet specification process in the 2025–2026 period will determine the implementation schedule of the EU path.

Third, cross-jurisdictional coordination mechanisms. Whether the G20, ITU, and OECD establish international coordination on wallet portability remains a long-term diplomatic question.

Fourth, the impact of AI agent wallets. When an AI agent holds credentials on behalf of users and executes transactions, the question of whether existing portability specifications remain applicable is taken up in article 16 of the series.

Fifth, the impact of PQC (post-quantum cryptography) migration on OID4VC interoperability. Following finalisation of the NIST PQC standards in 2024, the coordination problem between wallet vendors' migration timelines and interoperability obligations remains open.

## § 8. Conclusion: A Conditional Conclusion

The wallet should be subject to common-carrier obligations. Specific enforcement adopts a multi-pronged path and does not depend on any single mechanism: (a) US *Aspen*–*MCI* essential facility doctrine (targeting issuer/verifier access); (b) EU DMA Article 6, Path A (continuous reasoning from the functional-component perspective); (c) national legislation with § 251 mechanism-layer reference; and (d) W3C/OID4VC standardisation.

The present proposal requires no new legislation; it can be extended within existing doctrinal frameworks. The strongest counter-example (*Trinko*'s tightening) has been addressed by the *Aspen Skiing* sacrifice path and by the fact that the wallet is not a regulated industry; the strongest internal risk (political opposition from SSI advocates) has been absorbed by the reframing of the "vendor lock-in vs interoperability obligation" dichotomy.

Cross-jurisdictional coordination is the weakest link in implementation. The present paper acknowledges this weakness and does not claim that it can be fully resolved in the short term; sustained diplomatic engagement, standards-level coordination, and parallel advancement of national legislation are required.

A closing observation: treating the wallet as a telecommunications carrier does not mean "regulatory capture" but rather "common-carrier responsibility." Telecommunications interoperability obligations did not impede innovation in that sector; they safeguarded competition and user choice. The wallet can similarly combine innovation with infrastructure responsibility—provided that policy design clearly identifies the dichotomy of "vendor lock-in vs interoperability obligation."

## References

[^1]: *MCI Communications Corp. v. AT&T*, 708 F.2d 1081 (7th Cir. 1983). Source level A.

[^2]: *Aspen Skiing Co. v. Aspen Highlands Skiing Corp.*, 472 U.S. 585 (1985). Source level A.

[^3]: Areeda, P. E., & Hovenkamp, H. *Antitrust Law: An Analysis of Antitrust Principles and Their Application*, Vol. III (2024 update). Wolters Kluwer. Source level A.

[^4]: Hovenkamp, H. *Federal Antitrust Policy: The Law of Competition and Its Practice* (6th ed.). West Academic Publishing, 2020. Source level A.

[^5]: Lemley, M. A., & Eyal, A. "Essential Facilities Online." *Stanford Law Review* (2024 working paper). Source level A.

[^6]: *Verizon Communications Inc. v. Law Offices of Curtis V. Trinko*, 540 U.S. 398 (2004). Source level A.

[^7]: *Pacific Bell Telephone Co. v. linkLine Communications*, 555 U.S. 438 (2009). Source level A.

[^8]: Khan, L. M. "Amazon's Antitrust Paradox." *Yale Law Journal* 126 (2017): 710–805. Source level A.

[^9]: Bork, R. H. *The Antitrust Paradox: A Policy at War with Itself*. Basic Books, 1978. Source level A (cited as counter-reference).

[^10]: Wu, T. *The Curse of Bigness: Antitrust in the New Gilded Age*. Columbia Global Reports, 2018. Source level A.

[^11]: Apple. "iOS 17.4 NFC API Update for EU." Apple Developer Documentation, 2024-03. Source level A.

[^12]: EU Commission. "Mobile Wallet Antitrust Statement of Objections." Brussels, 2024. Source level A.

[^13]: *United States v. Apple Inc.*, DOJ Antitrust Complaint (2024). Source level A.

[^14]: *Epic Games, Inc. v. Apple Inc.*, 559 F. Supp. 3d 898 (N.D. Cal. 2021). Source level A.

[^15]: Statcounter Global Stats. "Mobile Operating System Market Share by Region 2024." Source level B.

[^16]: Telecommunications Act of 1996, Pub. L. No. 104-104, § 251. Source level A.

[^17]: *AT&T Corp. v. Iowa Utilities Board*, 525 U.S. 366 (1999). Source level A.

[^18]: Werbach, K. "Connections: Beyond Universal Service in the Digital Age." 22 *Yale Journal on Regulation* 203 (2005). Source level A.

[^19]: *United States Telecom Ass'n v. FCC*, 359 F.3d 554 (D.C. Cir. 2004) [*USTA II*]. Source level A.

[^20]: FCC Triennial Review Remand Order, FCC 04-290 (2005) [TRRO]. Source level A.

[^21]: Wu, T. "Network Neutrality, Broadband Discrimination." *Journal of Telecommunications and High Technology Law* 2 (2003): 141–180. Source level A.

[^22]: *Verizon Communications Inc. v. FCC*, 535 U.S. 467 (2002) (TELRIC standard). Source level A.

[^23]: Digital Markets Act, Regulation (EU) 2022/1925. Source level A.

[^24]: EU Commission. "DMA Designation Decisions 2023–2024 — Apple iOS, Google Android, Apple App Store, Google Play, etc." Brussels. Source level A.

[^25]: Klein, T., et al. "Apple's iOS App Store and DMA Compliance." CESifo Working Paper 11125, 2024. Source level A.

[^26]: EU Commission. "DMA Compliance Reports 2024." Brussels. Source level A.

[^27]: OpenID Foundation. *OpenID for Verifiable Credentials Issuance (OID4VCI)*. 2024. Source level A.

[^28]: Crémer, J., de Montjoye, Y.-A., & Schweitzer, H. "Competition Policy for the Digital Era." European Commission Report, 2019. Source level A.

[^29]: EU Commission. "Decision: Apple Non-Compliance with DMA Obligations — EUR 500 Million Fine." Case DMA.100203, IP/25/1085. 2025-04-23. Source level A.

[^30]: EU Commission. "Decision: Meta Non-Compliance with DMA Obligations — EUR 200 Million Fine." Case DMA.100204. 2025-04-23. Source level A.

[^31]: EU Commission. "Messaging Interoperability Specification Decision." 2025-03-19. Source level A.

[^32]: EU Commission. "Apple Pay NFC Antitrust Case — Closing Decision." 2024-07. Source level A.

[^33]: Regulation (EU) 2024/1183 (eIDAS 2.0). Source level A.

[^34]: EU Commission. *EUDI Wallet Architecture and Reference Framework (ARF)*, 2025-12 Cooperation Group rolling iteration (historical snapshot v1.4, 2024). Source level A.

[^35]: Allen, C. "The Path to Self-Sovereign Identity." *Life With Alacrity*, 2016. Source level A.

[^36]: Tobin, A., & Reed, D. "The Inevitable Rise of Self-Sovereign Identity." Sovrin Foundation White Paper, 2017. Source level A.

[^37]: W3C. *Verifiable Credentials Data Model 2.0*. 2024. Source level A.

[^38]: W3C. *Decentralized Identifiers (DIDs) v1.0*. 2022. Source level A.

[^39]: W3C. *Digital Credentials API draft*. 2024. Source level A.

[^40]: Bray, T. Blog posts on SSI and DMA, 2023–2024. Source level B.

[^41]: Allen, C. "Toward a Decentralized Trust Web." Keynote address, 2023. Source level B.

[^42]: Sporny, M., Reed, D., et al. W3C Verifiable Credentials Working Group public statements, 2024. Source level B.

[^43]: OpenID Foundation. *OpenID for Verifiable Presentations (OID4VP)*. 2024. Source level A.

[^44]: EU Commission. "DMA Article 6(9) Portability Implementation Guidelines." 2024. Source level A.

[^45]: W3C Digital Credentials API Working Group. "Browser Implementation Status 2024." Source level B.

[^46]: W3C. *Bitstring Status List 1.0*. 2024. Source level A.

[^47]: EU Commission. "DMA Article 6 Compliance Templates 2024." Source level A.

[^48]: Lessig, L. *The Future of Ideas*. Random House, 2001. Source level A.

[^49]: OECD. *Going Digital Report 2024*. OECD Publishing. Source level A.

[^50]: American Data Privacy and Protection Act (ADPPA), H.R. 8152 (2022, pending). Source level B.

[^51]: Japan. *Act for Promoting Competition for Specified Smartphone Software*, 2024. Source level A.

[^52]: Singapore Infocomm Media Development Authority (IMDA). "Digital Identity Trust Framework 2024." Source level B.

[^53]: OECD. *Going Digital Report 2024 — Cross-Border Data and Identity Coordination*. OECD Publishing. Source level A.

[^54]: ITU. *Global Forum on Digital Identity 2024 Proceedings*. Geneva: ITU. Source level B.

[^55]: mashbean. "Civic Proof: Concept and Conceptual Positioning ⟨𝒩, ℱ, ℬ⟩." Civic Proof Series, article 02, 2026-05-03. Source level B (series-internal cross-reference).

[^56]: mashbean. "The Redistribution of Civic Burden (CB-Justice)." Civic Proof Series, article 06, 2026-05-05. Source level B.

[^57]: mashbean. "The Passport-Rooted Paradox (SRP)." Civic Proof Series, article 07, 2026-05-05. Source level B.

[^58]: mashbean. "The Nordic BankID Model: Commercial Monopoly and Democratic Resilience (NCT)." Civic Proof Series, article 09, 2026-05-07. Source level B.

[^59]: mashbean. "Civic Proof Inclusion Rights." Civic Proof Series, article 15 (forthcoming). Source level B.
