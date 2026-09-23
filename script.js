const serviceData = [
  {
    id: "procedures",
    ar: "تحسين الإجراءات",
    en: "Procedure Improvement",
    summaryAr:
      "مراجعة الإجراء الحالي، تحديد الأدوار ونقاط التعثر، وتصميم خطوات أوضح قابلة للتطبيق والمتابعة.",
    summaryEn:
      "Reviewing a current procedure, clarifying roles and bottlenecks, and designing clearer, practical steps.",
    detailAr:
      "نراجع الخطوات الحالية والمسؤوليات ونقاط التأخير أو التكرار، ثم نرتب الإجراء في مسار واضح مع نموذج متابعة مناسب لطبيعة العمل.",
    detailEn:
      "We review current steps, responsibilities, delays, and duplication, then organize the procedure into a clear workflow with a suitable follow-up format.",
    questions: [
      ["اسم الإجراء أو العملية", "Process or procedure name"],
      ["المشكلة الحالية أو نقطة التعثر", "Current problem or bottleneck"],
      ["النتيجة المطلوبة", "Desired outcome"]
    ]
  },
  {
    id: "operations",
    ar: "التنظيم التشغيلي",
    en: "Operational Organization",
    summaryAr:
      "تنظيم تدفق العمل والطلبات بين الإدارات، وتوضيح المسؤوليات وحالات المتابعة وتقليل التكرار والتأخير.",
    summaryEn:
      "Organizing workflows and requests across departments, clarifying ownership and follow-up, and reducing delay.",
    detailAr:
      "نرسم رحلة العمل أو الطلب، نحدد الأطراف والخطوات وحالات المتابعة، ثم نقترح تنظيمًا عمليًا يساعد على وضوح المسؤوليات وسرعة الإنجاز.",
    detailEn:
      "We map the request or workflow journey, identify stakeholders, steps, and statuses, then propose a practical structure for clarity and speed.",
    questions: [
      ["العملية أو المجال المراد تنظيمه", "Process or area to organize"],
      ["التحدي التشغيلي الحالي", "Current operational challenge"],
      ["الأطراف أو الإدارات المشاركة", "Teams or departments involved"]
    ]
  },
  {
    id: "contracts",
    ar: "العقود والمتابعة",
    en: "Contracts & Follow-up",
    summaryAr:
      "تنظيم نطاق الخدمة، المتطلبات التشغيلية، سجلات المتابعة، وحالات العقود والموردين بطريقة أوضح.",
    summaryEn:
      "Organizing service scope, operational requirements, follow-up records, and contract or supplier status.",
    detailAr:
      "ندعم تنظيم نطاق الخدمة والمتطلبات التشغيلية ووسائل المتابعة المرتبطة بالعقود أو الموردين، دون تقديم استشارة قانونية أو بيئية مرخصة.",
    detailEn:
      "We support the organization of service scope, operational requirements, and follow-up methods for contracts or suppliers, without providing licensed legal or environmental advice.",
    questions: [
      ["نوع العقد أو الخدمة", "Contract or service type"],
      ["المتطلبات التشغيلية المراد تنظيمها", "Operational requirements to organize"],
      ["المخرج المطلوب", "Expected deliverable"]
    ]
  },
  {
    id: "digital",
    ar: "الرقمنة الإدارية",
    en: "Administrative Digitization",
    summaryAr:
      "تحويل المتابعة اليدوية الموزعة إلى نماذج وسجلات ومسارات عمل رقمية مبسطة وواضحة.",
    summaryEn:
      "Transforming scattered manual follow-up into simple, clear digital forms, records, and workflows.",
    detailAr:
      "نحلل خطوات العمل اليدوية، والبيانات المطلوبة، والمسؤوليات وحالات الطلب، ثم نقترح نموذجًا أو مسار عمل رقميًا مبسطًا يناسب الاستخدام اليومي.",
    detailEn:
      "We analyze manual work steps, required data, ownership, and request statuses, then propose a simple digital workflow suited to daily use.",
    questions: [
      ["العملية اليدوية الحالية", "Current manual process"],
      ["الأدوات المستخدمة حاليًا", "Current tools"],
      ["النتيجة المطلوبة من الرقمنة", "Desired digitization outcome"]
    ]
  }
];

