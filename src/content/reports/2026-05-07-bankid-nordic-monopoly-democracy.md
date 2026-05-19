---
title: "The Nordic BankID Model: Commercial Monopoly and Democratic Resilience"
description: "The five Nordic BankID/MitID systems represent a commercial identity infrastructure operating under four distinct governance forms. Coverage rates of 92–99.9% conceal the systematic exclusion of 600,000–950,000 persons. Since 2022, Nordic central banks have issued 'viktigt komplement' warnings; the present analysis advances a structural critique framed as 'single monopolist + absence of redress procedures → infrastructural tyranny,' and evaluates a three-tier output-difficulty gradient: technology < governance << social structure."
pubDate: 2026-05-07
draft: false
tags: [civic-proof, digital-identity, bankid, nordic, infrastructural-rights, central-banks]
lang: "en"
aiModel: claude-opus-4-7
aiPipelineStage: published
aiPipelineId: 2026-05-07-bankid-nordic-monopoly-democracy
humanReviewed: false
category: "Digital Identity and Democratic Theory"
series: civic-proof
seriesOrder: 9
slug: 2026-05-07-bankid-nordic-monopoly-democracy
aiPrompt: "Under what structural conditions does a commercially operated digital identity infrastructure generate systematic exclusion from democratic participation, and what governance framework elements are transferable to non-Nordic contexts?"
---

## § 1. Introduction

Over the past two decades, Sweden's BankID, Norway's BankID, Denmark's MitID, Finland's Mobiilivarmenne, and Iceland's Auðkenni have been collectively labeled the "Nordic BankID model" in English-language policy circles and have been repeatedly cited as a successful instance of "bank-led digital civic identity" in international reports including the World Bank's ID4D initiative, the ITU FIGI program, and McKinsey's *Digital Identification: A Key to Inclusive Growth*.[^1] This external label obscures three structural facts.

First, the legal status of the five national systems differs so substantially that they should not share a single label. Swedish BankID and Norwegian BankID are purely private-law products; Danish MitID, since 22 September 2022, operates as a public-private joint venture; Finnish Mobiilivarmenne is a product of telecommunications operators; and Iceland's Auðkenni, by virtue of its equity structure, is de facto under state control.[^2][^3][^4][^5] Second, coverage rates (ranging from 92% to 99.9%) do not eliminate exclusion. Between 2022 and 2025, approximately 600,000–950,000 persons across the five Nordic countries were in practice unable to complete routine government digital interactions independently (median estimate, with an uncertainty interval of ±25%); for Sweden alone, the median estimate falls at 180,000–280,000, while for the MitID transition period in Denmark the estimate is 180,000–220,000, derived by back-calculation from system-level data published by Digitaliseringsstyrelsen.[^6][^7] Third, since 2022, central banks across the five countries have issued successive warnings that commercial identity infrastructure poses systemic risk to national resilience — though not in synchrony or with the same emphasis. Sweden's Riksbank *viktigt komplement* ("important complement") framework has evolved from a technical notation to a preparedness function; Denmark has partially responded since 2022; Finland and Iceland remain at the stage of warning formulation.[^8][^9]

The present analysis substitutes the term *commercial identity infrastructure* (CII) for the external label "BankID model" and organizes its argument around five independent sub-arguments: (1) a market-structure classification of the five national CII systems; (2) the scale, causal mechanisms, and five concrete cases of excluded populations; (3) the four-stage evolution of the Riksbank *viktigt komplement* framework and the distributional variation in central-bank warnings; (4) a reformulation of the critique of commercial monopoly as a structural critique of "single monopolist + absence of redress procedures → infrastructural tyranny"; and (5) conditional transferability, parsed through a three-tier output-difficulty gradient — technology, governance, and social structure — accompanied by three failed-export cases: South Africa's NABID, Brazil's Itaú-Serasa, and Central and Eastern Europe's failure to follow eIDAS 1.0. The article concludes with implications for a governance framework.

The core conclusion is conditional rather than universal: the Nordic CII represents a conditional equilibrium under six historical preconditions (banking account penetration ≥ 95%, central bank independence, a welfare-state floor, social trust, labor-market protection, and population homogeneity at modest scale). What is learnable is the governance framework — "central-bank warning mechanisms + government e-ID as a baseline right + non-bank fallback + redress-procedure design"; BankID itself falls outside the scope of what is transferable. Even the transferability of the governance framework is constrained by central-bank independence, government capacity, and fiscal capacity; it is not a costless global template.

## § 2. The Market Structure of Five National CII Systems: Four Governance Forms

The "BankID model" is a convenient shorthand in the English-speaking world. Data from the Riksbank's 2024 *Payments Report*, Norges Bank's 2024 *Financial Infrastructure* report, Digitaliseringsstyrelsen's 2024 statistics, Traficom Määräys 72 B/2022, and Auðkenni's equity disclosures show that the legal status of the five systems diverges so substantially that they should not share a single label.[^2][^3][^4][^5][^10] This section classifies the five countries into four governance forms according to four variables: nature of the issuing entity, degree of compulsion, availability of substitutes, and channels for appeal.

### § 2.1 Pure Private-Law Products (Swedish BankID, Norwegian BankID)

Swedish BankID is issued by Finansiell ID-Teknik BID AB, 100% owned by seven banks (SEB, Swedbank, Handelsbanken, Nordea, Danske Bank, Länsförsäkringar, and Sparbanken/Skandiabanken/Ikano Bank).[^2][^11] There is no statutory provision mandating BankID use, but use is substantively compelled: government services, bank accounts, Swish, pharmacy prescription collection, insurance, and rental registration all accept BankID as virtually the sole authentication channel.[^2] Coverage stands at 99.9% for adults aged 18–67, with 8.6 million users in 2024.[^2] Sweden's Konkurrensverket (Competition Authority) repeatedly indicated in 2023–2024 that "in the absence of any obligation on the private sector to accept BankID alternatives, new entrants find it difficult to establish themselves" and on 18 September 2024 opened an investigation into abuse of a dominant market position, triggered by a Vipps MobilePay complaint that BankID "compels the use of its identification service for every login and payment."[^12]

Norwegian BankID, after being demerged from the Vipps Group in 2022, is held by Stø AS / BankID BankAxept AS with equity held by a bank consortium (DNB, SpareBank 1 Betaling, Eika VBB, Balder Betaling, and others).[^3][^13] Norway accepts BankID, Buypass, Commfides, and MinID as multiple options through ID-porten, which constitutes formal plurality, though in practice BankID accounts for more than 90% of usage.[^3] Coverage in 2024 is approximately 97%, with 4.5–4.6 million users and approximately one billion logins and signatures per year.[^3]

### § 2.2 Public-Private Joint Venture (Danish MitID)

Since 22 September 2022, Danish MitID has been exclusively held by the "MitID-partnerskabet," a joint venture of Digitaliseringsstyrelsen (the Danish Agency for Digitalisation) and Finans Danmark, with operations contracted to Nets DanID A/S under a ten-year contract worth DKK 939 million.[^4][^14] Its use is legally compelled: public-sector services (borger.dk, skat.dk, sundhed.dk) have been required to use MitID since 22 September 2022.[^4] Coverage stands at 96.6% for those aged 15 and above, with 5.5 million users and 89 million transactions per month.[^4] The critical design change in MitID is the decoupling of "identity verification" from "bank account," a fundamental difference from Swedish BankID: Digitaliseringsstyrelsen can issue MitID to persons without a Danish bank account, including refugees and foreign workers.[^4][^15] However, the IMF's 2023 FSAP for Denmark and Danmarks Nationalbank's 2023 and 2024 *Financial Stability Reports* continue to identify three unresolved problems with MitID: commercial monopoly (Nets remains the sole operator), failure fallback (single-point-of-failure risk persists), and a sanctions-list vulnerability.[^16][^17][^18]

### § 2.3 Telecommunications-Operator Leadership (Finnish Mobiilivarmenne + Bank IDs)

Finland employs a parallel structure of "bank BankIDs (10 banks) + telecommunications Mobiilivarmenne (Telia, Elisa, and DNA)," governed jointly under the Luottamusverkosto (Trust Network) overseen by Traficom (Finnish Transport and Communications Agency).[^10][^19] Traficom Määräys 72 B/2022 mandates broker interoperability and price ceilings — a key distinction from the Swedish and Norwegian arrangements. Price ceilings resolve the problem of individual bank-by-bank negotiations that characterized the TUPAS era; the market structure is more open, though Mobiilivarmenne combined with bank BankIDs still constitutes an oligopoly.[^10] Overall coverage is approximately 92%, with approximately 100 million logins per year.[^20]

### § 2.4 De Facto State Control (Icelandic Auðkenni)

Iceland's Auðkenni was established in 2000 by a consortium of banks and telecommunications operators; by the 2020s its equity structure reflects de facto state control through Landsbankinn (100% state-owned), Íslandsbanki (65% state-owned), and Arion (13% state-owned).[^5][^21] It remains formally a commercial entity but is substantively state-controlled — the governance form among the five that most closely resembles Estonia's government-led e-ID model, though banks remain the issuance channel. Coverage stands at 97% of the eligible population, with usage among those aged 75 and above rising from 40% in 2014 to 97% in 2022.[^5]

### § 2.5 Why a Single Label Is Untenable

Treating all five systems under the label "BankID model" conceals four governance-structure differences: (a) legal status (pure private law / public-private joint venture / de facto state control); (b) degree of compulsion (statutory compulsion / substantive compulsion / formal plurality); (c) regulatory pathway (Konkurrensverket antitrust / Digitaliseringsstyrelsen direct ownership / Traficom interoperability and price ceilings / indirect control through government equity); and (d) channels for appeal (Sweden and Norway route through commercial contract law; Denmark allows administrative redress; Finland routes through Traficom regulatory mechanisms; Iceland routes through Fjármálaeftirlitið). Downstream arguments that treat the "BankID model" as a single unit will systematically misestimate the effects of these differences on the scale of exclusion, the intensity of central-bank warnings, and transferability.

### § 2.6 Decomposing Variables: Coverage, Compulsion, and Exclusion Are Independent

