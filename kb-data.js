const knowledgeBase = [
  {
    id: 'squarespace-google-sites',
    title: 'Connecting Squarespace Domain to Google Sites',
    desc: `
<strong>In this guide:</strong> Domains — Connecting your Squarespace domain to a Google Sites site.<br>
If you purchased a domain from Squarespace, you can link it to Google Sites.<br><br>

<strong>Before you begin:</strong><br>
- Verify your Squarespace domain in Google Search Console.<br>
- Keep the domain registered in Squarespace.<br>
- Google’s documentation may help.<br><br>

<strong>Step 1 - Google Sites:</strong><br>
- Log into Google Sites dashboard.<br>
- Click website > gear icon > Custom domains > Start setup.<br>
- Enter your domain, click Next.<br>
- Keep the DNS setup window open.<br><br>

<strong>Step 2 - In Squarespace:</strong><br>
- Open Domains dashboard > select domain > DNS.<br>
- Delete Squarespace Defaults.<br>
- Add CNAME:<br>
  - Type: CNAME<br>
  - Host: www<br>
  - Data: ghs.googlehosted.com<br>
- Save.<br><br>

<strong>Domain forwarding rule:</strong><br>
- Domains dashboard > Website > Domain Forwarding Rules > Add rule.<br>
- Subdomain: @<br>
- URL: www.yourdomain.com<br>
- Redirect type: 301 recommended.<br>
- SSL: On.<br>
- Path forwarding: Maintain paths.<br>
- Save.<br><br>

<strong>Step 3 - Complete connection:</strong><br>
- Back in Google Sites, click Done.<br>
- Wait 24–48 hours for DNS propagation.<br>
- Check: Settings > Custom domains > Connected domains.<br><br>

<strong>Troubleshooting:</strong><br>
- Squarespace DNS errors → contact Squarespace support.<br>
- Google Sites dashboard errors → contact Google support.<br><br>

<strong>Important:</strong><br>
- Always keep www in forwarding URL.<br>
- Use 301 redirects for SEO.<br>
- Keep SSL enabled.<br><br>

<strong>Last updated:</strong> March 21, 2025
`,
    category: 'squarespace',
    tags: ['domain','google','setup','dns','forwarding','ssl','cname','redirect','verification'],
    isFAQ: false,
    lastUpdated: '2025-03-21'
  },
  {
    id: 'squarespace-dns-settings',
    title: 'Accessing your Squarespace-managed domain\'s DNS settings',
    desc: `
<strong>To point your domain to Squarespace or set up a third-party email service, add preset DNS records from the domains dashboard.</strong><br>
Last updated June 18, 2025<br><br>

If you registered your domain through Squarespace or connected via Nameserver Connect, you can access DNS records (resource records).<br><br>

<strong>Open your domain's DNS settings:</strong><br>
- Open domains dashboard.<br>
- Click the domain name.<br>
- Click DNS in the side panel.<br><br>

<strong>Add preset DNS records:</strong><br>
- Click Add Preset (top-right).<br>
- Options: Google Workspace, Fastmail, Proton Mail, Titan, Neo, iCloud, Zoho Mail, Google Workspace verification, Squarespace Defaults.<br>
- Presets auto-add required records.<br><br>

<strong>Add Squarespace defaults:</strong><br>
- Restore default records if edited/deleted.<br>
- Open domains dashboard → select domain → DNS → Add preset → Squarespace defaults.<br><br>

<strong>Remove Squarespace defaults:</strong><br>
- Domains dashboard → select domain → DNS → trash icon next to Squarespace defaults → confirm.<br><br>

<strong>DNS record conflicts:</strong><br>
- Avoid duplicate/conflicting MX or CNAME records.<br>
- Errors: DNS record conflict, Squarespace defaults couldn’t be added, Custom record not saved.<br><br>

<strong>Add custom DNS records:</strong><br>
- Scroll to Custom records to add manually.<br><br>

<strong>Other management options:</strong><br>
- Transfer domain, edit nameservers/DNSSEC, disable Whois Privacy, set primary domain, etc.<br><br>

For more: connect external domains, forward/point domains, create subdomains, etc.
`,
    category: 'squarespace',
    tags: ['dns','domain','preset','custom records','conflict','transfer','squarespace defaults'],
    isFAQ: false,
    lastUpdated: '2025-06-18'
  },
  {
    id: 'squarespace-ssl-certificates',
    title: 'Understanding SSL certificates on Squarespace',
    desc: `
<strong>Important information about SSL and how to edit SSL settings to meet your security needs.</strong><br>
Last updated May 14, 2025<br><br>

All domains correctly pointing to your Squarespace site get free SSL certificates. SSL helps secure connections and protect visitors' info.<br><br>

<strong>What you'll need:</strong><br>
- SSL is auto-included for: Squarespace domains, connected third-party domains, subdomains, built-in domains.<br>
- Domains must point correctly to Squarespace; max 63 characters.<br><br>

<strong>Checking SSL status:</strong><br>
- Domains dashboard > domain > SSL status should be Issued.<br>
- Or open SSL panel and status should be Active.<br>
- Or visit your site and check for https:// with lock icon.<br><br>

<strong>Choose SSL settings:</strong><br>
- Open SSL panel > choose Secure, HSTS Secure, or Insecure.<br>
- Usually keep Secure + HSTS Secure.<br>
- Save changes; may take up to 48h.<br><br>

<strong>SSL settings explained:</strong><br>
- Secure (Preferred): Redirects to HTTPS, better SEO, disables HTTP.<br>
- HSTS Secure: Extra protection, prevents “connection not private” warnings.<br>
- Insecure: Allows both HTTP & HTTPS; not recommended.<br><br>

<strong>Checkout & SSL:</strong><br>
- Always protected by SSL, PCI compliant.<br>
- Secure setting shows custom domain on checkout.<br><br>

<strong>Mixed content warnings:</strong><br>
- Caused by loading HTTP content on HTTPS page.<br>
- Fix custom code or integrations causing warnings.<br><br>

<strong>Other notes:</strong><br>
- Squarespace uses Let's Encrypt DV certificates (refresh every 90 days).<br>
- TLS 1.2+, 2048-bit encryption.<br>
- Can't install third-party SSL certs; to use Squarespace SSL, reconnect domain.<br><br>

<strong>FAQ highlights:</strong><br>
- What is SSL? It encrypts data between browser & site.<br>
- Benefits: trust, prevents data theft, SEO, faster load.<br>
- Can't disable SSL fully, but can use Insecure mode.<br>
- SSL covers subdomains.<br>
- Login & account details always encrypted.<br>
- No ACME protocol support.<br><br>

For errors & help: visit Squarespace’s Troubleshooting SSL guide.
`,
    category: 'squarespace',
    tags: ['ssl','security','https','certificate','dns','settings','troubleshooting'],
    isFAQ: false,
    lastUpdated: '2025-05-14'
   },
   {
    id: 'squarespace-nameserver-vs-dns',
    title: 'Nameserver connect vs. DNS connect on Squarespace',
    desc: `
<strong>Compare the two ways to connect a domain you registered with a third-party company to your Squarespace site.</strong><br>
Last updated March 19, 2025<br><br>

If you have a domain registered outside Squarespace, you can transfer it (recommended) or connect it. Connecting keeps it with your provider; transferring moves it to Squarespace support.<br><br>

<strong>Two connection methods:</strong><br>
- Nameserver connect: DNS managed at Squarespace.<br>
- DNS connect: DNS stays at your provider.<br><br>

<strong>When to use each:</strong><br>
Use nameserver connect (GoDaddy, Namecheap, Network Solutions) unless you have:<br>
- Custom DNS records, subdomains, DNSSEC, glue records, special security/CDN like Cloudflare or AWS, or complex setup.<br>
Otherwise, use DNS connect.<br><br>

<strong>Tip:</strong><br>
If you used DNS connect before, keep as-is. Adding nameservers for a new domain won't affect old connections.<br><br>

<strong>Setup process:</strong><br>
- Nameserver connect: guided; add two nameserver records at provider.<br>
- DNS connect: manual; add two CNAME + four A records at provider.<br><br>

<strong>Editing DNS after connecting:</strong><br>
- Nameserver connect: edit via Squarespace dashboard > DNS settings.<br>
- DNS connect: edit at provider account.<br><br>

<strong>Opting out of nameserver connect:</strong><br>
If you have custom email or ad services tied to DNS, opt out and use DNS connect to avoid downtime.<br><br>

Steps:<br>
- Domains panel > Use a domain I own > enter domain > Connect domain.<br>
- Choose "No, use DNS records".<br>
- Select provider > sign in > Connect > Continue.<br><br>

<strong>Check how you connected:</strong><br>
- Domains panel shows if connection is nameserver or DNS connect.<br><br>

<strong>More help:</strong><br>
- See technical details: Nameservers and DNSSEC for Squarespace domains.<br>
- Visit Domains basics for more resources.
`,
    category: 'squarespace',
    tags: ['dns','nameserver','third-party domain','connect','transfer','dnssec','cname','a record'],
    isFAQ: false,
    lastUpdated: '2025-03-19'
   },
   {
    id: 'squarespace-connect-third-party-domain',
    title: 'Connecting a third-party domain to your Squarespace site',
    desc: `
<strong>Map your third-party domain to your Squarespace site while keeping it registered with your provider.</strong><br>
Last updated May 2, 2025<br><br>

<strong>Overview:</strong><br>
- Connect via DNS Connect (or Nameserver Connect for GoDaddy, Namecheap, Network Solutions).<br>
- Domain stays registered with your provider; Squarespace hosts your site.<br><br>

<strong>Before you begin:</strong><br>
- Domain must be eligible & meet requirements (full DNS access).<br>
- Domains usually take 24–48h to connect.<br>
- Recommended: transfer domain to Squarespace if possible.<br><br>

<strong>Features:</strong><br>
- Connect to trial/paid site.<br>
- Can keep existing email accounts.<br>
- Multiple custom domains supported.<br><br>

<strong>Limitations:</strong><br>
- Can't connect to a specific page or parking page.<br>
- Domains with “squarespace” or “sqsp” not allowed.<br>
- Special characters may display incorrectly in some browsers.<br><br>

<strong>Step 1 - Start connection:</strong><br>
- Domains panel > Use a Domain I Own > enter domain > Connect Domain.<br>
- Select provider (or Other) > Connect.<br><br>

<strong>Step 2 - View DNS settings:</strong><br>
- Panel shows required CNAME & A records.<br><br>

<strong>Step 3 - Log into provider account:</strong><br>
- Find DNS settings; do NOT delete MX records.<br><br>

<strong>Step 4 - Add first CNAME:</strong><br>
- Host: unique code → Points to: verify.squarespace.com.<br><br>

<strong>Step 5 - Add second CNAME:</strong><br>
- Host: www → Points to: ext-cust.squarespace.com.<br>
- Or add A record if provider doesn’t support CNAME.<br><br>

<strong>Step 6 - Add four A records:</strong><br>
- @ → 198.185.159.144<br>
- @ → 198.185.159.145<br>
- @ → 198.49.23.144<br>
- @ → 198.49.23.145<br><br>

<strong>Step 7 - Wait for connection:</strong><br>
- Takes up to 48h.<br>
- Check progress: Domains panel > View DNS settings > Refresh records.<br>
- SSL certificate auto-generates when connected.<br><br>

<strong>Troubleshooting:</strong><br>
- Use DNS checker tool if domain shows DNS Error.<br>
- “Pending domain owner verification” may appear for up to 48h.<br><br>

<strong>More help:</strong><br>
- Troubleshooting domain connections guide.<br>
- Contact provider's support.<br>
- Hire Squarespace Expert.<br>
- Ask in Squarespace Forum.
`,
    category: 'squarespace',
    tags: ['dns','domain','connect','third-party','cname','a record','ssl','troubleshooting'],
    isFAQ: false,
    lastUpdated: '2025-05-02'
   },
   {
    id: 'squarespace-domain-verification',
    title: 'Verifying your Squarespace-managed domain',
    desc: `
<strong>To protect your safety, all changes to your domain's contact info need to be approved via email.</strong><br>
Last updated March 11, 2025<br><br>

When you register or change contact info for a Squarespace domain, we send a verification email. You must click the link to confirm.<br><br>

<strong>Important:</strong><br>
- Verification required by ICANN’s 2013 Registrar Accreditation Agreement.<br>
- Must verify within 15 days or domain will be suspended.<br><br>

<strong>Who sends the email:</strong><br>
- Squarespace Domains LLC: from no-reply@squarespace.com, subject "[Action Required] Verify your Squarespace domain contact."<br>
- Tucows: from customercare@squarespace.com, subject "Action Required: Verify your Domain."<br>
Check inbox & spam folder.<br><br>

<strong>How to verify:</strong><br>
- Click the verification link in the email.<br>
- Click Verify Information button.<br><br>

<strong>Status in dashboard:</strong><br>
- While pending, domain shows "Action Required".<br>
- Click domain to view details and resend email.<br><br>

<strong>Resend verification email:</strong><br>
Computer:<br>
- Domains dashboard > click domain > click Resend Verification Email > click Okay.<br>
Mobile:<br>
- Domains dashboard > tap domain > tap Resend Verification Email > tap Okay.<br><br>

<strong>If you see "Failed to send":</strong><br>
- Means email bounced or wasn’t received.<br>
- Change contact email or contact Squarespace support.<br>
- Avoid Apple emails (@mac.com, @me.com, @icloud.com) as they often block verification emails.<br><br>

<strong>If your domain is suspended:</strong><br>
- Won’t connect until verified.<br>
- Resend verification email to fix.<br>
More help: visit "Fixing a suspended Squarespace domain."
`,
    category: 'squarespace',
    tags: ['verification','domain','contact info','email','suspended','icann','resend'],
    isFAQ: false,
    lastUpdated: '2025-03-11'
   },
   {
    id: 'squarespace-fixing-suspended-domain',
    title: 'Fixing a suspended Squarespace domain',
    desc: `
<strong>Potential reasons your domain is suspended and how to fix it.</strong><br>
Last updated June 11, 2025<br><br>

<strong>Why this happens:</strong><br>
- Must verify ownership via email within 15 days of registration.<br>
- Older domains might get suspended if annual summary email bounces.<br><br>

<strong>Check if your domain is suspended:</strong><br>
- Domains dashboard shows red "Domain suspended" warning.<br>
- If no warning but domain isn’t working, clear browser cache, disable extensions, or try other troubleshooting.<br><br>

<strong>Steps to unsuspend:</strong><br>
1️⃣ Check inbox & spam folder for email from customercare@squarespace.com or no-reply@squarespace.com with subject "Please verify your domain name(s) as soon as possible."<br>
- Click the verification link.<br>
- If link doesn't work, open email in different browser/app and retry.<br><br>

2️⃣ Check Owner Contact email:<br>
- Domains dashboard > click domain > Edit Registration info.<br>
- Correct typos and save.<br><br>

3️⃣ Resend verification email:<br>
- Click Resend Verification Email after confirming Owner email.<br>
- Click the link in the email when you receive it.<br><br>

4️⃣ Try another email address:<br>
- Change Owner email to a new address you can access.<br>
- Save and resend verification email.<br><br>

<strong>FAQ:</strong><br>
- <em>Can someone take my suspended domain?</em> → No, ownership can only change with legal order; otherwise remains yours until expiry.<br>
- <em>What if I never verify?</em> → Domain still renews normally unless payment fails; won't connect to site.<br>
- <em>Active domain suddenly suspended?</em> → Registrar (e.g., Tucows) sends annual confirmation; if email bounces, domain is suspended. Fix by updating Owner Contact email & re-verifying.
`,
    category: 'squarespace',
    tags: ['suspended domain','verification','owner contact','resend email','troubleshooting','tucows'],
    isFAQ: false,
    lastUpdated: '2025-06-11'
   },
   {
    id: 'squarespace-is-my-site-down',
    title: 'Is my site down? Steps if your site isn\'t appearing',
    desc: `
<strong>Steps to troubleshoot if your Squarespace site isn't loading.</strong><br>
Last updated June 12, 2025<br><br>

If your site is slow but online, see: My site is loading slowly.<br><br>

<strong>Check status.squarespace.com:</strong><br>
- System-wide issue? Check Status page.<br>
- Subscribe for updates via SMS/email.<br><br>

<strong>Check if it's a domain issue:</strong><br>
- Try your built-in domain (ends with .squarespace.com).<br>
- If built-in domain loads → custom domain likely has an issue.<br><br>

<strong>Third-party domains:</strong><br>
- Verify DNS settings using our guide.<br>
- Follow troubleshooting steps.<br>
- Contact domain provider or check their status page.<br>
- Wait up to 48h if you recently connected domain.<br><br>

<strong>Squarespace domains:</strong><br>
- Check for Website Defaults in DNS settings; add if missing.<br>
- Verify domain if recently registered or changed contact info (must verify within 15 days).<br>
- Domain expired? Reactivate it to restore site.<br><br>

<strong>Reactivate expired site:</strong><br>
- “Website Expired” message appears if payment failed or auto-renew disabled.<br>
- Reactivate to bring site back online.<br><br>

<strong>If the wrong site is appearing:</strong><br>
- Domain may be attached to another site. Move domain to correct site.<br>
- Wrong built-in domain?<br>
  - Log in > scroll to bottom of main menu > click profile image/initials.<br>
  - See list of all sites: preview, title, primary domain, status.<br>
  - Search/browse; click preview image to open login page.<br><br>

<strong>Tip:</strong><br>
- Use Status page first to rule out known issues.<br>
- Most domain changes need up to 48h to take full effect.
`,
    category: 'squarespace',
    tags: ['site down','status','domain issue','reactivate','dns','built-in domain','expired site','wrong site'],
    isFAQ: false,
    lastUpdated: '2025-06-12'
   },
   {
    id: 'squarespace-built-in-domains',
    title: 'Built-in domains on Squarespace',
    desc: `
<strong>Every site comes with a built-in domain (Squarespace URL):</strong><br>
Last updated March 11, 2025<br><br>

Example: yoursiteid.squarespace.com<br>
Squarespace creates the Site ID (first part) automatically with two random words or characters. You can change this anytime.<br><br>

<strong>Where it appears:</strong><br>
- Always visible in your browser bar when logged in.<br>
- Visitors see your custom domain instead if set up.<br>
- Built-in domain still appears on login screen & site source code.<br><br>

<strong>Built-in vs custom domain:</strong><br>
- Built-in: always ends with .squarespace.com, assigned by Squarespace.<br>
- Custom: your chosen address like yourdomain.com; visitors see this instead.<br>
- Note: built-in domain doesn’t redirect to custom domain; if accessed directly, it shows in browser.<br><br>

<strong>Find your built-in domain:</strong><br>
- Copy from browser address bar when logged in (before "/config").<br><br>

<strong>Change built-in domain:</strong><br>
- Can have 3–30 characters; only letters, numbers, hyphens (can’t end with hyphen).<br>
- Must start with a letter; can’t use symbols or special characters like ü, é, ñ.<br>
- Can’t change on parking pages or Acuity Scheduling subscriptions.<br><br>

<strong>Steps:</strong><br>
- Open Domains panel.<br>
- Under Built-In Domain, click domain.<br>
- Enter new Site ID (part before .squarespace.com).<br>
- Click Save.<br>
- If ID is taken, get error; for re-using a removed site’s ID, contact support.<br><br>

You’ll get an email: “Your Updated Squarespace URL” confirming the change.
`,
    category: 'squarespace',
    tags: ['built-in domain','site id','custom domain','change domain','squarespace url'],
    isFAQ: false,
    lastUpdated: '2025-03-11'
   },
   {
    id: 'squarespace-recover-account-email',
    title: 'Recovering your account email address',
    desc: `
<strong>Regain access to your Squarespace login email.</strong><br>
Last updated September 24, 2024<br><br>

If you forgot which email you used for Squarespace—or if your domain migrated from Google and you're unsure—use the recovery process.<br><br>

<strong>Recover your account email address:</strong><br>
1️⃣ Go to <a href="https://www.squarespace.com/login" target="_blank">Squarespace login</a>.<br>
2️⃣ Click "Can't log in?" → then "Don't know the email address."<br>
3️⃣ Enter your custom domain or built-in Squarespace domain, then click Send email.<br>
4️⃣ Or enter your phone number if added → click Send Text.<br>
5️⃣ Check all email accounts to see which got the recovery email.<br><br>

<strong>Tip:</strong><br>
- Recovery email only goes to site owner's email.<br>
- For parked domains: only sent to domain owner's email.<br>
- To recover a contributor's email: site owner must log in & check contributor profile.<br><br>

<strong>Didn't get the recovery email?</strong><br>
- Check spam/junk folders on all emails.<br>
- Still stuck? Fill out Squarespace’s recovery form; after verifying you’re the owner, an advisor will help.
`,
    category: 'squarespace',
    tags: ['account recovery','login','email address','forgot email','owner email','contributor'],
    isFAQ: false,
    lastUpdated: '2024-09-24'
   },
   {
    id: 'squarespace-change-account-email',
    title: 'Changing your account email address',
    desc: `
<strong>How to change your Squarespace login email.</strong><br>
Last updated December 12, 2024<br><br>

A valid account email is required per Terms of Service; it ensures you get account notifications and replies from support.<br><br>

<strong>Before you begin:</strong><br>
- To transfer site ownership to a different account, follow "Changing site ownership".<br>
- Can't use an email already linked to another account; invite it as contributor instead.<br>
- If you have an empty unused account, delete it to free that email.<br>
- Login via Apple, Facebook, or Google? Change email there instead.<br>
- Avoid using your custom domain email as account email (risk of lock-out).<br><br>

<strong>Steps to change account email:</strong><br>
1️⃣ Go to <a href="https://account.squarespace.com" target="_blank">Account & Security settings</a> (log in first if prompted).<br>
2️⃣ Click Change Email Address (even if you see "Email needs to be verified").<br>
3️⃣ Enter your account password.<br>
4️⃣ Enter your new email twice.<br>
5️⃣ Click Save.<br>
6️⃣ You'll get a verification email from no-reply@squarespace.com → click the link to confirm.<br><br>

<strong>Note:</strong><br>
- If you usually log in through a social account, update email there, not in Squarespace settings.<br><br>

<strong>Update form storage emails:</strong><br>
- Changing account email doesn’t change form block destinations.<br>
- Update manually to get submissions at new email.<br><br>

<strong>If you’re locked out:</strong><br>
- Visit "Recovering your account email address".<br>
- After recovery and login, repeat steps above to change email.
`,
    category: 'squarespace',
    tags: ['account email','change email','login','security','verification','form storage'],
    isFAQ: false,
    lastUpdated: '2024-12-12'
   },
   {
   id: 'squarespace-reporting-abuse',
   title: 'Reporting abuse on Squarespace',
   desc: `
<strong>How to report suspicious content or activity related to a Squarespace site or domain.</strong><br>
Last updated November 15, 2024<br><br>

Squarespace expects all users to use the platform responsibly.<br><br>

<strong>Before you begin:</strong><br>
- Review our <a href="https://www.squarespace.com/terms-of-service" target="_blank">Terms of Service</a> and Acceptable Use Policy.<br>
- See our <a href="https://support.squarespace.com/hc/en-us/articles/206543167" target="_blank">Security tips</a> to protect your account.<br><br>

<strong>Note:</strong><br>
- This is general guidance, not legal advice.<br>
- Suspect an internet crime? File with the <a href="https://www.ic3.gov/" target="_blank">Internet Crime Complaint Center</a>.<br><br>

<strong>Report domain abuse:</strong><br>
- Confirm the domain is managed by Squarespace Domains LLC or Squarespace Domains II LLC using <a href="https://lookup.icann.org/" target="_blank">ICANN lookup</a>.<br>
- If not, report to the actual provider.<br><br>

<strong>Types of abuse & how to report:</strong><br>
<ul>
<li><strong>Phishing:</strong> Deceiving users into sharing sensitive info. <br>
Example: Suspicious email from a Squarespace domain. <br>
→ Complete the Phishing report form.</li><br>
<li><strong>Pharming:</strong> Redirecting users to fraudulent sites via hijacked DNS.<br>
Example: Old site now redirects elsewhere. <br>
→ Complete the Pharming report form.</li><br>
<li><strong>Spam:</strong> Unsolicited bulk emails.<br>
Example: Spam emails from a Squarespace-registered domain. <br>
→ Complete the Spam report form.</li><br>
<li><strong>Malware:</strong> Domains distributing malicious software.<br>
Example: Suspected malware from Squarespace domain. <br>
→ Complete the Malware report form.</li>
</ul><br>

<strong>Report copyright or trademark infringement:</strong><br>
- See <a href="https://support.squarespace.com/hc/en-us/articles/206543527" target="_blank">Intellectual property and Squarespace</a>.<br>
- For domains infringing trademarks, see ICANN’s Uniform Domain-Name Dispute-Resolution Policy.<br><br>

Squarespace investigates all reports individually based on the nature of the abuse.
`,
    category: 'squarespace',
    tags: ['report abuse','phishing','malware','spam','copyright','trademark','domain abuse'],
    isFAQ: false,
    lastUpdated: '2024-11-15'
   },
   {
   id: 'google-domains-migration',
   title: 'About the Google Domains migration to Squarespace',
   desc: `
<strong>Answers to common questions about moving your Google domain to Squarespace.</strong><br>
Last updated May 12, 2025<br><br>

<strong>On September 7, 2023:</strong> Squarespace acquired all Google Domains customer accounts & registrations.<br>
All domains are now managed directly in your Squarespace account.<br><br>

<strong>Managing your domain:</strong><br>
- Existing Squarespace users: Log in → domains appear in dashboard.<br>
- New users: Log in with Google → verify email → set password.<br><br>

<strong>Domain settings you can manage:</strong><br>
Billing, DNS, contact info, Whois privacy, nameservers & DNSSEC.<br><br>

<strong>Billing info:</strong><br>
- Auto-renews annually on original date.<br>
- Existing years left remain.<br>
- Tax exemptions don’t transfer → reapply.<br><br>

<strong>Change domain owner:</strong><br>
- Domains only: transfer to a domain manager.<br>
- Site+domain: change site owner (adds domain ownership).<br><br>

<strong>Common issues:</strong><br>
- Domain stopped working? May need to add new verification record.<br>
- Add DNS records in your dashboard to fix.<br><br>

<strong>FAQs:</strong><br>
- Cost: Renew at standard Squarespace rates.<br>
- Keep using other website hosts? Yes.<br>
- Keep remaining registration time? Yes.<br>
- Existing Google contributors? Domain owner keeps owner rights; others become managers.<br>
- 60‑day lock? No, can transfer anytime.<br>
- Google services (Analytics, Search Console) keep working.<br><br>

<strong>Domain & email forwarding after migration:</strong><br>
- Some users need to add/update DNS records → see dashboard banner.<br>
- Domain forwarding: add CNAME & A records.<br>
- Email forwarding: add MX & TXT records; may need to delete Google MX & reprioritize Mailgun MX.<br><br>

<strong>Unsupported:</strong><br>
- Dynamic DNS (DDNS).<br>
- ACME TLS/SSL certificates (existing ones keep working until expiry).<br>
- Migrated domains on Squarespace 5 sites (use Squarespace 7 instead).<br><br>

<strong>Need help?</strong><br>
- Contact your nameserver provider with our suggested message.<br>
- Contact Squarespace support if you can’t log in or face errors.<br><br>

Squarespace keeps your domains secure and helps manage your DNS, billing, and forwarding in one place.
`,
    category: 'squarespace',
    tags: ['google domains','migration','billing','dns','forwarding','ownership','ssl','ddns','support'],
    isFAQ: false,
    lastUpdated: '2025-05-12'
   },
   {
   id: 'google-workspace-with-squarespace',
   title: 'Using Google Workspace with Squarespace',
   desc: `
<strong>Set up custom email with Google Workspace on Squarespace.</strong><br>
Last updated April 1, 2025<br><br>

<strong>Overview:</strong><br>
- Create email addresses for your domain with Google's business Gmail.<br>
- Includes Google Calendar, Drive & Docs.<br>
- Eligible plans get a free year of Business Starter.<br>
- Billing managed in Squarespace; use Google to access email & apps.<br><br>

<strong>Eligibility:</strong><br>
- Must use Squarespace 7.0/7.1 (trial, paid site, or parking page).<br>
- Must own a custom domain (Squarespace or 3rd-party).<br>
- Not available if domain already had Google Workspace or legacy G Suite.<br>
- Must live in a supported country.<br><br>

<strong>Pricing (monthly per user):</strong><br>
- Starter: $8.40 → Gmail, Calendar, Drive, 100 video participants, 30GB storage.<br>
- Standard: $16.80 → Adds AI in Docs/Meet, 150 video participants, recording, 2TB storage.<br>
- Plus: $26.40 → Adds Vault, 500 video participants, attendance, 5TB storage.<br><br>

<strong>Key notes:</strong><br>
- Only new Google Workspace accounts (can't import existing).<br>
- You can migrate from another email host (requires extra coordination).<br>
- Taxes apply at checkout based on region.<br><br>

<strong>Best practices:</strong><br>
- Don’t use your Google Workspace email as your Squarespace account login email (risk of lockout).<br>
- You can add users, rename users & manage billing inside Squarespace.<br><br>

<strong>Update site to use custom email:</strong><br>
- Commerce reply-to address.<br>
- Form block storage emails.<br>
- Contact/about pages & site footer.<br>
- Email Campaigns sender details.<br><br>

<strong>Support:</strong><br>
- Squarespace: billing, sign-up, user management, panel questions.<br>
- Google: technical features, advanced admin, sync, migration tools.<br><br>

<strong>Popular Google docs:</strong><br>
- Add domain alias, create group, migrate mail & calendars, Google Sync on iOS, set up MX records.<br><br>

<strong>Tip:</strong><br>
- After signing up: Domains dashboard → select domain → Email → Get started.<br>
- Choose plan & complete setup.<br><br>

Bring your brand emails, calendar, and team tools together with Squarespace + Google Workspace.
`,
    category: 'squarespace',
    tags: ['google workspace','custom email','billing','pricing','setup','gmail','calendar','drive'],
    isFAQ: false,
  lastUpdated: '2025-04-01'
   },
   {
   id: 'signing-up-google-workspace',
   title: 'Signing up for Google Workspace',
   desc: `
<strong>Create a Google Workspace account & custom email on Squarespace.</strong><br>
Last updated June 12, 2025<br><br>

<strong>Before you begin:</strong><br>
- Must meet eligibility (Squarespace 7.0/7.1 site, have custom domain, etc).<br>
- Only site owners/Admin contributors can sign up.<br>
- Domain can't include special characters (ü, é, ñ).<br>
- Homepage must be enabled (not behind page password).<br><br>

<strong>Step 1 - Prepare your domain:</strong><br>
- Squarespace domain: verify ownership, ensure active subscription.<br>
- Third-party domain: configure DNS, wait up to 48h for propagation.<br>
- Keep using Squarespace's default nameservers to avoid email disruption.<br><br>

<strong>Step 2 - Register & purchase:</strong><br>
- Open Google Workspace panel (Domains dashboard → Email → Get started).<br>
- Choose Monthly or Annual billing (can't change later).<br>
- Enter info: first/last name, username, domain, contact email, etc.<br>
- Enter payment details & confirm.<br><br>

<strong>Step 3 - Find temporary password:</strong><br>
- Check personal email (not new email) for Squarespace welcome email.<br>
- Click Log into email & use temp password.<br>
- If missing, resend from Google Workspace panel → Users → ⋯ → Send invitation/Reset password.<br><br>

<strong>Step 4 - Log in & accept terms:</strong><br>
- Log into Google Admin with new email & temp password.<br>
- Set new password & accept Google terms.<br><br>

<strong>Step 5 - Verify domain:</strong><br>
- Google Admin → verify domain (or use Google Workspace setup tool).<br>
- Follow Google's prompts to confirm ownership.<br><br>

<strong>Step 6 - Add MX records:</strong><br>
- Squarespace domains: MX records added automatically (double-check).<br>
- Third-party domains: get MX instructions by email & add to DNS.<br><br>

<strong>After setup:</strong><br>
- Send & receive emails from your domain.<br>
- Add more users from Google Workspace panel.<br>
- Manage billing in Squarespace Billing panel.<br>
- Connect new email to forms, notifications, & campaigns.<br><br>

<strong>Important:</strong><br>
- Don’t use your new Google Workspace email as your Squarespace account email (risk of lockout).<br><br>

<strong>Troubleshooting:</strong><br>
- Google can’t verify domain → follow Troubleshooting Google Workspace domain verification.<br>
- Other errors → visit Troubleshooting Google Workspace.<br><br>

Build a professional presence by adding branded email to your domain!
`,
    category: 'squarespace',
    tags: ['google workspace','signup','custom email','mx records','verification','billing'],
    isFAQ: false,
    lastUpdated: '2025-06-12'
  },
  {
    id: 'adding-google-workspace-mx',
    title: 'Adding Google Workspace MX records',
    desc: `
<strong>Add MX records to use Google Workspace email with Squarespace.</strong><br>
Last updated May 16, 2025<br><br>

<strong>Before you begin:</strong><br>
- If you purchased Google Workspace via Squarespace → MX records usually added automatically.<br>
- If you purchased via Google directly → connect domain from Google Admin → adds MX records automatically.<br>
- DNS changes can take up to 48h to process.<br><br>

<strong>Step 1 - Check for existing MX records:</strong><br>
- Open domains dashboard → click domain → DNS.<br>
- Look for: five Google Workspace MX records or one consolidated Google record.<br>
- If records exist & correct → stop.<br>
- If errors → delete & re-add via Google Workspace MX preset.<br>
- If missing → add via preset.<br><br>

<strong>Step 2 - Add missing MX records (Squarespace domain):</strong><br>
- Open DNS Settings panel → Add Preset → select Google Workspace MX.<br><br>

<strong>Step 3 - Add MX to third-party domain:</strong><br>
- Get records from Google or email instructions.<br>
- Log into domain provider → DNS settings → add records manually.<br>
- For provider-specific help → see Google’s docs.<br><br>

<strong>Step 4 - Add MX to a subdomain:</strong><br>
- Domains dashboard → DNS → Custom records → Add record.<br>
- Host: subdomain (e.g. "mail")<br>
- Type: MX<br>
- Priority: 10<br>
- Data: smtp.google.com<br><br>

<strong>Automatic method (if purchased via Google):</strong><br>
- Google Admin → Account → Domains → Manage Domains → Add domain → select Secondary domain → verify & activate Gmail.<br>
- Adds verification CNAME + multiple MX records automatically.<br><br>

<strong>⚠ Connection errors:</strong><br>
- Remove old MX/DKIM/SPF/email forwarding records before retrying.<br>
- Open DNS → delete conflicting records → retry.<br><br>

<strong>Reminder:</strong><br>
- Avoid custom nameservers that conflict with Google MX records.<br>
- Wait 24–48h for email to fully work after adding MX records.<br><br>

For more help → visit Troubleshooting Google Workspace.
`,
    category: 'squarespace',
    tags: ['google workspace','mx records','dns','email','setup','verification'],
    isFAQ: false,
    lastUpdated: '2025-05-16'
},
];