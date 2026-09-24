const serviceData = [
  {
    id: "procedures",
    ar: "تحسين الإجراءات",
    en: "Procedure Improvement",
    summaryAr: "مراجعة الإجراء الحالي وتحديد الأدوار ونقاط التعثر، ثم بناء خطوات أوضح قابلة للتطبيق والمتابعة.",
    summaryEn: "Reviewing the current procedure, clarifying roles and bottlenecks, then building clearer steps for implementation and follow-up.",
    detailAr: "نراجع الخطوات الحالية والمسؤوليات ونقاط التأخير أو التكرار. يشمل ذلك إجراءات العمليات والطلبات والتوريد عند ارتباطها بالعمل، ثم نرتب المسار في خطوات واضحة وسجل متابعة مناسب.",
    detailEn: "We review current steps, responsibilities, delays, and duplication. This can include operations, requests, and supply procedures where relevant, then organize the workflow into clear steps and a suitable follow-up record.",
    questions: [
      ["اسم الإجراء أو العملية", "Process or procedure name"],
      ["المشكلة الحالية أو نقطة التعثر", "Current problem or bottleneck"]
    ]
  },
  {
    id: "operations",
    ar: "التنظيم التشغيلي",
    en: "Operational Organization",
    summaryAr: "تنظيم تدفق العمل والطلبات بين الإدارات، وتوضيح المسؤوليات وحالات المتابعة وتقليل التأخير.",
    summaryEn: "Organizing workflows and requests across departments, clarifying ownership and follow-up, and reducing delays.",
    detailAr: "نرسم رحلة العمل أو الطلب ونحدد الأطراف والخطوات وحالات المتابعة. يشمل ذلك تدفق الطلبات وقطع الغيار والتنسيق مع الموردين عندما يكون ذلك ضمن نطاق العمل، مع تحديد مسؤول لكل مرحلة.",
    detailEn: "We map the request or workflow journey and identify stakeholders, steps, and statuses. This can include request and spare-parts flow and supplier coordination when relevant, with clear ownership for each stage.",
    questions: [
      ["العملية أو المجال المراد تنظيمه", "Process or area to organize"],
      ["التحدي التشغيلي الحالي", "Current operational challenge"]
    ]
  },
  {
    id: "contracts",
    ar: "العقود والمتابعة",
    en: "Contracts & Follow-up",
    summaryAr: "تنظيم نطاق الخدمة والمتطلبات التشغيلية وسجلات المتابعة وحالات العقود والموردين بطريقة أوضح.",
    summaryEn: "Organizing service scope, operational requirements, follow-up records, and contract or supplier status more clearly.",
    detailAr: "ندعم تنظيم نطاق الخدمة والمتطلبات التشغيلية ووسائل المتابعة المرتبطة بالعقود أو الموردين. يمكن أن يشمل ذلك نقاط المراجعة وحالات الطلبات ومسؤوليات المتابعة، دون تقديم استشارة قانونية أو بيئية مرخصة.",
    detailEn: "We support the organization of service scope, operational requirements, and follow-up methods for contracts or suppliers. This can include review points, request statuses, and follow-up ownership, without providing licensed legal or environmental advice.",
    questions: [
      ["نوع العقد أو الخدمة", "Contract or service type"],
      ["المتطلبات أو المتابعة التي تحتاج تنظيمًا", "Requirements or follow-up to organize"]
    ]
  },
  {
    id: "digital",
    ar: "الرقمنة الإدارية",
    en: "Administrative Digitization",
    summaryAr: "تحويل المتابعة اليدوية الموزعة إلى نماذج وسجلات ومسارات عمل رقمية مبسطة وواضحة.",
    summaryEn: "Transforming scattered manual follow-up into simple, clear digital forms, records, and workflows.",
    detailAr: "نحلل خطوات العمل اليدوية والبيانات المطلوبة والمسؤوليات وحالات الطلب. ثم نقترح نموذجًا أو سجلًا أو مسار عمل رقميًا مبسطًا يناسب الاستخدام اليومي، بما في ذلك الطلبات والموردون وقطع الغيار عند الحاجة.",
    detailEn: "We analyze manual steps, required data, ownership, and request statuses. We then propose a simple digital form, register, or workflow suited to daily use, including requests, suppliers, and spare parts when needed.",
    questions: [
      ["العملية اليدوية الحالية", "Current manual process"],
      ["ما الذي تريد تحويله إلى متابعة رقمية؟", "What do you want to digitize?"]
    ]
  }
];

