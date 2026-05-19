---
title: "The Legal Foundations of Pseudonymous Public Participation: A Doctrinal Reconstruction from Whistleblower Protection to the Sealed Indictment"
description: "Constitutional democratic regimes have already recognised, across five independent legal domains, the paradigm of 'routine pseudonymity combined with ex post conditional unsealing' as a legitimate and stable institutional form. Extracting the conditional clauses of whistleblower protection statutes, John Doe litigation, sealed indictments, anonymous donation ceilings, and witness security programmes yields a three-element institutional template T = (Trigger, Authority, Remedy), which admits analogical transplantation into four civic-proof scenarios and can be refined into a first draft of a five-clause legal-contract specification. The deficit is not legal-instrument scarcity but the absence of a technical-legal interface specification; deployment, however, remains subject to five boundary conditions. This paper constitutes the first legal-pillar article of the doctoral research programme and formally articulates with articles 01 / 02 / 03 through the three-element conjunctive structure."
pubDate: 2026-05-04
tags: ["civic-proof", "pseudonymity", "whistleblower-protection", "sealed-indictment", "John-Doe-litigation", "WITSEC", "campaign-finance", "legal-contract-spec", "threshold-cryptography", "doctoral-research"]
category: "Civic Pseudonymity and Legal Pillars"
aiModel: "Claude Opus 4.7"
aiPrompt: "Which existing legal institutions have already recognised routine anonymity combined with ex post accountability? Can the conditional clauses of these institutions be extracted as institutional templates and transplanted into digital civic-proof scenarios? Is the deficiency a shortage of legal instruments, or is it the lack of a contract specification linking technology and law?"
aiPipelineStage: "final"
aiPipelineId: "research-publishing-pipeline/2026-05-04-pseudonymous-participation-legal"
aiGeneratedDate: 2026-05-04
humanReviewed: false
lang: "en"
slug: "2026-05-04-pseudonymous-participation-legal"
---


## § 1. Introduction

Recognition of pseudonymous participation within constitutional democratic regimes runs considerably deeper than common intuition suggests. Whistleblower protection statutes, John Doe litigation, sealed indictments, anonymous donation ceilings, and witness security programmes span five legal domains—criminal, civil, administrative, electoral, and administrative-management. Although their surface subject matter diverges, their underlying skeleton points to a single paradigm: *routine pseudonymity combined with ex post conditional unsealing*. By "routine pseudonymity" is meant that the role in question is, in the default state of the relevant institution, under no obligation to disclose its true identity to a particular counterparty. By "ex post conditional unsealing" is meant that the pseudonym in question may, upon satisfaction of pre-specified conditions, be required to be revealed by an authorised principal, with attendant procedures for complaint and redress.[^1] This paradigm itself constitutes the normal state of institutional design, not an exceptional safety valve.

This observation carries direct implications for the engineering implementation of digital civic proof. The current generation of civic-technology tools—online petitions, forum verification badges, internal accountability within political associations, sensitive consultation and whistleblowing platforms—repeatedly encounters a recurrent argumentative bottleneck: how to preserve participants' pseudonymous continuity while ensuring group-level ex post accountability.[^2] One common engineering manoeuvre is to claim that cryptographic primitives (zero-knowledge proofs, threshold cryptography, accountable group signatures) are already technically feasible and that the only remaining step is awaiting corresponding legislation.[^3] The direction of argument adopted here is the reverse. The supply of legal instruments is not deficient; what is lacking is the work of extracting the conditional clauses of existing institutions into transferable templates and articulating them with engineered systems through explicit contractual interfaces.[^4]

Four layered questions organise this paper. First, which existing legal institutions have already recognised routine pseudonymity combined with ex post accountability, and what is their common skeleton? Second, can this common skeleton be formalised into a minimal necessary condition? Third, can the formalised structure be analogically transplanted into the specific engineering scenarios of civic proof? Fourth, under which conditions does such transplantation fail, and which scenarios are simply unsuitable? The corresponding core thesis may be stated as follows. Constitutional democratic regimes have, through historical sedimentation across multiple legal domains, recognised the paradigm of "pseudonymity combined with ex post conditional unsealing"; its skeleton can be formalised as the three-element conjunctive structure T = T.Trigger ∧ T.Authority ∧ T.Remedy; this structure admits analogical transplantation into four civic-proof scenarios and can be distilled into a first draft of a five-clause legal-contract specification; but deployment remains subject to five boundary conditions, failure of any one of which collapses the design into the Reality Winner / WITSEC / Twitter Doe pattern.[^5]

Four boundary stipulations must be flagged at the outset. First, pseudonymity is not synonymous with absolute anonymity. The five institutions examined here all preserve "pseudonymity with respect to a specific counterparty *combined* with ex post identifiability with respect to at least one authorised principal."[^6] Treating whistleblower protection statutes as synonymous with "anonymous reporting" directly violates the explicit identity-management designs of 5 U.S.C. § 2302 and EU Directive 2019/1937.[^7] Second, paper-level institutional recognition does not equal effective deployment. Of corrective-action petitions handled by the U.S. Office of Special Counsel (OSC) in FY2023, final prevailing rates before the MSPB have for years remained below five per cent; whistleblower-redress procedures in Taiwan's Dalin-Pu relocation case have been protracted for more than four years; the transposition deadline for the EU Whistleblower Directive 2019/1937 was December 2021, yet by early 2024 nine member states still had not completed domestic transposition and were subject to Commission infringement procedures.[^8] Third, the questions of key custody and unsealing authority are matters of political economy, not pure technology. The FEC, with its three-three partisan composition, is structurally prone to deadlock; although a sealed indictment is nominally determined by the grand jury and the court, courts in practice deny prosecutors' sealing motions only at extremely low rates; the U.S. Marshals Service (USMS) and the DOJ, the two principals administering WITSEC, both sit within the executive branch, with limited internal-supervision chains.[^9] Fourth, the passage from legal precedent to civic-proof engineering is analogical inference, not structural isomorphism. The strength of the analogy depends upon the simultaneous satisfaction of three conditions: identical adversarial objectives, identical normative-constraint combinations, and identical failure modes.[^10]

The remainder of the paper proceeds as follows. § 2 surveys the five existing legal institutions and extracts their common skeleton. § 3 formalises that skeleton as the three-element conjunctive structure T = (Trigger, Authority, Remedy) and articulates the isomorphism claim with the three-walls hypothesis H1' of article 03. § 4 verifies the filling capacity of the three-element template against each of the five institutions. § 5 transplants the three-element structure analogically into four civic-proof scenarios (α online petitions, β forum verification badges, γ internal accountability within political associations, δ sensitive consultation and whistleblowing). § 6 advances a five-clause legal-contract specification in draft form. § 7 uses four failure / success cases and a five-jurisdiction comparison to delimit five boundary conditions and addresses inapplicable scenarios. § 8 concludes by applying the closing form and articulating connections with articles 01 / 02 / 03 and prompts 11 / 14.

## § 2. The Historical Sedimentation of Five Existing Legal Institutions

The first institution is the whistleblower protection statute. At the U.S. federal level, 5 U.S.C. § 2302 (Whistleblower Protection Act 1989, as amended by WPEA 2012) establishes anti-retaliation protection for public-sector disclosures of unlawful conduct.[^11] Sarbanes-Oxley § 806 (18 U.S.C. § 1514A) extends comparable protection to listed companies, channelling complaints through the existing OSHA anti-retaliation procedure.[^12] Dodd-Frank § 922 (15 U.S.C. § 78u-6) adds bounty provisions in the securities-regulatory domain and strengthens identity confidentiality.[^13] At the EU level, Directive (EU) 2019/1937 adopts a three-tier escalation—internal channel → competent authority → public disclosure—and required member states to complete transposition by December 2021.[^14] Germany's Hinweisgeberschutzgesetz 2023 and France's Loi Sapin II (enacted 2016, amended 2022) are two representative transpositions.[^15] Japan's Public Interest Whistleblower Protection Act (enacted 2004; substantially amended 2020) follows a more inward-facing internal-reporting pathway.[^16] Taiwan's draft Whistleblower Protection Act has failed to pass third reading across multiple legislative sessions and constitutes a salient gap in this institutional history.[^17]

The skeleton of whistleblower protection statutes may be restated as a five-element structure: "reporting channel + anti-retaliation + conditional identity confidentiality + complaint channel + redress channel." The SEC's and OSC's intake offices treat reporter identities as confidential by default, yet such confidentiality is not absolute: identity may be required to be revealed by an authorised principal when the case enters judicial proceedings, when the reporter testifies, or when judicial investigation so requires.[^18] The Reality Winner case (*United States v. Winner*, S.D. Ga. No. 1:17-CR-00034 (2017)) is a classic instance in which this paradigm failed at the level of media intermediation. Winner conveyed NSA documents to *The Intercept*; the outlet failed to detect the microdot tracking pattern (commonly known as "yellow dots") embedded in laser-printer output and, in the course of fact-checking, handed the original to government officials, leading to Winner's rapid identification and indictment under the Espionage Act.[^19] The structural locus of failure lies at the institutional, not the executional, level: the institution had not designed a secondary Authority for media intermediaries. When a whistleblower discloses information through a journalist rather than a governmental intake window, the Authority element of the three-element template is *de facto* borne by the media, yet without corresponding metadata-handling norms or redress pathways.[^20]

