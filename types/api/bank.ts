export interface FixedDeposits {}
export interface BankResponse {
  bank_type: string;
  customer_care_number: string;
  establishment_year: number;
  id: string;
  investability_status: string;
  is_insured: boolean;
  is_popular: boolean;
  logo_url: string;
  name: string;
  rbi_license_url: string;
}
export interface FixedDeposit {
  bank: BankResponse;
  fd_id: string;
  in_denomination_of: number;
  interest_payout_type: string;
  investor_type: string;
  is_loan_against_fd_allowed: boolean;
  is_partial_withdrawal_allowed: boolean;
  is_pre_mature_withdrawal_allowed: boolean;
  max_deposit: number;
  max_tenure_in_days: number;
  min_deposit: number;
  min_tenure_in_days: number;
  rate: number;
  raw_tenure: string;
  tenure: string;
}

export interface InterestData {
  fixed_deposits: Array<FixedDeposit>;
  highest_interest_fd: FixedDeposit;
  recommended_fds: Array<RecommendedFD>;
}
export interface RecommendedFD {
  description: string;
  fixed_deposit_response: FixedDeposit;
  icon_url: string;
}
export interface BankAwards {
  received_by: string;
  title: string;
}
export interface BankCustomerTestomonial {
  comment: string;
  designation: string;
  name: string;
  picture_url: string;
}
export interface BankFaq {
  answer: string;
  question: string;
}
export interface BankPersonnel {
  description: string;
  heading: string;
  name: string;
  picture_url: string;
}

export interface SafeBanks {
  bank_id: string;
  logo_url: string;
}

export interface StableAnalysisData {
  description: string;
}
export interface InvestNowMessage {
  message: string;
}
export interface BankProps {
  about_bank_info: string;
  assurance_line: string;
  assurance_logo_url: string;
  bank_award: Array<BankAwards>;
  bank_customer_testimonial: Array<BankCustomerTestomonial>;
  bank_faq: Array<BankFaq>;
  bank_prominent_personnel: Array<BankPersonnel>;
  bank_response: BankResponse;
  fd_booking_stats: string;
  invest_now_message: Array<InvestNowMessage>;
  general_citizen_interest_data: InterestData;
  rate_last_updated_at: string;
  rates_pdf_url: string;
  safe_banks: Array<SafeBanks>;
  senior_citizen_roi_max_difference: number;
  senior_citizen_interest_data: InterestData;
  stable_money_analysis: Array<StableAnalysisData>;
}
