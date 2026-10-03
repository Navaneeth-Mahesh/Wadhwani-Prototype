import React, { useState } from 'react';
import { ONBOARDING_QUESTIONS } from '../data/careerData';
import { ProgressBar } from '../components/ProgressBar';
import { ArrowRight, ArrowLeft, Check, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export function OnboardingView({ userAnswers, onUpdateAnswers, onFinishOnboarding }) {
  const [currentStep, setCurrentStep] = useState(0);

  const totalSteps = ONBOARDING_QUESTIONS.length;
  const isCompleted = currentStep >= totalSteps;
  const currentQ = ONBOARDING_QUESTIONS[currentStep];

  // Helper for chip toggles
  const handleToggleChip = (questionIndex, option) => {
    const existing = Array.isArray(userAnswers[questionIndex]) ? [...userAnswers[questionIndex]] : [];
    const idx = existing.indexOf(option);
    if (idx < 0) {
      existing.push(option);
    } else {
      existing.splice(idx, 1);
    }
    onUpdateAnswers(questionIndex, existing);
  };

  // Helper for text inputs
  const handleTextChange = (questionIndex, value) => {
    onUpdateAnswers(questionIndex, value);
  };

  const handleNext = () => {
    if (currentStep === totalSteps - 1) {
      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // ignore if not supported
      }
      setCurrentStep(totalSteps);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  // Completion Screen
  if (isCompleted) {
    const rawName = String(userAnswers[0] || '').trim();
    const displayName = rawName ? rawName.split(/\s+/)[0] : 'Innovator';

    return (
      <div className="onboarding-shell animate-fade-in">
        <div className="card elevated" style={{ textAlign: 'center', padding: '48px 32px' }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg, var(--ac), var(--ac2))', color: '#000', display: 'grid', placeItems: 'center', margin: '0 auto 20px', boxShadow: '0 0 25px var(--ac-glow)' }}>
            <Sparkles size={32} />
          </div>

          <h2>Your AI Career Twin Is Calibrated!</h2>
          <p className="text-mut" style={{ fontSize: '1.05rem', margin: '12px auto 28px', maxWidth: '480px' }}>
            Congratulations, <b>{displayName}</b>. We have synthesized your education, core skills, and ambition parameters into your autonomous Career Twin.
          </p>

          <div style={{ display: 'inline-flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '520px', margin: '0 auto 32px' }}>
            {Object.values(userAnswers)
              .flat()
              .filter(Boolean)
              .slice(0, 8)
              .map((val, idx) => (
                <span key={idx} className="tag tag-ok">
                  <Check size={12} /> {String(val)}
                </span>
              ))}
          </div>

          <div>
            <button
              type="button"
              className="btn btn-lg"
              onClick={onFinishOnboarding}
            >
              <span>Explore My Career Path Recommendations</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentAnswer = userAnswers[currentStep] || (currentQ.type === 'chips' ? [] : '');
  const progressPercent = Math.round(((currentStep + 1) / totalSteps) * 100);

  return (
    <div className="onboarding-shell animate-fade-in">
      <div className="card elevated">
        {/* Progress Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', fontSize: '0.85rem' }}>
          <span className="text-mut">
            Step {currentStep + 1} of {totalSteps}
          </span>
          <span style={{ fontWeight: 700, color: 'var(--acd)' }}>
            {progressPercent}% Complete
          </span>
        </div>

        <ProgressBar value={progressPercent} height={7} />

        {/* Question Content */}
        <div style={{ marginTop: '32px', marginBottom: '32px' }}>
          <span className="tag" style={{ marginBottom: '10px' }}>
            Diagnostic {currentStep + 1}
          </span>
          <h2 style={{ fontSize: '1.65rem', marginBottom: '6px' }}>{currentQ.title}</h2>
          <p className="text-mut" style={{ fontSize: '0.94rem' }}>{currentQ.subtitle}</p>

          {/* Form Control */}
          <div style={{ marginTop: '24px' }}>
            {currentQ.type === 'chips' ? (
              <div>
                <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--mut)', marginBottom: '8px' }}>
                  Select all relevant options
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {currentQ.options.map((opt, i) => {
                    const isSelected = Array.isArray(currentAnswer) && currentAnswer.includes(opt);
                    return (
                      <button
                        type="button"
                        key={i}
                        className={`chip ${isSelected ? 'active' : ''}`}
                        onClick={() => handleToggleChip(currentStep, opt)}
                      >
                        {isSelected && <Check size={14} />}
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div>
                <input
                  type="text"
                  placeholder={currentQ.placeholder}
                  value={currentAnswer}
                  onChange={(e) => handleTextChange(currentStep, e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleNext();
                  }}
                  autoFocus
                />
              </div>
            )}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--line)', paddingTop: '20px' }}>
          {currentStep > 0 ? (
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={handleBack}
            >
              <ArrowLeft size={16} />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          <button
            type="button"
            className="btn btn-sm"
            onClick={handleNext}
          >
            <span>{currentStep === totalSteps - 1 ? 'Calibrate Twin' : 'Continue'}</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
