import React from 'react';
import { LucideIcon, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

interface StatCardProps {
  title: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  trend?: {
    value: string;
    positive: boolean;
    label?: string;
  };
  icon: LucideIcon;
  iconColor?: string;
  glowColor?: string;
  description?: string;
  onClick?: () => void;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  trend,
  icon: Icon,
  iconColor = 'text-blue-400',
  glowColor = 'from-blue-500/20 to-indigo-500/0',
  description,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={`glass-panel-interactive rounded-2xl p-5 relative overflow-hidden group ${
        onClick ? 'cursor-pointer' : ''
      }`}
    >
      {/* Top subtle highlight line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent group-hover:via-purple-500/60 transition-all duration-500" />
      
      {/* Background glow radial */}
      <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${glowColor} rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500`} />

      <div className="flex items-start justify-between relative z-10">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wider font-semibold text-slate-400">
            {title}
          </p>
          <div className="flex items-baseline space-x-2 pt-1">
            <AnimatedCounter
              value={value}
              prefix={prefix}
              suffix={suffix}
              decimals={decimals}
              className="text-2xl lg:text-3xl font-extrabold text-white"
            />
          </div>
        </div>

        <div className={`p-3 rounded-xl bg-slate-800/80 border border-slate-700/60 ${iconColor} group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>

      {(trend || description) && (
        <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 relative z-10">
          {trend ? (
            <div className="flex items-center space-x-1.5 font-medium">
              <span
                className={`flex items-center px-1.5 py-0.5 rounded text-[11px] font-bold ${
                  trend.positive
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                }`}
              >
                {trend.positive ? (
                  <ArrowUpRight className="w-3 h-3 mr-0.5" />
                ) : (
                  <ArrowDownRight className="w-3 h-3 mr-0.5" />
                )}
                {trend.value}
              </span>
              {trend.label && <span className="text-slate-400 truncate max-w-[160px]">{trend.label}</span>}
            </div>
          ) : (
            <span className="text-slate-400">{description}</span>
          )}
        </div>
      )}
    </div>
  );
};
