import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Clock, User, Phone, MessageSquare, Eye, Archive, Trash2, RefreshCw } from 'lucide-react';
import { DashboardLayout } from '../../components/dashboard/DashboardLayout';
import { ContactService, ContactMessage } from '../../lib/supabase';

export const Messages: React.FC = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [filter, setFilter] = useState<'all' | 'new' | 'read' | 'replied'>('all');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    setLoading(true);
    const result = await ContactService.getAllMessages();
    if (result.success) {
      setMessages(result.data || []);
    }
    setLoading(false);
  };

  const handleStatusUpdate = async (id: string, status: ContactMessage['status']) => {
    const result = await ContactService.updateMessageStatus(id, status);
    if (result.success) {
      setMessages(prev => prev.map(msg => 
        msg.id === id ? { ...msg, status } : msg
      ));
      if (selectedMessage?.id === id) {
        setSelectedMessage(prev => prev ? { ...prev, status } : null);
      }
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce message ?')) {
      const result = await ContactService.deleteMessage(id);
      if (result.success) {
        setMessages(prev => prev.filter(msg => msg.id !== id));
        if (selectedMessage?.id === id) {
          setSelectedMessage(null);
        }
      }
    }
  };

  const filteredMessages = messages.filter(msg => 
    filter === 'all' || msg.status === filter
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'read': return 'bg-yellow-100 text-yellow-800';
      case 'replied': return 'bg-green-100 text-green-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'new': return 'Nouveau';
      case 'read': return 'Lu';
      case 'replied': return 'Répondu';
      case 'archived': return 'Archivé';
      default: return status;
    }
  };

  return (
    <DashboardLayout currentPage="messages">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Messages de Contact</h1>
            <p className="text-gray-600">Gérez les messages reçus via le formulaire de contact</p>
          </div>
          
          <motion.button
            onClick={fetchMessages}
            className="flex items-center space-x-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RefreshCw className="w-4 h-4" />
            <span>Actualiser</span>
          </motion.button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {[
            { key: 'all', label: 'Tous', count: messages.length },
            { key: 'new', label: 'Nouveaux', count: messages.filter(m => m.status === 'new').length },
            { key: 'read', label: 'Lus', count: messages.filter(m => m.status === 'read').length },
            { key: 'replied', label: 'Répondus', count: messages.filter(m => m.status === 'replied').length }
          ].map(({ key, label, count }) => (
            <button
              key={key}
              onClick={() => setFilter(key as any)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === key
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border'
              }`}
            >
              {label} ({count})
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Messages List */}
          <div className="bg-white rounded-2xl shadow-lg">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Messages ({filteredMessages.length})
              </h2>
            </div>
            
            <div className="max-h-96 overflow-y-auto">
              {loading ? (
                <div className="p-6 text-center">
                  <div className="animate-spin w-8 h-8 border-2 border-emerald-600 border-t-transparent rounded-full mx-auto"></div>
                  <p className="text-gray-600 mt-2">Chargement...</p>
                </div>
              ) : filteredMessages.length === 0 ? (
                <div className="p-6 text-center text-gray-500">
                  <Mail className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>Aucun message trouvé</p>
                </div>
              ) : (
                <div className="space-y-1">
                  {filteredMessages.map((message) => (
                    <motion.div
                      key={message.id}
                      className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors border-l-4 ${
                        selectedMessage?.id === message.id 
                          ? 'bg-emerald-50 border-l-emerald-600' 
                          : message.status === 'new' 
                            ? 'border-l-blue-500' 
                            : 'border-l-transparent'
                      }`}
                      onClick={() => setSelectedMessage(message)}
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="font-medium text-gray-900">{message.name}</span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(message.status || 'new')}`}>
                          {getStatusLabel(message.status || 'new')}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                        <Mail className="w-3 h-3" />
                        <span>{message.email}</span>
                      </div>
                      
                      <p className="text-sm text-gray-700 line-clamp-2 mb-2">
                        {message.message}
                      </p>
                      
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        <span>
                          {new Date(message.created_at || '').toLocaleDateString('fr-FR', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Message Detail */}
          <div className="bg-white rounded-2xl shadow-lg">
            {selectedMessage ? (
              <div className="h-full flex flex-col">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{selectedMessage.name}</h3>
                      <p className="text-gray-600">{selectedMessage.email}</p>
                      {selectedMessage.phone && (
                        <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                          <Phone className="w-3 h-3" />
                          <span>{selectedMessage.phone}</span>
                        </div>
                      )}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedMessage.status || 'new')}`}>
                      {getStatusLabel(selectedMessage.status || 'new')}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>
                      Reçu le {new Date(selectedMessage.created_at || '').toLocaleDateString('fr-FR', {
                        weekday: 'long',
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1 p-6">
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Message
                    </h4>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                        {selectedMessage.message}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {selectedMessage.status === 'new' && (
                      <button
                        onClick={() => handleStatusUpdate(selectedMessage.id!, 'read')}
                        className="flex items-center space-x-2 bg-yellow-600 text-white px-3 py-2 rounded-lg hover:bg-yellow-700 transition-colors text-sm"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Marquer comme lu</span>
                      </button>
                    )}
                    
                    {(selectedMessage.status === 'new' || selectedMessage.status === 'read') && (
                      <button
                        onClick={() => handleStatusUpdate(selectedMessage.id!, 'replied')}
                        className="flex items-center space-x-2 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Marquer comme répondu</span>
                      </button>
                    )}
                    
                    <button
                      onClick={() => handleStatusUpdate(selectedMessage.id!, 'archived')}
                      className="flex items-center space-x-2 bg-gray-600 text-white px-3 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm"
                    >
                      <Archive className="w-4 h-4" />
                      <span>Archiver</span>
                    </button>
                    
                    <button
                      onClick={() => handleDelete(selectedMessage.id!)}
                      className="flex items-center space-x-2 bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Supprimer</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <Mail className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                  <p>Sélectionnez un message pour voir les détails</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};