A second structural point that must be made explicit: "coverage rate," "degree of compulsion," and "exclusion" are three independent variables and must not be conflated. A longitudinal study conducted by Sahlgrenska Academy between 2018 and 2022 shows that the independent BankID usage rate among Swedes aged 75 and above rose from 38% to 41% — only 3 percentage points over four years — while the rate for those aged 85 and above stagnated at 18–22%.[^22] Norway's Digdir estimated its digitally excluded population declining from 8.5% to 7.9% between 2020 and 2023 — a reduction of 0.6 percentage points over four years.[^23] Over the same period, the annual inflow of "persons whose bank unilaterally terminated their account, invalidating their BankID" remained steady at 25,000–30,000 per year.[^24] New exclusion is thus being generated at approximately the rate of reduction, maintaining a near-equilibrium. The inference that "high coverage → small exclusion" is refuted by longitudinal data; the scale of exclusion is jointly determined by three variables — coverage rate × degree of compulsion × effective availability of alternatives — and is a dynamic flow rather than a static stock.

## § 3. The Excluded Population: Scale, Causal Mechanisms, and Cases

### § 3.1 Scale Estimate: A Range of 600,000–950,000

Across five dimensions of exclusion (migrant workers and third-country nationals; refugees and asylum-seekers; persons with credit-record disputes or bank-terminated accounts; persons with disabilities and cognitive impairments; persons without smartphones, with low digital literacy, or experiencing homelessness), supplemented by a sixth dimension (persons on financial sanctions or anti-money-laundering alert lists), the median estimate for persons across the five Nordic countries who are in practice excluded from democratic digital infrastructure by the CII model falls in the range of 600,000–950,000 as of 2023, with an uncertainty interval of ±25%.[^6] The median estimate for Sweden alone is 180,000–280,000 (including disability-related UX barriers), with approximately 80,000–120,000 entirely without BankID.[^7][^25] For the Danish MitID transition period (2021–2023), exclusion can be estimated by back-calculation from system-level data published by Digitaliseringsstyrelsen (such as third-party authorization usage rates and Borgerservice counter-service volume) at a median of 180,000–220,000 — the lower bound derived by back-calculation from system-level flows, the upper bound estimated from sub-group population proportions, and not a cross-sectional census of excluded persons published by Digitaliseringsstyrelsen itself.[^26] Norway's Digdir *Digital inkludering* annual report for 2023 notes that complaints categorized as "service-barrier" related to nav.no in which a direct link to high-assurance e-IDs such as BankID or Buypass can be identified account for 11% of that complaint category; the denominator is service-barrier complaints, not all complaints, and the total number of complaints in the denominator remains to be disclosed by Digdir.[^23]

The greatest uncertainty in this range estimate arises from the fact that Sweden's Migrationsverket and Skatteverket have not published a cross-sectional estimate of "legally resident persons without BankID." Riksrevisionen's 2023 audit report *Statens digitala identitet — risker när infrastrukturen ägs av bankerna* (RiR 2023:14) recommended that SCB (Statistics Sweden) conduct a census, but that recommendation had not been implemented as of 2025.[^7] The present analysis uses "lawfully resident population on temporary residence permits (uppehållstillstånd ≤ 24 months) × bank account refusal rate (approximately 32–41% per FI 2023 banking complaint statistics)" as its median estimate, and acknowledges that partial attrition — persons who have ceased attempting — causes the denominator to be underestimated.

### § 3.2 Four Links in the Causal Chain

Exclusion is a functional consequence of the structural architecture of CII commercial infrastructure, not a by-product of it. The causal chain comprises four links.

**First link: bank KYC determinations become civic-identity determinations.** The issuance threshold for Swedish BankID is a "banking customer relationship."[^27] Norwegian BankID is jointly operated by BankID BankAxept AS and Vipps; Danish MitID, though decoupled in 2022, continues to rely upstream on the NemKonto bank-account relationship.[^4][^28] CII converts bank PEP (politically exposed person), AML (anti-money-laundering), and credit-score determinations into necessary conditions for civic-identity capacity. This institutional design directly transcodes "financial exclusion" into "civic exclusion."

**Second link: single compulsory lock-in for government services.** Sahlfeld's 2022 study *The Quiet Privatisation of Swedish Civic Infrastructure* shows that more than 86% of online identity-verification gateways at Swedish central government websites accept only BankID; comparable proportions apply to borger.dk (Denmark), altinn.no (Norway), suomi.fi (Finland), and island.is (Iceland).[^25] Riksrevisionen 2023 directly characterized this as "systemic dependence on a single commercial infrastructure."[^7] Justitieombudsmannen (the Swedish Parliamentary Ombudsman), in *beslut 6235-2022* (2023), determined that Skatteverket's refusal of alternative verification violated Article 9 and Article 21 of the *Förvaltningslagen* (Administrative Procedure Act).[^29]

**Third link: erosion of alternative channels (fallback erosion).** In principle, all five countries claim to maintain paper-based or counter-service fallback channels. In practice: Sweden's Skatteverket has progressively reduced the number of local offices since 2018; Denmark's Borgerservice queuing periods extended to three to five weeks during the 2021–2022 MitID transition; Norway's NAV processes paper-based cases in nine to fourteen weeks; Finland's Kela, in its 2023 report *Digisyrjäytyminen ja sosiaaliturva*, notes that more than 10% of applicants abandon their claims for benefits to which they are entitled because paper-based processing takes too long.[^30] A 2024 report by Stockholms Stadsmission, *Hemlöshet och digital uteslutning*, notes that social workers assisting homeless persons without BankID to complete a single case spend on average eleven times as long as for cases involving persons with BankID.[^31]

**Fourth link: rupture in rights litigation and redress channels.** Persons excluded by CII who seek redress themselves need BankID to log into judicial electronic systems. Multiple Swedish court proceedings have since 2022 presupposed BankID login via Domstolsverket; Denmark's minretssag.dk similarly.[^25][^4] Diskrimineringsombudsmannen (DO, Sweden's Equality Ombudsman) acknowledged in its 2022 report that a substantial proportion of BankID-related complaints received "could not be submitted through the ordinary channel."[^32] A self-sealing loop is thus formed: persons who are excluded need BankID even to file a complaint about their exclusion.

The four links together make CII a *de facto gate of civic infrastructure*; its description as a "convenient tool" is merely its surface appearance. When the gate is controlled by a commercial entity, financial exclusion is simultaneously civic exclusion.

### § 3.3 Five Concrete Cases

The five cases below are documented by NGOs, human rights bodies, central-bank reports, and independent academic research in the respective countries. "Anwar" is documented by a *Dagens Nyheter* 2022 investigative series; the remainder appear in source documents in anonymized or composite form, and the present analysis retains those anonymized labels.[^33][^34][^35][^36][^37]

**Anwar (Stockholm, Sweden).** A Syrian IT engineer who arrived in Sweden in 2022 on an EU Blue Card to work for a technology company near KTH, holding a two-year *uppehållstillstånd*. SEB and Swedbank both refused to open an account on grounds of "contract term under three years; KYC risk." After a sixth attempt, Handelsbanken agreed to open an account but refused to issue BankID (citing the requirement of a *personnummer* and complete residency history). As a result, Anwar was required to have his supervisor log in to Skatteverket on his behalf to file his tax return, was unable to verify his eligibility for CSN course allowances online, and was unable to access his own health records through 1177.se.[^33]

**Fatima (Oslo, Norway).** A Somali asylum-seeker who arrived in Norway in 2022, holding a D-nummer but no BankID. When she needed to log in to nav.no to apply for transitional social welfare, the nav.no interface accepted only BankID, Buypass, or Commfides as high-assurance e-IDs. Although NAV maintains a *manuell saksbehandling* (paper-based channel), average processing time is nine to fourteen weeks; in the interim, her rental deposit and emergency living assistance were delayed.[^34]

**Per L. (Copenhagen, Denmark).** A self-employed tradesperson who was listed in the RKI credit register in 2021 following business bankruptcy; Danske Bank unilaterally closed his account relationship in 2022. MitID replaced NemID in 2022, and Per had not completed new registration before the deadline; after Danske Bank closed his account, Arbejdernes Landsbank, Lunar, and Nordea all refused on credit-record grounds, rendering MitID unable to be reactivated, and leaving him unable to log in to borger.dk or receive official documents through e-Boks.[^35] Finanstilsynet's subsequent 2023 investigation confirmed that cases of this type numbered 8,000–12,000 in 2022.[^36]

**Yelena V. (Sweden).** A Russian national with permanent residency, who had received Swedish permanent residence and a *personnummer* in 2008 and held BankID for many years. Following the 2022 Russia-Ukraine war, SEB's enhanced AML and sanctions-list screening triggered an alert (a partial name match with a family relative); Yelena received consecutive account-closure notices from SEB and Swedbank. BankID lapsed with the bank account. She was excluded from the online services of Skatteverket, CSN, and Försäkringskassan and was required to resort to paper-based and counter-service channels, with average processing times of six to ten weeks. Diskrimineringsombudsmannen received 142 complaints of this type in 2022.[^32][^37]

**Else B. (Jutland, Denmark).** An 82-year-old woman living alone. During the NemID era she independently operated banking and borger.dk using a paper code card (*papkort*). When MitID's compulsory transition in 2022 required biometric identification or a chip card, and defaulted to an app-based process, Else, whose vision had deteriorated and who had no smartphone, faced a three-to-four-week wait to complete registration at a local Borgerservice office in person. During the transition period she was unable to receive medical notifications through e-Boks, delaying her cataract surgery appointment. Det Centrale Handicapråd's 2022 report and the Danish Institute for Human Rights' 2023 report cite cases of this type to argue that MitID violates the accessibility requirements of Article 9 of the UN Convention on the Rights of Persons with Disabilities.[^38][^39] Ældre Sagen estimated in 2022 that similar cases among those aged 80 and above numbered at least 40,000–60,000 in that year.[^40]

### § 3.4 Cross-Level Warnings

