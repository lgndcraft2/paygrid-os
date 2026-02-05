import { useState } from 'react';
import { Filter, MoreHorizontal, FileText, CheckCircle2, AlertCircle, Clock, X, ChevronRight, Activity, FileStack, StickyNote } from 'lucide-react';

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

export function ActivePipeline({ }: ActivePipelineProps) {
  const [selectedLead, setSelectedLead] = useState<any>(null);
  const [showFullProfile, setShowFullProfile] = useState(false);

  const stages = [
    { id: 'audit', label: 'Audit', icon: FileText, color: 'bg-blue-500/10 text-blue-500 border-blue-500/20' },
    { id: 'litigation', label: 'Litigation', icon: Scale, color: 'bg-orange-500/10 text-orange-500 border-orange-500/20' },
    { id: 'graduated', label: 'Graduated', icon: CheckCircle2, color: 'bg-green-500/10 text-green-500 border-green-500/20' },
  ];

  const getLeadsByStage = (stageId: string) => {
    return initialLeads.filter(lead => lead.stage === stageId);
  };

  return (
      <div className="p-4 md:p-8 h-full md:overflow-hidden flex flex-col">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 md:mb-8 gap-4 md:gap-0">
           <div>
              <h1 className="text-2xl md:text-3xl font-display mb-2">Active Leads</h1>
              <p className="text-muted-foreground">Detailed client timeline and document storage.</p>
           </div>
           <button className="flex items-center gap-2 px-4 py-2 bg-muted/50 hover:bg-muted rounded-lg text-sm font-medium transition-colors">
             <Filter className="w-4 h-4" />
             Filter
           </button>
        </div>

        {/* Kanban Board */}
        <div className="md:flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 md:overflow-hidden h-auto">
          {stages.map((stage) => (
            <div key={stage.id} className="flex flex-col md:h-full h-auto bg-muted/10 rounded-2xl border border-border md:overflow-hidden">
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
              
              <div className="p-4 md:flex-1 md:overflow-y-auto h-auto space-y-3 scrollbar-hide">
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

      {/* Lead Details Modal - Quick View */}
      {selectedLead && !showFullProfile && (
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

                <button 
                  onClick={() => setShowFullProfile(true)}
                  className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:brightness-110 transition-all flex items-center justify-center gap-2"
                >
                   View Full Profile
                   <ChevronRight className="w-4 h-4" />
                </button>
             </div>
          </div>
        </div>
      )}

      {/* Full Profile Slide-over */}
      {selectedLead && showFullProfile && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => { setShowFullProfile(false); setSelectedLead(null); }} />
          <div className="absolute inset-y-0 right-0 w-full max-w-2xl bg-card border-l border-border shadow-2xl transform transition-transform duration-300 ease-in-out animate-in slide-in-from-right h-full flex flex-col">
            
            {/* Slide-over Header */}
            <div className="h-20 border-b border-border flex items-center justify-between px-6 bg-muted/10">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                      {selectedLead.name.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                  <div>
                      <h2 className="text-lg font-bold">{selectedLead.name}</h2>
                      <p className="text-xs text-muted-foreground">{selectedLead.type} Loan</p>
                  </div>
               </div>
               <div className="flex items-center gap-2">
                 <button onClick={() => setShowFullProfile(false)} className="p-2 hover:bg-muted rounded-full text-muted-foreground">
                    Back to Quick View
                 </button>
                 <button onClick={() => { setShowFullProfile(false); setSelectedLead(null); }} className="p-2 hover:bg-muted rounded-full">
                    <X className="w-5 h-5" />
                 </button>
               </div>
            </div>

            {/* Slide-over Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
               
               {/* Key Metrics */}
               <div className="grid grid-cols-3 gap-4">
                   <div className="p-4 rounded-xl bg-card border border-border">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Loan Potential</p>
                      <p className="text-xl font-mono font-bold">${selectedLead.amount.toLocaleString()}</p>
                   </div>
                   <div className="p-4 rounded-xl bg-success/10 border border-success/20">
                      <p className="text-xs text-success uppercase tracking-wider mb-1">Est. Commission</p>
                      <p className="text-xl font-mono font-bold text-success">${(selectedLead.amount * 0.015).toLocaleString()}</p>
                   </div>
                   <div className="p-4 rounded-xl bg-card border border-border">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Credit Score</p>
                      <div className="flex items-baseline gap-2">
                         <span className="text-xl font-mono font-bold">{selectedLead.score_current}</span>
                         <span className="text-xs text-success">+{selectedLead.score_current - selectedLead.score_start}</span>
                      </div>
                   </div>
               </div>

               {/* Tabs / Sections */}
               <div className="space-y-6">
                  
                  <div className="space-y-4">
                     <div className="flex items-center gap-2 text-lg font-semibold">
                        <Activity className="w-5 h-5 text-primary" />
                        <h3>Recent Activity</h3>
                     </div>
                     <div className="relative border-l-2 border-border ml-2.5 space-y-6 pl-6 pb-2">
                        <div className="relative">
                           <div className="absolute -left-[31px] w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                           <p className="text-sm font-medium">Credit Score Updated</p>
                           <p className="text-xs text-muted-foreground">Score increased by 15 points</p>
                           <p className="text-xs text-muted-foreground mt-1">Today, 9:41 AM</p>
                        </div>
                        <div className="relative">
                           <div className="absolute -left-[31px] w-4 h-4 rounded-full bg-muted border-4 border-background"></div>
                           <p className="text-sm font-medium">Stage Changed</p>
                           <p className="text-xs text-muted-foreground">Moved from Audit to Litigation</p>
                           <p className="text-xs text-muted-foreground mt-1">Yesterday, 2:30 PM</p>
                        </div>
                     </div>
                  </div>

                  <div className="space-y-4">
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-lg font-semibold">
                           <FileStack className="w-5 h-5 text-primary" />
                           <h3>Documents</h3>
                        </div>
                        <button className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-lg hover:bg-primary/20 transition-colors font-medium">
                           Upload
                        </button>
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl border border-border hover:border-primary/50 transition-colors cursor-pointer flex items-center gap-3">
                           <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                              <FileText className="w-5 h-5 text-red-500" />
                           </div>
                           <div className="overflow-hidden">
                              <p className="text-sm font-medium truncate">Credit_Report_Jan.pdf</p>
                              <p className="text-xs text-muted-foreground">2.4 MB</p>
                           </div>
                        </div>
                        <div className="p-4 rounded-xl border border-border hover:border-primary/50 transition-colors cursor-pointer flex items-center gap-3">
                           <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                              <FileText className="w-5 h-5 text-blue-500" />
                           </div>
                           <div className="overflow-hidden">
                              <p className="text-sm font-medium truncate">Pre_Approval_Letter.pdf</p>
                              <p className="text-xs text-muted-foreground">1.1 MB</p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="space-y-4">
                     <div className="flex items-center gap-2 text-lg font-semibold">
                        <StickyNote className="w-5 h-5 text-primary" />
                        <h3>Notes</h3>
                     </div>
                     <textarea 
                        className="w-full h-32 rounded-xl bg-muted/20 border border-border p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                        placeholder="Add a note about this lead..."
                     ></textarea>
                     <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:brightness-110">
                        Save Note
                     </button>
                  </div>

               </div>
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
