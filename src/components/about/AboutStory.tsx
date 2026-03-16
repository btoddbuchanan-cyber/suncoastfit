"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";

export function AboutStory() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <AnimatedSection>
          <div className="prose prose-lg max-w-none" style={{ fontFamily: "var(--font-nunito)" }}>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
              I started running as a small child. As the family stories go, each evening
              after dinner I would jump down out of my chair and start running laps around
              the house. My running passion has continued through my adult life, regularly
              participating in 5K, 10K, half marathon and marathon events.
            </p>

            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
              I am an American Council on Exercise (ACE) certified Personal Trainer. I have
              a degree in Occupational Therapy and have worked for many years in rehabilitation
              both in hospitals and in the private sector. My specialty certifications include
              Osteofit, Mat Pilates, Weight Training, Older Adult &amp; Aquatic Fitness.
            </p>

            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
              Being a long-time lover of fitness, I made a career change from rehabilitation
              into the fitness world as a personal trainer and group fitness instructor. After
              moving to the Sunshine Coast BC, my dream of starting a fitness company came true
              with the launch of Suncoastfit.
            </p>

            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
              Leaning on my expertise as an occupational therapist, I love working with clients
              of all ages and levels of fitness, helping them thrive in their lives.
            </p>
          </div>
        </AnimatedSection>

        {/* Photo gallery */}
        <AnimatedSection delay={0.05}>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="relative aspect-square rounded-[var(--radius-lg)] overflow-hidden">
              <Image
                src="/images/about/sandra-paddleboard.jpg"
                alt="Sandra paddleboarding on the Sunshine Coast"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-square rounded-[var(--radius-lg)] overflow-hidden">
              <Image
                src="/images/about/suncoastfit-group.jpg"
                alt="Suncoastfit group fitness session"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="relative aspect-square rounded-[var(--radius-lg)] overflow-hidden col-span-2 md:col-span-1">
              <Image
                src="/images/about/gallery-1.jpg"
                alt="Sandra outdoors on the Sunshine Coast"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Pilates section */}
        <AnimatedSection delay={0.1}>
          <div className="mt-16 p-8 lg:p-12 bg-[var(--color-primary-lighter)] rounded-[var(--radius-xl)] border border-[var(--color-primary)]/10">
            <h2
              className="text-2xl lg:text-3xl mb-4 text-[var(--color-primary-dark)]"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              My Love for Pilates
            </h2>
            <p
              className="text-lg text-[var(--color-text-secondary)] leading-relaxed"
              style={{ fontFamily: "var(--font-nunito)" }}
            >
              One of my favourite forms of exercise, both as an instructor and as a
              participant, is Mat Pilates. The benefits include increased core strength
              (which helps prevent injury during other activities), improved posture, and
              a deeper mind-body connection. I also teach Osteofit, a class designed by
              the BC Women&apos;s Hospital Osteoporosis Program.
            </p>
          </div>
        </AnimatedSection>

        {/* Todd's Story */}
        <AnimatedSection delay={0.15}>
          <div className="mt-16">
            <h2
              className="text-2xl lg:text-3xl mb-6"
              style={{ fontFamily: "var(--font-dm-serif)" }}
            >
              The Story Behind{" "}
              <span className="text-[var(--color-accent)]">Walker to Runner</span>
            </h2>
            <div style={{ fontFamily: "var(--font-nunito)" }}>
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
                My first Walker to 30 Minute Runner participant was my husband Todd. Todd
                had been active when young, playing hockey, running, and skiing. Over the
                years, his weight had inched up, his job was largely sedentary, and with a
                young family, finding time to stay fit was a challenge.
              </p>

              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
                Injuries over the years had taken their toll, including a compound fracture
                to his right leg from a snowmobile accident. We embarked on a Walker to Runner
                program in our local park. I suggested we start with five-minute walk intervals
                and 30-second run intervals.
              </p>

              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-6">
                Both of us remember very clearly the first day Todd was able to complete one
                full loop through our favorite trails — 1.5 kilometres of non-stop running.
                It was a high-five moment. We continued to build on this, entering 5K, 10K,
                and half marathon events together.
              </p>
            </div>
            <div className="mt-8 relative aspect-[16/9] max-w-lg rounded-[var(--radius-xl)] overflow-hidden shadow-[var(--shadow-lg)]">
              <Image
                src="/images/about/sandra-todd.jpg"
                alt="Sandra and Todd Buchanan"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 50vw"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
