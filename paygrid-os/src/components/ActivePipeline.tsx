import { useState } from 'react';
import { Search, Bell, Filter, MoreHorizontal, User, DollarSign, FileText, CheckCircle2, AlertCircle, Clock, X } from 'lucide-react';

interface ActivePipelineProps {
  isSidebarCollapsed?: boolean;
}

// Mock Data
const initialLeads = [
  { id: 1, name: 'Alice Johnson', stage: 'audit', amount: 450000, type: 'Purchase', score_start: 580, score_current: 580, days_in_stage: 2 },
  { id: 2, name: 'Bob Smith', stage: 'litigation', amount: 320000, type: 'Refinance', score_start: 610, score_current: 645, days_in_stage: 14 },
  { id: 3, name: 'Charlie Davis', stage: 'litigation', amount: 550000, type: 'Purchase', score_start: 595, score_current: 620, days_in_stage: 45 },
  { id: 4, name: 'Diana Evans', stage: 'graduated', amount: 410000, type: 'Purchase', score_start: 620, score_current: 710, days_in_stage: 5 },
  { id: 5, name: 'Ethan Hunt', stage: 'audit', amount: 600000, type: 'Jumbo', score_start: 640, score_current: 640, days_in_stage: 1 },
];

export function ActivePipeline({ isSidebarCollapsed = false }: ActivePipelineProps) {
  const [selectedLead, setSelectedLead] = useState<any>(null);

  const stages = [
    { id: 'audit', label: 'Audit', icon: FileText, color: 'bg-blue-500/10 text-blue-500 border-blue-500/20' },
    { id: 'litigation', label: 'Litigation', icon: Scale, color: 'bg-orange-500/10 text-orange-500 border-orange-500/20' },
    { id: 'graduated', label: 'Graduated', icon: CheckCircle2, color: 'bg-green-500/10 text-green-500 border-green-500/20' },
  ];

  const getLeadsByStage = (stageId: string) => {
    return initialLeads.filter(lead => lead.stage === stageId);
  };

  return (
    <div className={`flex-1 transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'ml-20' : 'ml-[280px]'}`}>
      
      {/* Header - consistent with other pages */}
      <header className="sticky top-0 h-20 bg-background/80 backdrop-blur-xl border-b border-border flex items-center justify-between px-8 z-40">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search leads..." 
              className="h-11 pl-11 pr-4 rounded-xl bg-muted/50 border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 w-80 transition-all"
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="relative p-2 rounded-xl hover:bg-muted transition-colors">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full ring-2 ring-background"></span>
          </button>
          <div className="flex items-center gap-4 pl-6 border-l border-border">
             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center ring-2 ring-primary/20">
              <span className="text-sm font-semibold text-primary">JD</span>
            </div>
          </div>
        </div>
      </header>

      <div className="p-8 h-[calc(100vh-80px)] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between mb-8">
           <div>
              <h1 className="text-3xl font-display mb-2">Active Pipeline</h1>
              <p className="text-muted-foreground">Track leads moving towards closing.</p>
           </div>
           <button className="flex items-center gap-2 px-4 py-2 bg-muted/50 hover:bg-muted rounded-lg text-sm font-medium transition-colors">
             <Filter className="w-4 h-4" />
             Filter
           </button>
        </div>

        {/* Kanban Board */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden">
          {stages.map((stage) => (
            <div key={stage.id} className="flex flex-col h-full bg-muted/10 rounded-2xl border border-border overflow-hidden">
              <div className={`p-4 border-b border-border flex items-center justify-between ${stage.color.replace('bg-', 'bg-opacity-20 ')}`}>
                 <div className="flex items-center gap-2">
                    {/* Replaced dynamic component usage for safety in this snippet, assuming standard icons */}
                    {stage.id === 'audit' && <FileText className="w-4 h-4" />}
                    {stage.id === 'litigation' && <AlertCircle className="w-4 h-4" />}
                    {stage.id === 'graduated' && <CheckCircle2 className="w-4 h-4" />}
                    <span className="font-semibold">{stage.label}</span>
                    <span className="bg-background/50 px-2 py-0.5 rounded-full text-xs font-mono ml-2">
                      {getLeadsByStage(stage.id).length}
                    </span>
                 </div>
                 <MoreHorizontal className="w-4 h-4 text-muted-foreground cursor-pointer" />
              </div>
              
              <div className="p-4 flex-1 overflow-y-auto space-y-3 scrollbar-hide">
                {getLeadsByStage(stage.id).map((lead) => (
                  <div 
                    key={lead.id} 
                    onClick={() => setSelectedLead(lead)}
                    className="bg-card hover:border-primary/50 border border-border p-4 rounded-xl cursor-pointer transition-all hover:shadow-md group relative"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2">
                         <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                            {lead.name.split(' ').map(n => n[0]).join('')}
                         </div>
                         <div>
                            <p className="font-medium text-sm group-hover:text-primary transition-colors">{lead.name}</p>
                            <p className="text-xs text-muted-foreground">{lead.type}</p>
                         </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Loan Potential</span>
                        <span className="font-mono font-medium">${(lead.amount / 1000)}k</span>
                      </div>
                       <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Est. Commission</span>
                        <span className="font-mono font-medium text-success">+${Math.round(lead.amount * 0.015).toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                       <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{lead.days_in_stage}d in stage</span>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lead Details Modal */}
      {selectedLead && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
             <div className="p-6 border-b border-border flex items-center justify-between">
                <h3 className="font-semibold text-lg">Lead Details</h3>
                <button onClick={() => setSelectedLead(null)} className="p-2 hover:bg-muted rounded-full">
                   <X className="w-4 h-4" />
                </button>
             </div>
             <div className="p-6 space-y-6">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">
                        {selectedLead.name.split(' ').map((n: string) => n[0]).join('')}
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">{selectedLead.name}</h2>
                        <p className="text-muted-foreground">{selectedLead.type} Loan</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div className="p-4 rounded-xl bg-muted/30">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Loan Potential</p>
                      <p className="text-xl font-mono font-bold">${selectedLead.amount.toLocaleString()}</p>
                   </div>
                   <div className="p-4 rounded-xl bg-success/10 border border-success/20">
                      <p className="text-xs text-success uppercase tracking-wider mb-1">Est. Commission</p>
                      <p className="text-xl font-mono font-bold text-success">${(selectedLead.amount * 0.015).toLocaleString()}</p>
                   </div>
                </div>

                <div className="space-y-4">
                   <h4 className="font-medium text-sm">Credit Repair Progress</h4>
                   <div className="flex items-center justify-between text-sm py-2 border-b border-border">
                      <span className="text-muted-foreground">Starting Score</span>
                      <span className="font-mono">{selectedLead.score_start}</span>
                   </div>
                    <div className="flex items-center justify-between text-sm py-2 border-b border-border">
                      <span className="text-muted-foreground">Current Score</span>
                      <span className="font-mono font-bold text-success">{selectedLead.score_current} (+{selectedLead.score_current - selectedLead.score_start})</span>
                   </div>
                    <div className="flex items-center justify-between text-sm py-2 border-b border-border">
                      <span className="text-muted-foreground">Stage</span>
                      <span className="capitalize px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">{selectedLead.stage}</span>
                   </div>
                </div>

                <button className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:brightness-110 transition-all">
                   View Full Profile
                </button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Scale(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  )
}
