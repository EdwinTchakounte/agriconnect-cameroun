import { createClient } from '@supabase/supabase-js';
import { supabaseConfig } from '../config/supabase';

const supabaseUrl = supabaseConfig.url;
const supabaseAnonKey = supabaseConfig.anonKey;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase configuration');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types pour TypeScript
export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  status?: 'new' | 'read' | 'replied' | 'archived';
  created_at?: string;
  updated_at?: string;
}

// Service pour les messages de contact
export class ContactService {
  // Envoyer un nouveau message
  static async sendMessage(messageData: Omit<ContactMessage, 'id' | 'created_at' | 'updated_at' | 'status'>) {
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .insert([messageData])
        .select()
        .single();

      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      console.error('Error sending contact message:', error);
      return { success: false, error: error.message };
    }
  }

  // Récupérer tous les messages (pour admin)
  static async getAllMessages() {
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      console.error('Error fetching contact messages:', error);
      return { success: false, error: error.message };
    }
  }

  // Mettre à jour le statut d'un message
  static async updateMessageStatus(id: string, status: ContactMessage['status']) {
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .update({ status })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      console.error('Error updating message status:', error);
      return { success: false, error: error.message };
    }
  }

  // Supprimer un message
  static async deleteMessage(id: string) {
    try {
      const { error } = await supabase
        .from('contact_messages')
        .delete()
        .eq('id', id);

      if (error) throw error;
      return { success: true };
    } catch (error) {
      console.error('Error deleting message:', error);
      return { success: false, error: error.message };
    }
  }
}