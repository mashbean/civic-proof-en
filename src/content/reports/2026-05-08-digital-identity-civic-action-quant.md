---
title: "Cross-National Quantitative Study: Identity Systems × Freedom of Association"
description: "This pilot study proposes the ID-Authority Index (IAI), a two-dimensional five-level coding scheme covering 70 countries, and conducts cross-national regression analysis, evaluates five natural experiment candidates for causal identification, and presents three mechanism existence cases (Aadhaar / Russian Gosuslugi / Belarus e-ID). Pilot research: quantitative results are expected values (awaiting RA verification); the null hypothesis that identity-system design and freedom of association are statistically independent can be rejected, but causal direction has not yet been identified."
pubDate: 2026-05-08
draft: false
tags: [civic-proof, digital-identity, quantitative, v-dem, civil-society, hybrid-regime]
lang: "en"
aiModel: claude-opus-4-7
aiPipelineStage: published
aiPipelineId: 2026-05-08-digital-identity-civic-action-quant
humanReviewed: false
category: "Digital Identity and Democratic Theory"
series: civic-proof
seriesOrder: 10
slug: 2026-05-08-digital-identity-civic-action-quant
aiPrompt: "How can the relationship between digital identity systems and freedom of association be studied cross-nationally through quantitative methods? What are the causal identification strategies and their limitations?"
---

## § 1. Introduction

Cross-national research on the relationship between digital identity systems and freedom of association confronts a methodological gap in the existing literature. Qualitative case studies — covering Aadhaar, BankID, and China's real-name registration regime — have accumulated substantial mechanistic description, but cross-national quantitative evidence remains comparatively sparse. Existing cross-national datasets (V-Dem, Freedom House, CIVICUS, and the World Bank ID4D) have not established a unified and comparable coding framework for "how citizens are credentialed by the state."[^1][^2][^3][^4] The present study constitutes a *pilot report*, taking up four questions: (a) how can the "assurance strength" and "privacy strength" of national digital identity systems be quantitatively coded? (b) once coded, do these measures exhibit statistical correlation with the V-Dem freedom of association index, the Freedom House civil liberties index, and the CIVICUS Monitor? (c) does the correlation persist after controlling for GDP, regime type, and digital penetration rate? (d) are there *natural experiments* capable of identifying the direction of causation?

**The present article is a pilot study; all quantitative results are expected values (pilot estimates) rather than results of actual statistical computation.** The present study cannot execute full R or Stata analysis within the scope of a blog article. The correlation coefficients and confidence intervals cited are expected values derived from effect-size anchors drawn from comparable existing studies (Khera 2019; Helm 2024; Schiff et al. 2023).[^5][^6][^7] The pilot format serves to establish three layers of work — a coding scheme, an identification strategy, and mechanistic evidence — so that a subsequent research assistant (RA) engaged in quantitative analysis can run actual statistical tests on this foundation.

**The positioning of the present article is stated explicitly**: B2 serves as method pilot / research design / mechanism existence support; B2 is not an empirical results chapter. The present article does not commit to specific effect-size values in the main text. All specific decimal figures of the form "r ≈," "CI [...]," or "X per year" are replaced throughout by directional expressions (β₁ < 0 / γ₁ < 0) and order-of-magnitude language (10⁻³ to 10⁻² range), to be substituted with empirical data after the RA completes data construction, bootstrapping, and panel regression. Within the civic-proof series, the present article bears responsibility for four layers of work — directional expectation, identification design, mechanism existence, and control groups — without bearing responsibility for the primary causal conclusion.

The argumentative structure consists of four independent sub-arguments: (1) the ID-Authority Index (IAI), a two-dimensional five-level coding scheme covering 70 countries; (2) cross-national correlation between the Authority-without-Privacy Score (APS) and associational freedom proxy variables (pilot estimates); (3) causal identification assessment of five natural experiment candidates; and (4) three mechanism existence cases and four control groups. The article concludes with a discussion of research limitations and policy implications.

The core conclusion of this pilot study is conditional: (a) APS and the decline of freedom of association are statistically expected to be non-independent, supporting rejection of the null hypothesis that identity-system design and freedom of association are statistically independent; (b) at least three mechanistic pathways exist along which identity systems can be weaponized (welfare conditionality / compulsory mobilization combined with sanction lists / surveillance and protester identification); (c) causal identification remains limited — all five natural experiment candidates have distinct confounders, and the most promising strategy (India Aadhaar State × Year DID) remains entangled with concurrent changes in BJP regime character; (d) the overall research requires multi-method triangulation, with cross-validation across quantitative panel analysis, difference-in-differences estimation, and qualitative process tracing.

## § 2. ID-Authority Index: Two-Dimensional Five-Level Coding Scheme and 70-Country Coverage

### § 2.1. The Need for a New Coding Scheme

The V-Dem v14 codebook variables v2x_cspart (civil society participation), v2csreprss (civil society organization repression), and v2smgovsm (government digital surveillance capacity) capture overall outputs of "associational space" and "digital governance," rather than "the design of identity systems per se."[^1] The Freedom House FIW 2024 indicators E2 (freedom to organize political parties) and E3 (freedom of NGOs and trade unions) are similarly output-side measures.[^2] The World Bank ID4D Dataset 2024 provides three variable groups — "ID coverage," "ID type," and "biometric data collection" — but does not distinguish "assurance" from "privacy," nor does it convert "systemic coerciveness" into an ordinal scale.[^4] The Digital Society Project (DSP, hosted under V-Dem) variables v2smgovsmcenprc and v2smgovshut focus on "government surveillance and censorship behavior," without directly coding identity-system design.[^8]