const caseData = [
  {
    ar: "تحسين منظومة إدارة المخلفات الصناعية وخفض التكلفة",
    en: "Improving Industrial Waste Management and Reducing Cost",
    summaryAr:
      "تنظيم متطلبات الخدمة والتصنيفات التشغيلية وربطها بنطاق العمل والتكلفة والمتابعة.",
    summaryEn:
      "Organizing service requirements and operational classifications while connecting scope, cost, and follow-up.",
    detailAr:
      "تمحور العمل حول مراجعة متطلبات خدمة إدارة المخلفات الصناعية، وتنظيم التصنيفات والمتطلبات التشغيلية، وربطها بصورة أوضح بنطاق العمل والتكلفة. يعرض المثال منهجية عمل عامة، ولا يتضمن معلومات تخص أي جهة أو عقد.",
    detailEn:
      "The work focused on reviewing industrial waste-management service requirements, organizing operational classifications, and aligning them more clearly with scope and cost. This is a general methodology example and includes no organization- or contract-specific information."
  },
  {
    ar: "تحسين تدفق قطع الغيار لتسريع إصلاح مركبات الحوادث",
    en: "Improving Spare-Parts Flow to Accelerate Accident-Vehicle Repairs",
    summaryAr:
      "توضيح رحلة طلب وتوريد قطع الغيار وتنظيم التنسيق والمتابعة بين الأطراف ذات العلاقة.",
    summaryEn:
      "Clarifying the spare-parts request and supply journey while organizing coordination and follow-up among stakeholders.",
    detailAr:
      "ركزت الحالة على فهم تسلسل طلب قطع الغيار، وتحديد فرص تحسين التنسيق بين الأطراف، ورفع وضوح حالة الطلب والمتابعة. النتيجة المستهدفة هي مسار أكثر تنظيمًا وقابلية للقياس دون كشف أي بيانات تشغيلية سرية.",
    detailEn:
      "The case focused on understanding the spare-parts request sequence, identifying coordination improvements, and making status and follow-up clearer. The target outcome was a more organized, measurable workflow without disclosing confidential operational information."
  },
  {
    ar: "تطوير إدارة الموارد البشرية من الأرشيف الورقي إلى نظام رقمي",
    en: "Developing HR Administration from Paper Archives to a Digital System",
    summaryAr:
      "تحويل الملفات والمتابعة اليدوية إلى بنية رقمية أوضح للبيانات والطلبات والحالات والمسؤوليات.",
    summaryEn:
      "Transforming paper files and manual follow-up into a clearer digital structure for data, requests, statuses, and ownership.",
    detailAr:
      "تناولت الحالة تحليل الاعتماد على الأرشيف الورقي، وتحديد الحقول الأساسية للبيانات، وتصميم تصور مبسط للرقمنة يساعد على تنظيم السجلات واسترجاع المعلومات ومتابعة الطلبات بصورة أسهل.",
    detailEn:
      "The case addressed reliance on paper archives, identified essential data fields, and designed a simple digitization concept to organize records, retrieve information, and follow up on requests more easily."
  }
];

let language = localStorage.getItem("portfolio-language") || "ar";

const getText = (ar, en) => (language === "ar" ? ar : en);

const serviceGrid = document.querySelector("#service-grid");
const caseGrid = document.querySelector("#case-grid");
const serviceSelect = document.querySelector("#request-service");
const serviceFields = document.querySelector("#service-fields");
const dialog = document.querySelector("#detail-dialog");
const dialogBody = document.querySelector("#dialog-body");
const languageButton = document.querySelector("#lang");
const navigation = document.querySelector("#nav");
const menuButton = document.querySelector("#menu");

function createTextElement(tag, text, className = "") {
  const element = document.createElement(tag);
  element.textContent = text;

  if (className) {
    element.className = className;
  }

  return element;
}

function renderServiceCards() {
  serviceGrid.replaceChildren();

  serviceData.forEach((service, index) => {
    const card = document.createElement("article");
    card.className = "card";

    const number = createTextElement(
      "span",
      String(index + 1).padStart(2, "0"),
      "number"
    );

    const title = createTextElement("h3", getText(service.ar, service.en));
    const summary = createTextElement(
      "p",
      getText(service.summaryAr, service.summaryEn)
    );

    const button = createTextElement(
      "button",
      getText("التفاصيل وطلب الخدمة ↗", "Details & request ↗")
    );

    button.type = "button";
    button.addEventListener("click", () => showServiceDetails(service));

    card.append(number, title, summary, button);
    serviceGrid.append(card);
  });
}

function renderCaseCards() {
  caseGrid.replaceChildren();

  caseData.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "card";

    const number = createTextElement(
      "span",
      String(index + 1).padStart(2, "0"),
      "number"
    );

    const title = createTextElement("h3", getText(item.ar, item.en));
    const summary = createTextElement(
      "p",
      getText(item.summaryAr, item.summaryEn)
    );

    const button = createTextElement(
      "button",
      getText("قراءة الحالة ↗", "Read case ↗")
    );

    button.type = "button";
    button.addEventListener("click", () => showCaseDetails(item));

    card.append(number, title, summary, button);
    caseGrid.append(card);
  });
}

