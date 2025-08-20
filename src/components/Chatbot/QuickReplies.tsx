import React from 'react';
import { m } from 'framer-motion';
import type { QuickReply } from './types';

interface QuickRepliesProps {
  replies: QuickReply[];
  onSelect: (value: string) => void;
}

export const QuickReplies: React.FC<QuickRepliesProps> = ({ replies, onSelect }) => {
  return (
    <div className="px-4 pb-2 flex flex-wrap gap-2">
      {replies.map((reply, index) => (
        <m.button
          key={reply.value}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          onClick={() => onSelect(reply.value)}
          className="px-4 py-2 bg-white border border-blue-600 text-blue-600 rounded-full text-sm hover:bg-blue-50 transition-colors flex items-center gap-2"
        >
          {reply.icon && <span>{reply.icon}</span>}
          {reply.text}
        </m.button>
      ))}
    </div>
  );
};