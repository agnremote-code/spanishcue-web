import {
  foreignKey,
  index,
  integer,
  primaryKey,
  sqliteTable,
  text,
  uniqueIndex,
} from "drizzle-orm/sqlite-core";

export const offerSettings = sqliteTable("offer_settings", {
  id: integer("id").primaryKey(),
  baseCents: integer("base_cents").notNull(),
  discountPercent: integer("discount_percent").notNull(),
  months: integer("months").notNull(),
  maxTeachers: integer("max_teachers").notNull(),
  revision: integer("revision").notNull().default(1),
});

export const founderLeads = sqliteTable(
  "founder_leads",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    email: text("email").notNull(),
    normalizedEmail: text("normalized_email").notNull(),
    displayName: text("display_name"),
    accountId: text("account_id"),
    sourcePath: text("source_path").notNull().default("/"),
    offerPriceCents: integer("offer_price_cents").notNull(),
    offerRevision: integer("offer_revision").notNull(),
    status: text("status").notNull().default("reserved"),
    marketingConsentAt: integer("marketing_consent_at").notNull(),
    createdAt: integer("created_at").notNull(),
    updatedAt: integer("updated_at").notNull(),
  },
  (table) => [
    uniqueIndex("founder_leads_normalized_email_unique").on(table.normalizedEmail),
    index("idx_founder_leads_status_created").on(table.status, table.createdAt),
  ],
);

/**
 * Provider-neutral account records. Firebase is only the current identity
 * source; the internal user id remains stable if authentication is migrated.
 */
export const users = sqliteTable(
  "users",
  {
    id: text("id").primaryKey(),
    email: text("email").notNull(),
    normalizedEmail: text("normalized_email").notNull(),
    displayName: text("display_name"),
    role: text("role").notNull().default("teacher"),
    status: text("status").notNull().default("active"),
    createdAt: integer("created_at").notNull(),
    updatedAt: integer("updated_at").notNull(),
    lastSignInAt: integer("last_sign_in_at").notNull(),
  },
  (table) => [
    uniqueIndex("users_normalized_email_unique").on(table.normalizedEmail),
    index("idx_users_status_last_sign_in").on(table.status, table.lastSignInAt),
  ],
);

export const authIdentities = sqliteTable(
  "auth_identities",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    provider: text("provider").notNull(),
    providerSubject: text("provider_subject").notNull(),
    providerEmail: text("provider_email"),
    emailVerified: integer("email_verified").notNull().default(0),
    createdAt: integer("created_at").notNull(),
    lastSeenAt: integer("last_seen_at").notNull(),
  },
  (table) => [
    uniqueIndex("auth_identities_provider_subject_unique").on(
      table.provider,
      table.providerSubject,
    ),
    index("idx_auth_identities_user_id").on(table.userId),
  ],
);

/**
 * Access is independent from the future billing provider. A Stripe, Paddle,
 * manual, or imported subscription can all grant the same product entitlement.
 */
export const accessGrants = sqliteTable(
  "access_grants",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    productCode: text("product_code").notNull(),
    accessLevel: text("access_level").notNull(),
    source: text("source").notNull(),
    sourceReference: text("source_reference"),
    planCode: text("plan_code"),
    status: text("status").notNull(),
    startsAt: integer("starts_at").notNull(),
    expiresAt: integer("expires_at"),
    createdAt: integer("created_at").notNull(),
    updatedAt: integer("updated_at").notNull(),
  },
  (table) => [
    uniqueIndex("access_grants_user_product_source_unique").on(
      table.userId,
      table.productCode,
      table.source,
    ),
    index("idx_access_grants_active_lookup").on(
      table.userId,
      table.productCode,
      table.status,
      table.expiresAt,
    ),
  ],
);

/** Payment-provider records are separate from access grants so that billing
 * history never becomes the authorization source by itself. */
