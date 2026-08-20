/* Cholla Behavioral Health logo */
var LOGO = "data:image/png;base64,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";
/* ==========================================================================
   Cholla Behavioral Health — shared report data model
   --------------------------------------------------------------------------
   Every metric carries the exact source date-range ("w") it was exported for.
   Windows are never assumed to line up across channels: a channel with no new
   export for a snapshot is marked measured:false and is NEVER carried forward.
   ========================================================================== */

/* ── source windows (verbatim from the exports) ───────────────────────── */
var WINDOWS = {
  siteAug6:      'Jul 5 – Aug 5, 2026',
  liAug20:       'Jul 20 – Aug 18, 2026',
  li15Aug20:     'Aug 4 – 18, 2026',
  liSearchAug20: 'Aug 12 – 18, 2026',
  competitor30:  'Jul 20 – Aug 18, 2026',
  fbAug20:       'Jul 23 – Aug 19, 2026',
  fb7Aug20:      'Aug 13 – 19, 2026',
  siteAug20_14:  'Aug 6 – 19, 2026',
  siteAug20_7:   'Aug 13 – 19, 2026',
  twLast:        'Aug 6 – 19, 2026',
  twPrior:       'Jul 23 – Aug 5, 2026',
  apex:          '{{CONFIRM REPORTING PERIOD}}'
};

var CHANNEL_META = {
  website:   { name: 'Website',   color: '#3090CC' },
  facebook:  { name: 'Facebook',  color: '#2F6D5E' },
  instagram: { name: 'Instagram', color: '#D9784F' },
  linkedin:  { name: 'LinkedIn',  color: '#D97B2F' },
  apex:     { name: 'Apex',     color: '#C05430' }
};

/* metric factory — v = value, w = source window, extra = display options */
function m(v, w, extra) {
  var o = { v: v, w: w };
  if (extra) { for (var k in extra) { o[k] = extra[k]; } }
  return o;
}

/* ── snapshot: Aug 20, 2026 ───────────────────────────────────────────────
   First reporting period under the Cholla Behavioral Health brand.
   Facebook and LinkedIn are real Cholla exports; Instagram is coming soon. */