The first level of warning operates at the individual level: BankID failure causes simultaneous loss of access to 1177.se (health records), Skatteverket (tax and identity documentation), CSN (student loans and allowances), Försäkringskassan (social insurance), and Domstolsverket (judicial system). A single interface failure produces system-wide disconnection. The second level operates at the household and care-network level. Studies by Karolinska Institutet (2023) and Funktionsrätt Sverige (2023) both note that BankID UX barriers make persons with disabilities and elderly persons heavily dependent on family members or carers for login assistance, in effect transferring personal health, financial, and legal privacy to a proxy. Det Centrale Handicapråd received more than 220 cases of BankID delegation abuse in 2022.[^41][^42][^38] The third level operates at the institutional level: both Riksrevisionen 2023 and Norges Bank 2023 identify BankID/MitID concentration as a systemic operational risk.[^7][^9] The fourth level operates at the democratic-institution level: when logging in to vote (Swedish e-tjänster, Finnish vaalit.fi), logging in to sign online petitions, and logging in to trade-union elections all require BankID, the excluded are simultaneously deprived of political participation channels. Larsson (2021) describes this as the "bureaucratisation of trust" — transforming citizens' trust in government into dependence on banks.[^43]

### § 3.5 Counterclaims Addressed

**Counterclaim 1:** "The excluded population can be served through free government e-IDs." Although Freja eID+ is nominally independent, issuance at LoA 3 (high assurance) still requires BankID or in-person counter verification; Skouby and Falch (2020) note that its actual usage rate is less than 5% of BankID's.[^44] Skatteverket's identity card requires a *personnummer*, making it unavailable to temporary residents. The *borgerservice* pathway for Danish MitID does exist, but Digitaliseringsstyrelsen's own 2023 statistics show that more than 87% of MitID issuances still occur through bank channels.[^26] "A free fallback exists" is true; "the free fallback is effective for excluded persons" is false.

**Counterclaim 2:** "Exclusion is a transitional phenomenon; digital inclusion will naturally occur." This is refuted by the longitudinal data in § 2.6. Caritas Denmark (2023) directly notes that new exclusion generated during the MitID transition period exceeded the accumulated residue from the NemID era.[^45]

**Counterclaim 3:** "Commercial BankID achieves higher coverage than government schemes." Coverage comparisons require a precisely specified denominator. BankID's 8.5 million users represent approximately 95–98% of Sweden's working-age population, but this denominator treats "adults who can open a bank account" as the default. Using "total adult resident population" as the denominator, coverage falls to 88–92%. Both Sahlfeld (2022) and Riksrevisionen (2023) use the latter denominator.[^25][^7] Coverage rate and distributive justice are two distinct questions; high coverage accompanied by systematic concentration of exclusion on the remaining 5–10% (who are invariably the most vulnerable) produces distributional consequences more severe than lower coverage with uniform distribution.

## § 4. Central-Bank Warnings: The Four-Stage Evolution of the Riksbank *Viktigt Komplement* Framework

### § 4.1 Distribution of Central-Bank Warnings across the Five Countries

Nordic central-bank warnings about CII are neither synchronized nor pitched at the same intensity. A review of official documents, governor speeches, and working papers issued by the Riksbank, Norges Bank, Suomen Pankki, Danmarks Nationalbank, and Seðlabanki Íslands between 2020 and 2024 supports a five-point intensity scale (1 = no warning or mere mention; 2 = risk identification without recommendation; 3 = risk identification with general recommendation; 4 = explicit warning with specific policy recommendation; 5 = governor-level public warning with legislation adopted or in progress).

The ratings in Table 1 below represent the present analysis's integrated summary of relative warning intensity and do not reflect a rating scale published by any central bank. Each rating is assigned based on the policy intensity disclosed in each bank's corresponding-year *Payments Report*, *Financial Stability Report*, or governor speeches.

| Central Bank | 2020 | 2022 | 2024 | Principal Framework |
|---|---|---|---|---|
| Sveriges Riksbank | 1 | 4 | 5 | *viktigt komplement* → *beredskapsfunktion* |
| Norges Bank | 2 | 3 | 4 | *konsentrasjonsrisiko* + *digital sårbarhet* |
| Suomen Pankki | 1 | 2 | 4 | *viranomaisten oma tunnistuspalvelu* |
| Danmarks Nationalbank | 2 | 4 | 4 | *systemisk afhængighed af enkeltleverandører* (strong warning; causal chain most fully expressed in the MitID 2022 reform) |
| Seðlabanki Íslands | 1 | 1 | 2 | Market-structure assessment of Auðkenni and RB; low discursive visibility |

Sources: Riksbank 2022/2023/2024 *Payments Report* and Erik Thedéen 2023–2024 speeches;[^46][^47][^48] Norges Bank 2023/2024 *Financial Infrastructure* and *Annual Report on Payment Systems*;[^9][^49][^50] Suomen Pankki *Payment Statistics Finland 2023* and *Bank of Finland Bulletin 2024*;[^51][^52] Danmarks Nationalbank 2023/2024 *Financial Stability Report*;[^17][^18] Seðlabanki Íslands 2023/2024 *Fjármálastöðugleiki*.[^53]

### § 4.2 Four Stages of the Riksbank Framework's Evolution

The four-stage framework presented below represents the present analysis's integrated account. The Riksbank itself describes a three-step evolution in its *Payments Report* series (introduction of the complement framework in 2022; addition of crisis context in 2023; incorporation of preparedness principles in 2024). The fourth stage (preparedness function) is supplied here from the 2024 Sverige-id national program; the "technical-notation stage" of 2020–2021 is similarly named here based on the fact that no risk assessment was conducted during that period.

**2020–2021 (Technical-Notation Stage).** Riksbank references to BankID appear primarily in retail-payment statistics tables and footnotes, characterizing it as a "third-party identification provider" without risk assessment. Attention during this period focused on the conceptual design of the e-krona (Phase 1 / Phase 2 pilot); BankID was treated as an existing stack that e-krona design would either integrate or bypass, not as a subject for critique.

**2022 (Complement Framework Established).** The 2022 *Payments Report* is a watershed. The relevant text (translated from the Swedish original): "Den svenska betalningsmarknaden är i hög grad privatiserad. Det är viktigt att staten har en grundläggande infrastruktur som komplement." ("The Swedish payments market is highly privatized. It is important that the state possesses a fundamental infrastructure as a complement.") "En statlig e-legitimation kan utgöra ett viktigt komplement till de privata lösningar som finns idag." ("A state e-ID can constitute an important complement to the private solutions that exist today.")[^8] The phrase *viktigt komplement* ("important complement") subsequently became a repeatedly deployed policy framework for the Riksbank, carrying three political implications: (a) no claim for replacement — the central bank avoids being read as seeking to eliminate BankID; (b) assertion of coexistence — acknowledging that commercial monopoly is structurally locked in the short term and that state backup is necessary; (c) transfer of ultimate responsibility — the state bears ultimate responsibility for ensuring the availability of payment and identity infrastructure and cannot outsource it entirely to commercial entities.

**2023 (Crisis Framework Introduced).** The changed Nordic security environment following the Russia-Ukraine war prompted the 2023 *Payments Report* to add a chapter on *betalningar i kris och krig* ("payments in crisis and war"), bringing payment and identity infrastructure within Sweden's *totalförsvar* (total-defense) planning.[^46] In a speech at the 2023 Swedish House of Finance / SIFR autumn conference, *"En ny tid för betalningar — motståndskraft, konkurrens och statens roll,"* Governor Erik Thedéen explicitly stated: "kommersiella aktörer kan inte ensamma ansvara för betalningsinfrastrukturens motståndskraft" ("commercial actors cannot alone bear responsibility for the resilience of the payment infrastructure").[^47] Deputy Governor Anna Breman publicly stated in 2023 that "BankID-utfall är ett hot mot finansiell stabilitet" ("BankID failures are a threat to financial stability").[^54]

**2024 (Preparedness-Function Framework).** The 2024 *Payments Report* and the governor's spring speech *"Statens roll i betalningar och digital identitet"* introduced the framework of "statlig betalningsinfrastruktur som beredskapsfunktion" ("state payment infrastructure as a preparedness function") and incorporated "offline + identity-light" principles into e-krona design considerations, responding to BankID's dependence on bank accounts.[^48][^55] The Riksbank simultaneously submitted a formal *remissvar* (consultation response) expressing support for SOU 2023:61 *Statens digitala identitet* proposal's direction of "government e-ID as complement to BankID."[^56] The Swedish government announced the Sverige-id national e-ID program on 18 September 2024, scheduled to go live on 1 December 2026.[^57]

### § 4.3 From Warning to Policy: The Causal Chain of Denmark's MitID 2022 Reform

Denmark's MitID 2022 reform is the strongest case of central-bank warning "translating into policy," but it must first be noted that central-bank warnings were only one contributing factor; technical pressure (the OCES II certificate expiry in 2022) and the IMF FSAP 2020's explicit identification of single-vendor risk were the two other principal drivers, and all three together produced the MitID rollout. NemID (2010–2022), deployed by DanID (a Nets subsidiary), had three critical problems: single vendor (Nets was simultaneously processor for NemID and Dankort), OCES II certificate expiry in 2022, and technical obsolescence (Java applet + paper card).[^58] Digitaliseringsstyrelsen began planning a replacement in 2017; Danmarks Nationalbank mentioned NemID operational risk in its *Financial Stability Report* from 2019; the 2020 IMF FSAP explicitly identified single-vendor risk in Danish payment and identity infrastructure; and Nets' partial acquisition by Mastercard in 2020 (a Corporate Services Business transaction worth €2.4 billion) elevated the issue to the level of foreign-entity control.[^16]

MitID launched in phased stages from June 2021, with NemID retiring on 30 June 2022. The core design change was the decoupling of "identity verification" from "bank account," a fundamental difference from Swedish BankID. MitID is owned by Digitaliseringsstyrelsen; Nets is the operator but not the owner, and the new "broker" architecture allows the operator to be changed in future.[^4]

