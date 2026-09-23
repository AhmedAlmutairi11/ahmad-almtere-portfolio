const serviceData = [
  {
    id: "procedures",
    ar: "تحسين الإجراءات",
    en: "Procedure Improvement",
    summaryAr: "مراجعة الإجراء الحالي، تحديد الأدوار ونقاط التعثر، وتصميم خطوات أوضح قابلة للتطبيق والمتابعة.",
    summaryEn: "Reviewing a current procedure, clarifying roles and bottlenecks, and designing clearer, practical steps.",
    detailAr: "نراجع الخطوات الحالية والمسؤوليات ونقاط التأخير أو التكرار، ثم نرتب الإجراء في مسار واضح مع نموذج متابعة مناسب لطبيعة العمل.",
    detailEn: "We review current steps, responsibilities, delays, and duplication, then organize the procedure into a clear workflow with a suitable follow-up format.",
    questions: [
      ["اسم الإجراء أو العملية", "Process or procedure name"],
      ["المشكلة الحالية أو نقطة التعثر", "Current problem or bottleneck"]
    ]
  },
  {
    id: "operations",
    ar: "التنظيم التشغيلي",
    en: "Operational Organization",
    summaryAr: "تنظيم تدفق العمل والطلبات بين الإدارات، وتوضيح المسؤوليات وحالات المتابعة وتقليل التكرار والتأخير.",
    summaryEn: "Organizing workflows and requests across departments, clarifying ownership and follow-up, and reducing delay.",
    detailAr: "نرسم رحلة العمل أو الطلب، نحدد الأطراف والخطوات وحالات المتابعة، ثم نقترح تنظيمًا عمليًا يساعد على وضوح المسؤوليات وسرعة الإنجاز.",
    detailEn: "We map the request or workflow journey, identify stakeholders, steps, and statuses, then propose a practical structure for clarity and speed.",
    questions: [
      ["العملية أو المجال المراد تنظيمه", "Process or area to organize"],
      ["التحدي التشغيلي الحالي", "Current operational challenge"]
    ]
  },
  {
    id: "contracts",
    ar: "العقود والمتابعة",
    en: "Contracts & Follow-up",
    summaryAr: "تنظيم نطاق الخدمة، المتطلبات التشغيلية، سجلات المتابعة، وحالات العقود والموردين بطريقة أوضح.",
    summaryEn: "Organizing service scope, operational requirements, follow-up records, and contract or supplier status.",
    detailAr: "ندعم تنظيم نطاق الخدمة والمتطلبات التشغيلية ووسائل المتابعة المرتبطة بالعقود أو الموردين، دون تقديم استشارة قانونية أو بيئية مرخصة.",
    detailEn: "We support the organization of service scope, operational requirements, and follow-up methods for contracts or suppliers, without providing licensed legal or environmental advice.",
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
    detailAr: "نحلل خطوات العمل اليدوية والبيانات المطلوبة والمسؤوليات وحالات الطلب، ثم نقترح نموذجًا أو مسار عمل رقميًا مبسطًا يناسب الاستخدام اليومي.",
    detailEn: "We analyze manual work steps, required data, ownership, and request statuses, then propose a simple digital workflow suited to daily use.",
    questions: [
      ["العملية اليدوية الحالية", "Current manual process"],
      ["ما الذي تريد تحويله إلى متابعة رقمية؟", "What do you want to digitize?"]
    ]
  }
];