var SNAP_AUG20 = {
  id: '2026-08-20',
  label: 'Aug 20 snapshot',
  reportDate: 'Aug 20, 2026',
  dataLine: 'Facebook 07/23–08/19 (daily 08/13–08/19) · Website 08/06–08/19 (sources 08/13–08/19) · LinkedIn 07/20–08/18 · Instagram coming soon',
  summary: {
    measured: true,
    lead: 'First reporting period under the Cholla Behavioral Health brand. <b>Facebook is the mover</b>: 4.6K views, ' +
          'up <b>405.9%</b> vs. the prior 28 days, with unique viewers up 650.2% to 2,303 — driven by an Aug 18 breakout ' +
          '(670 views in a single day, more than the previous five days combined). Interactions rose 360% to 46 and the ' +
          'page added 14 net follows with zero unfollows. <b>LinkedIn is small but exactly the right audience</b>: 331 ' +
          'impressions at a 6.0% engagement rate, with followers concentrated in Greater Phoenix and Mental Health Care. ' +
          'The website held steady — 1,003 visits and 50 leads at a 5% conversion rate. Instagram reporting is coming soon.',
    kpis: [
      { lab: 'Facebook views',   num: '4.6K', chg: '▲ 405.9%', dir: 'up', note: '2,303 unique viewers', w: WINDOWS.fbAug20 },
      { lab: 'FB interactions',  num: '46',   chg: '▲ 360%',   dir: 'up', note: '26 from non-followers', w: WINDOWS.fbAug20 },
      { lab: 'Website leads',    num: '50',   chg: '▲ 39%',    dir: 'up', note: '5% conversion rate', w: WINDOWS.siteAug20_14 },
      { lab: 'LinkedIn impr.',   num: '331',  note: '16 post clicks · 6.0% eng. rate', w: WINDOWS.liAug20 }
    ],
    reach: [
      { label: 'Facebook views (28d)',       value: 4600, color: '#2F6D5E', w: WINDOWS.fbAug20 },
      { label: 'Website visits (14d)',       value: 1003, color: '#3090CC', w: WINDOWS.siteAug20_14 },
      { label: 'LinkedIn impressions (30d)', value: 331,  color: '#D97B2F', w: WINDOWS.liAug20 }
    ],
    reachNote: 'Each bar is labelled with its own window length because they are NOT the same: Facebook is 28 days, the ' +
               'website figure is 14 days and LinkedIn is 30 days. Read the bars as per-channel totals for those windows, ' +
               'not as a like-for-like comparison. Instagram is omitted — its reporting is coming soon.',
    rollup: {
      head: ['Channel', 'Reach', 'Engagement', 'Leads / contacts', 'Followers', 'Source window'],
      rows: [
        ['Website',   '1,003 visits',    '5% conversion rate',           '50 leads',        '—',            WINDOWS.siteAug20_14],
        ['Facebook',  '4.6K views',      '46 interactions',              '124 page visits', '597',          WINDOWS.fbAug20],
        ['LinkedIn',  '331 impressions', '16 post clicks · 4 reactions', '22 page searches','338 · +5 new', WINDOWS.liAug20],
        ['Instagram', 'coming soon',     '—',                            '—',               '—',            '—']
      ]
    }
  },
  channels: {
    facebook: {
      measured: true,
      source: 'source: Meta Business Suite · 28-day window vs. prior 28 days · daily series from the 7-day export',
      window: WINDOWS.fbAug20,
      kpis: [
        { lab: 'Views',            num: '4.6K',  chg: '▲ 405.9%', dir: 'up', w: WINDOWS.fbAug20 },
        { lab: 'Unique viewers',   num: '2,303', chg: '▲ 650.2%', dir: 'up', w: WINDOWS.fbAug20 },
        { lab: 'Interactions',     num: '46',    chg: '▲ 360%',   dir: 'up', note: '20 followers · 26 non-followers', w: WINDOWS.fbAug20 },
        { lab: 'Page visits',      num: '124',   chg: '▲ 53.1%',  dir: 'up', w: WINDOWS.fbAug20 },
        { lab: 'Net follows',      num: '+14',   chg: '▲ 250%',   dir: 'up', note: '0 unfollows', w: WINDOWS.fbAug20 },
        { lab: 'Followers (lifetime)', num: '597', w: WINDOWS.fbAug20 }
      ],
      weekly: {
        title: 'Daily views — 7-day export',
        note: 'Aug 18 is the breakout: 670 views in a single day, followed by 356 on Aug 19 — together more than the ' +
              'previous five days combined.',
        series: [
          { label: 'Aug 13', value: 9 }, { label: 'Aug 14', value: 86 }, { label: 'Aug 15', value: 100 },
          { label: 'Aug 16', value: 18 }, { label: 'Aug 17', value: 10 }, { label: 'Aug 18', value: 670 },
          { label: 'Aug 19', value: 356 }
        ]
      },
      supporting: {
        title: 'Supporting stats',
        head: ['Metric', 'Value', 'vs. prior period'],
        rows: [
          ['Views from non-followers (28d)', '83.4%', '▲ 14.7%'],
          ['Views from followers (28d)', '16.6%', '▼ 39.1%'],
          ['Interactions from non-followers (28d)', '26', '▲ 1.2K%'],
          ['Interactions from followers (28d)', '20', '▲ 150%'],
          ['Views (7d, all organic)', '1,249', '▲ 534%'],
          ['Viewers (7d)', '628', '▲ 554.2%'],
          ['Content interactions (7d)', '15', '▲ 400%'],
          ['3-second video views (7d)', '7', '▼ 61.1%'],
          ['Watch time (7d)', '1m 37s', '▼ 79.5%'],
          ['Reels views (7d)', '13', '▼ 67.5%'],
          ['Messaging contacts (7d)', '1', '▲ 100%']
        ]
      },
      audience: {
        title: 'Audience demographics',
        note: 'From the Meta audience export. The audience is local and adult: Phoenix plus Mesa, Glendale, Tucson and ' +
              'Scottsdale make up the top five cities, 97.8% of the audience is in the United States, and women 35–44 ' +
              'are the single largest segment.',
        head: ['Breakdown', 'Detail'],
        rows: [
          ['Top cities', 'Phoenix 44.6% · Mesa 8.4% · Glendale 3.5% · Tucson 3.2% · Scottsdale 2.7%'],
          ['Age &amp; gender', 'Women 35–44: 22.9% · Men 35–44: 16.8% · Men 45–54: 15.3% · Women 45–54: 12.9%'],
          ['Gender split', '≈50.7% women · 49.3% men'],
          ['Top country', 'United States 97.8%']
        ]
      },
      pendingNote: '<b>More Facebook data incoming:</b> top posts, content formats and messaging detail will be added ' +
                   'with the next export.',
      footnote: 'The page is rebuilding reach fast from a small base: views up 405.9% and viewers up 650.2% in 28 days, ' +
                'with the Aug 18 single-day breakout doing much of the work. Growth is coming from outside the follower ' +
                'base — 83.4% of views and 26 of 46 interactions are from non-followers — which is the right shape for ' +
                'audience growth. Identify the Aug 18 post and repeat its format.'
    },
    website: {
      measured: true,
      lean: true,
      source: 'chollabehavioralhealth.com · source: Duda analytics',
      window: WINDOWS.siteAug20_14,
      windowNote: 'Two source windows this period — highlights are 14-day, traffic sources are 7-day. They are not blended.',
      kpis: [
        { lab: 'User visits',     num: '1,003', chg: '▼ 14%', dir: 'down', w: WINDOWS.siteAug20_14 },
        { lab: 'Total leads',     num: '50',    chg: '▲ 39%', dir: 'up',   w: WINDOWS.siteAug20_14 },
        { lab: 'Conversion rate', num: '5%',    chg: '▲ 61%', dir: 'up',   w: WINDOWS.siteAug20_14 }
      ],
      sources: {
        title: 'Traffic sources — 7-day cut',
        note: 'Different window from the highlights above: Aug 13 – 19, 2026. Total visits in this cut: 510.',
        head: ['Source', 'Share'],
        rows: [['Direct', '55%'], ['Search', '39%'], ['Referral', '3%'], ['Unknown', '3%']]
      },
      crawlers: {
        title: 'AI crawler activity',
        note: 'Kept deliberately separate from the visit counts above — these are automated crawlers and must never be ' +
              'added to human traffic.',
        head: ['Window', 'Bot visits', 'Top crawlers'],
        rows: [
          ['Aug 6 – 19 (14d)', '1,492', 'ChatGPT 22% · Applebot 20% · facebookexternalhit 17% · Amazonbot 12% · Bytespider 8% · GoogleOther 7% · +7 more'],
          ['Aug 13 – 19 (7d)', '751',   'ChatGPT 21% · Applebot 18% · facebookexternalhit 15% · Amazonbot 15% · Bytespider 10% · Perplexity 8% · +6 more']
        ]
      },
      seo: {
        title: 'SEO housekeeping (Duda highlights)',
        head: ['Issue', 'Count'],
        rows: [['Images missing alt text', '2'], ['Blog posts missing meta tags', '23'], ['Pages with meta tags too long', '29']]
      },
      pending: ['Page views', 'Call-vs-form split of the 50 leads', 'Top pages', 'Device / geo split', 'Weekly visits series'],
      pendingNote: 'Lean build by choice this period. These are available on request from the 30-day view.'
    },
    instagram: {
      measured: false,
      comingSoon: true
    },
    linkedin: {
      measured: true,
      source: 'source: LinkedIn Page analytics · 30-day export',
      showCompetitors: true,
      window: WINDOWS.liAug20,
      kpis: [
        { lab: 'Impressions',     num: '331',  note: '3 posts · all organic', w: WINDOWS.liAug20 },
        { lab: 'Post clicks',     num: '16',   note: '4 reactions · 0 comments', w: WINDOWS.liAug20 },
        { lab: 'Engagement rate', num: '6.0%', note: 'clicks + reactions vs. impressions', w: WINDOWS.liAug20 },
        { lab: 'New followers',   num: '+5',   note: 'all organic', w: WINDOWS.liAug20 },
        { lab: 'Page followers',  num: '338',  note: 'lifetime total', w: WINDOWS.liAug20 }
      ],
      weekly: {
        title: 'Weekly impressions',
        note: 'The Aug 17 week is partial — the export window closes Aug 18. All three posts landed Jul 21 – 30; ' +
              'impressions decay once posting stops.',
        series: [
          { label: 'Jul 20', value: 64 }, { label: 'Jul 27', value: 120 }, { label: 'Aug 3', value: 74 },
          { label: 'Aug 10', value: 67 }, { label: 'Aug 17*', value: 6 }
        ]
      },
      visitors: {
        title: 'Page visitors',
        head: ['Metric', 'Value'],
        rows: [
          ['Page views (30d)', '39'],
          ['— of which Aug 4 – 18', '23'],
          ['— of which Jul 20 – Aug 3', '16'],
          ['Posts published', '3'],
          ['Reactions', '4'],
          ['Reposts', '0']
        ]
      },
      search: {
        title: 'Search appearances',
        head: ['Metric', 'Value', 'Window'],
        rows: [
          ['Page searches', '22', WINDOWS.liSearchAug20],
          ['Change vs. prior week', '▲ 83.3%', WINDOWS.liSearchAug20],
          ['Top keyword', '"Recovery"', WINDOWS.liSearchAug20]
        ]
      },
      topPosts: {
        title: 'Top posts by impressions',
        head: ['Post', 'Posted', 'Impr.', 'Clicks', 'Likes', 'Eng. rate'],
        rows: [
          ['"Recovery doesn\'t happen in one building…"', 'Jul 30', '182', '7', '2', '4.9%'],
          ['"Need more support than weekly therapy…"', 'Jul 21', '70', '1', '1', '2.9%'],
          ['"Cholla is a proud partner…" (partnership announcement)', 'Jul 21', '55', '3', '2', '9.1%']
        ]
      },
      location: {
        title: 'Follower location',
        head: ['Location', 'Followers'],
        rows: [
          ['Greater Phoenix Area', '229'], ['Los Angeles Metro', '10'], ['Greater Tucson Area', '10'],
          ['New York City Metro', '6'], ['Miami – Fort Lauderdale', '5']
        ]
      },
      jobFunction: {
        title: 'Followers by job function',
        head: ['Function', 'Followers'],
        rows: [
          ['Business Development', '89'], ['Healthcare Services', '74'], ['Community &amp; Social Services', '33'],
          ['Sales', '24'], ['Operations', '12']
        ]
      },
      industry: {
        title: 'Follower industry',
        head: ['Industry', 'Followers'],
        rows: [
          ['Mental Health Care', '122'], ['Hospitals &amp; Health Care', '41'], ['Medical Practices', '23'],
          ['Outpatient Care Centers', '8'], ['Higher Education', '8']
        ]
      },
      seniority: {
        title: 'Follower seniority',
        head: ['Seniority', 'Followers'],
        rows: [
          ['Entry', '91'], ['Senior', '89'], ['Director', '48'], ['Owner', '31'], ['CXO', '29']
        ]
      },
      visitorFunction: {
        title: 'Page visitors by job function (30d)',
        head: ['Function', 'Visitors'],
        rows: [
          ['Real Estate', '7'], ['Military &amp; Protective Services', '5'], ['Research', '3'], ['Information Technology', '3']
        ]
      },
      searchingCompanies: {
        title: 'Top page-searcher companies',
        head: ['Company', 'Source'],
        rows: [
          ['America\'s Rehab Campuses', 'page search demographics'],
          ['AriseVida Care', 'page search demographics']
        ]
      },
      footnote: 'The audience is small (338 followers) but precisely the referral network Cholla wants: 229 of 338 ' +
                'followers are in Greater Phoenix, the #1 industry is Mental Health Care (122), and rehab operators are ' +
                'the top companies searching for the page. Cadence is the constraint — 3 posts in 30 days, and the ' +
                'Aug 4 – 18 half of the window, with no new posts, produced barely a third of the impressions of the ' +
                'half that had them.'
    }
  },
  recommendations: [
    '<b>Identify and repeat the Aug 18 Facebook breakout.</b> One day produced 670 views — more than the prior five days ' +
    'combined — and 83.4% of the window\'s views came from non-followers. Find the post behind the spike and make its ' +
    'format a template.',
    '<b>Raise LinkedIn posting cadence.</b> All three posts landed Jul 21 – 30; the Aug 4 – 18 half of the window had ' +
    'none and impressions fell by roughly two-thirds. The 6.0% engagement rate says content supply, not content quality, ' +
    'is the constraint.',
    '<b>Add competitor pages to LinkedIn\'s competitor tracker.</b> The competitor export currently reports only the ' +
    'Cholla page, so there is no benchmark. America\'s Rehab Campuses and AriseVida Care — the top companies searching ' +
    'the page — are natural additions.',
    '<b>Launch Instagram reporting.</b> The channel is marked coming soon; once the account\'s first export lands it ' +
    'joins this report.',
    '<b>Confirm the Apex reporting period.</b> The campaign figures are in but the date range label is still unset.'
  ]
};