export const billingSubscriptions = sqliteTable(
  "billing_subscriptions",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    provider: text("provider").notNull(),
    environment: text("environment").notNull().default("sandbox"),
    providerSubscriberId: text("provider_subscriber_id"),
    providerSubscriptionId: text("provider_subscription_id").notNull(),
    providerPlanId: text("provider_plan_id").notNull(),
    providerEventTime: integer("provider_event_time"),
    productCode: text("product_code").notNull(),
    offerCode: text("offer_code"),
    status: text("status").notNull().default("PENDING"),
    currentPeriodEnd: integer("current_period_end"),
    nextBillingTime: integer("next_billing_time"),
    createdAt: integer("created_at").notNull(),
    activatedAt: integer("activated_at"),
    firstPaymentAt: integer("first_payment_at"),
    paidThrough: integer("paid_through"),
    cancelledAt: integer("cancelled_at"),
    lastPaymentAt: integer("last_payment_at"),
    lastFailureAt: integer("last_failure_at"),
    updatedAt: integer("updated_at").notNull(),
  },
  (table) => [
    uniqueIndex("billing_subscriptions_provider_subscription_unique").on(
      table.provider,
      table.environment,
      table.providerSubscriptionId,
    ),
    index("idx_billing_subscriptions_user_status").on(table.userId, table.environment, table.status),
    index("idx_billing_subscriptions_offer_status").on(table.offerCode, table.status),
  ],
);

/** Exactly one row per offer code. The trigger in the migration increments
 * claimed atomically when an assignment is inserted. */
export const founderOfferState = sqliteTable(
  "founder_offer_state",
  {
    environment: text("environment").notNull().default("sandbox"),
    offerCode: text("offer_code").notNull(),
    limit: integer("limit").notNull(),
    claimed: integer("claimed").notNull().default(0),
    enabled: integer("enabled").notNull().default(1),
    updatedAt: integer("updated_at").notNull(),
  },
  (table) => [
    primaryKey({ columns: [table.environment, table.offerCode], name: "founder_offer_state_pk" }),
  ],
);

export const founderAssignments = sqliteTable(
  "founder_assignments",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    environment: text("environment").notNull().default("sandbox"),
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    subscriptionId: integer("subscription_id")
      .notNull()
      .references(() => billingSubscriptions.id, { onDelete: "cascade" }),
    offerCode: text("offer_code").notNull(),
    founderNumber: integer("founder_number").notNull(),
    createdAt: integer("created_at").notNull(),
  },
  (table) => [
    uniqueIndex("founder_assignments_user_offer_unique").on(table.environment, table.userId, table.offerCode),
    uniqueIndex("founder_assignments_subscription_unique").on(table.environment, table.subscriptionId),
    uniqueIndex("founder_assignments_offer_number_unique").on(table.environment, table.offerCode, table.founderNumber),
  ],
);

export const paymentWebhookEvents = sqliteTable(
  "payment_webhook_events",
  {
    provider: text("provider").notNull(),
    environment: text("environment").notNull().default("sandbox"),
    eventId: text("event_id").notNull(),
    eventType: text("event_type").notNull(),
    resourceId: text("resource_id"),
    receivedAt: integer("received_at").notNull(),
    processedAt: integer("processed_at"),
    processingStatus: text("processing_status").notNull().default("received"),
    errorCode: text("error_code"),
  },
  (table) => [
    primaryKey({ columns: [table.provider, table.environment, table.eventId], name: "payment_webhook_events_pk" }),
    index("idx_payment_webhook_events_resource").on(table.provider, table.environment, table.resourceId),
  ],
);

/** One row serializes checkout creation for a user/product/environment. */
export const billingCheckoutLocks = sqliteTable(
  "billing_checkout_locks",
  {
    environment: text("environment").notNull(),
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    productCode: text("product_code").notNull(),
    requestId: text("request_id").notNull(),
    status: text("status").notNull(),
    providerSubscriptionId: text("provider_subscription_id"),
    approvalUrl: text("approval_url"),
    heldUntil: integer("held_until").notNull(),
    createdAt: integer("created_at").notNull(),
    updatedAt: integer("updated_at").notNull(),
  },
  (table) => [
    primaryKey({ columns: [table.environment, table.userId, table.productCode], name: "billing_checkout_locks_pk" }),
    uniqueIndex("billing_checkout_locks_request_unique").on(table.environment, table.requestId),
  ],
);

/** Immutable provider transaction identity with mutable settlement status. */
export const billingPayments = sqliteTable(
  "billing_payments",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    subscriptionId: integer("subscription_id").notNull().references(() => billingSubscriptions.id, { onDelete: "cascade" }),
    provider: text("provider").notNull(),
    environment: text("environment").notNull(),
    providerPaymentId: text("provider_payment_id").notNull(),
    providerEventId: text("provider_event_id"),
    amountCents: integer("amount_cents").notNull(),
    currency: text("currency").notNull(),
    status: text("status").notNull(),
    occurredAt: integer("occurred_at").notNull(),
    paidThrough: integer("paid_through"),
    createdAt: integer("created_at").notNull(),
    updatedAt: integer("updated_at").notNull(),
  },
  (table) => [
    uniqueIndex("billing_payments_provider_payment_unique").on(table.provider, table.environment, table.providerPaymentId),
    index("idx_billing_payments_subscription_status").on(table.subscriptionId, table.status, table.occurredAt),
  ],
);