The second institution is the unmasking-procedure protection of John Doe litigation. *Doe v. Cahill*, 884 A.2d 451 (Del. 2005), articulated a five-factor test, requiring the plaintiff to notify the anonymous defendant, to advance *prima facie* evidence, to demonstrate substantial harm to the plaintiff, to show that disclosure of identity is necessary to obtain redress, and to balance freedom of expression against the interest in disclosure.[^21] *Dendrite International v. Doe No. 3*, 775 A.2d 756 (N.J. Super. App. Div. 2001), set out a four-step procedural test.[^22] *Doe v. 2theMart.com*, 140 F. Supp. 2d 1088 (W.D. Wash. 2001), proposed a factor test that placed greater weight on platform-intermediary obligations.[^23] *In re Anonymous Online Speakers (Mobilisa v. Doe)*, 661 F.3d 1168 (9th Cir. 2011), adopted a compromise standard at the Ninth Circuit appellate level.[^24] The Reporters Committee for Freedom of the Press's 2024 survey records adoption of the *Cahill* five-factor test in twelve or more states.[^25]

The defining structural feature of John Doe litigation is procedural front-loading: substantive evidentiary thresholds must be cleared prior to any unmasking. The court (not the plaintiff) bears the role of Authority; motions to quash provide a complaint channel; reverse fee recovery for vexatious litigation supplies a redress channel.[^26] Yet the multi-jurisdictional divergence across standards (*Cahill* five factors, *Dendrite* four steps, *Mobilisa* factor test) creates incentives for forum shopping. *Glassdoor v. Andra Group, LP*, 27 N.Y.3d 1062 (2017), and *Music Group Macao Commercial Offshore Ltd. v. Does* (N.D. Cal. 2014), illustrate the divergence: the former applies the more demanding *Cahill* pathway, the latter a looser procedure.[^27] Volokh's 2017 synthesis shows that plaintiffs will select the most favourable forum, rendering the race-to-the-bottom risk genuine.[^28]

The third institution is the sealed indictment. Federal Rules of Criminal Procedure, Rule 6(e), establishes the confidentiality obligation of grand-jury proceedings, with violations sanctionable as contempt of court.[^29] The Federal Judicial Center's nationwide study (Reagan & Timm, 2009) indicates that approximately eighteen per cent of federal criminal cases between 1979 and 2009 were sealed at some stage.[^30] 28 CFR § 50.9 sets the DOJ's internal sealing policy. *Press-Enterprise Co. v. Superior Court*, 478 U.S. 1 (1986), establishes the First Amendment presumption of procedural openness, requiring sealing to satisfy strict scrutiny.[^31] *Douglas Oil Co. v. Petrol Stops Northwest*, 441 U.S. 211 (1979), establishes the "particularised need" standard for disclosure of grand-jury records.[^32]

The skeleton of the sealed indictment is "conditional sealing + third-party superintendence (grand jury + court) + media-intervention complaint channel + Rule 6(e) contempt redress." But the Authority element exhibits structural weakness in practice. *Andrew Miller v. United States*, 18-3052 (D.C. Cir. 2019), and related cases show that courts deny sealing motions only at extremely low rates; the grand jury is nominally independent yet in practice has its agenda set by the prosecutor; for the media to intervene against sealing, it must first know that a sealed case exists, but that very information is frequently rendered inaccessible by the sealing itself.[^33] The formal feature of "third-party superintendence" can thus be substantially diluted, at the political-economic level, by the prosecutor's agenda-setting power.

The fourth institution is the constitutional framework of anonymous campaign contributions. *Buckley v. Valeo*, 424 U.S. 1 (1976), established the parallel of disclosure obligations with small-donor exemptions.[^34] The Bipartisan Campaign Reform Act of 2002 (BCRA, Pub. L. 107-155) tightened disclosure requirements for large contributions.[^35] *Citizens United v. FEC*, 558 U.S. 310 (2010), and *Doe v. Reed*, 561 U.S. 186 (2010), further affirmed the constitutionality of disclosure obligations, the latter addressing the presumption of publicity for referendum-petition signatures.[^36] *NAACP v. Alabama ex rel. Patterson*, 357 U.S. 449 (1958), supplied the reverse exemption: where disclosure would generate substantial retaliatory risk, the disclosure obligation itself is unconstitutional.[^37] *Americans for Prosperity Foundation v. Bonta*, 594 U.S. ___ (2021), 141 S. Ct. 2373, reaffirmed the *NAACP* lineage by invalidating California's compelled disclosure of nonprofit donor lists.[^38]

The skeleton of the anonymous-contribution structure is "anonymity below a threshold + statutory threshold or *NAACP* exemption + FEC / IRS dual oversight + administrative complaint + monetary penalty / election-cancellation redress." The FEC's political-economic design flaw is the most frequently criticised aspect of this institution. With six commissioners drawn equally from the two major parties and a four-vote threshold for important determinations, either party can block adverse investigations; Hasen's 2016 *Plutocrats United* and Briffault 2015 argue that this design has, in effect, rendered a substantial volume of grey-zone "dark money" donations effectively unaccountable.[^39] OpenSecrets' 2024 estimate places the cumulative dark-money inflow into federal elections since *Citizens United* (2010) at over USD 1.8 billion.[^40]