const caseData = [
  {
    id: "industrial-waste",
    ar: "تحسين منظومة إدارة المخلفات الصناعية وخفض التكلفة",
    en: "Improving Industrial Waste Management and Reducing Cost",
    summaryAr: "تنظيم متطلبات الخدمة والتصنيفات التشغيلية وربطها بنطاق العمل والتكلفة والمتابعة.",
    summaryEn: "Organizing service requirements and operational classifications while linking scope, cost, and follow-up.",
    overviewAr: "حالة تنظيمية ركزت على توضيح عناصر الخدمة وربط المتطلبات التشغيلية بنطاق العمل والمتابعة.",
    overviewEn: "An organizational case focused on clarifying service elements and linking operational requirements to scope and follow-up.",
    previousAr: "كانت المتطلبات والتصنيفات ومعلومات المتابعة موزعة بين أكثر من ملف أو نقطة اتصال، مما يصعّب تكوين صورة موحدة لنطاق الخدمة.",
    previousEn: "Requirements, classifications, and follow-up information were distributed across multiple files or contact points, making it difficult to form a unified view of service scope.",
    challengeAr: "الحاجة إلى تنظيم متطلبات خدمة إدارة المخلفات الصناعية ورفع وضوح التصنيفات التشغيلية وعلاقتها بنطاق العمل والتكلفة.",
    challengeEn: "A need to organize industrial waste-management service requirements and clarify operational classifications, service scope, and cost.",
    roleAr: "مراجعة العناصر التشغيلية، ترتيب المتطلبات، وتحسين وضوح الربط بين نطاق الخدمة والمتابعة والتكلفة.",
    roleEn: "Reviewing operational elements, organizing requirements, and improving the connection between service scope, follow-up, and cost.",
    approachAr: "تحديد البيانات الأساسية، مراجعة نطاق الخدمة، تنظيم التصنيفات، وبناء تصور متابعة يساعد على وضوح الاحتياج والقرارات التشغيلية.",
    approachEn: "Identifying essential data, reviewing service scope, organizing classifications, and building a follow-up approach that supports clearer operational decisions.",
    outputsAr: ["خريطة تدفق مبسطة للخدمة", "نموذج موحد لتجميع المتطلبات", "نقاط مراجعة لنطاق العمل", "سجل متابعة للحالات والملاحظات"],
    outputsEn: ["A simplified service-flow map", "A unified requirements form", "Service-scope review points", "A follow-up register for statuses and notes"],
    impactAr: "تصور تشغيلي أوضح يدعم مراجعة نطاق العمل والتكلفة وتحسين متابعة الخدمة.",
    impactEn: "A clearer operational model supporting service-scope and cost review, with improved service follow-up."
  },
  {
    id: "spare-parts",
    ar: "تحسين تدفق قطع الغيار لتسريع إصلاح مركبات الحوادث",
    en: "Improving Spare-Parts Flow to Accelerate Accident-Vehicle Repairs",
    summaryAr: "توضيح رحلة طلب وتوريد قطع الغيار وتنظيم التنسيق والمتابعة بين الأطراف ذات العلاقة.",
    summaryEn: "Clarifying the spare-parts request and supply journey while organizing coordination and follow-up among stakeholders.",
    overviewAr: "حالة تشغيلية وسلاسل إمداد ركزت على رحلة قطعة الغيار من الاحتياج حتى الاستلام ومتابعة الإصلاح.",
    overviewEn: "An operations and supply-chain case focused on the spare part journey from need through receipt and repair follow-up.",
    previousAr: "يمر طلب قطع الغيار بين أكثر من طرف: احتياج، مراجعة، اعتماد، طلب شراء، مورد، توريد، استلام، ثم متابعة الإصلاح. عند غياب حالة واضحة لكل مرحلة يصبح من الصعب معرفة أين توقف الطلب ومن المسؤول عنه.",
    previousEn: "A spare-parts request moves across several parties: need, review, approval, purchase request, supplier, supply, receipt, and repair follow-up. Without a clear status for each stage, it becomes difficult to know where the request stopped and who owns it.",
    challengeAr: "وجود تأخر أو غموض في مراحل طلب وتوريد قطع الغيار، مع حاجة إلى رفع وضوح حالة الطلب بين الأطراف ذات العلاقة.",
    challengeEn: "Delays or ambiguity across spare-parts request and supply stages, with a need for clearer request-status visibility among related stakeholders.",
    roleAr: "تحليل رحلة طلب قطعة الغيار من الاحتياج إلى التوريد، تحديد نقاط التعثر ونقاط تسليم المسؤولية، اقتراح حالات متابعة موحدة، وتنظيم تصور لسجل طلبات يسهل الرجوع إليه.",
    roleEn: "Analyzing the spare-parts request journey from need to supply, identifying bottlenecks and responsibility handoffs, proposing unified statuses, and organizing a request-register concept that is easy to reference.",
    approachAr: "تحديد مراحل الطلب الأساسية، وتعريف حالات متابعة مثل جديد، بانتظار اعتماد، قيد الطلب، بانتظار المورد، تم التوريد، ومغلق. ثم تحديد مسؤول المرحلة وتاريخ آخر تحديث ونقطة تصعيد عند تجاوز مدة متابعة محددة.",
    approachEn: "Defining core request stages and statuses such as New, Pending Approval, On Order, Awaiting Supplier, Supplied, and Closed. Then identifying stage ownership, last-update date, and an escalation point when a defined follow-up duration is exceeded.",
    outputsAr: ["خريطة تدفق طلب قطع الغيار", "سجل موحد لمتابعة الطلبات", "حالات متابعة واضحة", "تحديد مسؤول لكل مرحلة", "نموذج تصعيد للتأخير أو النقص"],
    outputsEn: ["A spare-parts request flow map", "A unified request follow-up register", "Clear follow-up statuses", "An owner defined for each stage", "An escalation form for delays or shortages"],
    impactAr: "سرعة أكبر في معرفة حالة أي طلب، تقليل الوقت الضائع في السؤال والمتابعة اليدوية، تحسين التنسيق بين الطلبات والموردين والإصلاح، وبيانات أوضح لدراسة أسباب التأخير.",
    impactEn: "Faster visibility of every request’s status, less time lost to manual inquiries and follow-up, better coordination across requests, suppliers, and repair, and clearer data for analyzing causes of delay."
  },
  {
    id: "hr-digitization",
    ar: "تطوير إدارة الموارد البشرية من الأرشيف الورقي إلى نظام رقمي",
    en: "Developing HR Administration from Paper Archives to a Digital System",
    summaryAr: "تحويل الملفات والمتابعة اليدوية إلى بنية رقمية أوضح للبيانات والطلبات والحالات والمسؤوليات.",
    summaryEn: "Transforming paper files and manual follow-up into a clearer digital structure for data, requests, statuses, and ownership.",
    overviewAr: "حالة رقمنة إدارية ركزت على تنظيم السجلات والملفات وطلبات المتابعة في هيكل بيانات أوضح.",
    overviewEn: "An administrative-digitization case focused on organizing records, files, and follow-up requests in a clearer data structure.",
    previousAr: "كان الاعتماد على الأرشيف الورقي والملفات المتفرقة يجعل الوصول إلى المعلومات ومتابعة الطلبات والحالات أكثر صعوبة.",
    previousEn: "Reliance on paper archives and scattered files made information retrieval and request-status follow-up more difficult.",
    challengeAr: "الحاجة إلى تحويل الملفات اليدوية إلى بنية رقمية منظمة تدعم وضوح البيانات والمسؤوليات وحالة كل طلب أو ملف.",
    challengeEn: "A need to transform manual files into an organized digital structure that supports clarity of data, ownership, and each request or file status.",
    roleAr: "تحليل الاحتياج إلى البيانات والسجلات، وتحديد الحقول الأساسية ومسارات المتابعة المناسبة للرقمنة.",
    roleEn: "Analyzing data and record needs, identifying core fields, and defining appropriate digital follow-up workflows.",
    approachAr: "حصر أنواع الملفات والبيانات، تحديد صلاحيات ومسؤوليات التحديث، ثم تصميم تصور لنموذج موحد وسجل رقمي لحالة الطلبات والملفات.",
    approachEn: "Inventorying file and data types, defining update permissions and ownership, then designing a unified form and digital register for requests and records.",
    outputsAr: ["هيكل بيانات رقمي", "نموذج موحد لإدخال الطلبات", "سجل حالة للملفات والطلبات", "مصفوفة مسؤوليات للتحديث والمتابعة"],
    outputsEn: ["A digital data structure", "A unified request-entry form", "A status register for files and requests", "A responsibility matrix for updates and follow-up"],
    impactAr: "تصور رقمي يساعد على تنظيم السجلات وسرعة استرجاع البيانات ووضوح حالة الطلبات والمتابعة.",
    impactEn: "A digital concept that supports organized records, faster information retrieval, and clearer request and follow-up status."
  }
];

