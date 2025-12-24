import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { COMPONENT_CATEGORIES } from '../config/componentCategories';
import { cn } from '../../src/lib/utils';

const ComponentNavigation: React.FC = () => {
  const location = useLocation();
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(['basic', 'data-display', 'feedback'])
  );

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => {
      const next = new Set(prev);
      if (next.has(categoryId)) {
        next.delete(categoryId);
      } else {
        next.add(categoryId);
      }
      return next;
    });
  };

  const isComponentActive = (componentId: string) => {
    return location.pathname === `/components/${componentId}`;
  };

  return (
    <nav className="w-64 bg-white border-r border-gray-200 h-full flex flex-col">
      <div className="p-4 flex-shrink-0">
        <h2 className="text-lg font-bold mb-4 text-gray-800">组件列表</h2>
      </div>
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        {COMPONENT_CATEGORIES.map(category => {
          const hasExamples = category.components.some(c => c.hasExample);
          const isExpanded = expandedCategories.has(category.id);

          return (
            <div key={category.id} className="mb-4">
              <button
                onClick={() => toggleCategory(category.id)}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2 rounded-lg",
                  "text-left font-medium transition-colors",
                  "hover:bg-gray-100",
                  hasExamples ? "text-gray-900" : "text-gray-400"
                )}
              >
                <span>{category.name}</span>
                <span className={cn(
                  "transform transition-transform",
                  isExpanded ? "rotate-90" : ""
                )}>
                  ▶
                </span>
              </button>

              {isExpanded && (
                <ul className="mt-2 space-y-1 pl-2">
                  {category.components.map(component => (
                    <li key={component.id}>
                      <NavLink
                        to={`/components/${component.id}`}
                        className={cn(
                          "block px-3 py-2 rounded-md text-sm transition-colors",
                          component.hasExample
                            ? isComponentActive(component.id)
                              ? "bg-blue-50 text-blue-600 font-medium"
                              : "text-gray-700 hover:bg-gray-50"
                            : "text-gray-300 cursor-not-allowed"
                        )}
                        onClick={(e) => {
                          if (!component.hasExample) {
                            e.preventDefault();
                          }
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <span>{component.name}</span>
                          {!component.hasExample && (
                            <span className="text-xs text-gray-400">待开发</span>
                          )}
                        </div>
                        {component.hasExample && (
                          <p className="text-xs text-gray-500 mt-0.5">
                            {component.description}
                          </p>
                        )}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default ComponentNavigation;