var REPORTS = {};
REPORTS[SNAP_AUG20.id] = SNAP_AUG20;

/* newest first — the selector defaults to REPORT_ORDER[0] */
var REPORT_ORDER = ['2026-08-20'];

/* ── LinkedIn competitor comparison (separate export) ─────────────────── */
var COMPETITORS = {
  title: 'LinkedIn competitor comparison',
  source: 'source: LinkedIn competitor analytics',
  window: WINDOWS.competitor30,
  head: ['Page', 'Followers', 'New followers', 'Posts', 'Comments', 'Reactions'],
  rows: [
    ['Cholla Behavioral Health (You)', '338', '+5', '3', '0', '4']
  ],
  youIndex: 0,
  note: 'Competitor pages have not been added to LinkedIn\'s competitor tracker yet, so only the Cholla page reports. ' +
        'Add competitor pages under Analytics → Competitors on LinkedIn to populate this comparison.'
};

/* ── Apex local SEO / listings ───────────────────────────────────────── */
var APEX = {
  title: 'Apex Campaign Report',
  source: 'source: Apex',
  window: WINDOWS.apex,
  intro: 'Current campaign standings for review. Next comprehensive campaign call: <b>October 2, 2026 at 2:00 PM</b>' +
         ' &mdash; this call will cover all business locations together, so please disregard any automated per-location appointment emails.',
  listings: {
    title: 'Listings &amp; visibility',
    head: ['Item', 'Now', 'At start (May)', 'Status'],
    rows: [
      ['Total listings managed', '77', '39', { tag: 'hi', text: 'Higher' }],
      ['GMB posts', 'On schedule', '—', { tag: 'hi', text: 'On track' }]
    ]
  },
  gmb: [
    { lab: 'Website clicks', num: '397', note: 'from Google Business Profile' },
    { lab: 'Call clicks', num: '206', note: 'tap-to-call actions' },
    { lab: 'Direction requests', num: '29', note: 'navigation to location' }
  ],
  rankings: {
    title: 'Rankings',
    head: ['Keyword / area', 'Rank'],
    rows: [
      ['Partial Hospitalization Program — ZIP 85020', '<span class="tag hi">#1 organic desktop</span>'],
      ['Detox Center — ZIP 85020', '<span class="tag hi">#1 local pack</span> <span class="tag eq">#2 organic desktop</span>']
    ]
  },
  distribution: {
    title: 'Keyword distribution',
    head: ['Position', 'Keywords'],
    rows: [['#1', '13'], ['#2', '31'], ['#6 – #10', '17']]
  },
  reputation: {
    title: 'Reputation management',
    head: ['Metric', 'Value'],
    rows: [['Average rating', '4.56 stars'], ['Review volume', 'Steady — a handful of new reviews monthly']]
  },
  followUp: '<b>Follow-up:</b> discuss and optimize the client\'s review-request process.',
  warn: '<b>Reporting period not yet set:</b> Apex has not supplied the date range for these figures. Confirm and label ' +
        'the range before this section goes outside the team.'
};

