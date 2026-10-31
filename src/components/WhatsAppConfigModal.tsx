import React, { useState } from 'react';
import { Phone, Check, ExternalLink, X } from 'lucide-react';

interface WhatsAppConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentNumber: string;
  onSave: (newNumber: string) => void;
}

export const WhatsAppConfigModal: React.FC<WhatsAppConfigModalProps> = ({
  isOpen,
  onClose,
  currentNumber,
  onSave,
}) => {
  const [inputValue, setInputValue] = useState(currentNumber || '');
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = inputValue.replace(/\D/g, '');
    onSave(cleaned);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div 
        className="w-full max-w-md bg-[#faf7f5] rounded-2xl border border-[#dfd5cc] shadow-2xl p-6 relative overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#786054] hover:text-[#2c221e] rounded-full hover:bg-[#ece5de] transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-[#3d2f2a] text-[#faf7f5] flex items-center justify-center">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <h3 id="modal-title" className="text-lg font-serif font-semibold text-[#2c221e]">
              Configurar WhatsApp
            </h3>
            <p className="text-xs text-[#786054]">
              Defina o número para agendamento direto
            </p>
          </div>
        </div>

        <p className="text-sm text-[#4a3a33] mb-4 leading-relaxed">
          Informe o número de telefone com DDD (somente dígitos). Por exemplo:{' '}
          <span className="font-mono text-xs bg-[#ece5de] px-1.5 py-0.5 rounded">31987654321</span>.
          Todos os botões do site serão atualizados instantaneamente.
        </p>

        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-[#4a3a33] mb-1.5 uppercase tracking-wider">
              Número com DDD
            </label>
            <input
              type="tel"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ex: 31 99999-9999"
              className="w-full px-4 py-2.5 rounded-xl border border-[#dfd5cc] bg-white text-[#2c221e] placeholder-[#aa9282] focus:outline-hidden focus:ring-2 focus:ring-[#786054]/40"
              autoFocus
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm text-[#786054] hover:text-[#2c221e] hover:bg-[#ece5de] rounded-xl transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-sm font-medium text-[#faf7f5] bg-[#3d2f2a] hover:bg-[#2c221e] rounded-xl transition-colors flex items-center gap-2 shadow-xs"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  Salvo!
                </>
              ) : (
                'Salvar Número'
              )}
            </button>
          </div>
        </form>

        {currentNumber && (
          <div className="mt-4 pt-4 border-t border-[#dfd5cc] flex items-center justify-between text-xs text-[#786054]">
            <span>Número ativo: <strong className="font-mono text-[#2c221e]">+{currentNumber.startsWith('55') ? currentNumber : `55 ${currentNumber}`}</strong></span>
            <a
              href={`https://wa.me/${currentNumber.startsWith('55') ? currentNumber : `55${currentNumber}`}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-[#2c221e] underline"
            >
              Testar link <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
