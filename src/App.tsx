import { Container, Paper } from '@material-ui/core';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AccessManager } from './components/access-manager';
import { ProtectedRoute } from './components/protected-route.tsx/proteced-route';
import { NavigationService } from './services/navigation-service';

const LandingPage = React.lazy(() => import('./pages/landing-page'));
const ProductCatalogPage = React.lazy(() => import('./pages/product-catalog-page'));
const BrandsCatalogPage = React.lazy(() => import('./pages/brands-catalog-page'));
const ErrorPage = React.lazy(() => import('./pages/error-page'));
const PageNotFoundPage = React.lazy(() => import('./pages/page-not-found-page'));

const App: React.FC = () => (
	<AccessManager>
		<Container maxWidth="md">
			<Paper>
				<BrowserRouter>
					<Suspense fallback={<div>Loading...</div>}>
						<Switch>

							<Route path={NavigationService.LANDING_PATH} exact={true}>
								<LandingPage />
							</Route>
							
							<ProtectedRoute path={NavigationService.PRODUCT_CATALOG_PATH}>
								<ProductCatalogPage />
							</ProtectedRoute>
							
							<ProtectedRoute path={NavigationService.BRANDS_CATALOG_PATH}>
								<BrandsCatalogPage />
							</ProtectedRoute>
							
							<Route path={NavigationService.ERROR_PATH}>
								<ErrorPage />
							</Route>

							<Route>
								<PageNotFoundPage />
							</Route>

						</Switch>
					</Suspense>
				</BrowserRouter>
			</Paper>
		</Container>
	</AccessManager>
)

export { App };