/* ── L10 leadership dashboard ─────────────────────────────────────────────
   Cleared for the Cholla rebrand — the section and the Projects page stay
   in place; rows repopulate when a new L10 dashboard is imported. */
var L10 = {
  source: 'source: L10 Leadership dashboard · no data currently loaded',
  owner: 'Project tracker',
  head: ['Rock / item', 'Latest status'],
  rows: []
};

/* ── two weeks at a glance ────────────────────────────────────────────────
   Short-window cuts. Facebook currently has only a 7-day daily export;
   LinkedIn uses its own 15-day export cuts.                              */
var TWOWEEK = {
  last: WINDOWS.twLast,
  prior: WINDOWS.twPrior,
  note: 'Figures on this page are short-window cuts, so they are intentionally smaller than the Report page totals. ' +
        'Facebook currently has only a 7-day daily export (Aug 13 – 19); LinkedIn uses its own 15-day export cuts. ' +
        'Deltas come from each platform\'s native comparison where available, not from arithmetic across snapshots.',
  channels: [
    {
      key: 'facebook',
      windowOverride: 'Aug 13 – 19, 2026 vs. the prior 7 days',
      windowChip: 'Meta 7-day export',
      kpiWindow: 'Aug 13 – 19, 2026',
      head: ['Metric', 'Aug 13 – 19', 'vs. prior 7 days'],
      rows: [
        ['Views', '1,249', '▲ 534%'],
        ['Engagement (total)', '15', '▲ 400%'],
        ['Unique viewers', '628', '▲ 554.2%'],
        ['3-second video views', '7', '▼ 61.1%'],
        ['Watch time', '1m 37s', '▼ 79.5%'],
        ['Reels views', '13', '▼ 67.5%'],
        ['Page follows', '6', '▲ 200%'],
        ['Messaging contacts', '1', '▲ 100%']
      ],
      note: 'Only a 7-day daily export is available for Facebook this period, so this block is a 7-day cut rather than ' +
            'a 14-day one. All 1,249 views were organic; the Aug 18 spike (670 views) is the driver.'
    },
    {
      key: 'website',
      head: ['Metric', 'Last 2 weeks', 'vs. prior 2 weeks'],
      rows: [
        ['User visits', '1,003', '▼ 14%'],
        ['Total leads', '50', '▲ 39%'],
        ['Conversion rate', '5%', '▲ 61%']
      ]
    },
    {
      key: 'instagram',
      pending: 'Instagram reporting is coming soon — no Cholla export has been captured yet.'
    },
    {
      key: 'linkedin',
      windowOverride: 'Aug 4 – 18, 2026 vs. Jul 20 – Aug 3, 2026',
      windowChip: 'LinkedIn export cut · 15 days vs. 15 days',
      head: ['Metric', 'Aug 4 – 18', 'Jul 20 – Aug 3', 'Change'],
      rows: [
        ['Impressions', '91', '240', '▼ 62%'],
        ['Post clicks', '5', '11', '▼ 55%'],
        ['Reactions', '0', '4', '▼ 100%'],
        ['New followers', '2', '3', '▼ 33%'],
        ['Posts published', '0', '3', '▼ 3 posts'],
        ['Page views', '23', '16', '▲ 44%']
      ],
      note: 'Summed from LinkedIn\'s daily exports (15 days vs. 15 days, offset two days from the Meta/website ' +
            'fortnight above). All three of the window\'s posts landed in the earlier half — the Aug 4 – 18 decline ' +
            'is a posting gap, not an audience change.'
    }
  ]
};

