/**
 * 2 OR MORE (Concept 2) — Inquiry Form backend.
 *
 * Receives the ServiceAreaCTA inquiry form submission, logs it as a row in
 * this spreadsheet, emails a notification to the business inbox, and emails
 * a confirmation back to the person who submitted the form.
 *
 * IMPORTANT: paste this ENTIRE file so that doPost etc. are top-level
 * functions — do NOT paste it inside the default `function myFunction() {}`
 * wrapper, or the Web App won't recognize doPost.
 *
 * SETUP
 * 1. Create a new blank Google Sheet (under the same Google account used
 *    for MGC / the first 2 OR MORE site). Leave the first tab as-is — this
 *    script uses whichever tab is active, no renaming required.
 * 2. Extensions -> Apps Script. Select all existing code and replace it
 *    with this entire file.
 * 3. Update BUSINESS_EMAIL below if it should be something other than the
 *    demo address.
 * 4. Deploy -> New deployment -> select type "Web app".
 *      Execute as: Me
 *      Who has access: Anyone
 * 5. Click Deploy, approve the permission prompts (Sheets + Gmail access
 *    for your own account), and copy the resulting Web App URL.
 * 6. Send that URL back — it goes into the site's
 *    NEXT_PUBLIC_APPS_SCRIPT_URL environment variable.
 *
 * If you ever need to change the code after it's deployed, use
 * Deploy -> Manage deployments -> edit (pencil icon) -> New version,
 * otherwise the live URL keeps running the old code.
 */

// TEMPORARY: routed to the agency inbox for demo/testing. Swap back to
// the client's real inbox before handoff.
const BUSINESS_EMAIL = "admin@reigninlifeministry.org";

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const p = e.parameter;

  ensureHeaderRow(sheet);

  sheet.appendRow([
    new Date(),
    p.name || "",
    p.email || "",
    p.phone || "",
    p.event_type || "",
    p.message || "",
  ]);

  MailApp.sendEmail({
    to: BUSINESS_EMAIL,
    subject: "New Inquiry — 2 OR MORE Website (Concept 2)",
    body: businessEmailBody(p),
  });

  if (p.email) {
    MailApp.sendEmail({
      to: p.email,
      subject: "We received your inquiry — 2 OR MORE",
      body: confirmationEmailBody(p),
    });
  }

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function ensureHeaderRow(sheet) {
  if (sheet.getLastRow() > 0) return;
  sheet.appendRow([
    "Timestamp",
    "Name",
    "Email",
    "Phone",
    "Event Type",
    "Message",
  ]);
}

function businessEmailBody(p) {
  return [
    "New inquiry from the 2 OR MORE (Concept 2) website:",
    "",
    "Name: " + (p.name || ""),
    "Email: " + (p.email || ""),
    "Phone: " + (p.phone || ""),
    "Event Type: " + (p.event_type || ""),
    "",
    "Message:",
    p.message || "(none)",
  ].join("\n");
}

function confirmationEmailBody(p) {
  const firstName = p.name ? p.name.split(" ")[0] : "there";
  return [
    "Hi " + firstName + ",",
    "",
    "Thanks for reaching out to 2 OR MORE! We've received your event details " +
      "and will be in touch to schedule a consultation call within 24 hours.",
    "",
    "Here's a copy of what you sent us:",
    "",
    "Event Type: " + (p.event_type || "-"),
    "Message: " + (p.message || "-"),
    "",
    "Talk soon,",
    "The 2 OR MORE Team",
  ].join("\n");
}
