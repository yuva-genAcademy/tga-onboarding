const ragProjects = [
  {
    id: "1",
    short: "Enterprise Policy Q&A",
    title: "Enterprise Policy Q&A Bot",
    description: "Build a RAG-powered Q&A system over real enterprise documents — HR policies, compliance manuals, product documentation, or onboarding guides. Use a no-code/low-code tool or a guided RAG starter (e.g., Pinecone + LangChain template) to ingest your documents, chunk and embed them, and stand up a question-answering interface. Then stress-test it with 15 questions including edge cases: ambiguous queries, questions that span multiple documents, and questions the knowledge base simply can’t answer. Document where retrieval succeeds, where it fails, and why.",
    bestFor: "All profiles — PMs use product docs, finance analysts use regulatory filings, consultants use client knowledge bases, engineers use technical documentation. Everyone has documents they wish they could query.",
    deliverable: "Working Q&A bot + a 15-question evaluation report with retrieval quality scores and failure analysis.",
    submission: "Demo recording + GitHub link or zip file + evaluation report document.",
    difficulty: "Beginner to Intermediate | No-code option available | Engineers extend with custom embeddings and reranking"
  },
  {
    id: "2",
    short: "Financial Documents",
    title: "Financial Document Intelligence Pipeline",
    description: "Build a RAG pipeline that answers questions across financial documents — SEC filings, earnings call transcripts, insurance claims, or loan documents. Implement two chunking strategies (fixed-size vs. semantic chunking) and compare retrieval quality on the same set of queries. Add a reranking step and measure the improvement. This project is particularly relevant for anyone working in financial services, insurance, or regulated industries, but the techniques apply to any domain with dense, structured documents.",
    bestFor: "Data Scientists/Analysts (financial analysis), Finance roles (Wells Fargo, JPMC, Citi, Morgan Stanley, NYLife), Architects (pipeline design), Consultants (client financial analysis).",
    deliverable: "A working financial RAG pipeline with a chunking strategy comparison report and reranking impact analysis.",
    submission: "Demo recording + GitHub link or zip file + comparison report document.",
    difficulty: "Intermediate | Code-assisted | PMs can define test questions and evaluate business relevance of retrieved answers"
  },
  {
    id: "3",
    short: "GraphRAG",
    title: "GraphRAG for Organizational Knowledge",
    description: "Model your team’s or organization’s knowledge as a graph — people, projects, skills, documents, and decisions — and use GraphRAG to enable queries that traditional vector search can’t handle well. Think: “Who worked on the last compliance audit and what tools did they use?” or “What decisions were made about our pricing model and who approved them?” Build the graph with 20+ nodes, run queries against it, and compare GraphRAG results with traditional vector-based RAG on the same questions. This project highlights when structured relationships matter more than semantic similarity.",
    bestFor: "Program/Project Managers (organizational knowledge), Executives (decision tracking), Consultants (client engagement knowledge), Tech Leads (technical decision logs), Strategy roles.",
    deliverable: "A knowledge graph with 20+ nodes + GraphRAG vs. vector RAG comparison on 10 queries + analysis of when each approach wins.",
    submission: "Demo recording + GitHub link or zip file + comparison analysis document.",
    difficulty: "Advanced | Code required | PMs/Managers can design the graph schema and evaluate results"
  },
  {
    id: "4",
    short: "Customer Support KB",
    title: "Customer Support Knowledge Base with Hybrid Search",
    description: "Build a customer support bot that combines keyword search and semantic search (hybrid retrieval) over support tickets, FAQs, and product manuals. Implement a confidence-based fallback: when the system isn’t sure of an answer, it escalates to a human rather than hallucinating. Test with 20 real-world-style support queries and measure first-contact resolution rate. Highly relevant for e-commerce, SaaS, and consumer-facing companies where bad AI answers directly cost customer trust.",
    bestFor: "Product Managers (customer experience), Software Engineers (implementation), Founders (MVP for their product), QA Engineers (testing edge cases), Commerce/Retail roles.",
    deliverable: "Working support bot with hybrid search + escalation logic, tested against 20 queries with resolution metrics.",
    submission: "Demo recording + GitHub link or zip file + evaluation metrics document.",
    difficulty: "Intermediate | Low-code option with guided templates | Engineers add custom reranking"
  }
];