const caseData = [
  {
    ar: "تحسين منظومة إدارة المخلفات الصناعية وخفض التكلفة",
    en: "Improving Industrial Waste Management and Reducing Cost",
    summaryAr: "تنظيم متطلبات الخدمة والتصنيفات التشغيلية وربطها بنطاق العمل والتكلفة والمتابعة.",
    summaryEn: "Organizing service requirements and operational classifications while connecting scope, cost, and follow-up.",
    challengeAr: "الحاجة إلى تنظيم متطلبات خدمة إدارة المخلفات الصناعية، ورفع وضوح التصنيفات التشغيلية وعلاقتها بنطاق العمل والتكلفة.",
    challengeEn: "A need to organize industrial waste-management service requirements and clarify operational classifications, service scope, and cost.",
    roleAr: "مراجعة العناصر التشغيلية، ترتيب المتطلبات، وتحسين وضوح الربط بين نطاق الخدمة والمتابعة والتكلفة.",
    roleEn: "Reviewing operational elements, organizing requirements, and improving the connection between service scope, follow-up, and cost.",
    approachAr: "تحديد البيانات الأساسية، مراجعة نطاق الخدمة، تنظيم التصنيفات، وبناء تصور متابعة يساعد على وضوح الاحتياج والقرارات التشغيلية.",
    approachEn: "Identifying essential data, reviewing service scope, organizing classifications, and building a follow-up approach that supports clearer operational decisions.",
    impactAr: "تصور تشغيلي أوضح يدعم مراجعة نطاق العمل والتكلفة وتحسين متابعة الخدمة.",
    impactEn: "A clearer operational model supporting service-scope and cost review, with better service follow-up."
  },
  {
    ar: "تحسين تدفق قطع الغيار لتسريع إصلاح مركبات الحوادث",
    en: "Improving Spare-Parts Flow to Accelerate Accident-Vehicle Repairs",
    summaryAr: "توضيح رحلة طلب وتوريد قطع الغيار وتنظيم التنسيق والمتابعة بين الأطراف ذات العلاقة.",
    summaryEn: "Clarifying the spare-parts request and supply journey while organizing coordination and follow-up among stakeholders.",
    challengeAr: "تأخر أو غموض في مراحل طلب وتوريد قطع الغيار، مع حاجة إلى رفع وضوح الحالة بين الأطراف المشاركة.",
    challengeEn: "Delays or ambiguity across spare-parts request and supply stages, with a need for clearer status visibility among stakeholders.",
    roleAr: "تحليل رحلة الطلب، تحديد نقاط التعثر والتنسيق، وتنظيم حالات المتابعة والمسؤوليات.",
    roleEn: "Analyzing the request journey, identifying bottlenecks and coordination needs, and organizing follow-up statuses and ownership.",
    approachAr: "تحديد مراحل الطلب من الاحتياج إلى التوريد، وتوضيح نقطة تسليم المسؤولية بين الأطراف، وإنشاء تصور لحالة طلب قابلة للمتابعة.",
    approachEn: "Defining request stages from need to supply, clarifying handoffs between stakeholders, and creating a trackable request-status concept.",
    impactAr: "مسار أكثر تنظيمًا وقابلية للقياس يساعد على تقليل التأخير وتحسين سرعة متابعة قطع الغيار.",
    impactEn: "A more organized, measurable workflow that supports reduced delays and faster spare-parts follow-up."
  },
  {
    ar: "تطوير إدارة الموارد البشرية من الأرشيف الورقي إلى نظام رقمي",
    en: "Developing HR Administration from Paper Archives to a Digital System",
    summaryAr: "تحويل الملفات والمتابعة اليدوية إلى بنية رقمية أوضح للبيانات والطلبات والحالات والمسؤوليات.",
    summaryEn: "Transforming paper files and manual follow-up into a clearer digital structure for data, requests, statuses, and ownership.",
    challengeAr: "الاعتماد على الأرشيف الورقي والملفات المتفرقة، مما يصعب الوصول إلى المعلومات ومتابعة الطلبات والحالات.",
    challengeEn: "Reliance on paper archives and scattered files, making information retrieval and request tracking difficult.",
    roleAr: "تحليل الاحتياج إلى البيانات والسجلات، وتحديد الحقول الأساسية ومسارات المتابعة المناسبة للرقمنة.",
    roleEn: "Analyzing data and record needs, identifying core fields, and defining appropriate digital follow-up workflows.",
    approachAr: "حصر أنواع الملفات والبيانات، تحديد صلاحيات ومسؤوليات التحديث، ثم تصميم تصور لنموذج موحد وسجل رقمي لحالة الطلبات والملفات.",
    approachEn: "Inventorying file and data types, defining update ownership, then designing a unified form and digital register for requests and records.",
    impactAr: "تصور رقمي يساعد على تنظيم السجلات، سرعة استرجاع البيانات، ووضوح حالة الطلبات والمتابعة.",
    impactEn: "A digital concept that supports organized records, faster information retrieval, and clearer request and follow-up status."
  }
];