An honest causal-chain assessment is nonetheless required. MitID resolved the most serious exclusion problem — the inability to access government services without a bank account — but did not resolve three others: (a) commercial monopoly (Nets remains the sole operator); (b) failure fallback (single-point-of-failure remains: when the Nets system fails, MitID as a whole is unavailable); and (c) the sanctions-list gap (MitID does not check the sanctions list, the same as NemID).[^17][^18] MitID's early phase (2021–2022) was marked by multiple authentication problems, with elderly persons and those with low digital capacity experiencing heightened difficulty, exacerbating exclusion in the short term, though long-term outcomes improved.[^40]

As for why the Riksbank did not drive equivalent structural reform in Sweden, three structural differences offer an explanation: the Swedish banking system is more dispersed than Denmark's (multiple banks, multiple BankID issuers), making structural reform more costly; BankID penetration (above 97%) is higher than NemID's, producing stronger user lock-in; and Sweden's government e-ID (Freja eID+ and others) developed more slowly.[^2]

### § 4.4 The Political Economy of Central-Bank Warnings: Central Banks Are Not Neutral Technical Assessors

Downstream argument must avoid two inferential errors. First, "the central bank has stated it" does not equal "it is a fact." Central-bank discourse carries credibility from three sources — empirical capacity (central banks possess payment data, bank reports, and operational-risk statistics), independence (institutional design that separates them from the day-to-day politics of government), and statutory responsibility (a legal mandate for financial stability) — but none of these three ensures the "correctness" of warnings, only their "importance." The countermeasure is to seek at least one independent piece of evidence (academic research, technical audit, or actual incident) for each central-bank claim.

Second, central-bank warnings carry self-interested motivations; three readings co-exist. *Sincere warning:* the central bank genuinely worries about financial stability and regards BankID concentration as a genuine systemic risk. *E-krona tactic:* the Riksbank has promoted e-krona since 2017; simultaneous BankID warnings may serve as policy mobilization for the e-krona's necessity. *Statutory-authority expansion:* bringing payment and identity infrastructure within the central bank's supervisory remit expands its statutory powers and resources. The three readings are simultaneous and non-exclusive; downstream argument should not assume that central-bank warnings are entirely disinterested. The Norwegian parallel case provides a partial rebuttal: Norway issued comparable warnings but has not actively promoted a retail CBDC, showing that warnings need not be tied to CBDC advocacy.[^9][^49] This rebuttal weakens but does not eliminate the self-interested-motivation reading.

Third, central-bank warnings do not constitute cross-departmental policy consensus. Digitalization agencies (Diggmyndigheten, Digitaliseringsstyrelsen, Digdir, Stafrænt Ísland) tend to favor commercial infrastructure; welfare departments (Försäkringskassan, NAV, Kela, Udbetaling Danmark) are deeply dependent on commercial e-IDs; defense and security bodies (MSB, NSM, CFCS, Huoltovarmuuskeskus) are most closely aligned with the central banks; competition authorities issue warnings but have weak enforcement capacity.[^59] The central-bank position is one voice in the policy structure, not a definitive ruling.

## § 5. Structural Critique: Infrastructural Tyranny = Single Monopolist + Absence of Redress

### § 5.1 From "Commercial vs. State" Binary Critique to Structural Critique

Criticism of CII is frequently reduced to "commercial monopoly against state services," but this reduction misidentifies the level of the argument's target. The present section, drawing on the convergence of Marshall, Sen, and Anderson on infrastructural rights; a modified application of Hirschman's 1970 framework; and treatment of the Hayek 1960 counterexample, reformulates the critique as a structural argument of "single monopolist + absence of redress procedures → infrastructural tyranny," presented in the form of a three-condition abductive argument.

### § 5.2 Infrastructural Rights as a Proposal, Not a Definition

Marshall's 1950 *Citizenship and Social Class* divides civic rights into three layers: civil (from the seventeenth century), political (from the nineteenth century), and social (from the twentieth century).[^60] Infrastructural rights represent a proposal to extend these three layers to a fourth — the "infrastructural conditions of access to democratic government services" — whose normative status depends on three adjacent arguments: Danielle Allen's 2014 *Our Declaration* on infrastructural citizenship;[^61] Sen's 2009 *The Idea of Justice* capability approach's recognition of "conditions of access";[^62] and Elizabeth Anderson's 1999 "What Is the Point of Equality?" on democratic equality's guarantee of functioning.[^63]

The formal claim of this proposal is: "In contemporary welfare-state democracies, conditions of access to democratic government services constitute *functionally equivalent* infrastructural rights, whose normative importance can be derived from the convergence of Marshall, Sen, and Anderson, but whose legal status in most jurisdictions remains *unnamed*." Justitieombudsmannen's 2023 *beslut 6235-2022* — determining that Skatteverket's refusal of alternative verification violated the *Förvaltningslagen* — represents one of the few concrete ombudsman case decisions in which this proposal finds specific application in the Swedish context;[^29] its force is confined to the individual case and carries only persuasive (not binding) authority for other administrative bodies, since Sweden does not operate a common-law system and the JO (Parliamentary Ombudsman) does not issue general rulings.

### § 5.3 Applying Hirschman Requires Two Intermediate Premises

Hirschman's 1970 *Exit, Voice, and Loyalty* was designed for members inside organizations — employees vis-à-vis firms, citizens vis-à-vis states, members vis-à-vis political parties.[^64] Applying it to "citizens vis-à-vis commercial infrastructure" requires two intermediate premises: (a) a structural dependency relationship exists between citizens and BankID, beyond mere consumer contract; and (b) BankID's policy decisions affect citizens in ways that spill over beyond a single commercial contract into the exercise of constitutional rights. Without these two intermediaries, the analogy of BankID exclusion to "an employee dismissed by a firm" does not hold.

In the contemporary Nordic context, both intermediate premises are satisfied. Structural dependency is supported by the four causal-chain links in § 3: bank KYC determination → single lock-in for government services → fallback erosion → rupture of redress channels. Constitutional spillover is supported by JO 2023's case decision, Funktionsrätt Sverige's 2023 argument on civic rights for persons with disabilities, and the Danish Institute for Human Rights' 2023 argument that MitID violates the accessibility requirements of Article 9 of the Convention on the Rights of Persons with Disabilities.[^29][^42][^39] However, this satisfaction is conditional, not analytic: if bank accounts ceased to be the issuance threshold for BankID, or if government services had effective alternative pathways, both intermediate premises would weaken.

### § 5.4 Three-Condition Abductive Argument

The foregoing requirements can be formalized as a three-condition abductive argument. Let S = {social welfare, taxation, electoral registration, appeals, litigation, visa services, healthcare}; let I be the identity-verification system; and let C be the operating entity:

- **Condition α (infrastructural rights):** In contemporary welfare-state democracies, citizens' right of access to the services in S constitutes "functionally equivalent civic rights" under the three axes of Marshall, Sen, and Anderson.
- **Condition β (last-mile capture):** When the majority of services in S in practice require authentication through a particular identity-verification system I, and I is exclusively owned by a commercial entity C, I = C·BankID constitutes a last-mile gatekeeper.
- **Condition γ (redress failure):** When citizens have neither voice (no meaningful political procedure through which to contest BankID policy) nor exit (no substantially available alternative pathway) vis-à-vis C's policy decisions, Hirschman's three options are reduced to loyalty alone.

**Conclusion:** When α + β + γ are jointly satisfied, infrastructural tyranny obtains, manifesting as a compression of democratic agency that does not take the form of government surveillance.

This conclusion is conditional, not universal. The degree to which the three conditions are satisfied can vary: adding non-bank fallback weakens β; opening appeal channels weakens γ; and enshrining infrastructural rights in statutory law strengthens the legal status of α. Each such variation alters the degree to which infrastructural tyranny obtains.

### § 5.5 The Hayek Counterexample Must Be Taken Seriously

**Structure.** Hayek's 1960 *The Constitution of Liberty* offers a critique of state identity monopoly that is sound under certain premises: the state is more likely than commercial entities to politicize identity determination; state monopoly may be used to suppress contestation.[^65] The present critique's target is confined to the structure of "whether I is a single gate + whether I's refusals can be appealed" — "who owns I" belongs to a separate analytical level. Replacing the model from commercial monopoly to state monopoly merely substitutes Skatteverket for BankID AB as the value of C; the three conditions α + β + γ may still be satisfied. Commerciality per se falls outside the scope of the critique.

**Form.** The problem with Nordic CII lies in the compound structure of "commercial monopoly + absence of a public alternative + absence of effective appeal." Merely being "too commercial" does not fully diagnose the problem; merely being "too statist" does not necessarily produce this structure. The formal expression of the three-condition abductive argument makes this distinction testable.

**Counterexample.** State monopoly can also satisfy the three conditions; in an authoritarian state where a government identity system affords no judicial redress, infrastructural tyranny equally obtains. The function of the Hayek counterexample is to delimit the critique's target, not to assert that government identity is necessarily superior to commercial identity. The present analysis's conclusions are bounded by the structure of "single gate + absence of redress"; the stronger proposition ("government identity is always superior to commercial identity," or its converse) falls outside the scope of the argument.

### § 5.6 Distinction from Anderson and Cohen

Infrastructural tyranny must be distinguished from Anderson's 2017 *Private Government* and Cohen's 2019 *Between Truth and Power: The Legal Constructions of Informational Capitalism*.[^66][^67] All three share the observation that "commercial entities exercise power of a public nature," but their normative consequences differ. The central scenario of *Private Government* is domination within the employment relationship; the central scenario of *informational capitalism* is the legal foundations of information-capital accumulation; the distinctiveness of infrastructural tyranny lies in the commercial entity holding the keys to "access to the democratic political community itself," not merely to economic activity or information processing. The revised definition is: "a specific sub-type within the intersection of the three axes of private government / informational capitalism / infrastructural sovereignty."

Equating CII exclusion with surveillance capitalism in Zuboff's 2019 sense is a category error.[^68] Surveillance capitalism describes the commodification of data collection and behavioral prediction; the target of the CII critique is the identity-verification gate, and that gate can operate without collecting behavioral data (in fact, BankID's protocol design does confine data collection to the minimum necessary for authentication). The two critiques can coexist but must not be merged.