const certificationData = [
  {
    id: "cpim",
    shortName: "CPIM",
    nameAr: "إدارة الإنتاج والمخزون المعتمدة",
    nameEn: "Certified in Production and Inventory Management",
    provider: "APICS / ASCM",
    file: "APICS_CPIM_Original_Certificate_A4%20(2).pdf",
    descriptionAr: "تغطي مفاهيم تخطيط الإنتاج وإدارة المخزون وتدفق المواد وتحسين توافر المنتجات وموازنة العرض والطلب.",
    descriptionEn: "Covers production planning, inventory management, material flow, improving product availability, and balancing supply and demand.",
    relevanceAr: "تدعم تحليل تدفق الطلبات وقطع الغيار، تنظيم المخزون، متابعة التوريد، وتقليل نقاط التعثر في العمليات.",
    relevanceEn: "Supports analysis of request and spare-parts flow, inventory organization, supply follow-up, and reducing operational bottlenecks."
  },
  {
    id: "ciscp",
    shortName: "CISCP",
    nameAr: "محترف سلاسل الإمداد الدولي المعتمد",
    nameEn: "Certified International Supply Chain Professional",
    provider: "IPSCMI",
    file: "CISCP.Degree.pdf",
    descriptionAr: "تغطي مفاهيم إدارة سلاسل الإمداد والتنسيق بين الطلبات والموردين والتوريد والتخطيط والمتابعة.",
    descriptionEn: "Covers supply-chain management concepts, coordination among requests, suppliers, sourcing, planning, and follow-up.",
    relevanceAr: "تدعم تنظيم مسارات الطلبات، متابعة الموردين، تحسين تدفق قطع الغيار، وبناء سجلات متابعة تشغيلية.",
    relevanceEn: "Supports organization of request routes, supplier follow-up, improved spare-parts flow, and building operational follow-up records."
  },
  {
    id: "ciscm",
    shortName: "CISCM",
    nameAr: "مدير سلاسل الإمداد الدولي المعتمد",
    nameEn: "Certified International Supply Chain Manager",
    provider: "IPSCMI",
    file: "CISCM.pdf",
    descriptionAr: "تتناول إدارة سلاسل الإمداد من منظور تشغيلي وإداري، وربط التخطيط والتنفيذ والأداء والتعاون مع الموردين.",
    descriptionEn: "Addresses supply-chain management from an operational and administrative perspective, linking planning, execution, performance, and supplier collaboration.",
    relevanceAr: "تدعم العمل على مؤشرات المتابعة، تنظيم العمليات، تحديد المسؤوليات، وتحسين وضوح التدفق التشغيلي.",
    relevanceEn: "Supports work on follow-up indicators, operations organization, ownership definition, and improved operational-flow visibility."
  },
  {
    id: "ciscc",
    shortName: "CISCC",
    nameAr: "مستشار سلاسل الإمداد الدولي المعتمد",
    nameEn: "Certified International Supply Chain Consultant",
    provider: "IPSCMI",
    file: "ciscc.pdf",
    descriptionAr: "تركز على تحليل تحديات سلسلة الإمداد، بناء التوصيات، وتحويل الاحتياج التشغيلي إلى حلول قابلة للتنفيذ والمتابعة.",
    descriptionEn: "Focuses on analyzing supply-chain challenges, building recommendations, and converting operational needs into implementable, trackable solutions.",
    relevanceAr: "تدعم تشخيص الإجراءات، تطوير خرائط العمل، مراجعة تدفق الطلبات، واقتراح خطوات تحسين عملية.",
    relevanceEn: "Supports procedure diagnosis, workflow mapping, review of request flow, and practical improvement recommendations."
  }
];

