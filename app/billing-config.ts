export const PRO_PRODUCT_CODE = "spanishcue-pro";
export const FOUNDER_PLAN_CODE = "spanishcue-founder-monthly";
export const APPROVED_PRICE_CENTS = 1500;
export const APPROVED_CURRENCY = "USD";
export const APPROVED_FOUNDER_LIMIT = 1000;
export const APPROVED_INTERVAL = { unit: "MONTH", count: 1 } as const;

export type BillingRuntimeConfig = {
  paypalEnv: "sandbox" | "live";
  clientId: string;
  clientSecret: string;
  webhookId: string;
  productId: string;
  founderPlanId: string;
  publicCheckoutEnabled: boolean;
  supervisedUserId: string;
  founderOffer: {
    enabled: boolean;
    code: string;
    limit: number;
    priceUsd: number;
  };
};

type RuntimeValues = Partial<Record<
  | "PAYPAL_ENV"
  | "PAYPAL_CLIENT_ID"
  | "PAYPAL_CLIENT_SECRET"
  | "PAYPAL_WEBHOOK_ID"
  | "PAYPAL_PRODUCT_ID"
  | "PAYPAL_FOUNDER_PLAN_ID"
  | "PAYPAL_SANDBOX_CLIENT_ID"
  | "PAYPAL_SANDBOX_CLIENT_SECRET"
  | "PAYPAL_SANDBOX_WEBHOOK_ID"
  | "PAYPAL_SANDBOX_PRODUCT_ID"
  | "PAYPAL_SANDBOX_FOUNDER_PLAN_ID"
  | "PAYPAL_LIVE_CLIENT_ID"
  | "PAYPAL_LIVE_CLIENT_SECRET"
  | "PAYPAL_LIVE_WEBHOOK_ID"
  | "PAYPAL_LIVE_PRODUCT_ID"
  | "PAYPAL_LIVE_FOUNDER_PLAN_ID"
  | "PAYPAL_PUBLIC_CHECKOUT_ENABLED"
  | "PAYPAL_LIVE_SUPERVISED_USER_ID"
  | "FOUNDER_OFFER_ENABLED"
  | "FOUNDER_OFFER_CODE"
  | "FOUNDER_LIMIT"
  | "FOUNDER_PRICE_USD",
  string | undefined
>>;

function bool(value: string | undefined, fallback: boolean) {
  if (value === undefined || value === "") return fallback;
  return value.trim().toLowerCase() === "true";
}

function whole(value: string | undefined, fallback: number, min: number, max: number) {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed >= min && parsed <= max ? parsed : fallback;
}

export function billingConfig(values: unknown): BillingRuntimeConfig {
  const runtime = values && typeof values === "object" ? values as RuntimeValues : {};
  const paypalEnv = runtime.PAYPAL_ENV === "live" ? "live" : "sandbox";
  const prefix = paypalEnv === "live" ? "PAYPAL_LIVE" : "PAYPAL_SANDBOX";
  const scoped = (suffix: "CLIENT_ID" | "CLIENT_SECRET" | "WEBHOOK_ID" | "PRODUCT_ID" | "FOUNDER_PLAN_ID") => {
    const key = `${prefix}_${suffix}` as keyof RuntimeValues;
    const scopedValue = runtime[key]?.trim();
    // The old names remain a Sandbox-only bridge. Live can never inherit them.
    if (scopedValue || paypalEnv === "live") return scopedValue || "";
    return runtime[`PAYPAL_${suffix}` as keyof RuntimeValues]?.trim() || "";
  };
  return {
    paypalEnv,
    clientId: scoped("CLIENT_ID"),
    clientSecret: scoped("CLIENT_SECRET"),
    webhookId: scoped("WEBHOOK_ID"),
    productId: scoped("PRODUCT_ID"),
    founderPlanId: scoped("FOUNDER_PLAN_ID"),
    publicCheckoutEnabled: bool(runtime.PAYPAL_PUBLIC_CHECKOUT_ENABLED, paypalEnv === "sandbox"),
    supervisedUserId: paypalEnv === "live" ? runtime.PAYPAL_LIVE_SUPERVISED_USER_ID?.trim() || "" : "",
    founderOffer: {
      enabled: bool(runtime.FOUNDER_OFFER_ENABLED, true),
      code: runtime.FOUNDER_OFFER_CODE?.trim() || "founder-1000-usd15-monthly",
      limit: whole(runtime.FOUNDER_LIMIT, APPROVED_FOUNDER_LIMIT, 1, APPROVED_FOUNDER_LIMIT),
      priceUsd: whole(runtime.FOUNDER_PRICE_USD, 15, 1, 100000),
    },
  };
}

export function paypalReady(config: BillingRuntimeConfig) {
  return Boolean(config.clientId && config.clientSecret && config.webhookId && config.productId && config.founderPlanId);
}

export function billingReadiness(config: BillingRuntimeConfig, liveLegalReady: boolean) {
  if (!paypalReady(config)) return "unconfigured" as const;
  if (config.paypalEnv === "live") return liveLegalReady ? "live_ready" as const : "unconfigured" as const;
  return "sandbox_ready" as const;
}

export function checkoutAllowed(config: BillingRuntimeConfig, userId: string | null) {
  if (!paypalReady(config)) return false;
  if (config.publicCheckoutEnabled) return true;
  return config.paypalEnv === "live" && Boolean(userId && userId === config.supervisedUserId);
}

export function safeReturnTo(value: unknown) {
  return typeof value === "string" && value.startsWith("/") && !value.startsWith("//") && value.length <= 300
    ? value
    : "/";
}