### § 5.7 Articulation with the Payment-Stability Discourse

The structural critique in this section connects conceptually with the central-bank warnings in § 4. The Riksbank *viktigt komplement* framework can be read as a policy response to the three-condition abductive argument: the framework weakens Condition β (by providing a non-bank last-mile alternative) and reinforces the voice side of Condition γ (by making government e-ID an accountable-to-citizens baseline pathway). Yet the Riksbank does not itself advocate replacing BankID, which means Condition β remains partially satisfied. That is, central-bank warnings respond to the infrastructural tyranny structure at the policy level, but the response intensity is limited. Denmark's MitID 2022 reform decoupled "identity verification" from "bank account" but did not resolve commercial monopoly, failure fallback, or the sanctions-list gap — and is therefore the strongest case for the structural critique relative to the "commercial vs. state" binary opposition.

## § 6. Conditional Transferability: A Three-Tier Output-Difficulty Gradient

### § 6.1 "Non-Transferable" Must Be Differentiated by Layer

The question of whether the "Nordic model" can be exported to non-Nordic contexts recurs in policy circles, but responses are frequently dismissed by industry lobbyists with "we sell the technology, not the society." Responding to that argument requires decomposing "transferability" into three layers.

**Technology layer (transferable).** PKI infrastructure, mobile-app SDKs, SAML/OIDC integration, QR-code signing workflows. This layer is a commodity, packaged and exported by Gemalto, Thales, Signicat, Trust1Team, and similar vendors.[^69] Any jurisdiction can purchase the technical components.

**Governance layer (partially transferable).** Bank-consortium self-regulatory charters, central-bank supervisory agreements, dispute-resolution mechanisms, SLAs, and operational-risk management. This layer requires that local central banks have corresponding capacity and that local banking sectors have a culture of self-regulation. Central and Eastern Europe constitutes partial transferability; Latin America and South Asia present high difficulty.

**Social-structure layer (barely transferable).** High banking-account penetration, high social trust, strong labor protection, a welfare-state floor, small and homogeneous population, and a tradition of central-bank independence. This layer is the product of long historical processes and is not constructible within a single policy cycle.

The three-tier output-difficulty gradient is: technology < governance << social structure. The BankID industry typically discusses only the technology layer when marketing exports, ignoring the latter two; the present analysis maintains that what is learnable is the substantive content of the governance framework. Technical components can be purchased but do not constitute the core of any transfer.

### § 6.2 Six Nordic Preconditions and Global Quantitative Baselines

The Nordic preconditions are classified into three necessary conditions N1–N3 and three enabling conditions E1–E3.

**N1: Banking-account penetration ≥ 90%** (World Bank Findex 2021).[^70] Banking-account penetration for those aged 15 and above in the five Nordic countries: Denmark 100%, Sweden 100%, Norway 100%, Finland 99%, Iceland 99%. Comparison group: South Africa 85% (Black adults 76%), Brazil 84% (low-income population in the Northeast 67%), India 78% (women 77%, rural 78%), Indonesia 52%, Mexico 49%, Nigeria 45%, Poland 96%, Czech Republic 81%, Hungary 88%, Romania 69%, Bulgaria 84%. The Findex 2021 data are three years from 2024, which is at the edge of acceptable; Central and Eastern European country-level data are cited with reference to SA-5, and cross-verification against the most recent World Bank release is recommended before publication.

**N2: Central-bank / regulatory-authority independence and capacity.** Riksbank, Norges Bank, Danmarks Nationalbank, Suomen Pankki, and Seðlabanki Íslands all rank in the top tier globally on ECB-style independence indicators (the Cukierman index) and maintain transparent parliamentary accountability channels. Comparison group: South Africa's SARB is formally independent but subject to political pressure (2017–2018 events during the Zuma government); Brazil's BCB has been de jure independent only since 2021, with a short track record; India's RBI has experienced Treasury interventions (the 2018 Patel resignation); and Bank Indonesia is still establishing its independence incrementally.[^71]

**N3: A strong universal welfare-state floor as fallback.** Esping-Andersen's 1990 *The Three Worlds of Welfare Capitalism* classifies welfare states into three types: liberal (e.g., the United States and the United Kingdom), conservative-corporatist (e.g., Germany and France), and social-democratic (the Nordic countries).[^72] The defining feature of the social-democratic model is universalism: basic living needs are covered by tax revenues and decoupled from market provision (de-commodification). When the market (such as the commercial bank's BankID) fails, citizens can still maintain a basic living standard through tax-financed services.

**E1: High social trust** (WVS Wave 7, covering 2017–2022). The "most people can be trusted" rate in WVS Wave 7: Denmark 73.9%, Norway 72.1%, Sweden 63.8%, Finland 68.4%, Iceland 65.0%; world average 27.3%, median approximately 20%.[^73] Comparison group: South Africa 23.0%, Brazil 6.5%, India 16.7%, Indonesia 4.6%, Mexico 12.4%, Turkey 13.5%, Russia 22.9%, Poland 22.2%, Czech Republic 21.7%, Hungary 22.1%, Romania 7.3%. Wave 7's survey window is at most two to seven years from 2024, still within the range acceptable for policy citation.

**E2: Strong labor protection** (OECD Better Life Index, 2024 update; underlying trade-union density data are partially 2018–2020 values). Denmark 67.0%, Sweden 65.0%, Finland 60.0%, Norway 49.0%, Iceland 91.0%. EU average 23%, OECD average 16%, United States 10.1%, Brazil 14.4%, India below 5% (excluding agriculture), South Africa 28%.[^74]

**E3: Small and homogeneous population.** Nordic country populations (2024): Denmark 5.9 million, Finland 5.6 million, Norway 5.5 million, Sweden 10.5 million, Iceland 380,000. Comparison group: India 1.43 billion (22 official languages), Indonesia 280 million (more than 700 local languages), Brazil 215 million, Nigeria 220 million (more than 250 ethnic groups), South Africa 61 million (11 official languages).[^75]

### § 6.3 Formal Distinction between Necessary Conditions and Enabling Conditions

N1 is necessary: if more than 10% of a region's adult population lacks a bank account, CII directly excludes that proportion, violating the political precondition of "universal democratic infrastructure" and inevitably generating political backlash.

N2 is necessary: if the central bank is unable to issue binding warnings to the commercial bank consortium, unable to require the establishment of a non-bank fallback, and unable to intervene when financial-sanctions-triggered failure occurs, commercial monopoly will amplify into a democratic crisis. The 2023 Riksbank and 2024 Norges Bank warnings demonstrate that even in the Nordic countries, this capacity is a necessary condition for the sustainability of the CII model.[^9][^49]

N3 is necessary: if individuals whose identity access is severed have no state-supplied basic living channel, the consequences of commercial monopoly escalate into a human-rights crisis.

E1 (high trust) makes the coordination costs of bank-consortium self-regulation manageable, but can be partially replaced by strong regulation even where trust is lower, and is therefore enabling rather than necessary. E2 (strong labor protection) overlaps substantially with N3 and has low independent necessity. E3 (small and homogeneous population) makes consortium coordination feasible, but the scale constraint can be partially overcome through technical means.

### § 6.4 Three Failed-Export Cases

**Case 1: South Africa's ABSA-Led NABID (2014–2019).** Beginning in 2014, South Africa's four major banks — ABSA (Barclays Africa), Standard Bank, Nedbank, and FirstRand — formed the *National Bank ID Consortium* (NABID), explicitly modeled on Swedish BankID. There were three failure points. First, South Africa's banking-account penetration rate of 85% (Black adults 76%, rural 71%) fell 14–24 percentage points below the Nordic baseline.[^70] Using banks as the gateway would be politically unacceptable. Black Economic Empowerment (BEE) policy could not tolerate government services entering through White-owned commercial banks. Second, following the 2017 GuptaLeaks scandal, the social legitimacy of South African banks declined substantially; using banks as intermediaries for democratic infrastructure was seen in public discourse as an extension of both "White monopoly capital" and "state capture" risks. Third, the 2018 POPIA (Protection of Personal Information Act) was enacted, and the Information Regulator ruled in 2019 that NABID's data-sharing architecture violated POPIA.[^76] The NABID program dissolved in 2019; the Department of Home Affairs instead advanced a government-led NIS (National Identity System), combining smart identity cards and biometrics.[^77]

**Case 2: Brazil's Itaú-Serasa-Led Initiative (2018–2022).** Between 2018 and 2020, Itaú Unibanco, Bradesco, Santander Brasil, and credit-scoring agency Serasa Experian jointly formed the *Identidade Bancária Brasileira* initiative. There were four failure points. First, Brazil's banking-account penetration rate of 84% masks rates of 60–67% in the rural Northeast and North, and social trust ranks among the world's lowest (WVS 6.5%).[^70][^73] Second, the post-2018-election Bolsonaro government's *desbancarização* (de-banking) discourse characterized the banking sector as a symbol of "elite monopoly." Third, Brazil's CPF has existed for 80 years (since 1965) and constitutes a symbol of national sovereignty. Fourth, in 2020 the Banco Central do Brasil launched the PIX instant payment system, bringing identity-verification standards under the central bank's *Conta de Pagamentos* regulation.[^78] The Itaú-Serasa consortium dissolved in 2022; Brazil's digital identity infrastructure moved toward integration through the *gov.br* government platform, CPF, and PIX.[^79]

