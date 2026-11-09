import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const isSuccess = toast.type === 'success';
  const isError = toast.type === 'error';

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slideUp">
      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900/95 border border-indigo-500/30 text-white shadow-2xl backdrop-blur-md max-w-md">
        {isSuccess && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
        {isError && <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />}
        {!isSuccess && !isError && <Info className="w-5 h-5 text-indigo-400 shrink-0" />}

        <p className="text-xs sm:text-sm text-slate-200 font-medium">
          {toast.message}
        </p>

        <button
          onClick={onClose}
          className="p-1 rounded text-slate-400 hover:text-white transition-colors ml-2"
          aria-label="Dismiss toast"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