function showServiceDetails(service) {
  dialogBody.replaceChildren();

  const title = createTextElement("h2", getText(service.ar, service.en));
  title.id = "detail-title";

  const description = createTextElement(
    "p",
    getText(service.detailAr, service.detailEn)
  );

  const requestButton = createTextElement(
    "button",
    getText("اطلب هذه الخدمة", "Request this service"),
    "btn gold"
  );

  requestButton.type = "button";

  requestButton.addEventListener("click", () => {
    dialog.close();
    serviceSelect.value = service.id;
    renderServiceFields();
    document.querySelector("#contact").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });

  dialogBody.append(title, description, requestButton);
  dialog.showModal();
}

function showCaseDetails(item) {
  dialogBody.replaceChildren();

  const title = createTextElement("h2", getText(item.ar, item.en));
  title.id = "detail-title";

  const description = createTextElement(
    "p",
    getText(item.detailAr, item.detailEn)
  );

  const confidentiality = createTextElement(
    "p",
    getText(
      "يعرض هذا المثال بصورة عامة مع الحفاظ على سرية جهات العمل والأطراف ذات العلاقة.",
      "This example is presented in general terms to protect the confidentiality of employers and related stakeholders."
    ),
    "privacy"
  );

  dialogBody.append(title, description, confidentiality);
  dialog.showModal();
}

function renderServiceOptions() {
  const selectedService = serviceSelect.value;

  serviceSelect.replaceChildren();

  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.textContent = getText("اختر الخدمة", "Select a service");
  serviceSelect.append(placeholder);

  serviceData.forEach((service) => {
    const option = document.createElement("option");
    option.value = service.id;
    option.textContent = getText(service.ar, service.en);
    serviceSelect.append(option);
  });

  serviceSelect.value = selectedService || "";
  renderServiceFields();
}

function renderServiceFields() {
  serviceFields.replaceChildren();

  const selectedService = serviceData.find(
    (service) => service.id === serviceSelect.value
  );

  if (!selectedService) {
    return;
  }

  selectedService.questions.forEach(([ar, en], index) => {
    const label = document.createElement("label");
    label.textContent = `${getText(ar, en)} *`;

    const input = document.createElement("input");
    input.name = `service_detail_${index + 1}`;
    input.required = true;
    input.maxLength = 400;

    label.append(input);
    serviceFields.append(label);
  });

  if (selectedService.id === "contracts") {
    const note = createTextElement(
      "p",
      getText(
        "الخدمة تنظيمية وتشغيلية، ولا تمثل استشارة قانونية أو بيئية مرخصة.",
        "This is operational and administrative support, not licensed legal or environmental advice."
      ),
      "privacy"
    );

    serviceFields.append(note);
  }
}

function setLanguage(nextLanguage) {
  language = nextLanguage;
  localStorage.setItem("portfolio-language", language);

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-ar][data-en]").forEach((element) => {
    element.textContent = element.dataset[language];
  });

  document.querySelectorAll("option[data-ar][data-en]").forEach((element) => {
    element.textContent = element.dataset[language];
  });

  languageButton.textContent = language === "ar" ? "English" : "العربية";

  document.title = getText(
    "أحمد المطيري | تطوير تنظيمي وتحسين عمليات",
    "Ahmad Almtere | Organizational Development & Operations"
  );

  renderServiceCards();
  renderCaseCards();
  renderServiceOptions();
}

languageButton.addEventListener("click", () => {
  setLanguage(language === "ar" ? "en" : "ar");
});

serviceSelect.addEventListener("change", renderServiceFields);

document.querySelector("#dialog-close").addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

const supplierCriteria = [
  ["quality", "الجودة", "Quality", 25],
  ["delivery", "الالتزام بالتسليم", "Delivery reliability", 25],
  ["price", "السعر", "Price", 20],
  ["communication", "الاستجابة والتواصل", "Communication", 15],
  ["payment", "شروط الدفع", "Payment terms", 10],
  ["resolution", "معالجة المشاكل", "Problem resolution", 5]
];

const supplierInputs = document.querySelector("#supplier-inputs");

function renderSupplierInputs() {
  supplierInputs.replaceChildren();

  supplierCriteria.forEach(([id, ar, en, weight]) => {
    const label = document.createElement("label");
    label.textContent = `${getText(ar, en)} (${weight}%)`;

    const select = document.createElement("select");
    select.name = id;
    select.required = true;

    for (let score = 1; score <= 5; score += 1) {
      const option = document.createElement("option");
      option.value = String(score);
      option.textContent = String(score);
      select.append(option);
    }

    label.append(select);
    supplierInputs.append(label);
  });
}