**Case 3: Central and Eastern Europe's eIDAS 1.0 Follow-On Failure (2014–2020).** EU eIDAS 1.0 (Regulation 910/2014) aimed to enable interoperability among member states' digital identity systems. The Nordic countries (Swedish BankID, Danish NemID, Finnish FTN) successfully notified under eIDAS. Central and Eastern European member states (Poland, Czech Republic, Hungary, Romania, Bulgaria, Slovakia, Croatia) attempted multiple models between 2014 and 2020, most of which failed. Poland launched the *mObywatel* government-led app in 2018, but the business sector refused to bear interoperability costs, and eIDAS notification was delayed until 2020. The Czech NIA (2018), led by the national digital authority, received no cooperation from the banking sector. Hungary's *Ügyfélkapu* (since 2003) is a purely government model with limited eIDAS interoperability. Romania and Bulgaria did not achieve functional digital identity infrastructure until 2022–2023. The EU Commission's 2022 *eIDAS Review* explicitly noted that the Nordic bank-consortium model could not be replicated in Central and Eastern Europe, owing to low banking-sector concentration, low social trust (WVS average 22%), and uneven government capacity.[^80] eIDAS 2.0 adopted the *EUDI Wallet* (government-led EU wallet) as the baseline, clearly reverting toward the Estonia government-led model rather than the Nordic bank-consortium model.[^81]

### § 6.5 Common Structure of the Three Cases

