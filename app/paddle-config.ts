export const PADDLE_MONTHLY_PRICE_ID = "pri_01m38sk06dtyhga2d4h36rt5dc";
export const PADDLE_TRIAL_PRICE_ID = "pri_01m3xv2ybze2yve1phknvm3r4b";
export const PADDLE_PRODUCT_ID = "pro_01m38sbhv4c8756pat80kfhda0";
export const PADDLE_MONTHLY_CENTS = 1550;
export const PADDLE_TRIAL_CENTS = 200;
export type PaddleOffer = "monthly" | "trial";

export type PaddleRuntimeConfig = {
  apiKey: string;
  clientToken: string;
  priceId: string;
  trialPriceId?: string;
  /** Server-only compatibility for a subscription already paid before repricing. */
  legacyMonthly?: boolean;
  webhookSecret: string;
};

type PaddleEnv = Partial<Record<
  | "PADDLE_API_KEY"
  | "PADDLE_CLIENT_TOKEN"
  | "PADDLE_PRICE_ID"
  | "PADDLE_TRIAL_PRICE_ID"
  | "PADDLE_WEBHOOK_SECRET",
  string | undefined
>>;

export function paddleConfig(input: unknown): PaddleRuntimeConfig {
  const env = input && typeof input === "object" ? input as PaddleEnv : {};
  return {
    apiKey: env.PADDLE_API_KEY?.trim() || "",
    clientToken: env.PADDLE_CLIENT_TOKEN?.trim() || "",
    priceId: env.PADDLE_PRICE_ID?.trim() || PADDLE_MONTHLY_PRICE_ID,
    trialPriceId: env.PADDLE_TRIAL_PRICE_ID?.trim() || PADDLE_TRIAL_PRICE_ID,
    webhookSecret: env.PADDLE_WEBHOOK_SECRET?.trim() || "",
  };
}

export function paddleReady(config: PaddleRuntimeConfig) {
  return Boolean(config.apiKey && config.clientToken && config.priceId === PADDLE_MONTHLY_PRICE_ID && config.trialPriceId === PADDLE_TRIAL_PRICE_ID && config.webhookSecret);
}