let language = localStorage.getItem("portfolio-language") || "ar";

const text = (ar, en) => (language === "ar" ? ar : en);
const serviceGrid = document.querySelector("#service-grid");
const caseGrid = document.querySelector("#case-grid");
const serviceSelect = document.querySelector("#request-service");
const serviceFields = document.querySelector("#service-fields");
const dialog = document.querySelector("#detail-dialog");
const dialogBody = document.querySelector("#dialog-body");
const languageButton = document.querySelector("#lang");
const navigation = document.querySelector("#nav");
const menuButton = document.querySelector("#menu");

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

function showService(service) {
  dialogBody.replaceChildren();
  const title = element("h2", text(service.ar, service.en));
  title.id = "detail-title";
  const description = element("p", text(service.detailAr, service.detailEn));
  const requestButton = element("button", text("اطلب هذه الخدمة", "Request this service"), "btn gold");
  requestButton.type = "button";
  requestButton.addEventListener("click", () => {
    dialog.close();
    serviceSelect.value = service.id;
    renderServiceFields();
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth", block: "start" });
  });
  dialogBody.append(title, description, requestButton);
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
    createCaseBlock("التحدي", "Challenge", item.challengeAr, item.challengeEn),
    createCaseBlock("الدور", "Role", item.roleAr, item.roleEn),
    createCaseBlock("النهج", "Approach", item.approachAr, item.approachEn),
    createCaseBlock("الأثر", "Impact", item.impactAr, item.impactEn),
    privacy
  );
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

function setLanguage(nextLanguage) {
  language = nextLanguage;
  localStorage.setItem("portfolio-language", language);
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-ar][data-en]").forEach((item) => {
    item.textContent = item.dataset[language];
  });
  document.querySelectorAll("option[data-ar][data-en]").forEach((item) => {
    item.textContent = item.dataset[language];
  });
  languageButton.textContent = language === "ar" ? "English" : "العربية";
  document.title = text(
    "أحمد المطيري | تطوير تنظيمي وتحسين عمليات",
    "Ahmad Almtere | Organizational Development & Operations"
  );
  renderServices();
  renderCases();
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
    placeholder.selected = true;
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
  if (!supplierName) return;
  const rows = supplierCriteria.map((criterion) => ({ ...criterion, score: Number(formData.get(criterion.id)) }));
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
          content: `<p><span class="score">${escapeHtml(text(`${finalScore}/100 — ${result.rating}`, `${finalScore}/100 — ${result.rating}`))}</span></p><p style="margin-top:12px">${escapeHtml(result.recommendation)}</p>`
        },
        {
          title: text("تفاصيل التقييم", "Evaluation Details"),
          content: `<table><thead><tr><th>${escapeHtml(text("المعيار", "Criterion"))}</th><th>${escapeHtml(text("الوزن", "Weight"))}</th><th>${escapeHtml(text("التقييم", "Rating"))}</th></tr></thead><tbody>${tableRows}</tbody></table>`
        }
      ]
    );
  });
});

const diagnosticOptions = {
  problem: {
    delay: ["تأخر في الإنجاز", "Delay in completion"],
    duplication: ["تكرار في العمل", "Repeated work"],
    roles: ["عدم وضوح المسؤوليات", "Unclear responsibilities"],
    tracking: ["ضعف المتابعة أو تشتت الطلبات", "Weak follow-up or scattered requests"],
    paper: ["اعتماد كبير على العمل الورقي", "Heavy reliance on paper work"],
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
  } catch {
    formStatus.className = "error";
    formStatus.textContent = text("تعذر إرسال الطلب. حاول مرة أخرى أو تواصل عبر البريد الإلكتروني: almtereahmad@gmail.com", "Unable to send the request. Please try again or email: almtereahmad@gmail.com");
  } finally {
    submitButton.disabled = false;
  }
});

renderSupplierInputs();
setLanguage(language);