let language = localStorage.getItem("portfolio-language") || "ar";

const text = (ar, en) => (language === "ar" ? ar : en);
const serviceGrid = document.querySelector("#service-grid");
const caseGrid = document.querySelector("#case-grid");
const certGrid = document.querySelector("#cert-grid");
const serviceSelect = document.querySelector("#request-service");
const serviceFields = document.querySelector("#service-fields");
const dialog = document.querySelector("#detail-dialog");
const dialogBody = document.querySelector("#dialog-body");
const languageButton = document.querySelector("#lang");
const navigation = document.querySelector("#nav");
const menuButton = document.querySelector("#menu");
const cvStatus = document.querySelector("#cv-status");

function trackEvent(name, properties = {}) {
  if (typeof window.va === "function") {
    window.va("event", { name, data: properties });
  }
}

function element(tag, content = "", className = "") {
  const item = document.createElement(tag);
  if (content) item.textContent = content;
  if (className) item.className = className;
  return item;
}

function renderServices() {
  serviceGrid.replaceChildren();
  serviceData.forEach((service, index) => {
    const card = element("article", "", "card");
    const number = element("span", String(index + 1).padStart(2, "0"), "number");
    const title = element("h3", text(service.ar, service.en));
    const summary = element("p", text(service.summaryAr, service.summaryEn));
    const button = element("button", text("التفاصيل وطلب الخدمة ↗", "Details & request ↗"));
    button.type = "button";
    button.addEventListener("click", () => showService(service));
    card.append(number, title, summary, button);
    serviceGrid.append(card);
  });
}

function renderCases() {
  caseGrid.replaceChildren();
  caseData.forEach((item, index) => {
    const card = element("article", "", "card");
    const number = element("span", String(index + 1).padStart(2, "0"), "number");
    const title = element("h3", text(item.ar, item.en));
    const summary = element("p", text(item.summaryAr, item.summaryEn));
    const button = element("button", text("عرض تفاصيل الحالة ↗", "View case details ↗"));
    button.type = "button";
    button.addEventListener("click", () => showCase(item));
    card.append(number, title, summary, button);
    caseGrid.append(card);
  });
}

