# FAQ — Auto Hide Out of Stock

**Last updated:** April 20, 2026

Answers to the questions merchants ask most. If yours isn't here, email [support@acostalabs.com](mailto:support@acostalabs.com) — we reply within 5 business days.

---

## Getting started

### What does this app do?

It watches your product inventory and automatically moves sold-out products to **Draft** status so they disappear from your storefront. When stock returns, it flips them back to **Active** automatically. You configure the rules; it runs on the schedule you set.

### How is this different from Shopify's built-in "hide when out of stock"?

Shopify's native behavior only hides a product on its own page once inventory hits zero — the product still shows up in collections, search results, and sitemaps until you manually change its status. This app changes the actual product status to Draft, which removes it everywhere across your storefront, and does it on a schedule so you never think about it.

### How long does setup take?

About 2 minutes. Install, pick a plan, set your scan frequency and "days inactive" threshold, toggle auto-deactivate on. That's it.

### Do I need to install anything on my storefront theme?

No. The app only talks to Shopify's Admin API. It doesn't inject scripts, modify your theme, or run on your storefront.

---

## How it works

### What counts as "out of stock"?

A product is considered out of stock when **every variant** has zero inventory across all locations you track. If any variant has stock in any location, the product stays active.

### What's the "days inactive" threshold?

It's a grace period. A product has to be sold out for at least that many days before the app deactivates it. This prevents flapping — if a variant goes to zero briefly between receiving shipments, you don't want it to disappear and reappear every few hours.

Common settings:
- **1 day** — aggressive, great for fast-moving stores
- **7 days** — balanced, the default
- **30 days** — conservative, only hide truly dead products

### How often does the scan run?

You choose. Options range from every few minutes to once a month. Most merchants pick **daily** or **hourly**.

### Will it deactivate products I'm restocking soon?

Only if they've been at zero stock for longer than your "days inactive" threshold. Set the threshold to match your typical restock lead time and you're safe.

### Does it work with multi-location inventory?

Yes. A product is only flagged as out of stock when every tracked variant is at zero across all locations.

### Does it touch products I haven't opted in?

No. The app only deactivates products that meet your threshold. Products with stock stay active. Products you've already set to Draft or Archived are left alone.

---

## Reactivation

### How does auto-reactivation work?

When you enable the auto-reactivate toggle on the dashboard, the app monitors products it previously deactivated (tagged `auto-changed-draft`). The moment any of their variants get stock, the next scan flips them back to Active.

### Can I reactivate products manually?

Yes. Every product the app deactivates is tagged `auto-changed-draft` and appears in your admin. You can change any product back to Active with one click in Shopify's product editor — the app doesn't lock anything.

### What if I manually set a product to Draft for other reasons?

The app only touches products it previously deactivated itself (tracked via the `auto-changed-draft` tag). Drafts you created manually are never reactivated, even if they have stock.

---

## Pricing and billing

### What's included in the free trial?

Every plan has a 15-day free trial with full functionality. No credit card is charged until the trial ends, and you can cancel at any time from your Shopify admin.

### Which plan should I pick?

The app recommends one automatically based on your product count:
- Under 500 products → **Starter** ($4.99/month)
- 500–999 products → **Growth** ($6.99/month)
- 1,000+ products → **Pro** ($9.99/month)

You can override the recommendation and pick any plan.

### How does billing work?

Shopify handles all billing. Your subscription shows up on your regular Shopify invoice — there's no separate payment method to manage. We never see your card details.

### Can I change plans later?

Yes, anytime. Upgrades and downgrades apply on your next billing cycle — you won't be charged a prorated difference mid-month.

### What happens if I cancel?

You get a **3-day grace period** where the app keeps working. If you don't resubscribe within those 3 days, the scheduler pauses and the admin redirects to the pricing page. Your data and settings are preserved — resubscribe any time to pick up where you left off.

### What if Shopify's billing API is down when I try to use the app?

The app fails open: if we can't reach Shopify to verify your subscription, we use the last status we successfully verified. Paying merchants keep working normally during outages.

---

## Data and privacy

### What data does the app collect?

- Your shop domain and Shopify OAuth token
- Your product metadata (IDs, titles, SKUs, image URLs) at scan time
- Your app settings (scan frequency, threshold, toggles)
- Activity log of changes the app made
- Error traces when something breaks

