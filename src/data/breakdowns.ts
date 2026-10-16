// Every claim below comes from the linked public sources.
// Revenue snapshot: trustmrr.com/category/ai, checked 16 Oct 2026.
export type Channel = "X" | "Launches" | "Cold outreach" | "Reddit" | "Open source" | "SEO" | "AI search";
export type Breakdown = {
  slug: string; name: string; founder: string; what: string;
  mrr: number; channels: Channel[]; title: string; summary: string;
  steps: string[]; lesson: string; unverified: string; sources: [string, string][];
};
export const CHANNELS: Channel[] = ["X", "Launches", "Cold outreach", "Reddit", "Open source", "SEO", "AI search"];
export const SNAPSHOT = "16 Oct 2026";

export const breakdowns: Breakdown[] = [
{ slug: "chatbase", name: "Chatbase", founder: "Yasser Elsaid", what: "AI chatbots trained on your business data", mrr: 864000,
  channels: ["X", "Launches", "Reddit"],
  title: "From 16 X followers to $1M ARR with demo videos",
  summary: "He launched to 16 followers on X during the early ChatGPT wave. Short demo videos went viral. He spent nothing on marketing for 3 months.",
  steps: [
    "He shipped early. Chatbase was one of the first 'chat with your data' tools. He launched it to 16 followers on X.",
    "His first paying customer came about 30 minutes after launch.",
    "He posted short, polished screen recordings. His first 4 posts about Chatbase went viral.",
    "He linked the product to popular AI tools. He spoke at LangChain and Pinecone webinars and joined X Spaces.",
    "On Reddit and Indie Hackers, he told his story. He did not post 'here is my tool' ads.",
    "For the first 3 months he spent $0 on marketing. He built in public on X, LinkedIn and Reddit every day.",
    "Later, growth came from self-serve signups. The team also sends outreach to people who already signed up.",
  ],
  lesson: "In a new category, a good 30-second demo can replace an audience. In communities, tell a story. Do not pitch.",
  unverified: "'$1M ARR in 117 days' and '$10M ARR' are the founder's own claims in interviews. TrustMRR shows the current verified MRR.",
  sources: [["Founder's X thread (Thread Reader)", "https://threadreaderapp.com/thread/1653411314427985921.html"], ["EO interview", "https://www.eomag.io/article/chatbase-yasser-elsaid"], ["Starter Story", "https://www.starterstory.com/yasser"], ["Latent Space podcast", "https://latentspace.podhood.com/9bb39403-bb28-4432-b93a-e9ef78f4f5af"], ["TrustMRR", "https://trustmrr.com/category/ai"]] },
{ slug: "gojiberry", name: "GojiberryAI", founder: "Romàn Czerny", what: "Finds B2B buyers who show buying signals", mrr: 424000,
  channels: ["Cold outreach", "Reddit"],
  title: "Sell it by hand first, then grow with your own tool",
  summary: "He sold lead lists by hand before he wrote code. His top channel is cold email sent after a buying signal.",
  steps: [
    "The first 'product' was a slide deck. He found leads by hand on LinkedIn and sent them as Excel files.",
    "He tested the same message on two groups: random leads from Apollo, and leads that showed buying signals. The second group reportedly converted 4x better. That test became the product.",
    "His first 10 customers reportedly came from one r/SaaS post. The post explained what he planned to build.",
    "He says cold email is his best channel. He runs broad campaigns and very targeted ones.",
    "Targeted emails start from a signal. Examples: someone liked a competitor's post, changed jobs, or raised money.",
    "On LinkedIn he posts often, replies to every comment and messages people who engage. He also uses a LinkedIn automation tool.",
    "Smaller channels: partner agencies, paid posts with creators and a small ad budget.",
  ],
  lesson: "Timing matters more than copy. Reach people right after they show a need. Use your product to grow your product.",
  unverified: "The 4x number and 'first 10 customers from r/SaaS' come from a third-party Reddit interview summary. They are not from a primary source.",
  sources: [["Indie Hackers interview", "https://www.indiehackers.com/post/tech/validating-via-services-before-building-a-27k-mrr-product-7FrT6FXChPOiUK4PbXFp"], ["Founder's LinkedIn post", "https://www.linkedin.com/posts/rom%C3%A0n-czerny-11b773199_here-are-the-traffic-sources-i-used-to-grow-activity-7343204996257095680-rmjg"], ["Founder's r/SaaS post", "https://www.reddit.com/r/SaaS/comments/1lhp6p8/how_im_building_gojiberry_ai_to_1m_arr_and_the/"], ["r/microsaas interview summary", "https://www.reddit.com/r/microsaas/comments/1rlud18/i_interviewed_a_founder_who_hit_85kmo_using_a/"], ["TrustMRR", "https://trustmrr.com/category/ai"]] },
{ slug: "postiz", name: "Postiz", founder: "Nevo David", what: "Open-source social media scheduler", mrr: 275000,
  channels: ["Launches", "Reddit", "Open source"],
  title: "Paid SEO failed. Open source and one-week launches worked.",
  summary: "He paid for SEO for 4 months and it did not work. Then he open-sourced the app and put all launch traffic into one week.",
  steps: [
    "He tried SEO first. He spent about $3k a month for 4 months. His new domain could not rank, so he stopped.",
    "He open-sourced the app. The GitHub page, with a clear README, became the landing page.",
    "He sent all launch traffic in one week: Hacker News, r/selfhosted, Lemmy, dev.to, Medium and HackerNoon.",
    "That spike put the repo on GitHub Trending. Stars, Discord members and contributors followed.",
    "Every few weeks he posts a changelog on r/selfhosted. Each post shows real new features, not only bug fixes.",
    "For Product Hunt he asked his audience to support the launch: README, newsletter, Discord, X and LinkedIn. Postiz was #1 of the day, week and month. He says it added about $1k MRR.",
    "He runs a 30% affiliate program. He paid large X accounts to repost him and says it 'didn't do much'.",
  ],
  lesson: "Put all launch traffic into one short window. Trending lists reward spikes, not slow growth.",
  unverified: "Star, MRR and trial numbers come from the founder's posts at different dates. TrustMRR now shows much more than the $17k MRR quoted on Starter Story.",
  sources: [["Founder on Medium", "https://medium.com/sliceofdev/you-can-get-your-financial-freedom-with-open-source-in-2025-47e46fcd3cdb"], ["Gitroom blog: 3k to 14k stars", "https://gitroom.com/blog/from-3k-stars-to-14k-in-3-months"], ["Starter Story", "https://www.starterstory.com/nevo"], ["TrustMRR", "https://trustmrr.com/category/ai"]] },
{ slug: "seobot", name: "SEObot", founder: "John Rush", what: "AI agent that runs SEO for a blog", mrr: 37000,
  channels: ["SEO", "X", "Launches"],
  title: "Use it on your own 24 projects, then share the results",
  summary: "It started as an internal tool. Growth came from SEO, cross-promotion with his other tools and building in public. He says paid ads never worked.",
  steps: [
    "He built it to do SEO for his own projects, about 24 of them. Then he ran a closed beta with friends.",
    "He uses it on all his other products and shares the results in public.",
    "His own estimate of where growth comes from: about 30% SEO, 30% cross-promotion from his other tools and 30% social media.",
    "He launched on Product Hunt on 27 Dec 2024. He already had a large audience on X.",
    "He keeps about 1,000 direct chats with users open. People recommend it without being asked.",
    "He says paid Google and Facebook ads never worked for him.",
  ],
  lesson: "Several tools for the same audience help each other. Each product sends customers to the next one.",
  unverified: "The 30/30/30 split is the founder's spoken estimate. Other sites quote $55k to $100k a month at different times. TrustMRR now shows $37k MRR.",
  sources: [["Founder's launch post", "https://johnrushx.substack.com/p/my-big-launch-been-working-for-2"], ["Founderpath interview", "https://founderpath.com/resources/john-rush-marsx-3-5m-arr-ai-agents-two-person-teams/watch"], ["Latka interview", "https://getlatka.com/interviews/marsxdev-john-rush-2025"], ["TrustMRR", "https://trustmrr.com/category/ai"]] },
{ slug: "rezi", name: "Rezi", founder: "Jacob Jacquet", what: "AI resume builder", mrr: 248000,
  channels: ["SEO", "Launches", "AI search"],
  title: "Five flat years, then the 'AI resume builder' keyword",
  summary: "It had almost no growth from 2015 to 2020. Then it got a focused SEO plan, deal-site launches and big free-plan giveaways.",
  steps: [
    "From 2015 to 2020 there was no clear plan and almost no growth.",
    "In April 2020 the team set an SEO plan, rebuilt the site and hired a writer and an SEO consultant.",
    "They did not fight for 'resume builder'. They targeted 'AI resume builder' early, before the term was crowded.",
    "A deal on AppSumo brought users during COVID. StackCommerce brought revenue.",
    "They gave away their most expensive plan for free to start viral sharing. In Oct 2023 this brought almost 70k signups in one day.",
    "They added small keyword tools, such as an AI resignation letter writer, to catch related searches.",
  ],
  lesson: "Pick the keyword your category will use next. Do not fight for the one everyone wants today.",
  unverified: "The 'AI search' tag is based only on the founder saying Rezi is 'constantly recommended' on Google, LinkedIn and Reddit. We found no data on mentions in ChatGPT or Perplexity. We will check this in the AI Visibility Trackers section.",
  sources: [["Founder on Starter Story", "https://www.starterstory.com/stories/ai-powered-free-ats-resume-builder"], ["Founder's growth post", "https://www.jacobjacquet.com/posts/growth-marketing-for-startups"], ["Rezi 2023 year in review", "https://www.rezi.ai/posts/year-in-review-2023"], ["SEO consultant case study", "https://www.astleycervania.com/blog/rezi-case-study-part-two"], ["TrustMRR", "https://trustmrr.com/category/ai"]] },
];
export const fmtMoney = (n: number) => n >= 1000 ? `$${Math.round(n / 1000)}k` : `$${n}`;
export const money = (n: number) => n >= 1e6 ? `$${(n / 1e6).toFixed(2)}M` : `$${Math.round(n / 1000)}k`;