function showOutput(outputElement, text) {
  outputElement.replaceChildren();

  const content = createTextElement("div", text);

  const copyButton = createTextElement(
    "button",
    getText("نسخ", "Copy"),
    "btn outline"
  );

  copyButton.type = "button";
  copyButton.style.color = "#101e32";

  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(text);
      copyButton.textContent = getText("تم النسخ", "Copied");
    } catch {
      copyButton.textContent = getText("تعذر النسخ", "Copy failed");
    }
  });

  const printButton = createTextElement(
    "button",
    getText("طباعة / PDF", "Print / PDF"),
    "btn navy"
  );

  printButton.type = "button";

  printButton.addEventListener("click", () => {
    const printWindow = window.open("", "_blank");

    if (!printWindow) {
      return;
    }

    printWindow.document.write(`
      <!doctype html>
      <html lang="${language}" dir="${language === "ar" ? "rtl" : "ltr"}">
        <head>
          <meta charset="utf-8">
          <title>Report</title>
        </head>
        <body>
          <pre style="white-space:pre-wrap;font:16px Arial;line-height:1.8"></pre>
        </body>
      </html>
    `);

    printWindow.document.querySelector("pre").textContent = text;
    printWindow.document.close();
    printWindow.print();
  });

  outputElement.append(content, copyButton, printButton);
}

document.querySelector("#map-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const priority = formData.get("priority");

  const translatedPriority =
    priority === "high"
      ? getText("عالية", "High")
      : priority === "medium"
        ? getText("متوسطة", "Medium")
        : getText("منخفضة", "Low");

  const text = [
    `${getText("الإجراء: ", "Process: ")}${formData.get("process")}`,
    `${getText("الهدف: ", "Objective: ")}${formData.get("goal")}`,
    `${getText("الخطوات الحالية: ", "Current steps: ")}${formData.get("current")}`,
    `${getText("نقطة التعثر: ", "Bottleneck: ")}${formData.get("issue")}`,
    `${getText("التحسين المقترح: ", "Proposed improvement: ")}${formData.get("proposal")}`,
    `${getText("الأولوية: ", "Priority: ")}${translatedPriority}`
  ].join("\n");

  showOutput(document.querySelector("#map-output"), text);
});

document.querySelector("#supplier-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  const score = Math.round(
    supplierCriteria.reduce((total, [id, , , weight]) => {
      return total + (Number(formData.get(id)) * weight) / 5;
    }, 0)
  );

  const rating =
    score >= 85
      ? getText("ممتاز", "Excellent")
      : score >= 70
        ? getText("جيد", "Good")
        : score >= 50
          ? getText("يحتاج تحسين", "Needs improvement")
          : getText("عالي المخاطر", "High risk");

  const text = [
    `${getText("المورد: ", "Supplier: ")}${formData.get("supplier")}`,
    `${getText("النتيجة: ", "Score: ")}${score}/100`,
    `${getText("التصنيف: ", "Rating: ")}${rating}`
  ].join("\n");

  const output = document.querySelector("#supplier-output");

  showOutput(output, text);

  const scoreBar = document.createElement("div");
  scoreBar.className = "scorebar";

  const scoreFill = document.createElement("i");
  scoreFill.style.width = `${score}%`;

  scoreBar.append(scoreFill);
  output.prepend(scoreBar);
});

const requestForm = document.querySelector("#request-form");
const formStatus = document.querySelector("#form-status");
const submitButton = document.querySelector("#submit-request");

requestForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!requestForm.reportValidity()) {
    return;
  }

  submitButton.disabled = true;
  formStatus.className = "";
  formStatus.textContent = getText(
    "جارٍ إرسال الطلب...",
    "Sending your request..."
  );

  const formData = new FormData(requestForm);

  const selectedService = serviceData.find(
    (service) => service.id === serviceSelect.value
  );

  formData.set(
    "service",
    selectedService ? getText(selectedService.ar, selectedService.en) : ""
  );

  formData.set(
    "_subject",
    `Portfolio service request - ${selectedService ? selectedService.en : "General"}`
  );

  try {
    const response = await fetch(requestForm.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json"
      }
    });

    if (!response.ok) {
      throw new Error("Form submission failed");
    }

    requestForm.reset();
    renderServiceFields();

    formStatus.className = "success";
    formStatus.textContent = getText(
      "تم إرسال طلبك بنجاح. شكرًا لتواصلك.",
      "Your request was submitted successfully. Thank you."
    );
  } catch {
    formStatus.className = "error";
    formStatus.textContent = getText(
      "تعذر إرسال الطلب. حاول مرة أخرى أو تواصل عبر البريد الإلكتروني: almtereahmad@gmail.com",
      "Unable to send the request. Please try again or email: almtereahmad@gmail.com"
    );
  } finally {
    submitButton.disabled = false;
  }
});

renderSupplierInputs();
setLanguage(language);