function renderCertifications() {
  certGrid.replaceChildren();
  certificationData.forEach((certification) => {
    const card = element("article", "", "card cert-card");
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", text(`عرض تفاصيل شهادة ${certification.shortName}`, `View ${certification.shortName} certification details`));
    const code = element("span", certification.shortName, "number");
    const title = element("h3", text(certification.nameAr, certification.nameEn));
    const provider = element("p", certification.provider, "cert-provider");
    const button = element("button", text("عرض التفاصيل ↗", "View details ↗"));
    button.type = "button";
    const open = () => showCertification(certification);
    button.addEventListener("click", open);
    card.addEventListener("click", (event) => {
      if (event.target !== button) open();
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
    card.append(code, title, provider, button);
    certGrid.append(card);
  });
}

function showService(service) {
  dialogBody.replaceChildren();
  const title = element("h2", text(service.ar, service.en));
  title.id = "detail-title";
  const description = element("p", text(service.detailAr, service.detailEn));
  const requestButton = element("button", text("اطلب هذه الخدمة", "Request this service"), "btn gold dialog-action");
  requestButton.type = "button";
  requestButton.addEventListener("click", () => {
    trackEvent("Service Request Clicked", { service_id: service.id });
    dialog.close();
    serviceSelect.value = service.id;
    renderServiceFields();
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  dialogBody.append(title, description, requestButton);
  trackEvent("Service Details Opened", { service_id: service.id });
  dialog.showModal();
}

function createCaseBlock(titleAr, titleEn, contentAr, contentEn) {
  const section = document.createElement("section");
  section.className = "case-detail-block";
  section.append(
    element("h3", text(titleAr, titleEn)),
    element("p", text(contentAr, contentEn))
  );
  return section;
}

function createCaseList(titleAr, titleEn, valuesAr, valuesEn) {
  const section = document.createElement("section");
  section.className = "case-detail-block";
  const list = document.createElement("ul");
  list.className = "case-detail-list";
  (language === "ar" ? valuesAr : valuesEn).forEach((value) => list.append(element("li", value)));
  section.append(element("h3", text(titleAr, titleEn)), list);
  return section;
}

function showCase(item) {
  dialogBody.replaceChildren();
  const title = element("h2", text(item.ar, item.en));
  title.id = "detail-title";
  const privacy = element(
    "p",
    text(
      "تُعرض هذه الحالة بصياغة عامة، مع الحفاظ على سرية بيانات الجهات والأطراف ذات العلاقة.",
      "This case is presented in general terms to protect the confidentiality of organizations and related stakeholders."
    ),
    "privacy"
  );
  dialogBody.append(
    title,
    createCaseBlock("لمحة سريعة", "Quick Overview", item.overviewAr, item.overviewEn),
    createCaseBlock("الوضع السابق", "Previous Situation", item.previousAr, item.previousEn),
    createCaseBlock("التحدي", "Challenge", item.challengeAr, item.challengeEn),
    createCaseBlock("الدور", "Role", item.roleAr, item.roleEn),
    createCaseBlock("النهج", "Approach", item.approachAr, item.approachEn),
    createCaseList("المخرجات", "Outputs", item.outputsAr, item.outputsEn),
    createCaseBlock("الأثر المتوقع", "Expected Impact", item.impactAr, item.impactEn),
    privacy
  );
  trackEvent("Case Study Opened", { case_id: item.id });
  dialog.showModal();
}

function showCertification(certification) {
  dialogBody.replaceChildren();
  const title = element("h2", certification.shortName);
  title.id = "detail-title";
  const name = element("p", text(certification.nameAr, certification.nameEn));
  const provider = element("p", `${text("الجهة: ", "Provider: ")}${certification.provider}`);
  const descriptionSection = createCaseBlock("عن الشهادة", "About the Certification", certification.descriptionAr, certification.descriptionEn);
  const relevanceSection = createCaseBlock("علاقتها بالخدمات", "How It Supports the Services", certification.relevanceAr, certification.relevanceEn);
  const pdfLink = document.createElement("a");
  pdfLink.className = "btn gold dialog-action";
  pdfLink.href = certification.file;
  pdfLink.target = "_blank";
  pdfLink.rel = "noopener";
  pdfLink.textContent = text("عرض الشهادة الأصلية PDF ↗", "View Original Certificate PDF ↗");
  pdfLink.addEventListener("click", () => trackEvent("Certification PDF Opened", { certification_id: certification.id }));
  dialogBody.append(title, name, provider, descriptionSection, relevanceSection, pdfLink);
  trackEvent("Certification Opened", { certification_id: certification.id });
  dialog.showModal();
}

function renderServiceOptions() {
  const currentValue = serviceSelect.value;
  serviceSelect.replaceChildren();
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = text("اختر الخدمة", "Select a service");
  serviceSelect.append(placeholder);
  serviceData.forEach((service) => {
    const option = document.createElement("option");
    option.value = service.id;
    option.textContent = text(service.ar, service.en);
    serviceSelect.append(option);
  });
  serviceSelect.value = currentValue || "";
  renderServiceFields();
}

function renderServiceFields() {
  const previousValues = Array.from(serviceFields.querySelectorAll("input")).map((input) => input.value);
  serviceFields.replaceChildren();
  const selected = serviceData.find((service) => service.id === serviceSelect.value);
  if (!selected) return;
  selected.questions.forEach(([ar, en], index) => {
    const label = document.createElement("label");
    label.textContent = `${text(ar, en)} *`;
    const input = document.createElement("input");
    input.name = `service_detail_${index + 1}`;
    input.required = true;
    input.maxLength = 400;
    input.value = previousValues[index] || "";
    label.append(input);
    serviceFields.append(label);
  });
  if (selected.id === "contracts") {
    serviceFields.append(
      element(
        "p",
        text(
          "الخدمة تنظيمية وتشغيلية، ولا تمثل استشارة قانونية أو بيئية مرخصة.",
          "This is operational and administrative support, not licensed legal or environmental advice."
        ),
        "privacy"
      )
    );
  }
}

function updateStaticText() {
  document.querySelectorAll("[data-ar][data-en]").forEach((item) => {
    item.textContent = item.dataset[language];
  });
  document.querySelectorAll("[data-placeholder-ar][data-placeholder-en]").forEach((item) => {
    item.placeholder = item.dataset[`placeholder${language === "ar" ? "Ar" : "En"}`];
  });
  document.querySelectorAll("[data-alt-ar][data-alt-en]").forEach((item) => {
    item.alt = item.dataset[`alt${language === "ar" ? "Ar" : "En"}`];
  });
  document.querySelectorAll("[data-label-ar][data-label-en]").forEach((item) => {
    item.setAttribute("aria-label", item.dataset[`label${language === "ar" ? "Ar" : "En"}`]);
  });
}

function setLanguage(nextLanguage) {
  language = nextLanguage;
  localStorage.setItem("portfolio-language", language);
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  updateStaticText();
  languageButton.textContent = language === "ar" ? "English" : "العربية";
  languageButton.setAttribute("aria-label", language === "ar" ? "Switch language" : "تبديل اللغة");
  document.title = text(
    "أحمد محمد المطيري | تحسين العمليات وسلاسل الإمداد والرقمنة الإدارية",
    "Ahmad Almutairi | Operations Improvement, Supply Chain & Administrative Digitization"
  );
  const description = document.querySelector("meta[name='description']");
  description.content = description.dataset[`description${language === "ar" ? "Ar" : "En"}`];
  renderServices();
  renderCases();
  renderCertifications();
  renderServiceOptions();
  renderSupplierInputs();
}

languageButton.addEventListener("click", () => setLanguage(language === "ar" ? "en" : "ar"));
serviceSelect.addEventListener("change", renderServiceFields);
document.querySelector("#dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
menuButton.addEventListener("click", () => {
  const open = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
document.querySelector("#year").textContent = new Date().getFullYear();

const cvFile = "ahmad-almtere-cv.pdf";
document.querySelector("#cv-view").addEventListener("click", () => trackEvent("CV Viewed"));
document.querySelector("#cv-download").addEventListener("click", () => trackEvent("CV Downloaded"));
document.querySelector("#cv-share").addEventListener("click", async () => {
  const cvUrl = new URL(cvFile, window.location.href).href;
  const shareData = {
    title: "Ahmad Almutairi CV",
    text: text("السيرة الذاتية لأحمد المطيري", "Ahmad Almutairi's CV"),
    url: cvUrl
  };
  try {
    if (navigator.share) {
      await navigator.share(shareData);
      cvStatus.textContent = text("تمت مشاركة رابط السيرة الذاتية.", "The CV link was shared.");
    } else if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(cvUrl);
      cvStatus.textContent = text("تم نسخ رابط السيرة الذاتية.", "The CV link was copied.");
    } else {
      const temporaryInput = document.createElement("textarea");
      temporaryInput.value = cvUrl;
      temporaryInput.setAttribute("readonly", "");
      temporaryInput.style.position = "fixed";
      temporaryInput.style.opacity = "0";
      document.body.append(temporaryInput);
      temporaryInput.select();
      document.execCommand("copy");
      temporaryInput.remove();
      cvStatus.textContent = text("تم نسخ رابط السيرة الذاتية.", "The CV link was copied.");
    }
    trackEvent("CV Shared");
  } catch (error) {
    if (error.name !== "AbortError") {
      cvStatus.textContent = text("تعذر مشاركة الرابط الآن. يمكنك فتح السيرة ونسخ الرابط.", "The link could not be shared now. You can open the CV and copy its link.");
    }
  }
});

const supplierCriteria = [
  { id: "quality", weight: 25, ar: "الجودة", en: "Quality", hintAr: "مدى مطابقة المنتجات أو الخدمات للمواصفات المتفق عليها.", hintEn: "How well products or services match agreed specifications." },
  { id: "delivery", weight: 25, ar: "الالتزام بالتسليم", en: "Delivery reliability", hintAr: "الالتزام بالموعد والكمية ودقة التسليم.", hintEn: "Reliability of timing, quantity, and delivery accuracy." },
  { id: "price", weight: 20, ar: "السعر والقيمة", en: "Price and value", hintAr: "مناسبة السعر مقارنة بالقيمة والجودة والسوق.", hintEn: "Price suitability relative to value, quality, and market." },
  { id: "communication", weight: 15, ar: "الاستجابة والتواصل", en: "Communication", hintAr: "سرعة الرد ووضوح التواصل وحل الاستفسارات.", hintEn: "Response speed, communication clarity, and handling inquiries." },
  { id: "payment", weight: 10, ar: "شروط الدفع", en: "Payment terms", hintAr: "وضوح ومرونة شروط الدفع والفوترة.", hintEn: "Clarity and flexibility of payment and invoicing terms." },
  { id: "resolution", weight: 5, ar: "معالجة المشاكل", en: "Issue resolution", hintAr: "طريقة التعامل مع النقص أو الخطأ أو التأخير.", hintEn: "How shortages, errors, or delays are handled." }
];

const supplierInputs = document.querySelector("#supplier-inputs");

function renderSupplierInputs() {
  const savedValues = Object.fromEntries(Array.from(supplierInputs.querySelectorAll("select")).map((select) => [select.name, select.value]));
  supplierInputs.replaceChildren();
  supplierCriteria.forEach((criterion) => {
    const label = document.createElement("label");
    const title = element("span", `${text(criterion.ar, criterion.en)} (${criterion.weight}%)`);
    const hint = element("small", text(criterion.hintAr, criterion.hintEn), "field-hint");
    const select = document.createElement("select");
    select.name = criterion.id;
    select.required = true;
    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = text("اختر التقييم", "Choose a rating");
    placeholder.disabled = true;
    select.append(placeholder);
    for (let score = 1; score <= 5; score += 1) {
      const option = document.createElement("option");
      option.value = String(score);
      option.textContent = text(
        `${score} — ${score === 1 ? "ضعيف" : score === 2 ? "دون المتوقع" : score === 3 ? "مقبول" : score === 4 ? "جيد جدًا" : "ممتاز"}`,
        `${score} — ${score === 1 ? "Poor" : score === 2 ? "Below expectations" : score === 3 ? "Acceptable" : score === 4 ? "Very good" : "Excellent"}`
      );
      select.append(option);
    }
    select.value = savedValues[criterion.id] || "";
    label.append(title, hint, select);
    supplierInputs.append(label);
  });
}

function supplierRecommendation(score) {
  if (score >= 85) return {
    rating: text("مورد متميز", "Excellent supplier"),
    recommendation: text("يوصى بالاستمرار مع مراجعة دورية للأداء وتوثيق نقاط القوة.", "Continue the relationship with periodic performance review and documentation of strengths.")
  };
  if (score >= 70) return {
    rating: text("مورد جيد", "Good supplier"),
    recommendation: text("يوصى بالاستمرار مع تحديد نقطة أو نقطتين واضحتين للتحسين في المراجعة القادمة.", "Continue the relationship while defining one or two clear improvement points for the next review.")
  };
  if (score >= 50) return {
    rating: text("يحتاج خطة تحسين", "Needs improvement plan"),
    recommendation: text("يوصى بوضع خطة تحسين محددة بمسؤول وتاريخ مراجعة قبل الاعتماد على المورد بصورة أكبر.", "Create a defined improvement plan with ownership and a review date before increasing reliance on this supplier.")
  };
  return {
    rating: text("عالي المخاطر", "High risk"),
    recommendation: text("يوصى بمراجعة العلاقة التعاقدية والبحث عن مورد بديل أو مورد احتياطي.", "Review the commercial relationship and consider an alternative or backup supplier.")
  };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function openPrintableReport(title, subtitle, sections) {
  const printWindow = window.open("", "_blank");
  if (!printWindow) return;
  const reportDate = new Intl.DateTimeFormat(language === "ar" ? "ar-SA" : "en-GB", { dateStyle: "long" }).format(new Date());
  const sectionHtml = sections.map((section) => `
    <section class="report-section">
      <h2>${escapeHtml(section.title)}</h2>
      ${section.content}
    </section>
  `).join("");
  printWindow.document.write(`
    <!doctype html>
    <html lang="${language}" dir="${language === "ar" ? "rtl" : "ltr"}">
      <head>
        <meta charset="utf-8">
        <title>${escapeHtml(title)}</title>
        <style>
          @page { size: A4; margin: 18mm; }
          * { box-sizing: border-box; }
          body { margin: 0; color: #101e32; background: #ffffff; font-family: Arial, Tahoma, sans-serif; line-height: 1.8; }
          .report-header { padding-bottom: 18px; border-bottom: 3px solid #d5ae69; }
          .mark { color: #d5ae69; font-size: 24px; font-weight: 800; letter-spacing: -1px; }
          h1 { margin: 16px 0 5px; font-size: 27px; }
          .subtitle, .date { margin: 0; color: #576477; font-size: 14px; }
          .report-section { margin-top: 24px; page-break-inside: avoid; }
          h2 { margin: 0 0 10px; color: #101e32; font-size: 17px; }
          p { margin: 0; }
          table { width: 100%; border-collapse: collapse; margin-top: 10px; }
          th, td { padding: 10px; border: 1px solid #dfe4e9; text-align: start; font-size: 13px; }
          th { color: #ffffff; background: #101e32; }
          .score { display: inline-block; padding: 4px 10px; color: #101e32; border-radius: 20px; background: #f1dfbb; font-weight: 700; }
          .footer { margin-top: 34px; padding-top: 12px; color: #576477; border-top: 1px solid #dfe4e9; font-size: 11px; }
        </style>
      </head>
      <body>
        <header class="report-header">
          <div class="mark">AM.</div>
          <h1>${escapeHtml(title)}</h1>
          <p class="subtitle">${escapeHtml(subtitle)}</p>
          <p class="date">${escapeHtml(text("تاريخ الإنشاء: ", "Created: "))}${escapeHtml(reportDate)}</p>
        </header>
        ${sectionHtml}
        <footer class="footer">${escapeHtml(text("تقرير إرشادي أُنشئ من موقع أحمد المطيري.", "Guidance report generated from Ahmad Almtere's website."))}</footer>
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.focus();
  setTimeout(() => printWindow.print(), 350);
}

function showOutput(output, contentNode, reportCallback) {
  output.replaceChildren();
  output.append(contentNode);
  const printButton = element("button", text("طباعة / حفظ PDF", "Print / Save PDF"), "btn navy");
  printButton.type = "button";
  printButton.addEventListener("click", reportCallback);
  output.append(printButton);
}

document.querySelector("#supplier-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const formData = new FormData(form);
  const supplierName = String(formData.get("supplier") || "").trim();
  const rows = supplierCriteria.map((criterion) => ({ ...criterion, score: Number(formData.get(criterion.id)) }));
  if (!supplierName || rows.some((item) => !Number.isFinite(item.score) || item.score < 1 || item.score > 5)) return;
  const finalScore = Math.round(rows.reduce((total, item) => total + (item.score * item.weight) / 5, 0));
  const result = supplierRecommendation(finalScore);
  const output = document.querySelector("#supplier-output");
  const resultBox = document.createElement("div");
  resultBox.className = "evaluation-result";
  const bar = document.createElement("div");
  bar.className = "scorebar";
  const fill = document.createElement("i");
  fill.style.width = `${finalScore}%`;
  bar.append(fill);
  resultBox.append(
    element("h4", text(`نتيجة تقييم: ${supplierName}`, `Evaluation result: ${supplierName}`)),
    element("p", text(`النتيجة النهائية: ${finalScore}/100`, `Final score: ${finalScore}/100`)),
    element("p", text(`التصنيف: ${result.rating}`, `Rating: ${result.rating}`)),
    element("p", text(`التوصية: ${result.recommendation}`, `Recommendation: ${result.recommendation}`)),
    bar
  );
  showOutput(output, resultBox, () => {
    const tableRows = rows.map((item) => `
      <tr>
        <td>${escapeHtml(text(item.ar, item.en))}</td>
        <td>${item.weight}%</td>
        <td>${item.score}/5</td>
      </tr>
    `).join("");
    openPrintableReport(
      text("تقرير تقييم مورد", "Supplier Evaluation Report"),
      supplierName,
      [
        {
          title: text("النتيجة النهائية", "Final Result"),
          content: `<p><span class="score">${escapeHtml(`${finalScore}/100 — ${result.rating}`)}</span></p><p style="margin-top:12px">${escapeHtml(result.recommendation)}</p>`
        },
        {
          title: text("تفاصيل التقييم", "Evaluation Details"),
          content: `<table><thead><tr><th>${escapeHtml(text("المعيار", "Criterion"))}</th><th>${escapeHtml(text("الوزن", "Weight"))}</th><th>${escapeHtml(text("التقييم", "Rating"))}</th></tr></thead><tbody>${tableRows}</tbody></table>`
        }
      ]
    );
  });
  trackEvent("Supplier Score Calculated");
});

const diagnosticOptions = {
  problem: {
    delay: ["تأخر في الإنجاز", "Delay in completion"],
    duplication: ["تكرار في العمل", "Repeated work"],
    roles: ["عدم وضوح المسؤوليات", "Unclear responsibilities"],
    tracking: ["ضعف المتابعة أو تشتت الطلبات", "Weak follow-up or scattered requests"],
    paper: ["اعتماد كبير على العمل الورقي", "Heavy reliance on paperwork"],
    other: ["تحدٍ آخر", "Another challenge"]
  },
  location: {
    intake: ["عند استقبال الطلب", "At request intake"],
    approval: ["عند الاعتماد", "At approval"],
    handoff: ["بين الإدارات أو الأطراف", "Between teams or stakeholders"],
    supplier: ["مع المورد أو الطرف الخارجي", "With a supplier or external party"],
    closure: ["عند الإغلاق والمتابعة", "At closure and follow-up"]
  },
  impact: {
    service: ["تأخر الخدمة", "Service delay"],
    cost: ["ارتفاع التكلفة", "Higher cost"],
    complaints: ["زيادة الشكاوى", "More complaints"],
    errors: ["أخطاء أو فقدان معلومات", "Errors or lost information"],
    workload: ["ضغط إضافي على الفريق", "Additional team workload"]
  }
};

function optionText(group, value) {
  const option = diagnosticOptions[group][value];
  return option ? text(option[0], option[1]) : "";
}

document.querySelector("#map-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const formData = new FormData(form);
  const process = String(formData.get("process") || "").trim();
  const problem = optionText("problem", formData.get("problem"));
  const location = optionText("location", formData.get("location"));
  const impact = optionText("impact", formData.get("impact"));
  const priority = formData.get("priority");
  const priorityText = priority === "high" ? text("عالية", "High") : priority === "medium" ? text("متوسطة", "Medium") : text("منخفضة", "Low");
  const diagnostic = text(
    `يظهر أن إجراء «${process}» قد يتأثر بـ«${problem}»، ويبدو أن نقطة التعثر تقع «${location}». الأثر المتوقع هو «${impact}».`,
    `The "${process}" process appears to be affected by "${problem}", with the bottleneck likely occurring "${location}". The expected impact is "${impact}".`
  );
  const recommendation = text(
    "الخطوة المقترحة: توثيق مراحل الإجراء، تحديد مسؤول لكل مرحلة، وتوحيد سجل لحالة الطلب وتاريخ آخر تحديث قبل البدء في أي أتمتة أو تغيير تقني.",
    "Recommended next step: document the workflow stages, assign an owner to each stage, and standardize a request-status log with the latest update date before introducing automation or technical change."
  );
  const output = document.querySelector("#map-output");
  const resultBox = document.createElement("div");
  resultBox.className = "diagnostic-result";
  resultBox.append(
    element("h4", text("التشخيص الأولي", "Initial diagnosis")),
    element("p", diagnostic),
    element("h4", text("الخطوة المقترحة", "Recommended step")),
    element("p", recommendation),
    element("p", text(`الأولوية: ${priorityText}`, `Priority: ${priorityText}`), "priority-result")
  );
  showOutput(output, resultBox, () => {
    openPrintableReport(
      text("ملخص تشخيص تحسين إجراء", "Process Improvement Diagnostic"),
      process,
      [
        { title: text("التشخيص الأولي", "Initial Diagnosis"), content: `<p>${escapeHtml(diagnostic)}</p>` },
        { title: text("الخطوة المقترحة", "Recommended Step"), content: `<p>${escapeHtml(recommendation)}</p>` },
        { title: text("مستوى الأولوية", "Priority"), content: `<p><span class="score">${escapeHtml(priorityText)}</span></p>` }
      ]
    );
  });
  trackEvent("Process Diagnostic Created");
});

const requestForm = document.querySelector("#request-form");
const formStatus = document.querySelector("#form-status");
const submitButton = document.querySelector("#submit-request");

requestForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!requestForm.reportValidity()) return;
  submitButton.disabled = true;
  formStatus.className = "";
  formStatus.textContent = text("جارٍ إرسال الطلب...", "Sending your request...");
  const formData = new FormData(requestForm);
  const selectedService = serviceData.find((service) => service.id === serviceSelect.value);
  formData.set("service", selectedService ? text(selectedService.ar, selectedService.en) : "");
  formData.set("_subject", `Portfolio service request - ${selectedService ? selectedService.en : "General"}`);
  try {
    const response = await fetch(requestForm.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    });
    if (!response.ok) throw new Error("Form submission failed");
    requestForm.reset();
    renderServiceFields();
    formStatus.className = "success";
    formStatus.textContent = text("تم إرسال طلبك بنجاح. شكرًا لتواصلك.", "Your request was submitted successfully. Thank you.");
    trackEvent("Contact Form Submitted", { service_id: selectedService ? selectedService.id : "general" });
  } catch {
    formStatus.className = "error";
    formStatus.replaceChildren(
      document.createTextNode(text("تعذر إرسال الطلب. حاول مرة أخرى أو تواصل عبر البريد الإلكتروني: ", "Unable to send the request. Please try again or email: ")),
      Object.assign(document.createElement("a"), { href: "mailto:almtereahmad@gmail.com", textContent: "almtereahmad@gmail.com" })
    );
  } finally {
    submitButton.disabled = false;
  }
});

renderSupplierInputs();
setLanguage(language);