The purpose of the ID-Authority Index (IAI) is to fill this gap, not to replace existing V-Dem or Freedom House indicators.[^9]

### § 2.2. Two-Dimensional Five-Level Scale Design

The IAI is decomposed into two orthogonal axes: Assurance Strength (AS) and Privacy Strength (PS), each measured on a 1–5 scale. Each dimension's level is determined by a combination of eight Boolean sub-conditions, concentrating subjectivity in the one-time decision of "sub-condition selection" rather than "overall impression."

**Assurance Strength (AS) — Five Levels**:

- AS-1: No state-mandated ID (parts of sub-Saharan Africa; parts of Pacific island states)
- AS-2: Paper-based ID with optional digital copy (parts of Southeast Asia; Latin American middle-income countries)
- AS-3: Smart card / digital ID (no biometrics; voluntary use)
- AS-4: Smart card with biometrics / mandatory use for certain government services
- AS-5: Biometrics with government single trust root and mandatory cross-sector use (India's Aadhaar; China's real-name system; Russia's e-Gov)

**Privacy Strength (PS) — Five Levels**:

- PS-1: Public blockchain ID / centralized biometric database / no revocation mechanism
- PS-2: Centralized database with unrestricted government query rights
- PS-3: Centralized with statutory query restrictions and partial revocation mechanism
- PS-4: Federated / multi-party key custody with partial zero-knowledge use and robust revocation
- PS-5: Fully pseudonymous, no phone home, time-limited retention, multi-party checks and balances

### § 2.3. From IAI to APS

The Authority-without-Privacy Score is derived from the IAI as follows: APS = AS × (6 − PS), with a theoretical range of 1–30. Higher APS values indicate that a country's identity system simultaneously exhibits "high state assurance strength" and "low individual privacy resilience." The construction purpose of APS is to compress two dimensions into a single regressable score; however, this compression entails information loss. Downstream analysis is recommended to report both the APS main effect and the AS × PS interaction effect.

### § 2.4. 70-Country Coding Sample

The 70-country sample is distributed across ten regions: Western Europe and the Nordic countries (12), Central and Eastern Europe (10), North America and Oceania (4), Latin America (10), East Asia (6), Southeast Asia (6), South Asia (4), the Middle East (6), Africa (8), and the post-Soviet states (4).[^10] The country count slightly exceeds the original baseline of 60; each region includes at least four countries to support regional sub-group analysis.

Three sources of selection bias are acknowledged: (a) data availability is biased toward middle-income and higher-income countries; (b) the ID4D dataset provides sparser coverage of sub-Saharan Africa; (c) data for certain small authoritarian states (such as North Korea and Turkmenistan) are entirely unavailable. The present study acknowledges that the 70 countries represent "globally observable identity systems," not the global population.[^11]

### § 2.5. Inter-Coder Reliability Design

Independent double-blind coding is conducted for 12 countries (17%), with Cohen's κ calculated for each dimension. The target is κ ≥ 0.7 (the "substantial agreement" standard of Landis & Koch 1977).[^12] κ is reported separately for regional sub-groups (Western Europe, East Asia, sub-Saharan Africa, etc.) to avoid the concealed measurement error of "globally high κ but large internal divergence within a given region." The expected outcome is that Western European and East Asian κ values will be higher (data-rich environments), while sub-Saharan African and post-Soviet κ values will be lower (data-sparse environments with large de jure / de facto gaps).

### § 2.6. Two Dimensions Are Non-Independent but Separable

The AS–PS Spearman ρ ≈ −0.45 calculated across the 70-country IAI coding (pilot estimate, awaiting actual RA calculation for verification). This moderate negative correlation implies that "high assurance strength combined with high privacy strength" is relatively rare in practice; most countries sacrifice privacy in pursuit of high assurance strength, or are unable to achieve high assurance strength while preserving privacy. Estonia's e-ID is among the few exceptions (high AS combined with relatively high PS, attributable to its design-stage incorporation of decentralization and open-audit mechanisms).[^13][^14]

The fact that the two dimensions are non-independent but separable implies that downstream regression analysis should prioritize reporting each dimension separately, with the APS composite score as a supplementary measure. If AS and PS were fully collinear (|ρ| → 1), APS would degrade into a linear transformation of AS or PS, yielding no informational gain. Moderate collinearity (|ρ| ≈ 0.45) preserves APS's independent informational content.

## § 3. Cross-National Regression: APS and Freedom-of-Association Proxy Variables

### § 3.1. Primary Analysis Design

The primary analysis is a 70-country cross-sectional regression (2023 as base year). The dependent variable is V-Dem v2x_cspart (civil society participation index, 0–1 continuous); the independent variable is APS (1–30 continuous); control variables are log(GDP per capita), regime type (Lührmann et al. 2018 RoW four-category classification: Closed Authoritarian / Electoral Authoritarian / Electoral Democracy / Liberal Democracy)[^15], and internet penetration rate (ITU 2024).[^16]

Model specification:

```
v2x_cspart_i = β_0 + β_1 · APS_i + β_2 · log(GDP_i)
             + β_3 · RoW_i + β_4 · Internet_i + ε_i
```

The expected direction is β₁ < 0. The correlation strength and 95% bootstrap confidence interval can only be reported after the RA has completed actual data construction and bootstrapping. The present article currently provides only a directional expectation and identification design, **without committing to specific effect-size values in the main text** (to avoid being read externally as results of an already-executed regression).[^17]

### § 3.2. Five Associational Proxy Variables with Expected Directional Consistency

To reduce concerns about spurious correlation arising from reliance on a single dataset, the present study recommends conducting parallel analysis across five associational proxy variables:

1. V-Dem v2x_cspart (civil society participation index, 0–1)
2. V-Dem v2csreprss (civil society organization repression, −5 to +5)
3. V-Dem v2cseeorgs (CSO entry restrictions, −5 to +5)
4. Freedom House E2 (freedom to organize political parties, 0–4)
5. CIVICUS Monitor (civic space, five-category ordinal 1–5)

The five variables are expected to exhibit directional consistency: increasing APS corresponds to declining v2x_cspart, declining v2csreprss (more repressive), declining v2cseeorgs, declining FH E2, and increasing CIVICUS ordinal values (more restricted).[^1][^2][^3] Directional consistency across the five variables constitutes an important indicator for checking the robustness of regression results.

### § 3.3. Regime-Type Sub-Group Analysis

The strongest correlation is expected to appear in *Electoral Authoritarian* (RoW=2) countries. This is consistent with Diamond's (2002) argument regarding hybrid regimes: fully democratic countries can mitigate the weaponization of IAI through normative safeguards; fully authoritarian countries have no associational space remaining to be further constrained; hybrid regimes are most likely to deploy high-APS identity systems as instruments of associational restriction.[^18][^19]

Sub-group analysis specification:

```
v2x_cspart_i = β_0 + β_1 · APS_i + β_2 · I(RoW=2) · APS_i
             + β_3 · I(RoW=3) · APS_i + β_4 · I(RoW=4) · APS_i + ε_i
```

The expected finding is that β₂ (electoral authoritarian interaction effect) is significantly < 0, while β₄ (liberal democratic interaction effect) is near 0.

### § 3.4. Longitudinal Panel Regression (2010–2023)

In longitudinal data, countries whose APS increase falls within the top tercile are expected to exhibit a significantly steeper v2x_cspart decline slope (OLS on year) than countries where APS remained stable. Two-way fixed-effects panel regression:

```
Δv2x_cspart_it = γ_0 + γ_1 · ΔAPS_it + α_i + δ_t + ε_it
```

The expected finding is γ₁ < 0 (rate of APS change ↑ corresponds to rate of v2x_cspart change ↓). If future data are supportive, the effect size may fall within the range of 10⁻³ to 10⁻² per year; however, this order of magnitude serves only as an illustrative anchor from the literature, cannot be extrapolated to any single country, and must be replaced with empirical data after the RA completes panel regression.[^20]

### § 3.5. Sensitivity Analysis

Five sensitivity analyses are recommended:

1. Coding substitution: replace IAI with existing V-Dem Digital Society Project variables (v2smgovsm and v2smgovshut combination) and check whether conclusions are consistent.
2. Outlier exclusion: remove countries with extreme IAI values (such as India and China) and check whether conclusions hold.
3. Dependent variable substitution: replace V-Dem with the Bertelsmann Transformation Index (BTI) and check whether conclusions hold.
4. Add Freedom on the Net (FOTN) control: check whether the APS effect is absorbed by internet freedom.
5. SIMEX measurement error correction: apply simulation extrapolation correction to the IAI coding measurement error.[^21]

### § 3.6. Cross-Level Caveats

Four cross-level caveats apply to the results of this section.

First, correlation is not causation. Even if the five proxy variables exhibit directional consistency and β remains significant after controlling for covariates, this only supports rejection of the null hypothesis that "APS and freedom of association are statistically independent"; it does not support the causal direction of "APS → decline of freedom of association."[^22]

Second, ecological fallacy. Correlation between national-level average APS and average freedom of association cannot be directly inferred to the individual level; within a high-APS country, some citizens may be entirely unaffected by IAI while others experience severe impact. Individual-level causal inference requires the mechanistic evidence from Sub-argument 4 combined with micro-data analysis.

Third, sample selection bias. The 70 countries represent "globally observable identity systems"; data-sparse countries such as North Korea and Turkmenistan are excluded. These countries may have extreme IAI configurations, and their exclusion may render the conclusions conservative.

Fourth, attenuation bias. IAI measurement error causes systematic underestimation of β (attenuation bias); the actual effect size may be larger than the pilot estimate. SIMEX correction can mitigate but cannot fully eliminate this bias.

## § 4. Causal Identification Strategy: Assessment of Five Natural Experiment Candidates

### § 4.1. The Absence of a Clean Instrumental Variable

Cross-national regression can establish correlation only; causal identification requires an instrumental variable or natural experiment. A directed acyclic graph (DAG) analysis is conducted on the hypothesized causal pathway IAI → freedom of association:[^23]

```
X = IAI (assurance + privacy)
Y = freedom of association (v2x_cspart)
R = regime type (common cause)
E = economic development (common cause)
T = technological availability (affects X)
D = digital transformation policy (affects X and Y)
U = unobserved variables (e.g., "regime character")
```

Primary back-door paths: X ← R → Y (regime type as common prior cause); X ← E → Y (development level as common prior cause); X ← D → Y (digital transformation policy as common prior cause). The present analysis adopts the conservative language of "common-cause influence / co-variation relationship" on the DAG, avoiding the unidirectional causal language of "drives" or "determines." Identifying a clean IV would require a variable that affects X but does not directly affect Y; because design choices for identity systems are deeply influenced by the political structure of the state, virtually all candidate IVs violate the exclusion restriction.[^24]

Conclusion: a clean IV cannot be identified; the analysis relies on natural experiments combined with difference-in-differences estimation.

### § 4.2. Assessment of Five Candidates

**Strategy A: India Aadhaar Mandatory Enrollment (2014–2017)**

- Policy change: mandatory Aadhaar enrollment for welfare benefits, banking, and SIM cards across Indian states, 2014–2017
- Identification strategy: State × Year DID comparing associational freedom changes in mandatory states versus states with delayed implementation
- Strengths: clear policy timing; inter-state heterogeneity
- Limitations: (a) simultaneous ascension of the BJP government independently affected associational restrictions (CAA 2019, UAPA amendments 2019); (b) mandatory enrollment timing is endogenous to state politics; (c) associational freedom changes may reflect multiple concurrent trends
- Existing studies: Khera 2019; Drèze et al. 2020[^5][^25]
- **Rating: ★★★★ (best candidate but confounded by BJP co-occurrence)**

**Strategy B: EU eIDAS 1.0 → 2.0 Transition (2014–2024)**

- Policy change: eIDAS 1.0 (2014) voluntary interoperability → eIDAS 2.0 (2024) mandatory EUDI Wallet
- Identification strategy: EU member states × non-EU comparison group (Switzerland, Norway, post-Brexit UK)
- Strengths: policy change exogenous to individual countries' domestic politics
- Limitations: (a) EU member states share homogeneous political structures; (b) freedom of association already high, making effects difficult to detect; (c) eIDAS 2.0 launch is too recent for observable consequences
- Existing studies: EU Commission eIDAS Reviews 2022, 2024[^26]
- **Rating: ★★ (effect too weak + observation period too short)**

**Strategy C: China Real-Name Staggered Provincial Rollout (2012–2018)**

- Policy change: staggered provincial rollout of internet real-name registration, WeChat real-name registration, and high-speed rail real-name registration, 2012–2018
- Identification strategy: Province × Year staggered DID
- Strengths: clear policy timing; large sample size
- Limitations: (a) measuring freedom of association variables in authoritarian countries is difficult (self-censorship distorts V-Dem scoring); (b) concurrent implementation of additional controls (the Great Firewall); (c) restricted data access
- Existing studies: Roberts 2018 *Censored*; King, Pan & Roberts 2013[^27][^28]
- **Rating: ★★★ (large sample but measurement distortion)**

**Strategy D: Russia e-Gov + Wartime Mobilization (2022–2024)**

- Policy change: post-2022 Ukraine war use of the Gosuslugi platform for mobilization and expansion of sanction lists
- Identification strategy: Russia versus other hybrid regimes (Turkey, Hungary, Serbia)
- Strengths: clear shock
- Limitations: wartime confounders are too numerous (direct political repression dwarfs the ID mechanism)
- **Rating: ★★ (wartime confounders too numerous)**

**Strategy E: Belarus e-ID + 2020 Protests**

- Policy change: Belarus e-ID deployment 2018–2020; post-election protest suppression in 2020
- Identification strategy: individual cases of protester identification / surveillance via e-ID
- Strengths: individual-level clarity
- Limitations: N too small for cross-national inference
- **Rating: ★ (N too small)**

### § 4.3. Three-Layer Multi-Method Triangulation Design

In the absence of a single reliable identification strategy, the present study recommends a three-layer triangulation:

Layer 1: Cross-national panel regression (§ 3 above). Provides statistical association and regime-type sub-group differences.

Layer 2: Natural experiment DID (primary: Strategy A, India Aadhaar; supplementary: Strategy C, China real-name). Provides conditional causal evidence.

Layer 3: Qualitative process tracing (three cases in § 5 below).[^42] Provides mechanism existence.

Only when conclusions across all three layers are mutually consistent can a stronger causal claim be advanced regarding "IAI → decline of freedom of association." No single layer is sufficient to support a causal conclusion.[^29][^30]

### § 4.4. Causal Evidence Strength Assessment of Existing Studies

An assessment of causal evidence strength in the existing literature on identity systems and freedom of association:

| Study | Identification strategy | Evidence strength | Primary limitation |
|---|---|---|---|
| Khera 2019 | Case description + statistics | Moderate | Endogeneity not adequately addressed |
| Drèze et al. 2020 | District-level analysis | Moderate | Implementation trade-offs, not causation |
| Muralidharan et al. 2016[^43] | RCT (Andhra Pradesh) | Strong (local) | Welfare delivery, not associational freedom |
| King, Pan & Roberts 2013 | RCT (Chinese microblogs) | Strong (local) | Censorship, not associational freedom |
| Roberts 2018 | Multi-method | Moderate | Primarily descriptive |
| Helm 2024 | Cross-national regression + meta | Weak | Causal pathway unclear |

Overall assessment: the causal claim that "ID → decline of freedom of association" remains unsubstantiated as of 2024. The strongest available evidence falls at the level of "conditional correlation + mechanism existence proof."

## § 5. Mechanism Existence: Three Cases and Control Groups

### § 5.1. The Role of Case Studies

Cross-national regression cannot reveal how weaponization occurs. The three cases provide *mechanism existence* proofs (existence proofs), demonstrating specific pathways without asserting global frequency. The responsibility borne by this section is mechanism illustration, not causal proof.[^31]

### § 5.2. Case 1 — India: Aadhaar Welfare Conditionality (2014–2024)

Mechanism chain:

1. UIDAI established in 2009; initially voluntary enrollment
2. BJP ascended to power in 2014 and mandated Aadhaar linkage for the Public Distribution System, school midday meals, NREGA, and bank accounts
3. Between 2017 and 2020, millions of persons lost welfare benefits due to biometric authentication failures (documented cases in Drèze 2017 and 2020)[^25][^32]
4. Aadhaar records of opposition activists were selectively "frozen" or rendered "unverifiable"
5. Freedom of association declined overall (V-Dem v2x_cspart fell from 0.83 in 2014 to 0.62 in 2023)[^1]

Forms of weaponization:

- (a) Welfare dependency creating political compliance pressure
- (b) Appeals channels controlled by the issuing institution
- (c) Mandatory enrollment with no opt-out

Limitation: causal direction is not pure. The BJP simultaneously advanced the CAA 2019, UAPA amendments 2019, and other associational restriction policies. Aadhaar and the restriction of associational freedoms may represent two facets of BJP regime character rather than a direct causal relationship from Aadhaar. The present analysis adopts the position that "Aadhaar co-occurred with other associational restriction policies,"[^5] without asserting single-source attribution.

### § 5.3. Case 2 — Russia: Gosuslugi Wartime Mobilization (2022–2024)

Mechanism chain:

1. Gosuslugi e-government platform deployed through the 2010s in a neutral "convenience" framing
2. Following the 2022 Ukraine war, Gosuslugi was deployed for: (a) electronic delivery of military mobilization summons; (b) sanction lists targeting dissidents; (c) exit restrictions
3. Opposition figures, including Navalny supporters, were labeled "foreign agents" through Gosuslugi
4. Civil society organizations such as Memorial were forcibly dissolved in 2022, with their members losing access to multiple Gosuslugi services[^33][^34]

Forms of weaponization:

- Mandatory enrollment with no state-provided opt-out
- Electronic delivery of mobilization summons bypassing the legal buffer of traditional paper-based notification
- Expansion of sanction lists without judicial review

Limitation: wartime confounders (direct political repression dwarfs the ID mechanism); observation period is short.

### § 5.4. Case 3 — Belarus: e-ID and 2020 Protest Suppression

Mechanism chain:

1. Belarus deployed e-ID (biometrics with government single trust root) between 2018 and 2020
2. Large-scale protests erupted following the 2020 presidential election
3. Police used the e-ID database to identify protesters[^35][^36]
4. Following identification: tracking, dismissal from employment, and prosecution
5. Among protest participants, those holding e-IDs were prosecuted at a significantly higher rate than those without

Forms of weaponization:

- Real-time identification of protesters
- Cross-linkage with employment, housing, and banking records
- Cross-border tracking (via residual e-ID records of Belarusian nationals within EU territory)

Limitation: sample is too small (Belarus only); surveillance and repression ≠ a pure ID mechanism.

### § 5.5. Control Groups (High AS Without Weaponization)

Four control groups demonstrate that high AS does not necessarily lead to weaponization.

| Case | AS | PS | Regime type | Why weaponization did not occur |
|---|---|---|---|---|
| Japan My Number | 4 | 3 | Liberal Democracy | Strong judicial independence + civil society pushback |
| Taiwan chip ID card | 3 | 3 | Liberal Democracy | Civil society pushback caused new design to be shelved (2021)[^37] |
| Estonia e-ID | 5 | 4 | Liberal Democracy | Design incorporated decentralization + open audit + X-Road log[^13] |
| Sweden BankID | 4 | 3 | Liberal Democracy | Commercial consortium trust root rather than government single root (despite the NCT concerns analyzed in the Nordic BankID article) |

The counterfactual value of the control groups lies in demonstrating the mediating variables: regime type and institutional design details (decentralization / open audit) determine whether IAI is weaponized. This implies that IAI is not a sufficient condition; weaponization requires mediating variables — hybrid regime type combined with an absence of institutional firewalls.[^38]

### § 5.6. Three Weaponization Pathways Exhibit Distinct Causal Chains

The Aadhaar welfare conditionality, Russian wartime mobilization, and Belarus protest identification cases represent three *distinct* causal chains. The identity-system design characteristics required by each are also distinct:

- Welfare conditionality requires: high mandatory enrollment + welfare dependency
- Compulsory mobilization requires: real-time notification capability + legal recognition of electronic service
- Surveillance identification requires: biometrics + centralized query access

This implies that "weaponization" is a family of mechanisms; each pathway requires independent procedural firewall design. This corresponds to the V₁ through V₆ procedural protections discussed in the accountability article; each V addresses a specific attack vector.[^39]

### § 5.7. Case Selection Bias

The three cases represent *instances known to involve dramatic weaponization*. Two layers of corresponding selection bias are explicitly identified.

First layer: the chosen cases are those already documented in media and academic literature. Cases of "weaponization without documentation" may exist, particularly in information-closed countries.

Second layer: the control groups (Japan / Taiwan / Estonia / Sweden) are "non-weaponized" comparisons, but "non-weaponization" is itself an unobserved counterfactual; weaponization may have occurred but not been publicly reported.

Future research requires more systematic random case selection and more proactive verification of "non-weaponized" cases.

## § 6. Research Limitations and Future Directions

### § 6.1. Limitations the Present Study Cannot Resolve

First, the pilot character of the study. All quantitative results are expected values (pilot estimates) requiring RA verification through actual statistical analysis. The legitimacy of the present study rests on the establishment of a methodology, not on the establishment of conclusions.

Second, coding subjectivity. The IAI's two-dimensional five-level scale with eight sub-conditions reduces subjective drift but cannot eliminate it. Inter-coder κ ≥ 0.7 is the target; actual results may fall short, particularly in data-sparse regions.

Third, causal identification difficulty. All five natural experiment candidates have confounders. Even the most promising Strategy A — India Aadhaar — remains entangled with BJP co-occurrence.

Fourth, measurement distortion in authoritarian countries. V-Dem scores for China, Russia, and Belarus are affected by self-censorship; coding experts may over- or underestimate the relevant indicators. A multilevel measurement model can mitigate but cannot fully eliminate this distortion.[^40]

Fifth, case selection bias. The three cases constitute existence proofs, not evidence of global frequency.

### § 6.2. Future Research Directions

**RA quantitative execution**:

1. Open-source release of the 70-country IAI coding dataset with multi-coder reliability testing
2. Full specification of India Aadhaar State × Year DID to generate actual effect size estimates
3. Multilevel measurement model correction across five associational proxy variables
4. SIMEX measurement error correction for APS construction
5. BTI / FOTN alternative analyses

**Interview / qualitative deepening**:

1. Feedback from V-Dem coding experts on IAI coding methodology
2. Supplementary input from ID4D data coordinators on 70-country coverage
3. Case detail from Aadhaar case researchers on mechanism cases
4. Firsthand accounts from Belarusian human rights NGOs on protester identification practices

**Legal analysis**:

1. Precise legal effect of the Indian Supreme Court's 2018 *Puttaswamy v. Union of India* ruling on mandatory Aadhaar enrollment (a five-justice bench upheld the Aadhaar Act as constitutional 4:1 but restricted mandatory enrollment for banking, SIM cards, and schools while preserving enrollment for welfare benefits)[^41]
2. Legal basis in the Russia Mobilization Law 2022 amendments for Gosuslugi wartime mobilization
3. Legal basis for the use of Belarus e-ID in protester identification

### § 6.3. The Open-Source Value of the Coding Dataset

If the 70-country IAI coding dataset is open-sourced (recommended under CC-BY-SA on a GitHub repository), it can serve as a foundation for expansion and verification by other researchers. Engineering challenges expected to require resolution include:

- Double-blind coding workflow (including disagreement discussion records)
- Codebook version management
- Country-level metadata (data sources and coding dates)
- Cross-year update mechanism

Following open-source release, the IAI is expected to attract contributions from the political science and digital policy communities, enabling it to evolve from a researcher-constructed instrument into a community-maintained measurement standard.

## § 7. Conclusion: Conditional Conclusions and Connections to Other Articles

### § 7.1. Conditional Conclusions

The strongest claim this pilot study can establish is that APS and the decline of freedom of association are statistically expected to be non-independent (based on effect-size anchors from existing research), and that at least three mechanistic weaponization pathways exist. The following claims **cannot** be advanced:

- That IAI is the cause of declining freedom of association
- The global frequency of IAI weaponization
- That India's Aadhaar is the sole cause of that country's associational restrictions
- That high AS necessarily leads to weaponization (the control groups have falsified this)

The following claims are supportable:

- Rejection of the null hypothesis that "identity-system design and freedom of association are statistically independent"
- Mechanism existence for "weaponization of identity systems"
- Regime type (particularly electoral authoritarian) as the critical mediating variable for weaponization
- The present study has established three layers of foundation — coding scheme, identification strategy, and mechanistic evidence — for subsequent RA work

### § 7.2. Connections to Other Articles in the Series

**Connection to the accountability article (article 01)**: The three weaponization pathways (welfare conditionality / compulsory mobilization / surveillance identification) require distinct procedural firewall designs, corresponding to the V₁ through V₆ framework in article 01. Aadhaar violates V₅ (multi-party key custody); Russian Gosuslugi violates V₄ (sunset clauses); Belarus e-ID violates V₆ (ex post audit).

**Connection to the concept-positioning article (article 02)**: The IAI's two dimensions correspond to M₁ existence and M₂ eligibility in the ⟨𝒩, ℱ, ℬ⟩ matrix, as well as M₄ privacy measurement.[^44]

**Connection to the pseudonymous participation article (article 04)**: The T_Trigger remediation clause addresses Aadhaar welfare conditionality weaponization; the three-element structure of trigger conditions, authority distribution, and remediation pathways is portable to the legal defense design against ID weaponization.

**Connection to the civic burden article (article 06)**: CB-Justice D₂* (democratic citizenship) corresponds to the political-philosophical foundation for exclusion caused by India's welfare conditionality.

**Connection to the passport-rooted paradox article (article 07)**: The IAI weaponization analyzed in the present article is isomorphic with the weaponization of ID within the sovereign container of the Sovereign Root Paradox (SRP); the sovereign state can simultaneously function as issuer and adversary.[^45]

**Connection to the DNS trust roots article (article 08)**: The historical presupposition that "regime type determines the probability of IAI weaponization" corresponds to the P_DNS ∩ P_ID = ∅ structure of the historical motif (HM).[^46]

**Connection to the Nordic BankID article (article 09)**: The Non-Competitive Tyranny (NCT) analyzed in article 09 follows the pattern: "high AS + low PS + commercial monopoly + democratic regime → infrastructural tyranny." The IAI weaponization of the present article follows the pattern: "high AS + low PS + government-led + hybrid regime → associational restriction." The two constitute a dual structure — commercial versus government leadership on one axis, democratic versus hybrid regime on another — yet both outcomes entail citizens losing the capacity to access democratic infrastructure.[^47]

### § 7.3. Policy Implications

For policymakers:

- The IAI's two-dimensional coding can serve as a self-assessment instrument for national digital identity policy
- High-AS designs must be accompanied by high-PS designs (multi-party key custody, zero-knowledge proofs, time-limited data retention)
- Hybrid-regime countries must verify regime resilience (judicial independence, civil society strength) before introducing high-AS systems
- The V₁ through V₆ procedural firewalls should constitute the minimum threshold for identity-system design

For the research community:

- Once open-sourced, the 70-country IAI coding dataset can serve as a cross-national comparative infrastructure
- Multi-method triangulation is the minimum methodological standard for studying the identity systems × democracy relationship
- The gap between pilot estimates and actual results constitutes a quantifiable research question

A final statement: the strongest form of this pilot study's conclusions is the three-part position that "there are grounds to believe the relationship between identity systems and freedom of association is statistically non-independent, that mechanisms exist, and that causal direction has not yet been identified." Each element of this three-part position requires subsequent, more systematic research to confirm or refute.

---

## Revision Note (2026-05-16)

This article was revised to make explicit that **B2's positioning is as method pilot / research design / mechanism existence support; B2 is not an empirical results chapter**. Citations of specific effect-size values in the main text have been withdrawn and replaced with directional expressions and order-of-magnitude language. Specific revision locations: (a) § 3.1, expected-results passage: the specific decimal "r ≈ −0.42 (CI [−0.58, −0.24])" was withdrawn and replaced with "the expected direction is β₁ < 0; specific strength and CI can only be reported after the RA has completed actual data construction and bootstrapping"; (b) § 3.4, longitudinal panel regression passage: the specific decimal "effect size Δβ ≈ −0.004 to −0.010 / year" was withdrawn and replaced with "if future data are supportive, the effect size may fall within the 10⁻³ to 10⁻² range per year (illustrative anchor), not to be extrapolated to any single country"; (c) § 4 DAG back-door-path passage: the unidirectional causal language "simultaneously drives" for regime type / development level / digital transformation policy was replaced with the conservative language "common prior cause / common-cause influence"; (d) § 1, a passage explicitly stating B2's positioning was added, limiting B2's responsibility to four layers — directional expectation, identification design, mechanism existence, and control groups — without bearing responsibility for the primary causal conclusion. The basis for the revisions is the civic-proof series Phase 1+2 audit and two rounds of GPT-5.5-pro audit (2026-05-16) regarding the B2 R_CA / R_EV risk assessment (withdrawing specific decimals from the main text while maintaining S1+; elevation to S2 is not permissible). The core argumentative skeleton — IAI two-dimensional five-level coding, 70-country coverage, five natural experiment assessments, three mechanism existence cases, and multi-method triangulation — was left unchanged.

## References

[^1]: Coppedge, M., Gerring, J., Knutsen, C. H., et al. *Varieties of Democracy (V-Dem) Codebook v14*. Gothenburg: V-Dem Institute, 2024. Source level A.

[^2]: Freedom House. *Freedom in the World 2024: Country and Territory Ratings*. Washington, DC: Freedom House, 2024. Source level A.

[^3]: CIVICUS. *People Power Under Attack 2024*. Johannesburg: CIVICUS, 2024. CIVICUS Monitor five-category methodology. Source level A.

[^4]: World Bank. *Identification for Development (ID4D) Database 2024*. Washington, DC: World Bank Group, 2024. Source level A.

[^5]: Khera, R. *Dissent on Aadhaar: Big Data Meets Big Brother*. Hyderabad: Orient Blackswan, 2019. Source level A.

[^6]: Helm, S. M. "Biometric ID and Political Rights: A Cross-National Analysis of Identification Regimes." *Comparative Political Studies* (forthcoming, 2024 working paper). Source level B.

[^7]: Schiff, K. J., et al. "Digital Identity and Civic Space: Cross-National Evidence." Working Paper, 2023. Source level B.

[^8]: Mechkova, V., Pemstein, D., Seim, B., & Wilson, S. *Digital Society Project Codebook*. V-Dem Working Paper, 2023. Source level A.

[^9]: Pemstein, D., Marquardt, K. L., Tzelgov, E., et al. "The V-Dem Measurement Model." *Political Analysis* 26(2), 2018: 168–190. Source level A.

[^10]: International Telecommunication Union. *Global Cybersecurity Index 2024*. Geneva: ITU, 2024. Source level B.

[^11]: World Bank ID4D. *Country Diagnostics 2020–2024*. Various country reports. Source level A.

[^12]: Landis, J. R., & Koch, G. G. "The Measurement of Observer Agreement for Categorical Data." *Biometrics* 33(1), 1977: 159–174. Source level A.

[^13]: e-Estonia. *Estonia e-Identity White Papers*. e-Estonia.com, 2020–2024. Source level A.

[^14]: EU Commission. *eIDAS 2.0 Regulation Impact Assessment*. Brussels: European Commission, 2024. Source level A.

[^15]: Lührmann, A., Tannenberg, M., & Lindberg, S. I. "Regimes of the World (RoW): Opening New Avenues for the Comparative Study of Political Regimes." *Politics and Governance* 6(1), 2018: 60–77. Source level A.

[^16]: International Telecommunication Union. *ICT Indicators 2024 — Internet Penetration Rates*. Geneva: ITU, 2024. Source level A.

[^17]: Coppedge, M., Lindberg, S. I., Skaaning, S.-E., & Teorell, J. "Measuring high level democratic principles using the V-Dem data." *International Political Science Review* 37(5), 2019: 580–593. Source level A.

[^18]: Diamond, L. "Thinking About Hybrid Regimes." *Journal of Democracy* 13(2), 2002: 21–35. Source level A.

[^19]: Levitsky, S., & Way, L. *Competitive Authoritarianism: Hybrid Regimes after the Cold War*. Cambridge: Cambridge University Press, 2010. Source level A.

[^20]: Boese, V. A. "How (not) to measure democracy." *International Area Studies Review* 22(2), 2019: 95–127. Source level A.

[^21]: Cook, J. R., & Stefanski, L. A. "Simulation-Extrapolation Estimation in Parametric Measurement Error Models." *Journal of the American Statistical Association* 89(428), 1994: 1314–1328. Source level A.

[^22]: Pearl, J. *Causality: Models, Reasoning, and Inference* (2nd ed.). Cambridge: Cambridge University Press, 2009. Source level A.

[^23]: Greenland, S., Pearl, J., & Robins, J. M. "Causal diagrams for epidemiologic research." *Epidemiology* 10(1), 1999: 37–48. Source level A.

[^24]: Sovey, A. J., & Green, D. P. "Instrumental Variables Estimation in Political Science: A Readers' Guide." *American Journal of Political Science* 55(1), 2011: 188–200. Source level A.

[^25]: Drèze, J., Khera, R., & Somanchi, A. "Aadhaar and Welfare Schemes." *Economic and Political Weekly* 55(50), 2020: 22–26. Source level A.

[^26]: EU Commission. *eIDAS Regulation Review 2022*. Brussels: European Commission, 2022. Source level A.

[^27]: Roberts, M. E. *Censored: Distraction and Diversion Inside China's Great Firewall*. Princeton: Princeton University Press, 2018. Source level A.

[^28]: King, G., Pan, J., & Roberts, M. E. "How Censorship in China Allows Government Criticism but Silences Collective Expression." *American Political Science Review* 107(2), 2013: 326–343. Source level A.

[^29]: Cunningham, S. *Causal Inference: The Mixtape*. New Haven: Yale University Press, 2021. Source level A.

[^30]: Angrist, J. D., & Pischke, J.-S. *Mostly Harmless Econometrics*. Princeton: Princeton University Press, 2009. Source level A.

[^31]: Bennett, A., & Checkel, J. T. *Process Tracing: From Metaphor to Analytic Tool*. Cambridge: Cambridge University Press, 2015. Source level A.

[^32]: Drèze, J. "Dark Clouds over the PDS." *Economic and Political Weekly* 52(36), 2017: 12–15. Aadhaar exclusion cases. Source level A.

[^33]: Reuters. "Russia uses Gosuslugi platform for military mobilization summons." Reuters, 25 September 2022. Source level B.

[^34]: Memorial Human Rights Centre. *Final Reports Before Liquidation 2021–2022*. Moscow / Berlin, 2021–2022. (Memorial was forcibly dissolved by the Russian Supreme Court in late 2021.) Source level A.

[^35]: Belarusian Helsinki Committee. *Reports on 2020 Election Protests and Identification of Protesters*. Minsk, 2020–2021. Source level A.

[^36]: Human Rights Watch. *Belarus: Crackdown on Dissent and Use of e-ID for Identification*. New York: HRW, 2021. Source level A.

[^37]: Taiwan Civic Action Coalition. *Statement on Smart National ID Card Suspension*. Taipei, 2021. Source level B.

[^38]: Acemoglu, D., & Robinson, J. A. *The Narrow Corridor: States, Societies, and the Fate of Liberty*. New York: Penguin, 2019. Source level A.

[^39]: mashbean. "Accountability Without Real-Name Identification: Six Procedural Firewalls." Civic Proof Series, article 01, 2026-05-02. Source level B (series internal cross-reference).

[^40]: Marquardt, K. L., & Pemstein, D. "Estimating Latent Conceptual Constructs in V-Dem." *Political Analysis* 26(4), 2018: 401–420. Source level A.

[^41]: Supreme Court of India. *Justice K. S. Puttaswamy (Retd.) v. Union of India*, 2018. Ruling limiting mandatory Aadhaar enrollment. Source level A.

[^42]: King, G. "Restructuring the Social Sciences: Reflections from Harvard's Institute for Quantitative Social Science." *PS: Political Science & Politics*, 2013. Source level A.

[^43]: Muralidharan, K., Niehaus, P., & Sukhtankar, S. "Building State Capacity: Evidence from Biometric Smartcards in India." *American Economic Review* 106(10), 2016: 2895–2929. Source level A.

[^44]: mashbean. "Civic Proof: Concept and Conceptual Positioning — ⟨𝒩, ℱ, ℬ⟩." Civic Proof Series, article 02, 2026-05-03. Source level B (series internal cross-reference).

[^45]: mashbean. "The Passport-Rooted Paradox / SRP." Civic Proof Series, article 07, 2026-05-05. Source level B (series internal cross-reference).

[^46]: mashbean. "DNS Trust Roots vs Identity Trust Roots / HM." Civic Proof Series, article 08, 2026-05-06. Source level B (series internal cross-reference).

[^47]: mashbean. "The Nordic Commercial Identity Infrastructure and Its Costs / NCT." Civic Proof Series, article 09, 2026-05-07. Source level B (series internal cross-reference).
