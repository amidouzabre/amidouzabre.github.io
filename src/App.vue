<script setup>
import { ref } from 'vue'
import {
  Code2,
  ExternalLink,
  FolderGit2,
  Github,
  Layers,
  Mail,
  MapPin,
  Send,
  Smartphone,
  Sparkles,
  Terminal,
  CheckCircle2,
} from 'lucide-vue-next'
import { profile, stack, projects } from './data/portfolio'

const form = ref({
  name: '',
  email: '',
  message: '',
})

function createComposeUrl(subject, body = '') {
  const params = new URLSearchParams({
    view: 'cm',
    fs: '1',
    to: profile.email,
    su: subject,
    body,
  })

  return `https://mail.google.com/mail/?${params.toString()}`
}

const contactComposeUrl = createComposeUrl('Contact Portfolio')

function handleSubmit() {
  const subject = `Contact Portfolio — ${form.value.name}`
  const body =
    `Nom : ${form.value.name}\nEmail : ${form.value.email}\n\nMessage :\n${form.value.message}`

  window.location.assign(createComposeUrl(subject, body))
}
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <!-- Navigation -->
    <header class="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" class="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-white">
          <span class="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            AZ
          </span>
          <span>amidouzabre<span class="text-emerald-400">.dev</span></span>
        </a>

        <nav class="hidden items-center gap-7 text-sm text-slate-400 sm:flex">
          <a href="#about" class="transition hover:text-white">À propos</a>
          <a href="#stack" class="transition hover:text-white">Stack</a>
          <a href="#projects" class="transition hover:text-white">Projets</a>
          <a href="#contact" class="transition hover:text-white">Contact</a>
        </nav>

        <a
          :href="profile.github"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-3.5 py-1.5 text-xs font-medium text-slate-200 transition hover:border-slate-700 hover:bg-slate-800"
        >
          <Github class="h-4 w-4" />
          <span>GitHub</span>
        </a>
      </div>
    </header>

    <main class="mx-auto max-w-5xl px-6">
      <!-- Hero -->
      <section class="py-20 sm:py-28">
        <div
          class="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-300"
        >
          <span class="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          {{ profile.availability }}
        </div>

        <h1 class="max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl sm:leading-[1.1]">
          {{ profile.name }}
          <span class="mt-2 block bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
            {{ profile.role }}
          </span>
        </h1>

        <p class="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
          {{ profile.tagline }}
        </p>

        <div class="mt-4 flex items-center gap-2 text-sm text-slate-500">
          <MapPin class="h-4 w-4 text-emerald-400" />
          <span>{{ profile.location }}</span>
          <span class="mx-2 text-slate-700">•</span>
          <span>Fondateur de <strong class="font-medium text-slate-300">Sioori</strong></span>
        </div>

        <div class="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            class="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
          >
            <FolderGit2 class="h-4 w-4" />
            Découvrir mes réalisations
          </a>
          <a
            href="#contact"
            class="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/70 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-600 hover:bg-slate-800"
          >
            <Mail class="h-4 w-4" />
            Me contacter
          </a>
        </div>
      </section>

      <!-- À propos -->
      <section id="about" class="border-t border-slate-800/80 py-16">
        <div class="grid gap-10 md:grid-cols-12">
          <div class="md:col-span-4">
            <h2 class="flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wider text-emerald-400">
              <Terminal class="h-4 w-4" />
              01. À propos
            </h2>
            <p class="mt-2 text-2xl font-bold text-white">Ingénierie & Produit</p>
          </div>
          <div class="space-y-4 text-base leading-relaxed text-slate-300 md:col-span-8">
            <p v-for="(paragraph, index) in profile.bio" :key="index">
              {{ paragraph }}
            </p>
            <div class="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-3">
              <div class="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                <p class="font-mono text-2xl font-bold text-white">Full-Stack</p>
                <p class="mt-1 text-xs text-slate-400">Laravel • Vue.js • Inertia</p>
              </div>
              <div class="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
                <p class="font-mono text-2xl font-bold text-white">Mobile</p>
                <p class="mt-1 text-xs text-slate-400">Flutter & Play Store</p>
              </div>
              <div class="col-span-2 rounded-xl border border-slate-800 bg-slate-900/50 p-4 sm:col-span-1">
                <p class="font-mono text-2xl font-bold text-white">HarvardX</p>
                <p class="mt-1 text-xs text-slate-400">Certifié Web Programming</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Stack Technique -->
      <section id="stack" class="border-t border-slate-800/80 py-16">
        <div class="mb-10">
          <h2 class="flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wider text-emerald-400">
            <Layers class="h-4 w-4" />
            02. Stack Technique
          </h2>
          <p class="mt-2 text-2xl font-bold text-white">Technologies & Outils maîtrisés</p>
        </div>

        <div class="grid gap-6 sm:grid-cols-2">
          <div
            v-for="group in stack"
            :key="group.category"
            class="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition hover:border-slate-700"
          >
            <h3 class="text-base font-semibold text-white">{{ group.category }}</h3>
            <div class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="tech in group.items"
                :key="tech"
                class="rounded-md border border-slate-800 bg-slate-950 px-3 py-1 font-mono text-xs text-slate-300"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Projets -->
      <section id="projects" class="border-t border-slate-800/80 py-16">
        <div class="mb-10">
          <h2 class="flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wider text-emerald-400">
            <Code2 class="h-4 w-4" />
            03. Projets Sélectionnés
          </h2>
          <p class="mt-2 text-2xl font-bold text-white">Applications en production & Open-Source</p>
        </div>

        <div class="space-y-8">
          <article
            v-for="project in projects"
            :key="project.title"
            class="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 transition hover:border-emerald-500/40"
          >
            <div class="flex flex-wrap items-center justify-between gap-3">
              <span
                class="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-medium text-emerald-300"
              >
                <Sparkles class="h-3.5 w-3.5" />
                {{ project.badge }}
              </span>

              <div class="flex flex-wrap items-center gap-3">
                <a
                  v-for="link in project.links"
                  :key="link.url"
                  :href="link.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  :class="[
                    'inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition',
                    link.primary
                      ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
                      : 'border border-slate-700 bg-slate-950 text-slate-200 hover:border-slate-600',
                  ]"
                >
                  <Smartphone v-if="link.label.includes('Play')" class="h-3.5 w-3.5" />
                  <ExternalLink v-else class="h-3.5 w-3.5" />
                  {{ link.label }}
                </a>
              </div>
            </div>

            <h3 class="mt-4 text-xl font-bold text-white sm:text-2xl">
              {{ project.title }}
            </h3>

            <p class="mt-3 leading-relaxed text-slate-300">
              {{ project.description }}
            </p>

            <ul class="mt-4 space-y-2">
              <li
                v-for="item in project.highlights"
                :key="item"
                class="flex items-start gap-2 text-sm text-slate-400"
              >
                <CheckCircle2 class="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <span>{{ item }}</span>
              </li>
            </ul>

            <div class="mt-6 flex flex-wrap gap-2 border-t border-slate-800/80 pt-4">
              <span
                v-for="t in project.tech"
                :key="t"
                class="rounded bg-slate-950 px-2.5 py-1 font-mono text-xs text-emerald-300/90 border border-slate-800"
              >
                {{ t }}
              </span>
            </div>
          </article>
        </div>
      </section>

      <!-- Contact -->
      <section id="contact" class="border-t border-slate-800/80 py-16">
        <div class="grid gap-10 md:grid-cols-12">
          <div class="md:col-span-5">
            <h2 class="flex items-center gap-2 font-mono text-sm font-semibold uppercase tracking-wider text-emerald-400">
              <Mail class="h-4 w-4" />
              04. Contact
            </h2>
            <p class="mt-2 text-2xl font-bold text-white">Démarrons un projet ensemble</p>
            <p class="mt-3 text-sm leading-relaxed text-slate-400">
              Besoin d'une application web sur mesure, d'une application mobile Flutter ou d'un accompagnement technique via mon agence Sioori ? Écrivez-moi directement.
            </p>

            <div class="mt-6 space-y-3 text-sm">
              <a
                :href="profile.github"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 text-slate-300 transition hover:text-emerald-400"
              >
                <Github class="h-4 w-4 text-emerald-400" />
                github.com/amidouzabre
              </a>
              <a
                :href="contactComposeUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 text-slate-300 transition hover:text-emerald-400"
              >
                <Mail class="h-4 w-4 text-emerald-400" />
                {{ profile.email }}
              </a>
            </div>
          </div>

          <form
            @submit.prevent="handleSubmit"
            class="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:col-span-7"
          >
            <div>
              <label class="mb-1.5 block text-xs font-medium text-slate-300">Votre nom</label>
              <input
                v-model="form.name"
                type="text"
                required
                placeholder="Ex. Jean Kouassi"
                class="w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label class="mb-1.5 block text-xs font-medium text-slate-300">Votre email</label>
              <input
                v-model="form.email"
                type="email"
                required
                placeholder="vous@exemple.com"
                class="w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label class="mb-1.5 block text-xs font-medium text-slate-300">Votre besoin</label>
              <textarea
                v-model="form.message"
                rows="4"
                required
                placeholder="Décrivez brièvement votre projet web, mobile ou logiciel..."
                class="w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-sm text-white placeholder-slate-600 focus:border-emerald-500 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              class="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400 cursor-pointer"
            >
              <Send class="h-4 w-4" />
              Préparer le message dans Gmail
            </button>

            <p class="text-center text-xs text-slate-400">
              Un brouillon Gmail prérempli va s'ouvrir. Vous pourrez le relire et l'envoyer depuis Gmail.
            </p>
          </form>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500">
      <p>© {{ new Date().getFullYear() }} {{ profile.name }} — Propulsé avec Vue.js, Tailwind CSS & GitHub Pages.</p>
    </footer>
  </div>
</template>