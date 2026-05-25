# One-Link Payment Bottleneck

The payment bottleneck is now reduced to one field:

`config/checkout.json -> audit49.checkoutUrl`

When a Payhip, Ko-fi, Stripe, or other payment URL exists, run:

```bash
node scripts/set-payment-link.mjs audit49 "https://YOUR-CHECKOUT-LINK"
git add config/checkout.json
git commit -m "Activate $49 audit checkout"
git push
```

The public checkout bridge will then redirect buyers from:

https://ycx1678.github.io/landing-sprint-studio/checkout/audit/

to the live payment page.

## Current Fallback

Until a payment URL exists, buyers can request an audit through:

https://github.com/ycx1678/landing-sprint-studio/issues/new/choose

This keeps the sales flow alive without exposing payment details or collecting sensitive information.

## Fastest Payment Link Options

Use the first account the user can log into:

1. **Payhip**: create a digital/service-style product for `$49 Landing Page Audit`.
2. **Ko-fi**: create a commission or shop item for `$49 Landing Page Audit`.
3. **Stripe Payment Link**: create a one-time `$49` payment link.

Required fields are in:

- `revenue-kit/payments/payhip-audit-fields.md`
- `revenue-kit/payments/kofi-audit-fields.md`
- `revenue-kit/payments/stripe-audit-fields.md`

