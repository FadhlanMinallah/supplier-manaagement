'use client';
import React from 'react';
import { Card, Statistic } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

interface StatsCardProps {
  title: string;
  value: string | number;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
  color?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ 
  title, 
  value, 
  change, 
  isPositive, 
  icon,
  color = 'text-blue-600'
}) => {
  return (
    <Card className="stat-card border-l-4 border-l-blue-500 hover:border-l-blue-600">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <div className={`text-2xl ${color}`}>
              {icon}
            </div>
            <h3 className="text-sm font-medium text-gray-600 truncate">
              {title}
            </h3>
          </div>
          
          <div className="space-y-2">
            <div className="text-2xl font-bold text-gray-900">
              {typeof value === 'number' ? value.toLocaleString() : value}
            </div>
            
            <div className={`
              flex items-center gap-1 text-xs font-medium
              ${isPositive ? 'text-green-600' : 'text-red-600'}
            `}>
              {isPositive ? (
                <ArrowUpOutlined className="text-xs" />
              ) : (
                <ArrowDownOutlined className="text-xs" />
              )}
              <span>{change}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default StatsCard;