const projects = [
  {
    id: "A",
    short: "Market Research",
    title: "Market Research Agent — Competitor Analysis",
    description: "Build an agent that takes a company or product name, autonomously researches competitors using web search and document retrieval tools, extracts key insights (pricing, features, market positioning, recent news), and produces a structured competitive analysis briefing. Low-code builders use n8n to orchestrate the workflow; engineers build with LangChain/LangGraph (or another framework of their choice). Engineers can extend with custom MCP tool integrations for additional data sources. This is the agent every strategy team and PM wishes they had running weekly.",
    bestFor: "PMs (competitive intelligence), Consultants (client research), Executives (market monitoring), Analysts (industry tracking), Founders (landscape analysis), Students (learning research workflows).",
    deliverable: "Working research agent that produces formatted competitor analysis briefings + sample output for 2–3 competitors.",
    submission: "Demo recording + GitHub link or zip file.",
    difficulty: "Beginner to Intermediate | Low-code track (n8n) and code track (LangChain/LangGraph) available",
    solutions: [
      { label: "Market Research Agent Solution Kit", url: "https://docs.google.com/document/d/1pSokquO_zPl3NQUE9IzRAnNjKUMpx2Os7E73Y5gjxsI/edit?usp=sharing" }
    ]
  },
  {
    id: "B",
    short: "Deal Review",
    title: "Multi-Agent Deal Review Pipeline",
    description: "Design a multi-agent system for financial deal review: Agent 1 extracts key terms from a deal document, Agent 2 checks them against compliance rules, Agent 3 flags risks and generates a summary, and an Orchestrator Agent coordinates the full pipeline. Add other subagents as needed. Modeled on real financial services workflows — loan approvals, insurance underwriting, investment reviews. This project demonstrates delegation, coordination, and agent-to-agent communication at scale. Build with LangChain/LangGraph or another framework of your choice.",
    bestFor: "Financial Services roles (JPMC, Wells Fargo, Citi, Morgan Stanley, NYLife), Architects (pipeline design), Consultants (process automation), Program Managers (workflow optimization).",
    deliverable: "Working multi-agent pipeline with 3+ specialized agents, orchestration logic, and a sample deal review output.",
    submission: "Demo recording + GitHub link",
    difficulty: "Advanced | Code track uses LangChain/LangGraph | Business track designs the workflow and tests outputs using n8n",
    solutions: [
      { label: "Multi-Agent Deal Review", url: "https://docs.google.com/document/d/1V5-tB75gGB8MOhoMqlUZi-bPUomR8WHFs-hyyNluDH4/edit?usp=sharing" }
    ]
  },
  {
    id: "C",
    short: "Project Status",
    title: "Intelligent Project Status Agent",
    description: "Build an agent that connects to your project management tools (Jira, Asana, Notion), pulls current sprint status, identifies blockers, and generates a weekly status report with risk flags. Add memory so the agent tracks week-over-week trends and can answer questions like “What’s been stuck for more than one sprint?” Low-code builders use n8n to wire up the integrations; engineers build with LangChain/LangGraph or your preferred framework. This is the agent every program manager wishes they had — and every engineering lead would actually use.",
    bestFor: "Program/Project Managers (direct workflow value), Tech Leads (sprint management), Engineering Managers, Consultants (client project tracking), Delivery Managers.",
    deliverable: "Working status agent, memory, and a sample weekly status report.",
    submission: "Demo recording + GitHub link",
    difficulty: "Intermediate | Low-code track (n8n) and code track (LangChain/LangGraph) available",
    solutions: [
      { label: "Intelligent Project Status Agent", url: "https://docs.google.com/document/d/1U-fdg-KINS0V4UXmBQbhXYivFXpYUB6ZNqjpyuNnWYk/edit?usp=sharing" }
    ]
  },
  {
    id: "E",
    short: "Code Review",
    title: "Code Review Agent",
    description: "Build a multi-agent code review system: Agent 1 analyzes code for bugs and anti-patterns, Agent 2 checks for security vulnerabilities, Agent 3 evaluates test coverage and suggests missing tests. An orchestrator combines findings into a prioritized review report with severity ratings. Test on real pull requests or open-source repos. Build with LangChain/LangGraph or your preferred framework. This is directly applicable to engineering workflows at companies shipping code at scale.",
    bestFor: "Software Engineers (Atlassian, Razorpay, Cisco, JPMC), DevSecOps Engineers (Workday), QA/SDET (Equifax, Affinity), AI Engineers (Google, Ericsson), Tech Leads.",
    deliverable: "Multi-agent code review system tested on 3 real code samples + a prioritized findings report.",
    submission: "Demo recording + GitHub link",
    difficulty: "Advanced | Code required | PMs can evaluate outputs and design the review rubric",
    solutions: [
      { label: "Code Review Agent Deep Agents", url: "https://docs.google.com/document/d/13IyHPMtcWPmnntSiC7ED9dFO65ZIOu6IZPieog9x9F4/edit?usp=sharing" },
      { label: "Solution_Kit_Code_Review_Agent_ReAct", url: "https://docs.google.com/document/d/1iP2S2Ek647ANW6WACXQpDAqwkH_rJeGrYj49OOfi-lU/edit?usp=sharing" }
    ]
  }
];

const storageKey = "tga-onboarding-progress";
const allProgressKeys = ["slack", "discord", "github", "calendar", "tools", "fact"];

function getProgress() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch {
    return {};
  }
}

function saveProgress(progress) {
  localStorage.setItem(storageKey, JSON.stringify(progress));
}

