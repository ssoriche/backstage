/*
 * Copyright 2021 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const SEMVER_PARTS: {
  major: 'major';
  minor: 'minor';
  patch: 'patch';
} = {
  major: 'major',
  minor: 'minor',
  patch: 'patch',
} as const;

export const DISABLE_CACHE = {
  headers: {
    'If-None-Match': '',
  },
} as const;

export const VERSIONING_STRATEGIES: {
  semver: 'semver';
  calver: 'calver';
} = {
  semver: 'semver',
  calver: 'calver',
} as const;
