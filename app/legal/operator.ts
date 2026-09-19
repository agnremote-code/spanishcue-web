export type LegalOperator = {
  legalName: string;
  entityType: string;
  address: string;
  country: string;
  taxId: string;
  registration: string;
  supportEmail: string;
  privacyEmail: string;
  governingLaw: string;
  courts: string;
  effectiveDate: string;
  refundPolicyEs: string;
  refundPolicyEn: string;
  withdrawalPolicyEs: string;
  withdrawalPolicyEn: string;
};

type LegalEnv = Partial<Record<
  | "LEGAL_NAME"
  | "LEGAL_ENTITY_TYPE"
  | "LEGAL_ADDRESS"
  | "LEGAL_COUNTRY"
  | "LEGAL_TAX_ID"
  | "LEGAL_REGISTRATION"
  | "LEGAL_SUPPORT_EMAIL"
  | "LEGAL_PRIVACY_EMAIL"
  | "LEGAL_GOVERNING_LAW"
  | "LEGAL_COURTS"
  | "LEGAL_EFFECTIVE_DATE"
  | "LEGAL_REFUND_POLICY_ES"
  | "LEGAL_REFUND_POLICY_EN"
  | "LEGAL_WITHDRAWAL_POLICY_ES"
  | "LEGAL_WITHDRAWAL_POLICY_EN"
  | "CHESPANISH_OWNER_EMAIL",
  string | undefined
>>;

function value(env: LegalEnv, key: keyof LegalEnv) {
  return env[key]?.trim() || "";
}

export function legalOperator(input: unknown): LegalOperator | null {
  const env = input && typeof input === "object" ? input as LegalEnv : {};
  const operator: LegalOperator = {
    legalName: value(env, "LEGAL_NAME"),
    entityType: value(env, "LEGAL_ENTITY_TYPE"),
    address: value(env, "LEGAL_ADDRESS"),
    country: value(env, "LEGAL_COUNTRY"),
    taxId: value(env, "LEGAL_TAX_ID"),
    registration: value(env, "LEGAL_REGISTRATION"),
    supportEmail: value(env, "LEGAL_SUPPORT_EMAIL"),
    privacyEmail: value(env, "LEGAL_PRIVACY_EMAIL"),
    governingLaw: value(env, "LEGAL_GOVERNING_LAW"),
    courts: value(env, "LEGAL_COURTS"),
    effectiveDate: value(env, "LEGAL_EFFECTIVE_DATE"),
    refundPolicyEs: value(env, "LEGAL_REFUND_POLICY_ES"),
    refundPolicyEn: value(env, "LEGAL_REFUND_POLICY_EN"),
    withdrawalPolicyEs: value(env, "LEGAL_WITHDRAWAL_POLICY_ES"),
    withdrawalPolicyEn: value(env, "LEGAL_WITHDRAWAL_POLICY_EN"),
  };
  return Object.values(operator).every(Boolean) ? operator : null;
}

export function publicContactEmail(input: unknown): string | null {
  const env = input && typeof input === "object" ? input as LegalEnv : {};
  const candidate = value(env, "LEGAL_SUPPORT_EMAIL")
    || value(env, "LEGAL_PRIVACY_EMAIL")
    || value(env, "CHESPANISH_OWNER_EMAIL");
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(candidate) ? candidate : null;
}