The fifth institution is the witness security programme. The Witness Security Reform Act 1984 (18 U.S.C. §§ 3521–3528) provides the statutory basis for WITSEC.[^41] USMS data record more than 19,300 cumulative protectees, with the agency asserting that no protectee who complied with confidentiality terms has been killed.[^42] Earley & Shur 2002, *WITSEC*, offers an internal-perspective institutional history.[^43] But the "none killed" datum requires rigorous interpretation. WITSEC defines "rule compliance" narrowly: any breach of the confidentiality memorandum (such as revealing one's new identity to family members, or returning to a former residence) suffices to exclude that case from the "institution effective" statistic.[^44] The DOJ Office of the Inspector General's Audit Report 05-15 (2005) documented deficiencies in WITSEC's supervisory chain; Pelisek 2014, *In Plain Sight*, and Maas 2003, *Underboss*, recorded the leakage and disorder evidenced in cases such as those of Marvin Bryan and Sammy Gravano.[^45] Brann 2013, in *Stanford Law Review* 65, systematically traces WITSEC's litigation immunity from its own misconduct: the discretionary-function exception of the Federal Tort Claims Act (28 U.S.C. § 2680(a)) forecloses most lawsuits against WITSEC for negligence.[^46] *Ziglar v. Abbasi*, 137 S. Ct. 1843 (2017), and *Egbert v. Boule*, 142 S. Ct. 1793 (2022), further narrowed the residual space for *Bivens* actions against executive-branch agencies for misconduct.[^47]

Distilling the five institutions yields a common skeleton of five conditions. First, pseudonymity or conditional anonymity functions as the institutional default, not as exception. Second, unsealing is conditional and requires an explicit trigger. Third, unsealing authority is concentrated neither in the plaintiff nor in the defendant, and is allocated to a third party that is neither directly plaintiff nor defendant. Fourth, unsealing decisions are subject to complaint procedures. Fifth, erroneous unsealing or unauthorised disclosure attracts redress and sanction. These five conditions recur across five independent legal domains through historical sedimentation and constitute the empirical basis for the "pseudonymity combined with ex post accountability" paradigm.[^48]

## § 3. Formalisation of the Three-Element Conjunctive Structure

Abstracting from the foregoing five conditions yields the three-element conjunctive structure T = T.Trigger ∧ T.Authority ∧ T.Remedy. This is a conjunctive structure: all three elements must obtain simultaneously; failure of any one element collapses the template.[^49]

T.Trigger comprises three sub-clauses. First, *objective determinability*: the trigger condition must be capable of textual adjudication by a neutral third party, without reliance on internal discretion. Second, *prospective specification*: the condition must already exist within written norms prior to the disclosure event, foreclosing retroactivity. Third, *germaneness to the protected interest*: the trigger may not be arbitrarily linked to unrelated grounds and must bear direct relation to the interest the institution seeks to protect.[^50] Sunstein 1997, *Free Markets and Social Justice*, on the rules-versus-standards distinction, supplies the normative basis for the first sub-clause.[^51] Bingham 2010, *The Rule of Law*, on prospectivity, supplies the basis for the second.[^52]

T.Authority comprises three sub-clauses. First, *independence from the parties*: the Authority may not be unilaterally controlled by plaintiff, defendant, or government. Second, *reviewability*: the Authority's decisions must be subject to review by a higher tribunal or external body. Third, *auditable record*: the Authority's procedures must leave a record amenable to inspection.[^53] Tyler 1990, *Why People Obey the Law*, and Tyler & Huo 2002, *Trust in the Law*, provide empirical support for these three sub-clauses, with the four indicators of procedural justice (neutrality, trust, dignity, voice) mapping onto Authority's independence, reviewability, and auditability.[^54] *Klass and Others v. Germany*, ECtHR (1978), and *Roman Zakharov v. Russia*, ECtHR [GC] (2015), expressly identified these three sub-clauses, in the context of state covert surveillance, as the minimum threshold of Convention compatibility.[^55]

T.Remedy comprises three sub-clauses. First, *concrete grievance channel*: affected parties must be able to lodge complaints through a procedural avenue. Second, *substantive redress*: redress must exceed the merely declaratory and include specific categories—monetary compensation, identity restoration, judgment vacatur, and the like. Third, *separation of complainant and gatekeeper*: the body before which an affected party complains must not be the same body that decided the unsealing.[^56] Rakoff 2014, *Designing Constitutional Remedies*, classifies remedies into compensatory, preventive, and declaratory types, and argues that declaratory remedies frequently fail to generate institutional constraint in practice.[^57] *Bivens v. Six Unknown Named Agents*, 403 U.S. 388 (1971); *Carlson v. Green*, 446 U.S. 14 (1980); and *Davis v. Passman*, 442 U.S. 228 (1979), together constitute the doctrinal thread of the proposition that "without substantive remedy there is no right."[^58]

Three qualifications warrant emphasis. The three-element structure is a normative claim, not an empirical description. The observation that "many actually existing institutions are imperfect" does not refute the structure; nor does satisfaction of the three elements suffice for institutional success—the three elements constitute only a *minimal necessary condition*. Case-specific deployment requires additional reinforcing clauses (limitation periods, evidentiary standards, third-party intervention mechanisms).[^59] It must also be stated that the present paper extracts a common skeleton from five institutional samples; N = 5 is an empirical regularity, not a theorem. § 7 addresses failure modes under sample expansion, and subsequent doctoral chapters will pursue verification with N ≥ 10.

The "fail-on-one" feature of the conjunctive structure may be confirmed by three counter-cases. Where T.Trigger is missing, whistleblowers cannot ex ante ascertain whether they fall within protection, and the institution degenerates into ex post gambling. The Espionage Act's broad construction of "national defense information" in the Reality Winner case rendered the trigger condition effectively unpredictable for the whistleblower, with a direct chilling effect on disclosure.[^60] Where T.Authority is missing, unsealing authority is unilaterally held by a party or by government, and the institution degenerates into unilateral identification. China's Cybersecurity Law § 24, with its online real-name regime, and the Data Security Law § 35, with its broad authorisation for state-agency data requisition, jointly render "pseudonymity combined with ex post accountability" effectively unrealisable;[^61] the ECtHR in *Roman Zakharov v. Russia* expressly held that Russia's surveillance regime, for want of an independent Authority, contravened Article 8 of the ECHR.[^62] Where T.Remedy is missing, institutional trust collapses and affected parties tend to refrain from reporting or participating. In the Russell Sage empirical data of Tyler & Huo 2002, institutional trust returned a regression coefficient on active participation of β = 0.41, identifying it as a core predictor.[^63]

The relationship between the three-element conjunctive structure and the three-walls hypothesis H1' of article 03 requires clarification. Article 03 reformulates the observation of "strong assembly, weak association" into the three-walls conjunctive structure H1' = ¬F ⇔ W1 ∧ W2 ∧ W3, where W1 is the persistent-pseudonymity wall (tool layer), W2 is the verifiable-group-boundary wall (institutional layer), and W3 is the internal-accountability wall (governance layer).[^64] The present T-structure and H1' three-walls are isomorphic, but operate at different levels. Article 03's three walls address the conditional bundle on civic-proof engineering in scenarios of scaled association; the T-structure here addresses the minimal necessary condition for legal recognition of pseudonymous participation. The two are isomorphic with respect to conjunctive structure and the fail-on-one property, with corresponding mappings between W2 / W3 and T.Authority / T.Remedy. But isomorphism is not structural identity: T is the deductive base of the legal institution; H1' is the deductive extension into engineering implementation. Movement from T to H1' is analogical inference, with strength contingent upon the filling verification in § 5 and the boundary conditions in § 7.

## § 4. Filling Verification of the Three-Element Template Against the Five Institutions

Applying T = (Trigger, Authority, Remedy) to each of the five institutions both verifies the filling capacity of the conjunctive structure and surfaces each institution's structural weaknesses.

For whistleblower protection statutes, T.Trigger is "reasonable belief of violation + entry into judicial procedure"; T.Authority is the OSC and the courts (in the EU context, the three-tier competent-authority structure of the Whistleblower Directive); T.Remedy is reinstatement, back pay, and punitive damages.[^65] The three elements are formally complete, but the OSC's longstanding sub-five-per-cent final prevailing rate exposes the political-economic fragility of T.Authority: the OSC's caseload capacity and political will fluctuate sharply with term, budget, and partisan turnover.[^66] The nine-state EU transposition delay reflects the cross-jurisdictional predictability problem affecting T.Trigger and T.Authority alike.[^67]

For John Doe litigation, T.Trigger is the *Cahill* five factors / *Dendrite* four steps / *2theMart* factor test; T.Authority is the adjudicating court; T.Remedy is motion to quash plus the recovery regime for vexatious litigation.[^68] The three elements are formally complete, but the multi-jurisdictional divergence across the *Cahill* / *Dendrite* / *Mobilisa* standards undermines the prospective specification of T.Trigger; the contrast between *Glassdoor* and *Music Group Macao* shows that an identical pattern of facts may be subjected to different thresholds depending on forum.[^69]

For sealed indictments, T.Trigger is "Rule 6(e) grand-jury procedure + 28 CFR § 50.9 DOJ internal policy"; T.Authority is the grand jury and the court; T.Remedy is Rule 6(e) contempt plus media intervention.[^70] The three elements are formally complete, but the low denial rate of prosecutors' sealing motions, combined with the fact that sealed cases are by definition not known to the media, undermines the independence of T.Authority and the actionability of T.Remedy in practice.[^71]

For anonymous campaign contributions, T.Trigger is "BCRA + *Buckley* disclosure thresholds + *NAACP* / *Bonta* exemption"; T.Authority is the FEC and the IRS; T.Remedy is administrative complaint, monetary penalty, and election cancellation.[^72] The three elements are formally complete, but the FEC's bipartisan-deadlock structure renders T.Authority difficult to exercise in politically sensitive matters; the scale of dark-money inflows estimated by OpenSecrets demonstrates that T.Trigger's adjudicative thresholds have, in light of LLC and 501(c)(4) entity-piercing structures, been *de facto* nullified.[^73]

For WITSEC, T.Trigger is "trial testimony + breach of MOU"; T.Authority is USMS + DOJ + the courts; T.Remedy is "relocation + compensation (limited to the MOU framework)."[^74] The three elements are formally complete, but the co-location of USMS and DOJ within the executive branch constrains the independence of T.Authority; the FTCA discretionary-function exception and *Bivens* narrowing render T.Remedy effectively non-actionable against USMS / DOJ for their own misconduct.[^75]

The filling verification across all five institutions converges on a common observation. Institutional-design completeness of the three elements does not entail deployment-level effectiveness; in all five institutions, a gap obtains between paper recognition and empirical deployment, and the gap traces in each case to political-economic erosion of T.Authority's independence and T.Remedy's actionability.[^76] This observation lays the deductive ground for the five boundary conditions of § 7.

## § 5. Analogical Transplantation into Four Civic-Proof Scenarios

The three-element template will now be analogically transplanted into four civic-proof scenarios. It must first be emphasised that "analogical transplantation" is not "structural isomorphism"; the adversarial objectives, normative-constraint combinations, and failure modes of the five legal institutions do not precisely coincide with those of civic-proof engineering. The strength of each analogy depends on the goodness of fit between filling and failure modes in each scenario.[^77]

Scenario α concerns online petitions and referenda. The most directly relevant legal precedent is *Doe v. Reed*, 561 U.S. 186 (2010), addressing the presumption of publicity for referendum-petition signatures, together with California Constitution Article II § 8 and Swiss *Bundesverfassung* Arts. 138–139 on initiative thresholds.[^78] T.Trigger transfers directly: attainment of the signature threshold triggers the referendum procedure, an objectively determinable condition; but supplementary Sybil-resistance clauses are required (to prevent a single identity from signing multiple times under multiple pseudonyms). T.Authority requires substantial modification: an electoral commission, as sovereign authority, can bear the role, but cross-jurisdictional referenda (international organisations, transborder citizen initiatives) require multisig cross-jurisdictional coordination and GDPR articulation, which existing institutions do not directly cover. T.Remedy transfers directly: signatures erroneously excluded can be audited; a zk-SNARK can supply a zero-knowledge proof of "I signed but was not counted."[^79] Overall portability: moderate.

The recommended engineering direction is zk-SNARK + threshold opening (k-of-n, recommended n ≥ 5, k ≥ 3) + Census Authority Merkle tree. Vocdoni's census-authority design and Estonia's i-Voting audit reports provide partial engineering reference.[^80] But an endogenous tension between receipt-free design (Benaloh & Tuinstra 1994) and T.Remedy must be noted. Where voting is fully receipt-free, erroneously excluded signatures cannot be ex post verified; where receipts are provided, voting freedom is compromised.[^81] This tension renders the electoral-voting scenario representative of the inapplicable cases listed in § 7.

Scenario β concerns forum verification badges and pseudonymous identity. The most directly relevant precedents are the *Cahill* / *Dendrite* procedural protections of John Doe litigation.[^82] T.Trigger requires entirely new design: the *Cahill* five factors address "identity disclosure," whereas forum badge management addresses two distinct actions—"verification escalation" and "unmask request"—each of which requires its own trigger clause. T.Authority requires substantial modification: forum operators are not sovereign authorities and require quasi-legal duties to be injected via Terms of Service and fiduciary-duty clauses. T.Remedy transfers directly, but requires supplementation by a "harm-of-unmasking-itself" category. Even where the court ultimately holds the unmasking lawful, the chilling effect and reputational injury caused by the unmasking process should remain remediable.[^83] Overall portability: moderate.

The recommended engineering direction is DID (Decentralised Identifier) + W3C Verifiable Credentials Data Model 2.0 + selective disclosure (such as BBS+ signatures).[^84] Bluesky's AT Protocol and Kleppmann 2024 provide implementation references.[^85] But the subpoena-challenge rates documented in Twitter Transparency Report 2022 H1 show that when forum operators face judicial requests, the degree of challenge oscillates sharply with platform policy, situs law, and commercial interest—the political-economic weakness of T.Authority.[^86]

Scenario γ concerns internal accountability within political associations. The most directly relevant precedent is the dual-level principle of *NAACP v. Alabama*: outwardly, member identities are protected from state-compelled disclosure; inwardly, group-level accountability mechanisms are maintained.[^87] T.Trigger transfers most directly: triggers for internal accountability (breach of charter, conflict of interest, embezzlement) are mature at the organisational-law level. T.Authority transfers strongly: accountable group signatures (Chaum & van Heyst 1991; Camenisch & Stadler 1997) provide the cryptographic tool of "extra-group unlinkability with intra-group revealability,"[^88] but require political-economic reinforcement: key holders must be distributed across organisations and jurisdictions, or the design degenerates into "formal third-party." T.Remedy transfers directly and must be supplemented with cross-border forum-selection clauses.[^89] Overall portability: strong.

The recommended engineering direction is accountable group signature + threshold key (k-of-n proactive secret sharing) + DAO LLC wrapper (Wyoming DAO LLC Act, Swiss *Verein*, Marshall Islands DAO LLC).[^90] The critical caveat from article 01's W3 political-economic-accomplishment warning applies: cross-organisational key-holder distribution and a hard threshold constitute *institutional* accomplishments, not purely *technical* ones; WikiLeaks's early-stage *de facto* concentration of key custody and release control in Assange is a paradigmatic failure case of T.Authority concentration.[^91]

Scenario δ concerns sensitive consultation and whistleblowing. The most directly relevant precedents are the three-tier escalation of Sarbanes-Oxley, Dodd-Frank, and EU Directive 2019/1937.[^92] T.Trigger transfers strongly: SOX § 806's "reasonable belief of violation" and the Whistleblower Directive's three-tier escalation (internal → competent authority → public disclosure) are mature provisions. T.Authority transfers strongly: SecureDrop's multi-journalist threshold mechanism provides an engineering reference; the EU Directive requires member states to designate independent competent authorities. But political-economic reinforcement is required: newsroom culture must sustain metadata-handling discipline, or the design risks collapse into the Reality Winner pattern.[^93] T.Remedy transfers directly and must be supplemented with cross-border redress clauses (a routine scenario in journalist-source cross-border collaboration).[^94] Overall portability: strong.

The recommended engineering direction is Tor onion v3 + threshold GPG + air-gap workflow + cryptographic deletion log. SecureDrop, deployed across more than seventy news organisations, currently offers the most mature implementation reference.[^95] GlobaLeaks and OCCRP Aleph provide complementary tool lines.[^96] But it must be emphasised that SecureDrop's engineering completeness does not equate to metadata-discipline completeness. Boutet & Brown 2014 show that untrained newsrooms remain susceptible to the Reality Winner pattern: engineering tools cannot substitute for institutional support.[^97]

The portability assessment across the four scenarios is summarised below.

| Scenario | T.Trigger | T.Authority | T.Remedy | Overall portability |
|---|---|---|---|---|
| α Online petitions | Partial + Sybil supplement | Substantial modification + cross-jurisdictional multisig | Direct + erroneous-exclusion audit | Moderate |
| β Forum badges | Entirely new design | Substantial modification + contractual injection | Direct + harm-of-unmasking | Moderate |
| γ Association internal accountability | Most direct transfer | Strong + political-economic reinforcement | Direct + cross-border forum | Strong |
| δ Sensitive consultation / whistleblowing | Strong | Strong + political-economic reinforcement | Direct + cross-border supplementation | Strong |

The criterion for distinguishing strong from moderate portability is whether the T.Authority clause can be transplanted directly from existing legal precedent. The T.Authority clauses for γ and δ have corresponding institutional bases in *NAACP*, SOX, and the Whistleblower Directive, yielding relatively clear transplantation pathways; α and β require fresh design of T.Authority and additional engineering-legal interfacing.[^98] The four scenarios filled here correspond to article 02's four-scenario typology, constituting the deductive extension from article 02 to the present paper.[^99]

## § 6. The Legal-Contract Specification: Five Sub-Clauses

This section constitutes the core output of the paper. The foregoing analogical transplantation is concretised into a "legal-contract specification for the engineering implementation of pseudonymous civic proof," in draft form, comprising five sub-clauses. Scenario δ (whistleblowing) is used below as the filling example.

§ 6.1 *Template Declaration*. Each civic-proof service shall declare explicitly, in its Terms of Service and technical specification documents, the existing legal institution adopted as its three-element template. The declaration shall include three items: the corresponding legal precedent; an explicit non-claim of structural isomorphism (only the legitimacy-argument template is claimed transferable); and a portability rating (strong / moderate / weak).[^100] In scenario δ, the template declaration takes the form: "This service adopts the three-tier escalation of SOX § 806 + Dodd-Frank § 922 + EU Directive 2019/1937 as its legitimacy-argument template. The service does not claim structural isomorphism with these precedents; it claims only inheritance of the institutional template within the paradigm of 'routine pseudonymity + ex post conditional unsealing.' The portability rating is strong." This declaration furnishes a legitimacy-argument anchor for the wallet-as-essential-facility proposition advanced in prompt 11: the wallet's role is the engineering-interface concretisation of existing whistleblower protection statutes, not a new category of legal instrument.[^101]

§ 6.2 *Unsealing Trigger Specification*. Threshold key holders shall adopt a k-of-n mechanism (k ≥ ⌈n/2⌉ + 1; recommended n ≥ 5, k ≥ 3).[^102] Each unmask request shall generate an audit log containing the time of request, the requesting party, the identifier of the trigger clause invoked, the order of share submissions, and timestamps; the audit log shall be append-only Merkle-tree and publicly verifiable.[^103] In scenario δ, the trigger specification takes the form: "Threshold key holders shall execute an unmasking if and only if (1) a legal procedure within the meaning of SOX § 806 is in progress and (2) multiple independent competent authorities (OSC + court + industry IG) have simultaneously lodged the request; a request from any single competent authority shall automatically trigger a thirty-day internal review and reporter-notification period." Shamir 1979 secret sharing and Herzberg 1995 proactive secret sharing provide the cryptographic foundations.[^104]

§ 6.3 *Unsealing Authority Allocation Specification*. Threshold key holders shall be distributed across organisations, jurisdictions, and technology stacks; each holder shall execute a fiduciary-duty agreement, breach of which shall attract personal liability alongside joint and several institutional liability.[^105] Key rotation shall occur no less than every twenty-four months, using Herzberg proactive secret sharing to ensure prior shares are invalidated.[^106] In scenario δ, the allocation specification takes the form: "Key holders shall number at least five, distributed across at least three jurisdictions (e.g., the United States, the EU, and Taiwan) and at least two types of institution (news organisations, human-rights organisations, academic institutions); no single holder may simultaneously be a related person to the subject of the report; each holder shall execute a fiduciary-duty agreement, breach of which shall attract personal liability of up to USD 1 million plus joint and several institutional liability of up to USD 10 million." This clause responds directly to article 01's W3 political-economic-accomplishment warning: cross-organisational key-holder distribution and a hard threshold are institutional, not purely technical, accomplishments; otherwise the design collapses into WikiLeaks's early-stage Assange-centric concentration pattern.[^107]

§ 6.4 *Redress-Pathway Specification*. The unmasked party shall possess full audit capability (access to the full metadata and decisional record of the unmask request). Complaints shall escalate through three tiers: a thirty-day platform dispute board → ninety-day industry self-regulation → court or arbitral tribunal.[^108] Redress types shall include monetary compensation; chilling-effect presumptive damages; audit-log destruction (where appropriate); public apology; and an elevated threshold for future unmask requests.[^109] In scenario δ, the redress pathway takes the form: "If, following an unmasking, a court determines that the trigger conditions were not adequately satisfied, the reporter shall obtain (1) compensation for actual monetary loss; (2) chilling-effect presumptive damages (calculated at three times the industry average annual salary); (3) destruction of the relevant audit logs, with aggregate statistics retained; (4) public apology and policy revision by the platform; and (5) a future unmask threshold of seven-of-seven unanimous consent." Rakoff 2014's tripartite typology of remedies ensures that redress exceeds the merely declaratory.[^110]

§ 6.5 *Cross-Jurisdictional Forum-Selection Clause*. The Terms of Service shall specify ex ante (a) the principal applicable law (e.g., EU Directive 2019/1937 + New York SHIELD Act); (b) the arbitral tribunal (e.g., the Permanent Court of Arbitration (PCA) or the International Chamber of Commerce (ICC)); and (c) the court of emergency relief. Users may opt in to supplementary protections but may not opt out of the principal legal protections.[^111] In scenario δ, the forum-selection clause takes the form: "The principal applicable law is the EU Whistleblower Directive 2019/1937 + the New York SHIELD Act + the Taiwan Personal Data Protection Act, applied so as to maximise protection for the reporter; the arbitral tribunal is the PCA; emergency injunctive relief shall be sought in the United States District Court for the Southern District of New York." This clause responds directly to the cross-jurisdictional redress-gap problem raised in prompt 14. Its function is to establish an ex ante floor against race-to-the-bottom, not to eliminate cross-jurisdictional divergence.[^112] It must be stated that the practical receivability of forum-selection clauses depends on whether the PCA / ICC are willing to take civic-proof cases; direct precedent on this point is currently lacking, marking an open space for further research.[^113]

Combined, the five sub-clauses yield a draft engineering-legal interface that can begin to be deployed without awaiting new legislation. It must be emphasised that "no new legislation required" does not mean "no new legislation ever required": elections, taxation, legally effective signatures, and similar scenarios may still require legislative pathways.[^114] The present claim is more restrained: in scenarios where suitable legal templates already exist, engineering practitioners may begin deployment on the basis of existing institutional transplantation, rather than deferring uptake to legislative cycles of six to ten years.[^115] The partial success of Apple ATT in 2021 and the failure of P3P / DNT between 2002 and 2019 illustrate the contrast precisely: the former enjoyed both state-law contracts (GDPR / CCPA) and platform-contract contracts (Apple Developer Agreement); the latter offered only a unilateral platform standard without corresponding legal contracts.[^116]

## § 7. Five Boundary Conditions and Inapplicable Scenarios

The five sub-clauses do not constitute a universal remedy. Deployment of the three-element template is subject to five boundary conditions; failure of any one collapses the design into the failure modes enumerated below.

7.1 *Minimum threshold of judicial independence*. T.Authority may not be unilaterally controlled by plaintiff, defendant, or government. China's Cybersecurity Law § 24 (online real-name regime) and Data Security Law § 35 (broad state-agency data requisition) jointly cause "pseudonymity combined with ex post accountability" to degenerate into "antecedent real-name identification."[^117] Article 35 of the Constitution of the People's Republic of China formally guarantees freedom of speech, publication, assembly, and association, but the absence of an independent judiciary capable of adjudicating against state organs prevents the three-element structure from forming in the first place.[^118] The role of the Chinese case here is *consequence-display when the template does not obtain* (the template having never been attempted there); it does not function as a failure case *of* the template. Absent judicial independence, the promise of "pseudonymity combined with ex post accountability" cannot generate stable institutional constraint.[^119] The narrowing or exclusion of John Doe procedures in Hong Kong cases involving the National Security Law since 2020 attests to this boundary condition in transitional form.[^120]

7.2 *Minimum threshold of remedial actionability*. T.Remedy must include actionable, concrete categories of redress—monetary, identity restoration, relocation, judgment vacatur. The WITSEC case shows that "sovereign immunity + *Bivens* narrowing" can shut the door on litigation against Authority for its own misconduct.[^121] The FTCA discretionary-function exception (28 U.S.C. § 2680(a)) renders USMS broadly immune from suit for its own negligence; *Ziglar v. Abbasi* (2017) and *Egbert v. Boule* (2022) further narrow the available space for *Bivens* actions.[^122] As a result, even where WITSEC's record contains instances of unauthorised disclosure resulting in death (e.g., the Marvin Bryan and Sammy Gravano follow-on cases), the families of the deceased are virtually unable to obtain redress against USMS / DOJ.[^123] Brann 2013, in *Stanford Law Review*, systematically catalogues this constraint and identifies the structural gap between institutional design and deployment that affects WITSEC's T.Remedy.[^124]

7.3 *Minimum threshold of technical-metadata control*. The metadata that mediate T.Trigger and T.Authority—printer fingerprints, IP logs, document hashes, token linkability—must be held by T.Authority or by a technical custodian designated by it. The Reality Winner case shows that once metadata falls into the hands of an unregulated intermediary, the three-element structure is in effect nullified.[^125] When Winner conveyed documents to *The Intercept*, the microdot pattern (the "yellow dots" specification documented in EFF 2017) allowed the printer's serial number and time of output to be rapidly reverse-engineered; during fact-checking, the outlet handed the original to government officials, and the metadata bypassed every T.Authority clause.[^126] Schmidle 2018, in *The New Yorker*, locates the source of the failure at the institutional, not the executional, level: the structural absence of a secondary Authority for media intermediaries is the core cause.[^127]

7.4 *Minimum threshold of cross-jurisdictional cooperation*. Cross-border civic proof requires inter-jurisdictional recognition agreements; otherwise forum shopping and race-to-the-bottom drag all jurisdictions down to the most permissive standard. The EU Directive + ECtHR supervisory regime is currently the most mature cooperative model.[^128] The CLOUD Act / GDPR conflict illustrates the inverse: the U.S. CLOUD Act (Pub. L. 115-141; 18 U.S.C. § 2713) authorises DOJ requisition of data from U.S. service providers extraterritorially, directly conflicting with the cross-border-transfer restrictions of GDPR Arts. 6 and 49.[^129] *United States v. Microsoft Corp.* (2018) was ultimately vacated as moot upon CLOUD Act passage, but the substantive conflict was not resolved.[^130] For civic proof, this means that cross-jurisdictional forum-selection clauses can only set an ex ante floor against race-to-the-bottom, not eliminate sovereign conflict; the cross-jurisdictional redress-gap question of prompt 14 is the more central treatment.[^131]

7.5 *Minimum threshold of political context*. Under authoritarian regimes, "pseudonymity combined with ex post accountability" degenerates into "antecedent real-name identification"; the template is not transferable absent constitutional-democratic baseline conditions.[^132] The Chinese case (with the Hong-Kong-post-2020 sub-sample) constitutes the clearest evidence of this boundary.[^133] It must be emphasised that the "minimum threshold of political context" is not a Western-centric criterion. Constitutional-democratic baseline conditions—judicial independence, freedom of expression, freedom of association, and freedom of the press, in both formal recognition and substantive operation—obtain partially or fully in numerous non-Western jurisdictions (Japan, Taiwan, South Korea, India); conversely, in Western jurisdictions where these conditions deteriorate locally on account of political climate (certain U.S. states' treatment of SLAPP suits; Hungary's recent expansion of NGO disclosure requirements), three-element deployment correspondingly fails.[^134]

Mapping the five boundary conditions to four failure / success cases yields the following table.

| Case | T.Trigger | T.Authority | T.Remedy | Locus of structural failure |
|---|---|---|---|---|
| Reality Winner (2017) | OK | Missing (media independently handled microdots) | Missing (Espionage Act lacks public-interest defence) | T.Authority |
| WITSEC leakage (1971–2024) | OK | Partial (USMS silent on its own misconduct) | Missing (sovereign immunity + *Bivens* narrowing) | T.Remedy |
| Twitter Doe across states | Inconsistent (three standards) | Inconsistent (no federal Supreme Court precedent) | Procedural termination = incapacitation | Dual T.Trigger + T.Authority inconsistency |
| CNIL double-blind (2024) | Strict (Loi 2020-936) | CNIL oversight (*Laboratoire d'innovation numérique*) | GDPR penalty coupling (4% global revenue cap) | Control case: success when all three elements obtain |

The CNIL double-blind age-verification regime of 2024 supplies the reverse control case.[^135] Loi du 30 juillet 2020 (n° 2020-936) supplies the Trigger clause for online age verification; CNIL's *Laboratoire d'innovation numérique* supplies an independent Authority; the GDPR's four-per-cent global-revenue penalty cap supplies a substantive Remedy.[^136] The simultaneous satisfaction of all three elements has rendered the regime stable in the EU context.

*Inapplicable scenarios.* It is inappropriate to apply the three-element template to all civic scenarios. The following five categories cannot satisfy at least one of the three elements under pseudonymisation and therefore fall outside the transplantation claim of this paper. First, legally effective signatures (real-estate registration, notarised wills, commercial contract execution): T.Trigger requires unambiguous identification of the signatory, in endogenous conflict with pseudonymisation.[^137] Second, taxation and financial compliance (FATF Travel Rule, KYC / AML): T.Authority's cross-border compliance demands are in endogenous conflict with pseudonymisation.[^138] Third, electoral voting (one-person-one-vote receipt-free design): T.Remedy's actionability is in endogenous tension with the receipt-free condition.[^139] Fourth, medical-record access: HIPAA and the GDPR partially overlap with the pseudonymisation template but do not fully cover it.[^140] Fifth, online identity verification for child protection: COPPA and related rules impose independent minimum identity-strength requirements.[^141]

Three boundary stipulations warrant explicit statement. First, the criterion underlying the five boundary conditions is whether normative conditions can be evaluated independently of political-economic conditions; this is the point at which Pozen 2018's critique of transparency frameworks bears.[^142] Second, the boundary conditions are not mutually exclusive: a given scenario may simultaneously trigger multiple boundaries. Third, the boundary conditions are themselves susceptible to drift under technological and institutional evolution; mainstreaming of ZK voting, expansion of cross-jurisdictional recognition agreements, and strengthening of metadata norms could render currently inapplicable scenarios transferable on a five-to-ten-year horizon.[^143]

## § 8. Conclusion

Constitutional democratic acceptance of pseudonymous participation has a substantial history. From whistleblower protection to the sealed indictment, five institutions jointly constitute the historical sedimentation of the "pseudonymity combined with ex post accountability" paradigm; the paradigm may be formalised as a three-element conjunctive structure and analogically transplanted into four civic-proof scenarios. Legal instruments already supply the institutional template; what is lacking is a draft contract specification at the technical-legal interface. The five sub-clauses of § 6 constitute a preliminary attempt at that intervention point. But deployment remains subject to five boundary conditions (judicial independence / remedial actionability / metadata control / cross-jurisdictional cooperation / political context); failure of any one collapses the design into the failure mode of Reality Winner, WITSEC, or Twitter Doe.

The articulation of the present paper with the rest of the doctoral programme may be summarised as follows. Articulation with article 01 (*Accountability Without Real-Name Identification*) occurs at § 6.3, the unsealing-authority allocation specification: cross-organisational key-holder distribution and a hard threshold are political-economic, not purely technical, accomplishments—a caveat raised in article 01's W3 and here extended into specific clauses of the legal-contract specification.[^144] Articulation with article 02 (*Civic Proof: Concept and Conceptual Positioning*) occurs at § 5, the four-scenario filling: the present paper fills in the legal pillar of article 02's typology with legitimacy arguments drawn from existing legal institutions.[^145] Articulation with article 03 (*Freedom of Association × Digital Identity: An Empirical Test of Three Walls*) occurs at § 3, the three-element conjunctive structure: T and article 03's H1' three-walls are isomorphic but operate at different levels, the former being the deductive base of the legal institution, the latter the deductive extension into engineering implementation.[^146] Articulation with prompt 11 (*Wallet as Essential Facility*) occurs at § 6.1, the template declaration: the wallet's legitimacy-argument anchor is the engineering-interface concretisation of existing whistleblower protection statutes.[^147] Articulation with prompt 14 (*Cross-Jurisdictional Redress Gap*) occurs at § 6.5 forum-selection and § 7.4 cross-jurisdictional cooperation.[^148]

The open problems left by this paper include the following. The portability of the three-element structure into non-Western legal systems (the treatment of secrecy and remedy in Islamic legal traditions).[^149] The three-element-versus-four-element debate (whether a fourth element—"limitation period / auto-sunset"—should be added).[^150] The impact of ZK voting mainstreaming on the assessment of the electoral-voting scenario.[^151] The spectrum of legal recognition for the DAO LLC wrapper beyond Wyoming (Swiss *Verein*; Marshall Islands DAO LLC).[^152] The reconstruction requirements for T.Authority under algorithmic-governance scenarios.[^153] The relation between the contract specification and regulatory sandboxes (FCA / MAS fintech sandboxes).[^154] These questions are reserved for subsequent doctoral chapters and for the N ≥ 10 expanded study.

## References

[^1]: Tyler, T. R. (1990). *Why People Obey the Law*. Yale University Press. The four-element typology of procedural justice supplies the normative basis for T.Authority. Source level A.

[^2]: Mulligan, D. K., & Schneider, F. B. (2011). "Doctrine for Cybersecurity." *Daedalus*, 140(4). Core argument on the engineering-legal language gap. Source level B.

[^3]: Camenisch, J., & Lysyanskaya, A. (2001). "An Efficient System for Non-transferable Anonymous Credentials." *EUROCRYPT 2001*. Foundational paper on anonymous credential cryptography. Source level A.

[^4]: Reidenberg, J. R. (1998). "Lex Informatica: The Formulation of Information Policy Rules through Technology." *Texas Law Review*, 76. Foundational argument that technology functions as norm. Source level A.

[^5]: Bingham, T. (2010). *The Rule of Law*. Penguin. Eight elements of the rule of law support the three-element conjunctive structure. Source level A.

[^6]: Solove, D. J. (2008). *Understanding Privacy*. Harvard University Press. Conceptual distinction between pseudonymity and anonymity. Source level A.

[^7]: 5 U.S.C. § 2302 (Whistleblower Protection Act 1989, as amended by WPEA 2012, Pub. L. 112-199); Directive (EU) 2019/1937 on Whistleblower Protection, OJ L 305/17. Explicit design of reporter identity management. Source level A.

[^8]: OSC FY2023 Annual Report; MSPB 2018 *Whistleblower Protections* report; European Commission 2024 transposition status (IP/24/1117, 2024-01-25). Evidence of the paper/deployment gap. Source level A/B.

[^9]: Hasen, R. L. (2016). *Plutocrats United*. Yale University Press; Federal Judicial Center 2009 *Sealed Cases in Federal Courts* (Reagan & Timm); DOJ Office of the Inspector General (2005). *A Review of DOJ's Witness Security Program*. Audit Report 05-15. Political-economic weaknesses of unsealing authority. Source level A/B.

[^10]: Pozen, D. E. (2018). "Transparency's Ideological Drift." *Yale Law Journal*, 128(1). Political-economic critique of transparency frameworks. Source level A.

[^11]: 5 U.S.C. § 2302 (Whistleblower Protection Act 1989, as amended by WPEA 2012, Pub. L. 112-199). Federal statutory basis for whistleblower protection of public employees. Source level A.

[^12]: 18 U.S.C. § 1514A (Sarbanes-Oxley § 806, 2002); 29 CFR § 1980 (OSHA whistleblower complaint procedure). SOX § 806 uses the OSHA procedural framework. Source level A.

[^13]: 15 U.S.C. § 78u-6 (Dodd-Frank § 922, Pub. L. 111-203, 2010); SEC Office of the Whistleblower FY2023 Annual Report. Securities-domain bounty clauses. Source level A/B.

[^14]: Directive (EU) 2019/1937 on Whistleblower Protection, OJ L 305/17, Arts. 7–15; Council of the EU Press Release, 2019-04-16. Three-tier escalation design. Source level A/D.

[^15]: Germany Hinweisgeberschutzgesetz, 2023-05-31; France Loi Sapin II (n° 2016-1691) with 2022 amendments. Representative German and French transpositions. Source level B.

[^16]: Japan Public Interest Whistleblower Protection Act (enacted 2004; substantially amended 2020); Wolff, L. (2015). "Whistleblowing in Japan." *Cambridge Companion to Japanese Law*; Oka, K. (2021). "External Whistleblowing After 2020 Amendments." *Japanese Yearbook of International Law*, 64. Japanese institutional history. Source level A/B.

[^17]: Republic of China (Taiwan) draft Whistleblower Protection Act (various sessional versions, 2018–2025); Legislative Yuan bill-tracking system. Record of the Taiwan legislative gap. Source level D.

[^18]: Vandekerckhove, W. (2006/2010). *Whistleblowing and Organizational Social Responsibility*; Devine, T., & Maassarani, T. F. (2011). *The Corporate Whistleblower's Survival Guide*. Institutional history of reporter-identity confidentiality. Source level A.

[^19]: *United States v. Reality Winner*, S.D. Ga. No. 1:17-CR-00034 (2017); Schmidle, N. (2018). "The Untold Story of NSA Contractor Reality Winner." *The New Yorker*, Dec. 17. Reality Winner indictment and investigative reporting. Source level A/B.

[^20]: Electronic Frontier Foundation (2017). *Yellow Dots of Mystery: Is Your Printer Spying On You?*; Lichtenstein, R. M. (2020). "Sources, Leaks, and the Espionage Act." *Wisconsin Law Review*, 2020(4). Structural absence of media-intermediary Authority. Source level B/A.

[^21]: *Doe v. Cahill*, 884 A.2d 451 (Del. 2005). *Cahill* five-factor test. Source level A.

[^22]: *Dendrite International v. Doe No. 3*, 775 A.2d 756 (N.J. Super. Ct. App. Div. 2001). *Dendrite* four-step test. Source level A.

[^23]: *Doe v. 2theMart.com*, 140 F. Supp. 2d 1088 (W.D. Wash. 2001). *2theMart* factor test. Source level A.

[^24]: *In re Anonymous Online Speakers (Mobilisa v. Doe)*, 661 F.3d 1168 (9th Cir. 2011). Ninth Circuit compromise standard. Source level A.

[^25]: Reporters Committee for Freedom of the Press (2024). *Anonymous Speech Online*; Lidsky, L. B. (2010). *Boston College Law Review*, 50. Adoption range of the *Cahill* five-factor test. Source level A/B.

[^26]: Lidsky, L. B. (2000). "Silencing John Doe." *Duke Law Journal*, 49; Volokh, E. (2009 / 2017), Anonymous Speech series. Structural analysis of John Doe litigation. Source level A.

[^27]: *Glassdoor v. Andra Group, LP*, 27 N.Y.3d 1062 (2017); *Music Group Macao Commercial Offshore Ltd. v. Does* (N.D. Cal. 2014). Representative cross-state divergence. Source level A.

[^28]: Volokh, E. (2017). Subsequent Anonymous Speech essays. Analysis of forum shopping and race-to-the-bottom risk. Source level A.

[^29]: Federal Rules of Criminal Procedure, Rule 6(e); 28 CFR § 50.9 (DOJ sealing policy). Grand-jury confidentiality. Source level A.

[^30]: Federal Judicial Center (2009). *Sealed Cases in Federal Courts* (Reagan & Timm). The 18% sealing-rate datum. Source level B.

[^31]: *Press-Enterprise Co. v. Superior Court*, 478 U.S. 1 (1986); *In re Washington Post*, 807 F.2d 383 (4th Cir. 1986). First Amendment presumption of procedural openness. Source level A.

[^32]: *Douglas Oil Co. v. Petrol Stops Northwest*, 441 U.S. 211 (1979). "Particularised need" standard for disclosure of grand-jury records. Source level A.

[^33]: *Andrew Miller v. United States*, 18-3052 (D.C. Cir. 2019); Kitrosser, H. (2015). *Reclaiming Accountability*. University of Chicago Press. Court denial rates for sealing motions and grand-jury independence. Source level A.

[^34]: *Buckley v. Valeo*, 424 U.S. 1 (1976). Parallel of disclosure obligation and small-donor exemption. Source level A.

[^35]: Bipartisan Campaign Reform Act, Pub. L. 107-155 (2002); 52 U.S.C. § 30101 et seq. BCRA's strengthening of large-contribution disclosure. Source level A.

[^36]: *Citizens United v. FEC*, 558 U.S. 310 (2010); *Doe v. Reed*, 561 U.S. 186 (2010). Constitutionality of disclosure obligations; presumption of publicity for referendum-petition signatures. Source level A.

[^37]: *NAACP v. Alabama ex rel. Patterson*, 357 U.S. 449 (1958). The reverse exemption principle for disclosure. Source level A.

[^38]: *Americans for Prosperity Foundation v. Bonta*, 594 U.S. ___ (2021), 141 S. Ct. 2373. Contemporary restatement of the *NAACP* lineage. Source level A.

[^39]: Hasen, R. L. (2016). *Plutocrats United*. Yale University Press; Briffault, R. (2015). *Election Law Journal*. Analysis of FEC bipartisan-deadlock structure. Source level A.

[^40]: OpenSecrets 2024 Dark Money estimate; OECD 2023 *Financing Democracy* report. Cumulative dark-money inflows after *Citizens United*. Source level B.

[^41]: 18 U.S.C. §§ 3521–3528 (Witness Security Reform Act 1984, Pub. L. 98-473). Statutory basis for WITSEC. Source level A.

[^42]: USMS WITSEC Fact Sheet 2023. Cumulative figure of 19,300+ protectees. Source level B.

[^43]: Earley, P., & Shur, G. (2002). *WITSEC*. Bantam. Internal-perspective institutional history of WITSEC. Source level A.

[^44]: DOJ Office of the Inspector General (2005). *A Review of DOJ's Witness Security Program*. Audit Report 05-15; Pelisek, C. (2014). *In Plain Sight*. Counterpoint. Sample bias in WITSEC's "none killed" datum. Source level B.

[^45]: Maas, P. (2003). *Underboss: Sammy the Bull Gravano's Story*. HarperCollins; Pelisek (2014), supra. Records of WITSEC failure cases. Source level B.

[^46]: Brann, M. (2013). "Witness Protection and Sovereign Immunity." *Stanford Law Review*, 65; 28 U.S.C. § 2680(a). FTCA exception and litigation immunity. Source level A/B.

[^47]: *Ziglar v. Abbasi*, 137 S. Ct. 1843 (2017); *Egbert v. Boule*, 142 S. Ct. 1793 (2022). Narrowing of *Bivens* actions. Source level A.

[^48]: Pozen, D. E. (2013). "The Leaky Leviathan." *Harvard Law Review*, 127; Bok, S. (1983). *Secrets*. Pantheon. Jurisprudential-historical perspective on secrecy and pseudonymity. Source level A.

[^49]: Sunstein, C. R. (1997). *Free Markets and Social Justice*. Oxford University Press. Normative basis for the rules-versus-standards distinction. Source level A.

[^50]: Bingham (2010), supra; Sunstein (1997), supra. Doctrinal basis for the three T.Trigger sub-clauses. Source level A.

[^51]: Sunstein (1997), supra. Normative basis for "objective determinability." Source level A.

[^52]: Bingham (2010), supra. Normative basis for prospectivity. Source level A.

[^53]: *Klass and Others v. Germany*, App. No. 5029/71, ECtHR (1978-09-06); *Roman Zakharov v. Russia*, App. No. 47143/06, ECtHR [GC] (2015-12-04). Case-law basis for the three T.Authority sub-clauses. Source level A.

[^54]: Tyler (1990), supra; Tyler, T. R., & Huo, Y. J. (2002). *Trust in the Law*. Russell Sage. Empirical support for the four elements of procedural justice. Source level A.

[^55]: *Klass v. Germany*, supra; *Roman Zakharov v. Russia*, supra. ECtHR case law on state covert surveillance. Source level A.

[^56]: Rakoff, T. D. (2014). *Designing Constitutional Remedies*. Harvard University Press. Tripartite typology of remedies. Source level A.

[^57]: Rakoff (2014), supra. Analysis of declaratory remedies' institutional constraint capacity. Source level A.

[^58]: *Bivens v. Six Unknown Named Agents*, 403 U.S. 388 (1971); *Carlson v. Green*, 446 U.S. 14 (1980); *Davis v. Passman*, 442 U.S. 228 (1979). Doctrinal thread of "no substantive remedy, no right." Source level A.

[^59]: Solove, D. J. (2007). "I've Got Nothing to Hide…" *San Diego Law Review*, 44; Cohen, J. E. (2013). "What Privacy Is For." *Harvard Law Review*, 126(7). Conceptual support for the three-element structure as minimal necessary condition. Source level A.

[^60]: *United States v. Morison*, 844 F.2d 1057 (4th Cir. 1988); Vladeck, S. (2018). "Espionage Act and National Security Whistleblowing." *American University Law Review*, 67. Erosion of trigger predictability by the Espionage Act's broad construction. Source level A/B.

[^61]: PRC Cybersecurity Law (2017), § 24; Data Security Law (2021), § 35; Personal Information Protection Law (2021). Chinese real-name regime and data-requisition rules. Source level A.

[^62]: *Roman Zakharov v. Russia*, supra. ECtHR finding of non-compliance for surveillance regimes lacking independent Authority. Source level A.

[^63]: Tyler & Huo (2002), supra. Regression of institutional trust on active participation. Source level A.

[^64]: mashbean (2026). Article 03, *Freedom of Association × Digital Identity: An Empirical Test of Three Walls*, working draft. H1' three-walls hypothesis. Source level D (internal cross-reference).

[^65]: 5 U.S.C. § 2302, supra; 18 U.S.C. § 1514A, supra; Directive (EU) 2019/1937, supra. Three-element filling for whistleblower protection. Source level A.

[^66]: OSC FY2023 Annual Report, supra; MSPB 2018, supra. Political-economic fragility of OSC's sub-five-per-cent prevailing rate. Source level B.

[^67]: European Commission 2024 transposition status, supra; Whistleblower Protection EU Directive Coalition (2019–), *Implementation Tracker*. Nine-state EU transposition infringement. Source level A/B.

[^68]: *Doe v. Cahill*, supra; *Dendrite*, supra; *2theMart*, supra; *Mobilisa*, supra. Three-element filling for John Doe. Source level A.

[^69]: *Glassdoor v. Andra*, supra; *Music Group Macao*, supra. Cross-state divergence and forum shopping. Source level A.

[^70]: Federal Rules of Criminal Procedure, Rule 6(e), supra; 28 CFR § 50.9, supra. Three-element filling for sealed indictment. Source level A.

[^71]: *Andrew Miller*, supra; Kitrosser (2015), supra. Constrained Authority independence in the sealed indictment. Source level A.

[^72]: *Buckley*, supra; BCRA, supra; *NAACP v. Alabama*, supra; *AFP v. Bonta*, supra. Three-element filling for anonymous contributions. Source level A.

[^73]: Hasen (2016), supra; OpenSecrets 2024, supra. FEC bipartisan deadlock and the scale of dark money. Source level A/B.

[^74]: 18 U.S.C. §§ 3521–3528, supra; USMS WITSEC Fact Sheet 2023, supra. Three-element filling for WITSEC. Source level A/B.

[^75]: Brann (2013), supra; *Ziglar v. Abbasi*, supra; *Egbert v. Boule*, supra. WITSEC's Authority-independence and Remedy-actionability problems. Source level A/B.

[^76]: Pozen (2018), supra; Mulligan & Schneider (2011), supra. Political-economic analysis of three-element deployment gaps. Source level A/B.

[^77]: Lessig, L. (1999/2006). *Code and Other Laws of Cyberspace*. Basic Books; Reidenberg (1998), supra. Methodological basis for analogical inference versus structural isomorphism. Source level A.

[^78]: *Doe v. Reed*, supra; California Constitution Article II § 8 (Initiative Process); Swiss *Bundesverfassung* Arts. 138–139 (*Volksinitiative*). Legal precedents on referendum signature thresholds. Source level A.

[^79]: Chaum, D. (1981). "Untraceable Electronic Mail, Return Addresses, and Digital Pseudonyms." *Communications of the ACM*, 24(2). Mix-net foundations of pseudonymous voting. Source level A.

[^80]: Vocdoni technical documentation and *Census Authority Specification*; Springall, D. et al. (2014). "Security Analysis of the Estonian Internet Voting System." *ACM CCS*; Estonia Internet Voting Audit Reports. Engineering references for online voting. Source level A/B/C.

[^81]: Benaloh, J., & Tuinstra, D. (1994). "Receipt-free Secret-ballot Elections." *STOC*. Cryptographic basis for receipt-free design. Source level A.

[^82]: *Doe v. Cahill*, supra; *Dendrite*, supra. Legal precedents for forum pseudonymous identity. Source level A.

[^83]: Reporters Committee 2024, supra; Twitter Transparency Report 2022 H1 (subpoena challenge rates); Reddit Transparency Reports 2022, 2023. Empirical data on forum response to unmask requests. Source level A/B.

[^84]: W3C Verifiable Credentials Data Model 2.0; Camenisch & Lysyanskaya (2001), supra. Engineering basis for DID + VC + selective disclosure. Source level A.

[^85]: Kleppmann, M. et al. (2024). *Bluesky and the AT Protocol*; AT Protocol Specification. Bluesky design reference. Source level A/B.

[^86]: Twitter Transparency Report 2022 H1, supra; Donath, J. (1999). *Identity and Deception in the Virtual Community*. Political-economic weakness of forum Authority. Source level B/A.

[^87]: *NAACP v. Alabama*, supra; *Brown v. Socialist Workers '74*, 459 U.S. 87 (1982). Dual-level principle and the extension of the *NAACP* lineage. Source level A.

[^88]: Chaum, D., & van Heyst, E. (1991). "Group Signatures." *EUROCRYPT 1991*; Camenisch, J., & Stadler, M. (1997). "Efficient Group Signature Schemes." *CRYPTO 1997*. Cryptographic foundations of accountable group signatures. Source level A.

[^89]: *Talley v. California*, 362 U.S. 60 (1960); *McIntyre v. Ohio Elections Commission*, 514 U.S. 334 (1995). Extended support for anonymous expression. Source level A.

[^90]: Shamir, A. (1979). "How to Share a Secret." *Communications of the ACM*, 22(11); Herzberg, A. et al. (1995). "Proactive Secret Sharing." *CRYPTO 1995*. Cryptographic foundations for threshold key custody. Source level A.

[^91]: Leigh, D., & Harding, L. (2011). *WikiLeaks*. Guardian Books; mashbean (2026). Article 01, *Accountability Without Real-Name Identification*, working draft. WikiLeaks early-stage concentration failure. Source level B/D.

[^92]: 18 U.S.C. § 1514A, supra; 15 U.S.C. § 78u-6, supra; Directive (EU) 2019/1937, supra. Three-tier escalation for whistleblowing. Source level A.

[^93]: SecureDrop Architecture Specification and Audit Reports; Boutet, A., & Brown, B. (2014). *Whistleblowing Technologies and the Surveillance State*. SecureDrop deployment scale and metadata discipline. Source level A/B.

[^94]: *Guja v. Moldova*, App. No. 14277/04, ECtHR (2008-02-12); ECHR Arts. 6, 8, 10, 13. ECtHR jurisprudence on cross-border whistleblower protection. Source level A.

[^95]: SecureDrop Architecture, supra; Roberts, J. (2018). "Information Subsidies and Press Whistleblower Programs." *Journalism Studies*. SecureDrop deployment across 70+ news organisations. Source level A/B.

[^96]: GlobaLeaks Documentation; OCCRP Aleph Documentation. Complementary whistleblowing tool lines. Source level B.

[^97]: Boutet & Brown (2014), supra; Schmidle (2018), supra. Reality Winner-pattern risk in untrained newsrooms. Source level A/B.

[^98]: W3C VC Data Model 2.0, supra; Camenisch & Stadler (1997), supra. Engineering basis for inter-scenario portability differences. Source level A.

[^99]: mashbean (2026). Article 02, *Civic Proof: Concept and Conceptual Positioning*, working draft. Four-scenario typology. Source level D (internal cross-reference).

[^100]: Marsden, C. T. (2011). *Internet Co-Regulation*. Cambridge University Press. Co-regulation framework for template declaration. Source level B.

[^101]: Mulligan & Schneider (2011), supra; Citron, D. K. (2008). "Technological Due Process." *Washington University Law Review*, 85. Template declaration as wallet legitimacy anchor. Source level B.

[^102]: Goldreich, O., Micali, S., & Wigderson, A. (1987). "How to Play Any Mental Game." *STOC*; Shamir (1979), supra. Cryptographic basis for threshold k-of-n. Source level A.

[^103]: SecureDrop Architecture, supra; W3C VC Data Model 2.0, supra. Append-only Merkle-tree audit-log design. Source level A.

[^104]: Shamir (1979), supra; Herzberg (1995), supra. Threshold cryptography and proactive secret sharing. Source level A.

[^105]: Pozen (2013), supra; Kitrosser (2015), supra. Fiduciary duty and unsealing authority allocation. Source level A.

[^106]: Herzberg (1995), supra. Key-rotation mechanism via proactive secret sharing. Source level A.

[^107]: mashbean (2026). Article 01, supra; Leigh & Harding (2011), supra. Article 01's W3 political-economic-accomplishment warning. Source level D/B.

[^108]: Tyler (1990), supra; Bingham (2010), supra. Procedural-justice basis for three-tier redress escalation. Source level A.

[^109]: Rakoff (2014), supra; Cohen, J. E. (2013), supra. Substantive redress categories and chilling-effect presumptive damages. Source level A.

[^110]: Rakoff (2014), supra. Application of the tripartite remedy typology within the contract specification. Source level A.

[^111]: CLOUD Act, Pub. L. 115-141; 18 U.S.C. § 2713; Schwartz, P. M., & Solove, D. J. (2014). "Reconciling Personal Information." *California Law Review*, 102(4). Forum selection and cross-jurisdictional articulation. Source level A.

[^112]: mashbean (2026). Prompt 14, *Cross-Jurisdictional Redress Gap*, working draft. Race-to-the-bottom floor. Source level D (internal cross-reference).

[^113]: UNCAC Art. 33; EU Charter of Fundamental Rights, Arts. 11, 47. International-law recognition of whistleblower protection. Source level A.

[^114]: Schwartz & Solove (2014), supra; Bradford, A. (2020). *The Brussels Effect*. Oxford University Press. Time costs of legislative pathways and institutional transplantation. Source level A.

[^115]: Dorf, M. C., & Sabel, C. F. (1998). "A Constitution of Democratic Experimentalism." *Columbia Law Review*, 98(2); Gunningham, N., Grabosky, P., & Sinclair, D. (1998). *Smart Regulation*. Oxford University Press. Democratic experimentalism and regulatory mix. Source level A.

[^116]: Cranor, L. F. (2002). *Web Privacy with P3P*. O'Reilly; W3C P3P 1.0 Specification (2002); W3C DNT Working Group Note (2019); Hoofnagle, C. et al. (2012). "Behavioral Advertising." *Harvard Law & Policy Review*, 6; Apple ATT Developer Documentation (2021); EU Commission COM(2018) 43 final. Historical contrast of P3P / DNT failure and Apple ATT partial success. Source level A/B/C.

[^117]: PRC Cybersecurity Law (2017), § 24; Data Security Law (2021), § 35, supra. Chinese real-name regime and broad data-requisition authorisation. Source level A.

[^118]: PRC Constitution Art. 35; Administrative Litigation Law Art. 13. Gap between formal recognition and substantive operation. Source level A.

[^119]: Fu, Hualing (2021). *Hong Kong's National Security Law*. Edward Elgar. Conceptual support for "consequence-display when the template does not obtain." Source level B.

[^120]: Fu (2021), supra. Narrowing of John Doe procedures in Hong Kong after the 2020 National Security Law. Source level B.

[^121]: 28 U.S.C. § 2680(a), supra; Brann (2013), supra. FTCA discretionary-function exception. Source level A/B.

[^122]: *Ziglar v. Abbasi*, supra; *Egbert v. Boule*, supra. Narrowing of the *Bivens* action's available space. Source level A.

[^123]: Pelisek (2014), supra; Maas (2003), supra. WITSEC cases of unauthorised disclosure resulting in death and the redress gap. Source level B.

[^124]: Brann (2013), supra. Systematic catalogue of the WITSEC T.Remedy design / deployment gap. Source level A.

[^125]: Schmidle (2018), supra; EFF (2017), supra. Structural lesson of metadata-control failure in the Reality Winner case. Source level B.

[^126]: EFF (2017), *Yellow Dots of Mystery*, supra; *United States v. Reality Winner*, supra. Microdot tracking pattern and media fact-checking procedure. Source level B/A.

[^127]: Schmidle (2018), supra; Lichtenstein (2020), supra. Legal analysis of the structural absence of a secondary Authority. Source level B/A.

[^128]: Directive (EU) 2019/1937, supra; ECHR Arts. 6, 8, 10, 13, supra; Council of Europe Convention 108+ (modernised 2018), Art. 9. EU cross-border cooperation model. Source level A.

[^129]: CLOUD Act, supra; Regulation (EU) 2016/679 (GDPR), OJ L 119/1, 2016-05-04, Arts. 6, 49. CLOUD Act / GDPR conflict. Source level A.

[^130]: *United States v. Microsoft Corp.*, 138 S. Ct. 1186 (2018) (vacated). Mooting of the Microsoft case upon CLOUD Act enactment. Source level A.

[^131]: mashbean (2026). Prompt 14, supra. Cross-jurisdictional redress gap treated in prompt 14. Source level D.

[^132]: *Roman Zakharov*, supra; PRC Cybersecurity Law § 24, supra. Degeneration of three-element deployment under authoritarian regimes. Source level A.

[^133]: Fu (2021), supra. Hong Kong as comparator and the boundary of political context. Source level B.

[^134]: Pozen (2018), supra; Bradford (2020), supra. Multi-jurisdictional comparison of constitutional-democratic baseline conditions. Source level A.

[^135]: CNIL 2022/2024 *Online Age Verification* technical guidance. CNIL double-blind age-verification control case. Source level B.

[^136]: France Loi du 30 juillet 2020 (n° 2020-936), supra; GDPR Art. 83 (four-per-cent global revenue penalty). Simultaneous satisfaction of the three elements in the CNIL configuration. Source level A.

[^137]: 45 C.F.R. Parts 160, 164 (HIPAA Privacy Rule); FATF Recommendations. Endogenous conflict between legally effective signatures and pseudonymisation. Source level A.

[^138]: FATF Travel Rule; CLOUD Act, supra. Cross-border identity-strength demands of tax and financial compliance. Source level A.

[^139]: Benaloh & Tuinstra (1994), supra; Springall (2014), supra. Endogenous tension between receipt-free design and T.Remedy. Source level A/B.

[^140]: 45 C.F.R. Parts 160, 164, supra; GDPR Art. 9 (special categories). Normative overlap of medical-record pseudonymisation. Source level A.

[^141]: Children's Online Privacy Protection Act (COPPA), 15 U.S.C. §§ 6501–6506. Independent identity-strength requirement for child-protection online identity verification. Source level A.

[^142]: Pozen (2018), supra. Criterion separating normative and political-economic conditions. Source level A.

[^143]: Massanari, A. (2017). "#Gamergate and The Fappening." *New Media & Society*; Spada, P., Mellon, J., & Peixoto, T. (2016). *Effects of the Internet on Participation*. World Bank. Open space of technological and institutional evolution. Source level B.

[^144]: mashbean (2026). Article 01, supra. W3 political-economic-accomplishment warning. Source level D.

[^145]: mashbean (2026). Article 02, supra. Filling of the legal pillar of article 02's typology. Source level D.

[^146]: mashbean (2026). Article 03, supra. Isomorphism of T-three-elements and H1' three-walls at different levels. Source level D.

[^147]: mashbean (2026). Prompt 11, *Wallet as Essential Facility*, working draft. Wallet legitimacy-argument anchor. Source level D.

[^148]: mashbean (2026). Prompt 14, supra. Cross-jurisdictional forum selection and boundary of redress. Source level D.

[^149]: Nissenbaum, H. (2010). *Privacy in Context*. Stanford University Press. Open problem of portability into non-Western legal systems. Source level A.

[^150]: Sunstein (1997), supra; Bingham (2010), supra. Conceptual basis for the three-element-versus-four-element debate. Source level A.

[^151]: Springall (2014), supra; Vocdoni technical documentation, supra. Technological trajectory of ZK voting mainstreaming. Source level A/B.

[^152]: Wyoming DAO LLC Act (W.S. 17-31-101 et seq.); Marshall Islands DAO LLC Act 2022. Spectrum of DAO legal recognition. Source level A/D.

[^153]: Citron (2008), supra. Reconstruction requirements for T.Authority under algorithmic governance. Source level B.

[^154]: Black, J. (2002). *Critical Reflections on Regulation*; FCA / MAS fintech-sandbox documents. Relation between contract specification and regulatory sandboxes. Source level A/D.