function updateProgressUI() {
  const progress = getProgress();
  const complete = allProgressKeys.filter((key) => progress[key]).length;
  const percent = Math.round((complete / allProgressKeys.length) * 100);
  document.getElementById("header-progress").textContent = `${percent}%`;
  document.getElementById("progress-ring-value").style.strokeDashoffset = `${106.8 - (106.8 * percent) / 100}`;
  document.querySelectorAll("[data-progress-key]").forEach((input) => {
    input.checked = Boolean(progress[input.dataset.progressKey]);
  });
}

function showView(viewName, updateHash = true) {
  const target = document.querySelector(`[data-view="${viewName}"]`);
  if (!target) return;

  document.querySelectorAll(".view").forEach((view) => {
    const active = view === target;
    view.hidden = !active;
    view.classList.toggle("is-active", active);
  });
  document.querySelectorAll("[data-view-target]").forEach((control) => {
    control.classList.toggle("is-active", control.dataset.viewTarget === viewName);
    if (control.classList.contains("chapter-link") || control.classList.contains("mobile-tab")) {
      control.setAttribute("aria-current", control.dataset.viewTarget === viewName ? "page" : "false");
    }
  });
  if (updateHash) history.replaceState(null, "", `#${viewName}`);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderProjectCollection(items, tabsId, detailId, labelFor, showSolutions = false) {
  const tabs = document.getElementById(tabsId);
  tabs.innerHTML = items.map((project, index) => `
    <button class="project-tab${index === 0 ? " is-active" : ""}" type="button" role="tab" aria-selected="${index === 0}" data-project-id="${project.id}">
      <span>${labelFor(project)}</span><strong>${project.short}</strong>
    </button>`).join("");
  renderProjectDetail(items[0], detailId, labelFor(items[0]), showSolutions);

  tabs.addEventListener("click", (event) => {
    const button = event.target.closest("[data-project-id]");
    if (!button) return;
    const project = items.find((item) => item.id === button.dataset.projectId);
    tabs.querySelectorAll(".project-tab").forEach((tab) => {
      const active = tab === button;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
    });
    renderProjectDetail(project, detailId, labelFor(project), showSolutions);
  });
}

function renderProjectDetail(project, detailId, projectLabel, showSolutions) {
  const detail = document.getElementById(detailId);
  detail.innerHTML = `
    <div class="project-title-row">
      <div><span class="eyebrow">${projectLabel}</span><h2>${projectLabel}: ${project.title}</h2></div>
    </div>
    <div class="project-copy">
      <section><span>Description</span><p>${project.description}</p></section>
      <section><span>Best For</span><p>${project.bestFor}</p></section>
      ${project.deliverable ? `<section><span>Deliverable</span><p>${project.deliverable}</p></section>` : ""}
      <section><span>Submission</span><p>${project.submission}</p></section>
      <section><span>Difficulty</span><p><em>${project.difficulty}</em></p></section>
    </div>
    ${showSolutions ? `<div class="solution-reference">
      <span>Definition of done</span>
      <h3>Code-track example</h3>
      <p>Use the solution only as a reference after attempting the project yourself.</p>
      <div class="solution-links">
        ${project.solutions.length
          ? project.solutions.map((solution) => `<a href="${solution.url}" target="_blank" rel="noreferrer">${solution.label} <span aria-hidden="true">↗</span></a>`).join("")
          : `<span class="solution-pending">Reference link placeholder</span>`}
      </div>
    </div>` : ""}`;
}

document.addEventListener("DOMContentLoaded", () => {
  updateProgressUI();
  renderProjectCollection(ragProjects, "rag-project-tabs", "rag-project-detail", (project) => `Project ${project.id}`);
  renderProjectCollection(projects, "project-tabs", "project-detail", (project) => `Project 3${project.id}`, true);

  document.querySelectorAll("[data-progress-key]").forEach((input) => {
    input.addEventListener("change", () => {
      const progress = getProgress();
      progress[input.dataset.progressKey] = input.checked;
      saveProgress(progress);
      updateProgressUI();
    });
  });

  document.querySelectorAll("[data-view-target]").forEach((control) => {
    control.addEventListener("click", () => showView(control.dataset.viewTarget));
  });

  document.querySelectorAll("[data-scroll-to]").forEach((control) => {
    control.addEventListener("click", () => document.getElementById(control.dataset.scrollTo)?.scrollIntoView({ behavior: "smooth" }));
  });

  document.querySelectorAll(".week-summary").forEach((summary) => {
    summary.addEventListener("click", () => {
      const card = summary.closest(".week-card");
      const content = card.querySelector(".week-content");
      const willOpen = !card.classList.contains("is-open");
      card.classList.toggle("is-open", willOpen);
      summary.setAttribute("aria-expanded", String(willOpen));
      summary.querySelector(".week-toggle").textContent = willOpen ? "−" : "+";
      content.hidden = !willOpen;
    });
  });

  const initialView = location.hash.replace("#", "");
  if (["welcome", "course", "rag", "agents", "marketing"].includes(initialView)) showView(initialView, false);
});

window.addEventListener("hashchange", () => {
  const view = location.hash.replace("#", "");
  if (["welcome", "course", "rag", "agents", "marketing"].includes(view)) showView(view, false);
});