### Does it collect any customer data?

No. The app doesn't run on your storefront and has no visibility into customer orders, emails, or behavior. See the [Privacy Policy](https://acostalabs.com/privacy) for full details.

### Where is my data stored?

On a private server we operate directly, behind Cloudflare's edge network. Not a third-party cloud database. Error traces go to Sentry; request metadata goes to Cloudflare. That's the full list.

### What happens to my data if I uninstall?

Within 48 hours of uninstall, we delete all your Sessions, Settings, and Activity Log rows. Shopify triggers this automatically via the `app/uninstalled` and `shop/redact` webhooks.

---

## Activity log and auditing

### Can I see what the app has done?

Yes — the **Activity Log** shows every change with a timestamp, product title, SKU, action (deactivate or reactivate), and method (AUTO, MANUAL, or AUTO-SWEEPER).

### What's the difference between AUTO, MANUAL, and AUTO-SWEEPER?

- **AUTO** — scheduled auto-deactivation found the product out of stock for longer than your threshold
- **MANUAL** — you ran a manual scan and selected the product yourself
- **AUTO-SWEEPER** — auto-reactivation brought a product back after stock returned

### How long is activity history kept?

For as long as the app is installed. It's deleted within 48 hours of uninstall.

---

## Troubleshooting

### I installed the app but nothing's happening

Check that:
1. Auto-deactivate is toggled **on** (Dashboard → Auto-Deactivate)
2. Your scan frequency isn't set to a very long interval (e.g., monthly)
3. You have products that have been zero-stock for longer than your "days inactive" threshold
4. Your subscription is active (no grace-period banner on the dashboard)

If everything looks right, run a **Manual Scan** to confirm the app can see your inventory.

### A product got deactivated but I wanted to keep it active

1. Open the product in Shopify admin
2. Change status back to Active
3. Remove the `auto-changed-draft` tag (optional — this stops auto-reactivation from touching it)

To prevent it happening again, increase your "days inactive" threshold or keep stock above zero on at least one variant.

### A product isn't being reactivated even though it has stock

Check:
1. Auto-reactivate toggle is on (Dashboard)
2. The product has the `auto-changed-draft` tag — only tagged products are monitored
3. At least one variant has inventory greater than zero
4. The next scan cycle hasn't run yet (wait for your configured interval)

### The app shows a "subscription grace period" banner

Your subscription was cancelled or billing failed. You have 3 days to pick a plan before the scheduler pauses. If you believe this is an error, check your Shopify billing page first, then email us.

### The app shows a "billing service temporarily unavailable" banner

Shopify's billing API is temporarily unreachable. The app continues to work based on your last-known subscription state. The banner clears on its own once the service recovers.

---

## Technical questions

### What permissions does the app need?

- `write_products` — to change product status between Active and Draft
- `read_inventory` — to check stock levels

Both are requested at install and required for the app to function.

### Does it work with headless / custom storefronts?

Yes. The app modifies product status via the Admin API. Any storefront that respects product status (Hydrogen, custom Next.js with Storefront API, etc.) will stop showing deactivated products automatically.

### Will this hurt my SEO?

Setting a product to Draft removes it from Shopify's sitemap. Search engines will eventually drop it from their index, which is usually what you want for genuinely out-of-stock items. If you restock the product and it goes back to Active, Shopify re-adds it to the sitemap — search engines re-discover it on their next crawl.

### Can I run this on a development store?

Yes. Install from the Shopify App Store on any store, including development stores. Billing runs in test mode on dev stores — no real charge.

### Does it work with metafields / product tags / custom apps I have?

Yes. The app only changes the `status` field and adds one tag (`auto-changed-draft`). Your metafields, other tags, inventory rules, and custom integrations are untouched.

---

## Support

### How do I contact you?

Email [support@acostalabs.com](mailto:support@acostalabs.com). We respond within 5 business days, usually faster.

Include your shop domain in the subject line so we can look up your account.

### Can I request a feature?

Yes — please do. Email us with what you're trying to accomplish and we'll let you know if it's on the roadmap.

### How do I report a bug?

Email [support@acostalabs.com](mailto:support@acostalabs.com) with:
- Your shop domain
- What you were doing when it happened
- What you expected vs. what actually happened
- A screenshot if relevant

We get automatic error alerts from Sentry, but a report with your context lets us fix it faster.