/* ── trendable series for compare.html ────────────────────────────────────
   Each point carries its own source window. A metric with fewer than two
   points renders the "not enough periods yet" state instead of a chart.    */
var SERIES = {
  website: {
    'Visits':           [{ label: 'Aug 6 snapshot', value: 2870, w: WINDOWS.siteAug6 },
                         { label: 'Aug 20 snapshot', value: 1003, w: WINDOWS.siteAug20_14 }],
    'Leads':            [{ label: 'Aug 6 snapshot', value: 106,  w: WINDOWS.siteAug6 },
                         { label: 'Aug 20 snapshot', value: 50,   w: WINDOWS.siteAug20_14 }],
    'Page views':       [{ label: 'Aug 6 snapshot', value: 5043, w: WINDOWS.siteAug6 }],
    'Click-to-call':    [{ label: 'Aug 6 snapshot', value: 61,   w: WINDOWS.siteAug6 }],
    'Form submissions': [{ label: 'Aug 6 snapshot', value: 45,   w: WINDOWS.siteAug6 }]
  },
  facebook: {
    'Daily views (Aug 13 – 19)': [
      { label: 'Aug 13', value: 9,   w: WINDOWS.fb7Aug20 },
      { label: 'Aug 14', value: 86,  w: WINDOWS.fb7Aug20 },
      { label: 'Aug 15', value: 100, w: WINDOWS.fb7Aug20 },
      { label: 'Aug 16', value: 18,  w: WINDOWS.fb7Aug20 },
      { label: 'Aug 17', value: 10,  w: WINDOWS.fb7Aug20 },
      { label: 'Aug 18', value: 670, w: WINDOWS.fb7Aug20 },
      { label: 'Aug 19', value: 356, w: WINDOWS.fb7Aug20 }
    ],
    'Views (28d)':          [{ label: 'Aug 20 snapshot', value: 4600, w: WINDOWS.fbAug20 }],
    'Unique viewers (28d)': [{ label: 'Aug 20 snapshot', value: 2303, w: WINDOWS.fbAug20 }],
    'Interactions (28d)':   [{ label: 'Aug 20 snapshot', value: 46,   w: WINDOWS.fbAug20 }],
    'Page visits (28d)':    [{ label: 'Aug 20 snapshot', value: 124,  w: WINDOWS.fbAug20 }],
    'Net follows (28d)':    [{ label: 'Aug 20 snapshot', value: 14,   w: WINDOWS.fbAug20 }],
    'Followers (lifetime)': [{ label: 'Aug 20 snapshot', value: 597,  w: WINDOWS.fbAug20 }]
  },
  instagram: {},
  linkedin: {
    'Impressions (15-day cuts)': [
      { label: 'Jul 20 – Aug 3', value: 240, w: '15-day export cuts, Jul 20 – Aug 18, 2026' },
      { label: 'Aug 4 – 18',     value: 91,  w: '15-day export cuts, Jul 20 – Aug 18, 2026' }
    ],
    'Post clicks (15-day cuts)': [
      { label: 'Jul 20 – Aug 3', value: 11, w: '15-day export cuts, Jul 20 – Aug 18, 2026' },
      { label: 'Aug 4 – 18',     value: 5,  w: '15-day export cuts, Jul 20 – Aug 18, 2026' }
    ],
    'New followers (15-day cuts)': [
      { label: 'Jul 20 – Aug 3', value: 3, w: '15-day export cuts, Jul 20 – Aug 18, 2026' },
      { label: 'Aug 4 – 18',     value: 2, w: '15-day export cuts, Jul 20 – Aug 18, 2026' }
    ],
    'Page views (15-day cuts)': [
      { label: 'Jul 20 – Aug 3', value: 16, w: '15-day export cuts, Jul 20 – Aug 18, 2026' },
      { label: 'Aug 4 – 18',     value: 23, w: '15-day export cuts, Jul 20 – Aug 18, 2026' }
    ],
    'Weekly impressions': [
      { label: 'Jul 20', value: 64,  w: WINDOWS.liAug20 },
      { label: 'Jul 27', value: 120, w: WINDOWS.liAug20 },
      { label: 'Aug 3',  value: 74,  w: WINDOWS.liAug20 },
      { label: 'Aug 10', value: 67,  w: WINDOWS.liAug20 },
      { label: 'Aug 17', value: 6,   w: WINDOWS.liAug20, partial: 'through Aug 18' }
    ]
  },
  apex: {
    'Total listings managed': [
      { label: 'May start',  value: 39, w: 'campaign start, May 2026' },
      { label: 'Current',    value: 77, w: WINDOWS.apex }
    ],
    'GMB website clicks':    [{ label: 'Current', value: 397,  w: WINDOWS.apex }],
    'GMB call clicks':       [{ label: 'Current', value: 206,  w: WINDOWS.apex }],
    'GMB direction requests':[{ label: 'Current', value: 29,   w: WINDOWS.apex }],
    'Keywords ranked #1':    [{ label: 'Current', value: 13,   w: WINDOWS.apex }],
    'Keywords ranked #2':    [{ label: 'Current', value: 31,   w: WINDOWS.apex }]
  }
};

