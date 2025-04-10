export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      billing: {
        Row: {
          amount: number
          created_at: string | null
          id: string
          license_id: string
          period_end: string
          period_start: string
          status: string
        }
        Insert: {
          amount: number
          created_at?: string | null
          id?: string
          license_id: string
          period_end: string
          period_start: string
          status: string
        }
        Update: {
          amount?: number
          created_at?: string | null
          id?: string
          license_id?: string
          period_end?: string
          period_start?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "billing_license_id_fkey"
            columns: ["license_id"]
            isOneToOne: false
            referencedRelation: "licenses"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_categories: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          slug: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          slug: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          slug?: string
        }
        Relationships: []
      }
      blog_post_categories: {
        Row: {
          category_id: string
          post_id: string
        }
        Insert: {
          category_id: string
          post_id: string
        }
        Update: {
          category_id?: string
          post_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "blog_post_categories_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "blog_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blog_post_categories_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "blog_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      blog_posts: {
        Row: {
          author_id: string
          content: string
          created_at: string | null
          excerpt: string | null
          featured_image: string | null
          id: string
          order: number | null
          published_at: string | null
          slug: string
          status: string
          title: string
          updated_at: string | null
        }
        Insert: {
          author_id: string
          content: string
          created_at?: string | null
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          order?: number | null
          published_at?: string | null
          slug: string
          status?: string
          title: string
          updated_at?: string | null
        }
        Update: {
          author_id?: string
          content?: string
          created_at?: string | null
          excerpt?: string | null
          featured_image?: string | null
          id?: string
          order?: number | null
          published_at?: string | null
          slug?: string
          status?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      cms_content: {
        Row: {
          author_id: string | null
          content: Json
          content_type: string
          created_at: string | null
          id: string
          slug: string
          status: string
          title: string
          updated_at: string | null
        }
        Insert: {
          author_id?: string | null
          content: Json
          content_type: string
          created_at?: string | null
          id?: string
          slug: string
          status?: string
          title: string
          updated_at?: string | null
        }
        Update: {
          author_id?: string | null
          content?: Json
          content_type?: string
          created_at?: string | null
          id?: string
          slug?: string
          status?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      cms_content_types: {
        Row: {
          created_at: string | null
          id: string
          name: string
          schema: Json
          slug: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
          schema: Json
          slug: string
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
          schema?: Json
          slug?: string
        }
        Relationships: []
      }
      cms_users: {
        Row: {
          created_at: string | null
          email: string
          id: string
          role: string
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          role?: string
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          role?: string
        }
        Relationships: []
      }
      customers: {
        Row: {
          business_id: string
          created_at: string | null
          email: string | null
          id: string
          name: string
          notes: string | null
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          business_id: string
          created_at?: string | null
          email?: string | null
          id?: string
          name: string
          notes?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          business_id?: string
          created_at?: string | null
          email?: string | null
          id?: string
          name?: string
          notes?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customers_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      job_applications: {
        Row: {
          cover_letter: string | null
          created_at: string | null
          email: string
          first_name: string
          id: string
          job_id: string
          last_name: string
          linkedin: string | null
          phone: string
          resume_url: string
          status: string
          updated_at: string | null
        }
        Insert: {
          cover_letter?: string | null
          created_at?: string | null
          email: string
          first_name: string
          id?: string
          job_id: string
          last_name: string
          linkedin?: string | null
          phone: string
          resume_url: string
          status?: string
          updated_at?: string | null
        }
        Update: {
          cover_letter?: string | null
          created_at?: string | null
          email?: string
          first_name?: string
          id?: string
          job_id?: string
          last_name?: string
          linkedin?: string | null
          phone?: string
          resume_url?: string
          status?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      licenses: {
        Row: {
          business_id: string
          created_at: string | null
          expires_at: string
          id: string
          plan: string
          seats: number
          status: string
          updated_at: string | null
        }
        Insert: {
          business_id: string
          created_at?: string | null
          expires_at: string
          id?: string
          plan: string
          seats?: number
          status?: string
          updated_at?: string | null
        }
        Update: {
          business_id?: string
          created_at?: string | null
          expires_at?: string
          id?: string
          plan?: string
          seats?: number
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "licenses_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          business_id: string
          created_at: string | null
          customer_id: string
          due_date: string | null
          id: string
          status: string
          total_amount: number | null
          updated_at: string | null
        }
        Insert: {
          business_id: string
          created_at?: string | null
          customer_id: string
          due_date?: string | null
          id?: string
          status?: string
          total_amount?: number | null
          updated_at?: string | null
        }
        Update: {
          business_id?: string
          created_at?: string | null
          customer_id?: string
          due_date?: string | null
          id?: string
          status?: string
          total_amount?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orders_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          business_name: string | null
          created_at: string | null
          full_name: string | null
          id: string
          phone: string | null
          role: string | null
          updated_at: string | null
        }
        Insert: {
          business_name?: string | null
          created_at?: string | null
          full_name?: string | null
          id: string
          phone?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Update: {
          business_name?: string | null
          created_at?: string | null
          full_name?: string | null
          id?: string
          phone?: string | null
          role?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      support_tickets: {
        Row: {
          business_id: string
          created_at: string | null
          description: string
          id: string
          priority: string
          status: string
          title: string
          updated_at: string | null
        }
        Insert: {
          business_id: string
          created_at?: string | null
          description: string
          id?: string
          priority?: string
          status?: string
          title: string
          updated_at?: string | null
        }
        Update: {
          business_id?: string
          created_at?: string | null
          description?: string
          id?: string
          priority?: string
          status?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "support_tickets_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      ticket_messages: {
        Row: {
          created_at: string | null
          id: string
          message: string
          ticket_id: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          message: string
          ticket_id: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          message?: string
          ticket_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ticket_messages_ticket_id_fkey"
            columns: ["ticket_id"]
            isOneToOne: false
            referencedRelation: "support_tickets"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "ticket_messages_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      workstations: {
        Row: {
          business_id: string
          created_at: string | null
          id: string
          last_active: string | null
          name: string
          status: string
          updated_at: string | null
        }
        Insert: {
          business_id: string
          created_at?: string | null
          id?: string
          last_active?: string | null
          name: string
          status?: string
          updated_at?: string | null
        }
        Update: {
          business_id?: string
          created_at?: string | null
          id?: string
          last_active?: string | null
          name?: string
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "workstations_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