/** Transactional outbox. Analytics consumes first-paid separately from renewals and refunds. */
export const billingOutboxEvents = sqliteTable(
  "billing_outbox_events",
  {
    id: integer("id").primaryKey({ autoIncrement: true }),
    provider: text("provider").notNull(),
    environment: text("environment").notNull(),
    eventKey: text("event_key").notNull(),
    eventName: text("event_name").notNull(),
    userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
    subscriptionId: integer("subscription_id").notNull().references(() => billingSubscriptions.id, { onDelete: "cascade" }),
    paymentId: integer("payment_id").references(() => billingPayments.id, { onDelete: "set null" }),
    occurredAt: integer("occurred_at").notNull(),
    createdAt: integer("created_at").notNull(),
    deliveredAt: integer("delivered_at"),
  },
  (table) => [
    uniqueIndex("billing_outbox_events_key_unique").on(table.provider, table.environment, table.eventKey),
    index("idx_billing_outbox_events_pending").on(table.eventName, table.environment, table.deliveredAt, table.createdAt),
  ],
);

export const lessonProgress = sqliteTable(
  "lesson_progress",
  {
    userId: text("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    lessonId: integer("lesson_id").notNull(),
    state: text("state").notNull().default("opened"),
    progressPercent: integer("progress_percent").notNull().default(0),
    firstOpenedAt: integer("first_opened_at").notNull(),
    lastOpenedAt: integer("last_opened_at").notNull(),
    completedAt: integer("completed_at"),
  },
  (table) => [
    primaryKey({
      columns: [table.userId, table.lessonId],
      name: "lesson_progress_user_lesson_pk",
    }),
    index("idx_lesson_progress_user_recent").on(
      table.userId,
      table.lastOpenedAt,
    ),
  ],
);

export const students = sqliteTable(
  "students",
  {
    id: text("id").primaryKey(),
    ownerId: text("owner_id").notNull(),
    alias: text("alias").notNull(),
    lastName: text("last_name"),
    email: text("email"),
    level: text("level").notNull(),
    goal: text("goal").notNull().default(""),
    status: text("status").notNull().default("active"),
    createdAt: text("created_at").notNull(),
    updatedAt: text("updated_at").notNull(),
  },
  (table) => [
    uniqueIndex("students_id_owner_unique").on(table.id, table.ownerId),
    index("students_owner_status_idx").on(table.ownerId, table.status, table.updatedAt),
  ],
);

export const classRecords = sqliteTable(
  "class_records",
  {
    id: text("id").primaryKey(),
    ownerId: text("owner_id").notNull(),
    studentId: text("student_id").notNull(),
    lessonId: integer("lesson_id"),
    freeTitle: text("free_title"),
    startsAt: text("starts_at").notNull(),
    timezone: text("timezone").notNull(),
    durationMinutes: integer("duration_minutes"),
    status: text("status").notNull(),
    pedagogicalNote: text("pedagogical_note").notNull().default(""),
    nextStep: text("next_step").notNull().default(""),
    requestKey: text("request_key").notNull(),
    createdAt: text("created_at").notNull(),
    updatedAt: text("updated_at").notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.studentId, table.ownerId],
      foreignColumns: [students.id, students.ownerId],
    }).onDelete("cascade"),
    uniqueIndex("class_records_owner_request_key_unique").on(table.ownerId, table.requestKey),
    index("class_records_owner_student_date_idx").on(table.ownerId, table.studentId, table.startsAt),
    index("class_records_owner_date_idx").on(table.ownerId, table.startsAt),
  ],
);

/** Delivery reservations only; Firebase remains the authority for verification.
 * Never store ID tokens, action codes, email links, or service credentials here. */
export const verificationEmailDeliveries = sqliteTable(
  "verification_email_deliveries",
  {
    id: text("id").primaryKey(),
    identity: text("identity").notNull(),
    recipient: text("recipient").notNull(),
    requestKey: text("request_key").notNull(),
    kind: text("kind").notNull(),
    status: text("status").notNull().default("sending"),
    requestedAt: integer("requested_at").notNull(),
    providerId: text("provider_id"),
  },
  (table) => [
    uniqueIndex("verification_email_request_unique").on(table.identity, table.requestKey),
    index("verification_email_recipient_time").on(table.recipient, table.requestedAt),
  ],
);