/* ── per-channel context shown beneath the compare tool ───────────────────
   Only ever rendered for the channel currently selected.                  */
function contextFor(channel) {
  if (channel === 'linkedin') { return { kind: 'competitors' }; }
  if (channel === 'apex')    { return { kind: 'apex' }; }
  if (channel === 'facebook') {
    return {
      kind: 'note',
      title: 'Facebook — reading the trend',
      body: 'Only one 28-day export has been captured under the Cholla Behavioral Health page so far, so most metrics ' +
            'show a single period. The daily views series (Aug 13 – 19) is trendable now; snapshot-over-snapshot trends ' +
            'fill in as more exports land.'
    };
  }
  if (channel === 'website') {
    return {
      kind: 'table', title: 'Website — not captured this period',
      source: 'source: Duda analytics', window: WINDOWS.siteAug20_14,
      head: ['Metric', 'Status'],
      rows: SNAP_AUG20.channels.website.pending.map(function (x) { return [x, 'Pending — available on request']; }),
      note: SNAP_AUG20.channels.website.pendingNote
    };
  }
  if (channel === 'instagram') {
    return {
      kind: 'note',
      title: 'Instagram — coming soon',
      body: 'Instagram reporting is coming soon. No Cholla export has been captured yet; the channel joins this report ' +
            'with its first export.'
    };
  }
  return null;
}
