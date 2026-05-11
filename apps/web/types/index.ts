export interface ChatMessage {
  id: string
  role: 'user' | 'assistant' | 'system'
  content: string
  richContent?: RichContent
  isStreaming?: boolean
  isTypingAnim?: boolean
  timestamp: Date
}

export interface RichContent {
  type: 'product_card' | 'carousel' | 'pricing_table' | 'form' | 'partner_grid' | 'company_info' | 'service_list' | 'comparison_table' | 'stats_card' | 'cta_button' | 'account_offer' | 'consultation_offer' | 'payment_qr' | 'document' | 'selection_list'
  data: any
}

export interface SuggestedPrompt {
  text: string
  icon: string
  category: string
}

export interface WSMessage {
  type: string
  session_id?: string
  content?: string
  role?: string
  rich_content?: RichContent
  message_id?: string
  token?: string
  suggestions?: SuggestedPrompt[]
  form_type?: string
  data?: any
  error?: string
  user_name?: string
  access_key?: string
}

export interface Product {
  id: string
  slug: string
  name: string
  tagline?: string
  description?: string
  category: string
  icon_url?: string
  cover_image_url?: string
  features: string[]
  pricing: PricingTier[]
  tech_stack: string[]
  delivery_model?: string
  demo_url?: string
  status: string
}

export interface PricingTier {
  name: string
  price: string
  period: string
  features: string[]
  highlighted?: boolean
}

export interface Partner {
  id: string
  name: string
  logo_url?: string
  description?: string
  testimonial?: string
  testimonial_author?: string
  is_featured: boolean
}

export interface FormField {
  name: string
  label: string
  type: string
  required: boolean
  placeholder?: string
  options?: string[]
}

export interface FormData {
  form_type: string
  title: string
  description?: string
  fields: FormField[]
  submit_label: string
}