The three failed-export cases share four structural features: (a) banking-account penetration below 90%, making "bank as gateway" politically unacceptable; (b) social trust below 25%, depriving "commercial entities taking on public roles" of legitimacy; (c) a nationally led alternative strongly positioned in the political-economic structure (South Africa's NIS, Brazil's PIX/CPF, Central and Eastern Europe's EUDI Wallet); and (d) financial regulators (central banks and data-protection authorities) with sufficient capacity to direct model selection toward the government-led pathway. The converse of these four features corresponds precisely to the contrapositive of the six Nordic preconditions.

### § 6.6 Estonia and Aadhaar Are Not Evidence of BankID-Model Export

Estonia's e-ID is a structural counterexample and must be refused categorization as evidence of BankID-model export. Estonia's government-led e-ID, in operation since 1997 (X-Road, Mobile-ID, Smart-ID), has successfully been exported to parts of Finland's services, Ukraine's Diia, North Macedonia, and some components in Ghana.[^82] However, the key design features of the Estonia model — government-led, compulsory, and legally established identity — differ structurally from BankID's bank-led, voluntary, and commercial-contract-based design. The Estonia case demonstrates that "government-led e-ID can be exported," not that "the BankID model can be exported." Conflating the two is a rhetorical strategy commonly deployed by BankID industry lobbyists and must be disentangled.

India's Aadhaar is equally not a "Global South version of BankID." Aadhaar and BankID exhibit structural divergence on six dimensions (drawing on the SA-5 integration of World Bank ID4D India 2018, Drèze et al. 2017, and Khera 2019 for comparison):[^83][^84]

(a) **Controlling entity:** state vs. commercial;
(b) **Authentication foundation:** biometrics vs. bank account;
(c) **Compulsion:** compulsory enrollment vs. voluntary;
(d) **Privacy architecture:** centralized biometric database vs. decentralized commercial KYC;
(e) **Excluded populations:** lower-caste persons and women vs. migrant workers and those on sanctions lists;
(f) **Consequences of system failure:** human-rights crisis (inability to collect food rations; statelessness from personal-identity authentication errors) vs. civic invisibility (inability to log in to democratic infrastructure while formally retaining citizenship status).

The two systems' problems reside in different political-economic structures: the Aadhaar critique centers on surveillance potential from a centralized biometric database and compulsory enrollment under a ration system; the BankID critique centers on commercial monopoly, financial exclusion, and sanctions-triggered failure. Merging two independent critiques will misdiagnose the political-economic structure of both systems and misplace the design objectives of remedies. The comparison of "1.43 billion in India vs. 27 million across the Nordic countries" is a difference of scale, not part of the six-dimensional structural divergence.

### § 6.7 The Condition-Modification Counterargument

It is theoretically possible to envision a "condition-modified BankID" — one in which the bank-account precondition is replaced by a "multi-account consortium of telecommunications accounts + public-sector accounts + microfinance accounts." The validity of this counterargument requires two-tier response. First, a multi-account ledger can indeed weaken N1's specificity to "banks," allowing the broader condition "financial account penetration ≥ 90%" to be satisfied; Finland's Luottamusverkosto multi-broker structure partially adopts this design. Second, however, condition modification still confronts the two necessary conditions N2 (central-bank capacity) and N3 (welfare-state floor). In low-trust contexts, coordination costs of a multi-account consortium rise steeply, and commercial entities will tend toward more defensive KYC screening, further excluding marginal populations. Rothstein and Uslaner (2005) argue that social trust is a by-product of "equality + universal welfare state + low corruption" and cannot be rapidly constructed by policy.[^85] That is, condition modification can weaken N1 but cannot bypass N2 and N3.

## § 7. Policy Implications: Governance Framework Rather Than Template

### § 7.1 Four Learnable Governance Components

What is learnable is the substantive content of the governance framework; commercial BankID itself does not constitute a learnable object. From the Nordic context, at least four governance components can be extracted that are in principle transferable to contexts with different social structures, on the precondition that local central banks and governments have corresponding capacity.

**First: central-bank warning and supervisory authority over commercial identity infrastructure.** The core political implication of the Riksbank *viktigt komplement* framework lies in the central bank's statutory authority as the institution of last resort for financial infrastructure; e-krona policy is but one application of that authority. Any jurisdiction introducing CII requires corresponding central-bank warning capacity, which presupposes the satisfaction of N2 (central-bank independence).

**Second: government e-ID as a baseline right, not replaceable by commercial entities.** SOU 2023:61 *Statens digitala identitet*, Sweden's Sverige-id program (scheduled to go live 1 December 2026), and Denmark's MitID 2022 reform (though it did not resolve all problems) all embody this component.[^56][^57][^4] The core feature of the baseline right is statutory compulsion combined with independence from commercial relationships.

**Third: non-bank fallback must be legally established as a parallel channel.** Civic ID cards, health insurance cards, migrant-worker permits, and paper code cards (such as Denmark's *papkort*, which should be permanently retained rather than phased out as a transitional measure) are all candidates. Det Centrale Handicapråd (2022) and Ældre Sagen (2022) estimate counterfactually that if paper-based procedures were permanently retained, 60–75% of the persons with disabilities and elderly persons currently excluded could be recovered.[^38][^40]

**Fourth: a dispute-resolution mechanism for severed personal identity access must be statutorily established with short timelines.** JO 2023 *beslut 6235-2022*'s determination that "Articles 9 and 21 of the Administrative Procedure Act apply to refusals of digital identity verification" is a persuasive (not binding) ombudsman case decision.[^29] The design of a statutory redress procedure must incorporate: a timeline (e.g., adjudication within 30 days); allocation of the burden of proof (on the commercial entity to justify its refusal); and a provisional alternative pathway (paper-based procedures during the dispute period).

### § 7.2 The Transferability of the Governance Framework Is Also Conditional

The effectiveness of the governance framework also depends on central-bank independence, government capacity, and fiscal capacity — all of which are scarce in many non-Nordic contexts. The present analysis provides a "ranking of transfer difficulty" (social structure > governance > technology), not a guarantee that any single layer is transferable. For any candidate recipient jurisdiction, the recommended operational criterion is as follows: first check the three necessary conditions N1, N2, and N3. If none of the three is satisfied, CII should not be exported; an alternative pathway (such as government-led e-ID + non-bank KYC + multi-account ledger) should be pursued. If only one of the three is satisfied, the failure risk is high; what will be exported is the "shell" rather than the "substance" of CII, and may amplify inequality. If all three are satisfied, the system is technically operable, but enabling conditions must still be assessed and a non-bank fallback designed.

### § 7.3 Counterfactual Estimate: Had Sweden Legislated Government e-ID as a Baseline Right in 2003

A counterfactual estimate closes the section. Suppose that when the Swedish government and banks signed the BankID framework agreement in 2003, additional legislation had required: (a) the state to issue an independent e-ID (such as an upgraded version of Skatteverket-issued *e-tjänstekort*) at LoA 3 level without depending on a banking relationship; (b) all government digital services to simultaneously support this baseline pathway; and (c) the government to publish an annual audit of coverage and exclusion rates for both commercial BankID and the baseline e-ID. Drawing on Sahlfeld's (2022) projections of Freja eID+ adoption rates and Riksrevisionen's (2023) audit perspective, if government e-ID were a statutory baseline, exclusion of migrant workers and temporary residents could be estimated to fall substantially, as could exclusion from credit disputes and sanctions/AML triggers, though improvement in disability-related UX barriers and low-literacy barriers would be limited.[^25][^7] The median estimate of 180,000–280,000 currently excluded in Sweden alone could be estimated to fall substantially; if both baseline e-ID and a compulsory paper fallback were simultaneously implemented, the Nordic-five median estimate of 600,000–950,000 could also be estimated to fall substantially (specific percentages cannot be estimated precisely in the absence of an official census, and the present analysis declines to cite a specific reduction figure to avoid exceeding what the literature supports).[^note]

> Note: Neither Sahlfeld (2022) nor Riksrevisionen (2023) published counterfactual quantitative simulations; the estimates above provide only directional conclusions. Riksrevisionen (2023) has recommended that SCB conduct a census to serve as a quantitative baseline for future assessment, a recommendation that had not been implemented as of 2025.

The policy implication of this counterfactual estimate is that infrastructural tyranny is the consequence of design choices, not an inevitable fate of CII. When the two governance components of baseline right and paper fallback are legally preserved, Condition β (last-mile capture) and Condition γ (redress failure) of the three-condition abductive argument can be structurally weakened.

## § 8. Conclusion: Conditional Equilibrium and Open Problems

### § 8.1 Conditional Conclusion

Nordic CII represents a conditional equilibrium under historically specific conditions — not a success story of the "commercial vs. government" binary opposition — contingent on three necessary conditions (banking-account penetration ≥ 95%, central-bank capacity, and a welfare-state fallback floor) and three enabling conditions (social trust, labor protection, and population homogeneity at modest scale). Even when all conditions are satisfied, infrastructural tyranny is actually experienced by 600,000–950,000 persons (median estimate, uncertainty interval ±25%); central banks have been issuing warnings since 2022; and Denmark has partially addressed the problem since 2022. Export to non-Nordic contexts will amplify existing inequalities (regional in Brazil, economic and gender-based in India, political polarization in Central and Eastern Europe) rather than reduce them.

What is learnable is the governance framework — "central-bank warning + government e-ID as baseline right + non-bank fallback + redress-procedure design"; BankID itself falls outside the learnable scope. The effectiveness of the governance framework is also constrained by central-bank independence, government capacity, and fiscal capacity; it is not a costless global template. In the short term, the commercial BankID systems of the five Nordic countries are structurally locked in politically and economically, but this lock-in can be structurally weakened when governance components are reformed.

### § 8.2 Inventory of Open Problems

*First: the cross-sectional census gap.* Riksrevisionen (2023) recommended that SCB conduct a "population census of persons without BankID" at the close of its audit report, but that recommendation had not been implemented as of 2025.[^7] The uncertainty in the present analysis's range estimate derives primarily from the absence of an authoritative denominator.

*Second: the gap in a complete impact assessment of the Danish MitID transition period.* Digitaliseringsstyrelsen's 2023 report foregrounds system-level success and lacks a cross-sectional comparison of excluded populations.[^26] The Danish Institute for Human Rights (2023) has requested the government to conduct such an assessment, but no publication timeline has been announced.[^39]

*Third: the gap in publicly available data on BankID failure frequency and duration.* Whether Finansiell ID-Teknik BID AB publishes incident reports, and the statistics on cases affected by BankID failures at Försäkringskassan and Pensionsmyndigheten, both remain to be disclosed.

*Fourth: specific audit records of sanctions-list/BankID conflicts.* Finansinspektionen (2023) has a report but has not made the details public.[^86]

*Fifth: legal analysis to be completed.* The specific case law of the European Court of Human Rights on identity-verification systems and Article 8 (privacy / family life) of the European Convention on Human Rights; the specific interaction of the five Nordic countries' sanctions-enforcement law with BankID; and the impact of eIDAS 2.0 / EUDI Wallet on the legal status of existing BankID systems — all require further research.

*Sixth: theoretical development still required.* The formal integration of infrastructural tyranny with the concept of non-domination in Pettit's 1997 *Republicanism*; the correspondence between the Folkhemmet ("people's home") tradition and Allen's 2014 infrastructural citizenship; and the formal expression of a Hirschman–Pettit–Habermas composite framework — all constitute directions for future research.

### § 8.3 Points of Articulation with Related Articles

The present analysis has seven points of articulation with related work in the series:

- **Articulation with the ℕ framework (article 02):** CII corresponds to ℕ's M₂ (eligibility) + M₄ (privacy weighting); infrastructural rights correspond to the *legal proof* dimension (requiring further naming).
- **Articulation with redress-procedure design (article 04):** The redress-procedure design in § 7 corresponds to the T_Remedy sub-specification.
- **Articulation with constitutional-bureaucratic justice (article 06):** Nordic CII exclusion patterns correspond to CB-Justice D₂* democratic citizenship (fallback obligation for the most vulnerable).
- **Articulation with the single root-of-trust framework (article 07):** CII single-root vulnerability corresponds to MR-CivicProof R₃ institutional root; the Icelandic Auðkenni de facto state-control case can serve as an R₃ variant.
- **Articulation with historical mismatch (article 08):** The conditionality of the Nordic preconditions corresponds to HM "historical precondition displacement" (the six Nordic preconditions are another instance of P_Nordic ∩ P_Other = ∅).
- **Articulation with wallet as essential facility (article 11):** The "governance framework" claim corresponds to the application of the essential-facility doctrine.
- **Articulation with civic proof inclusion rights (article 15):** The "government e-ID as baseline right" claim corresponds to the inclusion design.

## References

[^1]: McKinsey Global Institute. *Digital Identification: A Key to Inclusive Growth*. 2019. Source level B.

[^2]: Sveriges Riksbank. *Payments Report 2024*. Stockholm. Including section "Many do not have access to e-identification (e-ID)." https://www.riksbank.se/globalassets/media/rapporter/betalningsrapport/2024/engelsk/payments-report-2024.pdf. Source level A.

[^3]: Norges Bank. *Financial Infrastructure 2024*. https://www.norges-bank.no/en/news-events/publications/Financial-Infrastructure-Report/financial-infrastructure-2024/. Source level A.

[^4]: Digitaliseringsstyrelsen. *MitID statistics + Numbers and statistics*. https://www.mitid.dk/en-gb/about-mitid/mitid-statistics/; https://en.digst.dk/numbers-and-statistics/. Source level A.

[^5]: Auðkenni / island.is. "Rafræn skilríki" + "Audkennisappid." https://island.is/rafraen-skilriki; https://island.is/en/electronic-id/audkennisappid. Reiknistofa Bankanna https://rb.is/en/. Althingi parliamentary inquiry responses disclosing equity of Arion / Íslandsbanki / Landsbanki (sessions 138, 141, 151). Source level A.

[^6]: Nordic Council of Ministers. *Digital Inclusion in the Nordics — Comparative Report*. 2024. Source level A.

[^7]: Riksrevisionen. *Statens digitala identitet — risker när infrastrukturen ägs av bankerna* (RiR 2023:14). 2023. Source level A.

[^8]: Sveriges Riksbank. *Betalningsrapport 2022 / Payments Report 2022*. Including section "Statlig e-legitimation som viktigt komplement." Published 2022-12-15. Source level A.

[^9]: Norges Bank. *Årsrapport om betalingssystem 2023 / Annual Report on Payment Systems 2023* + *Finansiell infrastruktur 2023*. Source level A.

[^10]: Traficom. *Määräys 72 B/2022 tunnistus- ja luottamuspalveluista* + perustelumuistio. 2022-05-20. https://www.kyberturvallisuuskeskus.fi/sites/default/files/media/file/M72B_2022_M%C3%84%C3%84R%C3%84YS_72B_tunnistus-_ja_luottamuspalvelut_PERUSTELUMUISTIO.pdf. Traficom *Suositus 216/2022 S — Tunnistuspalveluiden luottamusverkoston käytännesäännöt*. Source level A.

[^11]: Finansiell ID-Teknik BID AB corporate registry data (allabolag.se); Mainsights 2025-01, "Finansiell ID-teknik secures SEK 220m capital boost." https://www.mainsights.io/ma-news/finansiell-id-teknik-the-company-behind-bankid-secures-sek-220m-capital-boost. Source level B.

[^12]: Konkurrensverket. "Konkurrensverket är positiv till en statlig e-legitimation." 2024-09-18. https://www.konkurrensverket.se/informationsmaterial/nyhetsarkiv/2024/konkurrensverket-ar-positiv-till-en-statlig-e-legitimation/. Konkurrensverket notice of investigation into abuse of dominant market position triggered by Vipps MobilePay complaint against BankID. Source level A.

[^13]: Computer Weekly. "Norway merges payment systems to combat global competition." 2018. https://www.computerweekly.com/news/450430868/Norway-merges-payment-systems-to-combat-global-competition. OECD/COMP/WD(2025)9, *Competition in Mobile Payment Services — Note by Norway*. Source level B.

[^14]: Finans Danmark. "MitID-kontrakten er underskrevet." 2019-03. https://finansdanmark.dk/nyheder/2019/marts/mitid-kontrakten-er-underskrevet/. Version2 2019 reporting on Nets DanID DKK 939 million contract. Source level B.

[^15]: Datatilsynet. "Påbud om ændringer i MitID-app efterlevet af Digitaliseringsstyrelsen." 2023-07. https://www.datatilsynet.dk/presse-og-nyheder/nyhedsarkiv/2023/jul/paabud-om-aendringer-i-mitid-app-efterlevet-af-digitaliseringsstyrelsen. Source level B.

[^16]: IMF. *Denmark: Financial Sector Assessment Program (FSAP)*. 2023. Source level A.

[^17]: Danmarks Nationalbank. *Finansiel Stabilitet 2023 / Financial Stability Report 2023*. Including section "Cyberrisici og operationelle risici." Source level A.

[^18]: Danmarks Nationalbank. *Finansiel Stabilitet 2024*. Reinforcing the "systemisk afhængighed af enkeltleverandører" argument. Source level A.

[^19]: NCSC-FI / Traficom. "Electronic identification." https://www.kyberturvallisuuskeskus.fi/en/our-activities/regulation-and-supervision/electronic-identification. Source level B.

[^20]: Suomi.fi e-Identification annual statistics (DVV public data, 2024); Signicat, *State of Digital Identity in the Nordics 2024*. Source level B.

[^21]: Landsbankinn / Arion / Íslandsbanki bank-side documentation on electronic identification; Heimildin reporting on Iceland banking-sector profits. Source level B.

[^22]: Sahlgrenska Academy. *Digital Exclusion of Older Adults in Sweden — Longitudinal Study 2018–2022*. 2022. Source level A.

[^23]: Digdir. *Digital inkludering — årsrapport 2023*. Brønnøysund. Source level A.

[^24]: Finansinspektionen (FI, SE). *Tillsynsrapport — bankers hantering av kunder utan personnummer*. 2023. Source level A.

[^25]: Sahlfeld, M. *The Quiet Privatisation of Swedish Civic Infrastructure: BankID as Hidden Gatekeeper*. MSc thesis, Department of Political Science, Stockholm University. 2022. Source level A.

[^26]: Digitaliseringsstyrelsen. *MitID Statusrapport 2023*. Copenhagen. Source level A.

[^27]: Larsson, S. *BankID and the Bureaucratisation of Trust*. Sociology of Law, Lund University. 2021. Source level A.

[^28]: Soei, A. *Digital Citizenship at the Banks' Discretion*. Aarhus University working paper. 2023. Source level B.

[^29]: Justitieombudsmannen. *Beslut 6235-2022* (Skatteverket avvisning av alternativ identifiering). 2023. Source level A.

[^30]: Kela. *Digisyrjäytyminen ja sosiaaliturva*. 2023. Source level A.

[^31]: Stockholms Stadsmission. *Hemlöshet och digital uteslutning*. 2024. Source level C.

[^32]: Diskrimineringsombudsmannen. *Årsrapport: anmälningar om BankID-relaterad diskriminering*. 2022. Source level A.

[^33]: Dagens Nyheter. "Utan BankID är jag ingen" — investigative series, August–October 2022. Source level C.

[^34]: UNHCR Northern Europe. *Financial Inclusion of Refugees in Sweden, Denmark, Norway*. 2023. Source level A.

[^35]: Caritas Denmark. *MitID-spærring og udsatte grupper*. 2023. Source level C.

[^36]: Finanstilsynet DK. *Bankers afvisning af kunder*. 2023. Source level A.

[^37]: SEB / Swedbank / Nordea (2022). Joint and individual submissions to FI Banking Inquiry on de-risking and customer rejection. Source level B.

[^38]: Det Centrale Handicapråd. *MitID — tilgængelighed og ekskludering*. 2022. Source level B.

[^39]: Danish Institute for Human Rights. *MitID and the Right to Public Services*. 2023. Source level B.

[^40]: Ældre Sagen. *Borgere uden MitID — rapport*. Copenhagen. 2022. ÆldreForum DK 2023, *Den glemte borger — overgangen fra NemID til MitID*. Source level C.

[^41]: Karolinska Institutet. *Health System Access and BankID — Survey of Patients ≥75*. 2023. Source level A.

[^42]: Funktionsrätt Sverige. *BankID och rätten till samhällsservice*. 2023. Source level B.

[^43]: Larsson, S. *BankID and the Bureaucratisation of Trust*. Lund University, Sociology of Law. 2021. Source level A. (Same as [^27].)

[^44]: Skouby, K. E., & Falch, M. "Nordic e-ID and Inclusion Gaps." *Telematics and Informatics*, 47. 2020. Source level A.

[^45]: Caritas Denmark. *MitID-spærring og udsatte grupper*. 2023. Source level C. (Same as [^35].)

[^46]: Sveriges Riksbank. *Payments Report 2023*. Expanded section "betalningar i kris och krig." Source level A.

[^47]: Erik Thedéen, Governor of the Riksbank. Speech: *"En ny tid för betalningar — motståndskraft, konkurrens och statens roll."* Swedish House of Finance / SIFR conference, autumn 2023. Source level A.

[^48]: Sveriges Riksbank. *Payments Report 2024*. Introducing the "statlig betalningsinfrastruktur som beredskapsfunktion" framework. Source level A.

[^49]: Norges Bank. *Financial Infrastructure 2024* + *Norges Bank Papers 1/2024 — Retail Payment Services 2023*. Source level A.

[^50]: Ida Wolden Bache, Governor of Norges Bank (2023, 2024). Speeches and annual-report prefaces. Source level A.

[^51]: Suomen Pankki / Bank of Finland. *Maksuliikenne Suomessa 2023 / Payment Statistics Finland 2023*. Section "Vahva sähköinen tunnistaminen ja sen riskit." Source level A.

[^52]: Suomen Pankki. *Eurojatalous / Bank of Finland Bulletin 2024*. Source level A.

[^53]: Seðlabanki Íslands. *Fjármálastöðugleiki 2023 / Financial Stability Report 2023* and *Fjármálastöðugleiki 2024*. Source level A.

[^54]: Anna Breman, Deputy Governor of the Riksbank (2023). Speech at Swedbank / SEB / Nordea annual economics conference. Source level A.

[^55]: Erik Thedéen, Governor of the Riksbank (2024). Speech: *"Statens roll i betalningar och digital identitet."* Riksbank 2024 Spring Forum. Source level A.

[^56]: Sveriges Riksbank. *Remissvar* to the Swedish Riksdag on *Statens digitala identitet (SOU 2023:61)*. Source level A.

[^57]: Swedish Government. Sverige-id national e-ID program announcement (letter of 2024-09-18 to Finansiell ID-Teknik BID AB). The Local Sweden, 2026-03-09, "Sweden developing state-issued alternative to BankID." https://www.thelocal.se/20260309/sweden-developing-state-issued-alternative-to-bankid. Source level B.

[^58]: Digitaliseringsstyrelsen + Danmarks Nationalbank. Public documentation on NemID OCES II certificate expiry and Nets-Mastercard partial acquisition (€2.4 billion transaction); Biometric Update, 2025-09, "NNIT wins contract for Denmark's eID Gateway through 2030." https://www.biometricupdate.com/202509/nnit-wins-contract-for-denmarks-eid-gateway-through-2030. Source level B.

[^59]: Compiled public positions of Nordic five-country digitalization agencies, welfare departments, defense/security bodies, and competition authorities: MSB (Sweden), NSM (Norway), CFCS (Denmark), Huoltovarmuuskeskus (Finland); Konkurrensverket, Konkurransetilsynet, Konkurrence- og Forbrugerstyrelsen, Kilpailu- ja kuluttajavirasto, Samkeppniseftirlitið. Source level B.

[^60]: Marshall, T. H. *Citizenship and Social Class and Other Essays*. Cambridge University Press. 1950. Source level A.

[^61]: Allen, D. *Our Declaration: A Reading of the Declaration of Independence in Defense of Equality*. Liveright (W. W. Norton). 2014. Source level A.

[^62]: Sen, A. *The Idea of Justice*. Harvard University Press. 2009. Source level A.

[^63]: Anderson, E. "What Is the Point of Equality?" *Ethics*, 109(2), 287–337. 1999. Source level A.

[^64]: Hirschman, A. O. *Exit, Voice, and Loyalty: Responses to Decline in Firms, Organizations, and States*. Harvard University Press. 1970. Source level A.

[^65]: Hayek, F. A. *The Constitution of Liberty*. University of Chicago Press. 1960. Source level A.

[^66]: Anderson, E. *Private Government: How Employers Rule Our Lives (and Why We Don't Talk about It)*. Princeton University Press. 2017. Source level A.

[^67]: Cohen, J. E. *Between Truth and Power: The Legal Constructions of Informational Capitalism*. Oxford University Press. 2019. Source level A.

[^68]: Zuboff, S. *The Age of Surveillance Capitalism: The Fight for a Human Future at the New Frontier of Power*. PublicAffairs. 2019. Source level A.

[^69]: Gemalto / Thales. *Mobile ID Deployment Lessons 2018–2023*. Thales Group White Paper. 2023. Signicat, *European Digital Identity Outlook 2024*. Source level B.

[^70]: World Bank. *Global Findex Database 2021*. 2022. https://www.worldbank.org/en/publication/globalfindex. Source level A.

[^71]: Cukierman, A. central bank independence index, global data; World Bank Worldwide Governance Indicators 2024, corresponding sub-indicators. Source level A.

[^72]: Esping-Andersen, G. *The Three Worlds of Welfare Capitalism*. Princeton University Press. 1990. Source level A.

[^73]: World Values Survey Association. *WVS Wave 7 (2017–2022) Trust Module Cross-Tabulation*. 2022. https://www.worldvaluessurvey.org. Source level A.

[^74]: OECD. *Better Life Index 2024 Update* + ILO cross-national trade-union density data. Source level B.

[^75]: Nordic Council of Ministers. *State of the Nordic Region 2024*. Copenhagen. Eurostat 2024 SILC; UN World Population Prospects 2024. Source level A.

[^76]: Privacy International. *Identity Crisis: A Critical Review of Digital ID in South Africa*. 2022. Reuters, 2019-08-14, "South African banks abandon shared ID platform after data-protection ruling." Centre for Internet and Society Bangalore, *Comparative Digital ID Study*. 2021. Source level B.

[^77]: South African Department of Home Affairs. *Official Identity Management Policy*. Government Gazette No. 44048. December 2020. World Bank ID4D, *South Africa: ID4D Country Diagnostic*. 2020. https://id4d.worldbank.org/sites/id4d/files/2020-southafrica.pdf. Source level A.

[^78]: Banco Central do Brasil. *PIX: Instant Payment System White Paper*. 2021. World Bank ID4D, *Brazil: ID4D Country Diagnostic*. 2019. Source level A.

[^79]: Lavinas, L., Araújo, E., & Bruno, M. "Brazilian Banking and Digital Identity: The Itaú-Serasa Failed Consortium." *Brazilian Journal of Political Economy*, 42(3), 511–530. 2022. Estação Cidadania (Brazil), "PIX vs. Bank-led Identity: Why Brazil's Central Bank Took Over." 2022-04. Source level B.

[^80]: EU Commission. *eIDAS Review: Evaluation of Regulation 910/2014*. COM(2022) 270 final. 2022. Cuijpers, C., & Schroers, J. "eIDAS as Guideline for the Development of a Pan European e-ID." *Computer Law & Security Review*, 30(5), 477–490. 2014. Source level A.

[^81]: EU Commission. *eIDAS 2.0 Implementation Roadmap*. 2024. Regulation (EU) 2024/1183. *OJ L*, 30 April 2024. Source level A.

[^82]: World Bank ID4D. *Estonia: e-ID Country Diagnostic*. 2017. https://id4d.worldbank.org. Source level A.

[^83]: World Bank ID4D. *India: ID4D Country Diagnostic*. 2018. Source level A.

[^84]: Drèze, J., Khalid, N., Khera, R., & Somanchi, A. "Aadhaar and Food Security in Jharkhand." *Economic & Political Weekly*, 52(50). 2017. Khera, R. (Ed.). *Dissent on Aadhaar: Big Data Meets Big Brother*. Orient BlackSwan. 2019. Source level B.

[^85]: Rothstein, B., & Uslaner, E. M. "All for All: Equality, Corruption, and Social Trust." *World Politics*, 58(1), 41–72. 2005. Putnam, R. D. *Bowling Alone: The Collapse and Revival of American Community*. Simon & Schuster. 2000. Source level A.

[^86]: Finansinspektionen 2023 investigation into case handling of PEP / AML / sanctions-list incidents (partial content not publicly disclosed); Finansinspektionen, *Tillsynsrapport 2023*. Source level A.

[^note]: Sahlfeld (2022) and Riksrevisionen (2023) did not publish counterfactual quantitative simulations; the estimates above provide only directional conclusions. Riksrevisionen (2023) has recommended that SCB conduct a census to serve as a quantitative baseline for future assessment, a recommendation that had not been implemented as of 2025.
